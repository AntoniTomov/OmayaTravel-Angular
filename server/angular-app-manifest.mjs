
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
    'private-tours-your-trip-your-rules/describe/index.html': {size: 79458, hash: 'cca3980dd74aa8ac065b25b013a93017153fac179d4a413e6ff85ff232bc71f6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 62705, hash: '07f0d3e4a3d8c4d9e776d69a0a86e4f82504ff79a711da3584759a837c01e209', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 62719, hash: '0942fc5cae5f6a037a36a8b6aba96ef51e7daf4e25eb186efe8af0421a3288b6', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 62720, hash: '5626a69e4ee76ca9976175e865cd4fb21bc62e8e202de87d6af6f966e184dc3e', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100615, hash: '9447c45dfc0c23213432c8d70e54f0cf05eb4d51310de230dab4f685c43e9262', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 75063, hash: '9376e5e190ff655b1c4d9f86ddc07685a1744bde2e881a5e3b9f088fd0566933', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 66495, hash: '10631cdc0645199bcad6386b6cdca6a143b1701444d680d77309c0cf0b9f0ef6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 80273, hash: '431e5dc2faf7066d24c2147f943e81dfa71691e6527233e3e8e772032e0751d3', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73603, hash: 'e1d204d9d91ba5b34254b1768a7d53ba4588c182fca946355dd357a6d0a43c49', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 71492, hash: '092a14dd571b47bab46005d9c28184fc86bd3aa04fbb3a1d5f3efbf1fcd04dce', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 73772, hash: 'e2ee1a2299f7b6f90e553a2b02a21ac2dc5b83fbae0012ad4a357bae018b2950', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 65996, hash: '95338878574f5e84cc7d32f18b2d61a8dae536ff827609e67e9273dcfcc9fee8', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 81478, hash: '6e58afb28e4fad087753d4baa4fe83860f46febf3a8d5b0ed7d76d4e7aba47af', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 95946, hash: 'b74a2236cc2fae49b19d793508dc39fed6928e34f8157a5f9893dcfe952ef50c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 97003, hash: '8c89141a61323b56fa5477f74e0c99475d3e74cb75a81e460e7688d3bb90c4a3', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 96651, hash: '85153f504ed3191e468bb9f07518f717a28e5ffb1a5dc6942d6005aacd8fb592', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 98945, hash: '2eb1c80556db1fa0b7a422ffbe8c90c14142b229d5f2e38f36f81081f81fb1a9', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 98209, hash: '1bd2afca8b3b44241dd516f5d7f55e86753d50b05043395d8622f924deab169f', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 87543, hash: 'bcacba5fb860ecf5a03a6772cd3e480a86da0cd3c0d19fdb473ae0d1205d6b3b', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 92815, hash: '2ebedeead3a719575f82786768edfe3f181ae5bc60e4bf79108654fd74d83c13', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 96835, hash: 'b418f314369f3bdc7b326cabd9413a7ed79803e179b93517c6903393f320deac', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85134, hash: '871ecf0d2f22567e3ab04385c2a262bef74b661555fc1f57886950917aee6c3c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82350, hash: '09de490830de0ea8bf23e82434a0e0799a032b09c50eb8d502aa8257525882e0', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82201, hash: '33fd229f898015be591835567932aa70189a310975f6378f8990cd2835f2841c', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'private-tour-planning/index.html': {size: 86406, hash: '179393e9410a5c16cc3a263f22da886f07fcdef8133f43598accd499df08e19d', text: () => import('./assets-chunks/private-tour-planning_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 98996, hash: 'bc849b1d319f6fe985a3e94644ccd71048bff7db9c33de08044a1c056ce1e821', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 98987, hash: '07fbde7a7e1e16eff139ce619f7876af575ddf9afaf30014ff1e025e57b0bd4d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 97116, hash: '9c6a35ad99e961a4d5699ade31f04dae27517d29d811696166af21c166bb0284', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 97163, hash: '4e6d76705d3892e854560a732129363d8b17bc0bb574cbafc25b487c792d6787', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 62722, hash: '678a5295bdd032be65dc803e69a18c71792f99aa4a62d7b51649d1b3ca34c6b8', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 62719, hash: 'a82d831d85f922f9381569c53c61a23b681bc6cb7cc0ad8da5f06e73b352b3bc', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 93545, hash: '1b4d2468e1e2b940914060fbaaf4c026e033883a56411f66b10e2f92f5e60d36', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 86410, hash: '00c87393b8e702443d55dd540925447fdb11a566e7a8107b56f0b10c22074d1a', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64629, hash: '79c9b712f23565b49371b7c1f51eb84ef2af955e2c6ddcc5742692105139290a', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 66465, hash: 'e0ecb9c97cad3fadb944e571d5ac55f1a071419209d15c09445bb0f759209e23', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 75825, hash: '7583949bbe6df884bc2f9c47c5f3633cac4223ca82076b4135cbe1a1e1bb1cc1', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73180, hash: 'ba62aea633e01346c28d1da0c7c69059df25c58ce64e79c60b33438fdeaa8316', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'september-2027/index.html': {size: 87905, hash: '0793a808f46a52353385481b5591c347aa141d7b59eb5d13020a8f5836064a31', text: () => import('./assets-chunks/september-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 69853, hash: '8ad23561d3de81ac70d6dd7d35ca8447b76b0a67d0195de4c5662b01d1502281', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 87905, hash: '0793a808f46a52353385481b5591c347aa141d7b59eb5d13020a8f5836064a31', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69517, hash: 'f12d7a8c07e5c488f84f0c5d0f4061f6a18f53b28d9677250d03d468d3c581ac', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-RGJZKMT3.css': {size: 6006, hash: 'XLETGTWqs54', text: () => import('./assets-chunks/styles-RGJZKMT3_css.mjs').then(m => m.default)}
  },
};
