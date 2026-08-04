import { PrerenderFallback, RenderMode } from '@angular/ssr';

import { routes } from './app.routes';
import { serverRoutes } from './app.routes.server';
import {
  PUBLIC_DESTINATION_SLUGS,
  PUBLIC_STATIC_PRERENDER_ROUTES,
  PUBLIC_TOUR_SLUGS,
} from './shared/routing/public-routes';

describe('app routes', () => {
  it('wires approved public Angular route patterns', () => {
    const routePaths = routes.map((route) => route.path);

    expect(routePaths).toContain('');
    expect(routePaths).toContain('destinations');
    expect(routePaths).toContain('destinations/:destinationSlug');
    expect(routePaths).toContain('tour-item/:tourSlug');
    expect(routePaths).not.toContain('tours/:tourSlug');
  });

  it('wires approved root slug routes explicitly', () => {
    const routePaths = routes.map((route) => route.path);

    expect(routePaths).toContain('women-only-tours');
    expect(routePaths).toContain('classic-tours');
    expect(routePaths).toContain('contact');
    expect(routePaths).toContain('privacy-policy');
    expect(routePaths).toContain('how-to-visit-song-kul-lake-in-kyrgyzstan');
  });

  it('ends with explicit not-found handling for client navigation', () => {
    expect(routes.at(-2)?.path).toBe('404');
    expect(routes.at(-2)?.data?.['routeStatus']).toBe(404);
    expect(routes.at(-1)?.path).toBe('**');
    expect(routes.at(-1)?.data?.['routeStatus']).toBe(404);
  });

  it('prerenders approved static public routes on the server route config', () => {
    const prerenderedPaths = serverRoutes
      .filter((route) => route.renderMode === RenderMode.Prerender)
      .map((route) => route.path);

    for (const route of PUBLIC_STATIC_PRERENDER_ROUTES) {
      expect(prerenderedPaths).toContain(route.path);
    }
  });

  it('prerenders approved destination and tour params without fallback', async () => {
    const destinationRoute = serverRoutes.find(
      (route) => route.path === 'destinations/:destinationSlug',
    );
    const tourRoute = serverRoutes.find((route) => route.path === 'tour-item/:tourSlug');

    if (
      destinationRoute?.renderMode !== RenderMode.Prerender ||
      tourRoute?.renderMode !== RenderMode.Prerender ||
      !('getPrerenderParams' in destinationRoute) ||
      !('getPrerenderParams' in tourRoute)
    ) {
      throw new Error('Destination and tour server routes must use parameterized prerendering.');
    }

    await expect(destinationRoute.getPrerenderParams()).resolves.toEqual(
      PUBLIC_DESTINATION_SLUGS.map((destinationSlug) => ({ destinationSlug })),
    );
    await expect(tourRoute.getPrerenderParams()).resolves.toEqual(
      PUBLIC_TOUR_SLUGS.map((tourSlug) => ({ tourSlug })),
    );
    expect(destinationRoute.fallback).toBe(PrerenderFallback.None);
    expect(tourRoute.fallback).toBe(PrerenderFallback.None);
  });

  it('does not use a prerendered wildcard that would mask unknown route handling', () => {
    const wildcardRoute = serverRoutes.find((route) => route.path === '**');

    expect(wildcardRoute?.renderMode).toBe(RenderMode.Server);

    if (wildcardRoute?.renderMode !== RenderMode.Server) {
      throw new Error('Wildcard server route must use server rendering.');
    }

    expect(wildcardRoute.status).toBe(404);
  });
});
