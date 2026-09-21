import { TourDescriptionHighlight } from './tour-content';

/** One run of an itinerary description: either plain prose or a highlighted phrase. */
export interface TourDescriptionSegment {
  text: string;
  highlighted: boolean;
  /** Set only when the highlighted phrase carries an external reference. */
  href: string | null;
}

/**
 * Splits a description into plain and highlighted runs so the template can mark the
 * phrases up without `innerHTML`. Each term is highlighted on its first occurrence
 * only, and where two terms start at the same place the longer one wins. Terms that
 * do not occur in the description are ignored.
 */
export function splitHighlightedDescription(
  description: string,
  highlights: readonly TourDescriptionHighlight[] = [],
): readonly TourDescriptionSegment[] {
  if (highlights.length === 0) {
    return [{ text: description, highlighted: false, href: null }];
  }

  const pending = [...highlights].sort((a, b) => b.term.length - a.term.length);
  const segments: TourDescriptionSegment[] = [];
  let plainStart = 0;
  let index = 0;

  while (index < description.length && pending.length > 0) {
    const matchIndex = pending.findIndex((highlight) =>
      description.startsWith(highlight.term, index),
    );
    if (matchIndex === -1) {
      index += 1;
      continue;
    }

    const [{ term, href }] = pending.splice(matchIndex, 1);
    if (index > plainStart) {
      segments.push({
        text: description.slice(plainStart, index),
        highlighted: false,
        href: null,
      });
    }
    segments.push({ text: term, highlighted: true, href: href ?? null });
    index += term.length;
    plainStart = index;
  }

  if (plainStart < description.length) {
    segments.push({ text: description.slice(plainStart), highlighted: false, href: null });
  }

  return segments;
}
