import { SiteConfig } from './site.types';

export function normalizeSiteRoutePath(url: string): string {
  const path = url.split(/[?#]/)[0] || '/';
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  const withoutDuplicateSlashes = withLeadingSlash.replace(/\/{2,}/g, '/');

  if (withoutDuplicateSlashes === '/') {
    return '/';
  }

  return withoutDuplicateSlashes.endsWith('/')
    ? withoutDuplicateSlashes
    : `${withoutDuplicateSlashes}/`;
}

export function isSiteRouteEnabled(site: SiteConfig, url: string): boolean {
  const path = normalizeSiteRoutePath(url);
  const enabledRoutes = site.content.enabledRoutes;

  if (site.content.excludedRoutes?.includes(path)) {
    return false;
  }

  if (enabledRoutes.includes('*')) {
    return true;
  }

  return enabledRoutes.includes(path);
}
