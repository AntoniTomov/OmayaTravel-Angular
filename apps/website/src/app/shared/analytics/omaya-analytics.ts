import { Injectable, inject } from '@angular/core';

import { GoogleAnalytics } from './google-analytics';
import { MetaPixel } from './meta-pixel';

@Injectable({ providedIn: 'root' })
export class OmayaAnalytics {
  private readonly googleAnalytics = inject(GoogleAnalytics);
  private readonly metaPixel = inject(MetaPixel);

  trackPageView(path: string, title?: string): void {
    this.googleAnalytics.trackPageView(path, title);
    this.metaPixel.trackPageView();
  }

  trackEvent(name: string, params: Record<string, unknown> = {}): void {
    this.googleAnalytics.trackEvent(name, params);
    this.metaPixel.trackEvent(name, params);
  }
}
