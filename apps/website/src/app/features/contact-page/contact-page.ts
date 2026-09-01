import { Component, computed, inject, signal } from '@angular/core';

import { ActiveSite } from '../../../sites/active-site';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { FormHoneypot } from '../../shared/forms/form-honeypot';
import { FormStatus } from '../../shared/forms/form-status';
import { submitPublicForm } from '../../shared/forms/public-form-api';

interface ContactPageContent {
  title: string;
  intro: {
    heading: string;
    text: string;
  };
  location: string;
  phoneNumbers: readonly string[];
  email: string;
  backgroundImage?: string;
  labels: {
    name: string;
    email: string;
    subject: string;
    comment: string;
    submit: string;
    sending: string;
    phone: string;
    emailLabel: string;
    success: string;
    error: string;
  };
}

const CONTACT_PAGE: ContactPageContent = {
  title: 'Contact Us',
  intro: {
    heading: "Let's Plan Your Next Story.",
    text: "Every great journey starts with a single conversation. Whether you have a specific destination in mind or just a wild idea and a blank calendar, we're here to help you piece it together. Reach out today, and let's turn that “someday” trip into a departure date.",
  },
  location: 'Sofia, Bulgaria',
  phoneNumbers: ['+359 87 996 5946'],
  email: 'info@omayatravel.com',
  labels: {
    name: 'Name*',
    email: 'Email Address*',
    subject: 'Subject',
    comment: 'Comment',
    submit: 'Submit',
    sending: 'Sending...',
    phone: 'Phone/WhatsApp:',
    emailLabel: 'Email:',
    success: 'Thank you. We received your message and will reply as soon as possible.',
    error: 'We could not send your message right now.',
  },
};

const AMELIA_CONTACT_PAGE: ContactPageContent = {
  title: 'Свържете се с нас',
  intro: {
    heading: 'Нека планираме следващото ти пътуване.',
    text: 'Всяко вълнуващо пътешествие започва с един разговор. Независимо дали вече имаш конкретна дестинация наум, или просто идея и свободни дати в календара, ние сме тук, за да ти помогнем да подредиш детайлите. Пиши ни още днес и нека превърнем онова пътуване „някой ден“ в истинска дата на заминаване.',
  },
  location: 'София, България',
  phoneNumbers: [],
  email: 'info@ameliatravel.bg',
  backgroundImage: '/assets/images/amelia/home/h1-background-coral.avif',
  labels: {
    name: 'Име*',
    email: 'Имейл адрес*',
    subject: 'Тема',
    comment: 'Съобщение',
    submit: 'Изпрати',
    sending: 'Изпращане...',
    phone: 'Телефон/WhatsApp:',
    emailLabel: 'Имейл:',
    success: 'Благодарим ти. Получихме съобщението и ще отговорим възможно най-скоро.',
    error: 'Не успяхме да изпратим съобщението в момента.',
  },
};

@Component({
  selector: 'app-contact-page',
  imports: [FormHoneypot, FormStatus],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  private readonly analytics = inject(OmayaAnalytics);
  private readonly activeSite = inject(ActiveSite);

  protected readonly content = computed(() =>
    this.activeSite.site().id === 'amelia' ? AMELIA_CONTACT_PAGE : CONTACT_PAGE,
  );
  protected readonly backgroundImage = computed(() => {
    const backgroundImage = this.content().backgroundImage;

    return backgroundImage ? `url("${backgroundImage}")` : null;
  });
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
      this.submitMessage.set(this.content().labels.success);
      this.analytics.trackEvent('generate_lead', {
        form_type: 'contact',
      });
      return;
    }

    this.submitStatus.set('error');
    this.submitMessage.set(result.message ?? this.content().labels.error);
  }

  protected phoneHref(phoneNumber: string): string {
    return `tel:${phoneNumber.replace(/[^\d+]/g, '')}`;
  }
}
