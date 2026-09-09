import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  BLOG_DISCOVER_TOURS_IMAGE,
  BLOG_POSTS,
  findBlogPostBySlug,
} from '../../shared/content/blog-content';
import { DESTINATION_CONTENT } from '../../shared/content/destination-content';
import { BlogPostSection } from './blog-post-section/blog-post-section';

@Component({
  selector: 'app-blog-article',
  imports: [BlogPostSection, RouterLink],
  templateUrl: './blog-article.html',
  styleUrl: './blog-article.scss',
})
export class BlogArticle {
  private readonly route = inject(ActivatedRoute);
  private readonly routeData = toSignal(this.route.data, {
    initialValue: this.route.snapshot.data,
  });

  protected readonly post = computed(() =>
    findBlogPostBySlug(String(this.routeData()['articleSlug'] ?? '')),
  );
  protected readonly discoverToursImage = BLOG_DISCOVER_TOURS_IMAGE;
  protected readonly destination = computed(() =>
    DESTINATION_CONTENT.find((destination) =>
      destination.guides.some((guide) => guide.slug === this.post()?.slug),
    ),
  );
  protected readonly relatedPosts = computed(() => {
    const sameCountrySlugs = new Set(this.destination()?.guides.map((guide) => guide.slug));
    const otherPosts = BLOG_POSTS.filter((post) => post.slug !== this.post()?.slug);

    return [
      ...otherPosts.filter((post) => sameCountrySlugs.has(post.slug)),
      ...otherPosts.filter((post) => !sameCountrySlugs.has(post.slug)),
    ].slice(0, 3);
  });
  protected readonly previousPost = computed(() => {
    const post = this.post();
    const index = BLOG_POSTS.findIndex((candidate) => candidate.slug === post?.slug);

    return index >= 0 ? (BLOG_POSTS[index + 1] ?? BLOG_POSTS[0]) : undefined;
  });
}
