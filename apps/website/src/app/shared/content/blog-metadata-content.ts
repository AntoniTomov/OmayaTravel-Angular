import type { SiteId } from '../../../sites/site.types';
import type { BlogPostContent } from './blog-content';

export type BlogArticleMetadata = Omit<BlogPostContent, 'sections' | 'sources'>;

// Metadata is shared by SEO and article pages; article bodies stay in lazy feature chunks.
export const BLOG_ARTICLE_METADATA: readonly BlogArticleMetadata[] = [
  {
    slug: 'morocco-casablanca-marrakech-route-guide',
    title: 'Twelve Days in Morocco: From Casablanca to Marrakech',
    date: 'September 8, 2026',
    image: {
      src: '/assets/images/destinations/Marocco/morocco-bgr.webp',
      alt: 'Traditional Moroccan architecture and decorative tilework',
    },
    publishedAt: '2026-09-08',
    category: 'Morocco',
    comments: 0,
    excerpt:
      'How Omaya’s twelve-day Morocco route connects Casablanca, Chefchaouen, Fes, Merzouga and Marrakech, with city stays and desert travel in between.',
    preview:
      'Blue lanes in the north, intricate medinas, a road south towards the dunes, and Marrakech beyond the mountains: this journey brings several very different Moroccos into one holiday. Its twelve days make room for full days in Chefchaouen and Fes as well as the distances between them.',
  },
  {
    slug: 'women-only-kyrgyzstan-what-to-expect',
    title: 'Kyrgyzstan for Women Travellers: What to Expect',
    date: 'September 8, 2026',
    image: {
      src: '/assets/images/blog-posts/Kyrgystan Women only blog/Blog_Kyrgystan-women.webp',
      alt: 'Kyrgyz woman and children in traditional dress in a mountain pasture',
    },
    heroImage: {
      src: '/assets/images/women-tours/Kyrgystan-women/kyrgyzstan-women-only-bgr.webp',
      alt: 'Mountain landscape on a Kyrgyzstan journey',
    },
    publishedAt: '2026-09-08',
    modifiedAt: '2026-09-16',
    category: 'Kyrgyzstan',
    comments: 0,
    excerpt:
      'What to expect travelling in Kyrgyzstan as a woman: safety, what to wear, meeting Kyrgyz women, and how Omaya’s women-only group journey works.',
    preview:
      'Kyrgyzstan is one of those countries people rarely consider until they see a photograph of Song Kul at dusk. Then the questions start, and for women planning the trip they tend to be the same ones: is it safe, what should I wear, what are the nights in a yurt camp actually like? Here is an honest answer to each, alongside how Omaya’s ten-day women-only journey from Bishkek is put together.',
  },
  {
    slug: 'song-kul-yurt-stay-packing-guide',
    title: 'Packing for a Song Kul Yurt Stay',
    date: 'September 8, 2026',
    image: {
      src: '/assets/images/home-page/blog-posts/Yurt-Camp-at-SongKul-Lake-Opt.webp',
      alt: 'Yurt camp beside Song Kul Lake',
    },
    publishedAt: '2026-09-08',
    category: 'Kyrgyzstan',
    comments: 0,
    excerpt:
      'A practical packing checklist for a Song Kul yurt stay, plus the camp-specific questions to settle before travelling with Omaya.',
    preview:
      'Packing for Song Kul is easier when the essentials for a day at the lake are close to hand. This checklist focuses on clothing and personal items; the camp’s bedding, heating, bathrooms and charging arrangements need confirmation for your departure.',
  },
  {
    slug: 'bulgaria-classic-women-only-tour-comparison',
    title: 'Eight Days in Bulgaria: Classic or Women-only?',
    date: 'September 8, 2026',
    image: {
      src: '/assets/images/destinations/Bulgaria/bulgaria-tour-bgr.webp',
      alt: 'Monument on a Bulgaria tour',
    },
    publishedAt: '2026-09-08',
    category: 'Bulgaria',
    comments: 0,
    excerpt:
      'Compare the route and group format of Omaya’s eight-day classic and women-only Bulgaria journeys, both beginning and ending in Sofia.',
    preview:
      'Both Bulgaria journeys spend eight days travelling from Sofia through monasteries, mountain villages and historic towns before returning to the capital. The central choice is the group format: a classic small group or a women-only departure.',
  },
  {
    slug: 'dharavi-mumbai-guide',
    title: 'Dharavi, Mumbai: History, Workshops and How to Visit Respectfully',
    seoTitle: 'Dharavi, Mumbai: History, Workshops & How to Visit',
    publishedAt: '2026-10-12',
    date: 'October 12, 2026',
    category: 'India',
    comments: 0,
    excerpt:
      'What Dharavi in Mumbai is really like: its history, recycling and pottery workshops, the redevelopment, and how to visit Dharavi respectfully.',
    preview:
      'Most people know Dharavi from a film or a headline: “Asia’s largest slum”. Walk through it for a morning and a different word keeps coming to mind – workshop. This guide covers what Dharavi is, how it grew, the trades that keep it running, the redevelopment now under way, and how to visit Dharavi in a way that respects the people who live there.',
    image: {
      src: '/assets/images/blog-posts/Dharavi, Mumbai/dharavi-street.webp',
      alt: 'A street in Dharavi, Mumbai',
    },
    relatedTour: {
      title: 'Deccan Discovery: Mumbai to Kanha',
      url: '/tour-item/india-mumbai-ajanta-ellora-kanha-tour/',
    },
  },
  {
    slug: 'cape-town-to-windhoek-namibia-guide',
    title: 'Cape Town to Windhoek: What 12 Days Through Namibia Are Really Like',
    seoTitle: 'Cape Town to Windhoek: A Namibia Road Trip Guide',
    publishedAt: '2026-10-21',
    date: 'October 21, 2026',
    category: 'Namibia',
    comments: 0,
    excerpt:
      'Red dunes, a giant canyon and the clearest skies you’ll see. Our guide to the Cape Town–Windhoek route: what to see, when to go, what to pack.',
    preview:
      'There’s a moment on every Namibia trip when the van goes quiet. Someone looks out at nothing but sand and sky for the hundredth kilometre in a row, and realises they haven’t checked their phone in hours.',
    image: {
      src: '/assets/images/women-tours/Namibia/Tropic_of_Capricorn.webp',
      alt: 'The Tropic of Capricorn sign on the road through Namibia',
    },
    relatedTour: {
      title: 'Namibia: From the Cederberg to Etosha | Women only',
      url: '/tour-item/women-only-tour-namibia/',
    },
  },
  {
    slug: 'women-only-tour-namibia-what-to-expect',
    title: 'Women-Only Tour of Namibia: What to Expect',
    seoTitle: 'Women-Only Tour of Namibia: What to Expect on a 12-Day Small-Group Trip (2027)',
    publishedAt: '2026-10-20',
    date: 'October 20, 2026',
    category: 'Namibia',
    comments: 0,
    excerpt:
      'Thinking about a women-only tour of Namibia? Who travels, how rooming works, your female guide, what’s included, and which 2027 date suits you.',
    preview:
      'A women-only tour of Namibia is a small-group road trip where everyone in the group is a woman, many of them traveling solo, and the driving, border crossing, park permits and lodges are handled for you. Ours is a 12-day trip from Cape Town to Windhoek for 6 to 12 women aged 20 to 45, with a female guide, an Omaya representative with you the whole way, and twin rooms shared with another solo traveler. It costs EUR 3380 per person and runs on June 23 and September 29, 2027.',
    image: {
      src: '/assets/images/blog-posts/Namibia women only blog/women-only-tour-namibia-desert-tent.webp',
      alt: 'A woman holding a mug stands at the open door of a twin safari tent, looking out over the Namib Desert plains and mountains in Namibia',
    },
    relatedTour: {
      title: 'Namibia: From the Cederberg to Etosha | Women only',
      url: '/tour-item/women-only-tour-namibia/',
    },
    faq: [
      {
        question: 'What is a women-only tour of Namibia?',
        answer:
          'It’s a group trip through Namibia where everyone in the group is a woman. Ours runs 12 days from Cape Town to Windhoek with 6 to 12 women aged 20 to 45, a female guide, an Omaya representative, and transport, accommodation and most meals included.',
      },
      {
        question: 'Is a women-only tour a good way to see Namibia as a solo female traveler?',
        answer:
          'It’s a good fit if you don’t want to self-drive. On a small-group tour, the driving, border crossing and park permits are handled, you’re paired with another solo traveler for rooms, and you have company the whole way.',
      },
      {
        question: 'Will I have to share a room?',
        answer:
          'Yes, unless you pay for a single. Solo travelers share a twin room with another solo woman from the group. A private room costs EUR 450 extra.',
      },
      {
        question: 'Can I book with a friend?',
        answer:
          'Yes. You can share a twin room with your friend, and you’ll travel with the rest of the group as usual.',
      },
      {
        question: 'Is the guide a woman?',
        answer:
          'On our Namibia trip, yes. The driver may be a man. Someone from Omaya also travels with the group for all 12 days.',
      },
      {
        question: 'Is there an age limit?',
        answer: 'Yes. Our women-only Namibia trip is for travelers aged 20 to 45.',
      },
      {
        question: 'How much does a women-only tour of Namibia cost?',
        answer:
          'Ours costs EUR 3380 per person for 12 days, twin share. International flights, visas, travel insurance, tips and optional activities are extra.',
      },
      {
        question: 'How fit do I need to be?',
        answer:
          'Not very. The trip is rated Easy. The walks at Fish River Canyon, in the desert and at Spitzkoppe are guided, and the rest of the time you’re traveling by minibus.',
      },
    ],
  },
  {
    slug: 'solo-group-tour-morocco',
    title: 'Solo Group Tour of Morocco: What to Check Before You Book',
    seoTitle: 'Solo Group Tour of Morocco: What to Check Before You Book (2027)',
    publishedAt: '2026-11-06',
    date: 'November 6, 2026',
    category: 'Morocco',
    comments: 0,
    excerpt:
      'Planning a solo group tour of Morocco? What to check before booking: your own room, who’s in the group, arrival, free time and dates. Plus a 2027 checklist.',
    preview:
      'A solo group tour of Morocco is a small-group trip where everyone signs up on their own, so nobody arrives as part of a couple or a group of friends. The things to check before you book are simple: do you get your own room, and is it included in the price? Who else is in the group? Who meets you when you land? Does the trip leave you any time to yourself? Below we go through each one, with a checklist you can use to compare tours, ours included.',
    image: {
      src: '/assets/images/blog-posts/Morocco solo travellers blog/morocco-solo-group-tour-camels-dunes.webp',
      alt: 'Camels crossing the Sahara dunes in Morocco',
    },
    relatedTour: {
      title: 'Morocco – Blue Cities & Golden Dunes | Solo Travellers only',
      url: '/tour-item/tour-item-morocco-solo-travellers-tour/',
    },
    faq: [
      {
        question: 'Is Morocco good for solo travelers?',
        answer:
          'Yes, and a group trip makes it easier. Morocco has a lot of long distances, busy medinas and late evenings. With a guide, a driver and a small group, you get the company and the logistics handled, and you can still take free afternoons on your own.',
      },
      {
        question: 'Do you have to share a room on a solo group tour of Morocco?',
        answer:
          'It depends on the tour. Some pair solo travelers in twin rooms, others charge a single supplement for your own room. On our Morocco solo-travelers departure, you get your own room every night, and your own tent at the desert camp, all included in the price.',
      },
      {
        question: 'How much does a solo group tour of Morocco cost?',
        answer:
          'Prices vary with length and what’s included. Our 12-day solo departure costs EUR 2550 per person, including your own room, breakfast every day, ground transport, a local guide and an Omaya representative. Flights, insurance and entry fees aren’t included.',
      },
      {
        question: 'Who goes on a solo group tour of Morocco?',
        answer:
          'On ours, everyone travels alone. The group is 6 to 12 people, men and women, aged 20 to 45.',
      },
      {
        question: 'When does the solo Morocco tour run in 2027?',
        answer: 'Our solo-travelers departures are on April 15 and October 7, 2027.',
      },
    ],
  },
  {
    slug: 'how-to-choose-small-group-sahara-tour-algeria',
    title: 'How to Choose the Best Small-Group Tour in Algeria’s Sahara',
    seoTitle: 'Best Small-Group Tour in Algeria? How to Choose (2027)',
    publishedAt: '2026-11-03',
    date: 'November 3, 2026',
    category: 'Algeria',
    comments: 0,
    excerpt:
      'How to choose the best small-group tour in Algeria: licensing, visas, Djanet flights, Tuareg guides, wild camping and guaranteed dates. 2027 checklist.',
    preview:
      'Looking for the best small-group tour in Algeria? Here’s the short answer: choose an operator that’s licensed, sorts out your visa invitation, includes the flight to Djanet, keeps the group small, works with a local Tuareg team, tells you upfront how many nights you’ll camp, and has a guaranteed departure date. Below we go through each one, plus a checklist you can use to compare operators, us included.',
    image: {
      src: '/assets/images/blog-posts/Algeria blog post images/Algeria-Tassili-Desert-Camp-img-4.webp',
      alt: '4x4 expedition route through the Algerian Sahara',
    },
    heroImage: {
      src: '/assets/images/destinations/Algiria/gallery/gallery-image-5.webp',
      alt: 'Rock formations and dunes in Tadrart Rouge, Algeria',
    },
    relatedTour: {
      title: 'Algeria Desert Expedition (Tadrart Rouge)',
      url: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
    },
    faq: [
      {
        question: 'Can you visit the Algerian Sahara without a tour?',
        answer:
          'Not really. Visitors to the region travel with an official guide, and the visa for the south depends on an invitation from an approved Algerian travel agency. So going with a tour is the normal way to do it.',
      },
      {
        question: 'Do Americans need a visa for a Sahara tour in Algeria?',
        answer:
          'Yes. US citizens need a visa, and so do German and Dutch citizens. If your trip to the far south is organized through an approved agency, you can get a visa on arrival; otherwise you apply in advance at an Algerian embassy. On our Algeria Desert Expedition, we send your invitation two months before departure and you get your visa when you land. Just make sure your passport is valid for six months after you arrive.',
      },
      {
        question: 'When is the best time for a Sahara desert tour in Algeria?',
        answer:
          'Roughly October to March. Summers are too hot for camping and walking. Winter nights get cold, so bring a warm layer to sleep in.',
      },
      {
        question: 'Are domestic flights to Djanet included in Algeria tours?',
        answer:
          'It depends on the operator, so it’s always worth asking. On our Algeria Desert Expedition, the Algiers–Djanet flights are included. International flights to Algiers aren’t.',
      },
      {
        question: 'How big are small-group tours to the Algerian Sahara?',
        answer: 'It varies. Ours runs with 6 to 12 people.',
      },
      {
        question: 'What is a guaranteed departure?',
        answer:
          'It’s a date the operator has committed to running, however many people book. An “offered” date only runs once enough people join. Our February 24, 2027 Algeria departure is guaranteed.',
      },
    ],
  },
  {
    slug: 'tassili-najjer-national-park-algeria-guide',
    title: 'Tassili n’Ajjer National Park: A Guide to Algeria’s Breathtaking Sahara Wilderness',
    publishedAt: '2026-07-25',
    modifiedAt: '2026-09-08',
    date: 'July 25, 2026',
    category: 'Uncategorized',
    comments: 2,
    excerpt:
      'Guide to visiting Tassili n’Ajjer National Park and Tadrart Rouge, covering access, rock art, safety, weather, visas, desert camping, Tuareg culture and expedition conditions.',
    preview:
      'One of the largest protected areas in the Sahara, home to 600-metre red dunes, 8,000-year-old rock art, and Tuareg nomads who still live as their ancestors did – here’s what you need to know about visiting Tassili n’Ajjer National Park and its most spectacular corner, the Tadrart Rouge.',
    image: {
      src: '/assets/images/blog-posts/Algeria-Tassili-National-Park-post-preview-bgr.webp',
      alt: "Sandstone formations and dunes in Tassili n'Ajjer National Park",
    },
    heroImage: {
      src: '/assets/images/blog-posts/Algeria blog post images/Algeria-Tassili-National-Park-Desert-Expedition-bgr.webp',
      alt: "Desert rocks and dunes in Tassili n'Ajjer National Park",
    },
    sidebarImage: {
      src: '/assets/images/blog-posts/Algeria-Tassili-National-Park-post-preview-bgr.webp',
      alt: 'Desert expedition in Algeria',
    },
    relatedTour: {
      title: 'Algeria Desert Expedition (Tadrart Rouge)',
      url: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
    },
  },
  {
    slug: 'the-complete-visitor-guide-to-rila-monastery',
    title: 'The Complete Visitor Guide to the Rila Monastery in Bulgaria',
    publishedAt: '2026-04-16',
    modifiedAt: '2026-09-08',
    date: 'April 16, 2026',
    category: 'Uncategorized',
    comments: 1,
    excerpt:
      'Practical guide to Rila Monastery covering history, key sights, entry fees, opening times, dress code, transport from Sofia, nearby attractions, food and overnight stays.',
    preview:
      'Bulgaria’s most sacred landmark, a UNESCO World Heritage Site, and one of the most breathtaking places in the Balkans – here’s everything you need to plan your visit.',
    image: {
      src: '/assets/images/blog-posts/Rila-Monastery-post-preview-bgr.webp',
      alt: 'Rila Monastery in the Rila Mountains',
    },
    heroImage: {
      src: '/assets/images/blog-posts/Rila Monestery/Rila-Monastery-post-bgr.webp',
      alt: 'Rila Monastery courtyard and mountain setting',
    },
    relatedTour: {
      title: 'Bulgaria Tour',
      url: '/tour-item/bulgaria-beyond-the-ordinary/',
    },
  },
  {
    slug: '10-unmissable-places-to-visit-on-your-bulgaria-trip',
    title: '10 Unmissable Places to Visit on Your Bulgaria Trip (Chosen by Local Guides)',
    publishedAt: '2026-04-01',
    date: 'April 1, 2026',
    category: 'Uncategorized',
    comments: 19,
    excerpt:
      'Local-guide selection of ten memorable places and experiences across Bulgaria, combining cities, mountain villages, wine, heritage sites, alpine landscapes and Black Sea coast.',
    preview:
      'If you’re planning a trip to Bulgaria, it can be surprisingly hard to decide where to go first. This is a country where Roman cities sit beside mountain monasteries, rose fields stretch across entire valleys, and remote villages still keep centuries-old traditions alive—often just a short drive apart.',
    image: {
      src: '/assets/images/blog-posts/beautiful-bulgaria-post-preview-bgr.webp',
      alt: 'Bulgarian mountain lake and green hills',
    },
    heroImage: {
      src: '/assets/images/blog-posts/10 places in bulgaria/beautiful-bulgaria-post-bgr.webp',
      alt: 'Beautiful mountain landscape in Bulgaria',
    },
    relatedTour: {
      title: 'Bulgaria Beyond the Ordinary',
      url: '/tour-item/bulgaria-beyond-the-ordinary/',
    },
  },
  {
    slug: 'how-to-visit-song-kul-lake-in-kyrgyzstan',
    title: 'Song Kul: What You Need to Know About Kyrgyzstan’s Most Untamed Alpine Lake',
    publishedAt: '2026-02-26',
    modifiedAt: '2026-09-08',
    date: 'February 26, 2026',
    category: 'Uncategorized',
    comments: 3,
    excerpt:
      'Practical guide to Song Kul Lake covering best season, access routes, yurt camps, horse riding, hiking, weather, cash, connectivity and basic conditions.',
    preview:
      'High in the mountains of Kyrgyzstan, at 3,016 metres above sea level, Song-Kul Lake feels like another world. There are no towns here. No paved roads circling the shoreline. No permanent settlements. Just open pasture, grazing horses, scattered yurts, and the slow rhythm of nomadic life continuing much as it has for centuries. It’s the kind of place that makes you realise how rarely you actually feel free. For many travellers, Song Kol is the highlight of Kyrgyzstan and here is what you need to know before you visit it.',
    image: {
      src: '/assets/images/blog-posts/Kyrgystan-post-preview-bgr.webp',
      alt: 'Yurt camp beside Song Kul Lake in Kyrgyzstan',
    },
    heroImage: {
      src: '/assets/images/blog-posts/Kyrgystan/Kyrgystan-bgr.webp',
      alt: 'Song Kul Lake landscape in Kyrgyzstan',
    },
    relatedTour: {
      title: 'Kyrgyzstan Discovery Tour',
      url: '/tour-item/kyrgyzstan-tour/',
    },
  },
];

