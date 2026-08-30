export interface BlogSectionImage {
  src: string;
  alt: string;
}

export interface BlogTimelineItem {
  period: string;
  event: string;
}

export interface BlogNamedItem {
  name: string;
  details: string;
}

export interface BlogSectionCta {
  before: string;
  linkText: string;
  linkUrl: string;
  after: string;
}

export interface BlogBoldListItem {
  label: string;
  text: string;
}

export interface BlogSection {
  title?: string;
  text?: readonly string[];
  /** When true, only the first `text` paragraph shows by default; the rest sit behind a "Continue reading…" toggle. */
  expandable?: boolean;
  list?: readonly string[];
  boldList?: readonly BlogBoldListItem[];
  timeline?: readonly BlogTimelineItem[];
  items?: readonly BlogNamedItem[];
  image?: BlogSectionImage;
  cta?: BlogSectionCta;
}

export interface BlogPostContent {
  slug: string;
  title: string;
  publishedAt: string;
  date: string;
  category: string;
  comments: number;
  excerpt: string;
  preview: string;
  image: BlogSectionImage;
  heroImage?: BlogSectionImage;
  sidebarImage?: BlogSectionImage;
  relatedTour?: {
    title: string;
    url: string;
  };
  sections: readonly BlogSection[];
}

const BLOG_IMAGE_BASE = '/assets/images/blog-posts';
const ALGERIA_POST_IMAGE_BASE = `${BLOG_IMAGE_BASE}/Algeria blog post images`;
const BULGARIA_POST_IMAGE_BASE = `${BLOG_IMAGE_BASE}/10 places in bulgaria`;
const KYRGYZSTAN_POST_IMAGE_BASE = `${BLOG_IMAGE_BASE}/Kyrgystan`;
const RILA_POST_IMAGE_BASE = `${BLOG_IMAGE_BASE}/Rila Monestery`;

export const BLOG_LIST_HERO_IMAGE = `${BLOG_IMAGE_BASE}/blog-posts-bgr.webp`;

export const BLOG_DISCOVER_TOURS_IMAGE = '/assets/images/discover-more-tours.webp';

