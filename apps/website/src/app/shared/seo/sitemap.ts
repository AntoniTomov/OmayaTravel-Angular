import { SITE_CONFIGS } from '../../../sites';
import { findBlogPostBySlug } from '../content/blog-content';
import { findTourBySlug } from '../content/tour-content';
import {
  PUBLIC_CANONICAL_HOST,
  PUBLIC_INDEXABLE_ROUTES,
  PublicRouteDefinition,
} from '../routing/public-routes';
import { DESTINATION_PAGE_METADATA, STATIC_PAGE_METADATA } from './page-metadata';

/**
 * Sitemap and robots.txt generation.
 *
 * Both are built from the same route tables the router uses, so they cannot drift from the real
 * site. `sitemap.xml` is a sitemap *index* even though there is only one child today, so a second
 * child can be added when blog volume justifies splitting it, without changing the URL Google
 * already knows. The site is English-only on one domain, so no per-language children are planned.
 */
export const SITEMAP_INDEX_PATH = '/sitemap.xml';
export const SITEMAP_PAGES_PATH = '/sitemap-pages.xml';

/**
 * Canonical origin to advertise for an incoming request host.
 *
 * Matched against the configured site domains rather than echoed back. An earlier version returned
 * `https://${req.host}` for anything that was not localhost, which meant a staging box, a preview
 * hostname or a stray `Host` header could publish a sitemap and robots.txt declaring itself a
 * canonical copy of the whole site. Unknown hosts now fall back to the default canonical host —
 * the same origin the page-level canonical tags use.
 */
export function canonicalHostForRequestHost(requestHost: string | null | undefined): string {
  const hostname = (requestHost ?? '')
    .toLowerCase()
    .split(':')[0]
    .replace(/^www\./, '');
  const match = Object.values(SITE_CONFIGS).find(
    (config) => config.domain && config.domain.toLowerCase() === hostname,
  );

  return match?.domain ? `https://${match.domain}` : PUBLIC_CANONICAL_HOST;
}

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
}

/**
 * The route table derives its key from the URL (`static-{slug}`), while `app.routes.ts` registers
 * the key the rendering component uses. Both are legitimate, and for eight routes they disagree.
 * This map is the single place that reconciles them, so what the sitemap believes about a page and
 * what {@link OmayaSeo} does at runtime cannot drift apart.
 */
const ROUTE_KEY_ALIASES: Readonly<Record<string, string>> = {
  'static-blog-list': 'blog-list',
  'static-tours-list': 'tour-listing-tours-list',
  'static-private-tour-planning': 'tour-listing-private-tour-planning',
  'static-september-2027': 'tour-listing-september-2027',
  'static-calendar-2027/september': 'tour-listing-calendar-2027/september',
  'static-calendar': 'tour-calendar-calendar',
  'static-calendar-2027': 'tour-calendar-calendar-2027',
  'static-private-tours-your-trip-your-rules/describe': 'static-private-tour-form',
};

function registryKey(route: PublicRouteDefinition): string {
  return (
    ROUTE_KEY_ALIASES[route.key] ??
    // Category routes are keyed `tour-category-*` in the route table but rendered by the tour
    // listing component, which registers them as `tour-listing-*`.
    route.key.replace('tour-category-', 'tour-listing-')
  );
}

export interface RouteIndexability {
  /**
   * False when no metadata source claims this route at all. That is a registry gap, not a decision:
   * such a route is left out of the sitemap and the spec fails, so it gets reviewed rather than
   * silently treated as indexable.
   */
  resolved: boolean;
  noIndex: boolean;
}

/**
 * Effective indexability for a route, resolved the same way {@link OmayaSeo} resolves metadata at
 * runtime: authored tour content, then blog content, then the destination registry, then the static
 * registry. Exported so specs assert against this rather than a copy that can drift.
 */
export function routeIndexability(route: PublicRouteDefinition): RouteIndexability {
  if (route.type === 'tour-detail') {
    // Tours carry their own authored `seo` copy and are always indexable.
    return { resolved: Boolean(findTourBySlug(route.path.split('/').pop())), noIndex: false };
  }

  if (route.type === 'blog-article') {
    return { resolved: Boolean(findBlogPostBySlug(route.path)), noIndex: false };
  }

  if (route.type === 'destination-detail') {
    const slug = route.path.split('/').pop();
    const metadata = slug ? DESTINATION_PAGE_METADATA[slug] : undefined;

    return { resolved: Boolean(metadata), noIndex: Boolean(metadata?.noIndex) };
  }

  const metadata = STATIC_PAGE_METADATA[registryKey(route)];

  return { resolved: Boolean(metadata), noIndex: Boolean(metadata?.noIndex) };
}

function isIndexable(route: PublicRouteDefinition): boolean {
  const { resolved, noIndex } = routeIndexability(route);

  return resolved && !noIndex;
}

function lastModified(route: PublicRouteDefinition): string | undefined {
  if (route.type !== 'blog-article') {
    return undefined;
  }

  return findBlogPostBySlug(route.path)?.publishedAt;
}

export function sitemapEntries(canonicalHost = PUBLIC_CANONICAL_HOST): readonly SitemapEntry[] {
  return PUBLIC_INDEXABLE_ROUTES.filter(isIndexable).map((route) => ({
    loc: `${canonicalHost}${route.canonicalPath}`,
    lastmod: lastModified(route),
  }));
}

export function buildSitemapIndexXml(canonicalHost = PUBLIC_CANONICAL_HOST): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <sitemap>',
    `    <loc>${escapeXml(`${canonicalHost}${SITEMAP_PAGES_PATH}`)}</loc>`,
    '  </sitemap>',
    '</sitemapindex>',
    '',
  ].join('\n');
}

export function buildSitemapPagesXml(canonicalHost = PUBLIC_CANONICAL_HOST): string {
  const urls = sitemapEntries(canonicalHost).map((entry) =>
    [
      '  <url>',
      `    <loc>${escapeXml(entry.loc)}</loc>`,
      ...(entry.lastmod ? [`    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`] : []),
      '  </url>',
    ].join('\n'),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

/**
 * robots.txt.
 *
 * Deliberately permissive. An earlier version carried `Disallow: /*?*`, which looked tidy and was
 * actively harmful: the legacy WordPress URLs in `PUBLIC_QUERY_REDIRECTS` (`/?page_id=635` and
 * friends) are query strings, so blocking them stopped Google ever crawling those URLs to discover
 * the 301s that consolidate their history onto the current pages.
 *
 * `/search` is not blocked either. It already carries a `noindex` robots meta tag, and a robots.txt
 * block would prevent Google from fetching the page to *see* that tag — a blocked URL can still be
 * indexed from external links, with no way for us to say otherwise. Blocking crawl and asking for
 * noindex are mutually exclusive; the meta tag is the correct tool here.
 *
 * Google's guidance is explicit that robots.txt is the wrong instrument for canonicalisation:
 * https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
 */
export function buildRobotsTxt(canonicalHost = PUBLIC_CANONICAL_HOST): string {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    '# No crawl blocks. Pages that should stay out of the index carry a noindex robots meta tag,',
    '# which requires Googlebot to be able to fetch them. Duplicates are handled with canonical',
    '# tags and 301s, not with robots rules.',
    '',
    `Sitemap: ${canonicalHost}${SITEMAP_INDEX_PATH}`,
    '',
  ].join('\n');
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
