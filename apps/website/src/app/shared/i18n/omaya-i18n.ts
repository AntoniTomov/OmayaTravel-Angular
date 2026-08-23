import { Injectable, signal } from '@angular/core';

import { NavigationGroup, NavigationLink, TripSearchDestination } from '../content/homepage-content';

export type OmayaLocale = 'en' | 'bg';

interface FeaturedTripText {
  eyebrow: string;
  title: string;
  price: string;
  duration: string;
  description: string;
}

interface TravelMatchText {
  title: string;
  description: string;
}

interface TranslationDictionary {
  common: Record<string, string>;
  header: Record<string, string>;
  footer: Record<string, string>;
  homepage: Record<string, string>;
  navigationGroups: readonly NavigationGroup[];
  navigationLinks: readonly NavigationLink[];
  destinations: readonly TripSearchDestination[];
  months: readonly string[];
  travelMatch: readonly TravelMatchText[];
  featuredTrips: readonly FeaturedTripText[];
}

const EN: TranslationDictionary = {
  common: {
    english: 'English',
    bulgarian: 'Bulgarian',
  },
  header: {
    followUs: 'Follow us:',
    homeLabel: 'Omaya Travel home',
    openMenu: 'Open navigation menu',
    openSearch: 'Open site search',
    searchTitle: 'Search Omaya Travel',
    closeSearch: 'Close',
    searchLabel: 'Search term',
    searchButton: 'Search',
    emptySearch: 'Type a search term.',
    languageLabel: 'Language',
  },
  footer: {
    tagline: 'See the World. Meet Its People.',
    contactUs: 'Contact us:',
    followUs: 'Follow us:',
    latestPosts: 'Latest Posts',
    about: 'About',
    whyBook: 'Why book with us?',
    ourStory: 'Our story',
    faqs: 'FAQs',
    paymentMethods: 'Payment Methods',
    legalPrivacy: 'Legal & Privacy',
    cookiePolicy: 'Cookie Policy',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    license: 'Omaya Travel License',
    copyright: '© 2026 Omaya Travel, All Rights Reserved',
    backToTop: 'Back to top',
  },
  homepage: {
    heroTitle: 'See the world. Meet its people',
    heroSubtitle:
      "Explore the world's wonders through small-group travel - meaningful, immersive, and carefully curated",
    whereTo: 'Where to?',
    when: 'When?',
    findNow: 'Find now',
    chooseDestinationWithMonth: 'Choose a destination to find a trip.',
    chooseDestination: 'Choose where you want to go.',
    carouselLabel: 'Homepage carousel',
    showSlide: 'Show slide',
    travelMatchTitle: 'Are we your travel match?',
    travelMatchSubtitle:
      "If you’re nodding along, you might have just found your travel community.",
    featuredTripsTitle: 'Trips worth talking about',
    featuredTripsControls: 'Featured trips carousel',
    previousTrip: 'Show previous trip',
    nextTrip: 'Show next trip',
    perPerson: '/ per person',
    missionTitle: 'Our mission',
    missionCopy:
      'If you share our desire to rediscover the human side of travel - through cultural encounters, thoughtful journeys, and small groups- you might feel at home with Omaya. Join us to explore Central Asia, North Africa, the Middle East, the Balkans, and beyond',
    missionCta: 'Meet Omaya',
    privateToursTitle: 'Private tours',
    privateToursCopy:
      'Prefer to travel on your own schedule? We also offer private journeys in all our destinations-perfect for traveling with friends, family, or on dates that suit you.',
    privateToursCta: 'Contact us for more details',
    blogTitle: 'Blog Posts',
    blogCopyPrefix: 'One inspiring story is',
    blogCopyStrongOne: 'worth traveling',
    blogCopyMiddle: 'Discover more about',
    blogCopyStrongTwo: 'local food, tradition and history',
    blogCopySuffix: 'Read the stories that make you want to travel.',
  },
  navigationGroups: [
    {
      label: 'Destinations',
      links: [
        { label: 'Algeria', target: '/tour-item/algeria-desert-expedition-tadrart-rouge/' },
        { label: 'Bulgaria', target: '/tour-item/bulgaria-beyond-the-ordinary/' },
        { label: 'Kyrgyzstan', target: '/tour-item/kyrgyzstan-tour/' },
        { label: 'Morocco', target: '/tour-item/morocco-tour/' },
      ],
    },
    {
      label: 'Tours',
      links: [
        { label: 'Classic Tours', target: '/classic-tours/' },
        { label: 'Women Only', target: '/women-only-tours/' },
        { label: 'Solo Travelers', target: '/solo-travellers-tours/' },
        { label: 'Private Tours', target: '/private-tours-your-trip-your-rules/' },
        {
          label: 'All Tours',
          target: '/tours-list/',
          children: [
            { label: 'Tour List', target: '/tours-list/' },
            { label: 'Calendar 2026', target: '/calendar/' },
            { label: 'Calendar 2027', target: '/calendar-2027/' },
          ],
        },
      ],
    },
    {
      label: 'About Us',
      links: [
        { label: 'Our Story', target: '/our-story/' },
        { label: 'Why book with us?', target: '/why-book-with-us/' },
        { label: 'Your DMC Partner in Bulgaria', target: '/your-dmc-partner-in-bulgaria/' },
        { label: 'Contact', target: '/contact/' },
        { label: 'FAQ', target: '/faq/' },
      ],
    },
  ],
  navigationLinks: [
    { label: 'Inspiring Stories', target: '/blog-list-2/' },
    { label: 'Enquire Now', target: '/enquire-now/' },
  ],
  destinations: [
    { label: 'Algeria', target: '/tour-item/algeria-desert-expedition-tadrart-rouge/' },
    { label: 'Bulgaria', target: '/tour-item/bulgaria-beyond-the-ordinary/' },
    { label: 'Kyrgyzstan', target: '/tour-item/kyrgyzstan-tour/' },
    { label: 'Morocco', target: '/tour-item/morocco-tour/' },
  ],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  travelMatch: [
    {
      title: 'Curious about the world',
      description: 'You want to go beyond the highlights and get to know the places you visit.',
    },
    {
      title: 'Conversations over bar crawls',
      description:
        'You’d rather share a beer at a local spot and have a deep conversation than spend the night partying.',
    },
    {
      title: 'Your kind of people',
      description:
        'You want to travel with people in their 20s to 40s who share your curiosity, openness and mindset.',
    },
    {
      title: 'Small groups',
      description:
        'You prefer travelling in groups of up to 12, where there’s room to connect with the people you’re travelling with.',
    },
  ],
  featuredTrips: [
    {
      eyebrow: 'Classic Tours',
      title: 'Kyrgyzstan Tour',
      price: 'EUR1490',
      duration: '9 Days 8 Nights',
      description:
        "Travel through Kyrgyzstan's mountain passes, alpine lakes, yurt camps, and nomadic traditions on a small-group journey shaped by wild landscapes.",
    },
    {
      eyebrow: 'Classic Tours',
      title: 'Bulgaria Beyond the Ordinary',
      price: 'EUR1050',
      duration: '8 Days 7 Nights',
      description:
        'Ancient monasteries, Rhodope village rituals, Roman ruins, and a brutalist monument lost in the clouds - this 8-day Bulgaria journey goes far beyond the surface.',
    },
    {
      eyebrow: 'Classic Tours',
      title: 'Morocco - Blue Cities & Golden Dunes',
      price: 'EUR2300',
      duration: '10 Days 9 Nights',
      description:
        "Somewhere between the blue-washed walls of Chefchaouen and a Berber family's tent deep in the Sahara, this journey becomes something more than travel.",
    },
    {
      eyebrow: 'Classic Tours',
      title: 'Algeria Desert Expedition (Tadrart Rouge)',
      price: 'EUR1450',
      duration: '8 Days 7 Nights',
      description:
        "Explore Algeria's Tassili n'Ajjer on an 8-day guided desert expedition into the Tadrart - one of the Sahara's most remote and spectacular landscapes. Walk among 8,000-year-old Neolithic rock art, cross towering red dune fields, and camp under an extraordinary star-filled sky with Tuareg guides who know this wilderness intimately.",
    },
  ],
};

