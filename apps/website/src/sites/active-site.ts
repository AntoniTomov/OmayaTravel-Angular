import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

import { DEFAULT_SITE_ID, SITE_CONFIGS, siteConfigForId } from '.';
import { SiteConfig, SiteId } from './site.types';

const SITE_PREVIEW_QUERY_PARAM = 'site';
const SITE_PREVIEW_STORAGE_KEY = 'omaya-active-site-preview';

@Injectable({ providedIn: 'root' })
export class ActiveSite {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly activeSite = signal<SiteConfig>(this.detectSite());

  readonly site = this.activeSite.asReadonly();

  setPreviewSite(siteId: SiteId): void {
    if (!this.isLocalPreviewHost(this.currentUrl().hostname)) {
      return;
    }

    this.activeSite.set(siteConfigForId(siteId));
    this.localStorage()?.setItem(SITE_PREVIEW_STORAGE_KEY, siteId);
  }

  private detectSite(): SiteConfig {
    const url = this.currentUrl();
    const isLocalPreview = this.isLocalPreviewHost(url.hostname);
    const querySite = isLocalPreview ? url.searchParams.get(SITE_PREVIEW_QUERY_PARAM) : null;

    if (querySite) {
      this.localStorage()?.setItem(SITE_PREVIEW_STORAGE_KEY, querySite);
      return siteConfigForId(querySite);
    }

    const hostname = url.hostname.toLowerCase();
    const domainMatch = Object.values(SITE_CONFIGS).find((config) => {
      if (!config.domain) {
        return false;
      }

      return hostname === config.domain || hostname === `www.${config.domain}`;
    });

    if (domainMatch) {
      return domainMatch;
    }

    if (hostname.includes('amelia')) {
      return SITE_CONFIGS.amelia;
    }

    return SITE_CONFIGS[DEFAULT_SITE_ID];
  }

  private currentUrl(): URL {
    try {
      return new URL(this.document.location.href);
    } catch {
      return new URL('http://localhost/');
    }
  }

  private localStorage(): Storage | null {
    return this.isBrowser ? (this.document.defaultView?.localStorage ?? null) : null;
  }

  private isLocalPreviewHost(hostname: string): boolean {
    return ['localhost', '127.0.0.1', '::1'].includes(hostname.toLowerCase());
  }
}
