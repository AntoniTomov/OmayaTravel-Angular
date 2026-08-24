import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { FormHoneypot } from '../../shared/forms/form-honeypot';
import { FormStatus } from '../../shared/forms/form-status';
import { submitPublicForm } from '../../shared/forms/public-form-api';

const ENQUIRE_HERO_IMAGE = '/assets/images/enquire-us/enquire-us-bgr.webp';

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
}
