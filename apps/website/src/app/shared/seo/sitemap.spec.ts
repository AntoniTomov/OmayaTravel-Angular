import { SITE_CONFIGS } from '../../../sites';
import { isSiteRouteEnabled } from '../../../sites/site-routes';
import {
  PUBLIC_CANONICAL_HOST,
  PUBLIC_INDEXABLE_ROUTES,
  PUBLIC_REDIRECTS,
} from '../routing/public-routes';
import {
  SITEMAP_INDEX_PATH,
  SITEMAP_PAGES_PATH,
  buildRobotsTxt,
  buildUnpublishedHostRobotsTxt,
  buildSitemapIndexXml,
  buildSitemapPagesXml,
  canonicalHostForRequestHost,
  isPublishedSiteHost,
  routeIndexability,
  sitemapEntries,
} from './sitemap';

describe('sitemap generation', () => {
  it('lists every indexable route as an absolute canonical URL', () => {
    const entries = sitemapEntries();
    const locations = entries.map((entry) => entry.loc);

    expect(entries.length).toBeGreaterThan(0);

    const malformed = locations.filter(
      (location) => !location.startsWith(`${PUBLIC_CANONICAL_HOST}/`) || !location.endsWith('/'),
    );

    expect(malformed).toEqual([]);
    expect(new Set(locations).size).toBe(locations.length);
  });

  it('excludes pages marked noIndex', () => {
    const locations = sitemapEntries().map((entry) => entry.loc);

    expect(locations).not.toContain(`${PUBLIC_CANONICAL_HOST}/not-yet-but-soon/`);
    expect(locations).not.toContain(`${PUBLIC_CANONICAL_HOST}/3122-2/`);
  });

  it('includes the destination hub and all four completed country pages', () => {
    const locations = sitemapEntries().map((entry) => entry.loc);
    expect(locations.filter((location) => location.includes('/destinations/'))).toHaveLength(5);
  });

  it('lists only the preferred September URL', () => {
    const locations = sitemapEntries().map((entry) => entry.loc);
    expect(locations).toContain(PUBLIC_CANONICAL_HOST + '/calendar-2027/september/');
    expect(locations).not.toContain(PUBLIC_CANONICAL_HOST + '/september-2027/');
  });

  it('includes the tour detail routes, which are fully built', () => {
    const locations = sitemapEntries().map((entry) => entry.loc);

    expect(locations).toContain(`${PUBLIC_CANONICAL_HOST}/tour-item/women-only-tour-kyrgyzstan/`);
    expect(locations).toContain(`${PUBLIC_CANONICAL_HOST}/tour-item/morocco-tour/`);
  });

  it('resolves indexability for every route, with no silent registry gaps', () => {
    // A route no metadata source claims is a gap, not a decision — it must surface here rather
    // than quietly defaulting to indexable and landing in the sitemap.
    // Each site is checked against the routes it publishes, since the route table is shared.
    const unresolved = Object.values(SITE_CONFIGS).flatMap((site) =>
      PUBLIC_INDEXABLE_ROUTES.filter(
        (route) =>
          isSiteRouteEnabled(site, route.canonicalPath) && !routeIndexability(route, site).resolved,
      ).map((route) => `${site.id}: ${route.key} (${route.canonicalPath})`),
    );

    expect(unresolved).toEqual([]);
  });

  it('stays in step with the route table as routes are added', () => {
    for (const site of Object.values(SITE_CONFIGS)) {
      const published = PUBLIC_INDEXABLE_ROUTES.filter((route) =>
        isSiteRouteEnabled(site, route.canonicalPath),
      );
      const excluded = published.filter((route) => routeIndexability(route, site).noIndex);

      expect(sitemapEntries(site.seo.canonicalHost).length).toBe(
        published.length - excluded.length,
      );
    }

    expect(
      PUBLIC_INDEXABLE_ROUTES.filter((route) => routeIndexability(route).noIndex).length,
    ).toBeGreaterThan(0);
  });

  it("lists only the routes each site publishes, on that site's own origin", () => {
    const amelia = sitemapEntries(SITE_CONFIGS.amelia.seo.canonicalHost).map((entry) => entry.loc);
    const omaya = sitemapEntries(PUBLIC_CANONICAL_HOST).map((entry) => entry.loc);

    expect(amelia).toContain('https://ameliatravel.bg/maroko-za-zheni-pateshestvenichki/');
    expect(amelia).toContain('https://ameliatravel.bg/tour-item/india-tour/');
    expect(amelia).not.toContain('https://ameliatravel.bg/tours-list/');
    expect(amelia.every((loc) => loc.startsWith('https://ameliatravel.bg/'))).toBe(true);
    expect(omaya).not.toContain(`${PUBLIC_CANONICAL_HOST}/maroko-za-zheni-pateshestvenichki/`);
    expect(omaya).not.toContain(`${PUBLIC_CANONICAL_HOST}/tour-item/india-tour/`);
  });

  it('lists the enquiry page where it is published and never the search page', () => {
    const amelia = sitemapEntries(SITE_CONFIGS.amelia.seo.canonicalHost).map((entry) => entry.loc);
    const omaya = sitemapEntries(PUBLIC_CANONICAL_HOST).map((entry) => entry.loc);

    expect(omaya).toContain(`${PUBLIC_CANONICAL_HOST}/enquire-now/`);
    // Amelia does not publish the enquiry page, so its sitemap leaves it out.
    expect(amelia).not.toContain('https://ameliatravel.bg/enquire-now/');
    expect([...omaya, ...amelia].some((loc) => loc.includes('/search/'))).toBe(false);
  });

  it('resolves the routes whose table key and router key disagree', () => {
    // These eight resolved to nothing before the alias map existed, so the sitemap treated them
    // as indexable by accident rather than by decision.
    const aliased = PUBLIC_INDEXABLE_ROUTES.filter((route) =>
      [
        'static-blog-list',
        'static-tours-list',
        'static-calendar',
        'static-calendar-2027',
        'static-private-tour-planning',
        'static-private-tours-your-trip-your-rules/describe',
        'static-enquire-now',
      ].includes(route.key),
    );

    expect(aliased.length).toBeGreaterThan(0);
    expect(aliased.filter((route) => !routeIndexability(route).resolved)).toEqual([]);
  });

  it('dates blog entries from the post itself', () => {
    const article = sitemapEntries().find((entry) =>
      entry.loc.endsWith('/how-to-visit-song-kul-lake-in-kyrgyzstan/'),
    );

    expect(article?.lastmod).toBeTruthy();
    expect(
      sitemapEntries().find((entry) =>
        entry.loc.endsWith('/the-complete-visitor-guide-to-rila-monastery/'),
      )?.lastmod,
    ).toBe('2026-09-08');
  });

  it('builds a sitemap index pointing at the page sitemap', () => {
    const xml = buildSitemapIndexXml();

    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain('<sitemapindex');
    expect(xml).toContain(`${PUBLIC_CANONICAL_HOST}${SITEMAP_PAGES_PATH}`);
  });

  it('builds well-formed page sitemap XML', () => {
    const xml = buildSitemapPagesXml();
    const urlCount = xml.match(/<url>/g)?.length ?? 0;

    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(urlCount).toBe(sitemapEntries().length);
    expect(xml).not.toContain('undefined');
  });

  it('honours the host it is served from', () => {
    const xml = buildSitemapPagesXml('https://example.test');

    expect(xml).toContain('https://example.test/');
    expect(xml).not.toContain(PUBLIC_CANONICAL_HOST);
  });
});

