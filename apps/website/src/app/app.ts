import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, effect, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PublicHeader } from './features/public-header/public-header';
import { PublicFooter } from './features/public-footer/public-footer';
import { NewsletterPopup } from './features/newsletter-popup/newsletter-popup';
import { CookieConsent } from './features/cookie-consent/cookie-consent';
import { OmayaAnalytics } from './shared/analytics/omaya-analytics';
import { CookieConsent as CookieConsentService } from './shared/cookie-consent/cookie-consent';
import { OmayaI18n } from './shared/i18n/omaya-i18n';
import { PublicSeo } from './shared/seo/public-seo';
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
  private readonly seo = inject(PublicSeo);
  private parallaxFrame: number | null = null;
  private lastTrackedPageView = '';

  constructor(router: Router) {
    effect(() => {
      const site = this.activeSite.site();

      this.i18n.setLocale(site.locale);
      this.document.documentElement.lang = site.locale;
      this.document.documentElement.setAttribute('data-theme', site.theme.dataTheme);
      this.seo.apply(router.routerState.snapshot);
    });

    effect(() => {
      if (this.cookieConsent.currentChoice() === 'accepted') {
        this.trackCurrentPageView(router.url);
      }
    });

    router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.seo.apply(router.routerState.snapshot);

        if (this.isBrowser) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.updateHeroBackgroundPosition();
          this.trackCurrentPageView(event.urlAfterRedirects);
        }
      });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isBrowser || this.parallaxFrame !== null) {
      return;
    }

    this.parallaxFrame = window.requestAnimationFrame(() => {
      this.updateHeroBackgroundPosition();
      this.parallaxFrame = null;
    });
  }

  private updateHeroBackgroundPosition(): void {
    if (!window.matchMedia('(min-width: 48.01rem)').matches) {
      this.document.documentElement.style.removeProperty('--omaya-hero-background-y');
      return;
    }

    const offset = -Math.round(window.scrollY * 0.08);

    this.document.documentElement.style.setProperty('--omaya-hero-background-y', `${offset}px`);
  }

  private trackCurrentPageView(path: string): void {
    if (!this.isBrowser) {
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
