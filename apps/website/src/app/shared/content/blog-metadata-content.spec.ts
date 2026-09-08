import { BLOG_POSTS } from './blog-content';
import { BLOG_ARTICLE_METADATA } from './blog-metadata-content';
import { PUBLIC_BLOG_ARTICLE_SLUGS } from '../routing/public-routes';
import { PUBLIC_TOURS } from './tour-departures';

describe('published content integrity', () => {
  it('keeps lightweight metadata, article bodies and public routes in sync', () => {
    const sorted = (slugs: readonly string[]) => [...slugs].sort();
    expect(sorted(BLOG_POSTS.map((post) => post.slug))).toEqual(sorted(PUBLIC_BLOG_ARTICLE_SLUGS));
    expect(sorted(BLOG_ARTICLE_METADATA.map((post) => post.slug))).toEqual(
      sorted(PUBLIC_BLOG_ARTICLE_SLUGS),
    );
    for (const post of BLOG_POSTS) {
      const { sections, sources, ...metadata } = post;
      expect(sections.length).toBeGreaterThan(0);
      expect(metadata).toEqual(BLOG_ARTICLE_METADATA.find((item) => item.slug === post.slug));
      expect(new Date(post.modifiedAt ?? post.publishedAt).getTime()).toBeGreaterThanOrEqual(
        new Date(post.publishedAt).getTime(),
      );
      expect(sources?.every((source) => source.url.startsWith('https://')) ?? true).toBe(true);
    }
  });

  it('publishes the owner-confirmed fitness rating for every public tour and variant', () => {
    expect(PUBLIC_TOURS).toHaveLength(8);
    expect(
      PUBLIC_TOURS.map((tour) => ({ slug: tour.slug, fitness: tour.fitnessLevel })).filter(
        (tour) => tour.fitness !== 'Easy',
      ),
    ).toEqual([]);
    expect(
      PUBLIC_TOURS.flatMap((tour) => tour.faq?.items ?? [])
        .flatMap((item) => item.answer)
        .join(' '),
    ).not.toContain('a moderate level of fitness is recommended');
  });
});
