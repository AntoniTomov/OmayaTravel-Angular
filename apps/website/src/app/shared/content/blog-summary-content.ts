import { BLOG_ARTICLE_METADATA } from './blog-metadata-content';
import type { BlogSectionImage } from './blog-content';
export interface BlogPostSummary {
  slug: string;
  title: string;
  date: string;
  image: BlogSectionImage;
}
export const BLOG_POST_SUMMARIES: readonly BlogPostSummary[] = BLOG_ARTICLE_METADATA;
