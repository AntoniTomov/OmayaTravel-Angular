import { TourDetailContent, findTourBySlug } from './tour-content';
import { PUBLIC_TOUR_SLUGS } from '../routing/public-routes';

// Includes the Morocco variants resolved by findTourBySlug, not just the base content array.
export const PUBLIC_TOURS: readonly TourDetailContent[] = PUBLIC_TOUR_SLUGS.map((slug) => {
  const tour = findTourBySlug(slug);
  if (!tour) throw new Error('Missing public tour: ' + slug);
  return tour;
});

export const DEPARTURE_MONTH_NAMES = [
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
] as const;

/** ISO date strings are compared without local timezone conversion. Month is one-based. */
export function departuresInMonth(
  tour: TourDetailContent,
  month: number,
  year?: number,
): readonly string[] {
  return tour.departures.filter(
    (date) =>
      Number(date.slice(5, 7)) === month &&
      (year === undefined || Number(date.slice(0, 4)) === year),
  );
}

export function toursInMonth(month: number, year?: number): readonly TourDetailContent[] {
  return PUBLIC_TOURS.filter((tour) => departuresInMonth(tour, month, year).length > 0);
}

export function tourForPath(path: string): TourDetailContent | undefined {
  return findTourBySlug(path.split('/').filter(Boolean).at(-1));
}

export function departureMonthNames(year?: number): readonly string[] {
  return DEPARTURE_MONTH_NAMES.filter((_, index) => toursInMonth(index + 1, year).length > 0);
}

export function monthResultPath(month: number, year: number): string {
  if (month === 9 && year === 2027) return '/calendar-2027/september/';
  return `/tours-list/?month=${DEPARTURE_MONTH_NAMES[month - 1]}&year=${year}`;
}
