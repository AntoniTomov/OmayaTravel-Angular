export interface TourImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  source?: string;
}

export interface TourHighlight {
  title: string;
  image: TourImage;
}

export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string | null;
  meals: readonly string[];
}

export interface TourDetailContent {
  id: string;
  slug: string;
  title: string;
  destination: {
    country: string;
    region: string;
    startLocation: string;
    endLocation: string;
  };
  category: string;
  duration: {
    days: number;
    nights: number;
  };
  price: {
    amount: number;
    currency: string;
    unit: string;
  };
  groupSize: {
    min: number;
    max: number;
  };
  departures: readonly string[];
  heroImage: TourImage;
  introduction: readonly string[];
  highlights: readonly TourHighlight[];
  included: readonly string[];
  notIncluded: readonly string[];
  itinerary: readonly TourItineraryDay[];
  gallery: readonly TourImage[];
  enquiry: {
    enabled: boolean;
    cta: string;
  };
  seo: {
    title: string;
    description: string;
  };
  source: {
    legacyUrl: string;
  };
}

const ALGERIA_ASSET_BASE = '/assets/images/destinations/Algiria';

export const ALGERIA_DESERT_EXPEDITION_TADRART_ROUGE: TourDetailContent = {
  id: 'algeria-desert-expedition-tadrart-rouge',
  slug: 'algeria-desert-expedition-tadrart-rouge',
  title: 'Algeria Desert Expedition (Tadrart Rouge)',
  destination: {
    country: 'Algeria',
    region: 'Tadrart Rouge',
    startLocation: 'Algiers',
    endLocation: 'Algiers',
  },
  category: 'Classic Tours',
  duration: {
    days: 8,
    nights: 7,
  },
  price: {
    amount: 1450,
    currency: 'EUR',
    unit: 'person',
  },
  groupSize: {
    min: 6,
    max: 12,
  },
  departures: ['2026-11-05', '2027-02-24', '2027-10-28'],
  heroImage: {
    src: `${ALGERIA_ASSET_BASE}/gallery/gallery-image-5.webp`,
    source:
      'https://omayatravel.com/wp-content/uploads/2026/05/Algeria-Desert-Expedition-Omaya-Travel.webp',
    alt: 'Rock formations and dunes in Tadrart Rouge, Algeria',
    width: 1920,
    height: 900,
  },
  introduction: [
    "Expedition into one of Sahara's most dramatic regions, combining desert camping, prehistoric rock art and encounters with Tuareg culture. Tadrart Rouge is known for enormous red dunes, black-sand landscapes, sandstone formations and ancient paintings and engravings.",
    'Journey focuses on remote wilderness: quiet desert camps, changing landscapes, archaeological sites and exceptionally dark night skies.',
  ],
  highlights: [
    {
      title: 'Camp beneath Saharan stars',
      image: {
        src: `${ALGERIA_ASSET_BASE}/highlights/highlight-image-1.webp`,
        source: 'https://omayatravel.com/wp-content/uploads/2026/05/Algeria-Desert-Camping.webp',
        alt: 'Desert camping in Algeria',
        width: 420,
        height: 320,
      },
    },
    {
      title: 'Marvel at towering Saharan dunes',
      image: {
        src: `${ALGERIA_ASSET_BASE}/highlights/highlight-image-2.webp`,
        source: 'https://omayatravel.com/wp-content/uploads/2026/05/Algeria-Desert-trip.webp',
        alt: 'Towering dunes and rock formations in Sahara',
        width: 420,
        height: 320,
      },
    },
    {
      title: 'Discover 8,000-year-old cave art',
      image: {
        src: `${ALGERIA_ASSET_BASE}/highlights/highlight-image-3.webp`,
        source:
          'https://omayatravel.com/wp-content/uploads/2026/05/Algeria-Desert-Tadrart-Highlights.webp',
        alt: 'Ancient rock art in Tadrart Rouge',
        width: 420,
        height: 320,
      },
    },
    {
      title: 'Explore ancient rock formations',
      image: {
        src: `${ALGERIA_ASSET_BASE}/highlights/highlight-image-4.webp`,
        source: 'https://omayatravel.com/wp-content/uploads/2026/05/Algeria-Desert.webp',
        alt: 'Natural sandstone arch in Algerian Sahara',
        width: 420,
        height: 320,
      },
    },
    {
      title: 'Experience authentic Tuareg culture',
      image: {
        src: `${ALGERIA_ASSET_BASE}/highlights/highlight-image-5.webp`,
        source: 'https://omayatravel.com/wp-content/uploads/2026/05/Algeria-Desert-Tadrart.webp',
        alt: 'Tuareg tea ceremony in Sahara',
        width: 420,
        height: 320,
      },
    },
  ],
  included: [
    'Accommodation as described',
    'Activities mentioned in itinerary',
    'Entry fees for listed sites',
    'Ground transport',
    'Local guide',
    'Meals listed in daily itinerary',
    'Omaya Travel representative',
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Meals not listed in itinerary',
    'Single-room supplement',
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Algiers and flight to Djanet',
      description:
        'Meet group and tour leader in Algiers, then take domestic flight south to Djanet. Local Tuareg team meets group on arrival and provides transfer to hotel.',
      accommodation: 'Local hotel in Djanet',
      meals: [],
    },
    {
      day: 2,
      title: 'Into Tadrart - El Berdj',
      description:
        'Travel south from Djanet into Tadrart Rouge. Visit ancient rock engravings before reaching El Berdj. Explore area around sunset and establish first desert camp.',
      accommodation: 'Wild camping in desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 3,
      title: 'Dunes and Neolithic Paintings - Moul Naga',
      description:
        'Continue through El Berdj gorge into red and pink dune landscapes. Visit rock-art sites around Wan Iska and see Neolithic engravings and cattle paintings. Camp among dunes at Moul Naga.',
      accommodation: 'Wild camping in desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 4,
      title: 'Great Erg - Tin Merzouga to Adjlati',
      description:
        'Explore Tin Merzouga and its immense dunes, then cross Indjaren wadi while visiting additional prehistoric paintings and engravings. Continue to Adjlati and camp among contrasting black-sand dunes.',
      accommodation: 'Wild camping in desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 5,
      title: 'Stone Forest - Adaik',
      description:
        'Travel back toward Djanet through unusual sandstone landscapes. Stop near Tini and visit famous Crying Cow engravings before reaching Adaik, known as Stone Forest for its wind-eroded columns and arches.',
      accommodation: 'Wild camping in desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 6,
      title: 'Wadi Essendilene - Erg Admer',
      description:
        'Explore green canyon landscape of Essendilene, where natural pools support palms, tamarisks and oleanders. Possible encounter with local Tuareg nomads. Continue to Erg Admer for sunset and overnight desert camp.',
      accommodation: 'Wild camping in desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 7,
      title: 'Tikobawin Arch - Return to Djanet',
      description:
        'Visit Tikobawin natural arch, nearby Neolithic tombs and rock paintings, then pass Tilalin mountains and stop at Timghas. Return to Djanet in afternoon and visit local Tuareg market before dinner.',
      accommodation: 'Local hotel in Djanet',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 8,
      title: 'Flight Djanet - Algiers',
      description:
        'Transfer to Djanet airport and fly to Algiers. Tour finishes on arrival in Algiers.',
      accommodation: null,
      meals: [],
    },
  ],
  gallery: Array.from({ length: 12 }, (_, index) => ({
    src: `${ALGERIA_ASSET_BASE}/gallery/gallery-image-${index + 1}.webp`,
    alt: `Algeria desert expedition gallery image ${index + 1}`,
    width: 800,
    height: 1100,
  })),
  enquiry: {
    enabled: true,
    cta: 'Check Availability',
  },
  seo: {
    title: 'Algeria Desert Expedition (Tadrart Rouge) | Omaya Travel',
    description:
      '8-day Algeria desert expedition through Tadrart Rouge with Saharan camping, ancient rock art, Tuareg culture and spectacular dunes.',
  },
  source: {
    legacyUrl: 'https://omayatravel.com/tour-item/algeria-desert-expedition-tadrart-rouge/',
  },
};

export const TOUR_DETAIL_CONTENT: readonly TourDetailContent[] = [
  ALGERIA_DESERT_EXPEDITION_TADRART_ROUGE,
];

export function findTourBySlug(slug: string | null | undefined): TourDetailContent | undefined {
  return TOUR_DETAIL_CONTENT.find((tour) => tour.slug === slug);
}
