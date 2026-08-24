import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, effect, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PublicHeader } from './features/public-header/public-header';
import { PublicFooter } from './features/public-footer/public-footer';
import { NewsletterPopup } from './features/newsletter-popup/newsletter-popup';
import { GoogleAnalytics } from './shared/analytics/google-analytics';
import { OmayaI18n } from './shared/i18n/omaya-i18n';

@Component({
  selector: 'app-root',
  imports: [PublicHeader, PublicFooter, RouterOutlet, NewsletterPopup],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);
  private readonly analytics = inject(GoogleAnalytics);
  private readonly i18n = inject(OmayaI18n);

  constructor(router: Router) {
    effect(() => {
      this.document.documentElement.lang = this.i18n.locale();
    });

    router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (this.isBrowser) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.analytics.trackPageView(event.urlAfterRedirects);
        }
      });
  }
}
