import type { BlogSectionImage } from './blog-content';

export interface BlogPostSummary {
  slug: string;
  title: string;
  date: string;
  image: BlogSectionImage;
}

const BLOG_IMAGE_BASE = '/assets/images/blog-posts';

export const BLOG_POST_SUMMARIES: readonly BlogPostSummary[] = [
  {
    slug: 'tassili-najjer-national-park-algeria-guide',
    title: 'Tassili n’Ajjer National Park: A Guide to Algeria’s Breathtaking Sahara Wilderness',
    date: 'July 25, 2026',
    image: {
      src: `${BLOG_IMAGE_BASE}/Algeria-Tassili-National-Park-post-preview-bgr.webp`,
      alt: "Sandstone formations and dunes in Tassili n'Ajjer National Park",
    },
  },
  {
    slug: 'the-complete-visitor-guide-to-rila-monastery',
    title: 'The Complete Visitor Guide to the Rila Monastery in Bulgaria',
    date: 'April 16, 2026',
    image: {
      src: `${BLOG_IMAGE_BASE}/Rila-Monastery-post-preview-bgr.webp`,
      alt: 'Rila Monastery in the Rila Mountains',
    },
  },
  {
    slug: '10-unmissable-places-to-visit-on-your-bulgaria-trip',
    title: '10 Unmissable Places to Visit on Your Bulgaria Trip (Chosen by Local Guides)',
    date: 'April 1, 2026',
    image: {
      src: `${BLOG_IMAGE_BASE}/beautiful-bulgaria-post-preview-bgr.webp`,
      alt: 'Bulgarian mountain lake and green hills',
    },
  },
  {
    slug: 'how-to-visit-song-kul-lake-in-kyrgyzstan',
    title: 'Song Kul: What You Need to Know About Kyrgyzstan’s Most Untamed Alpine Lake',
    date: 'February 26, 2026',
    image: {
      src: `${BLOG_IMAGE_BASE}/Kyrgystan-post-preview-bgr.webp`,
      alt: 'Yurt camp beside Song Kul Lake in Kyrgyzstan',
    },
  },
];
