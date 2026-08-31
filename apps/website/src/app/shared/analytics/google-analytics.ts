import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from './google-analytics.config';

type GtagCommand = 'config' | 'event' | 'js';
type Gtag = (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    omayaGaNetworkDebugInstalled?: boolean;
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
    this.debug('trackPageView requested', { path, title });

    if (!this.ensureInitialized()) {
      this.debug('trackPageView skipped: analytics not initialized');
      return;
    }

    if (!this.scriptReady) {
      this.pendingPageView = { path, title };
      this.debug('page_view queued until GA script loads', { path, title });
      return;
    }

    this.sendPageView(path, title);
  }

  private sendPageView(path: string, title: string): void {
    this.debug('page_view sent to GA4', {
      path,
      title,
      measurementId: this.measurementId,
    });

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
      this.debug('event skipped: analytics not initialized', { name });
      return;
    }

    this.gtag('event', name, { ...this.debugParams(), ...params });
  }

  private ensureInitialized(): boolean {
    if (!this.isBrowser || !this.measurementId) {
      this.debug('initialization skipped', {
        isBrowser: this.isBrowser,
        hasMeasurementId: Boolean(this.measurementId),
      });
      return false;
    }

    if (this.initialized) {
      this.debug('analytics already initialized');
      return true;
    }

    const windowRef = this.document.defaultView;

    if (!windowRef) {
      this.debug('initialization skipped: window unavailable');
      return false;
    }

    windowRef.dataLayer = windowRef.dataLayer ?? [];
    this.installNetworkDebug(windowRef);
    windowRef.gtag =
      windowRef.gtag ??
      function gtag(...args: Parameters<Gtag>) {
        windowRef.dataLayer?.push(args);
      };

    this.gtag('js', new Date());
    this.gtag('config', this.measurementId, { send_page_view: false });
    this.appendScript();
    this.initialized = true;
    this.debug('analytics initialized', {
      measurementId: this.measurementId,
      hasGtag: typeof windowRef.gtag === 'function',
      dataLayerLength: windowRef.dataLayer?.length ?? 0,
    });

    return true;
  }

  private appendScript(): void {
    const scriptId = 'google-analytics-gtag';

    if (this.document.getElementById(scriptId)) {
      this.scriptReady = true;
      this.debug('GA script already exists in document');
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
        this.debug('GA script loaded', {
          dataLayerLength: this.document.defaultView?.dataLayer?.length ?? 0,
        });

        if (this.pendingPageView) {
          const { path, title } = this.pendingPageView;

          this.pendingPageView = null;
          this.sendPageView(path, title);
        }
      },
      { once: true },
    );
    script.addEventListener(
      'error',
      () => {
        this.debug('GA script failed to load', { src: script.src });
      },
      { once: true },
    );

    this.document.head.appendChild(script);
    this.debug('GA script appended', { src: script.src });
  }

  private gtag(...args: Parameters<Gtag>): void {
    this.document.defaultView?.gtag?.(...args);
  }

  private debugParams(): Record<string, true> {
    return this.document.location?.search.includes('ga_debug=1') ? { debug_mode: true } : {};
  }

  private installNetworkDebug(windowRef: Window): void {
    if (
      !this.document.location?.search.includes('ga_debug=1') ||
      windowRef.omayaGaNetworkDebugInstalled
    ) {
      return;
    }

    windowRef.omayaGaNetworkDebugInstalled = true;

    const isAnalyticsUrl = (url: unknown): boolean =>
      typeof url === 'string' &&
      /(?:google-analytics\.com|analytics\.google\.com|googletagmanager\.com)/.test(url);

    const originalSendBeacon = windowRef.navigator.sendBeacon.bind(windowRef.navigator);

    windowRef.navigator.sendBeacon = (url: string | URL, data?: BodyInit | null): boolean => {
      const target = String(url);

      if (isAnalyticsUrl(target)) {
        this.debug('GA network sendBeacon', { url: target });
      }

      return originalSendBeacon(url, data);
    };

    const originalFetch = windowRef.fetch?.bind(windowRef);

    if (originalFetch) {
      windowRef.fetch = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
        const target =
          typeof input === 'string' || input instanceof URL ? String(input) : input.url;

        if (isAnalyticsUrl(target)) {
          this.debug('GA network fetch', { url: target });
        }

        return originalFetch(input, init);
      };
    }

    const XMLHttpRequestRef = (windowRef as Window & { XMLHttpRequest: typeof XMLHttpRequest })
      .XMLHttpRequest;
    const originalOpen = XMLHttpRequestRef.prototype.open as (...args: unknown[]) => void;

    XMLHttpRequestRef.prototype.open = function open(
      method: string,
      url: string | URL,
      async = true,
      username?: string | null,
      password?: string | null,
    ): void {
      const target = String(url);

      if (isAnalyticsUrl(target)) {
        const event = new CustomEvent('omaya-ga-debug', {
          detail: {
            message: 'GA network xhr',
            details: { method, url: target },
          },
        });

        windowRef.dispatchEvent(event);
      }

      originalOpen.call(this, method, url, async, username, password);
    };

    windowRef.addEventListener('omaya-ga-debug', (event) => {
      const detail = (event as CustomEvent<{ message: string; details: Record<string, unknown> }>)
        .detail;

      this.debug(detail.message, detail.details);
    });

    this.debug('GA network diagnostic installed');
  }

  private debug(message: string, details: Record<string, unknown> = {}): void {
    if (!this.isBrowser || !this.document.location?.search.includes('ga_debug=1')) {
      return;
    }

    const windowRef = this.document.defaultView;
    const line = `[${new Date().toLocaleTimeString()}] ${message}${
      Object.keys(details).length ? ` ${JSON.stringify(details)}` : ''
    }`;

    windowRef?.console.info('[Omaya GA Debug]', message, details);

    let panel = this.document.getElementById('omaya-ga-debug');

    if (!panel) {
      panel = this.document.createElement('pre');
      panel.id = 'omaya-ga-debug';
      panel.setAttribute('aria-label', 'Omaya GA debug');
      panel.style.cssText = [
        'position:fixed',
        'left:12px',
        'bottom:12px',
        'z-index:2147483647',
        'max-width:min(92vw,720px)',
        'max-height:42vh',
        'overflow:auto',
        'padding:12px',
        'margin:0',
        'border-radius:8px',
        'background:rgba(0,0,0,0.86)',
        'color:#fff',
        'font:12px/1.45 ui-monospace,SFMono-Regular,Consolas,monospace',
        'white-space:pre-wrap',
        'box-shadow:0 12px 32px rgba(0,0,0,0.28)',
      ].join(';');
      this.document.body.appendChild(panel);
    }

    panel.textContent = `${panel.textContent ?? ''}${line}\n`;
  }
}
