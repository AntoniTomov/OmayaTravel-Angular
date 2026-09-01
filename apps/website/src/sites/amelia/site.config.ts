import { SiteConfig } from '../site.types';
import { AMELIA_SITE_CONTENT } from './content';

export const AMELIA_SITE_CONFIG: SiteConfig = {
  id: 'amelia',
  domain: 'ameliatravel.bg',
  locale: 'bg',
  brand: {
    name: 'Amelia Travel',
    tagline: 'Пътувания за жени в малки групи.',
    homeLabel: 'Начало на Amelia Travel',
    logoSrc: '/assets/images/amelia/brand/amelia-logo-transparent-dark-bg.png',
    solidLogoSrc: '/assets/images/amelia/brand/amelia-logo-transparent.png',
    logoAlt: 'Amelia Travel',
  },
  theme: {
    id: 'amelia',
    dataTheme: 'amelia',
    stylesheet: './theme.scss',
  },
  content: AMELIA_SITE_CONTENT,
  features: {
    showHeroSearch: false,
    showTravelMatch: true,
    showFeaturedTrips: true,
    showMission: true,
    showPrivateTours: false,
    showBlogPosts: false,
    showNewsletter: true,
  },
  analytics: {
    // TODO_AMELIA_GA4: replace after the Amelia GA4 property is created.
    gaMeasurementId: '',
    metaPixelId: '1088639487435953',
  },
  seo: {
    canonicalHost: 'https://ameliatravel.bg',
    defaultTitle: 'Amelia Travel | Пътувания за жени в малки групи',
    defaultDescription:
      'Пътувания за жени в малки групи с внимателно подбрани маршрути, културни срещи и спокойна подкрепа по пътя.',
    ogImage: '/assets/images/amelia/home/hero-3.avif',
    locale: 'bg_BG',
  },
  contact: {
    email: 'info@ameliatravel.bg',
    phoneNumbers: [],
    resendFrom: 'Amelia Travel <website@ameliatravel.bg>',
    resendReplyTo: 'info@ameliatravel.bg',
  },
  newsletter: {
    mailchimpAudienceIdEnvVar: 'AMELIA_MAILCHIMP_AUDIENCE_ID',
    tags: ['amelia', 'bg'],
  },
};
