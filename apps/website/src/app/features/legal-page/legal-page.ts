import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface LegalSection {
  heading?: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  links?: readonly {
    label: string;
    url: string;
  }[];
}

interface LegalPageContent {
  title: string;
  heroImage?: string;
  certificateImage?: string;
  sections: readonly LegalSection[];
}

const TERMS_SECTIONS: readonly LegalSection[] = [
  {
    heading: '1. Important Notice',
    paragraphs: [
      'All bookings with Omaya Travel are subject to these Terms and Conditions. The lead traveller (person making the booking) accepts the Terms and Conditions on behalf of all participants and is responsible for communicating all relevant information to other travellers in the booking.',
      'Omaya Travel is a fully registered and legally operating tour operator within the European Union, holding license number РК-01-8706 and full travel insurance in compliance with EU travel regulations.',
    ],
  },
  {
    heading: '2. Bookings and Payments',
    paragraphs: [
      'A deposit is required to secure your booking. In general, a deposit of 25% per person is payable within seven (7) days of written confirmation, unless otherwise stated. Certain tours may require a higher deposit amount, and this will be clearly noted in the Terms and Conditions on the relevant tour page.',
      'The deposit is non-refundable in cash. However, if you cancel your booking more than 45 days prior to departure, the full deposit amount may be used as credit toward a future trip, minus a EUR 100 administration fee.',
      'Certain services (e.g. domestic flights, permits, peak-season hotels) may require full prepayment and are non-refundable. This will be communicated at the time of booking.',
      'Full payment must be received no less than 60 days before the commencement of your trip, unless otherwise specified. Some trips may require earlier payment or additional instalments, which will be communicated with the booking confirmation. Failure to pay by the due date will result in a reminder. You will also be responsible for any supplier-imposed costs due to late payment. If payment is not received within seven (7) days of the reminder, your booking will be deemed cancelled.',
      'Any fees associated with credit card payments are the responsibility of the traveller.',
    ],
  },
  {
    heading: '3. Cancellation Policy (By You)',
    paragraphs: [
      'Cancellation policies may vary depending on the destination and will be communicated at the time of reservation.',
      'If you cancel after the deposit has been paid, the deposit may be used as credit for a future expedition, provided Omaya Travel is notified more than 45 days in advance. An administration fee of 100 EUR applies.',
      'Refund structure:',
    ],
    list: [
      'Less than 20 days before departure: non-refundable.',
      '45–30 days before departure: full refund minus the deposit.',
      '29–20 days before departure: 30% refund applicable.',
    ],
  },
  {
    heading: '4. Illness, Vaccination Status, and Inability to Travel',
    paragraphs: [
      'If, due to illness, suspected illness, or failure to satisfy any required tests or vaccination requirements, an airline or other carrier refuses carriage, a hotel or vessel refuses accommodation, or Omaya Travel or its suppliers reasonably exclude you, you may be prevented from commencing or continuing your trip.',
      'If the trip has commenced, we will provide reasonable assistance to arrange alternative travel or continue the trip at your cost. If the trip has not commenced, assistance cannot be provided. We will not refund trip costs in these circumstances, as payments to suppliers will have been made and preparation for the trip completed. Omaya Travel is not responsible for other losses, including airfares or visa expenses. Travel insurance covering illness and unforeseen events is strongly recommended.',
      'If a new medical condition arises, or an existing condition changes, it must be reported immediately. If it affects your ability to participate, it is treated as a cancellation by you, and travel insurance is recommended. Failure to disclose medical conditions may result in exclusion from the trip, treated as a cancellation by you.',
    ],
  },
  {
    heading: '5. Force Majeure',
    paragraphs: [
      'Credit for future travel may be available depending on the situation, supplier policies, and notice period, but this is not guaranteed. Omaya Travel will communicate options and do its best to accommodate affected travellers.',
    ],
  },
  {
    heading: '6. Cancellation by Omaya Travel',
    paragraphs: [
      'If we cancel travel arrangements for reasons other than Force Majeure or failure to meet minimum numbers, you may elect to receive a refund of all funds paid or alternative travel arrangements of substantially equal quality. Omaya Travel is not responsible for additional expenses or losses arising from such cancellation.',
    ],
  },
  {
    heading: '7. Changes',
    paragraphs: [
      'Name changes may be made free for services not tied to specific individuals; fees may apply for services such as flights, train tickets, entry fees, or permits. Changes to tour dates or itineraries may also incur additional costs.',
      'Minor changes by Omaya Travel will be communicated. Significant changes, such as major itinerary modifications, substantial accommodation changes, or cancellation of multiple activities, will be communicated promptly. You may accept the changes and continue your trip or cancel your booking with refund, subject to administration fees.',
      'During travel, itinerary, transport, accommodation, and inclusions may change due to circumstances beyond our control, including weather, road conditions, transport schedule changes, or mechanical failures.',
    ],
  },
  {
    heading: '8. General Conditions',
    paragraphs: [
      'Omaya Travel will not be responsible for omissions or modifications to the itinerary due to Force Majeure or other circumstances beyond our control. Loss of enjoyment or distress caused by such changes is excluded. Any compensation will be reduced by the value of alternative services accepted by you. Omaya Travel will not be responsible for additional expenses or losses due to itinerary changes.',
    ],
  },
  {
    heading: '9. Accommodation',
    paragraphs: [
      'Accommodation may be substituted with properties of comparable or higher standard. Efforts will be made to minimise substitutions, and such substitutions will not be considered a significant change.',
    ],
  },
  {
    heading: '10. Passports, Visas, and Vaccinations',
    paragraphs: [
      'You must hold a valid passport and obtain any required visas. Passport name must match your airline ticket, or boarding may be denied. Responsibility for documentation accuracy rests with you. Omaya Travel accepts no liability for failures.',
      'You must comply with visa requirements and consult your local embassy or consulate. Specialist visa services should be engaged if needed.',
      'You are responsible for obtaining any vaccinations or preventative medications. Omaya Travel provides information in good faith.',
    ],
  },
  {
    heading: '11. Health and Fitness',
    paragraphs: [
      'You must ensure appropriate health and fitness levels to participate. Doubts should be discussed before booking. Pre-existing medical conditions that increase risk or affect the trip must be disclosed at booking. Omaya Travel may request medical assessment. Refunds or transfers will be made according to standard cancellation policy if informed in sufficient time.',
      'Bookings made less than 45 days before departure require immediate disclosure of pre-existing conditions. New or changed medical conditions must be reported immediately. Non-disclosure may result in exclusion from the trip, treated as a cancellation.',
    ],
  },
  {
    heading: '12. Special Requirements and Room Sharing',
    paragraphs: [
      'Dietary requirements must be communicated within seven (7) days of booking confirmation. While Omaya Travel will endeavour to notify suppliers, requests are not guaranteed. You are responsible for allergens in meals and beverages.',
      'Single travellers should pay a single supplement in advance, refundable if a roommate is found. Roommates are matched by sex only, with no guarantees regarding compatibility. Omaya Travel is not responsible for any inconvenience caused by roommates. Single room availability cannot be guaranteed if changed before or during the trip.',
    ],
  },
  {
    heading: '13. Conduct on Tour',
    paragraphs: [
      'You must conduct yourself to ensure safety and enjoyment of the group. Behaviour that threatens others or disrupts the tour may result in removal, with no refund. Additional costs incurred will be your responsibility.',
    ],
  },
  {
    heading: '14. Minimum Numbers',
    paragraphs: [
      'Some trips require minimum participant numbers. If not met, trips may be cancelled or re-costed. Notice will be given at least 45 days prior. You may accept the new cost or cancel with a refund or credit. Omaya Travel is not responsible for additional travel costs affected by such changes.',
    ],
  },
  {
    heading: '15. Acceptance of Risk',
    paragraphs: [
      'Travel involves personal risks beyond those of everyday life due to adventurous activities or destinations with geographical, political, or cultural risks. You accept these risks. Consult guidance from the Department of Foreign Affairs and Trade (DFAT) or local equivalents.',
    ],
  },
  {
    heading: '16. Third-Party Services',
    paragraphs: [
      'Services booked on the spot with third parties or partners are your responsibility. Omaya Travel is not liable for optional visits, local guides, or services not directly managed by us.',
      'Activities such as horse riding or trekking are undertaken at your own risk. Omaya Travel is not liable for injuries resulting from participation.',
    ],
  },
  {
    heading: '17. Complaints',
    paragraphs: [
      'Any problems must be reported immediately during travel to Omaya Travel representatives or suppliers to allow resolution. Follow-up complaints must be submitted in writing within 30 days of trip completion. Failure to comply may limit your rights to make a claim.',
    ],
  },
  {
    heading: '18. Travel Documents',
    paragraphs: [
      'Travel documents are electronic and emailed approximately 14 days before departure, provided full payment and required paperwork are received. If leaving earlier, notify Omaya Travel to attempt early delivery.',
    ],
  },
  {
    heading: '19. Image Release',
    paragraphs: [
      'During tours, Omaya Travel may take photographs or recordings. You consent to the use of images for promotional purposes without compensation. Inform your guide if you do not consent.',
    ],
  },
  {
    heading: '20. Airport Transfers and Baggage',
    paragraphs: [
      'Airport transfers are included only on arrival and departure days. You are responsible for your luggage, including carrying it in accommodations without porterage or elevators. Omaya Travel is not liable for damaged or lost luggage. Additional luggage restrictions will be communicated.',
    ],
  },
  {
    heading: '21. Souvenirs and Artefacts',
    paragraphs: [
      'Rules regarding souvenirs vary by country. Guides will inform you in good faith. Omaya Travel is not responsible for issues at immigration.',
    ],
  },
  {
    heading: '22. Money Requested on Tour',
    paragraphs: [
      'While services are generally pre-paid, you may be asked for incidental funds in developing tourism areas. Do not provide cash to local staff claiming to work for Omaya Travel without prior authorization. Contact the emergency number immediately.',
    ],
  },
  {
    heading: '23. Refusal of Carriage',
    paragraphs: [
      'Omaya Travel may remove customers from tours if they endanger others or display disruptive, unsafe, or illegal behavior. Onward travel costs are the traveller’s responsibility.',
    ],
  },
  {
    heading: '24. Pre-Departure Contact',
    paragraphs: [
      'You must provide a reliable telephone number, email, or address. Documentation will not be released until this information is provided. Omaya Travel is not responsible if contact details change without notification.',
    ],
  },
  {
    heading: '25. Travel Agents',
    paragraphs: [
      'If booking through a travel agent, Omaya Travel is not financially liable until payment is received. Agents must ensure that invoices, itineraries, and Terms and Conditions are correctly communicated. Agents may not accept Terms on behalf of customers but must provide clear access to them.',
    ],
  },
];

