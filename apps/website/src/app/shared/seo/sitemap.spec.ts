import {
  PUBLIC_CANONICAL_HOST,
  PUBLIC_INDEXABLE_ROUTES,
  PUBLIC_REDIRECTS,
} from '../routing/public-routes';
import {
  SITEMAP_INDEX_PATH,
  SITEMAP_PAGES_PATH,
  buildRobotsTxt,
  buildSitemapIndexXml,
  buildSitemapPagesXml,
  canonicalHostForRequestHost,
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

  it('keeps the unbuilt destination placeholders out of the sitemap', () => {
    const locations = sitemapEntries().map((entry) => entry.loc);
    const destinations = locations.filter((location) => location.includes('/destinations/'));

    // Remove the noIndex flags in DESTINATION_PAGE_METADATA once these pages render real content
    // and this assertion should be inverted.
    expect(destinations).toEqual([]);
  });

  it('includes the tour detail routes, which are fully built', () => {
    const locations = sitemapEntries().map((entry) => entry.loc);

    expect(locations).toContain(`${PUBLIC_CANONICAL_HOST}/tour-item/women-only-tour-kyrgyzstan/`);
    expect(locations).toContain(`${PUBLIC_CANONICAL_HOST}/tour-item/morocco-tour/`);
  });

  it('resolves indexability for every route, with no silent registry gaps', () => {
    // A route no metadata source claims is a gap, not a decision — it must surface here rather
    // than quietly defaulting to indexable and landing in the sitemap.
    const unresolved = PUBLIC_INDEXABLE_ROUTES.filter(
      (route) => !routeIndexability(route).resolved,
    ).map((route) => `${route.key} (${route.canonicalPath})`);

    expect(unresolved).toEqual([]);
  });

  it('stays in step with the route table as routes are added', () => {
    const excluded = PUBLIC_INDEXABLE_ROUTES.filter((route) => routeIndexability(route).noIndex);

    expect(sitemapEntries().length).toBe(PUBLIC_INDEXABLE_ROUTES.length - excluded.length);
    expect(excluded.length).toBeGreaterThan(0);
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
        'static-september-2027',
        'static-private-tour-planning',
        'static-private-tours-your-trip-your-rules/describe',
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
