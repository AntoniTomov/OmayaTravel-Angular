import { findBlogMetadataBySlug } from './blog-metadata-content';
import type { BlogPostContent } from './blog-content';

// Based on Omaya's current itineraries and Toni's 8 September 2026 fitness confirmation.
// No camp facilities, room allocation, transfer duration or guide identity is inferred.
export const PLANNING_GUIDES: readonly BlogPostContent[] = [
  {
    ...findBlogMetadataBySlug('morocco-casablanca-marrakech-route-guide')!,
    sections: [
      {
        title: 'The shape of the journey',
        text: [
          'Omaya’s Blue Cities & Golden Dunes route starts in Casablanca and finishes in Marrakech. It travels north first, through Rabat to Chefchaouen, before turning south through Fes towards Merzouga. The final part crosses back through the Dades Valley, Aït Ben Haddou and the High Atlas. This is a touring itinerary with several changes of base, rather than a city break with one desert excursion.',
        ],
        boldList: [
          {
            label: 'Days 1–3: Casablanca, Rabat and Chefchaouen.',
            text: 'Arrival on the Atlantic coast leads to the capital and then the blue city, with a full day in Chefchaouen.',
          },
          {
            label: 'Days 4–5: Volubilis, Meknes and Fes.',
            text: 'Visits along the southbound route give way to two nights in Fes and a guided medina walk.',
          },
          {
            label: 'Days 6–7: Merzouga and the Sahara.',
            text: 'The scenery changes on the long journey south. Time around Merzouga brings desert landscapes into the itinerary.',
          },
          {
            label: 'Days 8–12: valleys, mountains and Marrakech.',
            text: 'The route continues through the Dades Valley and Aït Ben Haddou, crosses the High Atlas and ends in Marrakech.',
          },
        ],
      },
      {
        title: 'Why the northern cities have their own days',
        text: [
          'Chefchaouen and Fes each have time beyond an arrival evening. In Chefchaouen, the guided morning introduces the medina before an afternoon at your own pace. In Fes, the guided walk is followed by free time too. That balance leaves room for a second look at a workshop or square, rather than experiencing every city through a short stop between drives.',
          'The two places offer different rhythms. Chefchaouen sits within the northern section of the journey; Fes marks the transition before the long southbound day. Having time in both is one reason this route takes twelve days.',
        ],
      },
      {
        title: 'The road to the desert is part of the holiday',
        text: [
          'Fes to Merzouga is a substantial travel day in the published itinerary. There is a stop near Azrou before the landscape changes towards the desert. Exact driving and break times depend on the operating plan; this is a day to allow for being on the road, not a spare afternoon in a city.',
          'The desert section is followed by more travelling through valleys and mountain scenery. Omaya rates the tour’s fitness level as easy. That rating describes physical demand; it does not remove the long drives or the uneven surfaces encountered during city walks.',
        ],
      },
      {
        title: 'Arriving in one city and leaving from another',
        text: [
          'The start and finish matter when planning flights: Casablanca is the arrival city and Marrakech is the departure city. Flight arrangements work best around a confirmed departure and the team’s arrival coordination, rather than an assumption that the group returns to Casablanca.',
          'The maintained tour page carries dates, prices, daily arrangements and exclusions. Accommodation details and any private-room request belong in that booking conversation, particularly for the desert portion of the journey.',
        ],
        cta: {
          before: 'The complete route is described in ',
          linkText: 'Morocco – Blue Cities & Golden Dunes',
          linkUrl: '/tour-item/morocco-tour/',
          after: ', our twelve-day classic small-group journey.',
        },
      },
    ],
  },
  {
    ...findBlogMetadataBySlug('women-only-kyrgyzstan-what-to-expect')!,
    sections: [
      {
        title: 'A women-only group, with a shared route',
        text: [
          'The women-only format describes the travelling group. It offers a way to join a planned journey without organising every move independently. It does not, by itself, specify the gender of the guide or the allocation of bedrooms and yurts.',
          'For someone arriving on her own, the welcome briefing in Bishkek is the first point where the itinerary becomes a shared experience. The published first evening includes dinner and a folklore concert; the next day pairs Ala Archa with a Bishkek city tour.',
        ],
      },
      {
        title: 'From the capital to Song Kul',
        text: [
          'Day three leaves Bishkek for Kochkor and Song Kul. The following day stays at the lake, with a planned two-hour horse ride in the morning and an afternoon that allows time to rest or take an optional walk. This full day is a different kind of pause from the city time at the beginning.',
          'Riding experience and personal comfort around horses are useful things to discuss with the team. An easy overall fitness rating is not a statement about a particular traveller’s riding confidence or an assurance that every activity has the same alternatives.',
        ],
        cta: {
          before: 'For a focused preparation list, see ',
          linkText: 'packing for a Song Kul yurt stay',
          linkUrl: '/song-kul-yurt-stay-packing-guide/',
          after: '.',
        },
      },
      {
        title: 'Around Issyk-Kul and into the valleys',
        text: [
          'After Song Kul, the route returns through Kochkor and continues towards Bokonbaevo. A yurt-building demonstration, an eagle-hunting demonstration and Skazka Canyon are among the experiences described in the itinerary. Karakol and Altyn Arashan bring another change of setting before the journey continues towards Cholpon-Ata and back to Bishkek.',
          'The accommodation sequence includes hotels, yurt camps and a guesthouse or homestay. Those labels describe different kinds of stay, not a single standard of facilities throughout. Current arrangements for a particular departure are best discussed before booking.',
        ],
      },
      {
        title: 'What easy fitness means for planning',
        text: [
          'Omaya rates this tour as easy. Walking, riding, changes of base and time in mountain surroundings are still part of the itinerary. The most useful conversation is about the individual days and anything that affects your comfort, rather than relying on the rating alone.',
          'Room allocation and private-room requests are separate from the women-only group format. The team can discuss your needs alongside the specific departure. There is no need to assume a particular room-sharing arrangement simply because you are joining independently.',
        ],
        cta: {
          before: 'The full ten-day route and current departures are on the ',
          linkText: 'women-only Kyrgyzstan tour page',
          linkUrl: '/tour-item/women-only-tour-kyrgyzstan/',
          after: '.',
        },
      },
    ],
  },
  {
    ...findBlogMetadataBySlug('song-kul-yurt-stay-packing-guide')!,
    sections: [
      {
        title: 'A small bag for the day',
        text: [
          'The women-only itinerary reaches Song Kul after travelling through Kochkor and includes a full day at the lake. A small day bag keeps the things you use most often together when the main luggage is packed away. It can also be useful during the planned horse ride or a walk, provided it is comfortable for that activity.',
        ],
        boldList: [
          {
            label: 'Warm layers and a windproof outer layer.',
            text: 'Separate layers give you more ways to adjust your clothing between travelling, walking and sitting outdoors.',
          },
          {
            label: 'Comfortable, already-worn footwear.',
            text: 'Shoes you know are a better choice for the trip than a new pair tried for the first time on arrival.',
          },
          {
            label: 'A head torch and spare power.',
            text: 'A personal light is useful after dark. Bring a suitable power bank for your own devices, following your airline’s carriage rules.',
          },
          {
            label: 'Sun hat, sunglasses and sun protection.',
            text: 'Keep them accessible during time outside rather than at the bottom of the main bag.',
          },
          {
            label: 'A reusable water bottle.',
            text: 'Ask the team about drinking-water provision and refilling arrangements for the departure.',
          },
          {
            label: 'Personal toiletries and a small towel.',
            text: 'Confirm what is supplied before deciding how much to bring.',
          },
        ],
      },
      {
        title: 'The camp questions that change the packing list',
        text: [
          'Yurt stays do not all provide identical facilities. A packing decision should follow the arrangements at the camp booked for your group, rather than a description of yurts elsewhere in Kyrgyzstan.',
        ],
        list: [
          'Which bedding is supplied, and is any additional sleeping equipment needed?',
          'What heating is available and how is it operated?',
          'Where are the toilets and washing facilities?',
          'Is there access to charging, and at what times?',
          'What drinking water and dietary arrangements are provided?',
          'What are the luggage arrangements for reaching camp?',
        ],
      },
      {
        title: 'Making room for a slower day',
        text: [
          'Day four of the women-only itinerary includes a morning horse ride and an afternoon at the lake. A book, a notebook or a camera can earn its place in the bag just as much as another item of outdoor equipment. Not every part of the day needs an activity.',
          'Omaya rates the tour as easy. The rating does not specify camp facilities, room allocation or individual activity requirements. Riding preferences, mobility needs and any other relevant personal circumstances can be discussed privately with the team before booking.',
        ],
      },
      {
        title: 'How this fits the wider journey',
        text: [
          'Song Kul is one stage of a route that also includes city stays and other overnight bases. A compact, adaptable packing list serves the whole journey better than packing only for the lake. This list does not assume private yurts, ensuite bathrooms or a particular room-sharing policy.',
        ],
        cta: {
          before: 'For the itinerary surrounding the lake stay, explore ',
          linkText: 'Omaya’s women-only Kyrgyzstan journey',
          linkUrl: '/tour-item/women-only-tour-kyrgyzstan/',
          after: '. The classic Kyrgyzstan tour also visits Song Kul.',
        },
      },
    ],
  },
  {
    ...findBlogMetadataBySlug('bulgaria-classic-women-only-tour-comparison')!,
    sections: [
      {
        title: 'What the two journeys share',
        text: [
          'Both published itineraries run for eight days and seven nights, start and finish in Sofia, and have group sizes of 6–12 people. Omaya rates both as easy. Their day-by-day route follows the same broad sequence, so choosing the women-only format does not mean giving up Rila, Plovdiv or the mountain villages.',
        ],
        boldList: [
          {
            label: 'Days 1–2: Sofia and its surroundings.',
            text: 'Arrival time is followed by a city tour and visits to Pancharevo Lake and the Bells Monument.',
          },
          {
            label: 'Days 3–4: Rila, Melnik and the villages.',
            text: 'Rila Monastery and a wine tasting in Melnik lead into Ribnovo and an overnight base in Leshten or Kovachevitsa.',
          },
          {
            label: 'Days 5–6: Plovdiv and the route to Veliko Tarnovo.',
            text: 'Plovdiv’s Old Town gives way to Asen’s Fortress, a Kazanluk Thracian Tomb or Damascena stop, and Buzludzha.',
          },
          {
            label: 'Days 7–8: Veliko Tarnovo and back to Sofia.',
            text: 'The return includes Krushuna Waterfalls and Devetashka Cave, before departure from Sofia the next day.',
          },
        ],
      },
      {
        title: 'The difference is who you travel with',
        text: [
          'The classic departure is the general small-group format. The women-only departure is for a group of women following the Bulgaria route together. Neither label establishes a private-room entitlement or a particular sharing arrangement, and women-only does not automatically describe the gender of every member of the operating team.',
          'Dates and the booking details can differ between departures. The two maintained tour pages are the place for that comparison; a guide should not freeze a price or availability claim that may change.',
        ],
        cta: {
          before: 'The general group format is ',
          linkText: 'Bulgaria Beyond the Ordinary',
          linkUrl: '/tour-item/bulgaria-beyond-the-ordinary/',
          after: '.',
        },
      },
      {
        title: 'The cultural stops have their own shape',
        text: [
          'Ribnovo is described as a visit with a traditional lunch and a bridal face-painting demonstration. That is different from promising attendance at a private wedding. The Kazanluk day includes the Thracian Tomb or Damascena; the itinerary presents an alternative, rather than two guaranteed stops.',
          'There is also room for time independently, including evenings in Sofia and Plovdiv. The journey combines guided visits with these pauses instead of scheduling every hour. Easy fitness still involves walking on surfaces such as cobbles and uneven ground, as the tour FAQs explain.',
        ],
      },
      {
        title: 'Eight days cover a route, not all of Bulgaria',
        text: [
          'The Black Sea coast and Seven Rila Lakes appear in broader Bulgaria travel ideas, but they are not stops on these eight-day itineraries. They belong to a different or extended holiday plan. The appeal here is the connection between the capital, monastery, villages and historic towns along this particular route.',
          'For travellers drawn to that route, the group format and a suitable departure date make a useful starting point. Personal preferences about rooming and pace can then be discussed with the team.',
        ],
        cta: {
          before: 'The women-only option is ',
          linkText: 'Bulgaria Beyond the Ordinary | Women only',
          linkUrl: '/tour-item/women-only-tour-bulgaria/',
          after: ', with its own departure information and full itinerary.',
        },
      },
    ],
  },
];
