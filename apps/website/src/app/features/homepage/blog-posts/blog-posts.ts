import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ActiveSite } from '../../../../sites/active-site';
import { blogPostSummariesForSite } from '../../../shared/content/blog-summary-content';
import { OmayaI18n } from '../../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-blog-posts',
  imports: [RouterLink],
  templateUrl: './blog-posts.html',
  styleUrl: './blog-posts.scss',
})
export class BlogPosts {
  protected readonly i18n = inject(OmayaI18n);
  private readonly activeSite = inject(ActiveSite);
  protected readonly posts = computed(() =>
    blogPostSummariesForSite(this.activeSite.site().id).slice(0, 3),
  );
}