const LEGAL_PAGES: Record<string, LegalPageContent> = {
  'omaya-travel-license': {
    title: 'Omaya Travel License & Registration Details',
    certificateImage: '/assets/images/legal/certificate-for-registration.webp',
    sections: [
      {
        paragraphs: [
          'This page confirms Omaya Travel license and official registration with the Bulgarian Ministry of Tourism under:',
        ],
        list: [
          'Registration No.: РК-01-8706',
          'Company: Omaya Travel EOOD',
          'EIK (Company ID): 208663654',
          'Registered address: Kardzhali, 61 Hristo Botev St.',
          'Date of issue: 19 March 2026',
        ],
      },
      {
        paragraphs: [
          'This registration confirms Omaya Travel’s compliance with the Bulgarian Tourism Act, including mandatory tour operator liability insurance and consumer protection requirements for all package travel bookings.',
          'You can verify this registration directly in Bulgaria’s National Tourist Register (Национален туристически регистър), maintained by the Ministry of Tourism.',
        ],
        links: [{ label: 'Bulgaria’s National Tourist Register', url: 'https://tourism.egov.bg/' }],
      },
    ],
  },
  termsconditions: {
    title: 'Omaya Travel Terms and Conditions',
    heroImage: '/assets/images/legal/terms-and-conditions.webp',
    sections: TERMS_SECTIONS,
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    heroImage: '/assets/images/legal/privacy-policy.webp',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'We respect your privacy and are committed to protecting your personal data.',
          'This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or book one of our small-group adventure tours.',
          'Omaya Travel is the data controller responsible for your personal data.',
        ],
      },
      {
        heading: '2. What Information We Collect',
        paragraphs: ['We may collect the following types of personal data:'],
        list: [
          'Identity Data: Name, surname',
          'Contact Data: Email address, phone number',
          'Booking Information: Tour preferences, travel dates, special requests',
          'Payment Information: Billing details (processed securely via third-party providers)',
          'Technical Data: IP address, browser type, device information',
          'Usage Data: Pages visited, time spent on our website',
        ],
      },
      {
        paragraphs: [
          'We also collect certain information automatically through cookies and similar technologies. For more details, please see our Cookie Policy.',
        ],
      },
      {
        heading: '3. How We Use Your Data',
        paragraphs: ['We use your personal data to:'],
        list: [
          'Process and manage your bookings',
          'Communicate with you regarding your tours',
          'Provide customer support',
          'Improve our website and services',
          'Send marketing communications (only with your consent)',
          'Comply with legal obligations',
        ],
      },
      {
        paragraphs: [
          'We also use cookies and similar technologies to analyze website traffic, personalize content, and improve user experience.',
        ],
      },
      {
        heading: '4. Legal Basis for Processing (GDPR)',
        paragraphs: [
          'We process your data under the General Data Protection Regulation (GDPR) based on:',
        ],
        list: [
          'Contract: To fulfill your booking',
          'Consent: For marketing communications, cookies, and tracking technologies',
          'Legal obligation: For accounting and regulatory compliance',
          'Legitimate interests: To improve our services and website',
        ],
      },
      {
        heading: '5. Third-Party Services',
        paragraphs: [
          'We use trusted third-party services to operate our business and improve our services, including:',
        ],
        list: [
          'Google Analytics – to understand how visitors use our website',
          'Meta Platforms, Inc. (Meta Ads / Facebook Pixel) – to measure and optimize advertising campaigns',
          'Email marketing providers (e.g. Mailchimp or similar) – to send newsletters and updates',
        ],
      },
      {
        paragraphs: [
          'These providers may process your data on our behalf and may use cookies or similar technologies.',
        ],
      },
      {
        heading: '6. Sharing Your Data',
        paragraphs: ['We may share your data with:'],
        list: [
          'Payment processors',
          'Tour guides and local partners (only when necessary for your trip)',
          'IT and website service providers',
          'Analytics and advertising partners (with your consent)',
          'Legal or regulatory authorities when required',
          'We never sell your personal data.',
        ],
      },
      {
        heading: '7. International Transfers',
        paragraphs: [
          'Some of our third-party providers (such as Google and Meta) may transfer your data outside the European Economic Area (EEA).',
          'In such cases, we ensure appropriate safeguards are in place, including the use of Standard Contractual Clauses approved by the European Commission.',
        ],
      },
      {
        heading: '8. Data Retention',
        paragraphs: ['We retain your personal data only as long as necessary:'],
        list: [
          'Booking and financial records: up to 5–7 years (to comply with legal and tax obligations)',
          'Marketing data: until you withdraw your consent or unsubscribe',
          'Analytics and cookie data: in accordance with our Cookie Policy',
        ],
      },
      {
        heading: '9. Your Rights',
        paragraphs: ['Under the General Data Protection Regulation (GDPR), you have the right to:'],
        list: [
          'Access your personal data',
          'Correct inaccurate data',
          'Request deletion (“right to be forgotten”)',
          'Restrict or object to processing',
          'Data portability',
          'Withdraw consent at any time (including for marketing and cookies)',
          'You also have the right to lodge a complaint with your local data protection authority.',
        ],
      },
      {
        heading: '10. Data Security',
        paragraphs: [
          'We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.',
        ],
      },
      {
        heading: '11. Third-Party Links',
        paragraphs: [
          'Our website may contain links to other websites. We are not responsible for their privacy practices.',
        ],
      },
      {
        heading: '12. Children’s Privacy',
        paragraphs: [
          'OOur services are intended for individuals aged 16 and over.',
          'We may collect and process personal data of individuals aged 16–17 for the purpose of booking and participating in our tours. Where required, we may request consent from a parent or legal guardian.',
          'We do not knowingly collect personal data from individuals under the age of 16. If we become aware that we have collected such data, we will take steps to delete it.',
          'If you believe that a child under 16 has provided us with personal data, please contact us.',
        ],
      },
      {
        heading: '13. Updates to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. Changes will be posted on this page.',
        ],
      },
      {
        heading: '14. Contact Us',
        paragraphs: [
          'If you have any questions about this Privacy Policy or your data, please contact us:',
          'Company Name: Omaya Travel',
          'Email: info@omayatravel.com',
        ],
      },
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    heroImage: '/assets/images/legal/cookies-bgr.webp',
    sections: [
      { paragraphs: ['Last updated: 28.03.2026'] },
      {
        heading: '1. Introduction',
        paragraphs: [
          'This Cookie Policy explains how Omaya Travel (“we”, “us”, or “our”) uses cookies and similar technologies when you visit our website.',
          'We are a tour operator based in Bulgaria, and we comply with applicable data protection laws, including the General Data Protection Regulation (GDPR).',
          'Cookies are small text files stored on your device (computer, tablet, or mobile) that help improve your browsing experience and enable key website functionality.',
        ],
      },
      {
        heading: '2. How We Use Cookies',
        paragraphs: ['We use cookies to:'],
        list: [
          'Measure the effectiveness of our marketing campaigns',
          'Enable essential website functionality, including tour bookings and secure payments',
          'Remember your preferences (such as language, currency, and selected tours)',
          'Analyze website traffic and improve performance',
          'Deliver personalized advertisements and travel offers',
        ],
      },
      {
        heading: '3. Types of Cookies We Use',
        paragraphs: [
          'a) Strictly Necessary Cookies',
          'These cookies are essential for the operation of our website. They support secure login and session handling, booking and checkout processes, and security and fraud prevention. These cookies cannot be disabled.',
          'b) Performance and Analytics Cookies',
          'We use analytics tools such as Google Analytics to understand how visitors use our website. These cookies collect information such as pages visited, time spent on the website, and traffic sources. This data is aggregated and helps us improve our services.',
          'c) Functional Cookies',
          'These cookies allow us to remember your preferences and provide enhanced features, such as language and region selection, currency preferences, and saved tours or user selections.',
          'd) Marketing and Advertising Cookies',
          'These cookies are used to show you relevant ads based on your interests. We use Google Ads, Facebook Ads, and Instagram Ads (via Meta platforms). These services may track your activity across websites to deliver personalized advertisements and measure campaign performance.',
        ],
      },
      {
        heading: '4. Third-Party Cookies',
        paragraphs: [
          'We work with trusted third-party providers who may place cookies on your device, including:',
        ],
        list: [
          'Google (Analytics and Ads)',
          'Meta platforms (Facebook and Instagram)',
          'Payment service providers (for secure transactions)',
          'These third parties may process your data according to their own privacy and cookie policies.',
        ],
      },
      {
        heading: '5. Online Booking and Payments',
        paragraphs: ['When you book a tour or make a payment on our website:'],
        list: [
          'Cookies help maintain your session during booking',
          'Temporary data may be stored to complete your reservation',
          'Payment providers may use cookies for fraud prevention and secure processing',
        ],
      },
      {
        heading: '6. Your Cookie Choices',
        paragraphs: ['Under EU law, you have control over your cookie preferences. You can:'],
        list: [
          'Accept or reject non-essential cookies via our cookie consent banner',
          'Change or withdraw your consent at any time',
          'Manage cookies through your browser settings',
          'Please note that disabling certain cookies may affect website functionality, especially booking and payment features.',
        ],
      },
      {
        heading: '7. Data Collected via Cookies',
        paragraphs: ['Cookies may collect:'],
        list: [
          'IP address',
          'Browser and device information',
          'Website activity and interactions',
          'Booking-related behavior',
          'We do not store sensitive personal data in cookies.',
        ],
      },
      {
        heading: '8. Legal Basis for Using Cookies',
        paragraphs: ['As a company based in Bulgaria (EU), we rely on:'],
        list: [
          'User consent for analytics and marketing cookies',
          'Legitimate interest for strictly necessary cookies',
          'You have the right to withdraw your consent at any time.',
        ],
      },
      {
        heading: '9. Updates to This Policy',
        paragraphs: [
          'We may update this Cookie Policy periodically to reflect legal or operational changes. Updates will be posted on this page with a revised “Last updated” date.',
        ],
      },
      {
        heading: 'Contact Us',
        paragraphs: [
          'If you have any questions about this Cookie Policy or how we use cookies, please contact us:',
          'info@omayatravel.com',
        ],
      },
    ],
  },
};

@Component({
  selector: 'app-legal-page',
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export class LegalPage {
  private readonly route = inject(ActivatedRoute);

  protected readonly page = computed(() => {
    const slug = this.route.snapshot.data['pageSlug'] as string;

    return LEGAL_PAGES[slug] ?? LEGAL_PAGES['privacy-policy'];
  });
}
