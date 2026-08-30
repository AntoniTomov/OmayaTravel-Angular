import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

import { ActiveSite } from '../../../sites/active-site';
import { FALLBACK_META_PIXEL_ID } from './meta-pixel.config';

type MetaPixelCommand = 'init' | 'track' | 'trackCustom';
type MetaPixelEvent = 'Contact' | 'Lead' | 'PageView' | 'Search' | 'Subscribe' | 'ViewContent';
type FbqFunction = (
  command: MetaPixelCommand,
  eventOrPixelId: MetaPixelEvent | string,
  params?: Record<string, unknown>,
) => void;
type Fbq = FbqFunction & {
  callMethod?: (...args: Parameters<FbqFunction>) => void;
  loaded?: boolean;
  push?: FbqFunction;
  queue?: Parameters<FbqFunction>[];
  version?: string;
};

declare global {
  interface Window {
    _fbq?: Fbq;
    fbq?: Fbq;
  }
}

@Injectable({ providedIn: 'root' })
export class MetaPixel {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly activeSite = inject(ActiveSite);
  private initializedPixelId = '';

  trackPageView(): void {
    if (!this.ensureInitialized()) {
      return;
    }

    this.fbq('track', 'PageView');
  }

  trackEvent(name: string, params: Record<string, unknown> = {}): void {
    if (!this.ensureInitialized()) {
      return;
    }

    const mapped = this.mapEvent(name, params);

    if (!mapped) {
      return;
    }

    this.fbq(mapped.command, mapped.name, mapped.params);
  }

  private ensureInitialized(): boolean {
    const pixelId = this.pixelId();

    if (!this.isBrowser || !pixelId) {
      return false;
    }

    if (this.initializedPixelId === pixelId) {
      return true;
    }

    const windowRef = this.document.defaultView;

    if (!windowRef) {
      return false;
    }

    if (!windowRef.fbq) {
      const fbq: Fbq = ((...args: Parameters<FbqFunction>) => {
        if (fbq.callMethod) {
          fbq.callMethod(...args);
          return;
        }

        fbq.queue?.push(args);
      }) as Fbq;

      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      windowRef.fbq = fbq;
      windowRef._fbq = fbq;
    }

    windowRef.fbq?.('init', pixelId);
    this.appendScript();
    this.initializedPixelId = pixelId;

    return true;
  }

  private pixelId(): string {
    return (this.activeSite.site().analytics.metaPixelId || FALLBACK_META_PIXEL_ID).trim();
  }

  private appendScript(): void {
    const scriptId = 'meta-pixel-fbevents';

    if (this.document.getElementById(scriptId)) {
      return;
    }

    const script = this.document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';

    this.document.head.appendChild(script);
  }

  private mapEvent(
    name: string,
    params: Record<string, unknown>,
  ): {
    command: 'track' | 'trackCustom';
    name: MetaPixelEvent | string;
    params: Record<string, unknown>;
  } | null {
    switch (name) {
      case 'generate_lead':
        return {
          command: 'track',
          name: 'Lead',
          params: {
            content_name: String(params['form_type'] ?? 'form'),
          },
        };
      case 'sign_up':
        return {
          command: 'track',
          name: 'Subscribe',
          params: {
            content_name: String(params['source'] ?? 'newsletter'),
          },
        };
      case 'view_item':
        return {
          command: 'track',
          name: 'ViewContent',
          params: {
            content_ids: [params['item_id']],
            content_name: params['item_name'],
            content_category: params['item_category'],
            currency: params['currency'],
            value: params['price'],
          },
        };
      case 'search':
      case 'search_trip':
        return {
          command: 'track',
          name: 'Search',
          params: {
            content_category: String(params['source'] ?? 'site_search'),
            search_string: String(params['search_term'] ?? params['destination_path'] ?? ''),
          },
        };
      case 'click_enquire':
      case 'click_phone':
      case 'click_email':
        return {
          command: 'track',
          name: 'Contact',
          params: {
            content_name: String(params['source'] ?? params['action'] ?? name),
          },
        };
      case 'popup_view':
      case 'popup_dismiss':
      case 'popup_signup_click':
      case 'select_item':
      case 'select_destination':
      case 'select_month':
      case 'sort_tours':
      case 'filter_tours':
      case 'browse_featured_trips':
      case 'view_tour_section':
      case 'open_tour_gallery':
      case 'open_search':
      case 'click_social':
        return {
          command: 'trackCustom',
          name,
          params: this.toMetaSafeParams(params),
        };
      default:
        return null;
    }
  }

  private toMetaSafeParams(params: Record<string, unknown>): Record<string, unknown> {
    return Object.fromEntries(
      Object.entries(params).filter(([key]) => !['email', 'phone', 'name'].includes(key)),
    );
  }

  private fbq(...args: Parameters<FbqFunction>): void {
    this.document.defaultView?.fbq?.(...args);
  }
}
