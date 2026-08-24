import { Component, inject, signal } from '@angular/core';

import { GoogleAnalytics } from '../../shared/analytics/google-analytics';
import { submitPublicForm } from '../../shared/forms/public-form-api';

const CONTACT_PAGE = {
  title: 'Contact Us',
  intro: {
    heading: "Let's Plan Your Next Story.",
    text: "Every great journey starts with a single conversation. Whether you have a specific destination in mind or just a wild idea and a blank calendar, we're here to help you piece it together. Reach out today, and let's turn that “someday” trip into a departure date.",
  },
  location: 'Sofia, Bulgaria',
  phone: '+359 87 996 5946',
  email: 'info@omayatravel.com',
};

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  private readonly analytics = inject(GoogleAnalytics);

  protected readonly content = CONTACT_PAGE;
  protected readonly submitStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly submitMessage = signal('');

  protected trackContactClick(type: 'phone' | 'email', label: string): void {
    this.analytics.trackEvent(type === 'phone' ? 'click_phone' : 'click_email', {
      label,
      source: 'contact_page',
    });
  }

  protected async sendContactEmail(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? 'Website contact request').trim();
    const message = String(formData.get('comment') ?? '').trim();
    const honeypot = String(formData.get('website') ?? '');

    this.submitStatus.set('sending');
    this.submitMessage.set('');

    const result = await submitPublicForm({
      formType: 'contact',
      fields: { name, email, subject, message },
      honeypot,
    });

    if (result.ok) {
      form.reset();
      this.submitStatus.set('sent');
      this.submitMessage.set(
        'Thank you. We received your message and will reply as soon as possible.',
      );
      this.analytics.trackEvent('generate_lead', {
        form_type: 'contact',
      });
      return;
    }

    this.submitStatus.set('error');
    this.submitMessage.set(result.message ?? 'We could not send your message right now.');
  }
}
