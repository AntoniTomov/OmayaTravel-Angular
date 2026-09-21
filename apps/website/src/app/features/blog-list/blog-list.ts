import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  PageHeroCropSrcsetPipe,
  TourWebImageSrcsetPipe,
} from '../../shared/content/tour-web-image.pipe';

import { ActiveSite } from '../../../sites/active-site';
import { isSiteRouteEnabled } from '../../../sites/site-routes';
import {
  BLOG_DISCOVER_TOURS_IMAGE,
  BLOG_LIST_HERO_IMAGE,
  blogPostsForSite,
} from '../../shared/content/blog-content';

@Component({
  selector: 'app-blog-list',
  imports: [PageHeroCropSrcsetPipe, RouterLink, TourWebImageSrcsetPipe],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogList {
  private readonly activeSite = inject(ActiveSite);

  protected readonly posts = computed(() => blogPostsForSite(this.activeSite.site().id));
  protected readonly featuredPosts = computed(() => this.posts().slice(0, 3));
  protected readonly heroImage = computed(() =>
    this.activeSite.site().id === 'amelia'
      ? '/assets/images/amelia/blog/morocco-for-women-travel-guide/morocco-2.avif'
      : BLOG_LIST_HERO_IMAGE,
  );
  protected readonly discoverToursImage = BLOG_DISCOVER_TOURS_IMAGE;
  protected readonly discoverToursEnabled = computed(() =>
    isSiteRouteEnabled(this.activeSite.site(), '/tours-list/'),
  );
  protected readonly labels = computed(() =>
    this.activeSite.site().id === 'amelia'
      ? {
          title: 'Блог',
          subtitle: 'Истории, идеи и практични съвети за пътувания с Amelia Travel.',
          suggestedPosts: 'Препоръчани публикации',
          followUs: 'Последвай ни',
          followText: 'За още вдъхновение за пътувания, последвай Amelia Travel.',
          discoverAlt: 'Открий още пътувания',
        }
      : {
          title: 'Blog List',
          subtitle:
            'Dive into our collection of travel tales, destination guides, and insider advice.',
          suggestedPosts: 'Suggested Blog Posts',
          followUs: 'Follow Us',
          followText: 'For more travel inspiration, follow us on Instagram: @omayatravel',
          discoverAlt: 'Discover more tours',
        },
  );
}
