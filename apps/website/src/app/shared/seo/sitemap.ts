import { findBlogPostBySlug } from '../content/blog-content';
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
 * site. `sitemap.xml` is a sitemap *index* even though there is only one child today — that is what
 * lets a German child sitemap be added later without changing the URL Google already knows.
 */
export const SITEMAP_INDEX_PATH = '/sitemap.xml';
export const SITEMAP_PAGES_PATH = '/sitemap-pages.xml';

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
}

/** Routes we deliberately keep out of the index, resolved from the page metadata registry. */
function isIndexable(route: PublicRouteDefinition): boolean {
  return !metadataForRoute(route)?.noIndex;
}

function metadataForRoute(route: PublicRouteDefinition) {
  if (route.type === 'destination-detail') {
    const slug = route.path.split('/').pop();

    return slug ? DESTINATION_PAGE_METADATA[slug] : undefined;
  }

  return (
    STATIC_PAGE_METADATA[route.key] ??
    // Category routes are keyed `tour-category-*` in the route table but rendered by the tour
    // listing component, which registers them as `tour-listing-*`.
    STATIC_PAGE_METADATA[route.key.replace('tour-category-', 'tour-listing-')]
  );
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

export function buildRobotsTxt(canonicalHost = PUBLIC_CANONICAL_HOST): string {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    '# Internal search and query-parameter URLs duplicate real pages.',
    'Disallow: /search',
    'Disallow: /*?*',
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
