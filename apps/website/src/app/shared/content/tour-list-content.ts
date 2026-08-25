export interface TourCardContent {
  title: string;
  category: 'Classic Tours' | 'Women only' | 'Solo Traveller Only' | 'Private Tours' | 'All Ages';
  destination: string;
  excerpt: string;
  image: string;
  alt: string;
  price: string;
  duration: string;
  target: string;
}

export interface TourListingPageContent {
  slug: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  heroAlt?: string;
  cards: readonly TourCardContent[];
  showFilters: boolean;
  introSections?: readonly {
    title: string;
    body: string;
    image: string;
    alt: string;
  }[];
}

export const TOUR_CARDS: readonly TourCardContent[] = [
  {
    title: 'Algeria Desert Expedition (Tadrart Rouge)',
    category: 'Classic Tours',
    destination: 'EUR1450 / per person',
    excerpt:
      "Explore Algeria's Tassili n'Ajjer on an 9-day guided desert expedition into the Tadrart - one of the Sahara's most remote and spectacular landscapes. Walk among 8,000-year-old Neolithic rock art, cross towering red dune fields, and camp under an extraordinary star-filled sky with Tuareg guides who know this wilderness intimately.",
    image: '/assets/images/home-page/trips-carousel/Algeria-trip.webp',
    alt: 'Red dunes and rock formations in Algeria',
    price: 'EUR1450',
    duration: '8 Days 7 Nights',
    target: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
  },
  {
    title: 'Bulgaria Beyond the Ordinary',
    category: 'Classic Tours',
    destination: 'Bulgaria',
    excerpt:
      'Ancient monasteries, Rhodope village rituals, Roman ruins, and a brutalist monument lost in the clouds - this 8-day Bulgaria journey goes far beyond the surface, into the living traditions and hidden landscapes that make the Balkans unlike anywhere else in Europe.',
    image: '/assets/images/home-page/trips-carousel/Tour-feature-image-2.webp',
    alt: 'Rila Monastery in Bulgaria',
    price: 'EUR1050',
    duration: '8 Days 7 Nights',
    target: '/tour-item/bulgaria-beyond-the-ordinary/',
  },
  {
    title: 'Kyrgyzstan Discovery Tour',
    category: 'Classic Tours',
    destination: 'Kyrgyzstan',
    excerpt:
      "Nine days across Kyrgyzstan's mountains and steppes, where ancient nomadic traditions are still very much alive. Sleep in yurts by Song Kul Lake, ride horses at dawn, share meals in family homestays, and witness eagle hunting and Kok Boru – the fierce horseback game that has united these people for generations.",
    image: '/assets/images/home-page/trips-carousel/Tour-feature-image-1.webp',
    alt: 'Kyrgyzstan mountain landscape',
    price: 'EUR1320',
    duration: '10 Days 9 Nights',
    target: '/tour-item/kyrgyzstan-tour/',
  },
  {
    title: 'Morocco – Blue Cities & Golden Dunes',
    category: 'Classic Tours',
    destination: 'Morocco',
    excerpt:
      "Somewhere between the blue-washed walls of Chefchaouen and a Berber family's tent deep in the Sahara, this journey becomes something more than travel. Twelve days through the imperial cities, cedar forests, desert dunes, and mountain passes of the most intoxicating country on earth.",
    image: '/assets/images/destinations/Marocco/morocco-bgr.webp',
    alt: 'Travellers in a desert landscape',
    price: 'EUR2300',
    duration: '12 Days 11 Nights',
    target: '/tour-item/morocco-tour/',
  },
  {
    title: 'Bulgaria Beyond the Ordinary | Women only',
    category: 'Women only',
    destination: 'Bulgaria',
    excerpt:
      'Ancient monasteries, Rhodope village rituals, Roman ruins, and a brutalist monument lost in the clouds - this 8-day Bulgaria journey goes far beyond the surface, into the living traditions and hidden landscapes that make the Balkans unlike anywhere else in Europe.',
    image: '/assets/images/women-tours/bulgaria-women-only-card-bgr.webp',
    alt: 'Bulgaria women-only tour preview',
    price: 'EUR1050',
    duration: '8 Days 7 Nights',
    target: '/tour-item/women-only-tour-bulgaria/',
  },
  {
    title: 'Kyrgyzstan Discovery Tour | Women only',
    category: 'Women only',
    destination: 'Kyrgyzstan',
    excerpt:
      "Nine days across Kyrgyzstan's mountains and steppes, where ancient nomadic traditions are still very much alive. Sleep in yurts by Song Kul Lake, ride horses at dawn, share meals in family homestays, and witness eagle hunting and Kok Boru – the fierce horseback game that has united these people for generations.",
    image: '/assets/images/women-tours/kyrgyzstan-women-only-card-bgr.webp',
    alt: 'Kyrgyzstan women-only tour preview',
    price: 'EUR1320',
    duration: '10 Days 9 Nights',
    target: '/tour-item/women-only-tour-kyrgyzstan/',
  },
  {
    title: 'Morocco – Blue Cities & Golden Dunes | Women only',
    category: 'Women only',
    destination: 'Morocco',
    excerpt:
      'Somewhere between the blue-washed walls of Chefchaouen and a Berber family’s tent deep in the Sahara, this journey becomes something more than travel. Twelve days through the imperial cities, cedar forests, desert dunes, and mountain passes of the most intoxicating country on earth — designed exclusively for solo travellers, so every person around you arrived the same way you did: independently, curious, and ready.',
    image: '/assets/images/women-tours/morocco-women-only-card-bgr.webp',
    alt: 'Morocco women-only tour preview',
    price: 'EUR2300',
    duration: '12 Days / 11 Nights',
    target: '/tour-item/tour-item-morocco-women-only-tour/',
  },
  {
    title: 'Morocco – Blue Cities & Golden Dunes | Solo Travellers only',
    category: 'Solo Traveller Only',
    destination: 'Morocco',
    excerpt:
      'Somewhere between the blue-washed walls of Chefchaouen and a Berber family’s tent deep in the Sahara, this journey becomes something more than travel. Twelve days through the imperial cities, cedar forests, desert dunes, and mountain passes of the most intoxicating country on earth — designed exclusively for solo travellers, so every person around you arrived the same way you did: independently, curious, and ready.',
    image: '/assets/images/solo-travellers/MoroccoSoloTravellers-tour-card-bgr.webp',
    alt: 'Morocco solo travellers tour preview',
    price: 'EUR2550',
    duration: '12 Days / 11 Nights',
    target: '/tour-item/tour-item-morocco-solo-travellers-tour/',
  },
];

