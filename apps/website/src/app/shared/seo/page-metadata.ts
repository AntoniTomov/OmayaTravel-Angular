/**
 * Per-page search metadata.
 *
 * Tour pages are deliberately absent: every tour already carries authored `seo.title` and
 * `seo.description` copy in `tour-content.ts`, and {@link OmayaSeo} reads that verbatim rather than
 * duplicating it here. The same applies to blog articles, which derive from the post's own title
 * and excerpt. This registry covers the pages that have no authored copy of their own.
 */
export interface PageMetadata {
  title: string;
  description: string;
  /** Root-relative preview image for Open Graph and Twitter cards. */
  image?: string;
  /** Keeps a page out of the index without removing it from the site. */
  noIndex?: boolean;
  /** Open Graph object type. Blog articles are `article`; everything else defaults to `website`. */
  ogType?: 'website' | 'article';
  /** ISO date for `article:published_time`. Only meaningful alongside `ogType: 'article'`. */
  publishedTime?: string;
}

/**
 * Fallback preview image for pages with no hero of their own.
 *
 * TODO_SEO_SOCIAL_IMAGE: replace with a purpose-made 1200x630 share image. This carousel frame is
 * the right subject but the wrong aspect ratio, so social previews crop it.
 */
export const DEFAULT_SOCIAL_IMAGE =
  '/assets/images/home-page/carousel/responsive/HomePageCoverPhoto-5-1200w.webp';

const BRAND_SUFFIX = 'Omaya Travel';

