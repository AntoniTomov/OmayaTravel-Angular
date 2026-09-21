import { splitHighlightedDescription } from './description-highlights';
import { TOUR_DETAIL_CONTENT, findTourBySlug } from './tour-content';

describe('splitHighlightedDescription', () => {
  it('returns the description untouched when nothing is highlighted', () => {
    expect(splitHighlightedDescription('Plain prose.')).toEqual([
      { text: 'Plain prose.', highlighted: false, href: null },
    ]);
  });

  it('splits the prose around each highlighted term', () => {
    expect(
      splitHighlightedDescription('We walk to Amber Fort and back.', [{ term: 'Amber Fort' }]),
    ).toEqual([
      { text: 'We walk to ', highlighted: false, href: null },
      { text: 'Amber Fort', highlighted: true, href: null },
      { text: ' and back.', highlighted: false, href: null },
    ]);
  });

  it('carries the external reference on the linked term only', () => {
    const segments = splitHighlightedDescription('Agra Fort, then Agra.', [
      { term: 'Agra Fort', href: 'https://example.test/' },
    ]);

    expect(segments.filter((segment) => segment.highlighted)).toEqual([
      { text: 'Agra Fort', highlighted: true, href: 'https://example.test/' },
    ]);
  });

  it('highlights only the first occurrence of a term', () => {
    const segments = splitHighlightedDescription('Ganges, and later the Ganges again.', [
      { term: 'Ganges' },
    ]);

    expect(segments).toEqual([
      { text: 'Ganges', highlighted: true, href: null },
      { text: ', and later the Ganges again.', highlighted: false, href: null },
    ]);
  });

  it('prefers the longer term when two start at the same place', () => {
    const segments = splitHighlightedDescription('We visit Sarnath Museum today.', [
      { term: 'Sarnath' },
      { term: 'Sarnath Museum' },
    ]);

    expect(
      segments.filter((segment) => segment.highlighted).map((segment) => segment.text),
    ).toEqual(['Sarnath Museum']);
  });

  it('ignores terms that do not occur in the description', () => {
    expect(splitHighlightedDescription('Short.', [{ term: 'Missing' }])).toEqual([
      { text: 'Short.', highlighted: false, href: null },
    ]);
  });

  it('preserves the description verbatim', () => {
    const description = 'First we see Amber Fort, then Chand Baori, then home.';
    const segments = splitHighlightedDescription(description, [
      { term: 'Amber Fort' },
      { term: 'Chand Baori' },
    ]);

    expect(segments.map((segment) => segment.text).join('')).toBe(description);
  });
});

describe('itinerary highlight terms', () => {
  const ameliaTours = ['kyrgyzstan-tour', 'morocco-tour', 'india-tour']
    .map((slug) => findTourBySlug(slug, 'amelia'))
    .filter((tour) => tour !== undefined);

  it('every configured term occurs verbatim in its own description', () => {
    const missing: string[] = [];

    for (const tour of [...TOUR_DETAIL_CONTENT, ...ameliaTours]) {
      for (const day of tour.itinerary) {
        for (const highlight of day.descriptionHighlights ?? []) {
          if (!day.description.includes(highlight.term)) {
            missing.push(`${tour.slug} day ${day.day}: ${highlight.term}`);
          }
        }
      }
    }

    expect(missing).toEqual([]);
  });

  it('marks up the Amelia India itinerary, with the four external references', () => {
    const india = findTourBySlug('india-tour', 'amelia');
    const days = india?.itinerary ?? [];
    const terms = days.flatMap((day) => day.descriptionHighlights ?? []);

    expect(days.filter((day) => day.descriptionHighlights?.length).map((day) => day.day)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
    expect(terms.length).toBe(33);
    expect(terms.filter((term) => term.href).map((term) => term.href)).toEqual([
      'https://www.salaambaalaktrust.com/',
      'https://en.wikipedia.org/wiki/Amber_Fort',
      'https://whc.unesco.org/en/list/251/',
      'https://whc.unesco.org/en/list/252/',
    ]);
  });
});
