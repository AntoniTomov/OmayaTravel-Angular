// GENERATED FILE — do not edit by hand. Run `npm run og:generate` after changing hero images.
//
// 1200x630 share images composited from each page's hero image with the Omaya logo.

export const OG_IMAGE_KEYS: ReadonlySet<string> = new Set([
  'article-10-unmissable-places-to-visit-on-your-bulgaria-trip',
  'article-how-to-visit-song-kul-lake-in-kyrgyzstan',
  'article-tassili-najjer-national-park-algeria-guide',
  'article-the-complete-visitor-guide-to-rila-monastery',
  'destination-algeria',
  'destination-bulgaria',
  'destination-kyrgyzstan',
  'destination-morocco',
  'listing-all-ages-tours',
  'listing-classic-tours',
  'listing-private-tour-planning',
  'listing-private-tours-your-trip-your-rules',
  'listing-solo-travellers-tours',
  'listing-tours-list',
  'listing-women-only-tours',
  'tour-algeria-desert-expedition-tadrart-rouge',
  'tour-bulgaria-beyond-the-ordinary',
  'tour-kyrgyzstan-tour',
  'tour-morocco-tour',
  'tour-tour-item-morocco-solo-travellers-tour',
  'tour-tour-item-morocco-women-only-tour',
  'tour-women-only-tour-bulgaria',
  'tour-women-only-tour-kyrgyzstan',
]);

/** Root-relative path to a page's generated share image, or undefined if it has none. */
export function ogImageFor(key: string | null | undefined): string | undefined {
  return key && OG_IMAGE_KEYS.has(key) ? `/assets/images/og/${key}.jpg` : undefined;
}
