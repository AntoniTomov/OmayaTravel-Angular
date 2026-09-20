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
  /** Intrinsic size of each logo file, so width and height reserve the right shape before it loads. */
  logoSize: SiteImageSize;
  solidLogoSize: SiteImageSize;
  logoAlt: string;
}

export interface SiteImageSize {
  width: number;
  height: number;
}

export interface SiteFeatureFlags {
  showHeroSearch: boolean;
  showTravelMatch: boolean;
  showFeaturedTrips: boolean;
  showMission: boolean;
  showPrivateTours: boolean;
  showBlogPosts: boolean;
  showNewsletter: boolean;
}

export interface SiteAnalytics {
  gaMeasurementId: string;
  metaPixelId: string;
}

export interface SiteSeo {
  canonicalHost: string;
  defaultTitle: string;
  defaultDescription: string;
  ogImage: string;
  locale: string;
}

export interface SiteContact {
  email: string;
  phoneNumbers: readonly string[];
  resendFrom: string;
  resendReplyTo: string;
}

export interface SiteNewsletter {
  mailchimpAudienceIdEnvVar: string;
  tags: readonly string[];
}

export interface SiteSocialLink {
  label: string;
  url: string;
  icon: 'social-facebook' | 'social-instagram' | 'social-linkedin';
}

export interface SitePageSeo {
  canonicalPath: string;
  title: string;
  description?: string;
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
  travelMatchSection?: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    items: readonly {
      title: string;
      description: string;
    }[];
  };
  missionSection?: {
    title: string;
    copy: string;
    cta: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  navigationGroups: readonly NavigationGroup[];
  navigationLinks: readonly NavigationLink[];
  tripSearchDestinations: readonly TripSearchDestination[];
  tripSearchMonths: readonly string[];
  featuredToursTitle?: string;
  featuredTours: readonly TourCardContent[];
  searchIndex: readonly SearchIndexItem[];
  enabledRoutes: readonly string[];
  /**
   * Routes that must never be served or indexed for this site, even when
   * `enabledRoutes` contains the `*` wildcard. Keeps brand-specific pages
   * (for example Amelia-only Bulgarian articles) out of the other brand.
   */
  excludedRoutes?: readonly string[];
  pageSeo?: readonly SitePageSeo[];
}

export interface SiteConfig {
  id: SiteId;
  domain: string | null;
  /**
   * Port this site answers on when a dev server runs it locally, where there is no domain to
   * resolve from. Each site owns a distinct port so `localhost` serves one brand per port rather
   * than needing a build configuration or a `?site=` param to tell them apart.
   */
  devPort: number;
  /**
   * Further hostnames that serve this site — staging and preview origins.
   *
   * These decide **rendering only**. They are deliberately not published domains: `robots.txt`,
   * `X-Robots-Tag` and canonical tags all key off `domain`, so a host listed here still answers
   * `noindex, nofollow` and still points its canonicals at the real site. Without this a staging
   * subdomain would fall through to the default site and serve the wrong brand, which is exactly
   * the bug it exists to prevent.
   */
  additionalHosts?: readonly string[];
  locale: SiteLocale;
  brand: SiteBrand;
  theme: SiteTheme;
  content: SiteContent;
  features: SiteFeatureFlags;
  analytics: SiteAnalytics;
  seo: SiteSeo;
  contact: SiteContact;
  newsletter: SiteNewsletter;
  socialLinks: readonly SiteSocialLink[];
  /** Omitted until a brand's registered details are confirmed; the schema simply drops the fields. */
  organisation?: SiteOrganisation;
}
