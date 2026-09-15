import type { SiteId } from '../../../sites/site.types';
import { BLOG_ARTICLE_METADATA, blogMetadataForSite } from './blog-metadata-content';
import type { BlogSectionImage } from './blog-content';
export interface BlogPostSummary {
  slug: string;
  title: string;
  date: string;
  image: BlogSectionImage;
}
export const BLOG_POST_SUMMARIES: readonly BlogPostSummary[] = BLOG_ARTICLE_METADATA;

export function blogPostSummariesForSite(siteId: SiteId): readonly BlogPostSummary[] {
  return blogMetadataForSite(siteId);
}
