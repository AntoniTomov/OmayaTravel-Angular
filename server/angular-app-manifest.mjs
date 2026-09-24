
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
      "chunk-t-Huvfjg.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DbM_snhM.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbM_snhM.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bcl5wsED.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E3NfGkk-.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKwqMY6Z.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiPDOBJE.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-fk99liCj.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bt6uwaz_.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKz4t0cV.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9NzZEGW.js",
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
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CndOaXNE.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CndOaXNE.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
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
    'index.csr.html': {size: 16193, hash: 'b20c6344022e90e4758e4b8dcf5848a22e0654e1b3649250808674cb8fb31ac6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '2728c63f461ff827f58e1d46e2d4aef885916cccc4883ce66dbe1b49833b6bbc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: '1a432ecd4bc24b71ca8628ce805c7419fd42b51338d935d7c5c9fa78cdbb31a0', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '854457fc1c1b0c0a7ca4f7fea60ae157f8db39093762c5ff53d3502ce9a904e4', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: 'f4dd462f94b880a67e3e202f3666c177cba27d64b1ae0854cd538c892bbcfba0', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '18b61aa40b899a022ae820e12fd4aa48a28203d51222d97f5a2b879b2ebf1470', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '0f08882c921ddc3a34d7194952e045a8e0571bb17e5d4745ec9fd5b084b0f319', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '92d0c03a2012c37ffa07dc886867f6175c7d6eb17644cd080e62866ba425ed85', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: 'b7d32db6195cd6f6863e156318c2cad176c6f8d7ac2abd8bd4398689594c93d7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: 'e3b26e29affdbee94e219ca4193d738d4f4ded15cb1b8b63047a1e670324fa72', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '8f2cfcce094debe1e8358ab2e1dcff1367209248aaef82ffa81014538bcde4e2', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '1de7c298b92497088a1a89b0560faf54e2f5ccde5b862c9e1999dc1f99956c6d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: '8440b89cc70b0f244c3c146063627bfaa5fd32efe6c24e5412a5c2c86c156dde', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75969, hash: '599df009f11aefc765191fbfe2433ee163b6d0cbfced0a9720e0f45995ce8e3f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114775, hash: '9e88356e36b8a0860d5e035f1c8fdcbc54bfe3aef8b19a9b42c8bf041346cd73', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108251, hash: '7f6ff1eb78db01c85511e028c06d0e3977ec53e2f55926d1a72b76a05fbd9372', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118104, hash: '8cfe8b46921ada15ca7a998abafcdad9b035f70b86d47e97757c1288144aba63', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118343, hash: '1d1c3fa7fe32335427ed035f1d872f2b97c599630dce164e10d0f6f552510db6', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: '04e5b8bb4c3d7809275135f091b4ccb581ace12572c3a69112ddca7c7c929528', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: 'ff8490944d40ba5ff42c27d4e2ed82fff5427231a171645456ef37d11a0697ee', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '0efa410099529d62e51df1d1620847d66d5323a128ece95e321f4d984f4d2380', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '3b08c87994a222b224eddd748398db86f03c9df3da6efabe7352010725c06f16', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '660006c31227ba769215229fd971dcca10407e7e21e3b70b181378068f82388c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: 'cc57ccc6e439fe5261ef8390937c040d3b54d6c4048535c4c2abe41f6aee2f47', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: 'f309f654b99ac7803c01ab01619bb83969221417bc6c6e766bf9907612ca8228', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '6b5ba95f97ceeb7b780636fb78780e8a2794ace9f9d3470b4811a77027744e2e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: 'e6a455a21f818ef28c855a5431df6669dc07dc018d31f5a56d7d69aba57d172c', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '3bcc68cba7b65c39455f81412ca9c21943abcc3b7fc09befb5528db6f73af5ba', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '365f7d948f3638554a8941ff732351c66e0237f9833f8592d640b6c01279b905', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '2dfcfa7b3959016bec086deeb5cc5070ce985fa10172e408ec9ef006afab0136', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79778, hash: 'd1808e6601ed552ef75341ff64b1c809ced6f7410617c405cbb0f6586b375049', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80225, hash: 'fbfccfbc881f014b2dadbea2bccdb8820e6fbf9e1f51b1b99b55611be0d9b631', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81374, hash: '43e57de73bd7abe369685300008e9a2c6d1b94bd71d94bd7b215b66acaffbedb', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96992, hash: 'e0e8b9743b404f5288a3baa23506c16ad1d04f7d6329e76dfd4daf9af006761b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117985, hash: 'da78521a4c0a97a5b881b22378db0d54302a03cf7244e520e3aecc0156f2bb3d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115293, hash: '806d9adee0300db36b5bc5e1c86b25d4ecc478c14573700a3f3e314ea025507a', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108951, hash: 'ad82889e821a4f8fdc06900d4c27f4ffa331c4548e14a9862db0f429ab84fd05', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87944, hash: '021295581a740520beb4288b2398aa620b7b8be9d3d95268643436a42bec7c27', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96845, hash: '711bab34b622f04444942dd884098a3c173d8467afe1b84b16be60fcbc647e5d', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99604, hash: '7e03d452fcaf56a6f9dac7a8a8e005edbcd8319b577715d49103ed5e4b0431e0', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104428, hash: '3a033726df745b8d6b2ae88f99d9fc71b69ad2fd8c95d62299e7eecc65e39fc7', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: '886012655a626d8d9be17d61b6769b985bec0b5042f633e393e5c0722a3b4349', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67014, hash: 'c0ab68a40f891c41721a00a8fec74b013d242df712fbc59f1b7b47f3400b4d77', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88775, hash: '93129a0cd6c25e5fac5ddb7fb3a4faf3c38692b8e38daa3981e2c7cda4cbcdfc', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66574, hash: 'f8256d7b3fa8ac2d99a461a79022a5c541861235ce6bf99127432bb1e19141fa', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107205, hash: '3a1cec1184c418e372f766296cf9d5e6c03fc3e0d07ae8cdebf8f4c7b3ecbb34', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
