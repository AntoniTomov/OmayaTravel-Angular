import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

import { ActiveSite } from '../../../sites/active-site';

type GtagCommand = 'config' | 'consent' | 'event' | 'js';
type Gtag = (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

// GA4 treats these event parameter names as traffic-source overrides, like utm_*: sending one
// replaces the session's real source/medium (e.g. google / cpc), which breaks attribution and
// Google Ads conversion imports.
const RESERVED_GA4_PARAMS: readonly string[] = [
  'source',
  'medium',
  'campaign',
  'term',
  'content',
  'campaign_id',
  'campaign_source',
  'campaign_medium',
  'campaign_name',
  'campaign_term',
  'campaign_content',
];

type ConsentValue = 'granted' | 'denied';

/** The four Consent Mode v2 signals, all moving together with the single cookie banner choice. */
export function consentState(granted: boolean): Record<string, ConsentValue> {
  const value: ConsentValue = granted ? 'granted' : 'denied';

  return {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  };
}

/** `source` becomes `click_location`; any other reserved name gets a `ui_` prefix. */
export function toGa4SafeParams(params: Record<string, unknown>): Record<string, unknown> {
  const safe: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(params)) {
    if (key === 'source') {
      safe['click_location'] = value;
    } else if (RESERVED_GA4_PARAMS.includes(key)) {
      safe[`ui_${key}`] = value;
    } else {
      safe[key] = value;
    }
  }

  return safe;
}

@Injectable({ providedIn: 'root' })
export class GoogleAnalytics {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly activeSite = inject(ActiveSite);
  private initializedMeasurementId = '';
  private scriptReady = false;
  private pendingPageView: { path: string; title: string } | null = null;
  private consentGranted = false;

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

    this.gtag('event', name, toGa4SafeParams(params));
  }

  /**
   * Consent Mode v2, "basic" flavour: the gtag script is not loaded until the visitor accepts, so
   * nothing reaches Google beforehand. This tells Google about a later withdrawal (or a repeated
   * acceptance). Before the tag has been initialised there is nothing to update.
   */
  setConsent(granted: boolean): void {
    if (!this.initializedMeasurementId || granted === this.consentGranted) {
      return;
    }

    this.consentGranted = granted;
    this.gtag('consent', 'update', consentState(granted));
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
    // Declare every consent signal as denied before anything else, then grant them straight away:
    // this class is only reached after the visitor accepted the banner. Without these signals
    // Google treats EEA traffic as non-personalised (npa=1) and limits Google Ads conversions.
    this.gtag('consent', 'default', consentState(false));
    this.gtag('consent', 'update', consentState(true));
    this.consentGranted = true;
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
