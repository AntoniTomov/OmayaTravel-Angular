import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, effect, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PublicHeader } from './features/public-header/public-header';
import { PublicFooter } from './features/public-footer/public-footer';
import { NewsletterPopup } from './features/newsletter-popup/newsletter-popup';
import { CookieConsent } from './features/cookie-consent/cookie-consent';
import { OmayaAnalytics } from './shared/analytics/omaya-analytics';
import { CookieConsent as CookieConsentService } from './shared/cookie-consent/cookie-consent';
import { OmayaI18n } from './shared/i18n/omaya-i18n';
import { OmayaSeo } from './shared/seo/omaya-seo';
import { ActiveSite } from '../sites/active-site';

@Component({
  selector: 'app-root',
  imports: [PublicHeader, PublicFooter, RouterOutlet, NewsletterPopup, CookieConsent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);
  private readonly analytics = inject(OmayaAnalytics);
  private readonly cookieConsent = inject(CookieConsentService);
  private readonly activeSite = inject(ActiveSite);
  private readonly i18n = inject(OmayaI18n);
  private readonly seo = inject(OmayaSeo);
  private lastTrackedPageView = '';

  constructor(router: Router) {
    // Per-route title, description, canonical, social tags and JSON-LD. Replaces the single
    // site-wide title this effect used to set, which left every page sharing one <title>.
    this.seo.start();

    effect(() => {
      const site = this.activeSite.site();

      this.i18n.setLocale(site.locale);
      this.document.documentElement.lang = site.locale;
      this.document.documentElement.setAttribute('data-theme', site.theme.dataTheme);
      this.seo.applyFavicon(site);
    });

    effect(() => {
      if (this.cookieConsent.currentChoice() === 'accepted') {
        this.trackCurrentPageView(router.url);
      }
    });

    router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (this.isBrowser) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.trackCurrentPageView(event.urlAfterRedirects);
        }
      });
  }

  private trackCurrentPageView(path: string): void {
    // Without consent nothing is sent, so the page must not be remembered as tracked either —
    // otherwise accepting the banner would skip the very page the visitor accepted on.
    if (!this.isBrowser || !this.cookieConsent.canUseAnalytics()) {
      return;
    }

    const trackingKey = `${path}|${this.document.title}`;

    if (trackingKey === this.lastTrackedPageView) {
      return;
    }

    this.lastTrackedPageView = trackingKey;
    this.analytics.trackPageView(path, this.document.title);
  }
}
