import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
  DEPARTURE_MONTH_NAMES,
  monthResultPath,
  toursInMonth,
} from '../../shared/content/tour-departures';

interface CalendarMonth {
  name: string;
  image: string;
  tours: readonly string[];
  resultPath: string;
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
  private readonly routeData = toSignal(this.route.data, {
    initialValue: this.route.snapshot.data,
  });
  protected readonly year = computed(() =>
    this.routeData()['calendarYear'] === 2027 ? 2027 : 2026,
  );
  protected readonly heroImage = computed(() => CALENDAR_HERO_IMAGES[this.year()]);
  protected readonly months = computed(() =>
    DEPARTURE_MONTH_NAMES.map((name, index): CalendarMonth => {
      const year = this.year();
      const tours = toursInMonth(index + 1, year).map((tour) => '/tour-item/' + tour.slug + '/');
      return {
        name,
        image: CALENDAR_MONTH_IMAGES[year][index],
        tours,
        resultPath:
          tours.length === 0
            ? '/not-yet-but-soon/'
            : tours.length === 1
              ? tours[0]
              : monthResultPath(index + 1, year),
      };
    }),
  );
}
