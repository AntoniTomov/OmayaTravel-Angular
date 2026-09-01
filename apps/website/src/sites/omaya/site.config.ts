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
    showHeroSearch: true,
    showTravelMatch: true,
    showFeaturedTrips: true,
    showMission: true,
    showPrivateTours: true,
    showBlogPosts: true,
    showNewsletter: true,
  },
  analytics: {
    gaMeasurementId: 'G-2F24XF4XZ8',
    metaPixelId: '1606463407092899',
  },
  seo: {
    canonicalHost: 'https://omayatravel.com',
    defaultTitle: 'Omaya Travel | Small Group Tours for Curious Travellers',
    defaultDescription:
      'Small-group trips for curious travellers in their 20s to 40s, designed to bring you closer to the places you visit and the people you travel with.',
    ogImage: '/assets/images/home-page/carousel/HomePageCoverPhoto-3.webp',
    locale: 'en_US',
  },
  contact: {
    email: 'info@omayatravel.com',
    phoneNumbers: ['+359 88 973 5274', '+359 87 996 5946'],
    resendFrom: 'Omaya Travel <website@omayatravel.com>',
    resendReplyTo: 'info@omayatravel.com',
  },
  newsletter: {
    mailchimpAudienceIdEnvVar: 'OMAYA_MAILCHIMP_AUDIENCE_ID',
    tags: ['omaya'],
  },
};