describe('robots.txt', () => {
  it('points crawlers at the sitemap index', () => {
    const robots = buildRobotsTxt();

    expect(robots).toContain('User-agent: *');
    expect(robots).toContain('Allow: /');
    expect(robots).toContain(`Sitemap: ${PUBLIC_CANONICAL_HOST}${SITEMAP_INDEX_PATH}`);
  });

  it('does not block query-string URLs, which would hide the legacy 301s', () => {
    const robots = buildRobotsTxt();

    // PUBLIC_QUERY_REDIRECTS maps old WordPress URLs like /?page_id=635 onto current pages.
    // Blocking query strings stops Google crawling them to discover those redirects at all.
    expect(robots).not.toContain('Disallow: /*?*');

    const legacyQueryRedirects = PUBLIC_REDIRECTS.filter((redirect) => redirect.from.includes('?'));

    expect(legacyQueryRedirects.length).toBeGreaterThan(0);
  });

  it('does not block /search, which carries a noindex tag instead', () => {
    // A robots.txt block would stop Googlebot fetching the page to see its noindex directive.
    expect(buildRobotsTxt()).not.toContain('Disallow: /search');
  });
});

describe('canonical host resolution', () => {
  it('maps a configured site domain to its own origin', () => {
    expect(canonicalHostForRequestHost('omayatravel.com')).toBe(PUBLIC_CANONICAL_HOST);
    expect(canonicalHostForRequestHost('www.omayatravel.com')).toBe(PUBLIC_CANONICAL_HOST);
    expect(canonicalHostForRequestHost('omayatravel.com:443')).toBe(PUBLIC_CANONICAL_HOST);
  });

  it('never lets an unknown or preview host advertise itself as canonical', () => {
    for (const host of ['staging.example.test', 'localhost:3000', '127.0.0.1:4300', '', null]) {
      expect(canonicalHostForRequestHost(host)).toBe(PUBLIC_CANONICAL_HOST);
    }
  });
});

