import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  PLATFORM_ID,
  ViewChild,
  ViewChildren,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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

interface TempFeaturedTrip {
  trip: FeaturedTrip;
  originalIndex: number;
  tempId: string;
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
export class FeaturedTrips implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('carousel') private readonly carousel?: ElementRef<HTMLElement>;
  @ViewChildren('tripCard') private readonly tripCards!: QueryList<ElementRef<HTMLElement>>;
  protected readonly i18n = inject(OmayaI18n);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly bufferSize = 3;
  private dragStartX = 0;
  private dragStartScrollLeft = 0;
  private isDragging = false;
  private isCommittingMove = false;
  private resizeHandler?: () => void;

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
  protected readonly tempTours = signal<readonly TempFeaturedTrip[]>([]);
  protected readonly activeTripIndex = signal(0);
  private readonly visibleStartIndex = signal(0);
  private readonly visibleCount = signal(3);

  ngOnInit(): void {
    this.visibleCount.set(this.getVisibleCount());
    this.rebuildTempTours();
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.resizeHandler = () => {
      this.visibleCount.set(this.getVisibleCount());
      this.rebuildTempTours();
      queueMicrotask(() => this.resetCarouselToBuffer());
    };
    window.addEventListener('resize', this.resizeHandler);

    queueMicrotask(() => {
      this.rebuildTempTours();
      this.resetCarouselToBuffer();
    });
  }

  ngOnDestroy(): void {
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  protected shiftTrip(direction: -1 | 1): void {
    this.moveBy(direction, true);
  }

  private moveBy(offset: number, smooth: boolean): void {
    const carousel = this.carousel?.nativeElement;
    const targetIndex = this.bufferSize + offset;
    const targetCard = this.tripCards.get(targetIndex)?.nativeElement;

    if (!carousel || !targetCard || this.isCommittingMove || offset === 0) {
      return;
    }

    this.isCommittingMove = true;

    carousel.scrollTo?.({
      left: targetCard.offsetLeft,
      behavior: smooth ? 'smooth' : 'auto',
    });

    window.setTimeout(() => this.commitMove(offset), smooth ? 260 : 0);
  }

  protected syncActiveTripFromScroll(event: Event): void {
    const carousel = event.currentTarget as HTMLElement | null;

    if (!carousel || this.isCommittingMove) {
      return;
    }

    const nearestIndex = this.findNearestTempIndex(carousel);

    if (nearestIndex === null) {
      return;
    }

    const nearestTour = this.tempTours()[nearestIndex];

    if (nearestTour) {
      this.activeTripIndex.set(nearestTour.originalIndex);
    }
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

    const nearestIndex = this.findNearestTempIndex(carousel);

    if (nearestIndex === null) {
      return;
    }

    this.moveBy(nearestIndex - this.bufferSize, false);
  }

  private findNearestTempIndex(carousel: HTMLElement): number | null {
    let nearestIndex: number | null = null;
    let nearestDistance = Number.POSITIVE_INFINITY;

    this.tripCards.forEach((card, index) => {
      const distance = Math.abs(card.nativeElement.offsetLeft - carousel.scrollLeft);

      if (distance < nearestDistance) {
        nearestIndex = index;
        nearestDistance = distance;
      }
    });

    return nearestIndex;
  }

  private commitMove(offset: number): void {
    const trips = this.trips();

    if (trips.length === 0) {
      this.isCommittingMove = false;
      return;
    }

    const nextStartIndex = this.normalizeIndex(this.visibleStartIndex() + offset, trips.length);
    this.visibleStartIndex.set(nextStartIndex);
    this.activeTripIndex.set(nextStartIndex);
    this.rebuildTempTours();

    queueMicrotask(() => {
      this.resetCarouselToBuffer();
      this.isCommittingMove = false;
    });
  }

  private rebuildTempTours(): void {
    const trips = this.trips();

    if (trips.length === 0) {
      this.tempTours.set([]);
      return;
    }

    const startIndex = this.visibleStartIndex();
    const itemCount = this.bufferSize + this.visibleCount() + this.bufferSize;
    const firstIndex = startIndex - this.bufferSize;

    this.tempTours.set(
      Array.from({ length: itemCount }, (_, tempIndex) => {
        const originalIndex = this.normalizeIndex(firstIndex + tempIndex, trips.length);

        return {
          trip: trips[originalIndex],
          originalIndex,
          tempId: `${firstIndex + tempIndex}:${originalIndex}`,
        };
      }),
    );
  }

  private resetCarouselToBuffer(): void {
    const carousel = this.carousel?.nativeElement;
    const targetCard = this.tripCards.get(this.bufferSize)?.nativeElement;

    if (!carousel || !targetCard) {
      return;
    }

    carousel.style.scrollBehavior = 'auto';
    carousel.scrollLeft = targetCard.offsetLeft;
    carousel.style.scrollBehavior = '';
  }

  private getVisibleCount(): number {
    if (!this.isBrowser) {
      return 3;
    }

    if (window.matchMedia('(max-width: 44rem)').matches) {
      return 1;
    }

    if (window.matchMedia('(max-width: 70rem)').matches) {
      return 2;
    }

    return 3;
  }

  private normalizeIndex(index: number, length: number): number {
    return ((index % length) + length) % length;
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
