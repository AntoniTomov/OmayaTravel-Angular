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
        title: 'Is Kyrgyzstan safe for women travellers?',
        text: [
          'Broadly, yes. Kyrgyzstan is a well-established destination for independent travellers, including women travelling alone, though as anywhere there are situations that call for extra care.',
          'Bishkek feels like a lively post-Soviet city, with women working, running businesses, driving, teaching and running guesthouses. Petty theft happens in crowded places, and unwanted attention is possible, particularly at night. The usual precautions apply: keeping an eye on your belongings, being cautious around alcohol, avoiding isolated areas late in the evening and trusting your instincts.',
          'Alcohol changes the atmosphere. Most uncomfortable encounters travellers describe involve people who have been drinking, usually late at night. It is not a reason to worry about the country, only a reason to apply the judgement you would anywhere unfamiliar.',
          'The south is more conservative than the north. Osh and parts of the Fergana Valley have a stronger visible Muslim influence than Bishkek or Karakol. There is no need to dress conservatively everywhere, but in villages and more traditional communities, covering your shoulders and knees is a respectful choice.',
          'Researching the country also turns up ala kachuu, the term used for bride kidnapping. It is a real social issue, it is illegal, and Kyrgyz women have been at the forefront of the activism challenging it. It is a domestic issue affecting Kyrgyz women rather than something that targets foreign visitors, but knowing a little about it adds useful context to the conversations you will have along the way.',
          'Mobile coverage is good in towns and along most main roads, and disappears entirely up in the high pastures, which is part of the appeal.',
        ],
      },
      {
        title: 'What to wear',
        text: [
          'There is no general dress code for women in Kyrgyzstan. In Bishkek there are jeans, dresses, trainers and heels, much as in any modern city.',
          'What matters more is the landscape. Kyrgyzstan is overwhelmingly mountainous and temperatures shift sharply with altitude. A warm summer afternoon can turn into a cold, wet evening surprisingly quickly, particularly at around 3,000 metres. Layers serve better than a carefully planned wardrobe.',
        ],
        list: [
          'A warm fleece or jacket, whatever the month',
          'Comfortable walking shoes, already broken in',
          'Something genuinely waterproof',
          'Sun protection, which matters more at altitude than most people expect',
          'For villages and more traditional communities, something that covers your shoulders and knees',
        ],
      },
      {
        title: 'Where you’ll actually meet Kyrgyz women',
        text: [
          'This is the part most itineraries skip, and one of the more rewarding sides of travelling here.',
        ],
        items: [
          {
            name: 'In the felt workshops',
            details:
              'Shyrdak and ala-kiyiz, the traditional felt carpets made from wool in intricate patterns, have long been part of Kyrgyz domestic and cultural life. Women play a major role in keeping the craft alive, passing techniques and designs down through generations. Time with local makers is a glimpse of a tradition still in everyday use, rather than one kept going for visitors.',
          },
          {
            name: 'In the guesthouses',
            details:
              'Community-based tourism in Kyrgyzstan has grown up around family-run homestays, and women are often at the heart of them, cooking, welcoming guests and keeping everything running. Meals are usually shared, often around a low table, and the conversation tends to outlast the food.',
          },
          {
            name: 'Around the kymyz',
            details:
              'Fermented mare’s milk is a traditional drink: tart, slightly fizzy and, for most first-time visitors, an acquired taste. Whether it becomes a favourite or a polite single bowl, being offered it is part of rural Kyrgyz hospitality.',
          },
          {
            name: 'In the national story',
            details:
              'Kurmanjan Datka, the nineteenth-century leader known as the Queen of Alai, played a significant role in the history of southern Kyrgyzstan and remains one of the country’s best-known historical figures.',
          },
        ],
      },
      {
        title: 'The route, from Bishkek to Song Kul and Issyk-Kul',
        text: [
          'The journey runs ten days, Bishkek to Bishkek, with a small group of 6–12 travellers. Its shape changes as it goes: city time at the start, lake and pasture in the middle, valleys and mountains towards the end.',
        ],
        boldList: [
          {
            label: 'Bishkek, to begin.',
            text: 'For someone arriving on her own, the welcome briefing in Bishkek is the first point where the itinerary becomes a shared experience. The published first evening includes dinner and a folklore concert; the next day pairs Ala Archa with a Bishkek city tour.',
          },
          {
            label: 'Kochkor and Song Kul.',
            text: 'Day three leaves Bishkek for Kochkor and Song Kul. The following day stays at the lake, with a planned two-hour horse ride in the morning and an afternoon that allows time to rest or take an optional walk. This full day is a different kind of pause from the city time at the beginning.',
          },
          {
            label: 'Around Issyk-Kul.',
            text: 'After Song Kul, the route returns through Kochkor and continues towards Bokonbaevo. A yurt-building demonstration, an eagle-hunting demonstration and Skazka Canyon are among the experiences described in the itinerary.',
          },
          {
            label: 'Karakol, Altyn Arashan and Cholpon-Ata.',
            text: 'Karakol and Altyn Arashan bring another change of setting before the journey continues towards Cholpon-Ata and back to Bishkek.',
          },
        ],
      },
      {
        title: 'Yurt nights, and what to ask about your departure',
        text: [
          'The accommodation sequence includes hotels, yurt camps and a guesthouse or homestay. Those labels describe different kinds of stay, not a single standard of facilities throughout. Current arrangements for a particular departure are best discussed before booking.',
          'A head torch, wet wipes and a small bag for personal waste are useful wherever you stay, and period products are worth bringing with you: supplies can be hard to find away from the towns.',
        ],
        cta: {
          before: 'For a focused preparation list, see ',
          linkText: 'packing for a Song Kul yurt stay',
          linkUrl: '/song-kul-yurt-stay-packing-guide/',
          after: '.',
        },
      },
      {
        title: 'When to go',
        text: [
          'For the high pastures, mid-June to early September is the main season. Yurt camps open as herders move their animals up to the summer pastures and close again as the weather turns, so access depends on snow and road conditions as much as on the calendar. September brings fewer people and clearer light, and nights at altitude that are genuinely cold.',
        ],
        cta: {
          before: 'Season, access routes and conditions at the lake are covered in more detail in ',
          linkText: 'our guide to visiting Song Kul',
          linkUrl: '/how-to-visit-song-kul-lake-in-kyrgyzstan/',
          after: '.',
        },
      },
      {
        title: 'Getting around',
        text: [
          'Shared minibuses, known as marshrutkas, and shared taxis connect towns cheaply, but they leave when full rather than to a timetable, journeys over mountain passes take longer than expected, and English is not widely spoken outside the main tourist centres. Russian is useful, Kyrgyz is everywhere, and English is increasingly common in tourist areas.',
          'None of that makes independent travel impossible, and plenty of women do it. But Song Kul, Tash Rabat and the high jailoos around Karakol are difficult to reach on public transport, which is the practical argument for travelling with a group and a driver who knows the roads.',
        ],
      },
      {
        title: 'What an easy fitness rating means, and how rooms work',
        text: [
          'Omaya rates this tour as easy. Walking, riding, changes of base and time in mountain surroundings are still part of the itinerary. The most useful conversation is about the individual days and anything that affects your comfort, rather than relying on the rating alone.',
          'Riding experience and personal comfort around horses are useful things to discuss with the team. An easy overall fitness rating is not a statement about a particular traveller’s riding confidence or an assurance that every activity has the same alternatives.',
          'Altitude sits slightly apart from fitness. Song Kul is above 3,000 metres, and altitude can affect anyone regardless of age or condition: some people notice nothing, others have a headache, feel tired or sleep badly the first night. Taking the first day slowly and drinking more water than usual helps, and telling your guide is more useful than pushing through. Anyone with medical concerns or regular medication is best served by a conversation with a GP or travel clinic before booking.',
          'Room allocation and private-room requests are separate from the women-only group format. The team can discuss your needs alongside the specific departure. There is no need to assume a particular room-sharing arrangement simply because you are joining independently.',
        ],
      },
      {
        title: 'Why some women choose a women-only group',
        text: [
          'Kyrgyzstan is perfectly possible to travel independently as a woman, and plenty of women do. A women-only group is simply a different experience.',
          'Part of it is practical: the transfers, the mountain roads and the yurt bookings are already worked out. The more interesting part is what happens inside the group. Conversations in a homestay kitchen go somewhere unexpected. Time with local women can feel more relaxed. And there is something steadying about travelling among people who understand the same practical realities, whether that is sharing a yurt, feeling the altitude on the first night or getting thoroughly muddy on a mountain trail.',
          'The women-only format describes the travelling group. It offers a way to join a planned journey without organising every move independently. It does not, by itself, specify the gender of the guide or the allocation of bedrooms and yurts.',
          'A women-only group is not a requirement for visiting Kyrgyzstan. But for meeting local women, sleeping in a yurt, riding out into the mountains and sharing meals around a family table alongside other curious travellers, it is a different way to do it.',
        ],
        cta: {
          before: 'The full ten-day route and current departures are on the ',
          linkText: 'women-only Kyrgyzstan tour page',
          linkUrl: '/tour-item/women-only-tour-kyrgyzstan/',
          after: '.',
        },
      },
      {
        title: 'A practical note on visas',
        text: [
          'Visa requirements for Kyrgyzstan depend on nationality and do change. A number of passport holders, including citizens of many European countries, the UK and the US, can enter visa-free for eligible stays, though the permitted period and the conditions vary. Current requirements for your own passport are worth confirming before flights are booked.',
        ],
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
