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
    label: 'Дестинации',
    links: AMELIA_DESTINATION_LINKS,
  },
];

const AMELIA_NAVIGATION_LINKS: readonly NavigationLink[] = [
  {
    label: 'За нас',
    target: '/our-story/',
  },
  {
    label: 'Блог',
    target: '/blog-list/',
  },
  {
    label: 'Контакти',
    target: '/contact/',
  },
];

const AMELIA_FEATURED_TOURS: readonly TourCardContent[] = [
  {
    title: 'Мароко - сини градове и златни дюни',
    category: 'Women only',
    categoryLabel: 'Само за жени',
    destination: 'Мароко',
    excerpt:
      'Има един момент - някъде между сините улички на Шефшауен и кехлибарената тишина на Сахара - в който Мароко спира да бъде дестинация и започва да прилича на сън, който вече си сънувала. 12 дни от Атлантическия бряг до дюните на Сахара, в малка група само от жени.',
    image: '/assets/images/amelia/tours/morocco/morocco-card.webp',
    alt: 'Сините улички на Шефшауен в Мароко',
    price: 'EUR2300',
    duration: '12 дни / 11 нощувки',
    target: '/tour-item/morocco-tour/',
  },
  {
    // TODO_AMELIA_ALGERIA: Bulgarian tour copy and Amelia-owned imagery are still pending.
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
    title: 'Киргистан - юрти, коне и високи планини',
    category: 'Women only',
    categoryLabel: 'Само за жени',
    destination: 'Киргистан',
    excerpt:
      'Представи си, че се събуждаш в юрта на 3000 метра надморска височина, край тюркоазените води на Сон-Кул, свободни коне и безкрайни високопланински пасища.',
    image: '/assets/images/home-page/trips-carousel/Tour-feature-image-1.webp',
    alt: 'Планински пейзаж в Киргистан',
    price: 'EUR1320',
    duration: '10 дни / 9 нощувки',
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
  missionSection: {
    title: 'Нашата мисия',
    copy: 'Нашата мисия е да създадем пространство, в което жените могат да пътуват свободно, смело и в подкрепяща общност. Вярваме, че женските приятелства, основани на общи интереси и разбирания за света, правят живота по-богат, по-смислен и по-вълнуващ.',
    cta: 'Запознай се с нас',
    image: {
      src: '/assets/images/amelia/our-story/our-mission.jpg',
      alt: 'Жени пътешественички, седнали заедно край морето',
      width: 'auto',
      height: 540,
    },
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
  featuredToursTitle: 'Популярни пътувания',
  featuredTours: AMELIA_FEATURED_TOURS,
  searchIndex: [
    {
      type: 'Tour',
      title: 'Киргистан - юрти, коне и високи планини',
      excerpt:
        'Юрти край Сон-Кул, конни преходи, номадска култура, горещи извори и едни от най-впечатляващите пейзажи на Централна Азия.',
      canonicalPath: '/tour-item/kyrgyzstan-tour/',
    },
    {
      type: 'Tour',
      title: 'Мароко - сини градове и златни дюни',
      excerpt:
        '12 дни само за жени от София: Казабланка, Шефшауен, Фес, дюните на Ерг Шеби, Аит Бен Хаду и Маракеш.',
      canonicalPath: '/tour-item/morocco-tour/',
    },
    {
      type: 'Article',
      title: 'Мароко за жени пътешественички: безопасност, облекло и какво да очакваш',
      excerpt:
        'Практичен пътеводител за жени, които планират пътуване до Мароко: безопасност, облекло, сезони, местни обичаи и пътуване в малка женска група.',
      canonicalPath: '/maroko-za-zheni-pateshestvenichki/',
    },
    {
      type: 'Tour',
      title: 'Algeria Desert Expedition (Tadrart Rouge)',
      excerpt: 'Пустинна експедиция сред червените дюни и скалното изкуство на Тадрарт Руж.',
      canonicalPath: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
    },
    {
      type: 'Page',
      title: 'За нас',
      excerpt:
        'Неси и Весислава, мисията на Amelia Travel и общността от жени, която градим около смислените пътувания в малки групи.',
      canonicalPath: '/our-story/',
    },
    {
      type: 'Page',
      title: 'Свържете се с нас',
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
    '/maroko-za-zheni-pateshestvenichki/',
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
  pageSeo: [
    {
      canonicalPath: '/our-story/',
      title: 'За нас',
      description:
        'Запознай се с Неси и Весислава и с мисията на Amelia Travel - подкрепяща общност за жени, които пътуват свободно, смело и в малки групи по света.',
    },
    {
      canonicalPath: '/contact/',
      title: 'Свържете се с нас',
      description:
        'Свържете се с Amelia Travel, за да планираме следващото ти пътуване в малка група от жени с приключенски дух.',
    },
    {
      // TODO_AMELIA_ALGERIA: page body is still the Omaya English tour content. This override
      // keeps Omaya branding out of Amelia's title/description until the Bulgarian copy lands.
      canonicalPath: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
      title: 'Алжир - пустинна експедиция в Тадрарт Руж',
      description:
        '8-дневна пустинна експедиция в Тасили н’Аджер и Тадрарт Руж - неолитно скално изкуство, червени дюни и лагери под звездите.',
    },
    {
      canonicalPath: '/blog-list/',
      title: 'Блог',
      description:
        'Истории, практични съвети и пътеводители за жени, които пътуват в малки групи с Amelia Travel.',
    },
  ],
};
