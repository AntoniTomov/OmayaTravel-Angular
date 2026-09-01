import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { ActiveSite } from '../../../sites/active-site';
import type { SiteConfig, SitePageSeo } from '../../../sites/site.types';
import { findBlogPostBySlug } from '../content/blog-content';
import { findTourBySlug } from '../content/tour-content';
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
    const pageSeo = this.pageSeoForRoute(site, route) ?? this.contentSeoForRoute(site, route);
    const title = this.pageTitle(site, route, pageSeo);
    const description = String(
      pageSeo?.description ?? route.data['description'] ?? site.seo.defaultDescription,
    );
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

  private pageTitle(
    site: SiteConfig,
    route: ActivatedRouteSnapshot,
    pageSeo: Pick<SitePageSeo, 'title' | 'description'> | null,
  ): string {
    if (pageSeo?.title.trim()) {
      return pageSeo.title.includes(site.brand.name)
        ? pageSeo.title
        : `${pageSeo.title.trim()} | ${site.brand.name}`;
    }

    const routeTitle = route.title ?? route.data['title'];

    if (typeof routeTitle === 'string' && routeTitle.trim()) {
      return routeTitle.includes(site.brand.name)
        ? routeTitle
        : `${routeTitle.trim()} | ${site.brand.name}`;
    }

    return site.seo.defaultTitle;
  }

  /**
   * Detail routes (tours, blog articles) carry their own title/description in the
   * content model. Without this, every tour and article would inherit the generic
   * site-level title, which is both an SEO and a share-preview problem.
   */
  private contentSeoForRoute(
    site: SiteConfig,
    route: ActivatedRouteSnapshot,
  ): Pick<SitePageSeo, 'title' | 'description'> | null {
    if (route.data['routeType'] === 'tour-detail') {
      const tour = findTourBySlug(route.params['tourSlug'], site.id);

      return tour ? { title: tour.seo.title, description: tour.seo.description } : null;
    }

    if (route.data['routeType'] === 'blog-article') {
      const post = findBlogPostBySlug(String(route.data['articleSlug'] ?? ''), site.id);

      return post ? { title: post.title, description: post.excerpt } : null;
    }

    return null;
  }

  private pageSeoForRoute(site: SiteConfig, route: ActivatedRouteSnapshot): SitePageSeo | null {
    const canonicalPath = this.resolvedCanonicalPath(route);

    if (!canonicalPath) {
      return null;
    }

    return site.content.pageSeo?.find((pageSeo) => pageSeo.canonicalPath === canonicalPath) ?? null;
  }

  private canonicalForRoute(site: SiteConfig, route: ActivatedRouteSnapshot): string | null {
    const canonicalPath = this.resolvedCanonicalPath(route);

    return canonicalPath ? canonicalUrl(canonicalPath, site) : null;
  }

  /**
   * Static routes carry `canonicalPath`; parameterised routes (tour and destination
   * detail pages) carry `canonicalPathPattern` and fill it from the route params.
   */
  private resolvedCanonicalPath(route: ActivatedRouteSnapshot): string | null {
    const canonicalPath = route.data['canonicalPath'];

    if (typeof canonicalPath === 'string') {
      return canonicalPath;
    }

    const canonicalPathPattern = route.data['canonicalPathPattern'];

    if (typeof canonicalPathPattern !== 'string') {
      return null;
    }

    return Object.entries(route.params).reduce(
      (result, [key, value]) => result.replace(`:${key}`, String(value)),
      canonicalPathPattern,
    );
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