export const AMELIA_BLOG_ARTICLE_METADATA: readonly BlogArticleMetadata[] = [
  {
    slug: 'maroko-za-zheni-pateshestvenichki',
    title: 'Мароко за жени пътешественички: безопасност, облекло и какво да очакваш',
    publishedAt: '2026-09-01',
    date: '1 септември 2026',
    category: 'Мароко',
    comments: 0,
    excerpt:
      'Практичен пътеводител за жени, които планират пътуване до Мароко: безопасност, облекло, сезони, местни обичаи, пустиня и пътуване в малка женска група.',
    preview:
      'Има пътувания, които започват още с кацането. Мароко е точно такова: сетивно, цветно, шумно и различно. Ето какво е добре да знаеш, когато пътуваш като жена.',
    image: {
      src: '/assets/images/amelia/blog/morocco-for-women-travel-guide/morocco-1.avif',
      alt: 'Цветни детайли от Мароко',
    },
    heroImage: {
      src: '/assets/images/amelia/blog/morocco-for-women-travel-guide/morocco-2.avif',
      alt: 'Пейзаж и архитектура от Мароко',
    },
    sidebarImage: {
      src: '/assets/images/amelia/blog/morocco-for-women-travel-guide/morocco-3.avif',
      alt: 'Мароко като дестинация за жени пътешественички',
    },
    relatedTour: {
      title: 'Morocco - Blue Cities & Golden Dunes',
      url: '/tour-item/morocco-tour/',
    },
  },
  {
    slug: 'ezeroto-song-kul-kirgistan',
    title: 'Езерото Сонг-Кул: мястото, което ще те накара да се почувстваш свободен',
    publishedAt: '2026-09-08',
    date: '8 септември 2026',
    category: 'Киргистан',
    comments: 0,
    excerpt:
      'Практичен гид за езерото Сонг-Кул в Киргизстан: кога да пътуваш, как да стигнеш, къде да спиш и какво да очакваш от живота на 3016 метра надморска височина.',
    preview:
      'В сърцето на Киргизстан, на 3016 метра надморска височина, ще откриете Сонг-Кул – езеро, което пази духа на номадския живот. Тук времето тече по различен ритъм, а безкрайните пасища и величествените планини създават усещане за пълна свобода.',
    image: {
      src: '/assets/images/blog-posts/Kyrgystan-post-preview-bgr.webp',
      alt: 'Юртен лагер край езерото Сонг-Кул в Киргизстан',
    },
    heroImage: {
      src: '/assets/images/blog-posts/Kyrgystan/Kyrgystan-bgr.webp',
      alt: 'Пейзаж на езерото Сонг-Кул в Киргизстан',
    },
    sidebarImage: {
      src: '/assets/images/blog-posts/Kyrgystan/Kyrgyzstan-tour-img-1.webp',
      alt: 'Юрти и открити пасища около Сонг-Кул',
    },
    relatedTour: {
      title: 'Киргистан - юрти, коне и високи планини',
      url: '/tour-item/kyrgyzstan-tour/',
    },
  },
  {
    slug: 'india-otblizo',
    title: 'Индия отблизо: между хаоса, цветовете и тишината',
    publishedAt: '2026-09-08',
    date: '8 септември 2026',
    category: 'Индия',
    comments: 0,
    excerpt:
      'Впечатления от Северна Индия – контрастите между шумните улици и тихите дворове, цветовете, храната и малките моменти, които остават след едно пътуване дотам.',
    preview:
      'Има места, за които можеш да прочетеш десетки статии, да изгледаш безброй видеа и да разгледаш стотици снимки, но въпреки това да не си представиш какво е да бъдеш там. Индия е едно от тях.',
    image: {
      src: '/assets/images/amelia/blog/india-otblizo/india-otblizo-01.webp',
      alt: 'Колонада в Агра Форт, Индия',
    },
    relatedTour: {
      title: 'Северна Индия отблизо',
      url: '/tour-item/india-tour/',
    },
  },
  {
    slug: 'sauditska-arabiya-za-zheni',
    title: 'Саудитска Арабия за жени: какво да знаеш, преди да тръгнеш',
    seoTitle: 'Саудитска Арабия за жени: какво да знаеш преди пътуване',
    publishedAt: '2026-11-01',
    date: '1 ноември 2026',
    category: 'Саудитска Арабия',
    comments: 0,
    excerpt:
      'Саудитска Арабия за жени: виза (eVisa), абая, облекло и пътуване без мъж. Практичен наръчник от основателките на Amelia Travel, актуален към ноември 2026.',
    preview:
      'Една от основателките ни, Неси, вече е посещавала Саудитска Арабия. Затова тук сме събрали отговори от първа ръка на въпросите, които почти всяка жена си задава, преди да тръгне за първи път.',
    image: {
      src: '/assets/images/amelia/tours/saudi-arabia/gallery/07_edge_of_the_world.webp',
      alt: 'Скалите на Края на света край Рияд, Саудитска Арабия',
    },
    sidebarImage: {
      src: '/assets/images/amelia/tours/saudi-arabia/gallery/13_alula_desert.webp',
      alt: 'Пустинята около АлУла',
    },
    relatedTour: {
      title: 'Саудитска Арабия: Древност и модерност',
      url: '/tour-item/saudi-arabia-tour/',
    },
    faq: [
      {
        question: 'Може ли жена да пътува до Саудитска Арабия без мъж?',
        answer:
          'Да. Туристките могат да пътуват и да се движат свободно из Саудитска Арабия, без придружител мъж.',
      },
      {
        question: 'Нужна ли е виза за Саудитска Арабия за българи?',
        answer:
          'Да. Българските граждани кандидатстват онлайн за електронна виза (eVisa) на visa.visitsaudi.com; таксата е около 535 саудитски риала с включена задължителна медицинска застраховка (visitsaudi.com, ноември 2026). Паспортът трябва да е валиден поне 6 месеца от датата на влизане.',
      },
      {
        question: 'Трябва ли жените да носят абая в Саудитска Арабия?',
        answer:
          'В по-голямата част от Саудитска Арабия абаята и хиджабът не са задължителни за туристките, но облеклото трябва да е скромно: покрити рамене, дрехи до глезените, неприлепнали и непрозрачни. Изключение е Медина – светият град, където по програмата на Amelia Travel носим абая и забрадка.',
      },
      {
        question: 'Може ли да се пие алкохол в Саудитска Арабия?',
        answer:
          'Не. Алкохолът в Саудитска Арабия е забранен: не може да се купи в страната, нито да се внесе.',
      },
      {
        question: 'Може ли да се снимат хора в Саудитска Арабия?',
        answer:
          'В Саудитска Арабия винаги питай, преди да снимаш хора, особено жени, деца и хора, които се молят. На някои обекти снимането е ограничено, затова следи табелите и указанията на екскурзоводката.',
      },
      {
        question: 'Колко струва организирано пътуване до Саудитска Арабия с Amelia Travel?',
        answer:
          '9-дневното пътуване „Саудитска Арабия: Древност и модерност“ на Amelia Travel струва 2300 € на човек в двойна стая, с доплащане 500 € за единична стая. Полетът от и до България не е включен в цената, но Amelia Travel помага с резервацията му.',
      },
    ],
  },
  {
    slug: 'turoperator-indiya-kak-da-izberesh',
    title: 'Как да избереш туроператор за Индия: 10 въпроса',
    seoTitle: 'Как да избереш туроператор за Индия: 10 въпроса | Amelia',
    publishedAt: '2026-11-07',
    date: '7 ноември 2026',
    category: 'Индия',
    comments: 0,
    excerpt:
      'Избираш туроператор за Индия? Ето 10 въпроса, които да зададеш, преди да се запишеш: група, гид, какво е включено, виза, полет, темпо и анулация.',
    preview:
      'Неси и Весислава, основателки на Amelia Travel. Тук са въпросите, които си струва да зададеш на всеки туроператор, преди да платиш депозит за Индия – и нашите честни отговори.',
    image: {
      src: '/assets/images/amelia/tours/india/gallery/08_taj_mahal_domes.webp',
      alt: 'Куполите на Тадж Махал в Агра, Индия',
    },
    sidebarImage: {
      src: '/assets/images/amelia/tours/india/gallery/09_varanasi_ghats.webp',
      alt: 'Гхатите на Ганг във Варанаси',
    },
    relatedTour: {
      title: 'Северна Индия отблизо',
      url: '/tour-item/india-tour/',
    },
    faq: [
      {
        question: 'Колко струва организирана екскурзия до Индия с Amelia Travel?',
        answer:
          'Организираната екскурзия до Индия с Amelia Travel струва EUR 1690 на човек в двойна стая за 14 дни / 13 нощувки. Доплащането за самостоятелна стая е EUR 415. Международният полет и индийската виза не са включени в цената.',
      },
      {
        question: 'Включен ли е самолетният билет в екскурзията до Индия на Amelia Travel?',
        answer:
          'Не, международният полет София – Делхи – София не е включен в цената на Amelia Travel. Amelia Travel помага с резервацията, а групата лети заедно от София с представителка на Amelia Travel.',
      },
      {
        question: 'Мога ли да тръгна сама на екскурзия до Индия с Amelia Travel?',
        answer:
          'Да, можеш да пътуваш до Индия с Amelia Travel сама. Ще те настаним в двойна стая с друга участничка или можеш да доплатиш EUR 415 за самостоятелна стая. Две приятелки могат да поискат обща стая.',
      },
      {
        question: 'Нужна ли е виза за Индия за българските граждани?',
        answer:
          'Да, българските граждани имат нужда от виза за Индия, като най-лесният вариант е електронната e-Tourist виза от официалния сайт indianvisaonline.gov.in. Според МВнР се кандидатства 4–120 дни преди пътуването, а паспортът трябва да е валиден 6 месеца от датата на влизане. Визата не е включена в цената на Amelia Travel, но Amelia Travel изпраща инструкции.',
      },
      {
        question: 'Кои са датите на пътуването до Индия с Amelia Travel?',
        answer:
          'Пътуването до Индия с Amelia Travel е на 24.02.2027 за групата 20–45 г. и на 03.03.2027 за групата 40–65 г. И двете групи тръгват и се връщат на летище София.',
      },
      {
        question: 'Колко е депозитът за Индия и кога се плаща остатъкът?',
        answer:
          'Депозитът за пътуването до Индия с Amelia Travel е 25%, плаща се до 7 дни след писменото потвърждение на Amelia Travel и не се възстановява парично. Остатъкът се плаща най-късно 60 дни преди тръгване.',
      },
    ],
  },
];

export function blogMetadataForSite(siteId: SiteId): readonly BlogArticleMetadata[] {
  const posts = siteId === 'amelia' ? AMELIA_BLOG_ARTICLE_METADATA : BLOG_ARTICLE_METADATA;
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function findBlogMetadataBySlug(
  slug: string | null | undefined,
  siteId: SiteId = 'omaya',
): BlogArticleMetadata | undefined {
  return blogMetadataForSite(siteId).find((post) => post.slug === slug);
}
