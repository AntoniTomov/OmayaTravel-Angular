// Tour cards: the short summaries listing pages, the homepage and the site configs show.
// Kept apart from tour-list-content, which derives listings from the tour catalogue, so that the
// site configs, loaded on every page, do not pull in every tour's full copy with them.

export interface TourCardContent {
  title: string;
  category: 'Classic Tours' | 'Women only' | 'Solo Traveller Only' | 'Private Tours' | 'All Ages';
  /**
   * Visible category text. Falls back to `category` when omitted, so localised
   * sites (Amelia is Bulgarian-first) can show a translated label while filters
   * and analytics keep using the stable English category key.
   */
  categoryLabel?: string;
  destination: string;
  excerpt: string;
  image: string;
  alt: string;
  price: string;
  duration: string;
  target: string;
}

export const TOUR_CARDS: readonly TourCardContent[] = [
  {
    title: 'Algeria Desert Expedition (Tadrart Rouge)',
    category: 'Classic Tours',
    destination: 'EUR1450 / per person',
    excerpt:
      "Explore Algeria's Tassili n'Ajjer on a 9-day guided desert expedition into the Tadrart - one of the Sahara's most remote and spectacular landscapes. Walk among 8,000-year-old Neolithic rock art, cross towering red dune fields, and camp under an extraordinary star-filled sky with Tuareg guides who know this wilderness intimately.",
    image: '/assets/images/home-page/trips-carousel/Algeria-trip.webp',
    alt: 'Red dunes and rock formations in Algeria',
    price: 'EUR1450',
    duration: '9 Days 8 Nights',
    target: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
  },
  {
    title: 'Deccan Discovery: Mumbai to Kanha',
    category: 'Classic Tours',
    destination: 'India',
    excerpt:
      'India is not one place to see. It is many different worlds, sometimes just a journey apart. Over 10 days, this trip takes you through three of them: the energy of the city, the stories carved into stone, and the quiet of the forest.',
    image: '/assets/images/home-page/trips-carousel/India-trip.webp',
    alt: 'A tiger in Kanha National Park, India',
    price: 'EUR2400',
    duration: '10 Days 9 Nights',
    target: '/tour-item/india-mumbai-ajanta-ellora-kanha-tour/',
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
      "Ten days across Kyrgyzstan's mountains and steppes, where ancient nomadic traditions are still very much alive. Sleep in yurts by Song Kul Lake, ride horses at dawn, share meals in family homestays, and witness eagle hunting and Kok Boru – the fierce horseback game that has united these people for generations.",
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
    alt: 'Traditional Moroccan architecture and decorative tilework',
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
      "Ten days across Kyrgyzstan's mountains and steppes, where ancient nomadic traditions are still very much alive. Sleep in yurts by Song Kul Lake, ride horses at dawn, share meals in family homestays, and witness eagle hunting and Kok Boru – the fierce horseback game that has united these people for generations.",
    image: '/assets/images/women-tours/kyrgyzstan-women-only-card-bgr.webp',
    alt: 'Kyrgyzstan women-only tour preview',
    price: 'EUR1320',
    duration: '10 Days 9 Nights',
    target: '/tour-item/women-only-tour-kyrgyzstan/',
  },
  {
    title: 'She Explores – India’s Royal & Spiritual Trail | Women only',
    category: 'Women only',
    destination: 'India',
    excerpt:
      'Fourteen days, a small group of women, and a country that takes its time to explain itself. We start in Delhi, where the old and new cities sit side by side, then follow the road to the Pink City of Jaipur, the Taj Mahal in Agra and the ghats of Varanasi.',
    image: '/assets/images/women-tours/india-women-only-card.webp',
    alt: 'India women-only tour preview',
    price: 'EUR1690',
    duration: '14 Days 13 Nights',
    target: '/tour-item/women-only-tour-india/',
  },
  {
    title: 'Namibia: From the Cederberg to Etosha | Women only',
    category: 'Women only',
    destination: 'Namibia',
    excerpt:
      'Twelve days, two countries, and a landscape that keeps changing outside the window. We start in the mountains of South Africa’s Western Cape and cross into Namibia, where the scale of things shifts – the Fish River Canyon, one of the largest on earth; the red dunes of the Namib at first light; the cool Atlantic air of Swakopmund. Further north, granite peaks hold rock art painted thousands of years ago, and the trip ends at the waterholes of Etosha, where you sit quietly and let the animals come to you.',
    image: '/assets/images/women-tours/Namibia/Sossusvlei_dune-card.webp',
    alt: 'Namibia women-only tour preview',
    price: 'EUR3450',
    duration: '12 Days 11 Nights',
    target: '/tour-item/women-only-tour-namibia/',
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
