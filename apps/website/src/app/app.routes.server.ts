import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

import {
  PUBLIC_DESTINATION_SLUGS,
  PUBLIC_STATIC_PRERENDER_ROUTES,
  PUBLIC_TOUR_SLUGS,
} from './shared/routing/public-routes';

const prerenderedStaticRoutes: ServerRoute[] = PUBLIC_STATIC_PRERENDER_ROUTES.map(
  (route): ServerRoute => ({
    path: route.path,
    renderMode: RenderMode.Prerender,
  }),
);

export const serverRoutes: ServerRoute[] = [
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
    fallback: PrerenderFallback.None,
    async getPrerenderParams() {
      return PUBLIC_TOUR_SLUGS.map((tourSlug) => ({ tourSlug }));
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
