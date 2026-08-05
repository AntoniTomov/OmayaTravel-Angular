import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, computed, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import {
  HOMEPAGE_HERO,
  TRIP_SEARCH_DESTINATIONS,
  TRIP_SEARCH_MONTHS,
} from '../../shared/content/homepage-content';
import { buildMediaImageAttributes } from '../../shared/media';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage implements OnDestroy {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private intervalId: ReturnType<typeof setInterval> | null;
  private readonly reducedMotion = this.prefersReducedMotion();

  protected readonly hero = HOMEPAGE_HERO;
  protected readonly destinations = TRIP_SEARCH_DESTINATIONS;
  protected readonly months = TRIP_SEARCH_MONTHS;
  protected readonly activeSlideIndex = signal(0);
  protected readonly selectedDestination = signal('');
  protected readonly selectedMonth = signal('');
  protected readonly searchError = signal('');
  protected readonly activeSlide = computed(() => this.hero.slides[this.activeSlideIndex()]);
  protected readonly activeSlideImage = computed(() =>
    buildMediaImageAttributes(this.activeSlide().image, {
      use: 'hero',
      sizes: '100vw',
      priority: this.activeSlideIndex() === 0,
    }),
  );

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
    const destination = this.destinations.find(
      (item) => item.target === this.selectedDestination(),
    );

    if (!destination && this.selectedMonth()) {
      this.searchError.set('Choose a destination to find a trip.');
      return;
    }

    if (!destination) {
      this.searchError.set('Choose where you want to go.');
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
