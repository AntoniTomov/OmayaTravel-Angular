import { TourDetailContent, TourFaqItem } from './tour-content';

/**
 * The general booking terms, as an FAQ entry.
 *
 * These facts live in the Terms and Conditions page and were previously invisible on the tour
 * pages, where someone actually decides to book. This is a *summary that points at* the terms
 * rather than a copy of them: the authored terms carry qualifiers ("in general", "may vary
 * depending on the destination") that a duplicate would silently drop, and two copies of a payment
 * policy eventually disagree with each other. **If the Terms page changes, change this too.**
 */
export const BOOKING_CONDITIONS_FAQ: TourFaqItem = {
  question: 'What are the booking and cancellation conditions?',
  answer: [
    'A deposit of 25% per person secures your booking, payable within seven days of written confirmation. The balance is due no later than 60 days before departure.',
    'If you cancel 45–30 days before departure you receive a full refund minus the deposit; 29–20 days before, a 30% refund; and under 20 days before, the booking is non-refundable.',
    'Cancel more than 45 days ahead and the deposit can be held as credit toward a future trip, less a EUR 100 administration fee. Some tours and services carry different terms, which we confirm when you book. Our Terms and Conditions page has the full detail.',
  ],
};

/**
 * The FAQ shown on a tour page: whatever the content team authored, followed by the booking
 * conditions. Every tour therefore has at least one entry, which is why the FAQ tab is always
 * available.
 *
 * Both the rendered accordion and the `FAQPage` structured data read from here, so what a visitor
 * sees and what search engines are told cannot drift apart.
 */
export function tourFaqItems(tour: TourDetailContent): readonly TourFaqItem[] {
  return [...(tour.faq?.items ?? []), BOOKING_CONDITIONS_FAQ];
}

export function tourFaqHeading(tour: TourDetailContent): string {
  return tour.faq?.heading ?? 'Before you book';
}

export function tourFaqIntro(tour: TourDetailContent): string {
  return (
    tour.faq?.intro ??
    'The practical details worth knowing before you reserve a place. Ask us anything else — we answer every enquiry personally.'
  );
}
