
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
    "status": 404,
    "preload": [
      "chunk-C2z6TuaV.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-RuWdcqOm.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-RuWdcqOm.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFi5povu.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAr8UXQq.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CrQiWPLy.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH9gmLqM.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAOtfoHQ.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--1b4D4RL.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CHLrgiX2.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjPP1kyq.js",
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
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzkIGWEC.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzkIGWEC.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzkIGWEC.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzkIGWEC.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzkIGWEC.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzkIGWEC.js"
    ],
    "route": "/private-tour-planning"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzkIGWEC.js"
    ],
    "route": "/september-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ExinVz30.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzkIGWEC.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ExinVz30.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZUJZKMR.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZUJZKMR.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZUJZKMR.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZUJZKMR.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZUJZKMR.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZUJZKMR.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZUJZKMR.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZUJZKMR.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Crg9e_Za.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Crg9e_Za.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Crg9e_Za.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Crg9e_Za.js",
      "chunk-LRKqUKK_.js"
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
    "status": 404,
    "preload": [
      "chunk-Djl6BSTu.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24172, hash: 'e3ef8e774ac98accb29e45fb6efc80832dc9e867a52853d6c3412851d44485d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23199, hash: '9635cb5315ab1218dd1c5a6128ff6bd9880f8c22c3b2eb7e395110aa00214bb2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73603, hash: 'e1d204d9d91ba5b34254b1768a7d53ba4588c182fca946355dd357a6d0a43c49', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 71492, hash: '092a14dd571b47bab46005d9c28184fc86bd3aa04fbb3a1d5f3efbf1fcd04dce', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 73772, hash: 'e2ee1a2299f7b6f90e553a2b02a21ac2dc5b83fbae0012ad4a357bae018b2950', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 65996, hash: '95338878574f5e84cc7d32f18b2d61a8dae536ff827609e67e9273dcfcc9fee8', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100615, hash: '9447c45dfc0c23213432c8d70e54f0cf05eb4d51310de230dab4f685c43e9262', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 75063, hash: '9376e5e190ff655b1c4d9f86ddc07685a1744bde2e881a5e3b9f088fd0566933', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 66495, hash: '10631cdc0645199bcad6386b6cdca6a143b1701444d680d77309c0cf0b9f0ef6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 80273, hash: '431e5dc2faf7066d24c2147f943e81dfa71691e6527233e3e8e772032e0751d3', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 79458, hash: 'cca3980dd74aa8ac065b25b013a93017153fac179d4a413e6ff85ff232bc71f6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 62705, hash: '07f0d3e4a3d8c4d9e776d69a0a86e4f82504ff79a711da3584759a837c01e209', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 62719, hash: '0942fc5cae5f6a037a36a8b6aba96ef51e7daf4e25eb186efe8af0421a3288b6', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 62720, hash: '5626a69e4ee76ca9976175e865cd4fb21bc62e8e202de87d6af6f966e184dc3e', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 81480, hash: 'db065ad1e054b89423c29eb3e85c75f7ca095352252590db01e9f4226222ff04', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 95944, hash: '2cbf431bef82aba719b94b8a0b373271e9c468ebfdf13ff98332a023df759aad', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 97001, hash: '60347618d479fb63a5aadff9f088f7f932d7fee28fb63d034327994c5389e434', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 96649, hash: '533600eca0495c1ccd5800ee76b7e7faa9060092303a1f1158bd9523771899f0', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 98943, hash: '86c65e087720549597d59022cff442386b7bc7710f6ac5a1faaf9a58e02e2270', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 98209, hash: '1bd2afca8b3b44241dd516f5d7f55e86753d50b05043395d8622f924deab169f', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 87543, hash: 'bcacba5fb860ecf5a03a6772cd3e480a86da0cd3c0d19fdb473ae0d1205d6b3b', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 92815, hash: '2ebedeead3a719575f82786768edfe3f181ae5bc60e4bf79108654fd74d83c13', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 96835, hash: 'b418f314369f3bdc7b326cabd9413a7ed79803e179b93517c6903393f320deac', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85136, hash: 'abc7c6bb21411033145795e934ef72cf1adfdaa9f21a47d5083b14d7db39beac', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82352, hash: 'da74d8454991f6b9380411a68b56356b4cad24a6ca944e540f4e116195a579d8', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82203, hash: '525d7bb6c460a2dffa7d43a18c220e23317b8920896efb3e36887f473d1fc7ee', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'private-tour-planning/index.html': {size: 86408, hash: 'a918cfc71089a1d6d42b1e0499c38cb2c8cfef599b5c978ee63b7bd71566fde5', text: () => import('./assets-chunks/private-tour-planning_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 98994, hash: '583896a91c220c5e2feaab4fbb8ef9eacf44e6fa0a081b4bf8625cb5c108110b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 98985, hash: '79609572ac2e7162654508e52b2883a43c8a176862808caf56a15e2af5b04a66', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 97114, hash: 'a85de6b3c475d42599c2428c5e4cd12b079350c692fbb50811e3adcc139eb728', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 97161, hash: '07428d511edbdf6f599684e49edf0d8a3a119cdfc6753a4bf139e15a187d8509', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 62722, hash: '678a5295bdd032be65dc803e69a18c71792f99aa4a62d7b51649d1b3ca34c6b8', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 62719, hash: 'a82d831d85f922f9381569c53c61a23b681bc6cb7cc0ad8da5f06e73b352b3bc', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 93545, hash: '1b4d2468e1e2b940914060fbaaf4c026e033883a56411f66b10e2f92f5e60d36', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 86410, hash: '00c87393b8e702443d55dd540925447fdb11a566e7a8107b56f0b10c22074d1a', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64631, hash: '08d55e29541a9067c640c3bb9fda48d3242645b1f268ff7ce27c6dc0f7b6bc96', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 66467, hash: '5bbdc5c368984c5fc29b339c1051bdf3b2c48e589d95f5b27cf39d39b3309df4', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 75827, hash: '393e240fe17dac4efc2cf8ccae1958801563688e546d7a7384f7b006081f6b8d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73182, hash: '4de744e2226b09e94e9f3951c3972f53cc099d0f0034d5e6a25151d7223bcbf1', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'september-2027/index.html': {size: 87903, hash: 'cd629e230dcaf70d52e547a0a51a49b9c220b0f08f0d6e5bb2e94b98e48874fd', text: () => import('./assets-chunks/september-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 69851, hash: 'dfb4a599295e1dfda51ede5cc846c263974a5756c24b09cd77b1c83d6b49ffab', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 87903, hash: 'cd629e230dcaf70d52e547a0a51a49b9c220b0f08f0d6e5bb2e94b98e48874fd', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69515, hash: '6f30d91c567a2fb4c394b6fe116ccb9b618bb9bac4833e5cb794908cda11b983', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-RGJZKMT3.css': {size: 6006, hash: 'XLETGTWqs54', text: () => import('./assets-chunks/styles-RGJZKMT3_css.mjs').then(m => m.default)}
  },
};