export const TASSILI_NAJJER_NATIONAL_PARK_ALGERIA_GUIDE: BlogPostContent = {
  slug: 'tassili-najjer-national-park-algeria-guide',
  title: 'Tassili n’Ajjer National Park: A Guide to Algeria’s Breathtaking Sahara Wilderness',
  publishedAt: '2026-07-25',
  date: 'July 25, 2026',
  category: 'Uncategorized',
  comments: 2,
  excerpt:
    'Guide to visiting Tassili n’Ajjer National Park and Tadrart Rouge, covering access, rock art, safety, weather, visas, desert camping, Tuareg culture and expedition conditions.',
  preview:
    'One of the largest protected areas in the Sahara, home to 600-metre red dunes, 8,000-year-old rock art, and Tuareg nomads who still live as their ancestors did – here’s what you need to know about visiting Tassili n’Ajjer National Park and its most spectacular corner, the Tadrart Rouge.',
  image: {
    src: `${BLOG_IMAGE_BASE}/Algeria-Tassili-National-Park-post-preview-bgr.webp`,
    alt: "Sandstone formations and dunes in Tassili n'Ajjer National Park",
  },
  heroImage: {
    src: `${ALGERIA_POST_IMAGE_BASE}/Algeria-Tassili-National-Park-Desert-Expedition-bgr.webp`,
    alt: "Desert rocks and dunes in Tassili n'Ajjer National Park",
  },
  sidebarImage: {
    src: `${BLOG_IMAGE_BASE}/Algeria-Tassili-National-Park-post-preview-bgr.webp`,
    alt: 'Desert expedition in Algeria',
  },
  relatedTour: {
    title: 'Algeria Desert Expedition (Tadrart Rouge)',
    url: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
  },
  sections: [
    {
      title: 'What is Tassili n’Ajjer National Park?',
      text: [
        'Tassili n’Ajjer National Park is a vast plateau and mountain range in south-eastern Algeria, covering roughly 72,000 square kilometres across Illizi and Djanet Provinces, close to the borders with Libya, Niger, and Mali. The name translates loosely to “plateau of rivers,” a reminder that this now bone-dry stretch of the Sahara was once green and well-watered. The Algerian government designated the area a national park in 1972, and UNESCO inscribed Tassili n’Ajjer as a mixed cultural and natural World Heritage Site in 1982 – recognised both for its geology and for holding one of the largest and most significant collections of prehistoric rock art anywhere in the world.',
        'Within this enormous national park lies the Tadrart Rouge, a red sandstone region in the park’s southern reaches that has become the classic route for travellers wanting to experience Tassili n’Ajjer in depth – towering dune fields, wind-carved rock forests, hidden canyons, and some of the park’s best-preserved Neolithic paintings and engravings, all reachable on a single well-planned expedition.',
      ],
      image: {
        src: `${ALGERIA_POST_IMAGE_BASE}/Algeria-Tassili-Desert-Expedition-img-1.webp`,
        alt: 'Red sandstone and dune landscape in Tadrart Rouge',
      },
    },
    {
      title: 'Where is Tassili n’Ajjer National Park, and how do you get there?',
      text: [
        'Tassili n’Ajjer National Park sits in Algeria’s far south-east, roughly 2,000 km from the capital, Algiers. The main gateway to the park is Djanet, a small desert town in Illizi Province and the starting point for almost every organised expedition into the Tadrart Rouge and the wider Tassili plateau. There is no practical way to reach the national park independently by road from northern Algeria, you can arrive via a domestic flight from Algiers to Djanet, followed by 4×4 transport into the park with a local guide. Most domestic flights are operated by Air Algerie – the national flag carrier of Algeria. We at Omaya Travel have included the domestic flights in our package tour, as it might be difficult to purchase them from outside Algeria. It’s recommend to secure the domestic flights as early as possible especially in peak travel season.',
        'Important: Independent travel in this national park isn’t really possible, and isn’t advisable even if it were. Permits, checkpoints, navigation, and water logistics all require a local team who knows the terrain. This is one of the main reasons Tassili n’Ajjer is best experienced as part of an organised expedition rather than a self-planned trip.',
      ],
    },
    {
      title: 'How old is Tassili n’Ajjer National Park, and what does its rock art show?',
      text: [
        'The paintings and engravings scattered across Tassili n’Ajjer National Park form one of the largest open-air galleries of prehistoric art anywhere in the world, with more than 15,000 engravings identified to date across the wider park. They date from a period when this part of the Sahara was green and well-watered, home to cattle herders, giraffes, and elephants rather than sand and stone. Within the Tadrart Rouge specifically, the Neolithic Ox paintings at Wan Iska and the Crying Cow engravings near Tini are considered among the finest examples anywhere in the park – their ochre pigments and fine detail have survived for roughly six thousand years thanks to the region’s extremely dry air.',
      ],
      image: {
        src: `${ALGERIA_POST_IMAGE_BASE}/Algeria-Tassili-Desert-Rock-Paintings-img-2.webp`,
        alt: "Ancient rock art site in Algeria's Sahara",
      },
    },
    {
      title: 'Is Tassili n’Ajjer National Park safe to visit?',
      text: [
        'Southern Algeria’s desert tourism is concentrated in and around Djanet and the national park itself, and trips here are run in coordination with local Tuareg guides who know the checkpoints, permits, and terrain. As with any remote region, conditions can change, so it’s worth checking your government’s current travel advisory before booking.',
        'Important: This is not a national park to attempt independently. Tourism here is strictly controlled, and visitors are required to travel with an official guide. Reputable operators also bring their own representative and an experienced local team throughout, which is the safest and most practical way to see the Tadrart Rouge and the wider park.',
      ],
    },
    {
      title: 'When is the best time to do the Algeria Tassili Trip?',
      text: [
        'Tassili n’Ajjer is a summer-to-avoid destination – daytime temperatures in June, July, and August regularly become dangerous for trekking and camping in the park. The best window is late autumn through early spring, roughly October to March, when days are warm and manageable and nights are cold but bearable with the right gear.',
      ],
      image: {
        src: `${ALGERIA_POST_IMAGE_BASE}/Algeria-Desert-img-3.webp`,
        alt: 'Open desert landscape in Algeria',
      },
    },
    {
      title: 'Do I need a visa?',
      text: [
        'For most nationalities, it’s possible to get visa on arrival to visit the south and do the Tassili expedition. To receive the visa, you need a letter of invitation from a local travel companies. Most local operators provide it as part of the travel package. It’s important to allow enough time (at least two month) for your local team to prepare all documents for you.',
        'Important: visa rules might change frequently and might vary depending on your nationality, so it’s important to always check the latest conditions before travelling.',
      ],
    },
    {
      title: 'What does a Tadrart Rouge route through the park look like?',
      text: [
        'A journey through the Tadrart Rouge in the Algerian Sahara moves through a striking range of terrain within just a few days – towering dune fields that shift colour through the day, black sand plains, wind-carved rock forests and natural arches, hidden canyons sheltering rare greenery, and open plateau where ancient rock art survives on canyon walls. Camp is typically moved to a new location most evenings as the route progresses deeper into the park, giving each day a genuinely different landscape to wake up to.',
      ],
      image: {
        src: `${ALGERIA_POST_IMAGE_BASE}/Algeria-Tassili-Desert-Camp-img-4.webp`,
        alt: '4x4 expedition route through the Algerian Sahara',
      },
    },
    {
      title: 'Where do you sleep, how do you bring food and what are conditions like in the park?',
      text: [
        'Most nights inside Tassili n’Ajjer National Park are spent wild camping directly in the desert, with camp moved to a new location most evenings as the route through the Tadrart Rouge progresses. Wild camping here means no showers and basic toilet facilities for several consecutive nights. Most travellers find this is part of the appeal rather than a drawback – but it’s worth going in with realistic expectations if you’ve never desert-camped before. Meals are prepared by the local team throughout the trip using supplies brought in from Djanet, typically breakfast, lunch, and dinner each day while camping. Because the Tadrart has very limited resupply options once you’re away from Djanet, it’s worth flagging any dietary restrictions or allergies with your operator well ahead of departure so the team can plan accordingly.',
      ],
    },
    {
      title: 'Is there phone signal or WiFi in the desert?',
      text: [
        'No, and most travellers count this among the trip’s best features. Signal is unreliable to non-existent away from Djanet, so expect to be genuinely offline for several consecutive days while camping in the Tadrart. It’s worth letting family or colleagues know in advance not to expect contact during that stretch.',
      ],
    },
    {
      title: 'Will you meet Tuareg communities in the park?',
      text: [
        'Yes, and it’s one of the highlights of visiting Tassili n’Ajjer. Tuareg guides lead expeditions throughout the national park, and the route through Wadi Essendilène occasionally brings an encounter with a Tuareg nomad family still living a traditional, seasonal lifestyle in the canyon. Djanet’s Tuareg market, usually visited toward the end of the journey, offers an opportunity to discover the region’s traditional handicrafts, locally woven textiles, spices, food products, and gain a glimpse into everyday life in the oasis town.',
      ],
    },
    {
      title: 'How physically demanding is a Tassili n’Ajjer Desert Expedition?',
      text: [
        'This varies quite a bit depending on the route. Most travellers opt for 4×4-based expeditions (like the one we have at Omaya Travel), where the vehicle covers the bulk of the distance and you take short walks to reach rock art sites and viewpoints – longer hikes on these routes are usually optional extras rather than a requirement. For the regular 4×4-based routes, you don’t need a high fitness level. Still, a reasonable, general level of fitness and comfort with basic camping conditions is recommended. If you have specific health or mobility concerns, it’s worth checking directly with your tour operator before booking so they can point you to the route that suits you best. There are also local operators who organise hikes in more remote parts of the park that are only reachable entirely on foot, with donkeys supporting the gear; these routes can involve 5–6 hours of hiking a day and suit travellers who specifically want a more demanding, immersive trip. If you are interested in these kind of expeditions, we can organise it for you as well on request.',
      ],
    },
    {
      title: 'What else is worth knowing before you visit the park?',
      boldList: [
        {
          label: 'Drones and photography:',
          text: ' Photographing the landscapes, rock art, and camps is generally welcomed, but photography and drone use near checkpoints, military installations, or local communities can be sensitive. Always check with your guide before flying a drone or photographing people, and confirm Algeria’s current drone import rules before you travel.',
        },
        {
          label: 'Currency and tipping:',
          text: ' Bring cash, as card acceptance is very limited once you’re outside major cities. Tipping guides and drivers is customary and appreciated at the end of a desert expedition – ask your operator for local guidance on appropriate amounts.',
        },
        {
          label: 'Extending your trip:',
          text: ' Many travellers combine a Tassili n’Ajjer expedition with a few extra days in Algiers before or after, to see the capital’s Casbah, coastline, and museums while acclimatising or decompressing from the desert.',
        },
      ],
    },
    {
      cta: {
        before:
          'Omaya Travel’s Algeria Desert Expedition (Tadrart Rouge) covers the best of Tassili n’Ajjer National Park over 8 days, travelling with a dedicated local Tuareg team from the moment you land in Algiers to the moment you fly out. Find out more details ',
        linkText: 'here',
        linkUrl: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
        after: '.',
      },
    },
  ],
};

