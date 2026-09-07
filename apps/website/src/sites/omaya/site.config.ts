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
