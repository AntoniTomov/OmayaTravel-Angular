import '@angular/compiler';
import { vi } from 'vitest';

import { PrerenderFallback, RenderMode } from '@angular/ssr';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { destinationDetailCanMatch, routes, tourDetailCanMatch } from './app.routes';
import { serverRoutes } from './app.routes.server';
import { ContactPage } from './features/contact-page/contact-page';
import { DmcPartnerBulgaria } from './features/dmc-partner-bulgaria/dmc-partner-bulgaria';
import { EnquirePage } from './features/enquire-page/enquire-page';
import { FaqPage } from './features/faq-page/faq-page';
import { NotFound } from './features/not-found/not-found';
import { OurStory } from './features/our-story/our-story';
import { DestinationPage } from './features/destination-page/destination-page';
import { TourListingPage } from './features/tour-listing-page/tour-listing-page';
import { OmayaSeo } from './shared/seo/omaya-seo';
import { Title } from '@angular/platform-browser';
import { TourDetail } from './features/tour-detail/tour-detail';
import { WhyBookWithUs } from './features/why-book-with-us/why-book-with-us';
import {
  PUBLIC_DESTINATION_SLUGS,
  PUBLIC_STATIC_PRERENDER_ROUTES,
  PUBLIC_TOUR_SLUGS,
} from './shared/routing/public-routes';
import { ActiveSite } from '../sites/active-site';
import { OMAYA_SITE_CONFIG } from '../sites/omaya/site.config';

