import { DatePipe, NgClass } from '@angular/common';
import { Component, HostListener, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import {
  TourDetailContent,
  TourFaqItem,
  TourHighlight,
  TourImage,
  TourItineraryDay,
  findTourBySlug,
} from '../../shared/content/tour-content';

type TourTab = 'information' | 'tour-plan' | 'gallery' | 'faq';

interface TourTabDefinition {
  id: TourTab;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-tour-detail',
  imports: [DatePipe, NgClass, RouterLink],
  templateUrl: './tour-detail.html',
  styleUrl: './tour-detail.scss',
})
export class TourDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly tourSlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('tourSlug'))),
    { initialValue: this.route.snapshot.paramMap.get('tourSlug') },
  );

  protected readonly activeTab = signal<TourTab>('information');
  protected readonly activeGalleryIndex = signal<number | null>(null);
  protected readonly tour = computed(() => findTourBySlug(this.tourSlug()));
  protected readonly activeGalleryImage = computed<TourImage | null>(() => {
    const tour = this.tour();
    const index = this.activeGalleryIndex();

    if (!tour || index === null) {
      return null;
    }

    return tour.gallery[index] ?? null;
  });
  protected readonly tabs = computed<readonly TourTabDefinition[]>(() => {
    const tabs: TourTabDefinition[] = [
      { id: 'information', label: 'Information', icon: 'i' },
      { id: 'tour-plan', label: 'Tour Plan', icon: 'book' },
      { id: 'gallery', label: 'Gallery', icon: 'cam' },
    ];

    if (this.tour()?.faq) {
      tabs.push({ id: 'faq', label: 'FAQ', icon: '?' });
    }

    return tabs;
  });
  protected readonly contentClasses = computed(() => ({
    'tour-detail__content--gallery': this.activeTab() === 'gallery',
  }));

  constructor() {
    effect(() => {
      this.tourSlug();
      this.activeTab.set('information');
      this.activeGalleryIndex.set(null);
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeGallery();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    this.showPreviousGalleryImage();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    this.showNextGalleryImage();
  }

  protected setTab(tab: TourTab): void {
    this.activeTab.set(tab);
  }

  protected openGallery(index: number): void {
    this.activeGalleryIndex.set(index);
  }

  protected closeGallery(): void {
    this.activeGalleryIndex.set(null);
  }

  protected showPreviousGalleryImage(): void {
    this.updateGalleryIndex(-1);
  }

  protected showNextGalleryImage(): void {
    this.updateGalleryIndex(1);
  }

  protected priceLabel(tour: TourDetailContent): string {
    return `${tour.price.currency}${tour.price.amount}`;
  }

  protected durationLabel(tour: TourDetailContent): string {
    return `${tour.duration.days} Days ${tour.duration.nights} Nights`;
  }

  protected groupSizeLabel(tour: TourDetailContent): string {
    return `${tour.groupSize.min} - ${tour.groupSize.max} people`;
  }

  protected mealsLabel(day: TourItineraryDay): string {
    return day.meals.join(', ');
  }

  protected highlightTitleText(highlight: TourHighlight): string {
    return `${highlight.title.text}${highlight.title.linkText}`;
  }

  protected faqAnswerId(item: TourFaqItem, index: number): string {
    return `${item.question.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
  }

  private updateGalleryIndex(direction: -1 | 1): void {
    const galleryLength = this.tour()?.gallery.length ?? 0;

    if (this.activeGalleryIndex() === null || galleryLength === 0) {
      return;
    }

    this.activeGalleryIndex.update((index) =>
      index === null ? index : (index + direction + galleryLength) % galleryLength,
    );
  }
}
