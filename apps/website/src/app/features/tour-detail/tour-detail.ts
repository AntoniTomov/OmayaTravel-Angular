import { DatePipe, NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { ActiveSite } from '../../../sites/active-site';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';
import { FormStatus } from '../../shared/forms/form-status';
import { submitPublicForm } from '../../shared/forms/public-form-api';
import {
  TourDetailContent,
  TourFaqItem,
  TourHighlight,
  TourImage,
  TourIntroductionParagraph,
  TourItineraryDay,
  TOUR_DETAIL_CONTENT,
  findTourBySlug,
} from '../../shared/content/tour-content';

type TourTab = 'information' | 'tour-plan' | 'gallery' | 'faq';

interface TourTabDefinition {
  id: TourTab;
  label: string;
  icon: string;
}

interface TourDepartureWindow {
  start: Date;
  end: Date;
  iso: string;
  tourTitle: string;
}

interface CalendarDay {
  date: Date;
  iso: string;
  label: string;
  isCurrentMonth: boolean;
  isTourPeriod: boolean;
  isStartDate: boolean;
  isSelected: boolean;
  isSelectable: boolean;
}

@Component({
  selector: 'app-tour-detail',
  imports: [DatePipe, NgClass, MatIconModule, RouterLink, FormStatus],
  templateUrl: './tour-detail.html',
  styleUrl: './tour-detail.scss',
})
export class TourDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly analytics = inject(OmayaAnalytics);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly activeSite = inject(ActiveSite);
  protected readonly i18n = inject(OmayaI18n);
  private readonly tourSlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('tourSlug'))),
    { initialValue: this.route.snapshot.paramMap.get('tourSlug') },
  );

  protected readonly activeTab = signal<TourTab>('information');
  protected readonly activeGalleryIndex = signal<number | null>(null);
  private galleryTouchStartX = 0;
  protected readonly openFaqIndex = signal<number | null>(null);
  protected readonly isBookingCalendarOpen = signal(false);
  protected readonly selectedBookingDate = signal<string | null>(null);
  protected readonly bookingSubmitStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly bookingSubmitMessage = signal('');
  protected readonly calendarMonth = signal(this.startOfMonth(new Date()));
  protected readonly calendarWeekdays = computed(() => this.i18n.weekdays());
  protected readonly todayIso = this.toIsoDate(new Date());
  protected readonly tour = computed(() =>
    findTourBySlug(this.tourSlug(), this.activeSite.site().id),
  );
  protected readonly destinationDepartureWindows = computed<readonly TourDepartureWindow[]>(() => {
    const tour = this.tour();

    if (!tour) {
      return [];
    }

    return [
      tour,
      ...TOUR_DETAIL_CONTENT.filter(
        (candidate) =>
          candidate.slug !== tour.slug &&
          candidate.destination.country === tour.destination.country,
      ),
    ].flatMap((candidate) =>
      candidate.departures.map((departure) => {
        const start = this.parseIsoDate(departure);
        const end = this.addDays(start, candidate.duration.days - 1);

        return {
          start,
          end,
          iso: departure,
          tourTitle: candidate.title,
        };
      }),
    );
  });
  protected readonly calendarMonthLabel = computed(() =>
    this.calendarMonth().toLocaleDateString(this.dateLocale(), {
      month: 'long',
      year: 'numeric',
    }),
  );
  protected readonly calendarDays = computed<readonly CalendarDay[]>(() => {
    const month = this.calendarMonth();
    const firstDay = this.startOfMonth(month);
    const gridStart = this.addDays(firstDay, -this.weekdayOffset(firstDay));
    const selectedIso = this.selectedBookingDate();
    const today = this.parseIsoDate(this.todayIso);

    return Array.from({ length: 42 }, (_, index) => {
      const date = this.addDays(gridStart, index);
      const iso = this.toIsoDate(date);
      const matchingStart = this.destinationDepartureWindows().find((window) => window.iso === iso);
      const isPast = date < today;
      const isTourPeriod = this.destinationDepartureWindows().some(
        (window) => date >= window.start && date <= window.end,
      );
      const isCurrentMonth = date.getMonth() === month.getMonth();

      return {
        date,
        iso,
        label: matchingStart
          ? `${date.toLocaleDateString(this.dateLocale())}, ${
              isPast
                ? this.i18n.t('tourDetail.dayPastStartDate')
                : this.i18n.t('tourDetail.dayStartDate')
            } ${this.i18n.t('tourDetail.dayFor')} ${matchingStart.tourTitle}`
          : `${date.toLocaleDateString(this.dateLocale())}, ${
              isTourPeriod
                ? this.i18n.t('tourDetail.dayTourPeriod')
                : this.i18n.t('tourDetail.dayUnavailable')
            }`,
        isCurrentMonth,
        isTourPeriod,
        isStartDate: Boolean(matchingStart),
        isSelected: selectedIso === iso,
        isSelectable: Boolean(matchingStart) && !isPast,
      };
    });
  });
  protected readonly selectedBookingDateLabel = computed(() => {
    const selectedDate = this.selectedBookingDate();

    if (!selectedDate) {
      return this.i18n.t('tourDetail.selectStartDate');
    }

    return this.parseIsoDate(selectedDate).toLocaleDateString(this.dateLocale(), {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  });
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
      { id: 'information', label: this.i18n.t('tourDetail.tabInformation'), icon: 'info' },
      { id: 'tour-plan', label: this.i18n.t('tourDetail.tabTourPlan'), icon: 'menu_book' },
      { id: 'gallery', label: this.i18n.t('tourDetail.tabGallery'), icon: 'photo_camera' },
    ];

    if (this.tour()?.faq) {
      tabs.push({ id: 'faq', label: this.i18n.t('tourDetail.tabFaq'), icon: 'help_outline' });
    }

    return tabs;
  });
  protected readonly contentClasses = computed(() => ({
    'tour-detail__content--gallery': this.activeTab() === 'gallery',
  }));
  private trackedTourSlug: string | null = null;

  constructor() {
    effect(() => {
      this.tourSlug();
      this.activeTab.set('information');
      this.activeGalleryIndex.set(null);
      this.openFaqIndex.set(null);
      this.isBookingCalendarOpen.set(false);
      this.selectedBookingDate.set(null);

      const firstDeparture = this.destinationDepartureWindows()[0];

      if (firstDeparture) {
        this.calendarMonth.set(this.startOfMonth(firstDeparture.start));
      }
    });

    effect(() => {
      const tour = this.tour();

      if (!tour || this.trackedTourSlug === tour.slug) {
        return;
      }

      this.trackedTourSlug = tour.slug;
      this.analytics.trackEvent('view_item', {
        item_id: tour.slug,
        item_name: tour.title,
        item_category: tour.category,
        price: tour.price.amount,
        currency: tour.price.currency,
      });
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeGallery();
    this.isBookingCalendarOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Element | null;

    if (
      !target ||
      this.host.nativeElement.querySelector('.tour-detail__date-field')?.contains(target)
    ) {
      return;
    }

    this.isBookingCalendarOpen.set(false);
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
    this.analytics.trackEvent('view_tour_section', {
      tour_slug: this.tour()?.slug ?? '(unknown)',
      section: tab,
    });
  }

  protected openGallery(index: number): void {
    this.activeGalleryIndex.set(index);
    this.analytics.trackEvent('open_tour_gallery', {
      tour_slug: this.tour()?.slug ?? '(unknown)',
      image_index: index,
    });
  }

  protected trackTourCta(action: 'check_availability' | 'book_now' | 'discover_more'): void {
    const tour = this.tour();

    this.analytics.trackEvent('click_enquire', {
      action,
      tour_slug: tour?.slug ?? '(unknown)',
      tour_name: tour?.title ?? '(unknown)',
    });
  }

  protected closeGallery(): void {
    this.activeGalleryIndex.set(null);
  }

  protected toggleBookingCalendar(): void {
    this.isBookingCalendarOpen.update((isOpen) => !isOpen);
  }

  protected shiftCalendarMonth(direction: -1 | 1): void {
    const month = this.calendarMonth();

    this.calendarMonth.set(new Date(month.getFullYear(), month.getMonth() + direction, 1));
  }

  protected selectBookingDate(iso: string): void {
    if (!this.calendarDays().some((day) => day.iso === iso && day.isSelectable)) {
      return;
    }

    this.selectedBookingDate.set(iso);
    this.isBookingCalendarOpen.set(false);
  }

  protected async submitBooking(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const email = String(formData.get('email') ?? '').trim();
    const confirmEmail = String(formData.get('confirmEmail') ?? '').trim();

    if (email.toLowerCase() !== confirmEmail.toLowerCase()) {
      this.bookingSubmitStatus.set('error');
      this.bookingSubmitMessage.set(this.i18n.t('tourDetail.bookingEmailMismatch'));
      return;
    }

    const tour = this.tour();
    const selectedDate = String(formData.get('date') ?? '').trim();
    const tickets = String(formData.get('tickets') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!selectedDate) {
      this.bookingSubmitStatus.set('error');
      this.bookingSubmitMessage.set(this.i18n.t('tourDetail.bookingDateRequired'));
      return;
    }

    this.bookingSubmitStatus.set('sending');
    this.bookingSubmitMessage.set('');

    const result = await submitPublicForm({
      formType: 'enquire-now',
      fields: {
        name: String(formData.get('name') ?? '').trim(),
        email,
        phone: String(formData.get('phone') ?? '').trim(),
        countryCode: '',
        preferredContactMethod: 'Email me',
        travelDate: selectedDate,
        additionalInformation: [
          tour ? `Tour: ${tour.title}` : '',
          tour ? `Tour slug: ${tour.slug}` : '',
          selectedDate ? `Selected date: ${selectedDate}` : '',
          tickets ? `Number of people: ${tickets}` : '',
          message ? `Message: ${message}` : '',
        ]
          .filter(Boolean)
          .join('\n'),
      },
    });

    if (result.ok) {
      form.reset();
      this.selectedBookingDate.set(null);
      this.bookingSubmitStatus.set('sent');
      this.bookingSubmitMessage.set(this.i18n.t('tourDetail.bookingSuccess'));
      this.analytics.trackEvent('generate_lead', {
        form_type: 'tour-booking',
        tour_slug: tour?.slug ?? '(unknown)',
      });
      return;
    }

    this.bookingSubmitStatus.set('error');
    this.bookingSubmitMessage.set(result.message ?? this.i18n.t('tourDetail.bookingError'));
  }

  protected showPreviousGalleryImage(): void {
    this.updateGalleryIndex(-1);
  }

  protected showNextGalleryImage(): void {
    this.updateGalleryIndex(1);
  }

  protected onGalleryTouchStart(event: TouchEvent): void {
    this.galleryTouchStartX = event.touches[0]?.clientX ?? 0;
  }

  protected onGalleryTouchEnd(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0]?.clientX ?? this.galleryTouchStartX;
    const deltaX = touchEndX - this.galleryTouchStartX;

    if (Math.abs(deltaX) < 40) {
      return;
    }

    this.updateGalleryIndex(deltaX > 0 ? -1 : 1);
  }

  protected priceLabel(tour: TourDetailContent): string {
    return `${tour.price.currency}${tour.price.amount}`;
  }

  protected priceUnitLabel(tour: TourDetailContent): string {
    return `${this.i18n.t('tourDetail.priceUnitPrefix')} ${tour.price.unit}`;
  }

  protected durationLabel(tour: TourDetailContent): string {
    return `${tour.duration.days} ${this.i18n.t('tourDetail.durationDays')} ${tour.duration.nights} ${this.i18n.t('tourDetail.durationNights')}`;
  }

  protected groupSizeLabel(tour: TourDetailContent): string {
    return `${tour.groupSize.min} - ${tour.groupSize.max} ${this.i18n.t('tourDetail.people')}`;
  }

  protected departureReturnLabel(tour: TourDetailContent): string {
    if (!tour.departureReturn) {
      return '';
    }

    return tour.departureReturn.departure === tour.departureReturn.return
      ? tour.departureReturn.departure
      : `${tour.departureReturn.departure}/${tour.departureReturn.return}`;
  }

  protected mealsLabel(day: TourItineraryDay): string {
    return day.meals.join(', ');
  }

  protected highlightsHeading(tour: TourDetailContent): string {
    return tour.slug === 'bulgaria-beyond-the-ordinary'
      ? this.i18n.t('tourDetail.highlightsTitleBulgaria')
      : this.i18n.t('tourDetail.highlightsTitle');
  }

  private dateLocale(): string {
    return this.activeSite.site().locale === 'bg' ? 'bg-BG' : 'en-GB';
  }

  protected highlightTitleText(highlight: TourHighlight): string {
    return `${highlight.title.text}${highlight.title.linkText}`;
  }

  protected isLinkedParagraph(
    paragraph: TourIntroductionParagraph,
  ): paragraph is Exclude<TourIntroductionParagraph, string> {
    return typeof paragraph !== 'string';
  }

  protected introductionTrackText(paragraph: TourIntroductionParagraph): string {
    return typeof paragraph === 'string'
      ? paragraph
      : `${paragraph.text}${paragraph.linkText}${paragraph.trailingText}`;
  }

  protected isExternalLink(link: string): boolean {
    return /^https?:\/\//.test(link);
  }

  protected faqAnswerId(item: TourFaqItem, index: number): string {
    return `${item.question.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
  }

  protected toggleFaq(index: number, event: Event): void {
    const details = event.currentTarget as HTMLDetailsElement;

    this.openFaqIndex.set(
      details.open ? index : this.openFaqIndex() === index ? null : this.openFaqIndex(),
    );
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

  private parseIsoDate(iso: string): Date {
    const [year = 1970, month = 1, day = 1] = iso.split('-').map(Number);

    return new Date(year, month - 1, day);
  }

  private toIsoDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private startOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  private addDays(date: Date, days: number): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
  }

  private weekdayOffset(date: Date): number {
    return (date.getDay() + 6) % 7;
  }
}