describe('app routes', () => {
  function configureRouteTesting(): void {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        {
          provide: ActiveSite,
          useValue: {
            site: () => OMAYA_SITE_CONFIG,
          },
        },
      ],
    });
  }

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

  it('resolves approved destination slugs to destination pages and tour slugs to tour detail', async () => {
    configureRouteTesting();

    const harness = await RouterTestingHarness.create();

    await expect(
      harness.navigateByUrl('/destinations/kyrgyzstan/', DestinationPage),
    ).resolves.toBeInstanceOf(DestinationPage);
    await expect(
      harness.navigateByUrl('/tour-item/algeria-desert-expedition-tadrart-rouge/', TourDetail),
    ).resolves.toBeInstanceOf(TourDetail);
  });

  it('resolves the our-story static page to its dedicated component', async () => {
    configureRouteTesting();

    const harness = await RouterTestingHarness.create();

    await expect(harness.navigateByUrl('/our-story/', OurStory)).resolves.toBeInstanceOf(OurStory);
  });

  it('redirects both old September path variants during client navigation', async () => {
    configureRouteTesting();
    const harness = await RouterTestingHarness.create();
    for (const path of ['/september-2027', '/september-2027/']) {
      await harness.navigateByUrl(path, TourListingPage);
      expect(TestBed.inject(Router).url).toBe('/calendar-2027/september/');
      expect(harness.routeNativeElement?.textContent).toContain('Bulgaria Beyond the Ordinary');
      expect(harness.routeNativeElement?.textContent).not.toContain('Algeria Desert Expedition');
    }
  });

  it('updates country content and SEO when navigating between destination pages', async () => {
    configureRouteTesting();
    const harness = await RouterTestingHarness.create();
    TestBed.inject(OmayaSeo).start();
    for (const country of ['bulgaria', 'morocco']) {
      await harness.navigateByUrl(`/destinations/${country}/`, DestinationPage);
      harness.detectChanges();
      const name = country.charAt(0).toUpperCase() + country.slice(1);
      expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain(name);
      expect(TestBed.inject(Title).getTitle()).toContain(name);
      expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe(
        'index, follow',
      );
      expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
        `https://omayatravel.com/destinations/${country}/`,
      );
      if (country === 'morocco') {
        expect(
          harness.routeNativeElement?.querySelector('time[datetime="2026-10-01"]')?.textContent,
        ).toBe('1 Oct 2026');
        expect(
          harness.routeNativeElement?.querySelector('time[datetime="2027-04-08"]')?.textContent,
        ).toBe('8 Apr 2027');
      }
    }
  });

  it('applies calendar query filters and resets them when returning to all tours', async () => {
    configureRouteTesting();
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/tours-list/?month=April&year=2027', TourListingPage);
    harness.detectChanges();
    expect(harness.routeNativeElement?.querySelectorAll('.tour-listing__card')).toHaveLength(3);
    expect(harness.routeNativeElement?.textContent).not.toContain('Bulgaria Beyond the Ordinary');
    await harness.navigateByUrl('/tours-list/', TourListingPage);
    harness.detectChanges();
    expect(harness.routeNativeElement?.querySelectorAll('.tour-listing__card')).toHaveLength(8);
  });

  it('offers only the current tour departures and updates guides on tour navigation', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2027-08-01T12:00:00Z'));
    try {
      configureRouteTesting();
      const harness = await RouterTestingHarness.create();
      await harness.navigateByUrl('/tour-item/women-only-tour-kyrgyzstan/', TourDetail);
      harness.detectChanges();
      const element = harness.routeNativeElement!;
      (element.querySelector('.tour-detail__date-trigger') as HTMLButtonElement).click();
      harness.detectChanges();
      const dates = Array.from(
        element.querySelectorAll<HTMLButtonElement>(
          '.tour-detail__calendar-grid button:not(:disabled)',
        ),
      );
      expect(dates).toHaveLength(1);
      expect(dates[0].textContent?.trim()).toBe('13');
      expect(
        element.querySelector('a[href="/how-to-visit-song-kul-lake-in-kyrgyzstan"]'),
      ).not.toBeNull();
      dates[0].click();
      harness.detectChanges();
      expect(element.querySelector<HTMLInputElement>('input[name="date"]')?.value).toBe(
        '2027-08-13',
      );

      await harness.navigateByUrl('/tour-item/morocco-tour/', TourDetail);
      harness.detectChanges();
      expect(
        harness.routeNativeElement?.querySelector(
          'a[href="/morocco-casablanca-marrakech-route-guide"]',
        ),
      ).not.toBeNull();
      expect(harness.routeNativeElement?.textContent).toContain('Fitness level: Easy');
      expect(
        harness.routeNativeElement?.querySelector<HTMLInputElement>('input[name="date"]')?.value,
      ).toBe('');
      (
        harness.routeNativeElement?.querySelector('.tour-detail__date-trigger') as HTMLButtonElement
      ).click();
      harness.detectChanges();
      expect(
        harness.routeNativeElement?.querySelectorAll(
          '.tour-detail__calendar-grid button:not(:disabled)',
        ),
      ).toHaveLength(0);
    } finally {
      vi.useRealTimers();
    }
  });

  it('resolves the why-book-with-us static page to its dedicated component', async () => {
    configureRouteTesting();

    const harness = await RouterTestingHarness.create();

    await expect(
      harness.navigateByUrl('/why-book-with-us/', WhyBookWithUs),
    ).resolves.toBeInstanceOf(WhyBookWithUs);
  });

  it('resolves contact, faq, and DMC static pages to dedicated components', async () => {
    configureRouteTesting();

    const harness = await RouterTestingHarness.create();

    await expect(harness.navigateByUrl('/contact/', ContactPage)).resolves.toBeInstanceOf(
      ContactPage,
    );
    await expect(harness.navigateByUrl('/faq/', FaqPage)).resolves.toBeInstanceOf(FaqPage);
    await expect(
      harness.navigateByUrl('/your-dmc-partner-in-bulgaria/', DmcPartnerBulgaria),
    ).resolves.toBeInstanceOf(DmcPartnerBulgaria);
  });

  it('resolves enquire-now to its dedicated component', async () => {
    configureRouteTesting();

    const harness = await RouterTestingHarness.create();

    await expect(harness.navigateByUrl('/enquire-now/', EnquirePage)).resolves.toBeInstanceOf(
      EnquirePage,
    );
  });

  it('resolves unknown destination and tour slugs to not-found behavior', async () => {
    configureRouteTesting();

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
