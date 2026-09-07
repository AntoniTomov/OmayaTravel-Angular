import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { ActiveSite } from '../../../sites/active-site';
import { articlePageTitle } from './page-title';
import { findBlogPostBySlug } from '../content/blog-content';
import { findTourBySlug } from '../content/tour-content';
import { findTourListingPage } from '../content/tour-list-content';
import { ogImageFor } from './og-images';
import { PUBLIC_CANONICAL_HOST, withTrailingSlash } from '../routing/public-routes';
import {
  DEFAULT_SOCIAL_IMAGE,
  PageMetadata,
  destinationPageMetadata,
  staticPageMetadata,
} from './page-metadata';
import {
  BreadcrumbEntry,
  JsonLd,
  SeoSiteIdentity,
  absoluteUrl,
  blogPostingJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
  tourJsonLd,
  webSiteJsonLd,
} from './structured-data';

/** Marks the JSON-LD scripts this service owns, so stale ones can be cleared on navigation. */
const JSON_LD_MARKER = 'data-omaya-seo';

/** Matches the address the SSR form handler already replies from (`server.ts`). */
const SITE_CONTACT_EMAIL = 'info@omayatravel.com';

/** Used when a route carries no `routeKey` we recognise, so a page never ships without metadata. */
const FALLBACK_METADATA: PageMetadata = {
  title: 'Omaya Travel',
  description:
    'Small group adventure tours to Bulgaria, Kyrgyzstan, Morocco and Algeria, with local guides and genuinely small groups.',
};

interface ResolvedPage {
  metadata: PageMetadata;
  canonicalPath: string;
  breadcrumbs: readonly BreadcrumbEntry[];
  jsonLd: readonly JsonLd[];
}

/**
 * Sets the search and social metadata for the active route.
 *
 * Everything written here lives in the document head — title, meta tags, canonical link and JSON-LD.
 * No visible page copy is touched. Runs during SSR as well as in the browser, so the tags are
 * present in the served HTML that crawlers read.
 */
@Injectable({ providedIn: 'root' })
export class OmayaSeo {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly activeSite = inject(ActiveSite);