/** Route metadata keyed by the `routeKey` set in `app.routes.ts`. */
export const STATIC_PAGE_METADATA: Readonly<Record<string, PageMetadata>> = {
  home: {
    title: `Small Group Adventure Tours & Holidays | ${BRAND_SUFFIX}`,
    description:
      'Small group adventure tours and holidays to Bulgaria, Kyrgyzstan, Morocco and Algeria. Women-only and solo traveller departures, led in English by local guides.',
  },
  search: {
    title: `Search | ${BRAND_SUFFIX}`,
    description: 'Search Omaya Travel tours, destinations and travel guides.',
    noIndex: true,
  },
  'enquire-now': {
    title: `Enquire About a Trip | ${BRAND_SUFFIX}`,
    description:
      'Ask us anything about a departure, a destination or a custom itinerary. We answer every enquiry personally, usually within one working day.',
  },
  'blog-list': {
    title: `Travel Stories and Destination Guides | ${BRAND_SUFFIX}`,
    description:
      'First-hand guides to the places we actually travel: Song-Kul in Kyrgyzstan, Rila Monastery in Bulgaria, the Algerian Sahara and more.',
  },
  // TODO_SEO_DESTINATIONS: drop `noIndex` here and in DESTINATION_PAGE_METADATA once these pages
  // render real content. They currently render `PublicRoutePlaceholder`, whose only heading is
  // "Public route placeholder" — indexing that would put five near-empty pages in front of Google
  // and drag the whole domain's quality signal down. The metadata below is written and ready.
  'destination-hub': {
    title: `Destinations We Travel | ${BRAND_SUFFIX}`,
    description:
      'Bulgaria, Kyrgyzstan, Morocco and Algeria — four countries we know first-hand, with small group departures throughout the year.',
    noIndex: true,
  },

  // Tour listings. See the note on DESTINATION_PAGE_METADATA for why titles carry both
  // "tours" and "holidays".
  'tour-listing-tours-list': {
    title: `All Small Group Tours & Holidays | ${BRAND_SUFFIX}`,
    description:
      'Every Omaya Travel departure in one place: classic, women-only and solo traveller small group tours across Bulgaria, Kyrgyzstan, Morocco and Algeria.',
  },
  'tour-listing-classic-tours': {
    title: `Classic Small Group Tours & Holidays | ${BRAND_SUFFIX}`,
    description:
      'Our classic small group tours, open to all travellers. Local guides, small groups and itineraries built around the places rather than the checklist.',
  },
  'tour-listing-women-only-tours': {
    title: `Women Only Small Group Holidays & Tours | ${BRAND_SUFFIX}`,
    description:
      'Women-only small group tours and holidays to Kyrgyzstan, Bulgaria and Morocco. For women travelling solo or together, with women-led guiding on the ground.',
  },
  'tour-listing-solo-travellers-tours': {
    title: `Solo Traveller Small Group Holidays & Tours | ${BRAND_SUFFIX}`,
    description:
      'Small group tours and holidays built for solo travellers, with no single supplement traps and a group small enough that nobody stays a stranger for long.',
  },
  'tour-listing-all-ages-tours': {
    title: `All Ages Small Group Tours & Holidays | ${BRAND_SUFFIX}`,
    description:
      'Small group adventures suited to travellers of every age, with a pace that leaves room to look around rather than tick things off.',
  },
  'tour-listing-private-tour-planning': {
    title: `Plan a Private Tour | ${BRAND_SUFFIX}`,
    description:
      'Tell us where you want to go and how you like to travel, and we will build a private itinerary around it. No fixed dates, no fixed group.',
  },
  'tour-listing-september-2027': {
    title: `September 2027 Departures | ${BRAND_SUFFIX}`,
    description:
      'Small group tours departing in September 2027. Late-summer light, thinner crowds and the best walking weather of the year across our destinations.',
  },
  'tour-listing-calendar-2027/september': {
    title: `September 2027 Tour Calendar | ${BRAND_SUFFIX}`,
    description:
      'Every Omaya Travel departure running in September 2027, with dates, durations and availability at a glance.',
  },
  'tour-calendar-calendar': {
    title: `Tour Calendar and Departure Dates | ${BRAND_SUFFIX}`,
    description:
      'All upcoming Omaya Travel departures by month, so you can find a small group tour that fits the time you actually have.',
  },
  'tour-calendar-calendar-2027': {
    title: `2027 Tour Calendar | ${BRAND_SUFFIX}`,
    description:
      'Our full 2027 departure calendar across Bulgaria, Kyrgyzstan, Morocco and Algeria, with dates and durations for every small group tour.',
  },

  // Static pages
  'static-contact': {
    title: `Contact Omaya Travel`,
    description:
      'Talk to the people who run the trips. Email us, send a question, or ask for a call — we answer every message personally.',
  },
  'static-faq': {
    title: `Frequently Asked Questions | ${BRAND_SUFFIX}`,
    description:
      'Group sizes, booking and cancellation, what is included, solo travellers, fitness levels and visas — the questions travellers ask us most.',
  },
  'static-our-story': {
    title: `Our Story | ${BRAND_SUFFIX}`,
    description:
      'Why Omaya Travel exists, how we choose the places we go, and what a small group means to us in practice rather than in marketing copy.',
  },
  'static-why-book-with-us': {
    title: `Why Book With Us | ${BRAND_SUFFIX}`,
    description:
      'Licensed operator, genuinely small groups, local guides and itineraries we have walked ourselves. What you get when you book with Omaya Travel.',
  },
  'static-your-dmc-partner-in-bulgaria': {
    title: `Bulgaria DMC and Destination Management | ${BRAND_SUFFIX}`,
    description:
      'Licensed Bulgarian destination management company for international tour operators. Ground handling, itinerary design and local expertise across Bulgaria.',
  },
  'static-private-tours-your-trip-your-rules': {
    title: `Private Tours: Your Trip, Your Rules | ${BRAND_SUFFIX}`,
    description:
      'Private, custom-built itineraries for couples, families and small groups of friends. Your dates, your pace, your interests.',
  },
  'static-private-tour-form': {
    title: `Describe Your Private Tour | ${BRAND_SUFFIX}`,
    description:
      'Tell us about the trip you have in mind — where, when, how long and who is travelling — and we will come back with a private itinerary.',
  },
  'static-omaya-travel-license': {
    title: `Our Travel Licence | ${BRAND_SUFFIX}`,
    description:
      'Omaya Travel operates as a licensed tour operator. Our licence details and what that protection means for you as a traveller.',
  },
  'static-not-yet-but-soon': {
    title: `Coming Soon | ${BRAND_SUFFIX}`,
    description: 'This trip is still being built. Check back soon, or ask us what is coming next.',
    noIndex: true,
  },
  'static-3122-2': {
    title: `Omaya Travel`,
    description: 'Omaya Travel.',
    noIndex: true,
  },

  // Legal
  'static-privacy-policy': {
    title: `Privacy Policy | ${BRAND_SUFFIX}`,
    description:
      'How Omaya Travel collects, uses and protects your personal data, and the rights you have over it.',
  },
  'static-cookie-policy': {
    title: `Cookie Policy | ${BRAND_SUFFIX}`,
    description:
      'The cookies Omaya Travel uses, what each one does, and how to change your preferences at any time.',
  },
  'static-termsconditions': {
    title: `Terms and Conditions | ${BRAND_SUFFIX}`,
    description:
      'The booking terms and conditions that apply to every Omaya Travel tour, including payment, changes and cancellation.',
  },

  // Error pages
  'not-found': {
    title: `Page Not Found | ${BRAND_SUFFIX}`,
    description: 'This page does not exist. Browse our destinations and tours instead.',
    noIndex: true,
  },
  unknown: {
    title: `Page Not Found | ${BRAND_SUFFIX}`,
    description: 'This page does not exist. Browse our destinations and tours instead.',
    noIndex: true,
  },
};

