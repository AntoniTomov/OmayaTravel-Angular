import {
  HOMEPAGE_HERO,
  PUBLIC_NAVIGATION_GROUPS,
  PUBLIC_NAVIGATION_LINKS,
  SITE_SEARCH_INDEX,
  TRIP_SEARCH_DESTINATIONS,
  TRIP_SEARCH_MONTHS,
} from '../../app/shared/content/homepage-content';
import { TOUR_CARDS } from '../../app/shared/content/tour-list-content';
import { SiteContent } from '../site.types';

const OMAYA_FEATURED_TOUR_TARGETS = [
  '/tour-item/kyrgyzstan-tour/',
  '/tour-item/bulgaria-beyond-the-ordinary/',
  '/tour-item/morocco-tour/',
  '/tour-item/algeria-desert-expedition-tadrart-rouge/',
] as const;

export const OMAYA_SITE_CONTENT: SiteContent = {
  hero: HOMEPAGE_HERO,
  navigationGroups: PUBLIC_NAVIGATION_GROUPS,
  navigationLinks: PUBLIC_NAVIGATION_LINKS,
  tripSearchDestinations: TRIP_SEARCH_DESTINATIONS,
  tripSearchMonths: TRIP_SEARCH_MONTHS,
  featuredTours: OMAYA_FEATURED_TOUR_TARGETS.map((target) => {
    const tour = TOUR_CARDS.find((card) => card.target === target);

    if (!tour) {
      throw new Error(`Missing Omaya featured tour content for ${target}`);
    }

    return tour;
  }),
  searchIndex: SITE_SEARCH_INDEX,
  enabledRoutes: ['*'],
};
