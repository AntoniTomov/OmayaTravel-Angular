import { CanMatchFn, Routes, UrlMatcher, UrlSegment } from '@angular/router';

import { Homepage } from './features/homepage/homepage';
import { NotFound } from './features/not-found/not-found';
import { PublicRoutePlaceholder } from './features/public-route-placeholder/public-route-placeholder';
import { SearchResults } from './features/search-results/search-results';
import { TourDetail } from './features/tour-detail/tour-detail';
import {
  PUBLIC_BLOG_ARTICLE_ROUTES,
  PUBLIC_DESTINATION_SLUGS,
  PUBLIC_STATIC_PAGE_ROUTES,
  PUBLIC_TOUR_SLUGS,
  PUBLIC_TOUR_CATEGORY_ROUTES,
} from './shared/routing/public-routes';

const rootSlugRoutes: Routes = [
  ...PUBLIC_TOUR_CATEGORY_ROUTES,
  ...PUBLIC_BLOG_ARTICLE_ROUTES,
  ...PUBLIC_STATIC_PAGE_ROUTES,
].map((route) => ({
  path: route.path,
  pathMatch: 'full' as const,
  component: PublicRoutePlaceholder,
  data: {
    routeKey: route.key,
    routeType: route.type,
    canonicalPath: route.canonicalPath,
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
    component: PublicRoutePlaceholder,
    data: {
      routeKey: 'enquire-now',
      routeType: 'static-page',
      canonicalPath: '/enquire-now/',
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
