import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-private-tour-planning-form',
  imports: [RouterLink],
  templateUrl: './private-tour-planning-form.html',
  styleUrl: './private-tour-planning-form.scss',
})
export class PrivateTourPlanningForm {
  protected readonly step = signal(1);
  protected readonly submitted = signal(false);

  protected goToStep(nextStep: number): void {
    this.step.set(Math.min(Math.max(nextStep, 1), 4));
  }

  protected formSummary(form: HTMLFormElement): string[] {
    const data = new FormData(form);

    return [
      `Full Name: ${data.get('name') ?? ''}`,
      `Phone: ${data.get('phone') ?? ''}`,
      `Email: ${data.get('email') ?? ''}`,
      `Preferred contact: ${data.get('contactMethod') ?? ''}`,
      `Adults: ${data.get('adults') ?? ''}`,
      `Children: ${data.get('children') ?? ''}`,
      `Places: ${data.get('places') ?? ''}`,
      `Budget: ${data.get('budget') ?? ''}`,
      `Start date: ${data.get('startDate') ?? ''}`,
      `Days: ${data.get('days') ?? ''}`,
      `Details: ${data.get('details') ?? ''}`,
    ];
  }

  protected submitPlan(event: Event): void {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const lines = ['Private tour planning request', '', ...this.formSummary(form)];
    const subject = encodeURIComponent('Private tour planning request');
    const body = encodeURIComponent(lines.join('\n'));

    this.submitted.set(true);
    window.location.href = `mailto:info@omayatravel.com?subject=${subject}&body=${body}`;
  }
}