  /** Called once from the root component; subsequent updates follow router navigation. */
  start(): void {
    this.update();

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.update());
  }

  private update(): void {
    const identity = this.siteIdentity();
    const page = this.resolvePage(identity);
    const canonical = absoluteUrl(identity.canonicalHost, page.canonicalPath);
    const image = absoluteUrl(identity.canonicalHost, page.metadata.image ?? DEFAULT_SOCIAL_IMAGE);

    this.title.setTitle(page.metadata.title);

    this.meta.updateTag({ name: 'description', content: page.metadata.description });
    this.meta.updateTag({
      name: 'robots',
      content: page.metadata.noIndex ? 'noindex, follow' : 'index, follow',
    });

    this.meta.updateTag({ property: 'og:type', content: page.metadata.ogType ?? 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: identity.name });
    this.meta.updateTag({ property: 'og:title', content: page.metadata.title });
    this.meta.updateTag({ property: 'og:description', content: page.metadata.description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:locale', content: identity.locale });

    // Article-only tag. Removed rather than left stale when navigating from a post to any
    // other page, because Meta persists tags across navigations.
    if (page.metadata.publishedTime) {
      this.meta.updateTag({
        property: 'article:published_time',
        content: page.metadata.publishedTime,
      });
    } else {
      this.meta.removeTag('property="article:published_time"');
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.metadata.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.metadata.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonicalLink(canonical);

    const breadcrumbs = breadcrumbJsonLd(identity, page.breadcrumbs);

    this.setJsonLd([
      organizationJsonLd(identity),
      webSiteJsonLd(identity),
      ...(breadcrumbs ? [breadcrumbs] : []),
      ...page.jsonLd,
    ]);
  }

  private siteIdentity(): SeoSiteIdentity {
    const site = this.activeSite.site();
    const canonicalHost = site.domain ? `https://${site.domain}` : PUBLIC_CANONICAL_HOST;

    return {
      name: site.brand.name,
      canonicalHost,
      logoUrl: site.brand.logoSrc,
      email: SITE_CONTACT_EMAIL,
      locale: site.locale,
      organisation: site.organisation,
    };
  }

  private resolvePage(identity: SeoSiteIdentity): ResolvedPage {
    const snapshot = this.deepestRoute();
    const data = snapshot.data;
    const routeKey = data['routeKey'] as string | undefined;
    const canonicalPath = this.canonicalPath(snapshot);

    const tourSlug = (data['tourSlug'] as string | undefined) ?? snapshot.params['tourSlug'];
    const tour = findTourBySlug(tourSlug);

    if (tour) {
      const canonical = absoluteUrl(identity.canonicalHost, canonicalPath);
      const faq = faqJsonLd(tour);

      return {
        metadata: {
          title: tour.seo.title,
          description: tour.seo.description,
          image: ogImageFor(`tour-${tour.slug}`) ?? tour.heroImage.src,
        },
        canonicalPath,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Destinations', path: '/destinations/' },
          {
            name: tour.destination.country,
            path: '/destinations/' + tour.destination.country.toLowerCase() + '/',
          },
          { name: tour.title, path: canonicalPath },
        ],
        jsonLd: [tourJsonLd(identity, tour, canonical), ...(faq ? [faq] : [])],
      };
    }

    const articleSlug = data['articleSlug'] as string | undefined;
    const post = findBlogPostBySlug(articleSlug);

    if (post) {
      const canonical = absoluteUrl(identity.canonicalHost, canonicalPath);

      return {
        metadata: {
          title: articlePageTitle(post.title, identity.name),
          description: post.excerpt,
          image: ogImageFor(`article-${post.slug}`) ?? (post.heroImage ?? post.image).src,
          ogType: 'article',
          publishedTime: post.publishedAt,
        },
        canonicalPath,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog-list/' },
          { name: post.title, path: canonicalPath },
        ],
        jsonLd: [blogPostingJsonLd(identity, post, canonical)],
      };
    }

    const destinationSlug =
      (data['destinationSlug'] as string | undefined) ?? snapshot.params['destinationSlug'];
    const destination = destinationPageMetadata(destinationSlug);

    if (destination) {
      return {
        metadata: destination,
        canonicalPath,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Destinations', path: '/destinations/' },
          {
            name: destinationSlug.charAt(0).toUpperCase() + destinationSlug.slice(1),
            path: canonicalPath,
          },
        ],
        jsonLd: [],
      };
    }

    const metadata = staticPageMetadata(routeKey) ?? FALLBACK_METADATA;
    // Listing pages carry their own hero image, so a shared link previews the page it points at
    // rather than the generic site fallback.
    const listingSlug = data['listingSlug'] as string | undefined;
    const listingImage = listingSlug
      ? (ogImageFor(`listing-${listingSlug.replaceAll('/', '-')}`) ??
        findTourListingPage(listingSlug).heroImage)
      : undefined;

    return {
      metadata: listingImage ? { ...metadata, image: listingImage } : metadata,
      canonicalPath,
      breadcrumbs: this.staticBreadcrumbs(metadata, canonicalPath),
      jsonLd: [],
    };
  }

  private staticBreadcrumbs(
    metadata: PageMetadata,
    canonicalPath: string,
  ): readonly BreadcrumbEntry[] {
    if (canonicalPath === '/') {
      return [];
    }

    return [
      { name: 'Home', path: '/' },
      { name: metadata.title.split(' | ')[0], path: canonicalPath },
    ];
  }

  /**
   * Prefers the `canonicalPath` already declared on the route, expanding `canonicalPathPattern`
   * placeholders for parameterised routes, and falls back to the navigated URL.
   */
  private canonicalPath(snapshot: ActivatedRouteSnapshot): string {
    const declared = snapshot.data['canonicalPath'] as string | undefined;

    if (declared) {
      return declared;
    }

    const pattern = snapshot.data['canonicalPathPattern'] as string | undefined;

    if (pattern) {
      const expanded = pattern.replace(/:([A-Za-z0-9_]+)/g, (match, param: string) => {
        const value = snapshot.params[param] ?? this.segmentFallback(snapshot, param);

        return value ?? match;
      });

      return withTrailingSlash(expanded);
    }

    const path = this.router.url.split(/[?#]/)[0];

    return withTrailingSlash(path);
  }

  /**
   * Canonical matcher routes carry their slug as a URL segment rather than a router param, so read
   * it back off the matched segments when `params` has nothing.
   */
  private segmentFallback(snapshot: ActivatedRouteSnapshot, param: string): string | undefined {
    const segments = snapshot.url.map((segment) => segment.path).filter(Boolean);

    if (param === 'tourSlug' || param === 'destinationSlug') {
      return segments[segments.length - 1];
    }

    return undefined;
  }

  private deepestRoute(): ActivatedRouteSnapshot {
    let route = this.router.routerState.snapshot.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    return route;
  }

  private setCanonicalLink(canonical: string): void {
    const head = this.document.head;

    if (!head) {
      return;
    }

    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', canonical);
  }

  private setJsonLd(blocks: readonly JsonLd[]): void {
    const head = this.document.head;

    if (!head) {
      return;
    }

    for (const stale of Array.from(head.querySelectorAll(`script[${JSON_LD_MARKER}]`))) {
      stale.remove();
    }

    for (const block of blocks) {
      const script = this.document.createElement('script');

      script.setAttribute('type', 'application/ld+json');
      script.setAttribute(JSON_LD_MARKER, '');
      script.textContent = JSON.stringify(block);
      head.appendChild(script);
    }
  }
}
