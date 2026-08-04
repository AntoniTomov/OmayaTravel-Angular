import {
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
          from: '/3122-2/',
          to: '/contact/',
          statusCode: 301,
        },
        {
          from: '/tour-checkout/',
          to: '/contact/',
          statusCode: 301,
        },
      ]),
    );
  });
});
