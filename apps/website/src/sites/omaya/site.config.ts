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
    logoSize: { width: 400, height: 267 },
    solidLogoSize: { width: 400, height: 267 },
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
    showNotYetNewsletter: false,
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
  socialLinks: [
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/omayatravel/',
      icon: 'social-instagram',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61576518854858',
      icon: 'social-facebook',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/omaya-travel/about/',
      icon: 'social-linkedin',
    },
  ],
  organisation: {
    legalName: 'Omaya Travel EOOD',
    // Cyrillic РК, matching the registration as issued and as shown on /omaya-travel-license/.
    registrationNumber: 'РК-01-8706',
    companyId: '208663654',
    streetAddress: '61 Hristo Botev St.',
    addressLocality: 'Kardzhali',
    postalCode: '6600',
    addressCountry: 'BG',
    telephones: ['+359889735274', '+359879965946'],
    foundingDate: '2026',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61576518854858',
      // Share/session tokens (?stkn=…) are stripped: they are personal to whoever copied the link
      // and must not be published in structured data.
      'https://www.instagram.com/omayatravel',
      'https://www.linkedin.com/company/omaya-travel/',
    ],
  },
};
