import { Component, ElementRef, QueryList, ViewChildren, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FeaturedTrip {
  eyebrow: string;
  title: string;
  price: string;
  duration: string;
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
    alt: 'Kyrgyz eagle hunter on horseback below snow covered mountains',
    width: 1200,
    height: 900,
  },
  {
    src: '/assets/images/home-page/trips-carousel/Tour-feature-image-2.webp',
    alt: 'Rila Monastery with striped arches and domed church towers in Bulgaria',
    width: 1200,
    height: 900,
  },
  {
    src: '/assets/images/home-page/trips-carousel/Tour-feature-image-3.webp',
    alt: 'Blue painted street and local craft displays in Chefchaouen Morocco',
    width: 1200,
    height: 900,
  },
  {
    src: '/assets/images/home-page/trips-carousel/Algeria-trip.webp',
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
  @ViewChildren('tripCard') private readonly tripCards!: QueryList<ElementRef<HTMLElement>>;

  protected readonly trips: readonly FeaturedTrip[] = [
    {
      eyebrow: 'Classic Tours',
      title: 'Kyrgyzstan Tour',
      price: 'EUR1490',
      duration: '9 Days 8 Nights',
      description:
        "Travel through Kyrgyzstan's mountain passes, alpine lakes, yurt camps, and nomadic traditions on a small-group journey shaped by wild landscapes.",
      target: '/tour-item/kyrgyzstan-tour/',
      image: this.buildCardImage(0),
    },
    {
      eyebrow: 'Classic Tours',
      title: 'Bulgaria Beyond the Ordinary',
      price: 'EUR1050',
      duration: '8 Days 7 Nights',
      description:
        'Ancient monasteries, Rhodope village rituals, Roman ruins, and a brutalist monument lost in the clouds - this 8-day Bulgaria journey goes far beyond the surface.',
      target: '/tour-item/bulgaria-beyond-the-ordinary/',
      image: this.buildCardImage(1),
    },
    {
      eyebrow: 'Classic Tours',
      title: 'Morocco – Blue Cities & Golden Dunes',
      price: 'EUR2300',
      duration: '10 Days 9 Nights',
      description:
        "Somewhere between the blue-washed walls of Chefchaouen and a Berber family's tent deep in the Sahara, this journey becomes something more than travel.",
      target: '/tour-item/morocco-tour/',
      image: this.buildCardImage(2),
    },
    {
      eyebrow: 'Classic Tours',
      title: 'Algeria Desert Expedition (Tadrart Rouge)',
      price: 'EUR1450',
      duration: '8 Days 7 Nights',
      description:
        "Explore Algeria's Tassili n'Ajjer on an 8-day guided desert expedition into the Tadrart - one of the Sahara's most remote and spectacular landscapes. Walk among 8,000-year-old Neolithic rock art, cross towering red dune fields, and camp under an extraordinary star-filled sky with Tuareg guides who know this wilderness intimately.",
      target: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
      image: this.buildCardImage(3),
    },
  ];
  protected readonly activeTripIndex = signal(0);
  protected readonly lastTripIndex = this.trips.length - 1;

  protected shiftTrip(direction: -1 | 1): void {
    this.goToTrip(this.activeTripIndex() + direction);
    console.log(this.lastTripIndex);
    console.log(this.activeTripIndex());
  }

  protected goToTrip(index: number): void {
    const nextIndex = Math.min(Math.max(index, 0), this.lastTripIndex);

    this.activeTripIndex.set(nextIndex);
    this.tripCards
      .get(nextIndex)
      ?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

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
