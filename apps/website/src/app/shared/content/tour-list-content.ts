import { toursInMonth } from './tour-departures';
import { TOUR_CARDS, TourCardContent } from './tour-cards';

export { TOUR_CARDS };
export type { TourCardContent };

export interface TourListingPageContent {
  slug: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  heroAlt?: string;
  cards: readonly TourCardContent[];
  showFilters: boolean;
  departurePeriod?: { month: number; year: number };
  introSections?: readonly {
    title: string;
    body: string;
    image: string;
    alt: string;
  }[];
}

export const TOUR_LISTING_PAGES: readonly TourListingPageContent[] = [
  {
    slug: 'tours-list',
    title: 'Tours List',
    subtitle:
      "Somewhere on this page is a journey you'll spend the next year dreaming about. Take your time.",
    heroImage: '/assets/images/destinations/classic-tours-bgr.webp',
    heroAlt: 'Hillside town and wooded landscape in Bulgaria',
    cards: TOUR_CARDS,
    showFilters: true,
  },
  {
    slug: 'classic-tours',
    title: 'Classic Tours',
    subtitle: '',
    heroImage: '/assets/images/destinations/classic-tours-bgr.webp',
    heroAlt: 'Hillside town and wooded landscape in Bulgaria',
    cards: TOUR_CARDS.filter((card) => card.category === 'Classic Tours'),
    showFilters: false,
  },
  {
    slug: 'women-only-tours',
    title: 'Women Only Tours',
    subtitle: '',
    heroImage: '/assets/images/women-tours/women-tours-bgr.webp',
    heroAlt: 'Women-only tour group',
    cards: TOUR_CARDS.filter((card) => card.category === 'Women only'),
    showFilters: false,
  },
  {
    slug: 'solo-travellers-tours',
    title: 'Solo Travellers',
    subtitle: '',
    heroImage: '/assets/images/solo-travellers/solo-travelers-bgr.webp',
    heroAlt: 'Solo travellers tour landscape',
    cards: TOUR_CARDS.filter((card) => card.category === 'Solo Traveller Only'),
    showFilters: false,
  },
  {
    slug: 'all-ages-tours',
    title: 'All Ages Tours',
    subtitle: '',
    heroImage: '/assets/images/all-ages/all-ages-bgr.webp',
    heroAlt: 'All ages tour landscape',
    cards: TOUR_CARDS.filter(
      (card) => card.target === '/tour-item/algeria-desert-expedition-tadrart-rouge/',
    ).map((card) => ({
      ...card,
      title: `${card.title} | All Ages`,
      category: 'All Ages',
    })),
    showFilters: false,
  },
  {
    slug: 'private-tours-your-trip-your-rules',
    title: 'Private Tours - Your Trip, Your Rules',
    subtitle: 'Private itineraries shaped around your pace, interests, dates and travel style.',
    heroImage: '/assets/images/private-tour/Private-tour-bgr.webp',
    heroAlt: 'Private tour landscape',
    cards: TOUR_CARDS.slice(0, 4).map((card) => ({ ...card, category: 'Private Tours' })),
    showFilters: false,
    introSections: [
      {
        title: 'Bring us the idea',
        body: 'Share the places, dates, travel style and special interests you have in mind. We shape the journey around the way you actually want to travel.',
        image: '/assets/images/private-tour/private-tour-image.webp',
        alt: 'Private tour planning inspiration',
      },
      {
        title: 'Travel with the right local support',
        body: 'We connect the route, guides, stays and experiences into one carefully managed itinerary, with practical support before and during the trip.',
        image: '/assets/images/private-tour/Private-tour-bgr.webp',
        alt: 'Private tour local support',
      },
    ],
  },
  // Unrouted. /private-tour-planning/ now 301s to /private-tours-your-trip-your-rules/, which owns
  // this intent — the two pages shared a hero image, section images, card source and purpose, and
  // this one had no inbound links. The copy is kept rather than deleted: restoring the page means
  // putting the slug back in PUBLIC_STATIC_PAGE_SLUGS and app.routes.ts, and removing the redirect.
  {
    slug: 'private-tour-planning',
    title: 'Private Tour Planning',
    subtitle: 'A custom travel plan built from your dates, pace and interests.',
    heroImage: '/assets/images/private-tour/Private-tour-bgr.webp',
    heroAlt: 'Private tour planning',
    cards: TOUR_CARDS.slice(0, 3).map((card) => ({ ...card, category: 'Private Tours' })),
    showFilters: false,
    introSections: [
      {
        title: 'Tell us what matters',
        body: 'We start with your priorities: landscapes, food, family time, photography, culture, walking level, celebration dates or a route you already have in mind.',
        image: '/assets/images/private-tour/private-tour-image.webp',
        alt: 'Private itinerary notes',
      },
      {
        title: 'We refine the route',
        body: 'The final plan balances memorable experiences with realistic timing, local insight and comfortable logistics.',
        image: '/assets/images/private-tour/Private-tour-bgr.webp',
        alt: 'Private itinerary route',
      },
    ],
  },
  {
    slug: 'calendar-2027/september',
    title: 'September 2027 Tours',
    subtitle: 'Scheduled departures for September 2027. Enquire to confirm places.',
    cards: TOUR_CARDS.filter((card) =>
      toursInMonth(9, 2027).some((tour) => card.target === '/tour-item/' + tour.slug + '/'),
    ),
    departurePeriod: { month: 9, year: 2027 },
    showFilters: true,
  },
];

export function findTourListingPage(slug: string | null | undefined): TourListingPageContent {
  return (
    TOUR_LISTING_PAGES.find((page) => page.slug === slug) ??
    TOUR_LISTING_PAGES.find((page) => page.slug === 'tours-list')!
  );
}
