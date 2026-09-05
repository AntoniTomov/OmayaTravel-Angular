import { BLOG_POSTS } from '../content/blog-content';
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
 * Google does not enforce a fixed title or description length — what is displayed varies with
 * device width, and Google frequently rewrites snippets anyway. These bounds are an editorial
 * house style, not a ranking rule, so they are reported as warnings (see `warn` below) rather than
 * failing the build. What *does* fail the build is a duplicate or missing title, because that is a
 * genuine defect rather than a matter of taste.
 */
const MAX_TITLE_LENGTH = 70;
const MIN_DESCRIPTION_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 175;

/** Reports an editorial guideline breach without failing the suite. */
function warn(label: string, offenders: readonly string[]): void {
  if (offenders.length) {
    console.warn(`[seo] ${label}: ${offenders.join(', ')}`);
  }
}

function allMetadata(): readonly [string, PageMetadata][] {
  return [...Object.entries(STATIC_PAGE_METADATA), ...Object.entries(DESTINATION_PAGE_METADATA)];
}

describe('page metadata', () => {
  it('gives every entry a non-empty title and description', () => {
    const empty = allMetadata()
      .filter(([, metadata]) => !metadata.title.trim() || !metadata.description.trim())
      .map(([key]) => key);

    expect(empty).toEqual([]);
  });

  it('reports entries outside house-style length as warnings, not failures', () => {
    warn(
      'title longer than house style',
      allMetadata()
        .filter(([, metadata]) => metadata.title.length > MAX_TITLE_LENGTH)
        .map(([key, metadata]) => `${key} (${metadata.title.length})`),
    );
    warn(
      'description longer than house style',
      allMetadata()
        .filter(([, metadata]) => metadata.description.length > MAX_DESCRIPTION_LENGTH)
        .map(([key, metadata]) => `${key} (${metadata.description.length})`),
    );
    warn(
      'description shorter than house style',
      allMetadata()
        .filter(([, metadata]) => !metadata.noIndex)
        .filter(([, metadata]) => metadata.description.length < MIN_DESCRIPTION_LENGTH)
        .map(([key, metadata]) => `${key} (${metadata.description.length})`),
    );
  });

  it('never repeats a title across any indexable page, registry or authored', () => {
    // Covers the rendered pages too, not just this registry: tours and articles get their titles
    // from authored content, and a collision there is exactly as damaging.
    const registryTitles = allMetadata()
      .filter(([, metadata]) => !metadata.noIndex)
      .map(([, metadata]) => metadata.title);
    const tourTitles = TOUR_DETAIL_CONTENT.map((tour) => tour.seo.title);
    const articleTitles = BLOG_POSTS.map((post) => post.title);
    const all = [...registryTitles, ...tourTitles, ...articleTitles];
    const seen = new Set<string>();
    const duplicates = all.filter((title) => !seen.add(title));

    expect(duplicates).toEqual([]);
  });

  it('gives every tour and article a title distinct from the generic brand name', () => {
    const generic = [
      ...TOUR_DETAIL_CONTENT.map((t) => t.seo.title),
      ...BLOG_POSTS.map((p) => p.title),
    ]
      .filter((title) => title.trim() === 'Omaya Travel')
      .map((title) => title);

    expect(generic).toEqual([]);
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
