import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BLOG_POST_SUMMARIES } from '../../../shared/content/blog-summary-content';

@Component({
  selector: 'app-blog-posts',
  imports: [RouterLink],
  templateUrl: './blog-posts.html',
  styleUrl: './blog-posts.scss',
})
export class BlogPosts {
  protected readonly posts = BLOG_POST_SUMMARIES.slice(1);
}
