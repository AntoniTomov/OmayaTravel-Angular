import {
  HeroSlide,
  NavigationGroup,
  NavigationLink,
} from '../../app/shared/content/homepage-content';
import { TourCardContent } from '../../app/shared/content/tour-list-content';
import { SiteContent } from '../site.types';

const AMELIA_HERO_SLIDES: readonly HeroSlide[] = [
  {
    image: {
      key: 'amelia/home/hero-3.avif',
      alt: 'Пътуване за жени с Amelia Travel',
      width: 1920,
      height: 1080,
    },
    visualSrc: '/assets/images/amelia/home/hero-3.avif',
  },
  {
    image: {
      key: 'amelia/home/hero-4.avif',
      alt: 'Приключенско пътуване в малка група от жени',
      width: 1920,
      height: 1080,
    },
    visualSrc: '/assets/images/amelia/home/hero-4.avif',
  },
  {
    image: {
      key: 'amelia/home/hero-5.avif',
      alt: 'Жени пътешественички по света',
      width: 1920,
      height: 1080,
    },
    visualSrc: '/assets/images/amelia/home/hero-5.avif',
  },
];

const AMELIA_DESTINATION_LINKS = [
  { label: 'Алжир', target: '/tour-item/algeria-desert-expedition-tadrart-rouge/' },
  { label: 'Армения', target: '/not-yet-but-soon/' },
  { label: 'Грузия', target: '/not-yet-but-soon/' },
  { label: 'Индия', target: '/not-yet-but-soon/' },
  { label: 'Киргистан', target: '/tour-item/kyrgyzstan-tour/' },
  { label: 'Мароко', target: '/tour-item/morocco-tour/' },
  { label: 'Намибия', target: '/not-yet-but-soon/' },
  { label: 'Оман', target: '/not-yet-but-soon/' },
  { label: 'Перу', target: '/not-yet-but-soon/' },
  { label: 'Саудитска Арабия', target: '/not-yet-but-soon/' },
  { label: 'Узбекистан', target: '/not-yet-but-soon/' },
  { label: 'Южна Корея', target: '/not-yet-but-soon/' },
  { label: 'Япония', target: '/not-yet-but-soon/' },
] as const;

const AMELIA_NAVIGATION_GROUPS: readonly NavigationGroup[] = [
  {
    label: 'Destinations',
    links: AMELIA_DESTINATION_LINKS,
  },
];

const AMELIA_NAVIGATION_LINKS: readonly NavigationLink[] = [
  {
    label: 'About Us',
    target: '/our-story/',
  },
  {
    label: 'Blog',
    target: '/blog-list/',
  },
  {
    label: 'Contact Us',
    target: '/contact/',
  },
];

const AMELIA_FEATURED_TOURS: readonly TourCardContent[] = [
  {
    title: 'Morocco - Blue Cities & Golden Dunes',
    category: 'Classic Tours',
    destination: 'Мароко',
    excerpt:
      "Somewhere between the blue-washed walls of Chefchaouen and a Berber family's tent deep in the Sahara, this journey becomes something more than travel. Twelve days through the imperial cities, cedar forests, desert dunes, and mountain passes of the most intoxicating country on earth.",
    image: '/assets/images/destinations/Marocco/morocco-bgr.webp',
    alt: 'Сините улици на Шефшауен в Мароко',
    price: 'EUR2300',
    duration: '12 Days / 11 Nights',
    target: '/tour-item/morocco-tour/',
  },
  {
    title: 'Algeria Desert Expedition (Tadrart Rouge)',
    category: 'Classic Tours',
    destination: 'Алжир',
    excerpt:
      "Explore Algeria's Tassili n'Ajjer on an 8-day guided desert expedition into the Tadrart - one of the Sahara's most remote and spectacular landscapes. Walk among 8,000-year-old Neolithic rock art, cross towering red dune fields, and camp under an extraordinary star-filled sky with Tuareg guides who know this wilderness intimately.",
    image: '/assets/images/home-page/trips-carousel/Algeria-trip.webp',
    alt: 'Пустинен пейзаж в Алжир',
    price: 'EUR1450',
    duration: '8 Days 7 Nights',
    target: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
  },
  {
    title: 'Kyrgyzstan Discovery Tour',
    category: 'Classic Tours',
    destination: 'Киргистан',
    excerpt:
      'Представи си, че се събуждаш в юрта на 3000 метра надморска височина, край тюркоазените води на Сон-Кул, свободни коне и безкрайни високопланински пасища.',
    image: '/assets/images/home-page/trips-carousel/Tour-feature-image-1.webp',
    alt: 'Планински пейзаж в Киргистан',
    price: 'EUR1320',
    duration: '10 Days 9 Nights',
    target: '/tour-item/kyrgyzstan-tour/',
  },
];

