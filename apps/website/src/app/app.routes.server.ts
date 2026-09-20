import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

import { BUILD_SITE } from '../sites/build-site';
import { isSiteRouteEnabled } from '../sites/site-routes';
import {
  PUBLIC_DESTINATION_SLUGS,
  PUBLIC_STATIC_PRERENDER_ROUTES,
  PUBLIC_TOUR_SLUGS,
} from './shared/routing/public-routes';

/**
 * Prerendering renders each page once, as whichever site the build names, and the server later
 * serves each site the snapshots from its own pass.
 *
 * The route set has to follow the build's site, not the default one. A route the build's site does
 * not publish bakes as its redirect to /404/ — a client-side `<title>Redirecting</title>` stub
 * rather than an honest 404 status — so those routes are left out and render per request instead,
 * where the host decides the site.
 */
const isPrerendered = (canonicalPath: string) => isSiteRouteEnabled(BUILD_SITE, canonicalPath);

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
