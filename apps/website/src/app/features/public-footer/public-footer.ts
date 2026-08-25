import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { filter, map, startWith } from 'rxjs';
import { ActiveSite } from '../../../sites/active-site';
import { isSiteRouteEnabled } from '../../../sites/site-routes';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { registerSocialIcons } from '../../shared/icons/social-icons';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';

interface FooterPost {
  title: string;
  date: string;
  target: string;
}

interface PaymentProvider {
  name: string;
  src: string;
}

interface FooterLink {
  label: string;
  target: string;
}

@Component({
  selector: 'app-public-footer',
  imports: [RouterLink, MatIconModule],
  templateUrl: './public-footer.html',
  styleUrl: './public-footer.scss',
})
export class PublicFooter {
  private readonly router = inject(Router);
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly analytics = inject(OmayaAnalytics);
  private readonly activeSite = inject(ActiveSite);
  protected readonly i18n = inject(OmayaI18n);
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url),
    ),
  );
  protected readonly isHomepage = computed(() => this.currentUrl() === '/');
  protected readonly brand = computed(() => this.activeSite.site().brand);
  protected readonly tagline = computed(() => this.activeSite.site().brand.tagline);

  protected readonly aboutLinks = computed<readonly FooterLink[]>(() =>
    [
      { label: this.i18n.t('footer.whyBook'), target: '/why-book-with-us/' },
      { label: this.i18n.t('footer.ourStory'), target: '/our-story/' },
      { label: this.i18n.t('footer.faqs'), target: '/faq/' },
    ].filter((link) => this.isRouteEnabled(link.target)),
  );

  protected readonly legalLinks = computed<readonly FooterLink[]>(() =>
    [
      { label: this.i18n.t('footer.cookiePolicy'), target: '/cookie-policy/' },
      { label: this.i18n.t('footer.privacyPolicy'), target: '/privacy-policy/' },
      { label: this.i18n.t('footer.terms'), target: '/termsconditions/' },
      { label: this.i18n.t('footer.license'), target: '/omaya-travel-license/' },
    ].filter((link) => this.isRouteEnabled(link.target)),
  );

  protected readonly latestPosts = computed<readonly FooterPost[]>(() =>
    [
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
    ].filter((post) => this.isRouteEnabled(post.target)),
  );

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

  constructor() {
    registerSocialIcons(this.iconRegistry, this.sanitizer);
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected trackContactClick(type: 'phone' | 'email' | 'social', label: string): void {
    const eventName =
      type === 'phone' ? 'click_phone' : type === 'email' ? 'click_email' : 'click_social';

    this.analytics.trackEvent(eventName, {
      label,
      source: 'footer',
    });
  }

  private isRouteEnabled(target: string): boolean {
    return isSiteRouteEnabled(this.activeSite.site(), target);
  }
}
