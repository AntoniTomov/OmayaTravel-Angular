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

export interface TourLinkedParagraph {
  text: string;
  linkText: string;
  link: string;
  trailingText: string;
}

export type TourIntroductionParagraph = string | TourLinkedParagraph;

export interface TourHighlight {
  title: TourLinkedTitle;
  image: TourImage;
  icon?: string;
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
  introduction: readonly TourIntroductionParagraph[];
  highlights: readonly TourHighlight[];
  included: readonly string[];
  notIncluded: readonly string[];
  itinerary: readonly TourItineraryDay[];
  gallery: readonly TourImage[];
  gallerySubtitle?: string;
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
  departure: string;
  return: string;
}

const ALGERIA_ASSET_BASE = '/assets/images/destinations/Algiria';
const BULGARIA_ASSET_BASE = '/assets/images/destinations/Bulgaria';
const BULGARIA_WOMEN_ASSET_BASE = '/assets/images/women-tours/beautiful-bulgaria-women';
const KYRGYZSTAN_ASSET_BASE = '/assets/images/destinations/Kyrgystan';
const KYRGYZSTAN_WOMEN_ASSET_BASE = '/assets/images/women-tours/Kyrgystan-women';
const MOROCCO_ASSET_BASE = '/assets/images/destinations/Marocco';
const AMELIA_MOROCCO_ASSET_BASE = '/assets/images/amelia/tours/morocco';
const MOROCCO_SOLO_ASSET_BASE = '/assets/images/solo-travellers/Morocco';
const MOROCCO_WOMEN_ASSET_BASE = '/assets/images/women-tours/Morocco';
const MOROCCO_WOMEN_ONLY_TOUR_SLUG = 'tour-item-morocco-women-only-tour';
const MOROCCO_SOLO_TRAVELLERS_TOUR_SLUG = 'tour-item-morocco-solo-travellers-tour';

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
    days: 9,
    nights: 8,
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
    'Join us on an expedition to one of the Sahara’s most dramatic corners – sleeping in the dunes, walking among Neolithic rock art, and sharing tea with Tuareg nomads who have called this wilderness home for generations. The Tadrart is a landscape of extremes: towering red dunes that glow ember-red at sunrise, vast black sand plains, and canyon walls etched with paintings made long before recorded history. Out here, the silence is broken only by the wind – and at night, a sky so dense with stars it feels close enough to touch. This is the Sahara as it has always been, and rarely is seen.',
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
      title: 'Arrival in Algiers. Meet the group and take a domestic flight to Djanet',
      description:
        'After making your own way to Algiers, you will meet the rest of the group and your tour leader at the airport before boarding the flight south to Djanet. The landscape below shifts from city to desert long before you land - your first hint of what lies ahead. Arriving in the evening, you are met by your local Tuareg team and transferred to your hotel for the night.',
      accommodation: 'Local hotel in Djanet',
      meals: [],
    },
    {
      day: 2,
      title: 'Into the Tadrart - El Berdj',
      description:
        "This is the day the desert opens up. Driving south from Djanet into the Tadrart - the red sandstone massif that forms one of the Sahara's most dramatic landscapes - you make your first stops at ancient rock engravings etched into the stone by peoples who lived here thousands of years before the desert came. By afternoon you reach El Berdj, a place of extraordinary stillness and beauty. Camp is set as the sun drops behind the rocks, casting long shadows across the sand. Your first walk here, in the golden hour before dusk, is something you will not easily forget.",
      accommodation: 'Wild camping in the desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 3,
      title: 'El Berdj - Moul Naga',
      description:
        "The gorge of El Berdj leads you into a different world - one of towering dunes, their colours shifting from deep red to soft pink depending on where the light falls. Today is one of the journey's most visually rich days, moving between vast sandscapes and galleries of rock art left by the people of the Neolithic era. You will see beautifully preserved engravings line the rock faces and paintings of cattle - a 6,000-year-old record of a time when this land was green and alive. Camp tonight is at Moul Naga, surrounded by dunes that seem to belong to another planet entirely.",
      accommodation: 'Wild camping in the desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 4,
      title: 'Moul Naga - Tamzdiga - Tin Merzouga',
      description:
        'The adventure continues among the striking dunes of Erg Tin Merzouga, some reaching up to 600 metres high. Along the way, we will discover impressive engravings and sites featuring magnificent Neolithic rock paintings, including depictions of oxen.',
      accommodation: 'Wild camping in the desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 5,
      title: 'Tin Merzouga to Adjlati',
      description:
        "The erg Tin Merzouga is one of the Sahara's great spectacles. The dunes here are among the highest in Algeria - and the colours move through a full spectrum of red, pink, and amber as the day progresses. You cross the wadi of Indjaren, pausing at more rock paintings and engravings that have survived here in the dry air for millennia. By afternoon, you arrive at Adjlati, a camp set among black sand dunes - a geological curiosity and a striking contrast to the fiery reds of the morning. The evenings here have a particular quality: cooler air, a fire, tea, and a sky dense with stars.",
      accommodation: 'Wild camping in the desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 6,
      title: 'The Stone Forest - Adaik',
      description:
        "The route today passes through landscapes that feel like they belong to a geological fairy tale. A stop at Tini for lunch breaks the morning's drive, and nearby, the engravings of the Crying Cow - one of the Tadrart's most celebrated and moving rock art sites, dating to around 6000 BC - reward anyone who makes the short walk to find them. Camp tonight is in Adaik, the so-called Stone Forest: an otherworldly terrain of wind-eroded sandstone columns and arches rising from the desert floor, their shadows lengthening as the sun goes down. It is the kind of place that makes you feel very small, in the best possible way.",
      accommodation: 'Wild camping in the desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 7,
      title: 'Wadi Essendilene - Erg Admer',
      description:
        "Today brings one of the journey's most unexpected pleasures. Deep in the canyon of Essendilene, a hidden wadi shelters oleanders, tamarisks, and palm trees - a pocket of green life in the heart of the Sahara, fed by secret gueltas (natural rock pools) that persist long after the rains have gone. This is also where you may encounter a Tuareg nomad family who still live here, as their ancestors have for generations, moving with the seasons and the water. Camp is made in the Erg Admer, a sea of classic Saharan dunes where sunset and sunrise are among the finest you will see on the entire journey. The light here has been painted by photographers and described by travellers for a century - and still, nothing quite prepares you for it.",
      accommodation: 'Wild camping in the desert',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 8,
      title: 'Tikobawin Arch - Return to Djanet',
      description:
        "The final day in the desert saves some of its best for last. Tikobawin is one of the Tadrart's great natural arches - a monumental rock formation that frames the sky like a doorway into another world. Nearby, Neolithic tombs and rock paintings add a layer of human history to the drama of the landscape, and the mountains of Tilalin provide a majestic backdrop for a last lunch in the wilderness at Timghas. By late afternoon you are back in Djanet, showering off the sand and dust of six days in the desert. The evening brings a visit to the Tuareg market - one of the most authentic in the region - followed by dinner at the hotel. A fitting close to a journey that rarely slows down long enough to feel ordinary.",
      accommodation: 'Local hotel in Djanet',
      meals: ['breakfast', 'lunch', 'dinner'],
    },
    {
      day: 9,
      title: 'Flight Djanet-Algiers. End of the tour',
      description:
        'Transfer to Djanet airport for your departure flight to Algiers. The tour ends upon arrival in Algiers.',
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
      src: `${BULGARIA_ASSET_BASE}/bulgaria-tour-bgr.webp`,
      alt: 'Monument in the Bulgarian mountains',
      width: 1920,
      height: 900,
    },
    introduction: [
      'Bulgaria does not announce itself – it reveals itself slowly, layer by layer. A monastery hidden in a mountain valley. A tiny town carved into sandstone cliffs where the wine has been flowing since before memory. A village in the Rhodopes where an ancient bridal ritual is still performed with the same devotion as a thousand years ago. A brutalist monument abandoned on a mountaintop, swallowed by clouds and silence.',
      'This 8-day Bulgaria tour moves through a country that most travellers never find – not just the landmarks, but the moments between them. The lunch shared in a family home, the guesthouse at the end of a mountain road, the glass of wine poured by the person who grew the grapes. Every day uncovers something that stays with you long after the road ends.',
    ],
    highlights: [
      {
        title: {
          text: 'Exploring',
          linkText: ' Rila Monastery',
          link: '/the-complete-visitor-guide-to-rila-monastery/',
        },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-01.webp`,
          alt: 'Frescoes at Rila Monastery',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Tasting wine in Melnik', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-02.webp`,
          alt: 'Vineyards and rural scenery near Melnik, Bulgaria',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'The Bridal Face Painting Ritual', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-03.webp`,
          alt: 'Traditional bridal face painting from the Rhodope region',
          width: 800,
          height: 1100,
        },
      },
      {
        title: {
          text: 'Walking ',
          linkText: "Plovdiv's Old Town",
          link: 'https://www.visitplovdiv.com/en',
        },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-04.webp`,
          alt: 'Historic Plovdiv, Bulgaria',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Exploring the forgotten Buzludzha', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-05.webp`,
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
        accommodation: 'local boutique hotel/guesthouse',
        meals: ['breakfast', 'wine tasting'],
      },
      {
        day: 4,
        title: 'Melnik - Ribnovo - Leshten',
        description:
          "Today the journey takes you deeper into the Rhodope Mountains - a landscape of rolling forests, ancient legends, and warm village hospitality. In Ribnovo, you are welcomed into a local home for a traditional lunch, before witnessing a demonstration of one of the Balkans' most extraordinary customs: the bridal face painting ritual, an intricate art found only in this region, where a bride's face is decorated in white and coloured patterns as part of a centuries-old wedding tradition. The afternoon drifts through a handful of picturesque mountain villages before the evening settles into a cosy guesthouse in Leshten or Kovachevitsa, where the true warmth of the Rhodopes comes to life.",
        accommodation: 'local boutique hotel/ guesthouse',
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
        accommodation: 'local boutique hotel/guesthouse',
        meals: ['breakfast'],
      },
      {
        day: 7,
        title: 'Veliko Tarnovo - Krushuna Waterfalls - Devetashka Cave - Sofia',
        description:
          "The final full day begins with a tour of Veliko Tarnovo, the medieval capital of the Second Bulgarian Empire, dramatically set above the winding Yantra River. Tsarevets Fortress dominates the hilltop - once the seat of Bulgarian rulers, today a powerful symbol of the country's golden age. The old town's cobbled lanes are still lined with traditional craft workshops that have changed little over centuries. The afternoon takes you to Krushuna Waterfalls, where wooden pathways wind past turquoise pools and limestone cascades, and then to the vast Devetashka Cave, where natural skylights pierce the roof and fill the interior with cathedral-like light. By evening, the road leads back to Sofia.",
        accommodation: '3*hotel in Sofia',
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
      src: `${BULGARIA_ASSET_BASE}/gallery/${fileName}`,
      alt: `Bulgaria tour gallery image ${index + 1}`,
      width: 800,
      height: 1100,
    })),
    gallerySubtitle: 'The Balkans at their most beautiful, most authentic, and most unexpected.',
    faq: {
      heading: 'Your Journey, Simplified.',
      intro:
        'Got questions about your upcoming adventure? Our FAQ section covers the essentials: visa requirements, accommodation, health, safety, packing advice and cultural tips. Find the quick answers you need to get your bags packed and your itinerary set.',
      items: [
        {
          question: 'What are classic tours, and what other tour types does Omaya offer?',
          answer: [
            "Our classic tours are open to everyone — solo travellers, couples, friends and families travelling together. They're the ideal choice if you want to share the experience with a mixed group of like-minded people from all walks of life, guided by our expert local teams at a pace that works for all.",
            'Alongside our classic tours, we also offer two specialist formats. Our solo traveller tours are designed specifically for those exploring on their own — with small groups, a carefully considered pace, and a natural setting for meeting fellow independent travellers. Our women-only tours create a warm, supportive environment for women who want to experience Bulgaria with the freedom and confidence that comes from travelling in an all-female group.',
            'Not sure which is right for you? Our team is happy to talk it through and help you find the best fit.',
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
            'Bulgaria is a full member of the Schengen Area, so travellers from the EU, UK, US, Canada, and around 59 other visa-exempt countries can enter for up to 90 days within any 180-day period without a visa. From late 2026, visa-exempt travellers will also need to apply for ETIAS authorisation online before departure, a quick process similar to the US ESTA. Travellers from countries without a visa-free agreement will need to apply for a Schengen visa in advance. Always confirm current requirements for your specific nationality with the Bulgarian embassy or consulate before booking.',
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
            'The tour is conducted in English, led by a local guide fluent in English throughout the itinerary.',
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
          question: 'How much walking is involved?',
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
            "Yes — solo travellers pay the single supplement at the time of booking, but it's refunded if Omaya Travel is able to pair them with a same-sex roommate for the trip. If no match can be found, the supplement stays in place and the traveller keeps their own room.",
          ],
        },
        {
          question: "What happens if the minimum group size isn't reached?",
          answer: [
            "If a tour doesn't reach its minimum group size, Omaya Travel will notify travellers at least 45 days before departure and offer either a re-costed trip at a new price or a full refund/credit.",
          ],
        },
      ],
    },
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
      src: `${KYRGYZSTAN_ASSET_BASE}/kyrgyzstan-tour-bgr.webp`,
      alt: 'Mountain landscape in Kyrgyzstan',
      width: 1920,
      height: 900,
    },
    introduction: [
      'Kyrgyzstan is one of the last places on earth where nomadic life is not a memory – it is the present. Its people still move with the seasons, still build their homes by hand, still trust the eagle and the horse as partners in daily life.',
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
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-01.webp`,
          alt: 'Yurt near Song Kul Lake',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Eagle hunting demonstration', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-02.webp`,
          alt: 'Traditional eagle hunting demonstration in Kyrgyzstan',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Horse riding on the alpine steppe', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-03.webp`,
          alt: 'Horses on Kyrgyz alpine grassland',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'The hot springs of Altyn Arashan', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-04.webp`,
          alt: 'Mountain valley at Altyn Arashan',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Sharing meals with local families', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-05.webp`,
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
        accommodation: 'local hotel/guethouse in Karakol (DBL/TWIN room)',
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
        meals: ['lunch', 'dinner'],
      },
      {
        day: 9,
        title: 'Cholpon-Ata - Burana - Bishkek',
        description:
          "The final day brings two last encounters with Kyrgyzstan's layered history and living culture. A stop at the Burana Tower - a solitary 11th-century minaret rising from the Chuy Valley - is followed by the chance to witness Kok Boru, the ancient and thrilling horseback game that remains a cornerstone of Kyrgyz identity. Lunch is shared in a homestay before the road leads back to Bishkek for our last overnight in Bishkek",
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
      'kyrgyzstan-gallery-01.webp',
      'kyrgyzstan-gallery-02.webp',
      'kyrgyzstan-gallery-03.webp',
      'kyrgyzstan-gallery-04.webp',
      'kyrgyzstan-gallery-05.webp',
      'kyrgyzstan-gallery-06.webp',
      'kyrgyzstan-gallery-07.webp',
      'kyrgyzstan-gallery-08.webp',
      'kyrgyzstan-gallery-09.webp',
      'kyrgyzstan-gallery-10.webp',
      'kyrgyzstan-gallery-11.webp',
      'kyrgyzstan-gallery-12.webp',
    ].map((fileName, index) => ({
      src: `${KYRGYZSTAN_ASSET_BASE}/gallery/${fileName}`,
      alt: `Kyrgyzstan tour gallery image ${index + 1}`,
      width: 800,
      height: 1100,
    })),
    gallerySubtitle: "Central Asia's last great nomadic frontier, lived from the inside",
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
    departureReturn: {
      departure: 'Bishkek',
      return: 'Bishkek',
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
      src: `${MOROCCO_ASSET_BASE}/morocco-bgr.webp`,
      alt: 'Traditional Moroccan architecture and decorative tilework',
      width: 1920,
      height: 900,
    },
    introduction: [
      'There is a moment, somewhere between the blue-washed alleys of Chefchaouen and the amber silence of the Sahara, when Morocco stops feeling like a destination and starts feeling like a dream you’ve had before. This 12-day journey is built around that feeling.',
      'We begin on the Atlantic coast, where the Hassan II Mosque rises from the ocean like a prayer made stone. We wind north through the Rif Mountains to Chefchaouen, where every wall is painted the colour of a cloudless sky. We walk the medieval lanes of Fes — the world’s largest car-free city — past tanneries that have worked leather the same way for a thousand years. We cross the Middle Atlas, pause in a cedar forest where wild Barbary macaques watch from the branches, and descend into the Sahara as the sun turns the Erg Chebbi dunes to fire.',
      'And then the quiet. Two nights camped among the dunes, with nothing above you but the Milky Way and nothing around you but the oldest silence on earth.',
      {
        text: 'From there, the journey carries you through the gorges of Todra, the valley of a thousand kasbahs, and the ancient earthen towers of ',
        linkText: 'Aït Ben Haddou',
        link: 'https://whc.unesco.org/en/list/444/',
        trailingText:
          ' — before the High Atlas Mountains deliver you, finally, into the organised chaos and intoxicating beauty of Marrakech.',
      },
    ],
    highlights: [
      {
        title: {
          text: 'Wander through Chefchaouen’s blue-washed alleyways, stumbling upon hidden squares and unexpected views.',
          linkText: '',
          link: '',
        },
        image: {
          src: `${MOROCCO_ASSET_BASE}/thumbnails/morocco-thumbnail-1.webp`,
          alt: 'Blue alleyway in Chefchaouen',
          width: 800,
          height: 1100,
        },
        icon: 'favorite',
      },
      {
        title: {
          text: 'Stand at the edge of the Atlantic and look up at one of the largest mosques ever built.',
          linkText: '',
          link: '',
        },
        image: {
          src: `${MOROCCO_ASSET_BASE}/thumbnails/morocco-thumbnail-2.webp`,
          alt: 'Hassan II Mosque in Casablanca',
          width: 800,
          height: 1100,
        },
        icon: 'mosque',
      },
      {
        title: {
          text: 'Walk through Volubilis, where ancient Roman mosaics and marble arches rise out of the Moroccan countryside.',
          linkText: '',
          link: '',
        },
        image: {
          src: `${MOROCCO_ASSET_BASE}/thumbnails/morocco-thumbnail-3.webp`,
          alt: 'Roman ruins at Volubilis',
          width: 800,
          height: 1100,
        },
        icon: 'account_balance',
      },
      {
        title: {
          text: 'Step inside Fes el Bali, a medieval city where cars cannot enter and time stands still.',
          linkText: '',
          link: '',
        },
        image: {
          src: `${MOROCCO_ASSET_BASE}/thumbnails/morocco-thumbnail-4.webp`,
          alt: 'Historic medina and tanneries in Fes',
          width: 800,
          height: 1100,
        },
        icon: 'temple_buddhist',
      },
      {
        title: {
          text: 'Wake before dawn and watch the towers of ',
          linkText: 'Aït Ben Haddou',
          link: 'https://whc.unesco.org/en/list/444/',
        },
        image: {
          src: `${MOROCCO_ASSET_BASE}/thumbnails/marocco-thumbnail-5.webp`,
          alt: 'Aït Ben Haddou at sunrise',
          width: 800,
          height: 1100,
        },
        icon: 'wb_twilight',
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
          "Your journey begins the moment you land at Mohammed V International Airport. Flights arrive at different times, and that's fine. We coordinate around your group so everyone arrives on their own terms, and the adventure starts when you're ready. First stop: the Hassan II Mosque - rising straight out of the Atlantic, one of the largest mosques in the world and one of the very few open to non-Muslim visitors. From there, a slow walk along the Corniche as the sun drops toward the ocean. This is where Casablanca comes to life - locals, street food, sea breeze, no agenda. Your first real taste of Morocco at its own pace.",
        accommodation: 'Traditional Riad in the heart of the city.',
        meals: ['breakfast'],
      },
      {
        day: 2,
        title: 'Casablanca - Rabat - Chefchaouen',
        description:
          "The day starts in Rabat, Morocco's quiet, elegant capital. The Hassan Tower comes first - a 12th-century minaret frozen mid-construction, surrounded by hundreds of broken columns and centuries of history. Then it's on to the Kasbah of the Udayas, a fortified medina where whitewashed walls and bougainvillea-lined streets hang above the point where the river meets the Atlantic. After lunch, the group hits the road - a 5-hour drive north through the Rif Mountains, with the landscape changing the whole way up. Arrival in Chefchaouen comes as the evening light catches the famous blue alleyways.",
        accommodation: 'Hotel in the heart of the blue city.',
        meals: ['breakfast'],
      },
      {
        day: 3,
        title: 'Chefchaouen',
        description:
          'The morning starts with a guided walk through the blue medina - the best way to get your bearings in a city that was designed to make you pleasantly lost. Hidden squares, centuries-old walls, artisan workshops tucked behind unmarked doors. The afternoon is yours. Duck into a quiet alley, browse the relaxed shops, or follow the locals to Ras El-Ma - the mountain spring at the edge of town where ice-cold water flows year-round. For the adventurous, the hike up to the Spanish Mosque is worth every step, with one of the best sunset views in all of Morocco. As evening settles over the blue city, the group comes back together for a guided evening walk - when the alleyways empty out and Chefchaouen finally shows its quieter side.',
        accommodation: 'Hotel in the heart of the blue city.',
        meals: ['breakfast'],
      },
      {
        day: 4,
        title: 'Chefchaouen - Fes',
        description:
          "The day takes the group south, into the deep roots of Morocco's history. First stop: Volubilis - one of the best-preserved Roman ruins in North Africa. Walking through the ancient mosaics, marble arches and crumbling basilicas, it's hard not to feel the weight of what once stood here. A place that earns its time. From there, a stop in the imperial city of Meknes to take in the Bab El-Mansour gate - a monumental piece of Moroccan decorative architecture that stops you in your tracks, even on a short visit. By evening, the group rolls into Fes - Morocco's oldest imperial city and arguably its most layered. Two nights here. You'll need them.",
        accommodation: 'Traditional Riad.',
        meals: ['breakfast'],
      },
      {
        day: 5,
        title: 'Fes',
        description:
          "There is nowhere in Morocco - nowhere in the world - quite like Fes el Bali. A UNESCO-listed medieval city where cars cannot enter, the streets follow a 9th-century layout that has barely changed in over a thousand years. This morning, the group ventures deep inside with a guide who knows how to read it. The route winds through the famous Chouara Tanneries - a riot of colour and an assault on the senses (grab a sprig of fresh mint, you'll thank yourself later) - through the souks of the leather and brass workers, and to the grounds of Al Quaraouiyine, founded in 859 AD and recognised as the world's oldest continuously operating university. The afternoon is free. Wander, get lost, revisit a corner that caught your eye in the morning. Fes rewards the curious.",
        accommodation: 'Traditional Riad.',
        meals: ['breakfast'],
      },
      {
        day: 6,
        title: 'Fes - Merzouga',
        description:
          "A long drive south, but the road earns its keep. The first break comes in the Cedar Forest near Azrou, where a troop of wild Barbary macaques roam freely among the trees. They've grown comfortable around respectful visitors - a surprisingly intimate encounter in the middle of nowhere. Then the landscape takes over. Slowly, the mountain green gives way to desert ochre, the air dries out, and the horizon flattens. By the time Merzouga appears, the mood in the group has shifted. Just in time for sunset, everyone mounts a camel and heads into the Erg Chebbi dunes - the great sea of sand that marks Morocco's gateway to the Sahara. Tonight, a comfortable desert camp under a sky that reminds you how many stars there actually are.",
        accommodation: 'Hotel in Merzouga.',
        meals: ['breakfast'],
      },
      {
        day: 7,
        title: 'Merzouga',
        description:
          "This morning, the group heads to Khamlia, a small desert village known for its Gnawa heritage. Here, musicians welcome you with live Gnawa music - rhythmic, powerful and deeply rooted in the history of the region. It’s an atmospheric moment that adds another layer to the Sahara experience, beyond the dunes themselves. After the visit, the group returns to the desert camp. The afternoon is free to enjoy the dunes at your own pace - relax at camp, take in the silence of the desert, or simply watch the light shift across the sand. A second night at the camp, and another sky full of stars - the Milky Way arching overhead in one of the darkest places you'll find anywhere on earth.",
        accommodation: 'Desert camp.',
        meals: ['breakfast', 'lunch', 'dinner'],
      },
      {
        day: 8,
        title: 'Merzouga - Boumalne Dades',
        description:
          'The desert is behind you. Today, the landscape shifts again. The first stop is Todra Gorge - 300-metre sheer cliffs rising straight out of the earth, with a cold river running along the canyon floor. The best way through it is on foot, with the walls closing in on both sides. From there, the Dades Valley introduces one of Morocco\'s stranger sights - the so-called "monkey fingers", sandstone pillars eroded into shapes that look almost deliberately sculpted. The kind of landscape that makes you stop the car and just stare. Tonight, the group settles into a guesthouse in Boumalne Dades - a quiet base at the edge of the valley, with nothing urgent on the agenda.',
        accommodation: 'Traditional Riad.',
        meals: ['breakfast'],
      },
      {
        day: 9,
        title: 'Dades Valley - Aït Ben Haddou',
        description:
          "The drive west follows one of Morocco's great historic corridors - ancient fortified mud-brick kasbahs stretching across the pre-Saharan foothills, one after another, as far as the eye can see. A stop in Skoura to walk through its sprawling palm grove and explore the crumbling kasbahs half-swallowed by the landscape. On the road towards Tifoultoute, the group visits the Tawabil cooperative, a local initiative offering a closer look at traditional products, local know-how and community-based work in the region. Then a visit to the Atlas Film Studios in Ouarzazate - where the desert backdrops of countless epic productions were brought to life. Bigger and stranger than you'd expect. By afternoon, the group arrives at Aït Ben Haddou - well ahead of the day-trip crowds. A UNESCO World Heritage ksar that has stood here for centuries, and tonight, home. Accommodation is right inside the old village walls, in a kasbah-style guesthouse that makes it easy to forget what century you're in.",
        accommodation: 'Traditional Riad.',
        meals: ['breakfast'],
      },
      {
        day: 10,
        title: 'Aït Ben Haddou - Marrakech',
        description:
          "The alarm goes off before dawn. It's worth it. As the first light hits the ancient earthen towers of Aït Ben Haddou, the whole ksar turns gold. No day-trip crowds, no noise - just the group and one of those quietly extraordinary moments that only early risers ever get. After breakfast, the road climbs into the High Atlas Mountains via the Tizi n'Tichka pass - a winding, dramatic crossing through Berber villages and mountain scenery before the descent begins and the heat of the south rises up to meet you. By evening, Marrakech. The contrast after days in the desert and mountains is immediate and electric. The night is yours - if there's one recommendation, it's a rooftop drink above Djemaa el-Fna as the square below shifts into its nightly spectacle.",
        accommodation: 'Traditional Riad.',
        meals: ['breakfast'],
      },
      {
        day: 11,
        title: 'Marrakech',
        description:
          "A slower morning in the city. First, the Jardin Majorelle - the iconic cobalt-blue garden created by painter Jacques Majorelle and later brought back to life by Yves Saint Laurent. Then the Le Jardin Secret, tucked quietly inside the medina and somehow even more serene despite being steps from the busiest souks in Morocco. Lunch is at the Amal Women's Training Center - a social enterprise restaurant where the food is excellent and the proceeds support women from disadvantaged backgrounds. One of those places that feels good in every sense. The afternoon is entirely free. Lose yourself in the souks, book a hammam, or find a café and watch Marrakech do its thing.",
        accommodation: 'Traditional Riad.',
        meals: ['breakfast'],
      },
      {
        day: 12,
        title: 'Departure',
        description:
          "No agenda this morning. Sleep in, take a final walk through the souks, sit over a long breakfast in the medina, or head back to that one spot you've been thinking about since Day 3. Transfers to Marrakech Menara Airport are arranged around your flight. Everyone leaves at their own time. Bslama, Morocco. Until next time.",
        accommodation: null,
        meals: ['breakfast'],
      },
    ],
    gallery: Array.from({ length: 12 }, (_, index) => ({
      src: `${MOROCCO_ASSET_BASE}/gallery/morocco-gallery-${index + 1}.webp`,
      alt: `Morocco tour gallery image ${index + 1}`,
      width: 1200,
      height: 900,
    })),
    faq: {
      heading: 'Your Journey, Simplified.',
      intro:
        'Got questions about your upcoming adventure? Our FAQ section covers the essentials: visa requirements, accommodation, health, safety, packing advice and cultural tips. Find the quick answers you need to get your bags packed and your itinerary set.',
      items: [
        {
          question: 'What are classic tours, and what other tour types does Omaya offer?',
          answer: [
            "Our classic tours are open to everyone - solo travellers, couples, friends and families travelling together. They're the ideal choice if you want to share the experience with a mixed group of like-minded people from all walks of life, guided by our expert local teams at a pace that works for all.",
            'Alongside our classic tours, we also offer two specialist formats. Our solo traveller tours are designed specifically for those exploring on their own — with small groups, a carefully considered pace, and a natural setting for meeting fellow independent travellers. Our women-only tours create a warm, supportive environment for women who want to experience Morocco with the freedom and confidence that comes from travelling in an all-female group.',
            'Not sure which is right for you? Our team is happy to talk it through and help you find the best fit.',
          ],
        },
        {
          question: 'What should I expect from staying in a Riad?',
          answer: [
            'Riads are traditional Moroccan guesthouses built around a central courtyard — full of character, history and charm. Staying in one is an experience in itself, and a far more atmospheric alternative to a standard hotel. A few practical things to keep in mind: due to their age and central locations, heating and air conditioning can be inconsistent, and thick traditional walls sometimes limit Wi-Fi signal to common areas rather than individual rooms — mobile data is a reliable backup. Most riads have two or three floors with no elevator, so be prepared to carry your luggage up stairs.',
          ],
        },
        {
          question: 'How should I dress during the tour?',
          answer: [
            "Morocco is a Muslim-majority country with a strong culture of modesty, and dressing respectfully goes a long way. For both men and women, keeping shoulders and knees covered is recommended — especially in rural areas, religious sites, and smaller towns. Lightweight, loose-fitting layers work well and double up as protection from the sun. You don't need to overhaul your wardrobe — just pack with awareness and you'll feel comfortable wherever the itinerary takes you.",
          ],
        },
        {
          question: 'How physically demanding is this tour?',
          answer: [
            "The trip involves a mix of walking, hiking and long drives. Some days — like exploring Fes el Bali or hiking up to the Spanish Mosque in Chefchaouen — require a reasonable level of fitness and comfort on uneven, cobbled surfaces. The camel trek into the Sahara is gentle and short. Overall, a moderate level of fitness is recommended, but nothing on this itinerary requires athletic ability. If you have any specific concerns, speak to our team before booking and we'll give you an honest assessment.",
          ],
        },
        {
          question: 'What is the best time of year to do this tour?',
          answer: [
            "Spring (March to May) and autumn (September to November) are the sweet spots — comfortable temperatures across the mountains, desert and cities. Summer in the Sahara can be extremely hot, and mountain passes can be affected by snow in winter. We'll always advise on conditions closer to your travel date and let you know if anything is likely to affect the itinerary.",
          ],
        },
        {
          question: 'Do I need a visa to enter Morocco?',
          answer: [
            "Citizens of many countries — including the EU, UK, USA and Canada — do not require a visa for stays of up to 90 days. Requirements vary by nationality, so we recommend checking with your local Moroccan embassy or consulate ahead of travel. Your passport should also be valid for at least six months beyond your travel dates. Our team is happy to point you in the right direction if you're unsure.",
          ],
        },
        {
          question: 'What currency is used, and can I pay by card?',
          answer: [
            "Morocco's currency is the Moroccan Dirham (MAD). Cash is king for most day-to-day transactions — souks, street food, tipping and smaller guesthouses rarely accept cards. ATMs are widely available in cities, but scarcer in rural areas. We recommend arriving with some local currency and withdrawing cash in Casablanca, Fes or Marrakech before heading south. Note that Dirhams cannot be exchanged outside Morocco, so avoid withdrawing more than you need towards the end of your trip.",
          ],
        },
        {
          question: 'Is the tap water safe to drink?',
          answer: [
            "It's best to stick to bottled or filtered water throughout the trip. This applies to brushing teeth in more rural areas as well. Bottled water is cheap and widely available everywhere on the route, so you'll never be far from a safe supply.",
          ],
        },
        {
          question: 'How should I handle haggling in the souks?',
          answer: [
            "Haggling is a normal and expected part of shopping in Moroccan souks — it's a social exchange as much as a commercial one. A good rule of thumb: start at roughly half the asking price and meet somewhere in the middle. Never feel pressured, and never start negotiating for something you aren't genuinely prepared to buy. Your guide will give you tips on the ground and can help if you're unsure whether a price is fair.",
          ],
        },
        {
          question: 'What should I know about tipping?',
          answer: [
            "Tipping is customary in Morocco and genuinely appreciated. As a rough guide: restaurant meals 10–15% of the bill, local guides 50–100 MAD per day, drivers 20–50 MAD per day, and a small amount for anyone who assists with luggage or shows you around informally. We'll provide a full tipping guide before departure so you can arrive feeling confident and prepared.",
          ],
        },
        {
          question: 'Is Morocco safe to travel in?',
          answer: [
            "Morocco is widely considered one of the most welcoming and accessible destinations in North Africa, and millions of international visitors travel there safely every year. As with any destination, a degree of common sense goes a long way — keep an eye on your belongings in busy medinas, use recommended transport, and follow your guide's advice on the ground. Our local team monitors conditions throughout and will always brief you before and during the trip. We also stay in close contact with the FCO and equivalent travel advisories and will proactively communicate any relevant updates.",
          ],
        },
        {
          question: 'What vaccinations or health precautions do I need?',
          answer: [
            "No specific vaccinations are legally required for entry into Morocco from most countries, but it's always worth ensuring your routine vaccinations are up to date. Some travellers choose to get hepatitis A and typhoid cover as a precaution — your GP or a travel health clinic can advise based on your medical history. We also recommend packing a basic travel health kit including sun protection, rehydration sachets, and any personal prescription medication. Pharmacies are well stocked in cities, but harder to find in rural areas.",
          ],
        },
        {
          question: 'What language is spoken, and will I need to know any Arabic?',
          answer: [
            'Morocco is multilingual — Darija (Moroccan Arabic) and Tamazight (Berber) are the native languages, while French is widely spoken in cities, hotels and restaurants. English is increasingly common in tourist areas, and your Omaya guide will be with you throughout to bridge any gaps. That said, knowing a few words of Arabic or French goes a long way and is always warmly received. A simple "shukran" (thank you) will earn you a smile almost anywhere.',
          ],
        },
        {
          question: 'What food can I expect, and can dietary requirements be catered for?',
          answer: [
            "Moroccan cuisine is one of the great joys of any visit — think tagines slow-cooked with aromatic spices, freshly baked bread, vibrant salads, and pastilla, the remarkable sweet-savoury pastry. Meals are generous, communal and deeply satisfying. Vegetarian options are widely available and most dietary requirements can be accommodated with advance notice. Please let us know at the time of booking and we'll make sure the right arrangements are in place throughout the trip. Note that pork products and alcohol are not served in traditional Moroccan establishments, though international hotels may offer both.",
          ],
        },
      ],
    },
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
    departureReturn: {
      departure: 'Casablanca',
      return: 'Marrakech',
    },
  },
  {
    id: 'women-only-tour-bulgaria',
    slug: 'women-only-tour-bulgaria',
    title: 'Bulgaria Beyond the Ordinary | Women only',
    destination: {
      country: 'Bulgaria',
      region: 'Sofia, Rila, Plovdiv, Rhodope Mountains',
      startLocation: 'Sofia',
      endLocation: 'Sofia',
    },
    category: 'Women only',
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
      src: `${BULGARIA_WOMEN_ASSET_BASE}/bulgaria-women-only-bgr.webp`,
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
        title: {
          text: 'Exploring',
          linkText: ' Rila Monastery',
          link: '/the-complete-visitor-guide-to-rila-monastery/',
        },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-01.webp`,
          alt: 'Rila Monastery in Bulgaria',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Tasting wine in Melnik', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-02.webp`,
          alt: 'Wine tasting in Melnik',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'The Bridal Face Painting Ritual', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-03.webp`,
          alt: 'Traditional bridal face painting ritual in Ribnovo',
          width: 800,
          height: 1100,
        },
      },
      {
        title: {
          text: 'Walking ',
          linkText: "Plovdiv's Old Town",
          link: 'https://www.visitplovdiv.com/en',
        },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-04.webp`,
          alt: 'Plovdiv old town in Bulgaria',
          width: 800,
          height: 1100,
        },
      },
      {
        title: { text: 'Exploring the forgotten Buzludzha', linkText: '', link: '' },
        image: {
          src: `${BULGARIA_ASSET_BASE}/thumbnails/bulgaria-thumbnail-05.webp`,
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
      src: `${BULGARIA_ASSET_BASE}/gallery/${fileName}`,
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
      title: 'Bulgaria Beyond the Ordinary | Women only | Omaya Travel',
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
    title: 'Kyrgyzstan Discovery Tour | Women only',
    destination: {
      country: 'Kyrgyzstan',
      region: 'Bishkek, Issyk-Kul, Song Kul',
      startLocation: 'Bishkek',
      endLocation: 'Bishkek',
    },
    category: 'Women only',
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
      src: `${KYRGYZSTAN_WOMEN_ASSET_BASE}/kyrgyzstan-women-only-bgr.webp`,
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
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-01.webp`,
          alt: 'Traditional yurt camp in Kyrgyzstan',
          width: 150,
          height: 'auto',
        },
      },
      {
        title: { text: 'Eagle hunting demonstration', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-02.webp`,
          alt: 'Traditional eagle hunting demonstration in Kyrgyzstan',
          width: 150,
          height: 'auto',
        },
      },
      {
        title: { text: 'Horse riding on the alpine steppe', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-03.webp`,
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
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-04.webp`,
          alt: 'Mountain valley at Altyn Arashan in Kyrgyzstan',
          width: 150,
          height: 'auto',
        },
      },
      {
        title: { text: 'Sharing meals with local families', linkText: '', link: '' },
        image: {
          src: `${KYRGYZSTAN_ASSET_BASE}/thumbnails/kyrgyzstan-thumbnail-05.webp`,
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
      src: `${KYRGYZSTAN_ASSET_BASE}/gallery/kyrgyzstan-gallery-${String(index + 1).padStart(2, '0')}.webp`,
      alt: `Kyrgyzstan women-only tour gallery image ${index + 1}`,
      width: 800,
      height: 1100,
    })),
    enquiry: {
      enabled: true,
      cta: 'Check Availability',
    },
    seo: {
      title: 'Kyrgyzstan Discovery Tour | Women only | Omaya Travel',
      description:
        'Women-only small-group tour through Kyrgyzstan with yurt stays, Song Kul Lake, mountain passes and local cultural encounters.',
    },
    source: {
      legacyUrl: 'https://omayatravel.com/tour-item/women-only-tour-kyrgyzstan/',
    },
  },
];

