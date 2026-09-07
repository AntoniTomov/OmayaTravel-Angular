import {
  findRedirect,
  trailingSlashRedirectTarget,
  canonicalUrl,
  PUBLIC_CANONICAL_HOST,
  PUBLIC_INDEXABLE_ROUTES,
  PUBLIC_REDIRECTS,
  PUBLIC_ROUTE_PATTERNS,
  withTrailingSlash,
} from './public-routes';

describe('public route definitions', () => {
  it('uses the approved canonical host', () => {
    expect(PUBLIC_CANONICAL_HOST).toBe('https://omayatravel.com');
    expect(canonicalUrl('/destinations/')).toBe('https://omayatravel.com/destinations/');
  });

  it('keeps trailing slash canonicals for public HTML routes', () => {
    expect(withTrailingSlash('destinations')).toBe('/destinations/');
    expect(withTrailingSlash('/destinations/kyrgyzstan')).toBe('/destinations/kyrgyzstan/');
    expect(withTrailingSlash('/')).toBe('/');

    expect(PUBLIC_INDEXABLE_ROUTES.every((route) => route.canonicalPath.endsWith('/'))).toBe(true);
  });

  it('preserves the approved v1 route patterns', () => {
    expect(PUBLIC_ROUTE_PATTERNS.home).toBe('/');
    expect(PUBLIC_ROUTE_PATTERNS.destinations).toBe('/destinations/');
    expect(PUBLIC_ROUTE_PATTERNS.destinationDetail).toBe('/destinations/:destinationSlug/');
    expect(PUBLIC_ROUTE_PATTERNS.tourDetail).toBe('/tour-item/:tourSlug/');
  });

  it('does not introduce the deferred /tours/{slug}/ launch route', () => {
    expect(PUBLIC_INDEXABLE_ROUTES.some((route) => route.path.startsWith('tours/'))).toBe(false);
  });

  it('keeps approved duplicate tour redirects centralized for future edge generation', () => {
    expect(PUBLIC_REDIRECTS).toEqual(
      expect.arrayContaining([
        {
          from: '/tour-item/bulgaria-trip/',
          to: '/tour-item/bulgaria-beyond-the-ordinary/',
          statusCode: 301,
        },
        {
          from: '/tour-item/forest-adventure/',
          to: '/tour-item/bulgaria-beyond-the-ordinary/',
          statusCode: 301,
        },
        {
          from: '/tour-item/safari-tour/',
          to: '/tour-item/kyrgyzstan-tour/',
          statusCode: 301,
        },
      ]),
    );
  });

  it('keeps approved exact redirects centralized for future edge generation', () => {
    expect(PUBLIC_REDIRECTS).toEqual(
      expect.arrayContaining([
        {
          from: '/tour-checkout/',
          to: '/contact/',
          statusCode: 301,
        },
      ]),
    );
    expect(PUBLIC_REDIRECTS.some((redirect) => redirect.from === '/3122-2/')).toBe(false);
  });
});

describe('legacy redirect resolution', () => {
  it('redirects the retired September URL with or without its trailing slash', () => {
    for (const path of [
      '/september-2027',
      '/september-2027/',
      '/september-2027/?utm_source=test',
    ]) {
      expect(findRedirect(path)).toEqual({
        from: '/september-2027/',
        to: '/calendar-2027/september/',
        statusCode: 301,
      });
    }
  });
  it('redirects every declared legacy URL', () => {
    const unresolved = PUBLIC_REDIRECTS.filter(
      (redirect) => findRedirect(redirect.from)?.to !== redirect.to,
    ).map((redirect) => redirect.from);

    expect(unresolved).toEqual([]);
  });

  it('matches the legacy WordPress query URLs on the full URL', () => {
    expect(findRedirect('/?page_id=635')?.to).toBe('/our-story/');
    expect(findRedirect('/?page_id=852')?.to).toBe('/faq/');
  });

  it('tolerates a missing or extra trailing slash on path redirects', () => {
    expect(findRedirect('/tour-item/bulgaria-trip')?.to).toBe(
      '/tour-item/bulgaria-beyond-the-ordinary/',
    );
    expect(findRedirect('/tour-item/bulgaria-trip/')?.to).toBe(
      '/tour-item/bulgaria-beyond-the-ordinary/',
    );
    expect(findRedirect('/TOUR-ITEM/Bulgaria-Trip/')?.to).toBe(
      '/tour-item/bulgaria-beyond-the-ordinary/',
    );
  });

  it('never redirects the homepage just because a query redirect starts with a slash', () => {
    expect(findRedirect('/')).toBeUndefined();
    expect(findRedirect('/?utm_source=newsletter')).toBeUndefined();
  });

  it('leaves live routes alone', () => {
    expect(findRedirect('/tour-item/morocco-tour/')).toBeUndefined();
    expect(findRedirect('/contact/')).toBeUndefined();
  });

  it('uses 301 so link equity transfers', () => {
    expect(PUBLIC_REDIRECTS.every((redirect) => redirect.statusCode === 301)).toBe(true);
  });
});

