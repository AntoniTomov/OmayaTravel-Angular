import { PrerenderFallback, RenderMode } from '@angular/ssr';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { destinationDetailCanMatch, routes, tourDetailCanMatch } from './app.routes';
import { serverRoutes } from './app.routes.server';
import { ContactPage } from './features/contact-page/contact-page';
import { DmcPartnerBulgaria } from './features/dmc-partner-bulgaria/dmc-partner-bulgaria';
import { FaqPage } from './features/faq-page/faq-page';
import { NotFound } from './features/not-found/not-found';
import { OurStory } from './features/our-story/our-story';
import { PublicRoutePlaceholder } from './features/public-route-placeholder/public-route-placeholder';
import { TourDetail } from './features/tour-detail/tour-detail';
import { WhyBookWithUs } from './features/why-book-with-us/why-book-with-us';
import {
  PUBLIC_DESTINATION_SLUGS,
  PUBLIC_STATIC_PRERENDER_ROUTES,
  PUBLIC_TOUR_SLUGS,
} from './shared/routing/public-routes';

describe('app routes', () => {
  it('wires approved public Angular route patterns', () => {
    const routePaths = routes.map((route) => route.path);

    expect(routePaths).toContain('');
    expect(routePaths).toContain('search');
    expect(routePaths).toContain('enquire-now');
    expect(routePaths).toContain('destinations');
    expect(routePaths).toContain('destinations/:destinationSlug');
    expect(routePaths).toContain('tour-item/:tourSlug');
    expect(routes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ canMatch: [destinationDetailCanMatch] }),
        expect.objectContaining({ canMatch: [tourDetailCanMatch] }),
      ]),
    );
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

  it('resolves approved destination slugs to the placeholder route and tour slugs to tour detail', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();

    await expect(
      harness.navigateByUrl('/destinations/kyrgyzstan/', PublicRoutePlaceholder),
    ).resolves.toBeInstanceOf(PublicRoutePlaceholder);
    await expect(
      harness.navigateByUrl('/tour-item/algeria-desert-expedition-tadrart-rouge/', TourDetail),
    ).resolves.toBeInstanceOf(TourDetail);
  });

  it('resolves the our-story static page to its dedicated component', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();

    await expect(harness.navigateByUrl('/our-story/', OurStory)).resolves.toBeInstanceOf(
      OurStory,
    );
  });

  it('resolves the why-book-with-us static page to its dedicated component', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();

    await expect(
      harness.navigateByUrl('/why-book-with-us/', WhyBookWithUs),
    ).resolves.toBeInstanceOf(WhyBookWithUs);
  });

  it('resolves contact, faq, and DMC static pages to dedicated components', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();

    await expect(harness.navigateByUrl('/contact/', ContactPage)).resolves.toBeInstanceOf(
      ContactPage,
    );
    await expect(harness.navigateByUrl('/faq/', FaqPage)).resolves.toBeInstanceOf(FaqPage);
    await expect(
      harness.navigateByUrl('/your-dmc-partner-in-bulgaria/', DmcPartnerBulgaria),
    ).resolves.toBeInstanceOf(DmcPartnerBulgaria);
  });

  it('resolves unknown destination and tour slugs to not-found behavior', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });

    const harness = await RouterTestingHarness.create();

    await expect(
      harness.navigateByUrl('/destinations/not-real/', NotFound),
    ).resolves.toBeInstanceOf(NotFound);
    await expect(harness.navigateByUrl('/tour-item/not-real/', NotFound)).resolves.toBeInstanceOf(
      NotFound,
    );

    expect(TestBed.inject(Router).url).toBe('/tour-item/not-real/');
  });
});
