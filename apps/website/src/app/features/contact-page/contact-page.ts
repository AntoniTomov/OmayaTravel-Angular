import { Component } from '@angular/core';

const CONTACT_PAGE = {
  title: 'Contact Us',
  intro: {
    heading: "Let's Plan Your Next Story.",
    text: "Every great journey starts with a single conversation. Whether you have a specific destination in mind or just a wild idea and a blank calendar, we're here to help you piece it together. Reach out today, and let's turn that “someday” trip into a departure date.",
  },
  location: 'Sofia',
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
}
