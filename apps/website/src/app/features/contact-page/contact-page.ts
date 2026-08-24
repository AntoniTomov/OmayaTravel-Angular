import { Component } from '@angular/core';

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
  protected readonly content = CONTACT_PAGE;

  protected sendContactEmail(event: Event): void {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? 'Website contact request').trim();
    const comment = String(formData.get('comment') ?? '').trim();
    const emailSubject = subject || 'Website contact request';
    const body = [
      'New contact request from omayatravel.com',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${emailSubject}`,
      '',
      'Comment:',
      comment,
    ].join('\n');

    window.location.href = `mailto:${this.content.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
  }
}
