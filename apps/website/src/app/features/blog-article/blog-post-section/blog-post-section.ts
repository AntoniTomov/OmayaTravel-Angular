import { Component, Input } from '@angular/core';

import { BlogSection } from '../../../shared/content/blog-content';

@Component({
  selector: 'app-blog-post-section',
  templateUrl: './blog-post-section.html',
  styleUrl: './blog-post-section.scss',
})
export class BlogPostSection {
  @Input({ required: true }) section!: BlogSection;
}
