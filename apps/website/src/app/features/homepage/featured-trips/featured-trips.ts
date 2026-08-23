import { Component, ElementRef, QueryList, ViewChildren, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OmayaI18n } from '../../../shared/i18n/omaya-i18n';

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
  protected readonly i18n = inject(OmayaI18n);

  protected readonly trips = computed<readonly FeaturedTrip[]>(() =>
    this.i18n.featuredTrips().map((trip, index) => ({
      ...trip,
      target: [
        '/tour-item/kyrgyzstan-tour/',
        '/tour-item/bulgaria-beyond-the-ordinary/',
        '/tour-item/morocco-tour/',
        '/tour-item/algeria-desert-expedition-tadrart-rouge/',
      ][index],
      image: this.buildCardImage(index),
    })),
  );
  protected readonly activeTripIndex = signal(0);
  protected readonly lastTripIndex = computed(() => this.trips().length - 1);

  protected shiftTrip(direction: -1 | 1): void {
    this.goToTrip(this.activeTripIndex() + direction);
  }

  protected goToTrip(index: number): void {
    const nextIndex = Math.min(Math.max(index, 0), this.lastTripIndex());

    this.activeTripIndex.set(nextIndex);
    this.tripCards
      .get(nextIndex)
      ?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  protected syncActiveTripFromScroll(event: Event): void {
    const carousel = event.currentTarget as HTMLElement | null;

    if (!carousel) {
      return;
    }

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (maxScrollLeft <= 0) {
      this.activeTripIndex.set(0);
      return;
    }

    if (carousel.scrollLeft >= maxScrollLeft - 1) {
      this.activeTripIndex.set(this.lastTripIndex());
      return;
    }

    const nextIndex = Math.round((carousel.scrollLeft / maxScrollLeft) * this.lastTripIndex());
    this.activeTripIndex.set(Math.min(Math.max(nextIndex, 0), this.lastTripIndex()));
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
