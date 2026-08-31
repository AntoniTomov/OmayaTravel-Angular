import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  OnDestroy,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';

import { ActiveSite } from '../../../sites/active-site';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { FormHoneypot } from '../../shared/forms/form-honeypot';
import { FormStatus } from '../../shared/forms/form-status';
import { submitNewsletter } from '../../shared/forms/public-form-api';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';
import { buildMediaImageAttributes } from '../../shared/media';
import { BlogPosts } from './blog-posts/blog-posts';
import { FeaturedTrips } from './featured-trips/featured-trips';
import { MissionSection } from './mission-section/mission-section';
import { PrivateTours } from './private-tours/private-tours';
import { TravelMatch } from './travel-match/travel-match';

@Component({
  selector: 'app-homepage',
  imports: [
    TravelMatch,
    FeaturedTrips,
    MissionSection,
    PrivateTours,
    BlogPosts,
    FormHoneypot,
    FormStatus,
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage implements OnDestroy {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly analytics = inject(OmayaAnalytics);
  private readonly activeSite = inject(ActiveSite);
  protected readonly i18n = inject(OmayaI18n);
  private intervalId: ReturnType<typeof setInterval> | null;
  private readonly reducedMotion = this.prefersReducedMotion();

  protected readonly hero = computed(() => this.activeSite.site().content.hero);
  protected readonly siteFeatures = computed(() => this.activeSite.site().features);
  protected readonly destinations = computed(
    () => this.activeSite.site().content.tripSearchDestinations,
  );
  protected readonly months = computed(() => this.activeSite.site().content.tripSearchMonths);
  protected readonly activeSlideIndex = signal(0);
  protected readonly selectedDestination = signal('');
  protected readonly selectedMonth = signal('');
  protected readonly activeTripDropdown = signal<'destination' | 'month' | null>(null);
  protected readonly searchError = signal('');
  protected readonly newsletterStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly newsletterMessage = signal('');
  protected readonly activeSlide = computed(() => this.hero().slides[this.activeSlideIndex()]);
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
      srcset:
        slide.visualSrcset?.map((variant) => `${variant.src} ${variant.width}w`).join(', ') ??
        `${slide.visualSrc} ${slide.image.width}w`,
    };
  });

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;

    if (!target?.closest('.homepage__trip-field')) {
      this.activeTripDropdown.set(null);
    }
  }

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
    this.activeTripDropdown.set(null);
    this.analytics.trackEvent('select_destination', {
      destination_path: value || '(none)',
      source: 'homepage_search',
    });
  }

  protected updateMonth(value: string): void {
    this.selectedMonth.set(value);
    this.activeTripDropdown.set(null);
    this.analytics.trackEvent('select_month', {
      month: value || '(none)',
      source: 'homepage_search',
    });
  }

  protected submitTripSearch(): void {
    const destination = this.destinations().find(
      (item) => item.target === this.selectedDestination(),
    );

    if (!destination && this.selectedMonth()) {
      this.trackTripSearch('missing_destination');
      this.searchError.set(this.i18n.t('homepage.chooseDestinationWithMonth'));
      return;
    }

    if (!destination) {
      this.trackTripSearch('missing_destination');
      this.searchError.set(this.i18n.t('homepage.chooseDestination'));
      return;
    }

    this.trackTripSearch('success');
    void this.router.navigateByUrl(destination.target, {
      state: this.selectedMonth()
        ? {
            month: this.selectedMonth(),
          }
        : undefined,
    });
  }

  protected toggleTripDropdown(dropdown: 'destination' | 'month', event: MouseEvent): void {
    event.stopPropagation();
    this.activeTripDropdown.update((activeDropdown) =>
      activeDropdown === dropdown ? null : dropdown,
    );
  }

  protected destinationLabel(): string {
    return (
      this.destinations().find((destination) => destination.target === this.selectedDestination())
        ?.label ?? this.i18n.t('homepage.whereTo')
    );
  }

  protected monthLabel(): string {
    return this.selectedMonth() || this.i18n.t('homepage.when');
  }

  protected async submitNewsletterForm(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const email = String(formData.get('email') ?? '').trim();
    const honeypot = String(formData.get('website') ?? '');

    this.newsletterStatus.set('sending');
    this.newsletterMessage.set('');

    const result = await submitNewsletter({
      email,
      source: 'home page',
      honeypot,
    });

    if (result.ok) {
      form.reset();
      this.newsletterStatus.set('sent');
      this.newsletterMessage.set('Thank you for joining our newsletter.');
      this.analytics.trackEvent('sign_up', {
        method: 'newsletter',
        source: 'home page',
      });
      return;
    }

    this.newsletterStatus.set('error');
    this.newsletterMessage.set(result.message ?? 'We could not subscribe you right now.');
  }

  private createAutoAdvance(): ReturnType<typeof setInterval> {
    return setInterval(() => {
      this.activeSlideIndex.update((index) => (index + 1) % this.hero().slides.length);
    }, 7000);
  }

  private pauseAutoAdvance(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private trackTripSearch(status: 'success' | 'missing_destination'): void {
    this.analytics.trackEvent('search_trip', {
      status,
      destination_path: this.selectedDestination() || '(none)',
      month: this.selectedMonth() || '(none)',
    });
  }

  private prefersReducedMotion(): boolean {
    const defaultView = this.document.defaultView;

    if (!defaultView?.matchMedia) {
      return true;
    }

    return defaultView.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
