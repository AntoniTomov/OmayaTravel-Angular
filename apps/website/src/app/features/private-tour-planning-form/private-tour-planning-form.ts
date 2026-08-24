import { Component, inject, signal } from '@angular/core';

import {
  PrivateTourPlanningFormState,
  PrivateTourPlanningFormStateService,
} from './private-tour-planning-form-state';

const COUNTRY_CODES = [
  { flag: '🇺🇸', label: 'United States', code: '+1' },
  { flag: '🇧🇬', label: 'Bulgaria', code: '+359' },
  { flag: '🇬🇧', label: 'United Kingdom', code: '+44' },
  { flag: '🇩🇪', label: 'Germany', code: '+49' },
  { flag: '🇫🇷', label: 'France', code: '+33' },
  { flag: '🇮🇹', label: 'Italy', code: '+39' },
  { flag: '🇪🇸', label: 'Spain', code: '+34' },
  { flag: '🇳🇱', label: 'Netherlands', code: '+31' },
  { flag: '🇨🇦', label: 'Canada', code: '+1' },
  { flag: '🇦🇺', label: 'Australia', code: '+61' },
] as const;

@Component({
  selector: 'app-private-tour-planning-form',
  templateUrl: './private-tour-planning-form.html',
  styleUrl: './private-tour-planning-form.scss',
})
export class PrivateTourPlanningForm {
  private readonly formState = inject(PrivateTourPlanningFormStateService);

  protected readonly step = signal(1);
  protected readonly submitted = signal(false);
  protected readonly countryCodes = COUNTRY_CODES;
  protected readonly state = this.formState.state;

  protected updateField<K extends keyof PrivateTourPlanningFormState>(
    key: K,
    value: PrivateTourPlanningFormState[K],
  ): void {
    this.formState.update(key, value);
    this.submitted.set(false);
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

  protected submitPlan(event: Event): void {
    event.preventDefault();

    if (!this.canAccessStep(4)) {
      return;
    }

    const lines = ['Private tour planning request', '', ...this.formSummary()];
    const subject = encodeURIComponent('Private tour planning request');
    const body = encodeURIComponent(lines.join('\n'));

    this.submitted.set(true);
    window.location.href = `mailto:info@omayatravel.com?subject=${subject}&body=${body}`;
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
