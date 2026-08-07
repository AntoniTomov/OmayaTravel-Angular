import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterPost {
  title: string;
  date: string;
  target: string;
}

interface PaymentProvider {
  name: string;
  src: string;
}

@Component({
  selector: 'app-public-footer',
  imports: [RouterLink],
  templateUrl: './public-footer.html',
  styleUrl: './public-footer.scss',
})
export class PublicFooter {
  protected readonly latestPosts: readonly FooterPost[] = [
    {
      title: 'Tassili n’Ajjer National Park: A Guide to Algeria’s Breathtaking Sahara Wilderness',
      date: 'July 25, 2026',
      target: '/tassili-najjer-national-park-guide/',
    },
    {
      title: 'The Complete Visitor Guide to the Rila Monastery in Bulgaria',
      date: 'April 16, 2026',
      target: '/the-complete-visitor-guide-to-rila-monastery/',
    },
  ];

  protected readonly paymentProviders: readonly PaymentProvider[] = [
    { name: 'Mastercard', src: '/assets/images/home-page/payment-providers/MastercardLogo-2.png' },
    { name: 'Maestro', src: '/assets/images/home-page/payment-providers/MaestroLogo.png' },
    { name: 'Visa', src: '/assets/images/home-page/payment-providers/VisaLogo.png' },
    { name: 'Revolut', src: '/assets/images/home-page/payment-providers/RevolutLogo.png' },
    { name: 'Google Pay', src: '/assets/images/home-page/payment-providers/GPayLogo.png' },
    { name: 'Apple Pay', src: '/assets/images/home-page/payment-providers/ApplePayLogo.png' },
    {
      name: 'American Express',
      src: '/assets/images/home-page/payment-providers/AmricanExpressLogo.png',
    },
  ];

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
