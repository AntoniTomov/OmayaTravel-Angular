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

export interface BlogSection {
  title?: string;
  text?: readonly string[];
  list?: readonly string[];
  timeline?: readonly BlogTimelineItem[];
  items?: readonly BlogNamedItem[];
  image?: BlogSectionImage;
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
    "Bulgaria's most sacred landmark, a UNESCO World Heritage Site, and one of the most breathtaking places in the Balkans. Here's everything you need to plan your visit to Rila Monastery.",
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
      title: 'What is Rila Monastery and why visit?',
      text: [
        "Bulgaria's most important Orthodox spiritual and cultural landmark, at about 1,147 metres in Rila Mountains.",
        'More than a millennium of monastic history; UNESCO World Heritage Site since 1983.',
        'Played major role preserving Bulgarian culture and Orthodox identity during Ottoman rule.',
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/Frescoes-at-the-Rila-Monastery-img-2.webp`,
        alt: 'Frescoes at the Rila Monastery',
      },
    },
    {
      title: 'Who founded Rila Monastery?',
      text: [
        "Origins trace to St Ivan of Rila, a 10th-century hermit later canonised as Bulgaria's patron saint.",
        'His relics remain at monastery.',
      ],
    },
    {
      title: 'History timeline',
      timeline: [
        { period: '10th century', event: 'Founded by St Ivan of Rila' },
        { period: 'Medieval period', event: 'Expanded and fortified under Bulgarian rulers' },
        { period: '1335', event: 'Hrelyo Tower constructed' },
        { period: '1833', event: 'Major fire destroyed much of complex' },
        { period: '1834–1862', event: 'Large-scale national reconstruction' },
        { period: '1983', event: 'Added to UNESCO World Heritage List' },
      ],
    },
    {
      title: 'What to see',
      items: [
        {
          name: 'Church of the Nativity of the Virgin',
          details: 'Main courtyard church, completed in 1837, famous for exterior frescoes.',
        },
        {
          name: 'Hrelyo Tower',
          details: 'Five-storey medieval tower from 1335; oldest surviving structure.',
        },
        {
          name: "Rafail's Cross",
          details:
            'Intricately carved religious cross with more than 100 biblical scenes and hundreds of miniature figures.',
        },
        {
          name: 'Ethnographic Museum and Revival Period Rooms',
          details: 'Bulgarian costumes, carpets, jewellery and reconstructed historic interiors.',
        },
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/The-architecture-of-the-Rila-Monastery-img-4.webp`,
        alt: 'Arcades and church details at Rila Monastery',
      },
    },
    {
      title: 'Entry fees',
      text: [
        'Courtyard and main church are free.',
        'Museums and Hrelyo Tower require paid tickets; combined museum ticket around €10.',
        'Museum tickets bought on site; check official monastery website for current prices.',
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/Rila-Monastery-Shop-at-the-foot-of-Hrelyo-Tower-img-3.webp`,
        alt: 'Shop at the foot of Hrelyo Tower at Rila Monastery',
      },
    },
    {
      title: 'Opening hours',
      text: [
        'Complex and main church open year-round, though services may limit church access.',
        'Museum exhibitions generally open daily 08:30–16:30, with longer Friday–Sunday hours in summer.',
        'Early weekday mornings best for fewer crowds.',
      ],
    },
    {
      title: 'Dress code',
      list: [
        'Cover shoulders and knees.',
        'Men remove hats inside church.',
        'Women encouraged to cover heads.',
        'Photography not permitted inside church or museums.',
        'Behave respectfully; monastery is active place of worship.',
      ],
    },
    {
      title: 'Getting there from Sofia',
      text: [
        'About 120 km south of Sofia, roughly two hours by car.',
        'Organised day trips and rental cars are most practical.',
        'Public transport exists but is inconvenient and can leave little time on site.',
      ],
    },
    {
      title: 'Nearby places',
      items: [
        {
          name: 'Cave of St Ivan of Rila',
          details: 'Around 3–4 km from monastery, then short forest walk.',
        },
        {
          name: 'Stob Pyramids',
          details: 'Sandstone formations near Stob with roughly 1.2 km trail and viewpoints.',
        },
        {
          name: 'Medi Valley Winery',
          details: 'Winery near Smochevo offering tastings by prior reservation.',
        },
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/The-Stob-Pyramids-img-5.webp`,
        alt: 'The Stob Pyramids near Rila Monastery',
      },
    },
    {
      title: 'Food',
      text: [
        'Restaurants and food stalls operate outside monastery.',
        'Local choices include mekitsi, trout, shkembe chorba, kavarma, banitsa and shopska salad.',
        'Cash useful because some smaller places may not accept cards.',
      ],
    },
    {
      title: 'Staying overnight',
      text: [
        'Monastery operates simple guesthouse inside complex.',
        'Overnight stay gives quieter mornings and evenings.',
        'Site also works as base for longer Rila Mountain hikes.',
      ],
      image: {
        src: `${RILA_POST_IMAGE_BASE}/The-Backyard-of-Rila-Monastery.webp.webp`,
        alt: 'Backyard of Rila Monastery',
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