export const TOUR_LISTING_PAGES: readonly TourListingPageContent[] = [
  {
    slug: 'tours-list',
    title: 'Tours List',
    subtitle:
      "Somewhere on this page is a journey you'll spend the next year dreaming about. Take your time.",
    heroImage: '/assets/images/destinations/classic-tours-bgr.webp',
    heroAlt: 'Small group travellers on a remote road',
    cards: TOUR_CARDS,
    showFilters: true,
  },
  {
    slug: 'classic-tours',
    title: 'Classic Tours',
    subtitle: '',
    heroImage: '/assets/images/destinations/classic-tours-bgr.webp',
    heroAlt: 'Classic tours landscape',
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
    slug: 'september-2027',
    title: 'September 2027 Tours',
    subtitle: 'Available departures for September 2027.',
    cards: TOUR_CARDS.filter(
      (card) =>
        card.target === '/tour-item/women-only-tour-bulgaria/' ||
        card.target === '/tour-item/algeria-desert-expedition-tadrart-rouge/',
    ),
    showFilters: true,
  },
];

export function findTourListingPage(slug: string | null | undefined): TourListingPageContent {
  return (
    TOUR_LISTING_PAGES.find((page) => page.slug === slug) ??
    TOUR_LISTING_PAGES.find((page) => page.slug === 'tours-list')!
  );
}
