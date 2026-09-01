import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ActiveSite } from '../../../sites/active-site';
import {
  BLOG_DISCOVER_TOURS_IMAGE,
  blogPostsForSite,
  findBlogPostBySlug,
} from '../../shared/content/blog-content';
import { BlogPostSection } from './blog-post-section/blog-post-section';

@Component({
  selector: 'app-blog-article',
  imports: [BlogPostSection, RouterLink],
  templateUrl: './blog-article.html',
  styleUrl: './blog-article.scss',
})
export class BlogArticle {
  private readonly route = inject(ActivatedRoute);
  private readonly activeSite = inject(ActiveSite);
  private readonly routeData = toSignal(this.route.data, {
    initialValue: this.route.snapshot.data,
  });

  protected readonly posts = computed(() => blogPostsForSite(this.activeSite.site().id));
  protected readonly post = computed(() =>
    findBlogPostBySlug(String(this.routeData()['articleSlug'] ?? ''), this.activeSite.site().id),
  );
  protected readonly suggestedPosts = computed(() => this.posts().slice(0, 3));
  protected readonly discoverToursImage = BLOG_DISCOVER_TOURS_IMAGE;
  protected readonly relatedPosts = computed(() =>
    this.posts()
      .filter((post) => post.slug !== this.post()?.slug)
      .slice(0, 3),
  );
  protected readonly previousPost = computed(() => {
    const post = this.post();
    const posts = this.posts();
    const index = posts.findIndex((candidate) => candidate.slug === post?.slug);

    return posts.length > 1 && index >= 0 ? (posts[index + 1] ?? posts[0]) : undefined;
  });

  protected readonly labels = computed(() =>
    this.activeSite.site().id === 'amelia'
      ? {
          relatedPosts: 'Подобни публикации',
          suggestedPosts: 'Препоръчани публикации',
          backToStories: 'Към всички истории',
          followUs: 'Последвай ни',
          followText: 'За още вдъхновение за пътувания, последвай Amelia Travel.',
          discoverAlt: 'Открий още пътувания',
        }
      : {
          relatedPosts: 'Related Posts',
          suggestedPosts: 'Suggested Blog Posts',
          backToStories: 'Back to all stories',
          followUs: 'Follow Us',
          followText: 'For more travel inspiration, follow us on Instagram: @omayatravel',
          discoverAlt: 'Discover more tours',
        },
  );
}