/**
 * Destination detail metadata, keyed by slug.
 *
 * TODO_SEO_DESTINATIONS: these routes still render `PublicRoutePlaceholder`, whose only heading is
 * "Public route placeholder", so every entry here is `noIndex` for now. The copy is written and
 * ready — drop the `noIndex` flags (here and on `destination-hub`) the moment the pages render real
 * content, and they will enter the sitemap automatically. Indexing five near-empty pages would put
 * thin content in front of Google and drag the domain's quality signal down.
 *
 * Titles carry both "tours" and "holidays" deliberately: the UK is a primary market and UK
 * searchers use "holidays" as heavily as "tours", while American searchers use "tours" almost
 * exclusively. One title serves both.
 */
export const DESTINATION_PAGE_METADATA: Readonly<Record<string, PageMetadata>> = {
  bulgaria: {
    title: `Bulgaria Small Group Tours & Holidays | ${BRAND_SUFFIX}`,
    description:
      'Small group tours and holidays through Bulgaria: Rila Monastery, the Rhodope villages, Plovdiv and the Black Sea coast, guided by people who live there.',
    noIndex: true,
  },
  kyrgyzstan: {
    title: `Kyrgyzstan Small Group Tours & Holidays | ${BRAND_SUFFIX}`,
    description:
      'Small group tours and holidays across Kyrgyzstan: Song-Kul lake, the Tien Shan mountains, yurt stays and horseback days on the high summer pastures.',
    noIndex: true,
  },
  morocco: {
    title: `Morocco Small Group Tours & Holidays | ${BRAND_SUFFIX}`,
    description:
      'Small group tours and holidays through Morocco: the blue city of Chefchaouen, the Atlas mountains, Saharan dunes and the medinas in between.',
    noIndex: true,
  },
  algeria: {
    title: `Algeria Desert Tours & Holidays | ${BRAND_SUFFIX}`,
    description:
      'Small group desert expeditions into the Algerian Sahara: Tadrart Rouge, Tassili n’Ajjer rock art, desert camping and Tuareg hospitality.',
    noIndex: true,
  },
};

export function staticPageMetadata(routeKey: string | null | undefined): PageMetadata | undefined {
  return routeKey ? STATIC_PAGE_METADATA[routeKey] : undefined;
}

export function destinationPageMetadata(slug: string | null | undefined): PageMetadata | undefined {
  return slug ? DESTINATION_PAGE_METADATA[slug] : undefined;
}
