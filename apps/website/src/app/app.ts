import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, effect, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PublicHeader } from './features/public-header/public-header';
import { PublicFooter } from './features/public-footer/public-footer';
import { NewsletterPopup } from './features/newsletter-popup/newsletter-popup';
import { CookieConsent } from './features/cookie-consent/cookie-consent';
import { OmayaAnalytics } from './shared/analytics/omaya-analytics';
import { OmayaI18n } from './shared/i18n/omaya-i18n';
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
  private readonly activeSite = inject(ActiveSite);
  private readonly i18n = inject(OmayaI18n);
  private parallaxFrame: number | null = null;

  constructor(router: Router) {
    effect(() => {
      const site = this.activeSite.site();

      this.i18n.setLocale(site.locale);
      this.document.documentElement.lang = site.locale;
      this.document.documentElement.setAttribute('data-theme', site.theme.dataTheme);
    });

    router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (this.isBrowser) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.updateHeroBackgroundPosition();
          this.analytics.trackPageView(event.urlAfterRedirects);
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
    const offset = -Math.round(window.scrollY * 0.08);

    this.document.documentElement.style.setProperty('--omaya-hero-background-y', `${offset}px`);
  }
}
