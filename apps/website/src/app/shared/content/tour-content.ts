export interface TourImage {
  src: string;
  alt: string;
  width: number;
  height: number | string;
  source?: string;
}

export interface TourLinkedTitle {
  text: string;
  linkText: string;
  link: string;
}

export interface TourHighlight {
  title: TourLinkedTitle;
  image: TourImage;
}

export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string | null;
  meals: readonly string[];
}

export interface TourFaqItem {
  question: string;
  answer: readonly string[];
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
  faq?: {
    heading: string;
    intro: string;
    items: readonly TourFaqItem[];
  };
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
  departureReturn?: DepartureReturn;
}

export interface DepartureReturn {
  departure: 'Bishkek, Kyrgyzstan';
  return: 'Bishkek, Kyrgyzstan';
}

const ALGERIA_ASSET_BASE = '/assets/images/destinations/Algiria';
const BULGARIA_WOMEN_ASSET_BASE = '/assets/images/women-tours/beautiful-bulgaria-women';
const KYRGYZSTAN_ASSET_BASE = '/assets/images';
const KYRGYZSTAN_WOMEN_ASSET_BASE = '/assets/images/women-tours/Kyrgystan-women';
const MOROCCO_PLACEHOLDER_IMAGE = '/assets/images/destinations/classic-tours-bgr.webp';

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
      title: { text: 'Camp beneath Saharan stars', linkText: '', link: '' },
      image: {
        src: `${ALGERIA_ASSET_BASE}/highlights/highlight-image-1.webp`,
        source: 'https://omayatravel.com/wp-content/uploads/2026/05/Algeria-Desert-Camping.webp',
        alt: 'Desert camping in Algeria',
        width: 420,
        height: 320,
      },
    },
    {
      title: { text: 'Marvel at towering Saharan dunes', linkText: '', link: '' },
      image: {
        src: `${ALGERIA_ASSET_BASE}/highlights/highlight-image-2.webp`,
        source: 'https://omayatravel.com/wp-content/uploads/2026/05/Algeria-Desert-trip.webp',
        alt: 'Towering dunes and rock formations in Sahara',
        width: 420,
        height: 320,
      },
    },
    {
      title: { text: 'Discover 8,000-year-old cave art', linkText: '', link: '' },
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
      title: { text: 'Explore ancient rock formations', linkText: '', link: '' },
      image: {
        src: `${ALGERIA_ASSET_BASE}/highlights/highlight-image-4.webp`,
        source: 'https://omayatravel.com/wp-content/uploads/2026/05/Algeria-Desert.webp',
        alt: 'Natural sandstone arch in Algerian Sahara',
        width: 420,
        height: 320,
      },
    },
    {
      title: { text: 'Experience authentic Tuareg culture', linkText: '', link: '' },
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
  {
    id: 'bulgaria-beyond-the-ordinary',
    slug: 'bulgaria-beyond-the-ordinary',
    title: 'Bulgaria Beyond the Ordinary',
    destination: {
      country: 'Bulgaria',
      region: 'Sofia, Rila, Melnik, Rhodopes, Plovdiv, Veliko Tarnovo',
      startLocation: 'Sofia',
      endLocation: 'Sofia',
    },
    category: 'Classic Tours',
    duration: {
      days: 8,
      nights: 7,
    },
    price: {
      amount: 1050,
      currency: 'EUR',
      unit: 'person',
    },
    groupSize: {
      min: 6,
      max: 12,
    },
    departures: ['2027-05-14', '2027-09-10'],
    heroImage: {
      src: `${BULGARIA_WOMEN_ASSET_BASE}/bulgaria-women-tour-bgr.webp`,
      alt: 'Monument in the Bulgarian mountains',
      width: 1920,
      height: 900,
    },
    introduction: [
      'An eight-day journey through Bulgaria focused on places and experiences beyond the usual visitor route, from mountain monasteries and historic towns to Rhodope villages and communist-era landmarks.',
      'The tour combines local hospitality, regional food and wine, traditional customs, historic cities and distinctive landscapes.',
    ],
    highlights: [
      {
        title: { text: 'Exploring Rila Monastery', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/Rila-Monastery-Frescoes-11.webp`,
          alt: 'Frescoes at Rila Monastery',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Tasting wine in Melnik', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/Rural-Bulgaria-9.webp`,
          alt: 'Vineyards and rural scenery near Melnik, Bulgaria',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'The Bridal Face Painting Ritual', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/Gelina-Ritual-in-Ribnovo-1.webp`,
          alt: 'Traditional bridal face painting from the Rhodope region',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: "Walking Plovdiv's Old Town", linkText: '', link: '' },
        image: {
          src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/Plovdiv-Roman-Theater-5.webp`,
          alt: 'Historic Plovdiv, Bulgaria',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Exploring the forgotten Buzludzha', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/Buzludzha-Monument-3.webp`,
          alt: 'Buzludzha monument in Bulgaria',
          width: 800,
          height: 1100,
        },
      },
    ],
    included: [
      'Accommodation as described',
      'Entry fees for the mentioned sites',
      'Ground transport',
      'Local guide',
      'Meals according to the daily description',
      'Omaya Travel representative',
    ],
    notIncluded: [
      'Activities as mentioned',
      'Flights',
      'Insurance',
      'Meals not mentioned',
      'Single room supplement',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Sofia',
        description:
          'Arrive in Sofia and transfer from the airport to the hotel. Remaining time is free to settle in and explore independently.',
        accommodation: '3* hotel in Sofia',
        meals: [],
      },
      {
        day: 2,
        title: 'Sofia City Tour & Surroundings',
        description:
          'Explore central Sofia and its Roman, religious and architectural layers, then continue to Pancharevo Lake and the Bells Monument. Evening at leisure.',
        accommodation: '3* hotel in Sofia',
        meals: ['breakfast'],
      },
      {
        day: 3,
        title: 'Sofia - Rila Monastery - Melnik',
        description:
          'Travel into the Rila Mountains to visit Rila Monastery, then continue to Melnik for its sandstone scenery and winemaking heritage, including a local wine tasting.',
        accommodation: 'Local boutique hotel/guesthouse',
        meals: ['breakfast', 'wine tasting'],
      },
      {
        day: 4,
        title: 'Melnik - Ribnovo - Leshten',
        description:
          "Continue into the Rhodopes, share lunch with a local family in Ribnovo and experience a demonstration of the region's traditional bridal face-painting ritual. Continue through mountain villages to Leshten or Kovachevitsa.",
        accommodation: 'Local boutique hotel/guesthouse',
        meals: ['breakfast', 'lunch by local family'],
      },
      {
        day: 5,
        title: 'Leshten - Plovdiv',
        description:
          'Transfer to Plovdiv and explore its historic Old Town, traditional merchant houses and Roman Theatre. Evening free.',
        accommodation: '3* hotel in Plovdiv',
        meals: ['breakfast'],
      },
      {
        day: 6,
        title: 'Plovdiv - Veliko Tarnovo',
        description:
          "Visit Asen's Fortress, then stop at either the Kazanluk Thracian Tomb or Damascena Rose Complex. Continue via Buzludzha to Veliko Tarnovo.",
        accommodation: 'Local boutique hotel/guesthouse',
        meals: ['breakfast'],
      },
      {
        day: 7,
        title: 'Veliko Tarnovo - Krushuna Waterfalls - Devetashka Cave - Sofia',
        description:
          'Tour Veliko Tarnovo and Tsarevets Fortress, then visit Krushuna Waterfalls and Devetashka Cave before returning to Sofia.',
        accommodation: '3* hotel in Sofia',
        meals: ['breakfast'],
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Transfer to Sofia Airport according to the flight schedule.',
        accommodation: null,
        meals: ['breakfast'],
      },
    ],
    gallery: [
      'Rila-Monasterry-Bulgaria-2.webp',
      'Buzludzha-Monument-3.webp',
      'Sofia-City-Tour-Bulgaria-4.webp',
      'Plovdiv-Roman-Theater-5.webp',
      'Veliko-Tarnovo-Bulgaria-6.webp',
      'Rural-Bulgaria-7.webp',
      'Devetashka-Cave-8.webp',
      'Rural-Bulgaria-9.webp',
      'Gelina-10.webp',
      'Rila-Monastery-Frescoes-11.webp',
      'Plovdiv-at-night-12.webp',
      'Gelina-Ritual-in-Ribnovo-1.webp',
    ].map((fileName, index) => ({
      src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/${fileName}`,
      alt: `Bulgaria tour gallery image ${index + 1}`,
      width: 800,
      height: 1100,
    })),
    enquiry: {
      enabled: true,
      cta: 'Check Availability',
    },
    seo: {
      title: 'Bulgaria Tour: Ultimate 8-Day Hidden Gems Adventure | Omaya Travel',
      description:
        'Eight-day Bulgaria tour through Sofia, Rila Monastery, Melnik, the Rhodopes, Plovdiv, Veliko Tarnovo, Buzludzha and other lesser-visited highlights.',
    },
    source: {
      legacyUrl: 'https://omayatravel.com/tour-item/tour-item-bulgaria-tour/',
    },
  },
  {
    id: 'kyrgyzstan-tour',
    slug: 'kyrgyzstan-tour',
    title: 'Kyrgyzstan Discovery Tour',
    destination: {
      country: 'Kyrgyzstan',
      region: 'Bishkek, Song Kul, Issyk-Kul, Karakol, Altyn Arashan',
      startLocation: 'Bishkek',
      endLocation: 'Bishkek',
    },
    category: 'Classic Tours',
    duration: {
      days: 10,
      nights: 9,
    },
    price: {
      amount: 1320,
      currency: 'EUR',
      unit: 'person',
    },
    groupSize: {
      min: 6,
      max: 12,
    },
    departures: ['2027-07-23', '2027-08-06'],
    heroImage: {
      src: `${KYRGYZSTAN_ASSET_BASE}/Kyrgystan_women_only_tour_cover-1.webp`,
      alt: 'Mountain landscape in Kyrgyzstan',
      width: 1920,
      height: 900,
    },
    introduction: [
      'A ten-day route through Kyrgyzstan combining Bishkek, alpine lakes, nomadic culture, yurt stays, mountain scenery and local hospitality.',
      'Highlights include Song Kul, traditional eagle hunting, Skazka Canyon, Altyn Arashan hot springs, Issyk-Kul and historic sites around the Chuy Valley.',
    ],
    highlights: [
      {
        title: {
          text: 'Sleeping in a at ',
          linkText: 'Song Kul Lake',
          link: '/how-to-visit-song-kul-lake-in-kyrgyzstan/',
        },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/Kyrgyzstan-tour-13.webp`,
          alt: 'Yurt near Song Kul Lake',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Eagle hunting demonstration', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/Kyrgyzstan-tour-8.webp`,
          alt: 'Traditional eagle hunting demonstration in Kyrgyzstan',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Horse riding on the alpine steppe', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/Kyrgyzstan-tour-7.png`,
          alt: 'Horses on Kyrgyz alpine grassland',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'The hot springs of Altyn Arashan', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/Kyrgyzstan-scaled.webp`,
          alt: 'Mountain valley at Altyn Arashan',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Sharing meals with local families', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/Kyrgyzstan-Local-Woman-in-front-of-yurt.webp`,
          alt: 'Traditional hospitality in Kyrgyzstan',
          width: 800,
          height: 1100,
        },
      },
    ],
    included: [
      'Accommodation as described',
      'Activities as mentioned',
      'Entry fees for the mentioned sites',
      'Ground transport',
      'Local guide',
      'Meals according to the daily description',
      'Omaya Travel representative',
    ],
    notIncluded: ['Flights', 'Insurance', 'Meals not mentioned', 'Single room supplement'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bishkek',
        description:
          'Arrive in Bishkek, meet the guide for a welcome briefing and orientation, enjoy free time, then join an evening dinner and traditional folklore concert.',
        accommodation: '3* hotel in Bishkek (TWIN/DBL room)',
        meals: ['dinner'],
      },
      {
        day: 2,
        title: 'Ala Archa & Bishkek City Tour',
        description:
          'Visit Ala Archa National Park for mountain scenery and glacial landscapes, then return to Bishkek for a city tour covering markets, monuments and Soviet-era boulevards.',
        accommodation: '3* hotel in Bishkek (TWIN/DBL room)',
        meals: ['breakfast', 'lunch'],
      },
      {
        day: 3,
        title: 'Bishkek - Kochkor - Song Kul',
        description:
          'Travel south through Kochkor and climb toward high-altitude Song Kul Lake, where nomadic summer camps spread across the surrounding grasslands.',
        accommodation: 'Yurt camp (up to 4 people per yurt)',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 4,
        title: 'Full Day at Song Kul',
        description:
          'Spend the day around Song Kul, including a two-hour horse ride and free time for relaxing or optional hiking along the lakeshore.',
        accommodation: 'Yurt camp (up to 4 people per yurt)',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 5,
        title: 'Song Kul - Kochkor - Bokonbaevo',
        description:
          'Descend from Song Kul, see a traditional yurt-building demonstration, share lunch in a Kochkor homestay and continue along Issyk-Kul toward Bokonbaevo.',
        accommodation: 'Yurt camp (up to 4 people per yurt)',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 6,
        title: 'Eagle Hunting - Skazka Canyon - Barskoon - Karakol',
        description:
          'Experience an eagle-hunting demonstration, visit Skazka Canyon and Barskoon Valley, then continue to Karakol for a city tour and local meals.',
        accommodation: 'Local hotel/guesthouse in Karakol (DBL/TWIN room)',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 7,
        title: 'Altyn Arashan Hot Springs',
        description:
          'Travel into the Altyn Arashan valley for an overnight mountain stay and time at its natural thermal springs.',
        accommodation: 'Local guesthouse/homestay',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 8,
        title: 'Altyn Arashan - Cholpon-Ata',
        description:
          'Descend to the northern shore of Issyk-Kul and visit Cholpon-Ata, including the open-air Petroglyphs Museum and time by the lake.',
        accommodation: null,
        meals: ['lunch', 'dinner'],
      },
      {
        day: 9,
        title: 'Cholpon-Ata - Burana - Bishkek',
        description:
          'Return toward Bishkek via Burana Tower, with an opportunity to experience Kok Boru and share lunch in a homestay before the final overnight in Bishkek.',
        accommodation: null,
        meals: ['lunch'],
      },
      {
        day: 10,
        title: 'Departure from Bishkek',
        description: 'Transfer to the airport for the departure flight.',
        accommodation: null,
        meals: ['breakfast'],
      },
    ],
    gallery: [
      'Kyrgyzstan-tour-.png',
      'Kyrgyzstan-tour-1.png',
      'Kyrgyzstan-tour-3.png',
      'Kyrgyzstan-tour-4.png',
      'Kyrgyzstan-tour-5.png',
      'Kyrgyzstan-tour-7.png',
      'Kyrgyzstan-tour-8.webp',
      'Kyrgyzstan-tour-13.webp',
      'Kyrgyzstan-scaled.webp',
      'Kyrgyzstan-Local-Woman-in-front-of-yurt.webp',
    ].map((fileName, index) => ({
      src: `${KYRGYZSTAN_ASSET_BASE}/${fileName}`,
      alt: `Kyrgyzstan tour gallery image ${index + 1}`,
      width: 800,
      height: 1100,
    })),
    enquiry: {
      enabled: true,
      cta: 'Check Availability',
    },
    seo: {
      title: 'Kyrgyzstan Discovery Tour | Omaya Travel',
      description:
        'Ten-day Kyrgyzstan discovery tour featuring Bishkek, Song Kul, Issyk-Kul, yurt camps, eagle hunting, horse riding and Altyn Arashan.',
    },
    source: {
      legacyUrl: 'https://omayatravel.com/tour-item/kyrgyzstan-tour/',
    },
  },
  {
    id: 'morocco-tour',
    slug: 'morocco-tour',
    title: 'Morocco – Blue Cities & Golden Dunes',
    destination: {
      country: 'Morocco',
      region: 'Casablanca, Chefchaouen, Fes, Merzouga, Marrakech',
      startLocation: 'Casablanca',
      endLocation: 'Marrakech',
    },
    category: 'Classic Tours',
    duration: {
      days: 12,
      nights: 11,
    },
    price: {
      amount: 2300,
      currency: 'EUR',
      unit: 'person',
    },
    groupSize: {
      min: 6,
      max: 12,
    },
    departures: ['2026-10-01', '2027-04-08'],
    heroImage: {
      src: MOROCCO_PLACEHOLDER_IMAGE,
      alt: 'Traditional Moroccan architecture and decorative tilework',
      width: 1920,
      height: 900,
    },
    introduction: [
      "A twelve-day journey from Casablanca to Marrakech through Morocco's Atlantic coast, blue mountain towns, imperial cities, Roman ruins, desert landscapes and High Atlas scenery.",
      'The route includes Chefchaouen, Fes, the Erg Chebbi dunes, Todra Gorge, the Dades Valley, Aït Ben Haddou and Marrakech.',
    ],
    highlights: [
      {
        title: {
          text: "Wander through Chefchaouen's blue-washed alleyways",
          linkText: '',
          link: '',
        },
        image: {
          src: MOROCCO_PLACEHOLDER_IMAGE,
          alt: 'Blue alleyway in Chefchaouen',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Visit the Hassan II Mosque beside the Atlantic', linkText: '', link: '' },
        image: {
          src: MOROCCO_PLACEHOLDER_IMAGE,
          alt: 'Hassan II Mosque in Casablanca',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Walk through the Roman ruins of Volubilis', linkText: '', link: '' },
        image: {
          src: MOROCCO_PLACEHOLDER_IMAGE,
          alt: 'Roman ruins at Volubilis',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Explore medieval Fes el Bali', linkText: '', link: '' },
        image: {
          src: MOROCCO_PLACEHOLDER_IMAGE,
          alt: 'Historic medina and tanneries in Fes',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Watch sunrise over Aït Ben Haddou', linkText: '', link: '' },
        image: {
          src: MOROCCO_PLACEHOLDER_IMAGE,
          alt: 'Aït Ben Haddou at sunrise',
          width: 800,
          height: 1100,
        },
      },
    ],
    included: [
      'Accommodation as described',
      'Activities as mentioned',
      'Ground transport',
      'Local guide',
      'Meals according to the daily description',
      'Omaya Travel representative',
    ],
    notIncluded: [
      'Entry fees for the mentioned sites',
      'Flights',
      'Insurance',
      'Meals not mentioned',
      'Single room supplement',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Casablanca',
        description:
          'Arrive at Mohammed V International Airport, coordinate with the group, visit Hassan II Mosque and walk along the Atlantic Corniche.',
        accommodation: 'Traditional riad in the heart of the city',
        meals: ['breakfast'],
      },
      {
        day: 2,
        title: 'Casablanca - Rabat - Chefchaouen',
        description:
          "Visit Rabat's Hassan Tower and Kasbah of the Udayas, then drive through the Rif Mountains to Chefchaouen.",
        accommodation: 'Hotel in the heart of the blue city',
        meals: ['breakfast'],
      },
      {
        day: 3,
        title: 'Chefchaouen',
        description:
          "Take a guided walk through Chefchaouen's blue medina, then use the afternoon for independent exploration, Ras El-Ma or an optional hike toward the Spanish Mosque.",
        accommodation: 'Hotel in the heart of the blue city',
        meals: ['breakfast'],
      },
      {
        day: 4,
        title: 'Chefchaouen - Fes',
        description:
          'Travel south via the Roman ruins of Volubilis and imperial Meknes before arriving in Fes.',
        accommodation: 'Traditional riad',
        meals: ['breakfast'],
      },
      {
        day: 5,
        title: 'Fes',
        description:
          'Explore Fes el Bali with a guide, including the Chouara Tanneries, artisan souks and the area around Al Quaraouiyine, then enjoy free time.',
        accommodation: 'Traditional riad',
        meals: ['breakfast'],
      },
      {
        day: 6,
        title: 'Fes - Merzouga',
        description:
          "Drive south through the Middle Atlas, stop near Azrou's cedar forest and continue toward Merzouga and the Erg Chebbi dunes for a sunset camel ride.",
        accommodation: 'Hotel in Merzouga',
        meals: ['breakfast'],
      },
      {
        day: 7,
        title: 'Merzouga',
        description:
          'Visit Khamlia for a Gnawa music experience, then return to the dunes for free time and another night in the Sahara.',
        accommodation: 'Desert camp',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 8,
        title: 'Merzouga - Boumalne Dades',
        description:
          'Leave the Sahara and visit Todra Gorge before continuing through the Dades Valley and its unusual sandstone formations.',
        accommodation: 'Traditional riad',
        meals: ['breakfast'],
      },
      {
        day: 9,
        title: 'Dades Valley - Aït Ben Haddou',
        description:
          'Travel west through kasbah country, visit Skoura, the Tawabil cooperative and Atlas Film Studios, then stay at Aït Ben Haddou.',
        accommodation: 'Traditional riad',
        meals: ['breakfast'],
      },
      {
        day: 10,
        title: 'Aït Ben Haddou - Marrakech',
        description:
          "See Aït Ben Haddou around sunrise, then cross the High Atlas Mountains via Tizi n'Tichka before descending into Marrakech.",
        accommodation: 'Traditional riad',
        meals: ['breakfast'],
      },
      {
        day: 11,
        title: 'Marrakech',
        description:
          "Visit Jardin Majorelle and Le Jardin Secret, have lunch at the Amal Women's Training Center, then spend the afternoon exploring independently.",
        accommodation: 'Traditional riad',
        meals: ['breakfast'],
      },
      {
        day: 12,
        title: 'Departure',
        description:
          'Free time in Marrakech before transfers to Marrakech Menara Airport according to individual flight times.',
        accommodation: null,
        meals: ['breakfast'],
      },
    ],
    gallery: [],
    enquiry: {
      enabled: true,
      cta: 'Check Availability',
    },
    seo: {
      title: 'Morocco – Blue Cities & Golden Dunes | Omaya Travel',
      description:
        'Twelve-day Morocco tour from Casablanca to Marrakech through Chefchaouen, Fes, Erg Chebbi, Todra Gorge, Aït Ben Haddou and the High Atlas.',
    },
    source: {
      legacyUrl: 'https://omayatravel.com/tour-item/morocco-tour/',
    },
  },
  {
    id: 'women-only-tour-bulgaria',
    slug: 'women-only-tour-bulgaria',
    title: 'Bulgaria Beyond the Ordinary | Women Only',
    destination: {
      country: 'Bulgaria',
      region: 'Sofia, Rila, Plovdiv, Rhodope Mountains',
      startLocation: 'Sofia',
      endLocation: 'Sofia',
    },
    category: 'Women Only',
    duration: {
      days: 8,
      nights: 7,
    },
    price: {
      amount: 1050,
      currency: 'EUR',
      unit: 'person',
    },
    groupSize: {
      min: 6,
      max: 12,
    },
    departures: ['2027-09-10', '2027-09-24'],
    heroImage: {
      src: `${BULGARIA_WOMEN_ASSET_BASE}/bulgaria-women-tour-bgr.webp`,
      alt: 'Women travelling through the mountains and villages of Bulgaria',
      width: 1920,
      height: 900,
    },
    introduction: [
      'This women-only tour Bulgaria does not announce itself — it reveals itself slowly, layer by layer. A monastery hidden in a mountain valley. A tiny town carved into sandstone cliffs where the wine has been flowing since before memory. A village in the Rhodopes where an ancient bridal ritual is still performed with the same devotion as a thousand years ago. A brutalist monument abandoned on a mountaintop, swallowed by clouds and silence.',
      'This 8-day journey moves through a Bulgaria that most travellers never find – not just the landmarks, but the moments between them. The lunch shared in a family home, the guesthouse at the end of a mountain road, the glass of wine poured by the person who grew the grapes. Every day uncovers something that stays with you long after the road ends.',
    ],
    highlights: [
      {
        title: { text: 'Visit Rila Monastery', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/Rila-Monasterry-Bulgaria-2.webp`,
          alt: 'Rila Monastery in Bulgaria',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Explore Plovdiv by night', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/Plovdiv-at-night-12.webp`,
          alt: 'Plovdiv old town at night',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Meet women in rural Bulgaria', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/Rural-Bulgaria-7.webp`,
          alt: 'Rural Bulgaria cultural encounter',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Discover caves and monuments', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/Devetashka-Cave-8.webp`,
          alt: 'Devetashka Cave in Bulgaria',
          width: 800,
          height: 1100,
        },
      },
    ],
    included: [
      'Accommodation as described',
      'Entry fees for the mentioned sites',
      'Ground transport',
      'Local guide',
      'Meals according to the daily description',
      'Omaya Travel representative',
    ],
    notIncluded: [
      'Activities as mentioned',
      'Flights',
      'Insurance',
      'Meals not mentioned',
      'Single room supplement',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Sofia',
        description:
          "Your journey begins in Sofia, Bulgaria's layered and energetic capital. Upon arrival, your driver will meet you at the airport for a smooth transfer to your hotel. The rest of the day is yours - settle in, take your first steps into the city, and let the atmosphere find you.",
        accommodation: '3* hotel in Sofia',
        meals: [],
      },
      {
        day: 2,
        title: 'Sofia City Tour & Surroundings',
        description:
          'Today you explore the heart of Sofia, built on the ruins of the ancient Roman city of Serdica. Churches, mosques, and Roman remains stand side by side in the city centre, telling a story of civilisations layered one upon the other. The afternoon takes you beyond the city to the tranquil shores of Pancharevo Lake for a relaxed lunch with scenic views, followed by a visit to the curious Bells Monument — a relic of the communist era where bells gifted by children from around the world create a quietly powerful space. The evening is yours to explore freely.',
        accommodation: '3* hotel in Sofia',
        meals: ['breakfast'],
      },
      {
        day: 3,
        title: 'Sofia - Rila Monastery - Melnik',
        description:
          "An early departure takes you south into the Rila Mountains, home to Bulgaria's most sacred landmark - Rila Monastery. Founded in the 10th century and nestled in a deep forested valley, the monastery stuns with its vivid frescoes, striped stone arches, and mountain stillness. The afternoon continues to Melnik, Bulgaria's smallest town, dramatically framed by sandstone pyramids and famous for centuries of winemaking. A visit to a local winery for a tasting rounds off the day before you settle into this singular little town for the night.",
        accommodation: 'Local boutique hotel/guesthouse',
        meals: ['breakfast', 'wine tasting'],
      },
      {
        day: 4,
        title: 'Melnik - Ribnovo - Leshten',
        description:
          "Today the journey takes you deeper into the Rhodope Mountains - a landscape of rolling forests, ancient legends, and warm village hospitality. In Ribnovo, you are welcomed into a local home for a traditional lunch, before witnessing a demonstration of one of the Balkans' most extraordinary customs: the bridal face painting ritual, an intricate art found only in this region, where a bride's face is decorated in white and coloured patterns as part of a centuries-old wedding tradition. The afternoon drifts through a handful of picturesque mountain villages before the evening settles into a cosy guesthouse in Leshten or Kovachevitsa, where the true warmth of the Rhodopes comes to life.",
        accommodation: 'Local boutique hotel/guesthouse',
        meals: ['breakfast', 'lunch by local family'],
      },
      {
        day: 5,
        title: 'Leshten - Plovdiv',
        description:
          "A scenic four-hour transfer carries you from the quiet mountain villages to Plovdiv - one of Europe's oldest continuously inhabited cities and a former European Capital of Culture. Your guided tour winds through the Old Town's cobblestone streets, past beautifully preserved 19th-century merchant houses with their colourful facades and ornate interiors, and down to the ancient Roman Theatre - one of the best preserved in the world and still used for performances today. The evening is yours to explore at your own pace.",
        accommodation: '3* hotel in Plovdiv',
        meals: ['breakfast'],
      },
      {
        day: 6,
        title: 'Plovdiv - Veliko Tarnovo',
        description:
          "Leaving Plovdiv, the day unfolds through some of Bulgaria's most historically charged landscapes. A visit to Asen's Fortress offers dramatic views over the Rhodope foothills, followed by a stop at the Kazanluk Thracian Tomb or the Damascena Rose Complex — a fragrant window into Bulgaria's famed rose-oil heritage. The day closes with a striking detour to Buzludzha, the abandoned communist monument that crowns a mountain peak like a vision from another world, before arriving in Veliko Tarnovo for the night.",
        accommodation: 'Local boutique hotel/guesthouse',
        meals: ['breakfast'],
      },
      {
        day: 7,
        title: 'Veliko Tarnovo - Krushuna Waterfalls - Devetashka Cave - Sofia',
        description:
          "The final full day begins with a tour of Veliko Tarnovo, the medieval capital of the Second Bulgarian Empire, dramatically set above the winding Yantra River. Tsarevets Fortress dominates the hilltop - once the seat of Bulgarian rulers, today a powerful symbol of the country's golden age. The old town's cobbled lanes are still lined with traditional craft workshops that have changed little over centuries. The afternoon takes you to Krushuna Waterfalls, where wooden pathways wind past turquoise pools and limestone cascades, and then to the vast Devetashka Cave, where natural skylights pierce the roof and fill the interior with cathedral-like light. By evening, the road leads back to Sofia.",
        accommodation: '3* hotel in Sofia',
        meals: ['breakfast'],
      },
      {
        day: 8,
        title: 'Departure',
        description:
          'A transfer to Sofia Airport according to your flight schedule brings this journey through Bulgaria to a close.',
        accommodation: null,
        meals: ['breakfast'],
      },
    ],
    gallery: [
      'Rila-Monasterry-Bulgaria-2.webp',
      'Buzludzha-Monument-3.webp',
      'Sofia-City-Tour-Bulgaria-4.webp',
      'Plovdiv-Roman-Theater-5.webp',
      'Veliko-Tarnovo-Bulgaria-6.webp',
      'Rural-Bulgaria-7.webp',
      'Devetashka-Cave-8.webp',
      'Rural-Bulgaria-9.webp',
      'Gelina-10.webp',
      'Rila-Monastery-Frescoes-11.webp',
      'Plovdiv-at-night-12.webp',
      'Gelina-Ritual-in-Ribnovo-1.webp',
    ].map((fileName, index) => ({
      src: `${BULGARIA_WOMEN_ASSET_BASE}/gallery/${fileName}`,
      alt: `Bulgaria women-only tour gallery image ${index + 1}`,
      width: 800,
      height: 1100,
    })),
    faq: {
      heading: 'Your Journey, Simplified.',
      intro:
        'Got questions about your upcoming adventure? Our FAQ section covers the essentials: visa requirements, accommodation, health, safety, packing advice and cultural tips. Find the quick answers you need to get your bags packed and your itinerary set.',
      items: [
        {
          question: 'What makes this a women-only tour, and who will be leading the group?',
          answer: [
            "This tour is designed exclusively for women, creating a relaxed, supportive atmosphere where you can travel freely and connect with like-minded women along the way. You'll be guided by a local female guide and accompanied by a woman from the Omaya Travel team throughout the trip, so female support is with you at every stage.",
            "The one exception is transport: local drivers, who are contracted separately for ground transport, may be men. They're experienced, vetted professionals, but are not part of the core guiding team you'll be spending your days with.",
            'Not sure if this is the right fit for you? Our team is happy to talk it through and help you find the best tour for your trip.',
          ],
        },
        {
          question: 'Can I bring my son/partner/male family member?',
          answer: [
            "This tour is reserved exclusively for women, so male travellers — including partners or family members — aren't able to join, regardless of age or relationship to the traveller.",
          ],
        },
        {
          question: 'Is this tour suitable for solo women travellers?',
          answer: [
            "Yes — many women join solo. You'll be part of a small, supportive all-female group, with the option to share a room with another traveller (matched by Omaya Travel) or book a private room with the single supplement.",
          ],
        },
        {
          question: 'Is Bulgaria safe to travel to?',
          answer: [
            'Safety is rarely a concern in Bulgaria, even off the beaten path in villages and mountain areas. What makes the experience even smoother is having a Bulgarian local guide along the whole way, as you do on this tour — someone who knows the country well and can help you navigate quieter stops like the Rhodope villages with ease.',
          ],
        },
        {
          question: 'What is the best time of year to visit Bulgaria?',
          answer: [
            'Bulgaria is generally best visited in late spring (May–June) or early autumn (September), when temperatures are mild and the countryside is at its greenest without peak summer crowds or heat.',
          ],
        },
        {
          question: 'Do I need a visa to visit Bulgaria?',
          answer: [
            'Bulgaria is a full member of the Schengen Area, so travellers from the EU, UK, US, Canada, and around 59 other visa-exempt countries can enter for up to 90 days within any 180-day period without a visa. From late 2026, visa-exempt travellers will also need to apply for ETIAS authorisation online before departure, a quick process similar to the US ESTA. Travellers from countries without a visa-free agreement will need to apply for a Schengen visa in advance.',
            'Always confirm current requirements for your specific nationality with the Bulgarian embassy or consulate before booking.',
          ],
        },
        {
          question: 'What currency does Bulgaria use?',
          answer: [
            "Bulgaria adopted the euro as its official currency on 1 January 2026, replacing the Bulgarian lev, which stopped being legal tender on 1 February 2026. This means travellers no longer need to exchange currency separately for Bulgaria if they're already carrying euros — cards are widely accepted in cities, though smaller villages and family-run guesthouses on this tour may prefer cash.",
          ],
        },
        {
          question: 'What should I pack for a trip to Bulgaria?',
          answer: [
            'Layering is key, since this route moves between city streets, monastery grounds, mountain villages, and a cave, often within the same day — comfortable walking shoes, a light jacket or fleece for cooler mountain evenings, and a scarf or modest covering for visiting Rila Monastery and local churches are all worth packing. A reusable water bottle and a light rain layer are useful for the May departure especially.',
          ],
        },
        {
          question: 'What language is the tour conducted in?',
          answer: [
            'The tour is conducted in English, led by a local female guide fluent in English throughout the itinerary.',
          ],
        },
        {
          question: 'How big is the group?',
          answer: ['Group size is 6 to 12 people.'],
        },
        {
          question: 'What type of accommodation is used on this tour?',
          answer: [
            'Accommodation is a mix of 3-star hotels in cities (Sofia, Plovdiv) and local boutique hotels or guesthouses in smaller towns and villages (Melnik, Leshten or Kovachevitsa, Veliko Tarnovo).',
          ],
        },
        {
          question: 'What kind of walking should I expect on this trip?',
          answer: [
            "There's no need for a high fitness level — the tour involves moderate walking most days, over surfaces like cobblestones in Plovdiv and Veliko Tarnovo, wooden paths at Krushuna Waterfalls, and uneven ground at Devetashka Cave and Buzludzha. Comfortable walking shoes are recommended to make the most of it.",
          ],
        },
        {
          question: 'Can dietary restrictions and allergies be accommodated?',
          answer: [
            "Yes — let us know within 7 days of booking confirmation and we'll do our best to accommodate dietary restrictions and allergies, including for the home-hosted lunch in Ribnovo. In more remote areas we can't guarantee every request, so travellers should confirm meals and drinks are safe for them, particularly in smaller villages with limited options.",
          ],
        },
        {
          question: 'Is there a way to skip the single supplement as a solo traveller?',
          answer: [
            "Yes — solo travellers pay the single supplement at the time of booking, but it's refunded if Omaya Travel is able to pair them with another woman on the tour as a roommate. If no match can be found, the supplement stays in place and the traveller keeps their own room.",
          ],
        },
        {
          question: "What happens if the minimum group size isn't reached?",
          answer: [
            "If the minimum number of travellers isn't met, Omaya Travel gives at least 45 days' notice before departure and offers two options: proceed with the tour at a re-costed price, or receive a full refund or credit.",
          ],
        },
      ],
    },
    enquiry: {
      enabled: true,
      cta: 'Check Availability',
    },
    seo: {
      title: 'Bulgaria Beyond the Ordinary | Women Only | Omaya Travel',
      description:
        'Women-only small-group tour through Bulgaria with Sofia, Rila Monastery, Plovdiv, Rhodope villages and local cultural encounters.',
    },
    source: {
      legacyUrl: 'https://omayatravel.com/tour-item/women-only-tour-bulgaria/',
    },
  },
  {
    id: 'women-only-tour-kyrgyzstan',
    slug: 'women-only-tour-kyrgyzstan',
    title: 'Kyrgyzstan Discovery Tour | Women Only',
    destination: {
      country: 'Kyrgyzstan',
      region: 'Bishkek, Issyk-Kul, Song Kul',
      startLocation: 'Bishkek',
      endLocation: 'Bishkek',
    },
    category: 'Women Only',
    duration: {
      days: 10,
      nights: 9,
    },
    price: {
      amount: 1320,
      currency: 'EUR',
      unit: 'person',
    },
    groupSize: {
      min: 6,
      max: 12,
    },
    departures: ['2027-08-13'],
    heroImage: {
      src: `${KYRGYZSTAN_WOMEN_ASSET_BASE}/Kyrgystan_women_only_tour-bgr.webp`,
      alt: 'Women-only tour group in Kyrgyzstan mountain landscape',
      width: 1920,
      height: 900,
    },
    introduction: [
      'This women-only tour Kyrgyzstan invites a small group of women into a landscape where nomadic life is not a memory — it is the present. Its people still move with the seasons, still build their homes by hand, still trust the eagle and the horse as partners in daily life.',
      'This 10-day journey takes you from Bishkek’s Soviet-tinged streets deep into landscapes that feel like they belong to another century – Song Kul’s high pastures, Skazka’s red canyons, Altyn Arashan’s hidden hot springs. Every day brings a different face of this extraordinary country.',
      'But what stays with you longest will not be the scenery. It will be the evenings in a yurt camp, the bread in a homestay kitchen, the music drifting across a still lake at dusk. Kyrgyzstan does not perform its culture for tourists – it simply lives it, and for nine days, so will you.',
    ],
    highlights: [
      {
        title: {
          text: 'Sleeping in a at ',
          linkText: 'Song Kul Lake',
          link: '/how-to-visit-song-kul-lake-in-kyrgyzstan/',
        },
        image: {
          src: `${KYRGYZSTAN_WOMEN_ASSET_BASE}/thumbnails/Kyrgyzstan-tour-1-thumbnail.webp`,
          alt: 'Traditional yurt camp in Kyrgyzstan',
          width: 150,
          height: 'auto',
        },
      },
      {
        title: { text: 'Eagle hunting demonstration', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_WOMEN_ASSET_BASE}/thumbnails/Kyrgyzstan-tour-2-thumbnail.webp`,
          alt: 'Traditional eagle hunting demonstration in Kyrgyzstan',
          width: 150,
          height: 'auto',
        },
      },
      {
        title: { text: 'Horse riding on the alpine steppe', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_WOMEN_ASSET_BASE}/thumbnails/Kyrgyzstan-tour-3-thumbnail.webp`,
          alt: 'Horses on Kyrgyz alpine grassland',
          width: 150,
          height: 'auto',
        },
      },
      {
        title: {
          text: 'The hot springs of ',
          linkText: 'Altyn Arashan',
          link: 'https://en.wikipedia.org/wiki/Altyn_Arashan',
        },
        image: {
          src: `${KYRGYZSTAN_WOMEN_ASSET_BASE}/thumbnails/Kyrgyzstan-tour-4-thumbnail.webp`,
          alt: 'Mountain valley at Altyn Arashan in Kyrgyzstan',
          width: 150,
          height: 'auto',
        },
      },
      {
        title: { text: 'Sharing meals with local families', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_WOMEN_ASSET_BASE}/thumbnails/Kyrgyzstan-tour-5-thumbnail.webp`,
          alt: 'Mountain pass in Kyrgyzstan',
          width: 150,
          height: 'auto',
        },
      },
    ],
    departureReturn: {
      departure: 'Bishkek, Kyrgyzstan',
      return: 'Bishkek, Kyrgyzstan',
    },
    included: [
      'Accommodation as described',
      'Activities as mentioned',
      'Entry fees for the mentioned sites',
      'Insurance',
      'Local guide',
      'Meals according to the daily description',
      'Omaya Travel representative',
    ],
    notIncluded: ['Flights', 'Ground transport', 'Meals not mentioned', 'Single room supplement'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bishkek',
        description:
          "Your journey begins in Bishkek, Kyrgyzstan's relaxed and leafy capital. After arrival, your guide will meet you for a welcome briefing and orientation to set the tone for the days ahead. Enjoy some free time to get to know the capital of Kyrgyzstan. In the evening - dinner and a traditional folklore concert that offer your first real taste of Kyrgyz culture.",
        accommodation: '3* hotel in Bishkek (TWIN/DBL room)',
        meals: ['dinner'],
      },
      {
        day: 2,
        title: 'Ala Archa & Bishkek City Tour',
        description:
          'A full day exploring both the natural and urban heart of the capital region. The morning takes you to Ala Archa National Park, a stunning gorge of glacial rivers and pine forests just an hour from the city, before returning to Bishkek for an afternoon city tour through its wide Soviet-era boulevards, markets, and monuments.',
        accommodation: '3* hotel in Bishkek (TWIN/DBL room)',
        meals: ['breakfast', 'lunch'],
      },
      {
        day: 3,
        title: 'Bishkek - Kochkor - Song Kul',
        description:
          'Today the landscape opens up as you leave the city behind and head south toward the highlands. A stop in the small town of Kochkor for lunch gives you a first glimpse of rural Kyrgyz life before the road climbs steeply to Song Kul - a vast alpine lake sitting at over 3,000 metres, ringed by open grassland and nomadic summer camps. Dinner and your first night in a traditional yurt camp await.',
        accommodation: 'accommodation in yurt camp (up to 4 people per yurt)',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 4,
        title: 'Full Day at Song Kul',
        description:
          'There is nowhere to be today except here. The morning begins with a two-hour horse ride across the lakeside steppe, the water glittering below and the mountains above. The afternoon is yours - rest by the lake, wander the surrounding hills, or join an optional hike along the shore. All meals are taken at the yurt camp, where the food is simple, fresh, and deeply satisfying.',
        accommodation: 'accommodation in yurt camp (up to 4 people per yurt)',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 5,
        title: 'Song Kul - Kochkor - Bokonbaevo',
        description:
          "As you descend from Song Kul, the day brings one of the journey's most hands-on experiences - a yurt building demonstration, where you'll learn how these remarkable portable homes are constructed from the ground up. Lunch is shared in a local homestay in Kochkor before continuing south along the shores of Issyk-Kul to the village of Bokonbaevo, where dinner awaits at your yurt camp.",
        accommodation: 'accommodation in yurt camp (up to 4 people per yurt)',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 6,
        title: 'Eagle Hunting - Skazka Canyon - Barskoon - Karakol',
        description:
          "A day packed with some of the journey's most striking moments. The morning opens with an eagle hunting show - a rare and humbling encounter with one of Central Asia's oldest living traditions. From there, the road leads to Skazka Canyon, where wind-carved red and ochre formations rise dramatically from the lakeshore, and on through the lush Barskoon Valley before arriving in Karakol, the east's most characterful town, for a city tour, homestay lunch, and a restaurant dinner.",
        accommodation: 'Local hotel/guesthouse in Karakol (DBL/TWIN room)',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 7,
        title: 'Altyn Arashan Hot Springs',
        description:
          "An overnight escape into one of Kyrgyzstan's most peaceful corners. The trail to Altyn Arashan winds up through forest and river valley to a remote guesthouse where natural hot springs bubble up from the earth. After the days of riding and walking, soaking in the thermal waters surrounded by mountain silence feels like a well-earned reward.",
        accommodation: 'accommodation in a local guesthouse/homestay',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 8,
        title: 'Altyn Arashan - Cholpon-Ata',
        description:
          "Descending from the mountains, today you arrive on the northern shore of Issyk-Kul - one of the largest alpine lakes in the world. Cholpon-Ata is the shore's main resort town, and the afternoon is spent between its beach and the remarkable open-air Petroglyphs Museum, where thousands of ancient rock carvings tell the stories of the people who lived here long before the yurts. Lunch and dinner included.",
        accommodation: null,
        meals: [],
      },
      {
        day: 9,
        title: 'Cholpon-Ata - Burana - Bishkek',
        description:
          "The final day brings two last encounters with Kyrgyzstan's layered history and living culture. A stop at the Burana Tower - a solitary 11th-century minaret rising from the Chuy Valley - is followed by the chance to witness Kok Boru, the ancient and thrilling horseback game that remains a cornerstone of Kyrgyz identity. Lunch is shared in a homestay before the road leads back to Bishkek for our last overnight in Bishkek",
        accommodation: null,
        meals: [],
      },
      {
        day: 10,
        title: 'Departure from Bishkek',
        description: 'Transfer to the airport for the departure flight.',
        accommodation: null,
        meals: ['breakfast'],
      },
    ],
    gallery: Array.from({ length: 12 }, (_, index) => ({
      src: `${KYRGYZSTAN_WOMEN_ASSET_BASE}/gallery/Kyrgyzstan-tour-1.${index + 1}.webp`,
      alt: `Kyrgyzstan women-only tour gallery image ${index + 1}`,
      width: 800,
      height: 1100,
    })),
    enquiry: {
      enabled: true,
      cta: 'Check Availability',
    },
    seo: {
      title: 'Kyrgyzstan Discovery Tour | Women Only | Omaya Travel',
      description:
        'Women-only small-group tour through Kyrgyzstan with yurt stays, Song Kul Lake, mountain passes and local cultural encounters.',
    },
    source: {
      legacyUrl: 'https://omayatravel.com/tour-item/women-only-tour-kyrgyzstan/',
    },
  },
];

export function findTourBySlug(slug: string | null | undefined): TourDetailContent | undefined {
  return TOUR_DETAIL_CONTENT.find((tour) => tour.slug === slug);
}
