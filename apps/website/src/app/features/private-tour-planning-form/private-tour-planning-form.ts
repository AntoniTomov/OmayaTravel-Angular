import { Component, inject, signal } from '@angular/core';

import {
  PrivateTourPlanningFormState,
  PrivateTourPlanningFormStateService,
} from './private-tour-planning-form-state';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { FormHoneypot } from '../../shared/forms/form-honeypot';
import { submitPublicForm } from '../../shared/forms/public-form-api';

const COUNTRY_CODES = [
  { flag: '🇺🇸', label: 'United States', code: '+1' },
  { flag: '🇬🇧', label: 'United Kingdom', code: '+44' },
  { flag: '🇧🇬', label: 'Bulgaria', code: '+359' },
  { flag: '🇦🇱', label: 'Albania', code: '+355' },
  { flag: '🇩🇿', label: 'Algeria', code: '+213' },
  { flag: '🇦🇩', label: 'Andorra', code: '+376' },
  { flag: '🇦🇷', label: 'Argentina', code: '+54' },
  { flag: '🇦🇲', label: 'Armenia', code: '+374' },
  { flag: '🇦🇺', label: 'Australia', code: '+61' },
  { flag: '🇦🇹', label: 'Austria', code: '+43' },
  { flag: '🇦🇿', label: 'Azerbaijan', code: '+994' },
  { flag: '🇧🇪', label: 'Belgium', code: '+32' },
  { flag: '🇧🇦', label: 'Bosnia and Herzegovina', code: '+387' },
  { flag: '🇧🇷', label: 'Brazil', code: '+55' },
  { flag: '🇨🇦', label: 'Canada', code: '+1' },
  { flag: '🇨🇱', label: 'Chile', code: '+56' },
  { flag: '🇨🇳', label: 'China', code: '+86' },
  { flag: '🇨🇴', label: 'Colombia', code: '+57' },
  { flag: '🇭🇷', label: 'Croatia', code: '+385' },
  { flag: '🇨🇾', label: 'Cyprus', code: '+357' },
  { flag: '🇨🇿', label: 'Czechia', code: '+420' },
  { flag: '🇩🇰', label: 'Denmark', code: '+45' },
  { flag: '🇪🇬', label: 'Egypt', code: '+20' },
  { flag: '🇪🇪', label: 'Estonia', code: '+372' },
  { flag: '🇫🇮', label: 'Finland', code: '+358' },
  { flag: '🇩🇪', label: 'Germany', code: '+49' },
  { flag: '🇫🇷', label: 'France', code: '+33' },
  { flag: '🇬🇪', label: 'Georgia', code: '+995' },
  { flag: '🇬🇷', label: 'Greece', code: '+30' },
  { flag: '🇭🇰', label: 'Hong Kong', code: '+852' },
  { flag: '🇭🇺', label: 'Hungary', code: '+36' },
  { flag: '🇮🇸', label: 'Iceland', code: '+354' },
  { flag: '🇮🇳', label: 'India', code: '+91' },
  { flag: '🇮🇩', label: 'Indonesia', code: '+62' },
  { flag: '🇮🇪', label: 'Ireland', code: '+353' },
  { flag: '🇮🇱', label: 'Israel', code: '+972' },
  { flag: '🇮🇹', label: 'Italy', code: '+39' },
  { flag: '🇯🇵', label: 'Japan', code: '+81' },
  { flag: '🇯🇴', label: 'Jordan', code: '+962' },
  { flag: '🇰🇿', label: 'Kazakhstan', code: '+7' },
  { flag: '🇰🇬', label: 'Kyrgyzstan', code: '+996' },
  { flag: '🇱🇻', label: 'Latvia', code: '+371' },
  { flag: '🇱🇹', label: 'Lithuania', code: '+370' },
  { flag: '🇱🇺', label: 'Luxembourg', code: '+352' },
  { flag: '🇲🇹', label: 'Malta', code: '+356' },
  { flag: '🇲🇽', label: 'Mexico', code: '+52' },
  { flag: '🇲🇩', label: 'Moldova', code: '+373' },
  { flag: '🇲🇨', label: 'Monaco', code: '+377' },
  { flag: '🇲🇪', label: 'Montenegro', code: '+382' },
  { flag: '🇲🇦', label: 'Morocco', code: '+212' },
  { flag: '🇪🇸', label: 'Spain', code: '+34' },
  { flag: '🇳🇱', label: 'Netherlands', code: '+31' },
  { flag: '🇳🇿', label: 'New Zealand', code: '+64' },
  { flag: '🇲🇰', label: 'North Macedonia', code: '+389' },
  { flag: '🇳🇴', label: 'Norway', code: '+47' },
  { flag: '🇵🇪', label: 'Peru', code: '+51' },
  { flag: '🇵🇱', label: 'Poland', code: '+48' },
  { flag: '🇵🇹', label: 'Portugal', code: '+351' },
  { flag: '🇷🇴', label: 'Romania', code: '+40' },
  { flag: '🇷🇸', label: 'Serbia', code: '+381' },
  { flag: '🇸🇬', label: 'Singapore', code: '+65' },
  { flag: '🇸🇰', label: 'Slovakia', code: '+421' },
  { flag: '🇸🇮', label: 'Slovenia', code: '+386' },
  { flag: '🇿🇦', label: 'South Africa', code: '+27' },
  { flag: '🇰🇷', label: 'South Korea', code: '+82' },
  { flag: '🇸🇪', label: 'Sweden', code: '+46' },
  { flag: '🇨🇭', label: 'Switzerland', code: '+41' },
  { flag: '🇹🇭', label: 'Thailand', code: '+66' },
  { flag: '🇹🇷', label: 'Turkey', code: '+90' },
  { flag: '🇦🇪', label: 'United Arab Emirates', code: '+971' },
  { flag: '🇺🇦', label: 'Ukraine', code: '+380' },
  { flag: '🇺🇿', label: 'Uzbekistan', code: '+998' },
] as const;

