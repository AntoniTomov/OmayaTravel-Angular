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
 * The same summary for Amelia, whose terms are Bulgarian and are not a translation of Omaya's:
 * the refund ladder differs (29–15 days and under 14, against 29–20 and under 20), so each brand's
 * entry is kept against its own Terms page. **If the Общи условия page changes, change this too.**
 */
export const AMELIA_BOOKING_CONDITIONS_FAQ: TourFaqItem = {
  question: 'Какви са условията за резервация и анулиране?',
  answer: [
    'За потвърждаване на резервацията е необходим депозит, 25% на човек, дължим до 7 дни след писменото потвърждение.',
    'Депозитът не подлежи на възстановяване. В случай че анулирате резервацията повече от 45 дни преди датата на отпътуване, пълният му размер може да бъде използван като кредит за бъдещо пътуване, след приспадане на административна такса от 100 евро.',
    'Пълното плащане се дължи най-късно 60 дни преди началото на пътуването. Някои услуги, като вътрешни полети, разрешителни или хотели в пиков сезон, може да изискват пълно предплащане и да не се възстановяват.',
    'При анулиране 45–30 дни преди отпътуване се възстановява платената сума без депозита, при 29–15 дни се възстановяват 30%, а при по-малко от 14 дни сумата не се възстановява.',
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
export function tourFaqItems(
  tour: TourDetailContent,
  siteId: 'omaya' | 'amelia' = 'omaya',
): readonly TourFaqItem[] {
  const bookingConditions =
    siteId === 'amelia' ? AMELIA_BOOKING_CONDITIONS_FAQ : BOOKING_CONDITIONS_FAQ;

  return [...(tour.faq?.items ?? []), bookingConditions];
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
