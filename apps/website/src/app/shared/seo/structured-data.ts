import { BlogPostContent } from '../content/blog-content';
import { TourDetailContent } from '../content/tour-content';

/**
 * JSON-LD builders.
 *
 * Structured data is a factual claim made to search engines, so every value here is either derived
 * from real content in the repo or deliberately omitted. Fields we cannot verify — postal address,
 * public phone number, licence number, social profiles — are left out rather than guessed; see the
 * TODO_SEO_ORGANISATION note below.
 */
export type JsonLd = Record<string, unknown>;

export interface SeoSiteIdentity {
  name: string;
  canonicalHost: string;
  logoUrl: string;
  email: string;
  locale: string;
}

/**
 * TODO_SEO_ORGANISATION: add `address` (PostalAddress), `telephone`, and `sameAs` (social profile
 * URLs) once the business supplies them. Google shows these in the knowledge panel and they
 * strengthen a small operator's entity signal considerably.
 */
export function organizationJsonLd(identity: SeoSiteIdentity): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${identity.canonicalHost}/#organization`,
    name: identity.name,
    url: `${identity.canonicalHost}/`,
    logo: absoluteUrl(identity.canonicalHost, identity.logoUrl),
    image: absoluteUrl(identity.canonicalHost, identity.logoUrl),
    email: identity.email,
  };
}

export function webSiteJsonLd(identity: SeoSiteIdentity): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${identity.canonicalHost}/#website`,
    name: identity.name,
    url: `${identity.canonicalHost}/`,
    inLanguage: identity.locale,
    publisher: { '@id': `${identity.canonicalHost}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${identity.canonicalHost}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(
  identity: SeoSiteIdentity,
  entries: readonly BreadcrumbEntry[],
): JsonLd | null {
  if (entries.length < 2) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: absoluteUrl(identity.canonicalHost, entry.path),
    })),
  };
}

export function tourJsonLd(
  identity: SeoSiteIdentity,
  tour: TourDetailContent,
  canonical: string,
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.seo.description,
    url: canonical,
    image: absoluteUrl(identity.canonicalHost, tour.heroImage.src),
    touristType: tour.category,
    provider: { '@id': `${identity.canonicalHost}/#organization` },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: tour.itinerary.length,
      itemListElement: tour.itinerary.map((day) => ({
        '@type': 'ListItem',
        position: day.day,
        name: day.title,
      })),
    },
    offers: {
      '@type': 'Offer',
      price: tour.price.amount,
      priceCurrency: tour.price.currency,
      availability: 'https://schema.org/InStock',
      url: canonical,
    },
  };
}

export function faqJsonLd(tour: TourDetailContent): JsonLd | null {
  if (!tour.faq?.items.length) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tour.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.join(' '),
      },
    })),
  };
}

export function blogPostingJsonLd(
  identity: SeoSiteIdentity,
  post: BlogPostContent,
  canonical: string,
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: canonical,
    mainEntityOfPage: canonical,
    image: absoluteUrl(identity.canonicalHost, (post.heroImage ?? post.image).src),
    datePublished: post.publishedAt,
    inLanguage: identity.locale,
    author: { '@id': `${identity.canonicalHost}/#organization` },
    publisher: { '@id': `${identity.canonicalHost}/#organization` },
  };
}

export function absoluteUrl(canonicalHost: string, path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${canonicalHost}${path.startsWith('/') ? path : `/${path}`}`;
}