export function findTourBySlug(
  slug: string | null | undefined,
  siteId: 'omaya' | 'amelia' = 'omaya',
): TourDetailContent | undefined {
  if (siteId === 'amelia' && slug === 'kyrgyzstan-tour') {
    return createAmeliaKyrgyzstanTour();
  }

  if (siteId === 'amelia' && slug === 'morocco-tour') {
    return createAmeliaMoroccoTour();
  }

  if (slug === MOROCCO_WOMEN_ONLY_TOUR_SLUG) {
    return createMoroccoWomenOnlyTour();
  }

  if (slug === MOROCCO_SOLO_TRAVELLERS_TOUR_SLUG) {
    return createMoroccoSoloTravellersTour();
  }

  return TOUR_DETAIL_CONTENT.find((tour) => tour.slug === slug);
}

function createAmeliaKyrgyzstanTour(): TourDetailContent | undefined {
  const kyrgyzstanTour = TOUR_DETAIL_CONTENT.find((tour) => tour.slug === 'kyrgyzstan-tour');

  if (!kyrgyzstanTour) {
    return undefined;
  }

  return {
    ...kyrgyzstanTour,
    id: 'amelia-kyrgyzstan-tour',
    title: 'Киргистан - юрти, коне и високи планини',
    destination: {
      country: 'Киргистан',
      region: 'Сон-Кул, Исък-Кул и Тяншан',
      startLocation: 'Бишкек',
      endLocation: 'Бишкек',
    },
    category: 'Само за жени',
    duration: {
      days: 10,
      nights: 9,
    },
    price: {
      ...kyrgyzstanTour.price,
      unit: 'човек',
    },
    groupSize: {
      min: 6,
      max: 12,
    },
    introduction: [
      'Представи си, че се събуждаш в юрта на 3000 метра надморска височина.',
      'Навън няма градски шум, няма трафик, няма Wi-Fi. Само тюркоазените води на Сон-Кул, заобиколени от безкрайни високопланински пасища, заснежени върхове, които се издигат над хоризонта, и коне, които препускат свободно из степите.',
      'Това не е сцена от филм. Това е само един от моментите по време на пътуването ни в Киргизстан, които ще останат с вас дълго. Присъединете се към нас за 10 дни, изпълнени с подобни моменти - от конни преходи през високопланинските пасища и нощувки в юрти до срещи с местни семейства, горещи извори дълбоко в планината и пътища през едни от най-впечатляващите пейзажи на Централна Азия.',
      'Това пътуване е за теб, ако жадуваш да усетиш свободата на безкрайните степи, уютът на юртата високо в планината ти звучи по-привлекателно от поредния хотел, и искаш да забавиш темпото, да оставиш телефона и просто да видиш докъде стига хоризонтът.',
    ],
    highlights: [
      {
        title: { text: 'Езерото Сон-Кул - живот на 3000 метра', linkText: '', link: '' },
        image: kyrgyzstanTour.highlights[0]?.image ?? kyrgyzstanTour.heroImage,
      },
      {
        title: { text: 'С коне през Тяншан', linkText: '', link: '' },
        image: kyrgyzstanTour.highlights[1]?.image ?? kyrgyzstanTour.heroImage,
      },
      {
        title: { text: 'Лов с орли', linkText: '', link: '' },
        image: kyrgyzstanTour.highlights[2]?.image ?? kyrgyzstanTour.heroImage,
      },
      {
        title: { text: 'Исък-Кул - морето в планината', linkText: '', link: '' },
        image: kyrgyzstanTour.highlights[3]?.image ?? kyrgyzstanTour.heroImage,
      },
      {
        title: { text: 'Сказка - каньонът от приказките', linkText: '', link: '' },
        image: kyrgyzstanTour.highlights[4]?.image ?? kyrgyzstanTour.heroImage,
      },
      {
        title: { text: 'Алтин-Арашан - горещи извори високо в планината', linkText: '', link: '' },
        image: kyrgyzstanTour.highlights[5]?.image ?? kyrgyzstanTour.heroImage,
      },
    ],
    included: [
      'Нощувки в хотели, къщи за гости и юрти според описанието',
      'Всички активности, посочени в програмата',
      'Входни такси за включените обекти',
      'Транспорт по време на пътуването',
      'Местен англоговорящ гид',
      'Хранене според описанието на програмата',
      'Представител на Amelia Travel',
    ],
    notIncluded: [
      'Самолетни билети',
      'Застраховка',
      'Хранене, което не е изрично посочено в програмата',
      'Доплащане за единична стая',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Пристигане в Бишкек',
        description:
          'Пътуването ни започва в Бишкек - спокойната и зелена столица на Киргизстан. След пристигането ще се срещнем с местния ни гид, ще имаме свободно време за разходка, а вечерта ще се съберем на вечеря и традиционен фолклорен концерт.',
        accommodation: '3* хотел в Бишкек (двойна стая)',
        meals: ['вечеря'],
      },
      {
        day: 2,
        title: 'Ала-Арча и Бишкек',
        description:
          'Отправяме се към национален парк Ала-Арча - впечатляваща планинска долина с ледникови реки и борови гори. След разходка сред природата се връщаме в Бишкек за градска обиколка с местния гид.',
        accommodation: '3* хотел в Бишкек (двойна стая)',
        meals: ['закуска', 'обяд'],
      },
      {
        day: 3,
        title: 'Бишкек - Кочкор - Сон-Кул',
        description:
          'Оставяме града зад гърба си и се отправяме към високите планини. След спирка за обяд в Кочкор пътят се изкачва към Сон-Кул - огромно високопланинско езеро, заобиколено от открити пасища и летни номадски лагери.',
        accommodation: 'Лагер с юрти (до 4 души в юрта)',
        meals: ['закуска', 'обяд', 'вечеря'],
      },
      {
        day: 4,
        title: 'Цял ден край Сон-Кул',
        description:
          'След закуска се качваме на конете и се отправяме на двучасова езда през високопланинските пасища около Сон-Кул. Следобедът е свободен за разходка край езерото, изкачване по околните хълмове или почивка в лагера.',
        accommodation: 'Лагер с юрти (до 4 души в юрта)',
        meals: ['закуска', 'обяд', 'вечеря'],
      },
      {
        day: 5,
        title: 'Сон-Кул - Кочкор - Боконбаево',
        description:
          'Спускаме се от Сон-Кул и наблюдаваме демонстрация на изграждане на юрта. След обяд в дома на местно семейство продължаваме покрай бреговете на Исък-Кул към село Боконбаево.',
        accommodation: 'Лагер с юрти (до 4 души в юрта)',
        meals: ['закуска', 'обяд', 'вечеря'],
      },
      {
        day: 6,
        title: 'Лов с орли - каньона Сказка - Барскоон - Каракол',
        description:
          'Сутринта ще наблюдаваме демонстрация на лов с орли и ще се срещнем с местни ловци. След това продължаваме към каньона Сказка, долината Барскоон и Каракол, където ще видим Дунганската джамия и дървената църква Света Троица.',
        accommodation: 'Хотел или къща за гости в Каракол (двойна стая)',
        meals: ['закуска', 'обяд', 'вечеря'],
      },
      {
        day: 7,
        title: 'Горещите извори на Алтън-Арашан',
        description:
          'Маршрутът ни води високо в планината към Алтън-Арашан. Ще преминем през гори и планински долини до естествените горещи извори, скрити сред високите върхове.',
        accommodation: 'Лагер с юрти или къща за гости (до 4 души в юрта)',
        meals: ['закуска', 'обяд', 'вечеря'],
      },
      {
        day: 8,
        title: 'Алтън-Арашан - Чолпон-Ата',
        description:
          'Спускаме се от планината и продължаваме към северния бряг на Исък-Кул. В Чолпон-Ата ще имаме свободно време край езерото и ще посетим музея на открито с древни петроглифи.',
        accommodation: 'Къща за гости',
        meals: ['закуска', 'обяд', 'вечеря'],
      },
      {
        day: 9,
        title: 'Чолпон-Ата - Бурана - Бишкек',
        description:
          'Посещаваме кулата Бурана - един от символите на древния град Баласагун по Пътя на коприната. След това ще наблюдаваме кок-бору, традиционна конна игра, преди да се върнем в Бишкек.',
        accommodation: '3* хотел в Бишкек (двойна стая)',
        meals: ['закуска', 'обяд'],
      },
      {
        day: 10,
        title: 'Отпътуване от Бишкек',
        description: 'След закуска трансфер до летището за обратния полет.',
        accommodation: null,
        meals: ['закуска'],
      },
    ],
    faq: {
      heading: 'Често задавани въпроси',
      intro: 'Практична информация за пътуването в Киргизстан.',
      items: [
        {
          question: 'Нужна ли е виза за Киргизстан?',
          answer: [
            'За български граждани не е необходима виза за туристически престой до 60 дни. Необходимо е да пътувате с валиден паспорт.',
          ],
        },
        {
          question: 'Какъв е размерът на групата?',
          answer: [
            'Пътуването е организирано за малки групи до 12 души. Това ни позволява да се движим по-лесно и да имаме по-непосредствен контакт с местните хора и местата, които посещаваме.',
          ],
        },
        {
          question: 'Трябва ли да имам опит с конна езда?',
          answer: [
            'Не. Конната езда край Сон-Кул е подходяща и за хора без предишен опит. Местните водачи ще ни дадат необходимите инструкции преди началото.',
          ],
        },
        {
          question: 'Колко физически натоварващо е пътуването?',
          answer: [
            'Това е активно пътуване, но не е експедиция. Програмата включва ходене пеша, конна езда и време във високопланински райони.',
            'Важно е да ни уведомите предварително, ако имате ограничена подвижност, затруднения при ходене или други здравословни състояния, които могат да повлияят на участието ви.',
          ],
        },
      ],
    },
    enquiry: {
      enabled: true,
      cta: 'Изпрати запитване',
    },
    seo: {
      title: 'Киргистан - юрти, коне и високи планини | Пътуване само за жени | Amelia Travel',
      description:
        '10-дневно пътуване в Киргистан с юрти край Сон-Кул, конни преходи, Исък-Кул, лов с орли, Алтин-Арашан и номадска култура.',
    },
    source: {
      legacyUrl: 'https://ameliatravel.bg/tour-item/kyrgyzstan-tour/',
    },
  };
}

