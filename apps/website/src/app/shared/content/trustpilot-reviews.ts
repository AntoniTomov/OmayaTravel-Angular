export const TRUSTPILOT_PROFILE_URL = 'https://www.trustpilot.com/review/omayatravel.com';

export interface TrustpilotReview {
  /** Lower-case destination slug, matching `DESTINATION_CONTENT[].slug`. */
  readonly destination: string;
  /** Label shown above the review, e.g. "Kyrgyzstan · July 2026". */
  readonly trip: string;
  readonly rating: 1 | 2 | 3 | 4 | 5;
  readonly title: string;
  readonly text: string;
  readonly author: string;
}

// Copied verbatim from the Trustpilot profile — do not edit the reviewers' words.
export const TRUSTPILOT_REVIEWS: readonly TrustpilotReview[] = [
  {
    destination: 'kyrgyzstan',
    trip: 'Kyrgyzstan · July 2026',
    rating: 5,
    title: 'The best trip to Kyrgyzstan',
    text: 'We had the best trip ever to Kyrgyzstan with Omaya Travel. Everything was excellent from start to finish. The girls were knowledgeable, professional and very detail- oriented so everything was organised to perfection and every question was answered so the trip was completely stress- free. Highly recommended for anyone looking for reliable and customer- centric travel agency. We will definitely be using them again.',
    author: 'Eleonora Hadzhiyska',
  },
  {
    destination: 'kyrgyzstan',
    trip: 'Kyrgyzstan · July 2026',
    rating: 5,
    title: 'Absolutely recommend Omaya travel 😊',
    text: 'Our trip to Kyrgyzstan was absolutely amazing! The girls had thought of everything, down to the smallest detail. I highly recommend them! ✨',
    author: 'Medi',
  },
];

export function trustpilotReviewsFor(destination: string): readonly TrustpilotReview[] {
  const slug = destination.toLowerCase();
  return TRUSTPILOT_REVIEWS.filter((review) => review.destination === slug);
}
