import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FeaturedTrip {
  eyebrow: string;
  title: string;
  price: string;
  description: string;
  target: string;
  image: {
    src: string;
    srcset: string;
    sizes: string;
    width: number;
    height: number;
    alt: string;
    loading: 'lazy';
    fetchPriority: 'auto';
  };
}

const FEATURED_TRIP_IMAGES = [
  {
    src: '/assets/images/home-page/trips-carousel/Tour-feature-image-1.webp',
    alt: 'Rila Monastery with striped arches and domed church towers in Bulgaria',
    width: 1200,
    height: 900,
  },
  {
    src: '/assets/images/home-page/trips-carousel/Tour-feature-image-2.webp',
    alt: 'Blue painted street and local craft displays in Chefchaouen Morocco',
    width: 1200,
    height: 900,
  },
  {
    src: '/assets/images/home-page/trips-carousel/Tour-feature-image-3.webp',
    alt: 'Orange desert dune and sandstone rock formations in Tadrart Rouge Algeria',
    width: 1200,
    height: 900,
  },
] as const;

@Component({
  selector: 'app-featured-trips',
  imports: [RouterLink],
  templateUrl: './featured-trips.html',
  styleUrl: './featured-trips.scss',
})
export class FeaturedTrips {
  protected readonly trips: readonly FeaturedTrip[] = [
    {
      eyebrow: 'Classic Tours',
      title: 'Bulgaria Beyond the Ordinary',
      price: 'EUR1050',
      description:
        'Ancient monasteries, Rhodope village rituals, Roman ruins, and a brutalist monument lost in the clouds - this 8-day Bulgaria journey goes far beyond the surface.',
      target: '/tour-item/bulgaria-beyond-the-ordinary/',
      image: this.buildCardImage(0),
    },
    {
      eyebrow: 'Classic Tours',
      title: 'Morocco - Blue Cities & Golden Dunes',
      price: 'EUR2300',
      description:
        "Somewhere between the blue-washed walls of Chefchaouen and a Berber family's tent deep in the Sahara, this journey becomes something more than travel.",
      target: '/tour-item/morocco-tour/',
      image: this.buildCardImage(1),
    },
    {
      eyebrow: 'Classic Tours',
      title: 'Algeria Desert Expedition (Tadrart Rouge)',
      price: 'EUR1450',
      description:
        "Explore Algeria's Tassili n'Ajjer on an 8-day guided desert expedition into the Tadrart, one of the Sahara's most remote and spectacular landscapes.",
      target: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
      image: this.buildCardImage(2),
    },
  ];

  private buildCardImage(index: number): FeaturedTrip['image'] {
    const image = FEATURED_TRIP_IMAGES[index];

    return {
      ...image,
      srcset: `${image.src} ${image.width}w`,
      sizes: '(min-width: 70rem) 32vw, (min-width: 44rem) 48vw, 100vw',
      loading: 'lazy',
      fetchPriority: 'auto',
    };
  }
}