export const AMELIA_SITE_CONTENT: SiteContent = {
  hero: {
    title: 'Общност за жени пътешественички',
    subtitle:
      'Опознай света с вълнуващи пътувания в малки групи от жени с приключенски дух - точно като теб. Създадена от жени, за жени',
    slides: AMELIA_HERO_SLIDES,
  },
  travelMatchSection: {
    title: 'Защо да се присъединиш към нас?',
    subtitle: '',
    backgroundImage: '/assets/images/amelia/home/h1-background-coral.avif',
    items: [
      {
        title: 'ТВОЯТА ОБЩНОСТ',
        description:
          'Пътуваме в малки групи (до 16 души) от жени пътешественички на възраст 20-50 г. Защото знаем, че най-хубавите спомени се създават не само от местата, които посещаваш, но и от хората, с които ги споделяш.',
      },
      {
        title: 'ПОДКРЕПА ЗА ЖЕНИТЕ В ТУРИЗМА',
        description:
          'Приоритизираме работата с жени-гидове и местни професионалистки в дестинациите, в които работим. Така твоето пътуване помага да се създадат нови възможности за жени в общностите, които посещаваш.',
      },
      {
        title: 'БАЛАНСИРАНИ МАРШРУТИ',
        description:
          'Съчетаваме най-важните забележителности с по-малко известни места и активности, които ни дават по-задълбочен поглед върху история и културата на дестинацията. Отделяме достатъчно време, за да се потопиш в атмосферата, вместо просто да препускаш от точка на точка.',
      },
      {
        title: 'РАЗНООБРАЗНИ ДЕСТИНАЦИИ',
        description:
          'Ние те водим до най-вълнуващите кътчета на света. От екзотичните пазари на Северна Африка и древните градове на Азия, до дивите пейзажи на Южна Америка - нашите маршрути са създадени, за да ти покажат света в неговото пълно разнообразие.',
      },
    ],
  },
  navigationGroups: AMELIA_NAVIGATION_GROUPS,
  navigationLinks: AMELIA_NAVIGATION_LINKS,
  tripSearchDestinations: AMELIA_DESTINATION_LINKS,
  tripSearchMonths: [
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
  featuredToursTitle: 'Popular Tours',
  featuredTours: AMELIA_FEATURED_TOURS,
  searchIndex: [
    {
      type: 'Tour',
      title: 'Kyrgyzstan Discovery Tour',
      excerpt:
        'Юрти край Сон-Кул, конни преходи, номадска култура, горещи извори и едни от най-впечатляващите пейзажи на Централна Азия.',
      canonicalPath: '/tour-item/kyrgyzstan-tour/',
    },
    {
      type: 'Tour',
      title: 'Morocco - Blue Cities & Golden Dunes',
      excerpt: 'Сини градове, пустинни дюни и културни срещи в маршрут из Мароко.',
      canonicalPath: '/tour-item/morocco-tour/',
    },
    {
      type: 'Tour',
      title: 'Algeria Desert Expedition (Tadrart Rouge)',
      excerpt: 'Пустинна експедиция сред червените дюни и скалното изкуство на Тадрарт Руж.',
      canonicalPath: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
    },
    {
      type: 'Page',
      title: 'About Amelia Travel',
      excerpt: 'Женски ориентиран сайт за смислени пътувания в малки групи.',
      canonicalPath: '/our-story/',
    },
    {
      type: 'Page',
      title: 'Контакти',
      excerpt: 'Свържете се с Amelia за следващото си пътуване.',
      canonicalPath: '/contact/',
    },
  ],
  enabledRoutes: [
    '/',
    '/search/',
    '/our-story/',
    '/contact/',
    '/blog-list/',
    '/not-yet-but-soon/',
    '/destinations/',
    '/tour-item/algeria-desert-expedition-tadrart-rouge/',
    '/tour-item/kyrgyzstan-tour/',
    '/tour-item/morocco-tour/',
    '/cookie-policy/',
    '/privacy-policy/',
    '/termsconditions/',
    '/404/',
  ],
};
