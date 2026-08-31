import { MediaReference } from '../media';

export interface NavigationLink {
  label: string;
  target: string;
  children?: readonly NavigationLink[];
}

export interface NavigationGroup {
  label: string;
  links: readonly NavigationLink[];
}

export interface HeroSlide {
  image: MediaReference;
  visualSrc?: string;
  visualSrcset?: readonly HeroSlideImageVariant[];
}

export interface HeroSlideImageVariant {
  src: string;
  width: number;
}

export interface TripSearchDestination {
  label: string;
  target: string;
}

export interface SearchIndexItem {
  type: 'Destination' | 'Tour' | 'Page' | 'Article';
  title: string;
  excerpt: string;
  canonicalPath: string;
  thumbnail?: MediaReference;
}

export const PUBLIC_HEADER_LOGO: MediaReference = {
  key: 'shared/logo/omaya-travel-mark.png',
  alt: 'Omaya Travel',
  width: 150,
  height: 84,
};

export const PUBLIC_HEADER_LOGO_VISUAL_SRC =
  '/assets/images/home-page/company-logo/Omaya-Travel-Logo-e1780484928941.webp';

export const PUBLIC_HEADER_LOGO_SCROLLED_VISUAL_SRC =
  '/assets/images/home-page/company-logo/Black_logo-e1781169999413.webp';

export const PUBLIC_NAVIGATION_GROUPS: readonly NavigationGroup[] = [
  {
    label: 'Destinations',
    links: [
      {
        label: 'Algeria',
        target: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
      },
      {
        label: 'Bulgaria',
        target: '/tour-item/bulgaria-beyond-the-ordinary/',
      },
      {
        label: 'Kyrgyzstan',
        target: '/tour-item/kyrgyzstan-tour/',
      },
      {
        label: 'Morocco',
        target: '/tour-item/morocco-tour/',
      },
    ],
  },
  {
    label: 'Tours',
    links: [
      {
        label: 'Classic Tours',
        target: '/classic-tours/',
      },
      {
        label: 'Women Only',
        target: '/women-only-tours/',
      },
      {
        label: 'Solo Travelers',
        target: '/solo-travellers-tours/',
      },
      {
        label: 'All Ages',
        target: '/all-ages-tours/',
      },
      {
        label: 'Private Tours',
        target: '/private-tours-your-trip-your-rules/',
      },
      {
        label: 'All Tours',
        target: '/tours-list/',
        children: [
          {
            label: 'Tour List',
            target: '/tours-list/',
          },
          {
            label: 'Calendar 2026',
            target: '/calendar/',
          },
          {
            label: 'Calendar 2027',
            target: '/calendar-2027/',
          },
        ],
      },
    ],
  },
  {
    label: 'About Us',
    links: [
      {
        label: 'Our Story',
        target: '/our-story/',
      },
      {
        label: 'Why book with us?',
        target: '/why-book-with-us/',
      },
      {
        label: 'Your DMC Partner in Bulgaria',
        target: '/your-dmc-partner-in-bulgaria/',
      },
      {
        label: 'Contact',
        target: '/contact/',
      },
      {
        label: 'FAQ',
        target: '/faq/',
      },
    ],
  },
];

export const PUBLIC_NAVIGATION_LINKS: readonly NavigationLink[] = [
  {
    label: 'Inspiring Stories',
    target: '/blog-list/',
  },
  {
    label: 'Enquire Now',
    target: '/enquire-now/',
  },
];