function createAmeliaMoroccoTour(): TourDetailContent | undefined {
  const moroccoTour = TOUR_DETAIL_CONTENT.find((tour) => tour.slug === 'morocco-tour');

  if (!moroccoTour) {
    return undefined;
  }

  return {
    ...moroccoTour,
    id: 'amelia-morocco-tour',
    title: 'Мароко - сини градове и златни дюни',
    destination: {
      country: 'Мароко',
      region: 'Казабланка, Шефшауен, Фес, Мерзуга, Маракеш',
      startLocation: 'София',
      endLocation: 'София',
    },
    category: 'Само за жени',
    duration: {
      days: 12,
      nights: 11,
    },
    price: {
      amount: 2300,
      currency: 'EUR',
      unit: 'човек',
    },
    groupSize: {
      min: 6,
      max: 12,
    },
    departures: ['2027-04-22'],
    heroImage: {
      src: `${AMELIA_MOROCCO_ASSET_BASE}/morocco-hero.webp`,
      alt: 'Мароко - пътуване само за жени с Amelia Travel',
      width: 1600,
      height: 921,
    },
    introduction: [
      '12 дни от Атлантическия бряг до дюните на Сахара. Пътуване само за жени - с компания от жени, които са тръгнали да видят света по същия начин като теб.',
      'Има един момент - някъде между сините улички на Шефшауен и кехлибарената тишина на Сахара - в който Мароко спира да бъде дестинация и започва да прилича на сън, който вече си сънувала. Това 12-дневно пътуване е създадено точно заради това усещане.',
      'Тръгваме заедно от София и започваме от атлантическия бряг, където джамията Хасан II се издига от океана като застинала в камък молитва. Оттам поемаме на север към Шефшауен, където всяка стена е боядисана в цвета на безоблачно небе. Минаваме през средновековните улички на Фес, покрай кожарските работилници - традиция, която има корени в историята на града отпреди повече от хиляда години и чиито техники и днес се предават от поколение на поколение. Прекосяваме Среден Атлас, спираме там, където диви берберски макаци те наблюдават от клоните, и слизаме към Сахара точно когато залязващото слънце подпалва дюните на Ерг Шеби.',
      'И после - тишината. Една нощ в лагер сред дюните, под безкрайния Млечен път, потопени в най-старата тишина на света.',
      {
        text: 'Оттам пътят продължава през клисурата Тодра, долината на хилядата казби и древните глинени кули на ',
        linkText: 'Аит Бен Хаду',
        link: 'https://whc.unesco.org/en/list/444/',
        trailingText:
          ' - преди Високият Атлас най-накрая да те пусне в организирания хаос и опияняващата красота на Маракеш. Подходящ финал за пътуване, което живее от контрасти: пустинна тишина едната вечер, градска енергия - следващата.',
      },
    ],
    highlights: [
      {
        title: {
          text: 'Изгуби се из сините улички на Шефшауен.',
          linkText: '',
          link: '',
        },
        image: {
          src: `${AMELIA_MOROCCO_ASSET_BASE}/highlights/morocco-highlight-1.webp`,
          alt: 'Сини улички в медината на Шефшауен',
          width: 300,
          height: 300,
        },
        icon: 'favorite',
      },
      {
        title: {
          text: 'Застани на ръба на Атлантика и вдигни поглед към една от най-големите джамии в Африка.',
          linkText: '',
          link: '',
        },
        image: {
          src: `${AMELIA_MOROCCO_ASSET_BASE}/highlights/morocco-highlight-2.webp`,
          alt: 'Джамията „Хасан II“ в Казабланка',
          width: 300,
          height: 300,
        },
        icon: 'mosque',
      },
      {
        title: {
          text: 'Върви сред руините на Волубилис, където римски мозайки и мраморни арки изникват насред мароканския пейзаж.',
          linkText: '',
          link: '',
        },
        image: {
          src: `${AMELIA_MOROCCO_ASSET_BASE}/highlights/morocco-highlight-3.webp`,
          alt: 'Римските руини на Волубилис',
          width: 300,
          height: 300,
        },
        icon: 'account_balance',
      },
      {
        title: {
          text: 'Потъни в лабиринта на Фес ел Бали - средновековен град без автомобили, където времето сякаш е застинало.',
          linkText: '',
          link: '',
        },
        image: {
          src: `${AMELIA_MOROCCO_ASSET_BASE}/highlights/morocco-highlight-4.webp`,
          alt: 'Медината и кожарските работилници във Фес',
          width: 300,
          height: 300,
        },
        icon: 'temple_buddhist',
      },
      {
        title: {
          text: 'Стани преди изгрев и гледай как първите слънчеви лъчи превръщат кулите на Аит Бен Хаду в злато.',
          linkText: '',
          link: '',
        },
        image: {
          src: `${AMELIA_MOROCCO_ASSET_BASE}/highlights/morocco-highlight-5.webp`,
          alt: 'Аит Бен Хаду на изгрев',
          width: 300,
          height: 300,
        },
        icon: 'wb_twilight',
      },
    ],
    included: [
      'Настаняване според описанието',
      'Дейности според програмата',
      'Входни такси за посочените обекти',
      'Наземен транспорт',
      'Местни екскурзоводки',
      'Хранения според дневната програма',
      'Представителка на Amelia Travel, която пътува с групата от София и обратно',
    ],
    notIncluded: [
      'Самолетни билети',
      'Застраховка',
      'Хранения извън описаните',
      'Доплащане за единична стая',
    ],
    itinerary: [
      {
        day: 1,
        title: 'София - Казабланка',
        description:
          'Пътуването започва още на летище София. Групата тръгва заедно, с представителка на Amelia Travel, която е с вас от първата минута до последната. Без притеснения за връзки, трансфери и търсене на непознати хора на непознато летище - всичко е уредено. Кацаме в Казабланка и се настаняваме в хотела. Следобед ще се разходим по крайбрежния булевард Корниш, откъдето ще видим отвън и една от емблемите на града - джамията „Хасан II“, издигнала се над Атлантическия океан. После просто ще оставим Казабланка да ни поведе със своя ритъм, докато слънцето бавно се спуска към водата. Вечерта тук е най-оживено - излизат семейства и компании, появяват се продавачи на улична храна, кафенетата се пълнят, а въздухът мирише на сол. Нямаме списък със забележителности, който да гоним, и точно това е идеята: първите часове в Мароко минават без бързане.',
        accommodation: 'Традиционен риад в сърцето на Казабланка',
        meals: ['закуска'],
      },
      {
        day: 2,
        title: 'Казабланка - Рабат - Шефшауен',
        description:
          'Тръгваме рано от Казабланка, а малко повече от час по-късно вече сме в Рабат - тихата и елегантна столица на Мароко. Започваме от минарето Хасан - недовършено от XII век, то се издига и днес сред стотиците прекършени колони, останали като следа от една несбъдната амбиция. Оттам се изкачваме до Казбата на Удаите - укрепена медина с варосани стени и улички, обрасли в бугенвилия, надвиснала точно над мястото, където реката се влива в Атлантика. Следобед поемаме на север. Следващите около пет часа пътят ни превежда през планината Риф, а пейзажът зад прозореца се променя с всеки завой. Пристигаме в Шефшауен точно когато вечерната светлина пада върху прочутите сини улички.',
        accommodation: 'Хотел в сърцето на синия град',
        meals: ['закуска'],
      },
      {
        day: 3,
        title: 'Шефшауен',
        description:
          'Започваме с обиколка на синята медина заедно с местната ни водачка. В Шефшауен всяка уличка прилича на предишната, само в друг нюанс синьо, затова е добре първата обиколка да бъде с човек, който познава града. Минаваме покрай скрити площадчета, вековни стени и работилници на майстори зад врати без табели. Следобедът остава свободен, за да разгледаш града в свое темпо и без водач. Можеш да свиеш в някоя тиха уличка, да разгледаш магазинчетата без бързане или да тръгнеш след местните към Рас ел-Ма - планинския извор в края на града, където ледената вода тече целогодишно. Ако си в настроение за изкачване, пътеката до Испанската джамия си заслужава всяка стъпка, а гледката към залеза е сред най-красивите в Мароко. Вечерта се събираме отново за разходка из синия град, когато уличките се изпразват и Шефшауен най-накрая показва по-тихото си лице.',
        accommodation: 'Хотел в сърцето на синия град',
        meals: ['закуска'],
      },
      {
        day: 4,
        title: 'Шефшауен - Фес',
        description:
          'Днес пътят води на юг, там, където започва древната история на Мароко. Първо спираме във Волубилис - един от най-впечатляващите и добре запазени римски археологически обекти в Северна Африка. Тук някога е кипял животът на римската Мавретания Тингитана - днес сред руините ще откриеш мозаечни подове, древни преси за маслиново масло и мраморни арки, останали насред мароканските поля. Място, на което си струва да отделим време. Оттам продължаваме към императорския град Мекнес и портата Баб ел-Мансур - огромна, покрита със зелена и синя керамика, с мраморни колони, донесени от руините на Волубилис. От пръв поглед се вижда защо през XVII век Мекнес е била столица на Мароко. Привечер стигаме до Фес - най-старият императорски град в Мароко и от онези места, които не се разкриват наведнъж. Зад глухите стени на медината се крият дворове, медресета и джамии, а зад всеки завой - малко занаятчийско ателие. Предстоят ни две нощувки на това омагьосващо място.',
        accommodation: 'Риад в медината на Фес',
        meals: ['закуска'],
      },
      {
        day: 5,
        title: 'Фес',
        description:
          'Няма много места като Фес ел Бали - нито в Мароко, нито другаде по света. Това е средновековен град под закрилата на ЮНЕСКО, добре скрит от шума на колите - поради простата причина, че те не се допускат в него. Улиците му следват лабиринтна структура, оформена още през IX век и запазила се почти непроменена повече от хиляда години. Тази сутрин влизаме навътре с местната ни екскурзоводка - човек, който знае как да разчете този град и да ни покаже какво се крие зад привидния му хаос. Маршрутът минава през прочутите кожарски работилници Шуара, където цветовете и миризмите те обливат едновременно, затова предварително сме се погрижили всяка да има подръка стръкче прясна мента. Продължаваме през суковете на кожарите и медникарите и стигаме до двора на Ал-Карауин, основан през 859 г. и считан за най-старата непрекъснато действаща институция за висше образование в света. Остатъкът от деня минава без програма и без водач. Можеш да се върнеш до ъгълчето, което ти е грабнало окото сутринта, или просто да вървиш и да потънеш в ритъма на града.',
        accommodation: 'Риад в медината на Фес',
        meals: ['закуска'],
      },
      {
        day: 6,
        title: 'Фес - Мерзуга',
        description:
          'Днес ни чака дълъг път на юг, но всеки километър си заслужава. Спираме първо в кедровата гора край Азру, където диви берберски макаци се разхождат свободно между дърветата. Свикнали са с хората и не се притесняват особено от посетители - така че не се изненадвай, ако някой от тях се окаже доста по-близо, отколкото си очаквала. После пейзажът поема нещата в свои ръце. Планинското зелено бавно отстъпва път на пустинната охра, въздухът изсъхва, а хоризонтът се изравнява. Докато стигнем Мерзуга, разговорите в колата стихват и всички погледи са насочени към пейзажа, който ще ни придружава следващите два дни. Пристигаме в Мерзуга привечер и се настаняваме в хотела в самия край на дюните на Ерг Шеби - голямото пясъчно море, което е част от Сахара. Вечерта е за почивка след дългия път, а небето над пустинята разкрива нещо, което градските светлини отдавна са ни накарали да забравим - колко много звезди всъщност има.',
        accommodation: 'Хотел в Мерзуга, в края на дюните',
        meals: ['закуска'],
      },
      {
        day: 7,
        title: 'Мерзуга',
        description:
          'Сутринта посещаваме Хамлия - малко пустинно селце, чиито жители са потомци на хора с произход от Западна Африка, доведени в Мароко през Сахара преди векове. Заедно с тях е дошла и музиката гнауа: ритуална музика, изпълнявана с триструнна лютня, метални кастанети и пеене под формата на въпроси и отговори, вписана от ЮНЕСКО в списъка на нематериалното културно наследство. Тук ни посрещат с концерт на живо и това е нещо съвсем различно от дюните - може би най-неочакваната част от Сахара. Следобед се качваме на камили и потегляме навътре в дюните към пустинния лагер. Преходът е кратък и спокоен, точно навреме за залеза над Ерг Шеби. Оттук нататък няма програма - почивай, попий тишината или просто гледай как светлината се променя по пясъка. Вечерята е приготвена на място под открито небе - Млечният път се извива над теб на едно от най-тъмните места на земята.',
        accommodation: 'Пустинен лагер сред дюните на Ерг Шеби',
        meals: ['закуска', 'обяд', 'вечеря'],
      },
      {
        day: 8,
        title: 'Мерзуга - Бумалн Дадес',
        description:
          'След закуска потегляме с джипове 4x4 и пустинята остава зад гърба ни. Днес пейзажът се променя отново. Стигаме до клисурата Тодра, където отвесни скали, достигащи на места до 300 метра, се издигат право от земята, а по дъното на каньона тече студена река. Преминаваме я пеша, докато стените сякаш се затварят от двете ни страни. Пред нас долината Дадес разкрива една от най-впечатляващите гледки в Мароко - така наречените „маймунски пръсти“. Това са пясъчникови колони, ерозирали в толкова правилни форми, че изглеждат почти изваяни нарочно. Вечерта се настаняваме в семейна къща за гости в Бумалн Дадес.',
        accommodation: 'Къща за гости в Бумалн Дадес',
        meals: ['закуска'],
      },
      {
        day: 9,
        title: 'Долината Дадес - Аит Бен Хаду',
        description:
          'Пътят ни на запад минава по един от най-впечатляващите исторически маршрути в Мароко. Из предсахарските хълмове са пръснати древни казби, една след друга. Спираме в Скура - малко градче, потънало в гъст палмов оазис насред полупустинята. Между дърветата са скрити стари казби - укрепени домове от глина и слама, с високи ъглови кули, строени за цял род. Днес се рушат и почти са се слели с пейзажа около тях. По пътя към Тифултут спираме в Tawabil - женски кооператив в Уарзазат, в който местни жени изработват традиционни продукти по стари технологии и сами продават продукцията си. Влизаме в Atlas Studios - едно от най-големите филмови студиа в света, където мароканската пустиня е влизала в ролята на Древен Рим, Египет, Йерусалим и дори Вестерос. Следобед стигаме до Аит Бен Хаду, когато тълпите от еднодневните екскурзии вече са си тръгнали. Този ксар под закрилата на ЮНЕСКО стои тук от векове, а тази вечер е и нашият дом. Спим в самото село, в къща за гости в стил казба - глинени стени, тесни стълби и тишина, в която лесно губиш представа за времето.',
        accommodation: 'Къща за гости в стил казба, в самия ксар',
        meals: ['закуска'],
      },
      {
        day: 10,
        title: 'Аит Бен Хаду - Маракеш',
        description:
          'Днес ставаме преди изгрев и всяка минута недоспиване си струва гледката, която ще се разкрие пред нас. Когато първата светлина докосне древните глинени кули на Аит Бен Хаду, целият ксар става златен. Няма тълпи, няма шум - само групата и един от онези тихи моменти, запазени единствено за ранобудните. След закуска поемаме по пътя към Високия Атлас през прохода Тизи н’Тичка - най-високият планински проход в Мароко, на над 2200 метра, с многобройни завои и берберски села, накацали по склоновете. След като започне спускането, въздухът бързо се затопля. Привечер стигаме до Маракеш. След тишината на пустинята градът ни посреща с пълна сила: клаксони, мотопеди, музика и аромат на печено месо. Вечерта е свободна, а ние бихме я започнали от някой покривен бар над площад Джемаа ел-Фна - точно в онзи час, когато долу сергиите се разпъват, огньовете пламват и площадът започва да се изпълва с живот.',
        accommodation: 'Риад в медината на Маракеш',
        meals: ['закуска'],
      },
      {
        day: 11,
        title: 'Маракеш',
        description:
          'Започваме деня в градината Мажорел - емблематичното място с наситеносините стени, създадено от художника Жак Мажорел и по-късно спасено от забрава от Ив Сен Лоран. Продължаваме към Le Jardin Secret - скрита в сърцето на медината градина, която предлага изненадващо спокойствие само на крачки от оживените сукове. Обядваме в Amal Women’s Training Center - място, в което жени от уязвими общности се обучават на професионални умения в кухнята и ресторантьорството. Част от обучението им се случва именно тук, а на масата ни идва домашна мароканска храна, приготвена от тях самите. След завършването на програмата много от жените намират работа в ресторанти и кухни из Маракеш. Следобедът е изцяло твой и минава без екскурзовод. Обиколи суковете без посока, запази си хамам или си намери кафене и гледай Маракеш как си живее.',
        accommodation: 'Риад в медината на Маракеш',
        meals: ['закуска'],
      },
      {
        day: 12,
        title: 'Маракеш - София',
        description:
          'Сутринта е без бързане. Наспи се, закуси спокойно в риада и после направи последна обиколка на суковете или се върни на онова място, което ти хвана окото вчера. След това тръгваме заедно към летище Менара и се прибираме в София - със същата компания, с която тръгнахме преди дванайсет дни. Бслама, Мароко. До следващия път.',
        accommodation: null,
        meals: ['закуска'],
      },
    ],
    gallery: [
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-01.webp`,
        alt: 'Мароко - снимка 1 от пътуването',
        width: 550,
        height: 932,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-02.webp`,
        alt: 'Мароко - снимка 2 от пътуването',
        width: 1045,
        height: 1045,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-03.webp`,
        alt: 'Мароко - снимка 3 от пътуването',
        width: 550,
        height: 900,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-04.webp`,
        alt: 'Мароко - снимка 4 от пътуването',
        width: 550,
        height: 1100,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-05.webp`,
        alt: 'Мароко - снимка 5 от пътуването',
        width: 550,
        height: 550,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-06.webp`,
        alt: 'Мароко - снимка 6 от пътуването',
        width: 550,
        height: 550,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-07.webp`,
        alt: 'Мароко - снимка 7 от пътуването',
        width: 1100,
        height: 550,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-08.webp`,
        alt: 'Мароко - снимка 8 от пътуването',
        width: 550,
        height: 550,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-09.webp`,
        alt: 'Мароко - снимка 9 от пътуването',
        width: 550,
        height: 550,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-10.webp`,
        alt: 'Мароко - снимка 10 от пътуването',
        width: 1100,
        height: 550,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-11.webp`,
        alt: 'Мароко - снимка 11 от пътуването',
        width: 1100,
        height: 550,
      },
      {
        src: `${AMELIA_MOROCCO_ASSET_BASE}/gallery/morocco-gallery-12.webp`,
        alt: 'Мароко - снимка 12 от пътуването',
        width: 550,
        height: 550,
      },
    ],
    faq: {
      heading: 'Всичко, което е добре да знаеш преди да тръгнем',
      intro:
        'Събрали сме въпросите, които ни задават най-често - от визи и багаж до пари, храна и облекло. Ако нещо липсва, пиши ни.',
      items: [
        {
          question: 'Какво прави това пътуване „само за жени“ и кой ще води групата?',
          answer: [
            'За нас разликата е преди всичко в атмосферата. Някои идват сами, други с приятелка, а след няколко дни вече сме компания от жени с общи интереси, избрали да преживеят точно тази дестинация заедно.',
            'Има неща, които друга жена разбира без обяснение - че си уморена, че днес просто искаш да си починеш в свободния следобед, че ти се говори за неща, които може би не би споделила в смесена група. И че, разбира се, ти трябва поне една свястна снимка.',
            'От София тръгвате заедно с представителка на Amelia Travel, а в Мароко към групата се присъединява местна екскурзоводка, която познава страната отвъд туристическите маршрути.',
            'Единственото изключение са шофьорите на местния транспорт, които може да са мъже. Те са опитни и проверени професионалисти, но не са част от екипа, с който прекарвате дните си.',
            'Ако не си сигурна дали това е твоето пътуване, пиши ни. Ще го обсъдим.',
          ],
        },
        {
          question: 'Мога ли да доведа сина си, партньора си или мъж от семейството?',
          answer: [
            'Не. Пътуването е само за жени и това важи без изключения, независимо от възрастта или роднинската връзка.',
          ],
        },
        {
          question: 'Подходящо ли е за жени, които пътуват сами?',
          answer: [
            'Да, и повечето участнички идват точно така. Тъй като тръгваме заедно от София, не ти се налага да се оправяш сама с летище, полет и трансфер в непозната държава. Можеш да делиш стая с друга пътничка - ние се грижим за подбора - или да си вземеш самостоятелна стая срещу доплащане.',
          ],
        },
        {
          question: 'На каква възраст са жените в групата?',
          answer: ['Обикновено между 20 и 45 години.'],
        },
        {
          question: 'Какво да очаквам от престоя в риад?',
          answer: [
            'Избираме риади, а не хотели, защото искаме нощувката да е част от пътуването, а не просто легло. Риадът е традиционна мароканска къща, построена около вътрешен двор, обикновено в самото сърце на медината.',
            'Затова обаче държим да те предупредим за няколко неща. Сградите са стари и отоплението и климатикът не работят навсякъде еднакво добре. Дебелите стени често спират Wi-Fi сигнала, преди да стигне до стаите, така че разчитай на мобилен интернет. И почти навсякъде има два-три етажа без асансьор, тоест багажът се качва по стълби.',
          ],
        },
        {
          question: 'Как да се обличам по време на пътуването?',
          answer: [
            'Съветваме те да покриваш раменете и коленете, особено в по-малките градове, селските райони и религиозните обекти. Мароко е мюсюлманска страна със силна култура на скромност и малкото съобразяване в облеклото се забелязва и оценява.',
            'Не е нужно да сменяш гардероба си. Леките, свободни дрехи вършат двойна работа, защото пазят и от слънцето, а преди тръгване ще ти изпратим списък какво да сложиш в куфара.',
          ],
        },
        {
          question: 'Колко физически натоварващо е пътуването?',
          answer: [
            'Програмата съчетава разходки пеша, кратки преходи и доста часове в микробус. В някои дни, като обиколката на Фес ел Бали или изкачването до Испанската джамия в Шефшауен, се върви по неравни калдъръмени улички и е добре да стъпваш уверено. Ездата с камила към лагера е кратка и спокойна.',
            'Средна физическа форма е напълно достатъчна и нищо в програмата не изисква спортна подготовка. Ако имаш конкретно притеснение, пиши ни преди да резервираш и ще ти отговорим честно.',
          ],
        },
        {
          question: 'Кое е най-доброто време за това пътуване?',
          answer: [
            'Затова сме избрали април. През пролетта и есента температурите са поносими и в планината, и в пустинята, и в градовете, докато лятото в Сахара може да е много горещо, а през зимата проходите понякога са затрупани със сняг. Следим прогнозата преди всяко тръгване и те уведомяваме, ако нещо може да промени програмата.',
          ],
        },
        {
          question: 'Нужна ли ми е виза за Мароко?',
          answer: [
            'Не. Българските граждани не се нуждаят от виза за престой до 90 дни. Паспортът ти трябва да е валиден поне шест месеца след датата на връщане. Ако пътуваш с паспорт на друга държава, провери изискванията в мароканското посолство, а ако не си сигурна, ще те насочим.',
          ],
        },
        {
          question: 'Каква е валутата и мога ли да плащам с карта?',
          answer: [
            'Валутата е мароканският дирхам (MAD). За ежедневните разходи ще ти трябват пари в брой, защото суковете, уличната храна, бакшишите и по-малките къщи за гости рядко приемат карти. В градовете има банкомати, в селските райони са рядкост.',
            'Най-удобно е да изтеглиш кеш в Казабланка, Фес или Маракеш, преди да тръгнем на юг. И едно важно нещо: дирхами не се обменят извън Мароко, така че към края тегли само колкото ще похарчиш.',
          ],
        },
        {
          question: 'Как да си осигуря пари в брой?',
          answer: [
            'Дирхамът е затворена валута и не се продава извън Мароко, така че не можеш да купиш предварително от България. Вземи евро в брой и ги обмени на място - на летището, в банка или в обменно бюро. Курсът е сходен навсякъде и не е нужно да търсиш най-доброто предложение.',
            'Тегленето от банкомат също работи, но повечето български банки удържат такса за теглене извън ЕС, така че провери условията си преди да тръгнеш.',
          ],
        },
        {
          question: 'Ще имам ли интернет и колко ще ми струва?',
          answer: [
            'Мароко не е в ЕС, тоест европейският роуминг не важи и цените са високи. Най-евтиното решение е eSIM карта, която активираш още от България, или местна SIM карта от летището в Казабланка.',
            'В риадите и хотелите има Wi-Fi, но заради дебелите стени често работи само в общите части. В пустинния лагер не разчитай на връзка изобщо.',
          ],
        },
        {
          question: 'Трябва ли ми адаптер за контактите?',
          answer: [
            'Не. Мароко ползва същите контакти и същото напрежение като България, така че зарядните ти работят директно.',
          ],
        },
        {
          question: 'Може ли да се пие вода от чешмата?',
          answer: [
            'По-добре пий бутилирана или филтрирана вода през цялото пътуване, включително когато си миеш зъбите в по-малките населени места. Бутилираната вода е евтина и се намира навсякъде по маршрута.',
          ],
        },
        {
          question: 'Как да се пазаря в суковете?',
          answer: [
            'Съветваме те да започнеш от около половината на исканата цена и да се срещнете някъде по средата. В суковете пазаренето е очаквано и е по-скоро разговор, отколкото търговия, така че не бързай и не се чувствай под натиск. Има обаче едно правило - не започвай да се пазариш за нещо, което не смяташ да купиш.',
            'Ако не си сигурна дали цената е честна, питай екскурзоводката - за това е там.',
          ],
        },
        {
          question: 'Какво да знам за бакшишите?',
          answer: [
            'Бакшишът е обичаен и се приема с благодарност. В ресторант се дават около 10-15% от сметката, на местните екскурзоводи по 50-100 MAD на ден, на шофьорите по 20-50 MAD, а на всеки, който помогне с багажа - нещо дребно. Преди тръгване ще получиш подробна информация, за да не се чудиш на място.',
          ],
        },
        {
          question: 'Безопасно ли е да се пътува в Мароко?',
          answer: [
            'Работим в Мароко от години и не бихме водили групи там, ако не смятахме, че е спокойно. Местният ни екип следи обстановката през цялото време, следим и препоръките на МВнР и ще те уведомим веднага, ако има нещо важно.',
            'Останалото е обичайното внимание, което би проявила във всеки голям град - наглеждай багажа си в оживените медини, ползвай транспорта, който сме уредили, и се вслушвай в съветите на екскурзоводката.',
          ],
        },
        {
          question: 'Нужни ли са ваксини или здравни предпазни мерки?',
          answer: [
            'Мароко не изисква конкретни ваксини за влизане, но си струва рутинните ти имунизации да са актуални. Някои пътуващи избират профилактика срещу хепатит А и коремен тиф, а личният ти лекар или пътнически здравен кабинет ще те посъветва според твоята история.',
            'Вземи си и малка аптечка със слънцезащита, сашета за рехидратация и лекарствата, които ползваш. В градовете аптеките са добре заредени, а в селските райони се намират по-трудно.',
          ],
        },
        {
          question: 'На какъв език се говори и трябва ли да знам арабски?',
          answer: [
            'Мароко е многоезична страна. Родните езици са даража (марокански арабски) и тамазигт (берберски), а френският се говори широко в градовете, хотелите и ресторантите. Английският е все по-разпространен в туристическите места, но и без него няма да имаш проблем, защото представителката на Amelia Travel и местната екскурзоводка са с теб през цялото време. Все пак няколко думи вършат чудеса - едно „шукран“ (благодаря) ще ти донесе усмивка почти навсякъде.',
          ],
        },
        {
          question: 'Каква храна да очаквам и съобразявате ли се с хранителни режими?',
          answer: [
            'Храната е голяма част от преживяването в Мароко - ароматни таджини, приготвяни бавно с часове, топъл хляб, свежи салати и пастила - онова необичайно, но прекрасно съчетание на сладко и солено. В много от местните заведения храната се поднася за споделяне, така че ще имаш възможност да опиташ по малко от всичко.',
            'Вегетариански варианти се предлагат почти навсякъде, а повечето хранителни режими и непоносимости могат да бъдат съобразени, ако ни предупредиш предварително. Просто ни кажи още при резервацията и ще се погрижим да уведомим местните ни партньори.',
            'Имай предвид, че в традиционните марокански заведения обикновено няма свинско месо и алкохол. В международните хотели и някои по-туристически ресторанти обаче могат да се предлагат и двете.',
          ],
        },
      ],
    },
    enquiry: {
      enabled: true,
      cta: 'Запази мястото си',
    },
    seo: {
      title: 'Мароко - сини градове и златни дюни | Пътуване само за жени | Amelia Travel',
      description:
        '12-дневно пътуване само за жени от София до Мароко: Казабланка, Шефшауен, Фес, дюните на Ерг Шеби, клисурата Тодра, Аит Бен Хаду и Маракеш.',
    },
    source: {
      legacyUrl: 'https://ameliatravel.bg/tour-item/morocco-tour/',
    },
    departureReturn: {
      departure: 'Летище София',
      return: 'Летище София',
    },
  };
}

function createMoroccoWomenOnlyTour(): TourDetailContent | undefined {
  const moroccoTour = TOUR_DETAIL_CONTENT.find((tour) => tour.slug === 'morocco-tour');

  if (!moroccoTour) {
    return undefined;
  }

  return {
    ...moroccoTour,
    id: MOROCCO_WOMEN_ONLY_TOUR_SLUG,
    slug: MOROCCO_WOMEN_ONLY_TOUR_SLUG,
    title: 'Morocco – Blue Cities & Golden Dunes | Women only',
    category: 'Women only',
    heroImage: {
      ...moroccoTour.heroImage,
      src: `${MOROCCO_WOMEN_ASSET_BASE}/morocco-women-only-bgr.webp`,
      alt: 'Women-only Morocco tour landscape',
    },
    gallery: moroccoTour.gallery.map((image, index) =>
      index === 2
        ? {
            ...image,
            src: `${MOROCCO_WOMEN_ASSET_BASE}/gallery/morocco-women-only-gallery-03.webp`,
            alt: 'Women-only Morocco tour gallery image 3',
          }
        : image,
    ),
    seo: {
      title: 'Morocco – Blue Cities & Golden Dunes | Women only | Omaya Travel',
      description:
        'Women-only Morocco tour through blue cities, imperial medinas, Sahara dunes and the High Atlas.',
    },
    source: {
      legacyUrl: 'https://omayatravel.com/tour-item/tour-item-morocco-women-only-tour/',
    },
  };
}

function createMoroccoSoloTravellersTour(): TourDetailContent | undefined {
  const moroccoTour = TOUR_DETAIL_CONTENT.find((tour) => tour.slug === 'morocco-tour');

  if (!moroccoTour) {
    return undefined;
  }

  return {
    ...moroccoTour,
    id: MOROCCO_SOLO_TRAVELLERS_TOUR_SLUG,
    slug: MOROCCO_SOLO_TRAVELLERS_TOUR_SLUG,
    title: 'Morocco – Blue Cities & Golden Dunes | Solo Travellers only',
    category: 'Solo Traveller Only',
    heroImage: {
      ...moroccoTour.heroImage,
      src: `${MOROCCO_SOLO_ASSET_BASE}/Morocco-Solo-Travelers-bgr.webp`,
      alt: 'Solo travellers Morocco tour landscape',
    },
    price: {
      ...moroccoTour.price,
      amount: 2550,
    },
    seo: {
      title: 'Morocco – Blue Cities & Golden Dunes | Solo Travellers only | Omaya Travel',
      description:
        'Solo travellers Morocco tour through blue cities, imperial medinas, Sahara dunes and the High Atlas.',
    },
    source: {
      legacyUrl: 'https://omayatravel.com/tour-item/tour-item-morocco-solo-travellers-tour/',
    },
  };
}
