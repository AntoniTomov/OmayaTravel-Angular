import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BLOG_POST_SUMMARIES } from '../../../shared/content/blog-summary-content';
import { OmayaI18n } from '../../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-blog-posts',
  imports: [RouterLink],
  templateUrl: './blog-posts.html',
  styleUrl: './blog-posts.scss',
})
export class BlogPosts {
  protected readonly i18n = inject(OmayaI18n);
  protected readonly posts = [...BLOG_POST_SUMMARIES]
    .sort((first, second) => Date.parse(second.date) - Date.parse(first.date))
    .slice(0, 3);
}
