import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from './google-analytics.config';

type GtagCommand = 'config' | 'event' | 'js';
type Gtag = (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

@Injectable({ providedIn: 'root' })
export class GoogleAnalytics {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly measurementId = GOOGLE_ANALYTICS_MEASUREMENT_ID.trim();
  private initialized = false;
  private scriptReady = false;
  private pendingPageView: { path: string; title: string } | null = null;

  trackPageView(path: string, title = this.document.title): void {
    if (!this.ensureInitialized()) {
      return;
    }

    if (!this.scriptReady) {
      this.pendingPageView = { path, title };
      return;
    }

    this.sendPageView(path, title);
  }

  private sendPageView(path: string, title: string): void {
    this.gtag('event', 'page_view', {
      send_to: this.measurementId,
      ...this.debugParams(),
      page_path: path,
      page_title: title,
      page_location: this.document.location?.href,
    });
  }

  trackEvent(name: string, params: Record<string, unknown> = {}): void {
    if (!this.ensureInitialized()) {
      return;
    }

    this.gtag('event', name, { ...this.debugParams(), ...params });
  }

  private ensureInitialized(): boolean {
    if (!this.isBrowser || !this.measurementId) {
      return false;
    }

    if (this.initialized) {
      return true;
    }

    const windowRef = this.document.defaultView;

    if (!windowRef) {
      return false;
    }

    windowRef.dataLayer = windowRef.dataLayer ?? [];
    windowRef.gtag =
      windowRef.gtag ??
      function gtag(...args: Parameters<Gtag>) {
        windowRef.dataLayer?.push(args);
      };

    this.gtag('js', new Date());
    this.gtag('config', this.measurementId, { send_page_view: false });
    this.appendScript();
    this.initialized = true;

    return true;
  }

  private appendScript(): void {
    const scriptId = 'google-analytics-gtag';

    if (this.document.getElementById(scriptId)) {
      return;
    }

    const script = this.document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      this.measurementId,
    )}`;
    script.addEventListener(
      'load',
      () => {
        this.scriptReady = true;

        if (this.pendingPageView) {
          const { path, title } = this.pendingPageView;

          this.pendingPageView = null;
          this.sendPageView(path, title);
        }
      },
      { once: true },
    );

    this.document.head.appendChild(script);
  }

  private gtag(...args: Parameters<Gtag>): void {
    this.document.defaultView?.gtag?.(...args);
  }

  private debugParams(): Record<string, true> {
    return this.document.location?.search.includes('ga_debug=1') ? { debug_mode: true } : {};
  }
}
