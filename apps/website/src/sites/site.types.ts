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
}
