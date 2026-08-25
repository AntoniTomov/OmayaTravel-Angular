import { SiteConfig } from '../site.types';
import { OMAYA_SITE_CONTENT } from './content';

export const OMAYA_SITE_CONFIG: SiteConfig = {
  id: 'omaya',
  domain: 'omayatravel.com',
  locale: 'en',
  brand: {
    name: 'Omaya Travel',
    tagline: 'See the World. Meet Its People.',
    homeLabel: 'Omaya Travel home',
    logoSrc: '/assets/images/home-page/company-logo/Omaya-Travel-Logo-e1780484928941.webp',
    solidLogoSrc: '/assets/images/home-page/company-logo/Black_logo-e1781169999413.webp',
    logoAlt: 'Omaya Travel',
  },
  theme: {
    id: 'omaya',
    dataTheme: 'omaya',
    stylesheet: './theme.scss',
  },
  content: OMAYA_SITE_CONTENT,
  features: {
    showTravelMatch: true,
    showFeaturedTrips: true,
    showMission: true,
    showPrivateTours: true,
    showBlogPosts: true,
    showNewsletter: true,
  },
  analytics: {
    metaPixelId: '1606463407092899',
  },
};
