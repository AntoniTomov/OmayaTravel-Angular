import { SiteConfig } from '../site.types';
import { AMELIA_SITE_CONTENT } from './content';

export const AMELIA_SITE_CONFIG: SiteConfig = {
  id: 'amelia',
  // TODO_DUMMY_AMELIA_DOMAIN: replace with the purchased production domain.
  domain: null,
  locale: 'bg',
  brand: {
    name: 'Amelia',
    tagline: 'Пътувания за жени в малки групи.',
    homeLabel: 'Начало на Amelia',
    // TODO_DUMMY_AMELIA_LOGO: replace with Amelia logo files when branding is ready.
    logoSrc: '/assets/images/home-page/company-logo/Black_logo-e1781169999413.webp',
    solidLogoSrc: '/assets/images/home-page/company-logo/Black_logo-e1781169999413.webp',
    logoAlt: 'Amelia',
  },
  theme: {
    id: 'amelia',
    dataTheme: 'amelia',
    stylesheet: './theme.scss',
  },
  content: AMELIA_SITE_CONTENT,
  features: {
    showTravelMatch: true,
    showFeaturedTrips: true,
    showMission: true,
    showPrivateTours: false,
    showBlogPosts: false,
    showNewsletter: true,
  },
  analytics: {
    metaPixelId: '1088639487435953',
  },
};