@Component({
  selector: 'app-private-tour-planning-form',
  imports: [FormHoneypot],
  templateUrl: './private-tour-planning-form.html',
  styleUrl: './private-tour-planning-form.scss',
})
export class PrivateTourPlanningForm {
  private readonly formState = inject(PrivateTourPlanningFormStateService);
  private readonly analytics = inject(OmayaAnalytics);

  protected readonly step = signal(1);
  protected readonly submitted = signal(false);
  protected readonly submitStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly submitMessage = signal('');
  protected readonly countryCodes = COUNTRY_CODES;
  protected readonly minStartDate = new Date().toISOString().slice(0, 10);
  protected readonly state = this.formState.state;

  protected updateField<K extends keyof PrivateTourPlanningFormState>(
    key: K,
    value: PrivateTourPlanningFormState[K],
  ): void {
    this.formState.update(key, value);
    this.submitted.set(false);
    this.submitStatus.set('idle');
    this.submitMessage.set('');
  }

  protected goToStep(nextStep: number): void {
    const target = Math.min(Math.max(nextStep, 1), 4);

    if (this.canAccessStep(target)) {
      this.step.set(target);
    }
  }

  protected canAccessStep(target: number): boolean {
    if (target <= 1) {
      return true;
    }

    if (target === 2) {
      return this.isStepOneValid();
    }

    if (target === 3) {
      return this.isStepOneValid() && this.isStepTwoValid();
    }

    return this.isStepOneValid() && this.isStepTwoValid() && this.isStepThreeValid();
  }

  protected isCurrentStepValid(): boolean {
    return [this.isStepOneValid(), this.isStepTwoValid(), this.isStepThreeValid(), true][
      this.step() - 1
    ];
  }

  protected openDatePicker(input: HTMLInputElement): void {
    input.showPicker?.();
    input.focus();
  }

  protected formSummary(): string[] {
    const data = this.state();

    return [
      `Full Name: ${data.name}`,
      `Phone: ${data.countryCode} ${data.phone}`,
      `Email: ${data.email}`,
      `Preferred contact: ${data.contactMethod}`,
      `Adults: ${data.adults}`,
      `Children: ${data.children}`,
      `Places: ${data.places}`,
      `Budget: ${data.budget}`,
      `Start date: ${data.startDate}`,
      `Days: ${data.days}`,
      `Details: ${data.details}`,
    ];
  }

  protected async submitPlan(event: Event): Promise<void> {
    event.preventDefault();

    if (!this.canAccessStep(4)) {
      return;
    }

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = this.state();

    this.submitStatus.set('sending');
    this.submitMessage.set('');

    const result = await submitPublicForm({
      formType: 'private-tour-planning',
      fields: {
        name: data.name.trim(),
        countryCode: data.countryCode.trim(),
        phone: data.phone.trim(),
        email: data.email.trim(),
        preferredContactMethod: data.contactMethod,
        adults: data.adults,
        children: data.children,
        places: data.places.trim(),
        budget: data.budget,
        startDate: data.startDate,
        days: data.days,
        details: data.details.trim(),
      },
      honeypot: String(formData.get('website') ?? ''),
    });

    if (!result.ok) {
      this.submitStatus.set('error');
      this.submitMessage.set(result.message ?? 'We could not send your request right now.');
      return;
    }

    this.submitted.set(true);
    this.submitStatus.set('sent');
    this.submitMessage.set(
      'Thank you. We received your request and will reply as soon as possible.',
    );
    this.analytics.trackEvent('generate_lead', {
      form_type: 'private-tour-planning',
    });
  }

  private isStepOneValid(): boolean {
    const data = this.state();

    return (
      data.name.trim().length > 1 &&
      data.phone.trim().length > 4 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
      data.contactMethod.length > 0
    );
  }

  private isStepTwoValid(): boolean {
    const data = this.state();

    return Boolean(data.adults && data.children && data.places.trim() && data.budget);
  }

  private isStepThreeValid(): boolean {
    const data = this.state();
    const days = Number(data.days);

    return Boolean(data.startDate && Number.isFinite(days) && days > 0);
  }
}
