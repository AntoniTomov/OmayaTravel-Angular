import { CanMatchFn, Routes, UrlMatcher, UrlSegment } from '@angular/router';

import { ContactPage } from './features/contact-page/contact-page';
import { DmcPartnerBulgaria } from './features/dmc-partner-bulgaria/dmc-partner-bulgaria';
import { FaqPage } from './features/faq-page/faq-page';
import { Homepage } from './features/homepage/homepage';
import { NotFound } from './features/not-found/not-found';
import { OurStory } from './features/our-story/our-story';
import { PublicRoutePlaceholder } from './features/public-route-placeholder/public-route-placeholder';
import { SearchResults } from './features/search-results/search-results';
import { TourDetail } from './features/tour-detail/tour-detail';
import { WhyBookWithUs } from './features/why-book-with-us/why-book-with-us';
import {
  PUBLIC_BLOG_ARTICLE_ROUTES,
  PUBLIC_DESTINATION_SLUGS,
  PUBLIC_STATIC_PAGE_ROUTES,
  PUBLIC_TOUR_SLUGS,
  PUBLIC_TOUR_CATEGORY_ROUTES,
} from './shared/routing/public-routes';

const blogArticleRoutes: Routes = PUBLIC_BLOG_ARTICLE_ROUTES.map((route) => ({
  path: route.path,
  pathMatch: 'full' as const,
  loadComponent: () =>
    import('./features/blog-article/blog-article').then((module) => module.BlogArticle),
  data: {
    routeKey: route.key,
    routeType: route.type,
    canonicalPath: route.canonicalPath,
  },
}));

const rootSlugRoutes: Routes = [...PUBLIC_TOUR_CATEGORY_ROUTES, ...PUBLIC_STATIC_PAGE_ROUTES].map(
  (route) => ({
    path: route.path,
    pathMatch: 'full' as const,
    component: PublicRoutePlaceholder,
    data: {
      routeKey: route.key,
      routeType: route.type,
      canonicalPath: route.canonicalPath,
    },
  }),
);

const tourListingPageRoutes: Routes = [
  'tours-list',
  'classic-tours',
  'women-only-tours',
  'solo-travellers-tours',
  'private-tours-your-trip-your-rules',
  'private-tour-planning',
  'september-2027',
].map((path) => ({
  path,
  pathMatch: 'full' as const,
  loadComponent: () =>
    import('./features/tour-listing-page/tour-listing-page').then(
      (module) => module.TourListingPage,
    ),
  data: {
    routeKey: `tour-listing-${path}`,
    routeType:
      path === 'september-2027' || path === 'private-tour-planning'
        ? 'static-page'
        : 'tour-category',
    canonicalPath: `/${path}/`,
  },
}));

const tourCalendarPageRoutes: Routes = ['calendar', 'calendar-2027'].map((path) => ({
  path,
  pathMatch: 'full' as const,
  loadComponent: () =>
    import('./features/tour-calendar-page/tour-calendar-page').then(
      (module) => module.TourCalendarPage,
    ),
  data: {
    routeKey: `tour-calendar-${path}`,
    routeType: 'static-page',
    canonicalPath: `/${path}/`,
  },
}));

export const destinationDetailCanMatch: CanMatchFn = (_route, segments) =>
  matchesApprovedSlugRoute(segments, 'destinations', PUBLIC_DESTINATION_SLUGS);

export const tourDetailCanMatch: CanMatchFn = (_route, segments) =>
  matchesApprovedSlugRoute(segments, 'tour-item', PUBLIC_TOUR_SLUGS);

export const destinationDetailCanonicalMatcher: UrlMatcher = (segments) =>
  matchApprovedCanonicalRoute(
    segments,
    'destinations',
    'destinationSlug',
    PUBLIC_DESTINATION_SLUGS,
  );

