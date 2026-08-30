import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface CalendarMonth {
  name: string;
  image: string;
  tours: readonly string[];
  resultPath?: string;
}

const CALENDAR_HERO_IMAGES: Readonly<Record<number, string>> = {
  2026: '/assets/images/calendars/calendar2026-bgr.webp',
  2027: '/assets/images/calendars/calendar2027-bgr-image.webp',
};

const CALENDAR_MONTH_IMAGES: Readonly<Record<number, readonly string[]>> = {
  2026: Array.from(
    { length: 12 },
    (_, index) =>
      `/assets/images/calendars/calendar-2026-${String(index + 1).padStart(2, '0')}.webp`,
  ),
  2027: [
    CALENDAR_HERO_IMAGES[2027],
    ...Array.from(
      { length: 11 },
      (_, index) =>
        `/assets/images/calendars/calendar-2027-${String(index + 2).padStart(2, '0')}.webp`,
    ),
  ],
};

@Component({
  selector: 'app-tour-calendar-page',
  templateUrl: './tour-calendar-page.html',
  styleUrl: './tour-calendar-page.scss',
})
export class TourCalendarPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly year = this.resolveYear();
  protected readonly months = this.buildMonths(this.year);
  protected readonly heroImage = CALENDAR_HERO_IMAGES[this.year];

  protected openMonth(month: CalendarMonth): void {
    if (month.tours.length === 0) {
      void this.router.navigateByUrl('/not-yet-but-soon/');
      return;
    }

    if (month.tours.length === 1) {
      void this.router.navigateByUrl(month.tours[0]);
      return;
    }

    if (month.tours.length > 1 && month.resultPath) {
      void this.router.navigateByUrl(month.resultPath);
    }
  }

  private buildMonths(year: number): readonly CalendarMonth[] {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ].map((name, index) => ({
      name,
      image: CALENDAR_MONTH_IMAGES[year][index],
      tours: this.monthTours(year, index),
      resultPath: year === 2027 && index === 8 ? '/calendar-2027/september/' : undefined,
    }));
  }

  private monthTours(year: number, monthIndex: number): readonly string[] {
    const key = `${year}-${monthIndex + 1}`;
    const toursByMonth: Record<string, readonly string[]> = {
      '2026-10': ['/tour-item/morocco-tour/'],
      '2026-11': ['/tour-item/algeria-desert-expedition-tadrart-rouge/'],
      '2027-2': ['/tour-item/algeria-desert-expedition-tadrart-rouge/'],
      '2027-4': ['/tour-item/morocco-tour/'],
      '2027-5': ['/tour-item/bulgaria-beyond-the-ordinary/'],
      '2027-7': ['/tour-item/women-only-tour-kyrgyzstan/'],
      '2027-8': ['/tour-item/women-only-tour-kyrgyzstan/'],
      '2027-9': [
        '/tour-item/women-only-tour-bulgaria/',
        '/tour-item/bulgaria-beyond-the-ordinary/',
        '/tour-item/algeria-desert-expedition-tadrart-rouge/',
      ],
      '2027-10': ['/tour-item/algeria-desert-expedition-tadrart-rouge/'],
    };

    return toursByMonth[key] ?? [];
  }

  private resolveYear(): number {
    const routeYear = Number(this.route.snapshot.data['calendarYear']);

    if (routeYear === 2026 || routeYear === 2027) {
      return routeYear;
    }

    return this.route.snapshot.routeConfig?.path === 'calendar-2027' ? 2027 : 2026;
  }
}
