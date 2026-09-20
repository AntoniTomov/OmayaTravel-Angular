import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

import {
  DEFAULT_SITE_ID,
  SITE_CONFIGS,
  siteConfigForHostname,
  siteConfigForId,
  siteConfigForPort,
} from '.';
import { BUILD_SITE_OVERRIDE } from './build-site';
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

    // A build made for one site stays that site wherever it is served locally, which is what makes
    // prerendering resolve a brand at all: there is no host and no port to read from.
    if (isLocalPreview && BUILD_SITE_OVERRIDE) {
      return BUILD_SITE_OVERRIDE;
    }

    // Each site's dev server owns a port, so `localhost:4200` and `localhost:4201` are as good as
    // two domains. Prerendering renders against `http://localhost` with no port, so this is inert
    // there and the build's own site still decides.
    const portMatch = isLocalPreview ? siteConfigForPort(url.port) : null;

    if (portMatch) {
      return portMatch;
    }

    const hostname = url.hostname.toLowerCase();
    const domainMatch = siteConfigForHostname(hostname);

    if (domainMatch.id !== DEFAULT_SITE_ID) {
      return domainMatch;
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
