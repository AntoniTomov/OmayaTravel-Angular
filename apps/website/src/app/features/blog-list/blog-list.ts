import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  BLOG_DISCOVER_TOURS_IMAGE,
  BLOG_LIST_HERO_IMAGE,
  BLOG_POSTS,
} from '../../shared/content/blog-content';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogList {
  protected readonly posts = BLOG_POSTS;
  protected readonly featuredPosts = BLOG_POSTS.slice(0, 3);
  protected readonly heroImage = BLOG_LIST_HERO_IMAGE;
  protected readonly discoverToursImage = BLOG_DISCOVER_TOURS_IMAGE;
}
