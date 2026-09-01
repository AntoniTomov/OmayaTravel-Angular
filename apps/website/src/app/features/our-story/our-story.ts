import { Component, computed, inject } from '@angular/core';

import { ActiveSite } from '../../../sites/active-site';

interface StoryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  source?: string;
}

interface TeamMemberLink {
  label: string;
  url: string;
}

interface TeamMember {
  id: string;
  name: string;
  heading: string;
  image: StoryImage;
  paragraphs: readonly string[];
  link?: TeamMemberLink;
}

interface StoryTextSection {
  heading: string;
  paragraphs: readonly string[];
  listItems?: readonly string[];
}

interface StoryPageContent {
  id: string;
  slug: string;
  title: string;
  hero: {
    image: StoryImage;
  };
  story: {
    heading: string;
    lead?: string;
    sections: readonly StoryTextSection[];
    callout?: string;
    calloutAfterSectionIndex?: number;
  };
  team?: {
    heading: string;
    members: readonly TeamMember[];
    outro?: string;
  };
  tagline: string;
  contact: {
    phoneNumbers: readonly string[];
    email: string;
  };
  seo: {
    title: string;
  };
  source?: {
    legacyUrl: string;
  };
}

const OMAYA_OUR_STORY: StoryPageContent = {
  id: 'our-story',
  slug: 'our-story',
  title: 'Our Story',
  hero: {
    image: {
      src: '/assets/images/our-story/Our-story-16.webp',
      source: 'https://omayatravel.com/wp-content/uploads/2026/05/Our-story-16.webp',
      alt: 'Omaya Travel founders',
      width: 1600,
      height: 630,
    },
  },
  story: {
    heading: 'Our story',
    lead: "The story of Omaya didn't begin with a business plan. It began with a shared car ride sometime in 2010.",
    sections: [
      {
        heading: 'Where it started',
        paragraphs: [
          'The story of Omaya Travel did not begin with a business plan. It started with a shared car ride to school - we were two teenagers who quickly realised they shared something bigger than a commute: a curiosity about the world and a desire to go see it.',
          'In our early 20s, that curiosity turned into travel. Not luxury trips or big groups - just a backpack, loose plans and the excitement of new experiences. It turned out we loved travelling in much the same way, and at much the same pace. And that is a pretty good test for a friendship, right?',
        ],
      },
      {
        heading: 'How travel changed us',
        paragraphs: [
          'Then we both ended up working in the travel industry, and kept travelling even further. Over the years, travel changed us. It made us more open, more curious and more willing to question what we thought we knew. But we noticed something ironic: while travel teaches you to step outside your boxes, group travel often puts you straight back into one. We felt that group travel for people in their 20s and 30s often seemed to come with a pretty predictable formula - big groups, pub crawls, loud nights and a very specific idea of what a fun trip should look like.',
          'That never really felt like us. So we would either skip the group trip or go and feel like we had to pretend to be party animals just to fit in.',
        ],
      },
      {
        heading: 'Who we built it for',
        paragraphs: [
          'So we created Omaya Travel for people like us - curious travellers aged 20 to 45 who believe there is always more to see, more to learn, more food to try and more stories to hear. And for the kind of people who would rather build friendships over long conversations than a pub crawl.',
          'Do not get us wrong - we still love a beer in a local pub and a good conversation with a stranger. We do not think one way of travelling is better than another. We simply wanted to create a space for young people who have not quite found their version of group travel yet.',
          'That is the kind of travel we are here to create - and the kind of community you will find with Omaya Travel.',
        ],
      },
    ],
    callout: 'Then we thought: we cannot be the only ones.',
    calloutAfterSectionIndex: 1,
  },
  team: {
    heading: 'The Faces Behind the Story',
    members: [
      {
        id: 'vesislava',
        name: 'Vesislava',
        heading: 'Meet Vesislava',
        image: {
          src: '/assets/images/our-story/Vesi.jpg',
          source:
            'https://i0.wp.com/omayatravel.com/wp-content/uploads/2026/04/20230305_124001-scaled-500x500.jpg',
          alt: 'Vesislava',
          width: 300,
          height: 300,
        },
        paragraphs: [
          'I hold a degree in Tourism and have spent the past 10+ years working in travel planning and logistics for both leisure and business trips.',
          "I've had the opportunity to organise journeys for travellers from all over the world, making sure every detail is carefully arranged and each trip runs as smoothly as possible.",
          'At Omaya, I bring that same attention to detail into designing journeys that feel seamless for the traveller.',
        ],
      },
      {
        id: 'nesi',
        name: 'Nesi',
        heading: 'Meet Nesi',
        image: {
          src: '/assets/images/our-story/Nesi.webp',
          source: 'https://i0.wp.com/omayatravel.com/wp-content/uploads/2026/03/nesi-500x500.png',
          alt: 'Nesi',
          width: 300,
          height: 300,
        },
        paragraphs: [
          "I've spent years working across different parts of the travel industry - from travel media and hospitality to guiding city tours and organising journeys around the world.",
          "Along the way, I've had the chance to design and lead trips to off-the-beaten-path destinations in the Middle East, West Africa, and South America.",
          'Those experiences shaped the way I believe travel should be done.',
        ],
      },
    ] satisfies readonly TeamMember[],
  },
  tagline: 'See the World. Meet Its People.',
  contact: {
    phoneNumbers: ['+359 88 973 5274', '+359 87 996 5946'],
    email: 'info@omayatravel.com',
  },
  seo: {
    title: 'Our story - Omaya Travel',
  },
  source: {
    legacyUrl: 'https://omayatravel.com/our-story/',
  },
};

