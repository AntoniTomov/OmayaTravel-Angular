import { blogPostsForSite, findBlogPostBySlug } from '../app/shared/content/blog-content';
import { findTourBySlug } from '../app/shared/content/tour-content';
import { AMELIA_SITE_CONFIG } from './amelia/site.config';
import { OMAYA_SITE_CONFIG } from './omaya/site.config';
import { isSiteRouteEnabled, normalizeSiteRoutePath } from './site-routes';

describe('site route access', () => {
  it('normalizes public route paths before checking site access', () => {
    expect(normalizeSiteRoutePath('contact')).toBe('/contact/');
    expect(normalizeSiteRoutePath('/contact?source=footer')).toBe('/contact/');
    expect(normalizeSiteRoutePath('/tour-item/women-only-tour-kyrgyzstan')).toBe(
      '/tour-item/women-only-tour-kyrgyzstan/',
    );
  });

  it('keeps all existing routes available for Omaya', () => {
    expect(isSiteRouteEnabled(OMAYA_SITE_CONFIG, '/your-dmc-partner-in-bulgaria/')).toBe(true);
  });

  it('allows Amelia routes explicitly and blocks Omaya-only routes', () => {
    expect(isSiteRouteEnabled(AMELIA_SITE_CONFIG, '/contact/')).toBe(true);
    expect(isSiteRouteEnabled(AMELIA_SITE_CONFIG, '/tour-item/kyrgyzstan-tour/')).toBe(true);
    expect(isSiteRouteEnabled(AMELIA_SITE_CONFIG, '/tour-item/morocco-tour/')).toBe(true);
    expect(
      isSiteRouteEnabled(AMELIA_SITE_CONFIG, '/tour-item/algeria-desert-expedition-tadrart-rouge/'),
    ).toBe(true);
    expect(isSiteRouteEnabled(AMELIA_SITE_CONFIG, '/your-dmc-partner-in-bulgaria/')).toBe(false);
  });

  it('serves the Amelia-only Morocco article on Amelia and keeps it off Omaya', () => {
    expect(isSiteRouteEnabled(AMELIA_SITE_CONFIG, '/maroko-za-zheni-pateshestvenichki/')).toBe(
      true,
    );
    expect(isSiteRouteEnabled(OMAYA_SITE_CONFIG, '/maroko-za-zheni-pateshestvenichki/')).toBe(
      false,
    );
  });

  it('lets excluded routes override the Omaya wildcard', () => {
    expect(OMAYA_SITE_CONFIG.content.enabledRoutes).toContain('*');
    expect(OMAYA_SITE_CONFIG.content.excludedRoutes).toContain(
      '/maroko-za-zheni-pateshestvenichki/',
    );
  });
});

describe('Amelia tour content', () => {
  it('returns Bulgarian Amelia content for the shared Morocco slug', () => {
    const ameliaTour = findTourBySlug('morocco-tour', 'amelia');
    const omayaTour = findTourBySlug('morocco-tour', 'omaya');

    expect(ameliaTour?.title).toBe('Мароко - сини градове и златни дюни');
    expect(ameliaTour?.destination.startLocation).toBe('София');
    expect(ameliaTour?.duration).toEqual({ days: 12, nights: 11 });
    expect(ameliaTour?.departures).toEqual(['2027-04-22']);
    expect(ameliaTour?.price).toEqual({ amount: 2300, currency: 'EUR', unit: 'човек' });
    expect(ameliaTour?.itinerary).toHaveLength(12);
    expect(ameliaTour?.seo.title).toContain('Amelia Travel');

    expect(omayaTour?.title).toBe('Morocco – Blue Cities & Golden Dunes');
    expect(omayaTour?.seo.title).toContain('Omaya Travel');
  });

  it('never mentions Omaya in Amelia tour copy or assets', () => {
    for (const slug of ['morocco-tour', 'kyrgyzstan-tour']) {
      const tour = findTourBySlug(slug, 'amelia');

      expect(JSON.stringify(tour)).not.toContain('Omaya');
      expect(JSON.stringify(tour)).not.toContain('omayatravel.com');
    }
  });

  it('serves Amelia blog posts separately from Omaya blog posts', () => {
    expect(blogPostsForSite('amelia').map((post) => post.slug)).toEqual([
      'maroko-za-zheni-pateshestvenichki',
    ]);
    expect(blogPostsForSite('omaya').map((post) => post.slug)).not.toContain(
      'maroko-za-zheni-pateshestvenichki',
    );
    expect(findBlogPostBySlug('maroko-za-zheni-pateshestvenichki', 'omaya')).toBeUndefined();
    expect(findBlogPostBySlug('maroko-za-zheni-pateshestvenichki', 'amelia')?.title).toContain(
      'Мароко',
    );
  });
});
