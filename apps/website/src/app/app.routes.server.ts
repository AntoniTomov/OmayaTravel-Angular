import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

import { DEFAULT_SITE_ID, SITE_CONFIGS } from '../sites';
import { isSiteRouteEnabled } from '../sites/site-routes';
import {
  PUBLIC_DESTINATION_SLUGS,
  PUBLIC_STATIC_PRERENDER_ROUTES,
  PUBLIC_TOUR_SLUGS,
} from './shared/routing/public-routes';

/**
 * Prerendering renders each page once, as the default site, whatever host later serves it. A route
 * the default site does not publish would be baked as its redirect to /404/, so another brand could
 * never serve it. Those routes render per request instead, where the host decides the site.
 */
const defaultSite = SITE_CONFIGS[DEFAULT_SITE_ID];
const isPrerendered = (canonicalPath: string) => isSiteRouteEnabled(defaultSite, canonicalPath);

const prerenderedStaticRoutes: ServerRoute[] = PUBLIC_STATIC_PRERENDER_ROUTES.map(
  (route): ServerRoute =>
    isPrerendered(route.canonicalPath)
      ? { path: route.path, renderMode: RenderMode.Prerender }
      : { path: route.path, renderMode: RenderMode.Server },
);

export const serverRoutes: ServerRoute[] = [
  {
    path: 'september-2027',
    renderMode: RenderMode.Server,
    status: 301,
  },
  ...prerenderedStaticRoutes,
  {
    path: 'destinations/:destinationSlug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    async getPrerenderParams() {
      return PUBLIC_DESTINATION_SLUGS.map((destinationSlug) => ({ destinationSlug }));
    },
  },
  {
    path: 'tour-item/:tourSlug',
    renderMode: RenderMode.Prerender,
    // Tours the default site does not publish are not prerendered, so they render on request.
    fallback: PrerenderFallback.Server,
    async getPrerenderParams() {
      return PUBLIC_TOUR_SLUGS.filter((tourSlug) => isPrerendered(`/tour-item/${tourSlug}/`)).map(
        (tourSlug) => ({ tourSlug }),
      );
    },
  },
  {
    path: '404',
    renderMode: RenderMode.Server,
    status: 404,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
    status: 404,
  },
];
