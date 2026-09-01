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
    expect(isSiteRouteEnabled(AMELIA_SITE_CONFIG, '/tour-item/women-only-tour-kyrgyzstan/')).toBe(
      true,
    );
    expect(isSiteRouteEnabled(AMELIA_SITE_CONFIG, '/your-dmc-partner-in-bulgaria/')).toBe(false);
  });
});
