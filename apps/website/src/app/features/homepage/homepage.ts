import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, computed, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { HOMEPAGE_HERO } from '../../shared/content/homepage-content';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';
import { buildMediaImageAttributes } from '../../shared/media';
import { BlogPosts } from './blog-posts/blog-posts';
import { FeaturedTrips } from './featured-trips/featured-trips';
import { MissionSection } from './mission-section/mission-section';
import { PrivateTours } from './private-tours/private-tours';
import { TravelMatch } from './travel-match/travel-match';

@Component({
  selector: 'app-homepage',
  imports: [TravelMatch, FeaturedTrips, MissionSection, PrivateTours, BlogPosts],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage implements OnDestroy {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  protected readonly i18n = inject(OmayaI18n);
  private intervalId: ReturnType<typeof setInterval> | null;
  private readonly reducedMotion = this.prefersReducedMotion();

  protected readonly hero = HOMEPAGE_HERO;
  protected readonly destinations = computed(() => this.i18n.destinations());
  protected readonly months = computed(() => this.i18n.months());
  protected readonly activeSlideIndex = signal(0);
  protected readonly selectedDestination = signal('');
  protected readonly selectedMonth = signal('');
  protected readonly searchError = signal('');
  protected readonly activeSlide = computed(() => this.hero.slides[this.activeSlideIndex()]);
  protected readonly activeSlideImage = computed(() => {
    const slide = this.activeSlide();
    const attributes = buildMediaImageAttributes(slide.image, {
      use: 'hero',
      sizes: '100vw',
      priority: this.activeSlideIndex() === 0,
    });

    if (!slide.visualSrc) {
      return attributes;
    }

    return {
      ...attributes,
      src: slide.visualSrc,
      srcset: `${slide.visualSrc} ${slide.image.width}w`,
    };
  });

  constructor() {
    this.intervalId = this.reducedMotion ? null : this.createAutoAdvance();

    effect(() => {
      if (this.selectedDestination()) {
        this.searchError.set('');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  protected setSlide(index: number): void {
    this.activeSlideIndex.set(index);
    this.pauseAutoAdvance();
  }

  protected updateDestination(value: string): void {
    this.selectedDestination.set(value);
  }

  protected updateMonth(value: string): void {
    this.selectedMonth.set(value);
  }

  protected submitTripSearch(): void {
    const destination = this.destinations().find(
      (item) => item.target === this.selectedDestination(),
    );

    if (!destination && this.selectedMonth()) {
      this.searchError.set(this.i18n.t('homepage.chooseDestinationWithMonth'));
      return;
    }

    if (!destination) {
      this.searchError.set(this.i18n.t('homepage.chooseDestination'));
      return;
    }

    void this.router.navigateByUrl(destination.target, {
      state: this.selectedMonth()
        ? {
            month: this.selectedMonth(),
          }
        : undefined,
    });
  }

  private createAutoAdvance(): ReturnType<typeof setInterval> {
    return setInterval(() => {
      this.activeSlideIndex.update((index) => (index + 1) % this.hero.slides.length);
    }, 7000);
  }

  private pauseAutoAdvance(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private prefersReducedMotion(): boolean {
    const defaultView = this.document.defaultView;

    if (!defaultView?.matchMedia) {
      return true;
    }

    return defaultView.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
