import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

import { ActiveSite } from '../../../sites/active-site';
import type { TourDetailContent } from './tour-content';

/**
 * Resolves the tour a tour-detail route shows, as `data.tour`.
 *
 * The tour catalogue is imported dynamically on purpose. It is about 200 KB of copy for every tour
 * on every site, and a static import from anything in the root bundle — the SEO service used to
 * have one — ships all of it to every page, the homepage and contact page included. Resolving it
 * here keeps it in the chunk that only tour pages load.
 */
export const tourResolver: ResolveFn<TourDetailContent | undefined> = (route) => {
  const siteId = inject(ActiveSite).site().id;
  const slug = tourSlugFor(route);

  return import('./tour-content').then((module) => module.findTourBySlug(slug, siteId));
};

/**
 * The canonical matcher route carries its slug as a URL segment rather than a param, and the
 * `tour-item/:tourSlug` route declares it on the parent, so look in all three places.
 */
function tourSlugFor(route: ActivatedRouteSnapshot): string | undefined {
  const param = route.params['tourSlug'] ?? route.parent?.params['tourSlug'];

  if (param) {
    return param;
  }

  const segments = route.pathFromRoot.flatMap((snapshot) =>
    snapshot.url.map((segment) => segment.path).filter(Boolean),
  );

  return segments[segments.length - 1];
}
