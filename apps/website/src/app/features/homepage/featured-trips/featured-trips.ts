import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { OmayaAnalytics } from '../../../shared/analytics/omaya-analytics';
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
  @ViewChild('carousel') private readonly carousel?: ElementRef<HTMLElement>;
  @ViewChild('track') private readonly track?: ElementRef<HTMLElement>;
  @ViewChildren('tripCard') private readonly tripCards!: QueryList<ElementRef<HTMLElement>>;
  protected readonly i18n = inject(OmayaI18n);
  private readonly analytics = inject(OmayaAnalytics);
  private dragStartX = 0;
  private dragStartScrollLeft = 0;
  private isDragging = false;

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

  protected shiftTrip(direction: -1 | 1): void {
    const carousel = this.carousel?.nativeElement;
    const nearestIndex = carousel ? this.findNearestTripIndex(carousel) : null;
    const targetIndex = this.clampIndex((nearestIndex ?? this.activeTripIndex()) + direction);
    const targetCard = this.tripCards.get(targetIndex)?.nativeElement;

    if (!carousel || !targetCard || targetIndex === nearestIndex) {
      return;
    }

    carousel.scrollTo?.({
      left: this.getCardScrollLeft(targetCard),
      behavior: 'smooth',
    });

    this.activeTripIndex.set(targetIndex);
    this.analytics.trackEvent('browse_featured_trips', {
      direction: direction === 1 ? 'next' : 'previous',
      active_index: targetIndex,
    });
  }

  protected trackFeaturedTripClick(trip: FeaturedTrip): void {
    this.analytics.trackEvent('select_item', {
      item_id: trip.target,
      item_name: trip.title,
      item_category: trip.eyebrow,
      source: 'featured_trips',
    });
  }

  protected syncActiveTripFromScroll(event: Event): void {
    const carousel = event.currentTarget as HTMLElement | null;

    if (!carousel) {
      return;
    }

    const nearestIndex = this.findNearestTripIndex(carousel);

    if (nearestIndex === null) {
      return;
    }

    this.activeTripIndex.set(nearestIndex);
  }

  protected startDrag(event: PointerEvent): void {
    const carousel = event.currentTarget as HTMLElement | null;

    if (!carousel || event.button !== 0) {
      return;
    }

    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartScrollLeft = carousel.scrollLeft;
    carousel.setPointerCapture(event.pointerId);
    carousel.classList.add('featured-trips__carousel--dragging');
  }

  protected drag(event: PointerEvent): void {
    const carousel = event.currentTarget as HTMLElement | null;

    if (!carousel || !this.isDragging) {
      return;
    }

    event.preventDefault();
    carousel.scrollLeft = this.dragStartScrollLeft - (event.clientX - this.dragStartX);
  }

  protected endDrag(event: PointerEvent): void {
    const carousel = event.currentTarget as HTMLElement | null;

    if (!carousel) {
      return;
    }

    this.isDragging = false;
    carousel.classList.remove('featured-trips__carousel--dragging');

    if (carousel.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }

    const nearestIndex = this.findNearestTripIndex(carousel);

    if (nearestIndex === null) {
      return;
    }

    const targetCard = this.tripCards.get(nearestIndex)?.nativeElement;

    if (targetCard) {
      carousel.scrollTo?.({
        left: this.getCardScrollLeft(targetCard),
        behavior: 'smooth',
      });
    }
  }

  private findNearestTripIndex(carousel: HTMLElement): number | null {
    let nearestIndex: number | null = null;
    let nearestDistance = Number.POSITIVE_INFINITY;

    this.tripCards.forEach((card, index) => {
      const distance = Math.abs(this.getCardScrollLeft(card.nativeElement) - carousel.scrollLeft);

      if (distance < nearestDistance) {
        nearestIndex = index;
        nearestDistance = distance;
      }
    });

    return nearestIndex;
  }

  private getCardScrollLeft(card: HTMLElement): number {
    return card.offsetLeft - (this.track?.nativeElement.offsetLeft ?? 0);
  }

  private clampIndex(index: number): number {
    return Math.max(0, Math.min(index, this.trips().length - 1));
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
