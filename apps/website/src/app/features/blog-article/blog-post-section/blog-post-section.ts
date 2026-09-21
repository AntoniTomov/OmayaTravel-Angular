import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BlogSection } from '../../../shared/content/blog-content';
import { TourWebImageSrcsetPipe } from '../../../shared/content/tour-web-image.pipe';

@Component({
  selector: 'app-blog-post-section',
  imports: [RouterLink, TourWebImageSrcsetPipe],
  templateUrl: './blog-post-section.html',
  styleUrl: './blog-post-section.scss',
})
export class BlogPostSection {
  @Input({ required: true }) section!: BlogSection;
}
