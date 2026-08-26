import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { FormHoneypot } from '../../shared/forms/form-honeypot';
import { FormStatus } from '../../shared/forms/form-status';
import { submitPublicForm } from '../../shared/forms/public-form-api';

const ENQUIRE_HERO_IMAGE = '/assets/images/enquire-us/enquire-us-bgr.webp';
const STORAGE_KEY = 'omaya-enquire-form';

interface CountryCode {
  label: string;
  value: string;
}

interface EnquiryFormState {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  emailMe: boolean;
  whatsapp: boolean;
  travelDate: string;
  additionalInformation: string;
}

const COUNTRY_CODES: readonly CountryCode[] = [
  { label: 'US +1', value: '+1' },
  { label: 'UK +44', value: '+44' },
  { label: 'BG +359', value: '+359' },
  { label: 'DE +49', value: '+49' },
  { label: 'FR +33', value: '+33' },
  { label: 'IT +39', value: '+39' },
  { label: 'ES +34', value: '+34' },
  { label: 'NL +31', value: '+31' },
  { label: 'CA +1', value: '+1' },
  { label: 'AU +61', value: '+61' },
];

const EMPTY_FORM_STATE: EnquiryFormState = {
  name: '',
  email: '',
  countryCode: '+1',
  phone: '',
  emailMe: false,
  whatsapp: false,
  travelDate: '',
  additionalInformation: '',
};

@Component({
  selector: 'app-enquire-page',
  imports: [RouterLink, FormHoneypot, FormStatus],
  templateUrl: './enquire-page.html',
  styleUrl: './enquire-page.scss',
})
export class EnquirePage {
  private readonly analytics = inject(OmayaAnalytics);

  protected readonly heroImage = ENQUIRE_HERO_IMAGE;
  protected readonly submitStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly submitMessage = signal('');
  protected readonly countryCodes = COUNTRY_CODES;
  protected readonly formState = signal<EnquiryFormState>(this.loadFormState());
  protected readonly minTravelDate = computed(() => new Date().toISOString().slice(0, 10));

  protected updateField<K extends keyof EnquiryFormState>(
    field: K,
    value: EnquiryFormState[K],
  ): void {
    this.formState.update((state) => {
      const nextState = {
        ...state,
        [field]: value,
      };

      this.saveFormState(nextState);

      return nextState;
    });
  }

  protected async sendEnquiry(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const preferredContactMethod = [
      formData.get('email-me') ? 'Email me' : '',
      formData.get('whatsapp') ? 'Call me via WhatsApp' : '',
    ]
      .filter(Boolean)
      .join(', ');

    this.submitStatus.set('sending');
    this.submitMessage.set('');

    const result = await submitPublicForm({
      formType: 'enquire-now',
      fields: {
        name: String(formData.get('name') ?? '').trim(),
        email: String(formData.get('email') ?? '').trim(),
        countryCode: String(formData.get('country-code') ?? '').trim(),
        phone: String(formData.get('phone') ?? '').trim(),
        preferredContactMethod,
        travelDate: String(formData.get('travel-date') ?? '').trim(),
        additionalInformation: String(formData.get('additional-information') ?? '').trim(),
      },
      honeypot: String(formData.get('website') ?? ''),
    });

    if (result.ok) {
      form.reset();
      this.updateField('name', '');
      this.updateField('email', '');
      this.updateField('phone', '');
      this.updateField('emailMe', false);
      this.updateField('whatsapp', false);
      this.updateField('travelDate', '');
      this.updateField('additionalInformation', '');
      this.submitStatus.set('sent');
      this.submitMessage.set(
        'Thank you. We received your enquiry and will reply as soon as possible.',
      );
      this.analytics.trackEvent('generate_lead', {
        form_type: 'enquire-now',
      });
      return;
    }

    this.submitStatus.set('error');
    this.submitMessage.set(result.message ?? 'We could not send your enquiry right now.');
  }

  private loadFormState(): EnquiryFormState {
    try {
      const storedValue = globalThis.sessionStorage?.getItem(STORAGE_KEY);

      return storedValue
        ? { ...EMPTY_FORM_STATE, ...JSON.parse(storedValue) }
        : { ...EMPTY_FORM_STATE };
    } catch {
      return { ...EMPTY_FORM_STATE };
    }
  }

  private saveFormState(state: EnquiryFormState): void {
    try {
      globalThis.sessionStorage?.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      return;
    }
  }
}