const BG: TranslationDictionary = {
  common: {
    english: 'Английски',
    bulgarian: 'Български',
  },
  header: {
    followUs: 'Последвайте ни:',
    homeLabel: 'Начало на Omaya Travel',
    openMenu: 'Отвори менюто',
    openSearch: 'Отвори търсенето',
    searchTitle: 'Търсене в Omaya Travel',
    closeSearch: 'Затвори',
    searchLabel: 'Търсене',
    searchButton: 'Търси',
    emptySearch: 'Въведете дума за търсене.',
    languageLabel: 'Език',
  },
  footer: {
    tagline: 'Виж света. Срещни хората му.',
    contactUs: 'Свържете се с нас:',
    followUs: 'Последвайте ни:',
    latestPosts: 'Последни публикации',
    about: 'За нас',
    whyBook: 'Защо да пътувате с нас?',
    ourStory: 'Нашата история',
    faqs: 'Често задавани въпроси',
    paymentMethods: 'Начини на плащане',
    legalPrivacy: 'Правна информация',
    cookiePolicy: 'Политика за бисквитки',
    privacyPolicy: 'Политика за поверителност',
    terms: 'Общи условия',
    license: 'Лиценз на Omaya Travel',
    copyright: '© 2026 Omaya Travel, всички права запазени',
    backToTop: 'Обратно нагоре',
  },
  homepage: {
    heroTitle: 'Виж света. Срещни хората му',
    heroSubtitle:
      'Открий чудесата на света чрез малки групи - смислено, потапящо и внимателно подбрано пътуване',
    whereTo: 'Накъде?',
    when: 'Кога?',
    findNow: 'Намери',
    chooseDestinationWithMonth: 'Изберете дестинация, за да намерим пътуване.',
    chooseDestination: 'Изберете накъде искате да пътувате.',
    carouselLabel: 'Карусел на началната страница',
    showSlide: 'Покажи слайд',
    travelMatchTitle: 'Подхождаме ли си за пътуване?',
    travelMatchSubtitle: 'Какво остава същото, независимо коя дестинация изберете.',
    featuredTripsTitle: 'Пътувания, за които си струва да се говори',
    featuredTripsControls: 'Карусел с избрани пътувания',
    previousTrip: 'Покажи предишното пътуване',
    nextTrip: 'Покажи следващото пътуване',
    perPerson: '/ на човек',
    missionTitle: 'Нашата мисия',
    missionCopy:
      'Ако споделяте желанието ни да преоткрием човешката страна на пътуването - чрез културни срещи, внимателно подбрани маршрути и малки групи - може да се почувствате у дома с Omaya. Присъединете се към нас, за да изследваме Централна Азия, Северна Африка, Близкия изток, Балканите и отвъд.',
    missionCta: 'Запознайте се с Omaya',
    privateToursTitle: 'Частни пътувания',
    privateToursCopy:
      'Предпочитате да пътувате по собствен график? Предлагаме и частни пътувания във всички наши дестинации - идеални за приятели, семейство или дати, които са удобни за вас.',
    privateToursCta: 'Свържете се с нас за повече информация',
    blogTitle: 'Блог',
    blogCopyPrefix: 'Една вдъхновяваща история си',
    blogCopyStrongOne: 'струва пътуването',
    blogCopyMiddle: 'Открийте повече за',
    blogCopyStrongTwo: 'местната храна, традиции и история',
    blogCopySuffix: 'Прочетете историите, които събуждат желание за път.',
  },
  navigationGroups: [
    {
      label: 'Дестинации',
      links: [
        { label: 'Алжир', target: '/tour-item/algeria-desert-expedition-tadrart-rouge/' },
        { label: 'България', target: '/tour-item/bulgaria-beyond-the-ordinary/' },
        { label: 'Киргизстан', target: '/tour-item/kyrgyzstan-tour/' },
        { label: 'Мароко', target: '/tour-item/morocco-tour/' },
      ],
    },
    {
      label: 'Турове',
      links: [
        { label: 'Класически турове', target: '/classic-tours/' },
        { label: 'Само за жени', target: '/women-only-tours/' },
        { label: 'Самостоятелни пътешественици', target: '/solo-travellers-tours/' },
        { label: 'Частни турове', target: '/private-tours-your-trip-your-rules/' },
        {
          label: 'Всички турове',
          target: '/tours-list/',
          children: [
            { label: 'Списък с турове', target: '/tours-list/' },
            { label: 'Календар 2026', target: '/calendar/' },
            { label: 'Календар 2027', target: '/calendar-2027/' },
          ],
        },
      ],
    },
    {
      label: 'За нас',
      links: [
        { label: 'Нашата история', target: '/our-story/' },
        { label: 'Защо да пътувате с нас?', target: '/why-book-with-us/' },
        { label: 'Вашият DMC партньор в България', target: '/your-dmc-partner-in-bulgaria/' },
        { label: 'Контакт', target: '/contact/' },
        { label: 'FAQ', target: '/faq/' },
      ],
    },
  ],
  navigationLinks: [
    { label: 'Вдъхновяващи истории', target: '/blog-list-2/' },
    { label: 'Запитване', target: '/enquire-now/' },
  ],
  destinations: [
    { label: 'Алжир', target: '/tour-item/algeria-desert-expedition-tadrart-rouge/' },
    { label: 'България', target: '/tour-item/bulgaria-beyond-the-ordinary/' },
    { label: 'Киргизстан', target: '/tour-item/kyrgyzstan-tour/' },
    { label: 'Мароко', target: '/tour-item/morocco-tour/' },
  ],
  months: [
    'Януари',
    'Февруари',
    'Март',
    'Април',
    'Май',
    'Юни',
    'Юли',
    'Август',
    'Септември',
    'Октомври',
    'Ноември',
    'Декември',
  ],
  travelMatch: [
    {
      title: 'Пътувайте с хора на вашата възраст',
      description:
        'Хора на 20-45 години, които са истински любопитни към местата, които посещават.',
    },
    {
      title: 'Внимателно създадени маршрути',
      description:
        'Всеки маршрут съчетава емблематични места с културни и местни преживявания.',
    },
    {
      title: 'Малки групи',
      description:
        'С умишлено малки групи нашите пътувания дават повече възможности за връзка с хората и местата.',
    },
    {
      title: 'Опитен екип',
      description:
        'От резервацията до самото пътуване, нашият екип и местни водачи се грижат всичко да върви гладко.',
    },
  ],
  featuredTrips: [
    {
      eyebrow: 'Класически турове',
      title: 'Киргизстан',
      price: 'EUR1490',
      duration: '9 дни / 8 нощувки',
      description:
        'Пътуване през планински проходи, алпийски езера, юртови лагери и номадски традиции в малка група, оформено от диви пейзажи.',
    },
    {
      eyebrow: 'Класически турове',
      title: 'България отвъд обичайното',
      price: 'EUR1050',
      duration: '8 дни / 7 нощувки',
      description:
        'Манастири, родопски ритуали, римски останки и бруталистичен паметник в облаците - осем дни отвъд повърхността.',
    },
    {
      eyebrow: 'Класически турове',
      title: 'Мароко - сини градове и златни дюни',
      price: 'EUR2300',
      duration: '10 дни / 9 нощувки',
      description:
        'От сините улици на Шефшауен до берберска шатра в Сахара, това пътуване се превръща в нещо повече от маршрут.',
    },
    {
      eyebrow: 'Класически турове',
      title: 'Алжирска пустинна експедиция (Тадрарт Руж)',
      price: 'EUR1450',
      duration: '8 дни / 7 нощувки',
      description:
        'Осемдневна експедиция в Тадрарт - един от най-отдалечените и впечатляващи пейзажи на Сахара, с древно скално изкуство, червени дюни и туарегски водачи.',
    },
  ],
};