export const THE_COMPLETE_VISITOR_GUIDE_TO_RILA_MONASTERY: BlogPostContent = {
  slug: 'the-complete-visitor-guide-to-rila-monastery',
  title: 'The Complete Visitor Guide to the Rila Monastery in Bulgaria',
  publishedAt: '2026-04-16',
  date: 'April 16, 2026',
  category: 'Uncategorized',
  comments: 1,
  excerpt:
    'Practical guide to Rila Monastery covering history, key sights, entry fees, opening times, dress code, transport from Sofia, nearby attractions, food and overnight stays.',
  preview:
    'Bulgaria’s most sacred landmark, a UNESCO World Heritage Site, and one of the most breathtaking places in the Balkans – here’s everything you need to plan your visit.',
  image: {
    src: `${BLOG_IMAGE_BASE}/Rila-Monastery-post-preview-bgr.webp`,
    alt: 'Rila Monastery in the Rila Mountains',
  },
  heroImage: {
    src: `${RILA_POST_IMAGE_BASE}/Rila-Monastery-post-bgr.webp`,
    alt: 'Rila Monastery courtyard and mountain setting',
  },
  relatedTour: {
    title: 'Bulgaria Tour',
    url: '/tour-item/bulgaria-beyond-the-ordinary/',
  },
  sections: [
    {
      title: 'What is Rila Monastery and why is it worth visiting?',
      text: [
        'Rila Monastery is Bulgaria’s most important spiritual and cultural landmark, set in a forested valley in the Rila Mountains at 1,147 metres above sea level. It has been continuously inhabited for over 1,000 years, has been a UNESCO World Heritage Site since 1983, and contains some of the finest fresco painting in the Balkans.',
        'Beyond its religious significance, Rila Monastery is a symbol of Bulgarian national survival. For nearly five centuries of Ottoman rule, it safeguarded the Bulgarian language, Orthodox faith, and cultural identity – making it as much a historical monument as a living monastery.',
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/Frescoes-at-the-Rila-Monastery-img-2.webp`,
        alt: 'Frescoes at the Rila Monastery',
      },
    },
    {
      title: 'Who founded Rila Monastery?',
      text: [
        'Rila Monastery was founded by Ivan of Rila (876–946), a Bulgarian nobleman who renounced his wealth to live as a hermit in the Rila Mountains. His reputation for humility, healing, and spiritual devotion attracted followers who formed a monastic community — the origin of Rila Monastery as it exists today.',
        'Ivan of Rila was later canonised and became the patron saint of Bulgaria. His relics remain at the monastery and continue to draw Orthodox pilgrims from across the world.',
        'His influence reaches far beyond the religious sphere: since Bulgaria started using euro as its currency in 2026, his image appears on the €1 coin showing how deeply he is woven into the country’s history, identity, and cultural memory as well as its spiritual life. His relics are still preserved at the monastery today, drawing pilgrims from across the Orthodox world.',
      ],
    },
    {
      title: 'How old is Rila Monastery and what is its history?',
      text: [
        'The monastery you visit today is largely a 19th-century reconstruction, built after an 1833 fire by craftsmen, artists, and monks from across Bulgaria – an act of collective national renewal that is itself part of the site’s significance.',
      ],
      timeline: [
        { period: '10th century', event: 'Founded by St Ivan of Rila' },
        { period: 'Medieval period', event: 'Expanded and fortified by Bulgarian tsars' },
        {
          period: '1335',
          event: 'Hrelyo Tower constructed — the oldest surviving structure on site',
        },
        { period: '1833', event: 'Catastrophic fire destroys most of the complex' },
        { period: '1834–1862', event: 'National reconstruction effort rebuilds the monastery' },
        { period: '1983', event: 'Listed as a UNESCO World Heritage Site' },
      ],
    },
    {
      title: 'What can you see inside Rila Monastery?',
      items: [
        {
          name: 'The Church of the Nativity of the Virgin',
          details:
            'The centrepiece of the inner courtyard, completed in 1837. Its exterior arcade is covered in more than 1,200 individual fresco scenes depicting biblical narratives, saints, and the Last Judgement. The style bridges Byzantine tradition with an emerging Bulgarian national aesthetic, and the colours remain remarkably vivid nearly 200 years on.',
        },
        {
          name: 'The Hrelyo Tower',
          details:
            'Built in 1335, this five-storey medieval tower is the oldest surviving structure at Rila. It houses a small chapel at the top and offers sweeping views across the courtyard. Note: entry requires a separate ticket, available from the History Museum inside the complex.',
        },
        {
          name: 'Rafail’s Cross (History Museum)',
          details:
            'The standout exhibit of the monastery’s History Museum. Carved by the monk Rafail between 1790 and 1802, the cross contains more than 100 biblical scenes and over 650 miniature figures – some no larger than a grain of rice. According to tradition, the years of painstaking work cost Rafail his eyesight. It is one of the most extraordinary objects of religious art in Bulgaria.',
        },
        {
          name: 'The Ethnographic Museum and Revival Period Rooms',
          details:
            'Often overlooked by visitors focused on the History Museum, the Ethnographic Museum is spread across a few rooms and covers traditional Bulgarian material culture: carpets, folk costumes, and jewellery. Adjoining it are the Revival Period Guest Rooms – a series of reconstructed interiors representing the distinctive domestic styles of different Bulgarian towns of the 18th and 19th centuries.',
        },
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/The-architecture-of-the-Rila-Monastery-img-4.webp`,
        alt: 'Arcades and church details at Rila Monastery',
      },
    },
    {
      title: 'Are there entry fees at Rila Monastery?',
      text: [
        'Entrance to the monastery courtyard and main church is free. The museums and Hrelyo Tower charge separately, but fees are modest — a combined ticket covering all museum exhibitions costs around €10. Individual exhibitions can also be visited separately for a small fee each.',
        'Guided tours of the museums are available in Bulgarian, English, and French, lasting around 50 minutes. To book a guide, check the official monastery website for details.',
        'Important: Museum tickets can only be purchased on site at the monastery. Tickets bought online are not valid. For the most up-to-date prices, check the official monastery website.',
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/Rila-Monastery-Shop-at-the-foot-of-Hrelyo-Tower-img-3.webp`,
        alt: 'Shop at the foot of Hrelyo Tower at Rila Monastery',
      },
    },
    {
      title: 'When is Rila Monastery open?',
      text: [
        'The monastery complex and main church are open every day of the year with no seasonal closures. The church may be temporarily closed during morning and evening religious services.',
        'All museum exhibitions are open daily from 8:30 to 16:30, with extended hours until 19:30 on Fridays, Saturdays, and Sundays from 1 June to 30 September.',
        'Best time to visit: Early morning on weekdays, before organised tour groups arrive from Sofia. In high season, the courtyard becomes very crowded between 11:00 and 14:00. Winter offers a completely different experience – the monastery surrounded by snow is one of Bulgaria’s most evocative landscapes, with few tourists and a rare atmosphere of silence and contemplation.',
      ],
    },
    {
      title: 'Is there a dress code at the Rila Monastery?',
      text: [
        'Rila Monastery is an active place of worship. Visitors must cover their shoulders and knees. Women are encouraged to cover their heads when entering the church, though this is not always strictly enforced. Men should not wear hats when entering the church. In order to be respectful, you should also avoid sitting with crossed legs, keeping hands in pockets, and using your phone in the church. Photography is not permitted inside the church or museums.',
      ],
    },
    {
      title: 'How do you get to Rila Monastery from Sofia?',
      text: [
        'Rila Monastery is approximately 120 km south of Sofia, around a 2-hour drive. We recommend getting there either by organised day trip or rental car.',
      ],
      list: [
        'Organised day trips are the most practical option for most visitors. Tours from Sofia are widely available on platforms like Viator and GetYourGuide, typically combining the monastery with other nearby sights such as the Stob Pyramids or Boyana Church. Prices start from around €24 per person, with departures between 8:00 and 9:00 AM and returns in the evening.',
        'Renting a car gives you the most flexibility – to stop at the Stob Pyramids en route, or extend your trip into the Rila Mountains. The drive follows well-signposted roads and is straightforward. Parking at the monastery costs around €2.50.',
        'We do not recommend relying on public transport. There is technically one direct bus per day from Sofia’s Ovcha Kupel bus station, but the schedule is unreliable and leaves you with only around two hours at the monastery before the return departure. If you do want to check current schedules, call the Ovcha Kupel (Sofia-West) Bus Station directly on +359 2 955 5362 for the most up-to-date information. The bus station itself is a 30-minute journey from the city centre, adding further inconvenience. For a site that deserves proper time, public transport is not a practical choice.',
      ],
    },
    {
      title: 'What else can you do near Rila Monastery?',
      boldList: [
        {
          label: 'The Cave of St Ivan of Rila:',
          text: ' The cave where St Ivan of Rila spent more than seven years of his life is located only 3–4 km from the monastery. Drive past the monastery parking and continue until you see a large wooden icon on the left side of the road – this is where you leave your car. From there it is a 15-minute walk through the forest to a small stone chapel. The entrance to the cave is narrow. According to local tradition, only those with a pure soul can pass through the tight rock tunnel – it is sometimes called the Sacred Hole of the Righteous. There is a natural spring beside the cave, considered holy, and a prayer rock above it with panoramic views of the Rila Mountains. Entry is free. Wear sturdy shoes – the path includes some steep and rocky sections.',
        },
        {
          label: 'The Stob Pyramids:',
          text: ' sandstone rock formations shaped by centuries of wind and rain erosion, located in the village of Stob, about 20 minutes from the monastery by car. The formations stretch across approximately 40 hectares, with some reaching up to 12 metres in height. Their unusual shapes – spires, columns, and mushroom-capped towers – have inspired local folklore, including legends of a cursed wedding turned to stone. The trail is approximately 1.2 km one way, with several viewpoints offering panoramic views of the Rila Mountains and the Struma River valley. A small entry fee of around 2–3 BGN applies. Tours often combine the Stob Pyramids with Rila Monastery as a natural two-in-one excursion. The pyramids are most photogenic at sunset. Follow signs for the village of Stob rather than relying on GPS, which can direct you to a viewpoint rather than the trailhead.',
        },
        {
          label: 'Medi Valley Winery:',
          text: ' Medi Valley Winery was established in 2007 in the village of Smochevo, at the foot of the Rila Mountain. The winery has 370 acres of vineyards planted with local Bulgarian, as well as French, Italian and other grapes and has a panoramic terrace with views of the Rila Mountains. You can visit the winery to do a wine tasting or grab some Bulgarian wine for home. Important: Wine tastings are only conducted by prior reservation – walk-ins are not accepted. Book in advance through the winery’s website. Tasting packages start from around €13 per person and include a tour of the production facilities and a tasting of wines paired with local food.',
        },
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/The-Stob-Pyramids-img-5.webp`,
        alt: 'The Stob Pyramids near Rila Monastery',
      },
    },
    {
      title: 'Where can you eat near Rila Monastery?',
      text: [
        'Several restaurants and small food stalls operate just outside the monastery complex, so you won’t go hungry on a day trip. This is a good place to eat like a Bulgarian rather than a tourist.',
        'The most famous local snack is mekitsi – deep-fried dough made with yoghurt, best eaten warm from one of the small bakeries near the complex with powder sugar or jam on top. They are cheap, filling, and very good. For a sit-down meal, the restaurants in the area serve classic Bulgarian mountain food. Look out for grilled trout from the local rivers, shkembe chorba (tripe soup, a Bulgarian staple), kavarma (a slow-cooked meat and vegetable stew served in a clay pot), and banitsa (a flaky pastry filled with cheese and egg). If you are visiting in summer, a shopska salad – tomatoes, cucumbers, peppers, and grated white cheese – is the perfect accompaniment to almost anything.',
        'Important: Cash is advisable, as smaller establishments may not accept cards.',
      ],
    },
    {
      title: 'Can you stay overnight at Rila Monastery?',
      text: [
        'Yes. The monastery operates a guesthouse within the complex itself, offering simple but comfortable rooms. Staying overnight gives you access to the monastery in the early morning and evening, after day visitors have left — a genuinely different experience from a day trip. To book, call the monastery directly (note that English may be limited – a Bulgarian speaker can help). Several restaurants operate near the complex for dinner. Prices are around €15 per person per night. The monastery is also a well-known starting point for longer hiking routes into the Rila Mountains, making it a practical base if you are planning multi-day hiking in the area.',
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/The-Backyard-of-Rila-Monastery.webp.webp`,
        alt: 'Backyard of Rila Monastery',
      },
    },
    {
      cta: {
        before: 'Rila Monastery is one of the unmissable stops on our ',
        linkText: 'Bulgaria trip',
        linkUrl: '/tour-item/bulgaria-beyond-the-ordinary/',
        after:
          '. Find out what else we’ve included – and why we think Bulgaria deserves more time than most travellers give it.',
      },
    },
  ],
};

export const TEN_UNMISSABLE_PLACES_TO_VISIT_ON_YOUR_BULGARIA_TRIP: BlogPostContent = {
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
    src: `${BLOG_IMAGE_BASE}/beautiful-bulgaria-post-preview-bgr.webp`,
    alt: 'Bulgarian mountain lake and green hills',
  },
  heroImage: {
    src: `${BULGARIA_POST_IMAGE_BASE}/beautiful-bulgaria-post-bgr.webp`,
    alt: 'Beautiful mountain landscape in Bulgaria',
  },
  relatedTour: {
    title: 'Bulgaria Beyond the Ordinary',
    url: '/tour-item/bulgaria-beyond-the-ordinary/',
  },
  sections: [
    {
      text: [
        'As local guides who explore these regions year-round, we created this list to help you experience the most meaningful places to visit in Bulgaria, not just the most famous ones. Alongside well-known highlights like Rila Monastery, Plovdiv, and Veliko Tarnovo, we’ve included cultural experiences, hidden villages, wine regions, and mountain landscapes that travelers often miss but remember the most.',
        'Whether you’re designing your first Bulgaria itinerary or searching for more unusual things to do in Bulgaria, these are the destinations we most often recommend to visitors who want to understand the country beyond the surface.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/beautiful-bulgaria-post-bgr.webp`,
        alt: 'Beautiful mountain landscape in Bulgaria',
      },
    },
    {
      title: 'Explore the Rhodope Mountains and Traditional Villages Like Leshten and Kovachevitsa',
      expandable: true,
      text: [
        'Exploring the Rhodope Mountains is one of the most memorable things to do in Bulgaria, especially if you want to have a culturally rich and nature-focused Bulgaria itinerary beyond the main cities.',
        'This region is known for its vast meadows, deep pine forests, and preserved mountain settlements where traditional life still shapes daily rhythms. Villages such as Leshten and Kovachevitsa are standout places to visit in Bulgaria for their beautifully restored stone houses, wooden verandas, and narrow cobbled streets typical of Bulgarian National Revival architecture. Nearby, the remote village of Ribnovo preserves a remarkable tradition – the Gelina wedding ritual, where the bride’s face is decorated with white paint, sequins, and colorful ornaments in a symbolic farewell ceremony before marriage. Experiencing or learning about this custom is one of the most authentic and unusual things to do in Bulgaria, offering rare insight into living Rhodope cultural identity.',
        'The western Rhodopes are particularly impressive for their wide alpine meadows, dense pine tree forests, and peaceful high-altitude trails leading to panoramic viewpoints and hidden mountain lakes. Hiking routes around areas like Dospat, Batak, and Shiroka Laka reveal rolling ridgelines and open grasslands that feel untouched by mass tourism. For outdoor adventures, Pamporovo is a year-round highlight, offering sunny ski slopes in winter and scenic hiking trails through vast meadows, pine forests, and panoramic ridges around Snezhanka Peak.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/1-1-scaled.webp`,
        alt: 'Rhodope Mountains in Bulgaria',
      },
    },
    {
      title: 'Sofia',
      expandable: true,
      text: [
        'Most travelers begin their trip to Bulgaria in Sofia, a compact and walkable capital where Roman, medieval, and modern landmarks sit side by side.',
        'Start at the iconic Alexander Nevsky Cathedral, one of the largest Orthodox churches in the Balkans, then browse the nearby open-air antique flea market in its square for Soviet memorabilia, icons, and vintage finds. Just steps away, the Serdica Archaeological Complex reveals preserved Roman streets and structures from the ancient city of Serdica.',
        'For a more local atmosphere, visit Zhenski Pazar (Women’s Market), where fresh produce, spices, cheeses, and everyday city life create one of the most authentic urban experiences and enjoyable things to do in Bulgaria.',
        'Sofia is also one of the country’s best destinations for food lovers, with traditional taverns alongside modern restaurants like Cosmos, Unica, and Nikolas 0/360, as well as themed experiences such as food tours, street-art walks, and communist-history routes—making the capital a flexible stop on any trip to Bulgaria, easy to explore according to your own interests and travel style.',
      ],
      image: { src: `${BULGARIA_POST_IMAGE_BASE}/2-1-scaled.webp`, alt: 'Sofia city landmark' },
    },
    {
      title: 'Walk the Medieval Streets of Veliko Tarnovo',
      expandable: true,
      text: [
        'Walking the medieval streets of Veliko Tarnovo is one of the most atmospheric things to do in Bulgaria, with colorful houses stacked along steep hillsides above the winding Yantra River and surrounded by lush green slopes that give the city its distinctive amphitheatrical setting.',
        'Once the capital of the Second Bulgarian Empire, Veliko Tarnovo remains one of the most historically significant places to visit in Bulgaria and a highlight of any cultural trip to Bulgaria. The hilltop Tsarevets Fortress dominates the skyline and invites visitors to explore the restored royal complex, fortress walls, and the Patriarchal Cathedral while enjoying sweeping panoramic views across the old town.',
        'In the nearby Samovodska Charshia quarter, traditional craft workshops, artisan boutiques, and cozy cafés recreate the atmosphere of a 19th-century market street, making it an ideal place to slow down and experience local culture as part of a relaxed Bulgaria itinerary.',
        'If you stay overnight, don’t miss the famous evening Sound and Light Show at Tsarevets, when the fortress is illuminated with dramatic projections, music, and bells that narrate key moments from Bulgaria’s medieval history—an unforgettable experience and one of the most memorable unusual things to do in Bulgaria.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/3-1-scaled.webp`,
        alt: 'Veliko Tarnovo in Bulgaria',
      },
    },
    {
      title: 'Buzludzha Monument',
      expandable: true,
      text: [
        'Visiting the futuristic Buzludzha Monument is one of the most striking and unusual things to do in Bulgaria, offering a powerful glimpse into the country’s recent history set against dramatic Balkan mountain scenery.',
        'Built in 1981 as a ceremonial hall for the Bulgarian Communist Party, the monument sits high on a remote ridge in the Balkan Mountains, where its spaceship-like silhouette dominates the landscape. Although no longer open for interior access, the structure remains one of the most photographed landmarks on any alternative Bulgaria itinerary and a highlight for travelers interested in architecture, history, and post-socialist heritage.',
        'Many visitors combine Buzludzha with nearby stops such as Shipka Pass and the Shipka Memorial Church, making this region one of the most rewarding cultural routes on a longer trip to Bulgaria and a standout among lesser-known places to visit in Bulgaria beyond the main cities.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/4-1-scaled.webp`,
        alt: 'Buzludzha Monument in Bulgaria',
      },
    },
    {
      title: 'Experience Bulgaria’s Rose Valley and the Tradition of Rose Oil',
      expandable: true,
      text: [
        'Exploring Bulgaria’s rose-growing traditions in the Rose Valley near Kazanlak is one of the most unique things to do in Bulgaria, offering insight into a centuries-old craft that still defines the country’s global reputation for high-quality rose oil.',
        'The best time to visit is late May to early June, when the fields bloom and the annual Rose Festival celebrates the harvest with traditional music, costumes, and rose-picking rituals at sunrise. While in Kazanlak, you can also explore the Rose Museum Kazanlak, learn about centuries-old distillation techniques, and taste rose-infused sweets, jams, liquors, and aromatic drinks—making this one of the most distinctive places to visit in Bulgaria on a cultural Bulgaria itinerary.',
        'Bulgarian rose oil, often called “liquid gold,” is exported globally and widely used in luxury perfumes by major French fragrance houses, as well as in cosmetics, skincare products, and natural wellness remedies—one reason the Rose Valley remains internationally important despite its small size.',
        'Even if you don’t reach Kazanlak, you can still enjoy this tradition in larger cities. In Sofia, specialty boutiques like One Bulgarian Rose offer tastings, product demonstrations, and high-quality rose oils, teas, chocolates, and cosmetics. These authentic items are among the most meaningful souvenirs to bring home from a trip to Bulgaria, combining heritage, craftsmanship, and a uniquely Bulgarian scent memory.',
      ],
      image: { src: `${BULGARIA_POST_IMAGE_BASE}/5-1-scaled.webp`, alt: 'Rose Valley in Bulgaria' },
    },
    {
      title: 'Go Wine Tasting in Bulgaria’s Ancient Vine Regions',
      expandable: true,
      text: [
        'Wine tasting is one of the most enjoyable things to do in Bulgaria, rooted in a tradition that stretches back over 4,000 years to the Thracians, who considered wine sacred and cultivated vines across much of today’s Bulgarian lands.',
        'One of the best places to experience this heritage on a trip to Bulgaria is the small historic town of Melnik, famous for its dramatic sandstone pyramids and its distinctive local grape variety, Broad-Leaved Melnik Vine. The region also attracted admirers such as Winston Churchill, who was known to favor Melnik red wines.',
        'Today, several excellent wineries around Melnik offer tastings with views over the Struma Valley, including Villa Melnik, Orbelus Winery, and Zlaten Rozhen Winery, where visitors can sample both traditional and modern interpretations of local grape varieties. These experiences make Melnik one of the most rewarding places to visit in Bulgaria for wine lovers.',
        'Beyond Melnik, wine is produced across nearly the entire country—from the Thracian Valley to the Danubian Plain and the Black Sea coast—so no matter where your Bulgaria itinerary takes you, you’re likely to find welcoming boutique wineries and authentic tasting experiences along the way.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/6-1-scaled.webp`,
        alt: 'Bulgarian wine region near Melnik',
      },
    },
    {
      title: 'Explore Plovdiv — Europe’s Oldest Living City',
      expandable: true,
      text: [
        'Exploring Plovdiv is one of the most essential things to do in Bulgaria, as the city blends ancient history, vibrant creative neighborhoods, and panoramic hilltop views into one of the country’s most atmospheric urban experiences.',
        'Often described as Europe’s oldest continuously inhabited city, Plovdiv reveals layers of Thracian, Roman, Ottoman, and Bulgarian heritage within walking distance. The beautifully preserved Roman Theatre of Plovdiv is one of the city’s highlights, still used today for concerts and performances and offering sweeping views toward the modern city below.',
        'Just above it lies the Old Town, where cobbled streets wind between colorful 19th-century National Revival houses, hidden courtyards, and small museums—making this area one of the most charming places to visit in Bulgaria on any cultural trip to Bulgaria.',
        'In contrast, the nearby Kapana district offers a lively creative atmosphere filled with cafés, artisan shops, galleries, and street art. It’s the perfect place to experience Plovdiv’s contemporary spirit and local food scene as part of a relaxed Bulgaria itinerary.',
        'For the best views, climb one of the city’s surrounding hills such as Nebet Tepe, where you can watch the sunset over rooftops, Roman ruins, and distant mountains—an unforgettable moment in one of the most rewarding places to visit in Bulgaria.',
      ],
      image: { src: `${BULGARIA_POST_IMAGE_BASE}/7-1-scaled.webp`, alt: 'Plovdiv in Bulgaria' },
    },
    {
      title: 'Visit Rila Monastery and the Cave of St. Ivan of Rila',
      expandable: true,
      text: [
        'Visiting the Rila Monastery is one of the most iconic things to do in Bulgaria and a highlight of nearly every cultural Bulgaria itinerary, thanks to its dramatic mountain setting and importance as the country’s spiritual heart.',
        'Founded in the 10th century by the hermit Ivan of Rila, the monastery sits deep within the forested slopes of the Rila Mountains and impresses visitors with its colorful frescoes, striped arcades, carved wooden balconies, and peaceful courtyard surrounded by alpine scenery. As a UNESCO World Heritage Site, it remains one of the most significant places to visit in Bulgaria on any meaningful trip to Bulgaria.',
        'A short walk from the main complex leads to the sacred Cave of St. Ivan of Rila, where the saint is believed to have lived as a hermit. Reaching the cave via a forest trail adds a quieter, reflective dimension to the visit and is considered one of the more unusual things to do in Bulgaria, combining nature, spirituality, and history in a single experience.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/8-1-scaled.webp`,
        alt: 'Rila Monastery in Bulgaria',
      },
    },
    {
      title: 'Hike the Seven Rila Lakes and Spend a Night in a Mountain Hut',
      expandable: true,
      text: [
        'Hiking the Seven Rila Lakes is one of the most unforgettable things to do in Bulgaria, offering dramatic alpine scenery and a deeper connection to the country’s wild mountain landscapes as part of a nature-focused trip to Bulgaria.',
        'Located high in the Rila Mountains, the lakes are linked by panoramic trails that pass glacial basins, rolling ridgelines, and sweeping viewpoints. Each lake has its own distinctive shape and name—such as The Eye, The Kidney, and The Tear—creating one of the most scenic hiking routes among all the places to visit in Bulgaria.',
        'For a truly immersive experience, consider spending the night in a traditional mountain hut near the lakes. Staying at altitude lets you enjoy sunset and sunrise over the alpine landscape, quieter trails after day visitors leave, and the unique atmosphere of Bulgaria’s long-standing hiking culture—an authentic and slightly adventurous addition to any well-planned Bulgaria itinerary and one of the most memorable unusual things to do in Bulgaria.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/9-1-scaled.webp`,
        alt: 'Seven Rila Lakes in Bulgaria',
      },
    },
    {
      title: 'Explore the Old Towns and Hidden Villages Along the Black Sea Coast',
      expandable: true,
      text: [
        'Exploring the historic settlements along Bulgaria’s Black Sea coast is one of the most relaxing and culturally rich things to do in Bulgaria, especially if your trip to Bulgaria includes both seaside scenery and traditional architecture.',
        'The UNESCO-listed old town of Nessebar is one of the most famous places to visit in Bulgaria, known for its ancient churches, cobbled streets, and wooden Revival-era houses perched on a narrow peninsula. Nearby, Sozopol offers a similarly charming atmosphere with historic seaside homes, small galleries, and excellent seafood restaurants along the waterfront.',
        'However, beyond these popular destinations, the southern coast hides quieter villages where you can still experience authentic Bulgarian hospitality. Places like Sinemorets and Varvara offer a slower pace of life, scenic beaches, and a strong connection to local traditions—ideal stops for travelers looking for more unusual things to do in Bulgaria away from the summer crowds.',
        'Including both historic coastal towns and lesser-known seaside villages in your Bulgaria itinerary creates a balanced experience of culture, nature, and relaxed Black Sea charm.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/10-1-scaled.webp`,
        alt: 'Black Sea old town in Bulgaria',
      },
    },
  ],
};

