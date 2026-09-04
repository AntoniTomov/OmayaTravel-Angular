import { TOUR_DETAIL_CONTENT } from '../content/tour-content';
import { PUBLIC_INDEXABLE_ROUTES } from '../routing/public-routes';
import {
  DESTINATION_PAGE_METADATA,
  PageMetadata,
  STATIC_PAGE_METADATA,
  destinationPageMetadata,
  staticPageMetadata,
} from './page-metadata';

/**
 * Google truncates titles around 60 characters and descriptions around 160. These are soft limits,
 * so the assertions leave headroom rather than pinning the exact display width.
 */
const MAX_TITLE_LENGTH = 70;
const MIN_DESCRIPTION_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 175;

function allMetadata(): readonly [string, PageMetadata][] {
  return [...Object.entries(STATIC_PAGE_METADATA), ...Object.entries(DESTINATION_PAGE_METADATA)];
}

describe('page metadata', () => {
  it('gives every entry a title that fits a search result', () => {
    const oversized = allMetadata()
      .filter(([, metadata]) => metadata.title.length > MAX_TITLE_LENGTH)
      .map(([key, metadata]) => `${key} (${metadata.title.length})`);

    expect(oversized).toEqual([]);
  });

  it('gives every entry a description within snippet length', () => {
    const oversized = allMetadata()
      .filter(([, metadata]) => metadata.description.length > MAX_DESCRIPTION_LENGTH)
      .map(([key, metadata]) => `${key} (${metadata.description.length})`);

    expect(oversized).toEqual([]);
  });

  it('writes indexable descriptions long enough to fill a snippet', () => {
    const tooShort = allMetadata()
      .filter(([, metadata]) => !metadata.noIndex)
      .filter(([, metadata]) => metadata.description.length < MIN_DESCRIPTION_LENGTH)
      .map(([key, metadata]) => `${key} (${metadata.description.length})`);

    expect(tooShort).toEqual([]);
  });

  it('never repeats a title across pages, which is the bug this replaced', () => {
    const titles = allMetadata()
      .filter(([, metadata]) => !metadata.noIndex)
      .map(([, metadata]) => metadata.title);

    expect(new Set(titles).size).toBe(titles.length);
  });

  it('keeps search and error pages out of the index', () => {
    expect(staticPageMetadata('search')?.noIndex).toBe(true);
    expect(staticPageMetadata('not-found')?.noIndex).toBe(true);
    expect(staticPageMetadata('unknown')?.noIndex).toBe(true);
    expect(staticPageMetadata('static-not-yet-but-soon')?.noIndex).toBe(true);
  });

  it('covers every approved destination slug', () => {
    const missing = PUBLIC_INDEXABLE_ROUTES.filter((route) => route.type === 'destination-detail')
      .map((route) => route.path.split('/').pop())
      .filter((slug) => !destinationPageMetadata(slug));

    expect(missing).toEqual([]);
  });

  it('leaves tour metadata to the authored copy in tour-content', () => {
    const duplicated = TOUR_DETAIL_CONTENT.filter(
      (tour) => STATIC_PAGE_METADATA[`tour-${tour.slug}`] !== undefined,
    ).map((tour) => tour.slug);
    const unauthored = TOUR_DETAIL_CONTENT.filter(
      (tour) => !tour.seo.title.trim() || !tour.seo.description.trim(),
    ).map((tour) => tour.slug);

    expect(duplicated).toEqual([]);
    expect(unauthored).toEqual([]);
  });
});
