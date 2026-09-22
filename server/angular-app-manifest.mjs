
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 0,
    "status": 301,
    "redirectTo": "/calendar-2027/september",
    "route": "/september-2027"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QKINGzKE.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DMlFlWVr.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMlFlWVr.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CcX3z0nI.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJT8-pxC.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3p9TNEFG.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2aHqbIn.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IMyeasfb.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQAlcmdD.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJhWY5u0.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vcJbUIRq.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/private-tours-your-trip-your-rules/describe"
  },
  {
    "renderMode": 2,
    "redirectTo": "/private-tours-your-trip-your-rules/describe",
    "route": "/3122-2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeONHNfZ.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeONHNfZ.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeONHNfZ.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeONHNfZ.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeONHNfZ.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4rB9fVs.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4rB9fVs.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4rB9fVs.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4rB9fVs.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4rB9fVs.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3qK866_v.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4rB9fVs.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3qK866_v.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-JQD-qV.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-JQD-qV.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-JQD-qV.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-JQD-qV.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-JQD-qV.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-JQD-qV.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-JQD-qV.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-JQD-qV.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C-JQD-qV.js",
      "chunk-Cs6l4tSd.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE-5syY2.js",
      "chunk-Ce4c6-x_.js"
    ],
    "route": "/the-complete-visitor-guide-to-rila-monastery"
  },
  {
    "renderMode": 2,
    "route": "/not-yet-but-soon"
  },
  {
    "renderMode": 2,
    "route": "/omaya-travel-license"
  },
  {
    "renderMode": 2,
    "route": "/privacy-policy"
  },
  {
    "renderMode": 2,
    "route": "/cookie-policy"
  },
  {
    "renderMode": 2,
    "route": "/termsconditions"
  },
  {
    "renderMode": 0,
    "route": "/standarten-formulyar"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-oM0jm2oO.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'e5968e870d020d392836ebd00e12ec4616cbd604e18de15b771bb04bb6f1e885', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'fbf7548f73cf9937251aa72a33a0e1f2f959dfbc714ff59b6f6176b13ffabd6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: '2483085831cd64880b987926eaf1baf5655633ea478a3ca15f93cc83bb4ab970', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '8b8d02bc671b54938023ffbaeeb25b923bcae01560976847c797b8865a5e0701', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: 'ff895b3dc4b9d6c1e18158005e812d9bec4ecf8a4daa3fa763c40792cb3753f0', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '65e02c5f02deade020de19ce83fb1db7c62efb9f9ec3c5703ee4194dc37d5791', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '749369c2f2baf7b848133b4da7cbd639af54c0438ef707b9ff98033f598d7e8b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '0a2345a8b25415897954c586ec650f8697ab4dafa4f53c94b8343c5d1ceb1dea', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: 'c6a2a794a883f6960fb77a80afb8b6c7e773596a74f786acc2a92432a5398899', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75942, hash: 'd64c04d86bf3b06e305540620343e54d0d1a1d7495695964ac27797f853e8e4a', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '5c126f73d8118ea1b370b639832cc32076b101264da7994f332eb5a43d289b24', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '2ccc73da136295e19cc750563b249d9e9cf9f59ec38b40c7062928efceb5b133', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: 'f34f00c2882f3c27cf02e70f28f023799b7a1ac69b3b44ab3299958180d85efe', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '6192e94faa3784f19637c5ed3ef7737e018aa132dfeedbf71829599c9bcdad53', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114732, hash: 'ae0094f7097cde423e678dade29d702f5818a4624381749aee5fa38d5ab9317c', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108208, hash: '300ea9de1b47d70788c1d081d8ba79057be7459a5390d3606a5ebb26c88a2a8b', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118061, hash: 'e3412a07175998b2d66f4e6f363325a5367f7aaba376140cce1e217802fb53d4', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118300, hash: '5c300ee94bc2d8c07d3e3d4711febd841567be7b7f9ae6700e4b93484062988e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '212217268ea907fa49ee9bdd9f12a893cc12a13e694ce68e600010130c7a78fc', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: '9235bf7bfa345692269fbead0209f276af2df29542d90b05036f28d15664df09', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: 'a3bed1ef8e48e1e096eefd3ecb0b92faae5d575d18b49250309f57ec5c9de726', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '6a34916771dd3685df07a4b120b10775e3aaade5dae6886b234517bc365182ad', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: '17701d2666c8f650fa1d5b99e245955b7ea1e55eaa05ccae3abbad7b5822ab45', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '59493dac7fe36e06d11a74fb5c93292beb4e0f9d05ea4129b814d4dca0f5a11c', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '3e45924866cbe15daebdebc8e53f2a8ee826a79542c7c0c1c4acd06e9da43891', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: 'ab52486d7785c6b6b8519cf1c76456fa59f8bd07dd009d56927a546274dcad15', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: 'c1e11e1a5d625a85f08cc8e4bb34c97fa1ee28c50549217f25e0b1a9cb0c284b', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '41454309cd029ef2a26a4c0d989571d6b6871b3e65fa4e81ffd4e090680472ea', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '2e79ad9da34c2029e5dffd2da0a2bb7e7cd728d18717564b9bda4ae44d12b20c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: 'ce69de8aff9f96ea2786b0dd331f47befe88c6cd953e7130012894154c572817', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118107, hash: '4330271bbf5e470e5b4632f4f4eb852fea94300260a0bbc9efa3e412de75ac30', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115251, hash: 'ac40ca7517076eb306d5402b0e37547fc533830058d436b7684153e90c01e7be', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108909, hash: 'af5e39f33ee9d70a6b2dbf75aa53286c97d4b895dfb762cfeda46e54c461742b', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87931, hash: 'e84126732a13e80439522a5d2dc0a2fccc8361fd0a46411ff75c7e5868ebe29f', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96836, hash: '997233e7b5f87b783aefea1f74af816080da57ffdbb135708ca10768131baff9', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99596, hash: '20cc348c68c935ebb6d7340a3d9a0d33c5abfe4a9e744cc37b833018fd5cb7e8', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104413, hash: 'ad00d4d9e19cf3e3cf000abdd0ca90536b254a6de87326030d87ac533c391523', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: '21682f13d5a94be90917be0ce3f3f240d64aa620f980e437cd731d83e98d9684', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79724, hash: '1fc5646dc2b39535f7495a63ab82b8dbdb3fbf0e837078bc68df1ba4e6e18678', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80172, hash: 'e2fac9a205f7c72320a67203eeff61d229a24c4d1218a2732331acd1c528319e', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81295, hash: '98fd326cf762572d1695c35abaf870e59bb2ff93e2683c2a3effaaa252f77a21', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: 'c365443c9e77cc3d5e896e01e010234d781feaac5d13681d9e4b89966594569c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67014, hash: '1f4e8cc7a006b12c140c321393c9186d3f7df87a29a48ba1fdb7023132107631', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88793, hash: '7c45dfc4f3af245cfaa463a61ba24987de9ef42393d1ff9b81d33ec619e57541', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66574, hash: 'b249c2903664ca530e68e6d3f4720d1e55c484916cab082b957a3fa763cd03ba', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107109, hash: '6298adfeabfa2ed874992fa8b6ae21f137b660e51d6c8db2857b6d021a3733b6', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
