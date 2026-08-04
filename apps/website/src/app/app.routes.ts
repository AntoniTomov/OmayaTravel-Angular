import { Routes } from '@angular/router';

import { NotFound } from './features/not-found/not-found';
import { PublicRoutePlaceholder } from './features/public-route-placeholder/public-route-placeholder';
import {
  PUBLIC_BLOG_ARTICLE_ROUTES,
  PUBLIC_STATIC_PAGE_ROUTES,
  PUBLIC_TOUR_CATEGORY_ROUTES,
} from './shared/routing/public-routes';

const rootSlugRoutes: Routes = [
  ...PUBLIC_TOUR_CATEGORY_ROUTES,
  ...PUBLIC_BLOG_ARTICLE_ROUTES,
  ...PUBLIC_STATIC_PAGE_ROUTES,
].map((route) => ({
  path: route.path,
  component: PublicRoutePlaceholder,
  data: {
    routeKey: route.key,
    routeType: route.type,
    canonicalPath: route.canonicalPath,
  },
}));

export const routes: Routes = [
  {
    path: '',
    component: PublicRoutePlaceholder,
    pathMatch: 'full',
    data: {
      routeKey: 'home',
      routeType: 'home',
      canonicalPath: '/',
    },
  },
  {
    path: 'destinations',
    component: PublicRoutePlaceholder,
    data: {
      routeKey: 'destination-hub',
      routeType: 'destination-hub',
      canonicalPath: '/destinations/',
    },
  },
  {
    path: 'destinations/:destinationSlug',
    component: PublicRoutePlaceholder,
    data: {
      routeKey: 'destination-detail',
      routeType: 'destination-detail',
      canonicalPathPattern: '/destinations/:destinationSlug/',
    },
  },
  {
    path: 'tour-item/:tourSlug',
    component: PublicRoutePlaceholder,
    data: {
      routeKey: 'tour-detail',
      routeType: 'tour-detail',
      canonicalPathPattern: '/tour-item/:tourSlug/',
    },
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