const AMELIA_OUR_STORY: StoryPageContent = {
  id: 'our-story',
  slug: 'our-story',
  title: 'За нас',
  hero: {
    image: {
      src: '/assets/images/amelia/our-story/our-mission.jpg',
      alt: 'Жени пътешественички, седнали заедно край морето',
      width: 1232,
      height: 816,
    },
  },
  story: {
    heading: 'Кои сме ние?',
    sections: [
      {
        heading: 'Кои сме ние?',
        paragraphs: [
          'Ние сме Неси и Весислава - две жени с приключенски дух, които вярват, че най-добрите спомени се създават не само от местата, които посещаваш, но и от хората, с които ги споделяш.',
          'Нашата история започва от личното ни желание да пътуваме по-дълбоко, по-осмислено и в компанията на съмишленички. Искахме да създадем нещо, което да ни липсваше - общност от жени, които не просто „гледат“ света, а го опознават, разбират и преживяват заедно.',
          'Така се роди нашата общност - място, което те мотивира да пътуваш смело, без да си поставяш ограничения или да чакаш някой да се съгласи да пътува с теб.',
        ],
      },
      {
        heading: 'Нашата мисия',
        paragraphs: [
          'Нашата мисия е да създадем пространство, в което жените могат да пътуват свободно, смело и в подкрепяща общност. Знаем колко е трудно да се организира пътуване с приятели и да намериш компания, която пътува по твоя начин. Вярваме, че женските приятелства, основани на общи интереси, хобита и разбирания за света, правят живота по-богат, по-смислен и по-вълнуващ. Вярваме, че пътуването може да промени начина, по който гледаме на света, и да ни даде нови перспективи, които остават с нас завинаги.',
          'Затова организираме пътувания, които:',
        ],
        listItems: [
          'Обединяват жени на възраст 20-45 години с приключенски дух и любопитство към света.',
          'Подкрепят местни жени - приоритизираме работа с жени-гидове и професионалистки в туризма, за да създадем по-равнопоставен свят.',
          'Предлагат баланс - съчетаваме най-важните забележителности с по-малко известни места и активности, които ни дават по-задълбочен поглед върху историята и културата на дестинацията.',
          'Създават връзки - в малки групи до 16 души, където има време за всеки, за спонтанни разговори и за формиране на истински приятелства.',
        ],
      },
    ],
  },
  team: {
    heading: 'Запознайте се с нас',
    members: [
      {
        id: 'vesislava',
        name: 'Весислава',
        heading: 'Весислава',
        image: {
          src: '/assets/images/amelia/our-story/vesislava.jpg',
          alt: 'Весислава, съосновател на Amelia Travel',
          width: 300,
          height: 300,
        },
        paragraphs: [
          'Бакалавър по туризъм и над 10 години в организацията и логистиката на пътувания.',
          'Завърших бакалавърска степен по туризъм и над 10 години се занимавам с организация и логистика на пътувания - както за бизнес, така и за отдих. Организирала съм пътувания за хора от цял свят, като се грижа всеки детайл да е обмислен, а всяко приключение - да протече спокойно.',
          'Ходя по туристически изложения, чета и не спирам да се уча - не защото се налага, а защото тази сфера наистина ме интересува. Самата аз пътувам много и знам колко голяма разлика прави компанията, с която си тръгнала на път. Затова в Amelia влагам опита си в преживявания, които събират жени на една вълна.',
        ],
      },
      {
        id: 'nesi',
        name: 'Неси',
        heading: 'Неси',
        image: {
          src: '/assets/images/amelia/our-story/nesi.webp',
          alt: 'Неси, съосновател на Amelia Travel',
          width: 300,
          height: 297,
        },
        paragraphs: [
          'Екскурзоводка и организатор на пътувания в Близкия изток, Западна Африка и Южна Америка.',
          'Годините ми опит в туристическата индустрия са разнообразни - от работа в медии и хотелиерство до екскурзоводство и организация на пътувания по света. Имах привилегията да организирам и да водя групи в разнообразни дестинации в Близкия изток, Западна Африка, Южна Америка и др.',
          'Тези преживявания формираха моята визия за това какво прави едно пътуване запомнящо се и обогатяващо, и това е основата, върху която градим Amelia.',
        ],
        link: {
          label: '@nesizelenkova',
          url: 'https://www.instagram.com/nesizelenkova/',
        },
      },
    ] satisfies readonly TeamMember[],
    outro:
      'Заедно съчетаваме професионализма с личната страст към пътуването, за да създадем преживявания, които надхвърлят очакванията.',
  },
  tagline: 'Общност за жени пътешественички',
  contact: {
    phoneNumbers: [],
    email: 'info@ameliatravel.bg',
  },
  seo: {
    title: 'За нас - Amelia Travel',
  },
};

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.html',
  styleUrl: './our-story.scss',
})
export class OurStory {
  private readonly activeSite = inject(ActiveSite);

  protected readonly story = computed(() =>
    this.activeSite.site().id === 'amelia' ? AMELIA_OUR_STORY : OMAYA_OUR_STORY,
  );
}