describe('trailing slash canonicalisation', () => {
  it('redirects public HTML URLs onto the trailing-slash form', () => {
    expect(trailingSlashRedirectTarget('/destinations/algeria')).toBe('/destinations/algeria/');
    expect(trailingSlashRedirectTarget('/tour-item/morocco-tour')).toBe('/tour-item/morocco-tour/');
    expect(trailingSlashRedirectTarget('/contact')).toBe('/contact/');
  });

  it('preserves the query string and fragment', () => {
    expect(trailingSlashRedirectTarget('/contact?utm_source=x')).toBe('/contact/?utm_source=x');
    expect(trailingSlashRedirectTarget('/contact#form')).toBe('/contact/#form');
  });

  it('leaves already-canonical URLs alone', () => {
    expect(trailingSlashRedirectTarget('/')).toBeUndefined();
    expect(trailingSlashRedirectTarget('/contact/')).toBeUndefined();
    expect(trailingSlashRedirectTarget('/destinations/algeria/')).toBeUndefined();
  });

  it('never touches files, assets or API routes', () => {
    expect(trailingSlashRedirectTarget('/robots.txt')).toBeUndefined();
    expect(trailingSlashRedirectTarget('/sitemap.xml')).toBeUndefined();
    expect(trailingSlashRedirectTarget('/sitemap-pages.xml')).toBeUndefined();
    expect(trailingSlashRedirectTarget('/favicon.svg')).toBeUndefined();
    expect(trailingSlashRedirectTarget('/assets/images/home-page/hero.webp')).toBeUndefined();
    expect(trailingSlashRedirectTarget('/api/forms')).toBeUndefined();
    expect(trailingSlashRedirectTarget('/api/newsletter')).toBeUndefined();
  });

  it('sends every canonical route to itself in one hop, not two', () => {
    // A canonical path must never itself be a redirect target of either rule.
    const doubleHop = PUBLIC_INDEXABLE_ROUTES.filter(
      (route) =>
        trailingSlashRedirectTarget(route.canonicalPath) !== undefined ||
        findRedirect(route.canonicalPath) !== undefined,
    ).map((route) => route.canonicalPath);

    expect(doubleHop).toEqual([]);
  });
});

describe('private tour page consolidation', () => {
  it('redirects the orphaned planning page onto the page that owns the intent', () => {
    expect(findRedirect('/private-tour-planning/')?.to).toBe(
      '/private-tours-your-trip-your-rules/',
    );
  });

  it('no longer routes or prerenders the consolidated page', () => {
    const paths = PUBLIC_INDEXABLE_ROUTES.map((route) => route.canonicalPath);

    expect(paths).not.toContain('/private-tour-planning/');
    expect(paths).toContain('/private-tours-your-trip-your-rules/');
  });

  it('keeps the questionnaire reachable from the surviving page', () => {
    const paths = PUBLIC_INDEXABLE_ROUTES.map((route) => route.canonicalPath);

    expect(paths).toContain('/private-tours-your-trip-your-rules/describe/');
  });
});