// Staging is a complete, stable copy of the site on its own origin. Without a noindex it competes
// with the real one for the same queries, so these guard the rule that keeps it out of the index.
describe('unpublished hosts', () => {
  it('recognises the published domain, with or without www and a port', () => {
    expect(isPublishedSiteHost('omayatravel.com')).toBe(true);
    expect(isPublishedSiteHost('www.omayatravel.com')).toBe(true);
    expect(isPublishedSiteHost('OmayaTravel.com:443')).toBe(true);
  });

  it('does not recognise staging, previews, bare IPs or a missing host', () => {
    const hosts = ['staging.omayatravel.com', 'preview.omayatravel.com', '127.0.0.1:3000', ''];

    expect(hosts.filter((host) => isPublishedSiteHost(host))).toEqual([]);
    expect(isPublishedSiteHost(null)).toBe(false);
    expect(isPublishedSiteHost(undefined)).toBe(false);
  });

  // A site config lists its staging origins in `additionalHosts` so they render the right brand
  // rather than falling through to the default site. That must not promote them to real domains:
  // publishing a second indexable copy of a brand is the very thing this rule exists to stop.
  it("keeps a site's additional hosts unpublished and canonicalised to the real domain", () => {
    const additionalHosts = Object.values(SITE_CONFIGS).flatMap(
      (config) => config.additionalHosts ?? [],
    );

    expect(additionalHosts.length).toBeGreaterThan(0);
    expect(additionalHosts.filter((host) => isPublishedSiteHost(host))).toEqual([]);
    expect(additionalHosts.map((host) => canonicalHostForRequestHost(host))).toEqual(
      additionalHosts.map(() => PUBLIC_CANONICAL_HOST),
    );
  });

  it('serves a disallow-all robots.txt that advertises no sitemap', () => {
    const robots = buildUnpublishedHostRobotsTxt();

    expect(robots).toContain('User-agent: *');
    expect(robots).toContain('Disallow: /');
    // Advertising the real sitemap here would hand a crawler a list of staging URLs to fetch.
    expect(robots).not.toContain('Sitemap:');
  });

  it('keeps the published robots.txt permissive and pointing at the sitemap', () => {
    const robots = buildRobotsTxt();

    expect(robots).toContain('Allow: /');
    expect(robots).not.toContain('Disallow: /');
    expect(robots).toContain(`Sitemap: ${PUBLIC_CANONICAL_HOST}${SITEMAP_INDEX_PATH}`);
  });
});