export const HOW_TO_VISIT_SONG_KUL_LAKE_IN_KYRGYZSTAN: BlogPostContent = {
  slug: 'how-to-visit-song-kul-lake-in-kyrgyzstan',
  title: 'Song Kul: What You Need to Know About Kyrgyzstan’s Most Untamed Alpine Lake',
  publishedAt: '2026-02-26',
  date: 'February 26, 2026',
  category: 'Uncategorized',
  comments: 3,
  excerpt:
    'Practical guide to Song Kul Lake covering best season, access routes, yurt camps, horse riding, hiking, weather, cash, connectivity and basic conditions.',
  preview:
    'High in the mountains of Kyrgyzstan, at 3,016 metres above sea level, Song-Kul Lake feels like another world. There are no towns here. No paved roads circling the shoreline. No permanent settlements. Just open pasture, grazing horses, scattered yurts, and the slow rhythm of nomadic life continuing much as it has for centuries. It’s the kind of place that makes you realise how rarely you actually feel free. For many travellers, Song Kol is the highlight of Kyrgyzstan and here is what you need to know before you visit it.',
  image: {
    src: `${BLOG_IMAGE_BASE}/Kyrgystan-post-preview-bgr.webp`,
    alt: 'Yurt camp beside Song Kul Lake in Kyrgyzstan',
  },
  heroImage: {
    src: `${KYRGYZSTAN_POST_IMAGE_BASE}/Kyrgystan-bgr.webp`,
    alt: 'Song Kul Lake landscape in Kyrgyzstan',
  },
  relatedTour: {
    title: 'Kyrgyzstan Discovery Tour',
    url: '/tour-item/kyrgyzstan-tour/',
  },
  sections: [
    {
      text: [
        'Song Kol (also written Song Kul, Son Kul, or Song-Köl) is Kyrgyzstan’s second largest lake, sitting at the heart of the Tien Shan mountains in the Naryn region. It covers around 270 square kilometres, stretches 29 km at its longest, and sits high enough that it freezes solid every winter — sometimes under more than a metre of ice. But from June to September, the plateau transforms into one of Central Asia’s most extraordinary summer pastures. What you do find in summer are the Kyrgyz nomadic families who have been bringing their livestock up to these jailoos — high summer pastures — for generations. They arrive in late May, set up their yurts along the shoreline, and stay through early October.',
      ],
      image: {
        src: `${KYRGYZSTAN_POST_IMAGE_BASE}/Kyrgyzstan-tour-img-1.webp`,
        alt: 'Yurts and open pasture around Song Kul Lake',
      },
    },
    {
      title: 'When to Visit Song Kul Lake',
      text: [
        'The tourist window is short: June to September is when the passes are open and the yurt camps are running. The lake sits high enough that even in July, overnight temperatures can drop below freezing, and snow on the surrounding peaks in summer is common rather than unusual.',
        'July and August are peak season – warmest days, most yurt camps are open, most other travellers are around. June offers lush green meadows and fewer crowds but colder nights. September is quieter still and the light turns golden, though camps begin closing mid-month.',
        'One thing worth knowing: the weather here is notoriously unpredictable. A clear blue morning can become a hailstorm by afternoon. Pack accordingly, even in August.',
      ],
      image: {
        src: `${KYRGYZSTAN_POST_IMAGE_BASE}/Kyrgyzstan-SongKul-Lake-img-2.webp`,
        alt: 'Song Kul Lake in Kyrgyzstan during travel season',
      },
    },
    {
      title: 'How to reach Song Kul Lake',
      text: ['To reach the lake you have a few options:'],
      list: [
        'Hire a driver from Bishkek or Naryn. Most travellers go via Kochkor (about 3 hours from Bishkek) or directly from Naryn. From Naryn, the spectacular 33 Parrots Road winds up through 33 switchbacks to the plateau – allow 3 hours on rough road. From Kochkor, the Kalmak-Ashuu Pass route is the most commonly used.',
        'Book through CBT (Community Based Tourism). The CBT offices in Kochkor and Naryn are a reliable local resource for transport, yurt bookings, and current road conditions. Highly recommended for independent travellers.',
        'Hike in from Kyzart. For those who want to earn the views, a 3-day trek from the village of Kyzart (near Kochkor) takes you across mountain passes and through jailoo pastures before reaching the lake.',
        'Horseback riding – multi-day horse treks from Kochkor or Kyzart are a popular option – 3 to 4 days in, following routes the Kyrgyz herders have used for centuries.',
      ],
      cta: {
        before:
          'A note on roads: A 4×4 car is highly recommended as the roads are steep, unpaved gravel tracks. Song Kul lake is one of the highlights of ',
        linkText: 'our Kyrgyzstan trip',
        linkUrl: '/tour-item/kyrgyzstan-tour/',
        after: ', you can see all details for our next departure here.',
      },
      image: {
        src: `${KYRGYZSTAN_POST_IMAGE_BASE}/Kyrgyzstan-SongKul-Lake-img-3.webp`,
        alt: 'Road and landscape near Song Kul Lake',
      },
    },
    {
      title: 'Where to Stay',
      text: [
        'Yurt camps dot the shoreline from late May through early October. They range from basic family setups to slightly more organised camps with flush toilets and running water – but “comfort” here is relative, and that’s the point.',
        'A typical stay costs around 20 USD person per night, with dinner and breakfast included. Meals are simple and communal: fresh bread, tea, soup, and meat or fish. Vegetarian options are usually available if you ask ahead.',
        'Most camps operate on a first-come, first-served basis, though during peak July–August weeks it’s worth booking ahead if you can. The CBT network and operators like Kyrgyz Riders can help with advance reservations. Wild camping is also legal anywhere on the lakeshore for those who prefer total solitude.',
      ],
      image: {
        src: `${KYRGYZSTAN_POST_IMAGE_BASE}/Kyrgyzstan-SongKul-Lake-img-4.webp`,
        alt: 'Yurt camp accommodation at Song Kul Lake',
      },
    },
    {
      title: 'What to Do',
      text: [
        'The honest answer is: not much, deliberately. Song Kol rewards those who slow down. In our opinion, the best thing to do here is to allow yourself to slow down, soak in the atmosphere and allow yourself to disconnect from the world and not have to think about what’s next on the schedule. Some of the best activities also include:',
      ],
      list: [
        'Horse riding – this is the natural activity here. Riding along the shoreline at dusk, with the light flattening across the water and the mountains turning pink, is one of those travel moments that needs no filter.',
        'Walking around the lake perimeter is possible as a 30 km loop over two to three days — the terrain is open and the views from the surrounding hills back down to the water are worth the climb.',
        'Wildlife watching is quietly rewarding. Over 60 species of birds nest or pass through the area, including demoiselle cranes and bar-headed geese. The meadows around the lake are also rich with wildflowers in June and July, including the rare edelweiss.',
      ],
    },
    {
      title: 'A Few Notes on the Experience',
      text: ['A few things to keep in mind when considering if you should visit Song Kul Lake:'],
      list: [
        'There is no ATM at the lake. Bring enough Kyrgyz som in cash.',
        'There is no phone signal or Wi-Fi at Song Kol.',
        'Yurt stoves provide heat but don’t burn all night — thermal layers are essential.',
        'Sunscreen matters more than you’d expect at altitude.',
        'Bring a headlamp and any medications you need, including something for altitude sickness if you’re prone to it.',
        'In most camps, the accommodation is shared with 5-6 people, the bathroom facilities are very basic.',
      ],
    },
    {
      text: [
        'Song Kol is not for everyone, and that’s worth saying clearly. The roads are rough. The nights might get cold. The facilities are basic. If you arrive expecting a boutique experience, you’ll be disappointed.',
        'But if you arrive open to it – to the discomfort and the slowness and the vastness of it – Song Kol tends to become the part of Kyrgyzstan people talk about for years afterwards.',
        'The nomadic families who share their camps and their meals are not curating an experience for tourists. They’re living the same seasonal rhythm their grandparents did. That realness is what you’re actually travelling towards.',
      ],
    },
  ],
};

export const BLOG_POSTS: readonly BlogPostContent[] = [
  TASSILI_NAJJER_NATIONAL_PARK_ALGERIA_GUIDE,
  THE_COMPLETE_VISITOR_GUIDE_TO_RILA_MONASTERY,
  TEN_UNMISSABLE_PLACES_TO_VISIT_ON_YOUR_BULGARIA_TRIP,
  HOW_TO_VISIT_SONG_KUL_LAKE_IN_KYRGYZSTAN,
];

export const BLOG_POST_SLUGS = BLOG_POSTS.map((post) => post.slug);

export function findBlogPostBySlug(slug: string | null | undefined): BlogPostContent | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