export const HOMEPAGE_HERO = {
  title: 'See the world. Meet your people',
  subtitle:
    'Small-group trips for curious travellers in their 20s to 40s, designed to bring you closer to the places you visit and the people you travel with',
  slides: [
    {
      image: {
        key: 'shared/homepage/home-hero-carousel-1.webp',
        alt: 'Small group of travellers sitting together in a mountain village',
        width: 1920,
        height: 1080,
      },
      visualSrc: '/assets/images/home-page/carousel/HomePageCoverPhoto-5.webp',
      visualSrcset: [
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-5-480w.webp',
          width: 480,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-5-720w.webp',
          width: 720,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-5-960w.webp',
          width: 960,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-5-1200w.webp',
          width: 1200,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-5-1600w.webp',
          width: 1600,
        },
      ],
    },
    {
      image: {
        key: 'shared/homepage/home-hero-carousel-2.webp',
        alt: 'Travellers looking across a mountain lake at sunset',
        width: 1920,
        height: 1080,
      },
      visualSrc: '/assets/images/home-page/carousel/HomePageCoverPhoto-2-e1785918980400.webp',
      visualSrcset: [
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-2-e1785918980400-480w.webp',
          width: 480,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-2-e1785918980400-720w.webp',
          width: 720,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-2-e1785918980400-960w.webp',
          width: 960,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-2-e1785918980400-1200w.webp',
          width: 1200,
        },
      ],
    },
    {
      image: {
        key: 'shared/homepage/home-hero-carousel-3.webp',
        alt: 'Small group walking through a dramatic mountain landscape',
        width: 1920,
        height: 1080,
      },
      visualSrc: '/assets/images/home-page/carousel/HomePageCoverPhoto-3.webp',
      visualSrcset: [
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-3-480w.webp',
          width: 480,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-3-720w.webp',
          width: 720,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-3-960w.webp',
          width: 960,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-3-1200w.webp',
          width: 1200,
        },
        {
          src: '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-3-1600w.webp',
          width: 1600,
        },
      ],
    },
  ] satisfies readonly HeroSlide[],
};

export const TRIP_SEARCH_DESTINATIONS: readonly TripSearchDestination[] = [
  {
    label: 'Algeria',
    target: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
  },
  {
    label: 'Bulgaria',
    target: '/tour-item/bulgaria-beyond-the-ordinary/',
  },
  {
    label: 'Kyrgyzstan',
    target: '/tour-item/kyrgyzstan-tour/',
  },
  {
    label: 'Morocco',
    target: '/tour-item/morocco-tour/',
  },
];

export const TRIP_SEARCH_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const SITE_SEARCH_INDEX: readonly SearchIndexItem[] = [
  {
    type: 'Tour',
    title: 'Kyrgyzstan Discovery Tour | Women only',
    excerpt:
      "Nine days across Kyrgyzstan's mountains and steppes, where ancient nomadic traditions are still very much alive.",
    canonicalPath: '/tour-item/women-only-tour-kyrgyzstan/',
    thumbnail: {
      key: 'tours/women-only-tour-kyrgyzstan/song-kul-lake.webp',
      alt: 'Mountain lake landscape in Kyrgyzstan',
      width: 1200,
      height: 800,
    },
  },
  {
    type: 'Tour',
    title: 'Bulgaria Beyond the Ordinary',
    excerpt:
      'A carefully curated journey through monasteries, mountains, villages and local traditions in Bulgaria.',
    canonicalPath: '/tour-item/bulgaria-beyond-the-ordinary/',
  },
  {
    type: 'Tour',
    title: 'Morocco Tour',
    excerpt:
      'Explore Moroccan cities, desert landscapes and cultural encounters through a small-group itinerary.',
    canonicalPath: '/tour-item/morocco-tour/',
  },
  {
    type: 'Page',
    title: 'Private Tours',
    excerpt: 'Create a private journey shaped around your pace, interests and travel style.',
    canonicalPath: '/private-tours-your-trip-your-rules/',
  },
  {
    type: 'Article',
    title: 'How to visit Song Kul Lake in Kyrgyzstan',
    excerpt: 'A practical guide to reaching and experiencing Song Kul Lake.',
    canonicalPath: '/how-to-visit-song-kul-lake-in-kyrgyzstan/',
  },
  {
    type: 'Page',
    title: 'Contact',
    excerpt: 'Get in touch with Omaya Travel to discuss your next small-group journey.',
    canonicalPath: '/contact/',
  },
];
