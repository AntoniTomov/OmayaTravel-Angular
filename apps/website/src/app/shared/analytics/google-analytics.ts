import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

import { ActiveSite } from '../../../sites/active-site';

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
  private readonly activeSite = inject(ActiveSite);
  private initializedMeasurementId = '';
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
      send_to: this.measurementId(),
      page_path: path,
      page_title: title,
      page_location: this.document.location?.href,
    });
  }

  trackEvent(name: string, params: Record<string, unknown> = {}): void {
    if (!this.ensureInitialized()) {
      return;
    }

    this.gtag('event', name, params);
  }

  private ensureInitialized(): boolean {
    const measurementId = this.measurementId();

    if (!this.isBrowser || !measurementId) {
      return false;
    }

    if (this.initializedMeasurementId === measurementId) {
      return true;
    }

    const windowRef = this.document.defaultView;

    if (!windowRef) {
      return false;
    }

    windowRef.dataLayer = windowRef.dataLayer ?? [];
    windowRef.gtag =
      windowRef.gtag ??
      function gtag() {
        windowRef.dataLayer?.push(arguments);
      };

    this.gtag('js', new Date());
    this.gtag('config', measurementId, { send_page_view: false });
    this.appendScript();
    this.initializedMeasurementId = measurementId;

    return true;
  }

  private appendScript(): void {
    const scriptId = 'google-analytics-gtag';

    if (this.document.getElementById(scriptId)) {
      this.scriptReady = true;
      return;
    }

    const script = this.document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      this.measurementId(),
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

  private measurementId(): string {
    return this.activeSite.site().analytics.gaMeasurementId.trim();
  }
}
