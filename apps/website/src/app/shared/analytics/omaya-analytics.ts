import { Injectable, inject } from '@angular/core';

import { GoogleAnalytics } from './google-analytics';
import { MetaPixel } from './meta-pixel';
import { CookieConsent } from '../cookie-consent/cookie-consent';

@Injectable({ providedIn: 'root' })
export class OmayaAnalytics {
  private readonly googleAnalytics = inject(GoogleAnalytics);
  private readonly metaPixel = inject(MetaPixel);
  private readonly cookieConsent = inject(CookieConsent);

  /** Forwards the cookie banner choice, so a withdrawal also stops the tags already loaded. */
  setConsent(granted: boolean): void {
    this.googleAnalytics.setConsent(granted);
    this.metaPixel.setConsent(granted);
  }

  trackPageView(path: string, title?: string): void {
    if (!this.cookieConsent.canUseAnalytics()) {
      return;
    }

    this.googleAnalytics.trackPageView(path, title);
    this.metaPixel.trackPageView();
  }

  trackEvent(name: string, params: Record<string, unknown> = {}): void {
    if (!this.cookieConsent.canUseAnalytics()) {
      return;
    }

    this.googleAnalytics.trackEvent(name, params);
    this.metaPixel.trackEvent(name, params);
  }
}