export const tourDetailCanonicalMatcher: UrlMatcher = (segments) =>
  matchApprovedCanonicalRoute(segments, 'tour-item', 'tourSlug', PUBLIC_TOUR_SLUGS);

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
    pathMatch: 'full',
    data: {
      routeKey: 'home',
      routeType: 'home',
      canonicalPath: '/',
    },
  },
  {
    path: 'search',
    component: SearchResults,
    pathMatch: 'full',
    data: {
      routeKey: 'search',
      noindex: true,
    },
  },
  {
    path: 'enquire-now',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/enquire-page/enquire-page').then((module) => module.EnquirePage),
    data: {
      routeKey: 'enquire-now',
      routeType: 'static-page',
      canonicalPath: '/enquire-now/',
    },
  },
  {
    path: 'blog-list-2',
    pathMatch: 'full',
    loadComponent: () => import('./features/blog-list/blog-list').then((module) => module.BlogList),
    data: {
      routeKey: 'blog-list',
      routeType: 'static-page',
      canonicalPath: '/blog-list-2/',
    },
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactPage,
    data: {
      routeKey: 'static-contact',
      routeType: 'static-page',
      canonicalPath: '/contact/',
    },
  },
  {
    path: 'faq',
    pathMatch: 'full',
    component: FaqPage,
    data: {
      routeKey: 'static-faq',
      routeType: 'static-page',
      canonicalPath: '/faq/',
    },
  },
  {
    path: 'our-story',
    pathMatch: 'full',
    component: OurStory,
    data: {
      routeKey: 'static-our-story',
      routeType: 'static-page',
      canonicalPath: '/our-story/',
    },
  },
  {
    path: 'your-dmc-partner-in-bulgaria',
    pathMatch: 'full',
    component: DmcPartnerBulgaria,
    data: {
      routeKey: 'static-your-dmc-partner-in-bulgaria',
      routeType: 'static-page',
      canonicalPath: '/your-dmc-partner-in-bulgaria/',
    },
  },
  {
    path: 'why-book-with-us',
    pathMatch: 'full',
    component: WhyBookWithUs,
    data: {
      routeKey: 'static-why-book-with-us',
      routeType: 'static-page',
      canonicalPath: '/why-book-with-us/',
    },
  },
  {
    path: 'destinations',
    pathMatch: 'full',
    component: PublicRoutePlaceholder,
    data: {
      routeKey: 'destination-hub',
      routeType: 'destination-hub',
      canonicalPath: '/destinations/',
    },
  },
  ...tourListingPageRoutes,
  ...tourCalendarPageRoutes,
  {
    matcher: destinationDetailCanonicalMatcher,
    component: PublicRoutePlaceholder,
    data: {
      routeKey: 'destination-detail',
      routeType: 'destination-detail',
      canonicalPathPattern: '/destinations/:destinationSlug/',
    },
  },
  {
    path: 'destinations/:destinationSlug',
    canMatch: [destinationDetailCanMatch],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PublicRoutePlaceholder,
        data: {
          routeKey: 'destination-detail',
          routeType: 'destination-detail',
          canonicalPathPattern: '/destinations/:destinationSlug/',
        },
      },
    ],
  },
  {
    matcher: tourDetailCanonicalMatcher,
    component: TourDetail,
    data: {
      routeKey: 'tour-detail',
      routeType: 'tour-detail',
      canonicalPathPattern: '/tour-item/:tourSlug/',
    },
  },
  {
    path: 'tour-item/:tourSlug',
    canMatch: [tourDetailCanMatch],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TourDetail,
        data: {
          routeKey: 'tour-detail',
          routeType: 'tour-detail',
          canonicalPathPattern: '/tour-item/:tourSlug/',
        },
      },
    ],
  },
  ...blogArticleRoutes,
  ...rootSlugRoutes,
  {
    path: '404',
    component: NotFound,
    data: {
      routeKey: 'not-found',
      routeStatus: 404,
    },
  },
  {
    path: '**',
    component: NotFound,
    data: {
      routeKey: 'unknown',
      routeStatus: 404,
    },
  },
];

function matchesApprovedSlugRoute(
  segments: UrlSegment[],
  section: string,
  approvedSlugs: readonly string[],
): boolean {
  const [sectionSegment, slugSegment, ...remainingSegments] = segments;
  const candidateSlug = sectionSegment?.path === section ? slugSegment?.path : sectionSegment?.path;
  const extraSegments = sectionSegment?.path === section ? remainingSegments : segments.slice(1);

  return (
    candidateSlug !== undefined &&
    extraSegments.every((segment) => segment.path.length === 0) &&
    approvedSlugs.includes(candidateSlug)
  );
}

function matchApprovedCanonicalRoute(
  segments: UrlSegment[],
  section: string,
  slugParam: string,
  approvedSlugs: readonly string[],
) {
  const [sectionSegment, slugSegment, ...remainingSegments] = segments;
  const trailingSlashSegments = remainingSegments.filter((segment) => segment.path.length === 0);

  if (
    sectionSegment === undefined ||
    slugSegment === undefined ||
    remainingSegments.some((segment) => segment.path.length > 0) ||
    sectionSegment.path !== section ||
    !approvedSlugs.includes(slugSegment.path)
  ) {
    return null;
  }

  return {
    consumed: [sectionSegment, slugSegment, ...trailingSlashSegments],
    posParams: {
      [slugParam]: slugSegment,
    },
  };
}
