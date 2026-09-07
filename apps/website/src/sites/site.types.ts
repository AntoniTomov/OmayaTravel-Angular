import {
  HeroSlide,
  NavigationGroup,
  NavigationLink,
  SearchIndexItem,
  TripSearchDestination,
} from '../app/shared/content/homepage-content';
import { TourCardContent } from '../app/shared/content/tour-list-content';

export type SiteId = 'omaya' | 'amelia';
export type SiteLocale = 'en' | 'bg';

export interface SiteTheme {
  id: SiteId;
  dataTheme: string;
  stylesheet: string;
}

export interface SiteBrand {
  name: string;
  tagline: string;
  homeLabel: string;
  logoSrc: string;
  solidLogoSrc: string;
  logoAlt: string;
}

export interface SiteFeatureFlags {
  showTravelMatch: boolean;
  showFeaturedTrips: boolean;
  showMission: boolean;
  showPrivateTours: boolean;
  showBlogPosts: boolean;
  showNewsletter: boolean;
}

export interface SiteAnalytics {
  metaPixelId: string;
}

/**
 * Registered business facts published in the site's `TravelAgency` structured data.
 *
 * Every field here is a factual claim made to search engines, so a site config either states a
 * value accurately or omits the field. Never guess one to fill a gap.
 */
export interface SiteOrganisation {
  /** Registered company name, where it differs from the trading brand. */
  legalName: string;
  /** Bulgarian tour operator registration, exactly as issued. */
  registrationNumber: string;
  /** Company identifier (EIK in Bulgaria). */
  companyId: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  /** ISO 3166-1 alpha-2. */
  addressCountry: string;
  /** E.164, most-monitored number first. */
  telephones: readonly string[];
  foundingDate: string;
  /** Official profiles only. Strip any share or session tokens before adding a URL here. */
  sameAs: readonly string[];
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    slides: readonly HeroSlide[];
  };
  navigationGroups: readonly NavigationGroup[];
  navigationLinks: readonly NavigationLink[];
  tripSearchDestinations: readonly TripSearchDestination[];
  tripSearchMonths: readonly string[];
  featuredTours: readonly TourCardContent[];
  searchIndex: readonly SearchIndexItem[];
  enabledRoutes: readonly string[];
}

export interface SiteConfig {
  id: SiteId;
  domain: string | null;
  locale: SiteLocale;
  brand: SiteBrand;
  theme: SiteTheme;
  content: SiteContent;
  features: SiteFeatureFlags;
  analytics: SiteAnalytics;
  /** Omitted until a brand's registered details are confirmed; the schema simply drops the fields. */
  organisation?: SiteOrganisation;
}
