import {
  DEPARTURE_MONTH_NAMES,
  PUBLIC_TOURS,
  departureMonthNames,
  monthResultPath,
  toursInMonth,
} from './tour-departures';
import { findTourListingPage, TOUR_CARDS } from './tour-list-content';
import { PUBLIC_TOUR_SLUGS } from '../routing/public-routes';
import { DESTINATION_CONTENT } from './destination-content';

describe('public tour departure data', () => {
  it('includes every public variant, including both derived Morocco tours', () => {
    expect(PUBLIC_TOURS.map((tour) => tour.slug)).toEqual([...PUBLIC_TOUR_SLUGS]);
    expect(PUBLIC_TOURS).toHaveLength(8);
    expect(
      TOUR_CARDS.every((card) =>
        PUBLIC_TOURS.some((tour) => card.target === `/tour-item/${tour.slug}/`),
      ),
    ).toBe(true);
  });

  it('keeps September 2027 restricted to the two Bulgaria itineraries', () => {
    const slugs = toursInMonth(9, 2027)
      .map((tour) => tour.slug)
      .sort();
    expect(slugs).toEqual(['bulgaria-beyond-the-ordinary', 'women-only-tour-bulgaria']);
    expect(
      findTourListingPage('calendar-2027/september')
        .cards.map((card) => card.target)
        .sort(),
    ).toEqual(slugs.map((slug) => `/tour-item/${slug}/`));
    expect(toursInMonth(9, 2026)).toEqual([]);
  });

  it('includes all Morocco formats in April and exposes February in the filter', () => {
    expect(
      toursInMonth(4, 2027)
        .map((tour) => tour.slug)
        .sort(),
    ).toEqual([
      'morocco-tour',
      'tour-item-morocco-solo-travellers-tour',
      'tour-item-morocco-women-only-tour',
    ]);
    expect(departureMonthNames(2027)).toContain('February');
    expect(toursInMonth(7, 2027).map((tour) => tour.slug)).toEqual(['kyrgyzstan-tour']);
    expect(toursInMonth(8, 2027)).toHaveLength(2);
  });

  it('keeps month links useful when several tours share a month', () => {
    expect(monthResultPath(9, 2027)).toBe('/calendar-2027/september/');
    expect(monthResultPath(4, 2027)).toBe('/tours-list/?month=April&year=2027');
    expect(DEPARTURE_MONTH_NAMES).toHaveLength(12);
  });

  it('groups every public tour into exactly one destination', () => {
    expect(DESTINATION_CONTENT.map((country) => [country.slug, country.tours.length])).toEqual([
      ['bulgaria', 2],
      ['kyrgyzstan', 2],
      ['morocco', 3],
      ['algeria', 1],
    ]);
    expect(
      DESTINATION_CONTENT.flatMap((country) => country.tours.map((tour) => tour.slug)).sort(),
    ).toEqual([...PUBLIC_TOUR_SLUGS].sort());
  });
});
