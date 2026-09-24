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
