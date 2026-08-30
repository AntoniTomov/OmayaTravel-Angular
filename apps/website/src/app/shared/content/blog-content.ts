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

export const BLOG_DISCOVER_TOURS_IMAGE =
  '/assets/images/home-page/carousel/HomePageCoverPhoto-3.webp';

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
    "Bulgaria’s most sacred landmark, a UNESCO World Heritage Site, and one of the most breathtaking places in the Balkans – here’s everything you need to plan your visit.",
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
        { period: '1335', event: 'Hrelyo Tower constructed — the oldest surviving structure on site' },
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
    "As local guides who explore these regions year-round, we created this list to help you experience the most meaningful places to visit in Bulgaria, not just the most famous ones. Alongside well-known highlights like Rila Monastery, Plovdiv, and Veliko Tarnovo, we've included cultural experiences, hidden villages, wine regions, and mountain landscapes that travelers often miss but remember the most.",
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
        'Bulgaria combines Roman cities, Orthodox monasteries, mountain villages, rose-growing regions and Black Sea coast within relatively short distances.',
        'List mixes major sights with local cultural experiences and less-visited areas.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/beautiful-bulgaria-post-bgr.webp`,
        alt: 'Beautiful mountain landscape in Bulgaria',
      },
    },
    {
      title: '1. Rhodope Mountains, Leshten and Kovachevitsa',
      text: [
        'Western Rhodopes combine pine forests, open meadows, mountain trails and preserved Revival-era villages. Nearby Ribnovo is known for Gelina bridal face-painting tradition. Dospat, Batak, Shiroka Laka and Pamporovo add hiking and mountain scenery.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/1-1-scaled.webp`,
        alt: 'Rhodope Mountains in Bulgaria',
      },
    },
    {
      title: '2. Sofia',
      text: [
        'Compact capital mixing Roman remains, Orthodox landmarks, markets, food and modern culture. Key stops include Alexander Nevsky Cathedral, Serdica archaeological remains and Zhenski Pazar.',
      ],
      image: { src: `${BULGARIA_POST_IMAGE_BASE}/2-1-scaled.webp`, alt: 'Sofia city landmark' },
    },
    {
      title: '3. Veliko Tarnovo',
      text: [
        'Former capital of Second Bulgarian Empire, built above Yantra River. Main attractions: Tsarevets Fortress, Samovodska Charshia and evening Sound and Light Show.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/3-1-scaled.webp`,
        alt: 'Veliko Tarnovo in Bulgaria',
      },
    },
    {
      title: '4. Buzludzha Monument',
      text: [
        'Large communist-era monument built in 1981 on Balkan Mountain ridge. Often combined with Shipka Pass and Shipka Memorial Church.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/4-1-scaled.webp`,
        alt: 'Buzludzha Monument in Bulgaria',
      },
    },
    {
      title: '5. Rose Valley',
      text: [
        "Kazanlak region is centre of Bulgaria's rose-oil tradition. Late May to early June is peak bloom and Rose Festival period, with rose picking, distillation and rose-based products.",
      ],
      image: { src: `${BULGARIA_POST_IMAGE_BASE}/5-1-scaled.webp`, alt: 'Rose Valley in Bulgaria' },
    },
    {
      title: '6. Bulgarian wine regions and Melnik',
      text: [
        'Bulgaria has thousands of years of winemaking history. Melnik is known for Broad-Leaved Melnik grape and wineries such as Villa Melnik, Orbelus and Zlaten Rozhen.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/6-1-scaled.webp`,
        alt: 'Bulgarian wine region near Melnik',
      },
    },
    {
      title: '7. Plovdiv',
      text: [
        "One of Europe's oldest continuously inhabited cities, combining Roman Theatre, Revival-era Old Town, Kapana creative district and viewpoints such as Nebet Tepe.",
      ],
      image: { src: `${BULGARIA_POST_IMAGE_BASE}/7-1-scaled.webp`, alt: 'Plovdiv in Bulgaria' },
    },
    {
      title: '8. Rila Monastery and Cave of St Ivan of Rila',
      text: [
        'UNESCO-listed monastery in Rila Mountains, founded in 10th century. Nearby forest trail leads to cave associated with St Ivan of Rila.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/8-1-scaled.webp`,
        alt: 'Rila Monastery in Bulgaria',
      },
    },
    {
      title: '9. Seven Rila Lakes',
      text: [
        'High-altitude glacial lakes linked by hiking trails. Staying in mountain hut offers quieter sunrise and sunset access and traditional Bulgarian hiking atmosphere.',
      ],
      image: {
        src: `${BULGARIA_POST_IMAGE_BASE}/9-1-scaled.webp`,
        alt: 'Seven Rila Lakes in Bulgaria',
      },
    },
    {
      title: '10. Black Sea old towns and villages',
      text: [
        'Nessebar and Sozopol offer historic coastal architecture and churches, while Sinemorets and Varvara provide quieter beaches and slower village atmosphere.',
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
    "Song Kul sits at roughly 3,016 metres in Kyrgyzstan's Tien Shan mountains and is surrounded by open pasture, yurts and seasonal nomadic camps. The lake covers about 270 square kilometres and freezes during winter. Summer turns the plateau into a major jailoo, or high pasture.",
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
        "Song Kul sits at roughly 3,016 metres in Kyrgyzstan's Tien Shan mountains and is surrounded by open pasture, yurts and seasonal nomadic camps.",
        'Lake covers about 270 square kilometres and freezes during winter. Summer turns plateau into major jailoo, or high pasture.',
      ],
      image: {
        src: `${KYRGYZSTAN_POST_IMAGE_BASE}/Kyrgyzstan-tour-img-1.webp`,
        alt: 'Yurts and open pasture around Song Kul Lake',
      },
    },
    {
      title: 'When to visit',
      text: [
        'Main season runs June–September when mountain passes are open and yurt camps operate.',
        'July and August are warmest and busiest. June is greener and quieter. September is quieter but camps begin closing.',
        'Weather changes quickly; freezing nights or summer snow remain possible.',
      ],
      image: {
        src: `${KYRGYZSTAN_POST_IMAGE_BASE}/Kyrgyzstan-SongKul-Lake-img-2.webp`,
        alt: 'Song Kul Lake in Kyrgyzstan during travel season',
      },
    },
    {
      title: 'How to reach Song Kul',
      items: [
        {
          name: 'Driver',
          details:
            'Travel from Bishkek, Kochkor or Naryn. Common approaches include Kalmak-Ashuu Pass and 33 Parrots Road.',
        },
        {
          name: 'CBT',
          details:
            'Community Based Tourism offices in Kochkor and Naryn can arrange transport, yurt stays and current road information.',
        },
        {
          name: 'Hiking',
          details:
            'Multi-day trekking routes start around Kyzart and cross mountain passes and jailoo pastures.',
        },
        {
          name: 'Horseback',
          details:
            'Three- to four-day horse treks from Kochkor or Kyzart follow traditional herding routes.',
        },
      ],
      list: ['4x4 strongly recommended because access roads are steep, rough and unpaved.'],
      image: {
        src: `${KYRGYZSTAN_POST_IMAGE_BASE}/Kyrgyzstan-SongKul-Lake-img-3.webp`,
        alt: 'Road and landscape near Song Kul Lake',
      },
    },
    {
      title: 'Where to stay',
      text: [
        'Yurt camps operate around shoreline from late May through early October.',
        'Facilities range from basic family camps to somewhat more organised camps with running water or flush toilets.',
        'Typical stays around USD 20 per person per night with dinner and breakfast included.',
        'Booking ahead useful in July and August. Wild camping also possible.',
      ],
      image: {
        src: `${KYRGYZSTAN_POST_IMAGE_BASE}/Kyrgyzstan-SongKul-Lake-img-4.webp`,
        alt: 'Yurt camp accommodation at Song Kul Lake',
      },
    },
    {
      title: 'What to do',
      items: [
        {
          name: 'Slow down',
          details:
            'Main appeal is open space, silence and break from constant schedules and connectivity.',
        },
        {
          name: 'Horse riding',
          details: 'Natural way to explore shoreline and surrounding pastures.',
        },
        {
          name: 'Walking and hiking',
          details: 'Longer routes can circle parts of lake and climb surrounding hills.',
        },
        {
          name: 'Wildlife watching',
          details: 'Area supports more than 60 bird species plus extensive summer wildflowers.',
        },
      ],
    },
    {
      title: 'Practical notes',
      list: [
        'No ATM at lake; carry Kyrgyz som.',
        'Expect no phone signal or Wi-Fi.',
        'Bring thermal layers because yurt stoves do not burn all night.',
        'Use sunscreen due to altitude.',
        'Bring headlamp and personal medication.',
        'Many yurts shared by five or six people.',
        'Bathroom facilities can be very basic.',
        'Rough roads, cold nights and simple accommodation are part of experience.',
      ],
    },
    {
      title: 'Nomadic culture',
      text: [
        "Families bring livestock to Song Kul's high summer pastures from late spring into early autumn.",
        'Many yurt camps remain part of seasonal pastoral life rather than existing only for tourism.',
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
