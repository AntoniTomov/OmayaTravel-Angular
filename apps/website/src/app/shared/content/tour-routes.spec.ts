import { TOUR_DETAIL_CONTENT, findTourBySlug } from './tour-content';
import { findTourRoute } from './tour-routes';

// Every published tour gets a map, and every itinerary day must land on a stop of its route, so a
// tour added or re-planned without its route fails here rather than shipping without a map.
const PUBLISHED: readonly [string, 'omaya' | 'amelia'][] = [
  ...TOUR_DETAIL_CONTENT.map((tour) => [tour.slug, 'omaya'] as [string, 'omaya']),
  ['tour-item-morocco-women-only-tour', 'omaya'],
  ['tour-item-morocco-solo-travellers-tour', 'omaya'],
  ['india-tour', 'amelia'],
  ['kyrgyzstan-tour', 'amelia'],
  ['morocco-tour', 'amelia'],
  ['saudi-arabia-tour', 'amelia'],
  ['namibia-tour', 'amelia'],
  ['algeria-desert-expedition-tadrart-rouge', 'amelia'],
];

describe('tour routes', () => {
  it('has a route for every published tour', () => {
    expect(PUBLISHED.filter(([slug]) => !findTourRoute(slug)).map(([slug]) => slug)).toEqual([]);
  });

  it('covers every itinerary day with a stop', () => {
    const gaps: string[] = [];

    for (const [slug, site] of PUBLISHED) {
      const tour = findTourBySlug(slug, site);
      const covered = new Set(findTourRoute(slug)?.flatMap((stop) => stop.days) ?? []);

      for (const day of tour?.itinerary ?? []) {
        if (!covered.has(day.day)) {
          gaps.push(`${site} ${slug} day ${day.day}`);
        }
      }
    }

    expect(gaps).toEqual([]);
  });

  it('names every stop in both languages', () => {
    const unnamed = PUBLISHED.flatMap(([slug]) =>
      (findTourRoute(slug) ?? [])
        .filter((stop) => !stop.name.en.trim() || !stop.name.bg.trim())
        .map((stop) => `${slug}: ${stop.name.en || stop.name.bg}`),
    );

    expect(unnamed).toEqual([]);
  });
});
