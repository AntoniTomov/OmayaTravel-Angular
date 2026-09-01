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
      width: number | string;
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
}