const TRANSLATIONS: Record<OmayaLocale, TranslationDictionary> = {
  en: EN,
  bg: BG,
};

@Injectable({
  providedIn: 'root',
})
export class OmayaI18n {
  readonly locale = signal<OmayaLocale>('en');

  setLocale(locale: OmayaLocale): void {
    this.locale.set(locale);
  }

  t(path: `${keyof TranslationDictionary}.${string}`): string {
    const [section, key] = path.split('.') as [keyof TranslationDictionary, string];
    const value = TRANSLATIONS[this.locale()][section];

    if (value && !Array.isArray(value)) {
      const section = value as Record<string, string>;

      if (key in section) {
        return section[key];
      }
    }

    return path;
  }

  navigationGroups(): readonly NavigationGroup[] {
    return TRANSLATIONS[this.locale()].navigationGroups;
  }

  navigationLinks(): readonly NavigationLink[] {
    return TRANSLATIONS[this.locale()].navigationLinks;
  }

  destinations(): readonly TripSearchDestination[] {
    return TRANSLATIONS[this.locale()].destinations;
  }

  months(): readonly string[] {
    return TRANSLATIONS[this.locale()].months;
  }

  travelMatch(): readonly TravelMatchText[] {
    return TRANSLATIONS[this.locale()].travelMatch;
  }

  featuredTrips(): readonly FeaturedTripText[] {
    return TRANSLATIONS[this.locale()].featuredTrips;
  }
}
