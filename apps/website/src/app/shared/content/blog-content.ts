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
  comments: 1,
  excerpt:
    'Guide to visiting Tassili n’Ajjer National Park and Tadrart Rouge, covering access, rock art, safety, weather, visas, desert camping, Tuareg culture and expedition conditions.',
  preview:
    "One of the largest protected areas in the Sahara, home to 600-metre red dunes, 8,000-year-old rock art, and Tuareg nomads who still live as their ancestors did. Here's what you need to know before visiting Tassili n'Ajjer National Park and Tadrart Rouge.",
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
        'Vast plateau and mountain region in south-eastern Algeria covering roughly 72,000 square kilometres near Libya, Niger and Mali.',
        'Designated national park in 1972 and UNESCO mixed cultural/natural World Heritage Site in 1982.',
        'Tadrart Rouge is a spectacular southern region known for red sandstone, huge dunes, arches, canyons and prehistoric rock art.',
      ],
      image: {
        src: `${ALGERIA_POST_IMAGE_BASE}/Algeria-Tassili-Desert-Expedition-img-1.webp`,
        alt: 'Red sandstone and dune landscape in Tadrart Rouge',
      },
    },
    {
      title: 'Where is it and how do you get there?',
      text: [
        'Main gateway is Djanet, around 2,000 km from Algiers.',
        'Typical access: domestic flight Algiers–Djanet, then 4x4 transport with licensed local team.',
        'Independent travel is impractical because permits, checkpoints, navigation and water logistics require organised support.',
      ],
    },
    {
      title: 'Rock art and history',
      text: [
        'More than 15,000 engravings have been identified across wider park.',
        'Art records eras when Sahara was greener and supported pastoral communities and large wildlife.',
        'Notable Tadrart Rouge sites include Wan Iska paintings and Crying Cow engravings near Tini.',
      ],
      image: {
        src: `${ALGERIA_POST_IMAGE_BASE}/Algeria-Tassili-Desert-Rock-Paintings-img-2.webp`,
        alt: "Ancient rock art site in Algeria's Sahara",
      },
    },
    {
      title: 'Safety',
      text: [
        'Trips are organised around Djanet with experienced Tuareg guides familiar with terrain, permits and checkpoints.',
        'Check current government travel advice before departure.',
        'Do not attempt park independently.',
      ],
    },
    {
      title: 'Best time to visit',
      text: [
        'Best period roughly October–March.',
        'June–August can bring dangerously high daytime temperatures.',
      ],
      image: {
        src: `${ALGERIA_POST_IMAGE_BASE}/Algeria-Desert-img-3.webp`,
        alt: 'Open desert landscape in Algeria',
      },
    },
    {
      title: 'Visa',
      text: [
        'Many southern-Algeria trips can use visa-on-arrival arrangements supported by invitation letters from local operators.',
        'Allow substantial lead time and verify current rules for your nationality.',
      ],
    },
    {
      title: 'Typical Tadrart Rouge route',
      text: [
        'Routes cross dune fields, black-sand plains, sandstone formations, arches, canyons and rock-art sites.',
        'Camps usually move most evenings.',
      ],
      image: {
        src: `${ALGERIA_POST_IMAGE_BASE}/Algeria-Tassili-Desert-Camp-img-4.webp`,
        alt: '4x4 expedition route through the Algerian Sahara',
      },
    },
    {
      title: 'Camping, food and conditions',
      text: [
        'Most nights are wild camping with basic toilets and no showers.',
        'Local teams carry supplies from Djanet and prepare meals.',
        'Share dietary restrictions well before departure.',
      ],
    },
    {
      title: 'Connectivity',
      text: [
        'Phone signal and Wi-Fi are unreliable to non-existent away from Djanet.',
        'Expect several days offline.',
      ],
    },
    {
      title: 'Tuareg culture',
      text: [
        'Tuareg guides lead many expeditions; travellers may encounter nomadic families around Wadi Essendilène.',
        'Djanet market offers textiles, handicrafts, food products and local culture.',
      ],
    },
    {
      title: 'Physical difficulty',
      text: [
        'Standard 4x4 expeditions need moderate general fitness.',
        'Harder trekking routes can involve 5–6 hours hiking daily.',
      ],
    },
    {
      title: 'Practical notes',
      list: [
        'Check before photographing people, checkpoints or sensitive infrastructure.',
        'Confirm current drone rules.',
        'Carry cash.',
        'Tipping guides and drivers is customary.',
        'Consider extra days in Algiers.',
      ],
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
