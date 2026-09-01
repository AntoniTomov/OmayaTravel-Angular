import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { ActiveSite } from '../../../sites/active-site';
import type { SiteConfig } from '../../../sites/site.types';
import { canonicalUrl } from '../routing/public-routes';

@Injectable({ providedIn: 'root' })
export class PublicSeo {
  private readonly activeSite = inject(ActiveSite);
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  apply(snapshot: RouterStateSnapshot): void {
    const site = this.activeSite.site();
    const route = this.deepestRoute(snapshot.root);
    const noindex = Boolean(route.data['noindex']) || route.data['routeStatus'] === 404;
    const title = this.pageTitle(site, route);
    const description = String(route.data['description'] ?? site.seo.defaultDescription);
    const canonical = noindex ? null : this.canonicalForRoute(site, route);

    this.title.setTitle(title);
    this.setTag('name', 'description', description);
    this.setTag('name', 'robots', noindex ? 'noindex,follow' : 'index,follow');
    this.setTag('property', 'og:site_name', site.brand.name);
    this.setTag('property', 'og:title', title);
    this.setTag('property', 'og:description', description);
    this.setTag('property', 'og:type', 'website');
    this.setTag('property', 'og:locale', site.seo.locale);
    this.setTag('property', 'og:image', this.absoluteUrl(site, site.seo.ogImage));

    if (canonical) {
      this.setTag('property', 'og:url', canonical);
      this.setCanonical(canonical);
      return;
    }

    this.removeCanonical();
    this.meta.removeTag("property='og:url'");
  }

  private deepestRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let active = route;

    while (active.firstChild) {
      active = active.firstChild;
    }

    return active;
  }

  private pageTitle(site: SiteConfig, route: ActivatedRouteSnapshot): string {
    const routeTitle = route.title ?? route.data['title'];

    if (typeof routeTitle === 'string' && routeTitle.trim()) {
      return routeTitle.includes(site.brand.name)
        ? routeTitle
        : `${routeTitle.trim()} | ${site.brand.name}`;
    }

    return site.seo.defaultTitle;
  }

  private canonicalForRoute(site: SiteConfig, route: ActivatedRouteSnapshot): string | null {
    const canonicalPath = route.data['canonicalPath'];

    if (typeof canonicalPath === 'string') {
      return canonicalUrl(canonicalPath, site);
    }

    const canonicalPathPattern = route.data['canonicalPathPattern'];

    if (typeof canonicalPathPattern !== 'string') {
      return null;
    }

    const path = Object.entries(route.params).reduce(
      (result, [key, value]) => result.replace(`:${key}`, String(value)),
      canonicalPathPattern,
    );

    return canonicalUrl(path, site);
  }

  private absoluteUrl(site: SiteConfig, value: string): string {
    if (/^https?:\/\//.test(value)) {
      return value;
    }

    return `${site.seo.canonicalHost}${value.startsWith('/') ? value : `/${value}`}`;
  }

  private setCanonical(href: string): void {
    let link = this.document.querySelector<HTMLLinkElement>("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }

    link.href = href;
  }

  private removeCanonical(): void {
    this.document.querySelector("link[rel='canonical']")?.remove();
  }

  private setTag(attribute: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attribute]: key, content }, `${attribute}='${key}'`);
  }
}
