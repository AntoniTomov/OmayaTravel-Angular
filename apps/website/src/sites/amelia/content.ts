import {
  HeroSlide,
  NavigationGroup,
  NavigationLink,
} from '../../app/shared/content/homepage-content';
import { TOUR_CARDS, TourCardContent } from '../../app/shared/content/tour-list-content';
import { SiteContent } from '../site.types';

const AMELIA_HERO_SLIDES: readonly HeroSlide[] = [
  {
    image: {
      key: 'amelia/home/women-travel-kyrgyzstan.webp',
      alt: 'Жени пътешественички сред планините на Киргизстан',
      width: 1920,
      height: 1080,
    },
    visualSrc: '/assets/images/women-tours/Kyrgystan-women/kyrgyzstan-women-only-bgr.webp',
  },
  {
    image: {
      key: 'amelia/home/morocco-women-tour.webp',
      alt: 'Женско пътуване в Мароко между сини градове и пустиня',
      width: 1920,
      height: 1080,
    },
    visualSrc: '/assets/images/women-tours/Morocco/morocco-women-only-bgr.webp',
  },
];

const AMELIA_NAVIGATION_GROUPS: readonly NavigationGroup[] = [
  {
    label: 'Пътувания',
    links: [
      {
        label: 'Киргизстан за жени',
        target: '/tour-item/women-only-tour-kyrgyzstan/',
      },
      {
        label: 'Мароко за жени',
        target: '/tour-item/morocco-tour/',
      },
    ],
  },
  {
    label: 'Дестинации',
    links: [
      {
        label: 'Киргизстан',
        target: '/tour-item/women-only-tour-kyrgyzstan/',
      },
      {
        label: 'Мароко',
        target: '/tour-item/morocco-tour/',
      },
    ],
  },
  {
    label: 'За Amelia',
    links: [
      {
        label: 'За нас',
        target: '/our-story/',
      },
      {
        label: 'Контакти',
        target: '/contact/',
      },
    ],
  },
];

const AMELIA_NAVIGATION_LINKS: readonly NavigationLink[] = [
  {
    label: 'Контакти',
    target: '/contact/',
  },
];

// TODO_DUMMY_AMELIA_MOROCCO_ROUTE: replace with a dedicated Morocco women-only detail route
// when that page is created. The card content exists, but the detail page is shared today.
const AMELIA_MOROCCO_WOMEN_ROUTE = '/tour-item/tour-item-morocco-women-only-tour/';

const AMELIA_FEATURED_TOURS: readonly TourCardContent[] = TOUR_CARDS.filter(
  (card) =>
    card.target === '/tour-item/women-only-tour-kyrgyzstan/' ||
    (card.target === AMELIA_MOROCCO_WOMEN_ROUTE && card.title.toLowerCase().includes('women only')),
).map((card) => ({
  ...card,
  category: 'Women only',
  title: card.title
    .replace('Kyrgyzstan Discovery Tour | Women only', 'Киргизстан за жени')
    .replace('Morocco – Blue Cities & Golden Dunes | Women only', 'Мароко за жени'),
}));

export const AMELIA_SITE_CONTENT: SiteContent = {
  hero: {
    title: 'Пътувания за жени, които искат повече от почивка',
    subtitle:
      'Amelia събира любопитни жени в малки групи за смислени маршрути, културни срещи и спокойна подкрепа по пътя.',
    slides: AMELIA_HERO_SLIDES,
  },
  navigationGroups: AMELIA_NAVIGATION_GROUPS,
  navigationLinks: AMELIA_NAVIGATION_LINKS,
  tripSearchDestinations: [
    {
      label: 'Киргизстан',
      target: '/tour-item/women-only-tour-kyrgyzstan/',
    },
    {
      label: 'Мароко',
      target: AMELIA_MOROCCO_WOMEN_ROUTE,
    },
  ],
  tripSearchMonths: [
    'Януари',
    'Февруари',
    'Март',
    'Април',
    'Май',
    'Юни',
    'Юли',
    'Август',
    'Септември',
    'Октомври',
    'Ноември',
    'Декември',
  ],
  featuredTours: AMELIA_FEATURED_TOURS,
  searchIndex: [
    {
      type: 'Tour',
      title: 'Киргизстан за жени',
      excerpt: 'Планини, езера, юрти и номадска култура в малка група, създадена за жени.',
      canonicalPath: '/tour-item/women-only-tour-kyrgyzstan/',
    },
    {
      type: 'Tour',
      title: 'Мароко за жени',
      excerpt: 'Сини градове, пустинни дюни и културни срещи в женска група с внимателно темпо.',
      canonicalPath: AMELIA_MOROCCO_WOMEN_ROUTE,
    },
    {
      type: 'Page',
      title: 'За Amelia',
      excerpt: 'Женски ориентиран сайт за смислени пътувания в малки групи.',
      canonicalPath: '/our-story/',
    },
    {
      type: 'Page',
      title: 'Контакти',
      excerpt: 'Свържете се с Amelia за следващото си пътуване.',
      canonicalPath: '/contact/',
    },
  ],
  enabledRoutes: [
    '/',
    '/search/',
    '/our-story/',
    '/contact/',
    '/destinations/',
    '/tour-item/women-only-tour-kyrgyzstan/',
    AMELIA_MOROCCO_WOMEN_ROUTE,
    '/cookie-policy/',
    '/privacy-policy/',
    '/termsconditions/',
    '/404/',
  ],
};
