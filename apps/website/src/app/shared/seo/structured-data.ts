import { BlogPostContent } from '../content/blog-content';
import { SiteOrganisation } from '../../../sites/site.types';
import { TourDetailContent } from '../content/tour-content';

/**
 * JSON-LD builders.
 *
 * Structured data is a factual claim made to search engines, so every value here is either derived
 * from real content in the repo or deliberately omitted. Registered business facts come from the
 * active site's `organisation` block; a brand that has not supplied one simply ships fewer fields
 * rather than guessed ones.
 */
export type JsonLd = Record<string, unknown>;

export interface SeoSiteIdentity {
  name: string;
  canonicalHost: string;
  logoUrl: string;
  email: string;
  locale: string;
  organisation?: SiteOrganisation;
}

/**
 * The site's `TravelAgency` entity.
 *
 * Every field is a factual claim published to Google, so anything the site config does not state is
 * left out rather than guessed. A brand with no `organisation` block still gets valid schema — just
 * the name, URL, logo and email.
 */
export function organizationJsonLd(identity: SeoSiteIdentity): JsonLd {
  const organisation = identity.organisation;

  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${identity.canonicalHost}/#organization`,
    name: identity.name,
    url: `${identity.canonicalHost}/`,
    logo: absoluteUrl(identity.canonicalHost, identity.logoUrl),
    image: absoluteUrl(identity.canonicalHost, identity.logoUrl),
    email: identity.email,
    ...(organisation
      ? {
          legalName: organisation.legalName,
          foundingDate: organisation.foundingDate,
          telephone: organisation.telephones[0],
          address: {
            '@type': 'PostalAddress',
            streetAddress: organisation.streetAddress,
            addressLocality: organisation.addressLocality,
            postalCode: organisation.postalCode,
            addressCountry: organisation.addressCountry,
          },
          contactPoint: organisation.telephones.map((telephone) => ({
            '@type': 'ContactPoint',
            telephone,
            email: identity.email,
            contactType: 'customer service',
            availableLanguage: 'English',
          })),
          // The tour operator registration and company ID are the two identifiers a traveller or a
          // partner operator can actually verify against the Bulgarian register.
          identifier: [
            {
              '@type': 'PropertyValue',
              name: 'Tour operator registration',
              value: organisation.registrationNumber,
            },
            {
              '@type': 'PropertyValue',
              name: 'EIK',
              value: organisation.companyId,
            },
          ],
          sameAs: organisation.sameAs,
        }
      : {}),
  };
}

/**
 * Site identity only.
 *
 * Deliberately carries no `potentialAction` / `SearchAction`: Google retired the sitelinks search
 * box in November 2024, so that block feeds nothing and is just weight in every page's head.
 * https://developers.google.com/search/blog/2024/10/sitelinks-search-box
 */
export function webSiteJsonLd(identity: SeoSiteIdentity): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${identity.canonicalHost}/#website`,
    name: identity.name,
    url: `${identity.canonicalHost}/`,
    inLanguage: identity.locale,
    publisher: { '@id': `${identity.canonicalHost}/#organization` },
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
    // No `availability`: an earlier version hardcoded every Offer to InStock, which asserted to
    // Google that all eight tours always have places on every departure. Nothing in the content
    // model tracks remaining capacity, so the honest move is to omit the field. Add it back only
    // when real availability is modelled — a wrong availability claim is worse than none.
    offers: {
      '@type': 'Offer',
      price: tour.price.amount,
      priceCurrency: tour.price.currency,
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
