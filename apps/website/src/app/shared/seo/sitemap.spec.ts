import { PUBLIC_CANONICAL_HOST, PUBLIC_INDEXABLE_ROUTES } from '../routing/public-routes';
import {
  SITEMAP_INDEX_PATH,
  SITEMAP_PAGES_PATH,
  buildRobotsTxt,
  buildSitemapIndexXml,
  buildSitemapPagesXml,
  metadataForRoute,
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

  it('stays in step with the route table as routes are added', () => {
    const excluded = PUBLIC_INDEXABLE_ROUTES.filter((route) => metadataForRoute(route)?.noIndex);

    expect(sitemapEntries().length).toBe(PUBLIC_INDEXABLE_ROUTES.length - excluded.length);
    expect(excluded.length).toBeGreaterThan(0);
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
  it('points crawlers at the sitemap index and blocks search URLs', () => {
    const robots = buildRobotsTxt();

    expect(robots).toContain('User-agent: *');
    expect(robots).toContain('Allow: /');
    expect(robots).toContain('Disallow: /search');
    expect(robots).toContain(`Sitemap: ${PUBLIC_CANONICAL_HOST}${SITEMAP_INDEX_PATH}`);
  });
});
