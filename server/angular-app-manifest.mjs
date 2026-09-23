
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
      "chunk-Po5hxswU.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BeB1VXhY.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeB1VXhY.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTEDRZAG.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iOhCYPty.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-q8RP9c04.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuMouCSB.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXl5KUOy.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2mxPSc4.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A78AQC-P.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBw0jj3N.js",
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
      "chunk-BiMtqNUr.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BiMtqNUr.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BiMtqNUr.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BiMtqNUr.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BiMtqNUr.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9MjmKab.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9MjmKab.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9MjmKab.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9MjmKab.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9MjmKab.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6FDeKclO.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9MjmKab.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6FDeKclO.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-19511QE4.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-19511QE4.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-19511QE4.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-19511QE4.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-19511QE4.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-19511QE4.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-19511QE4.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-19511QE4.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-19511QE4.js",
      "chunk-DZjIhET8.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGgBChVB.js",
      "chunk-BCTeY6yL.js"
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
    'index.csr.html': {size: 16193, hash: '0a428d1f0b5d0fbdee57b9f007dd908fe1d503a158244ccd3650e32349507035', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'abbb01e895c167312ed7654a15f609686348254ceef5b47c2cc24f505c76593e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '3acd6ac556d653df5de0bc62d74d2a7b17018c1d2cd2b92182827760afc830d6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '0476be3fe2a508cffb89d1fb34fdf99859aa75835811852e2fc8a7faef10dae8', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: 'e27c357659a9b12123230941eeb884978fe26126dd5870512c6fb29a0db73fad', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75969, hash: '4b18a3a5b97827b2c062e79000ebae06af51db3d2117524484bce08c194cf72f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: 'c5a0b416b14f3774719f680589e4a258c4bd26d8c6bf7269c46b4beb07a7cb23', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: 'e21e65bec27d77bb88e3ab33bfb80cedad72011a3190de42ad84dd34235a304d', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '9a071d4f01e94cc1cb5fbc560a642ad4006e92793cd564f5a586bdd86e9b74e2', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '4fe28ef6ae0b15278798adcab816d470fd9ab1ff792bd139938612656f29bfe7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: '5760f02359e52738188b9c82f8ec61177548316c914afb887d328c53e3bf6e33', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: 'd7179d7e2c7b687421f6d9a4301d07e6e9ddf0ec6d81592c7dd5cd9889071fbb', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '4aee60144b5e12e840d6b19fe9ba507371d768deba9ca9911763baa679414865', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '22df2a85962d1bace6a6db04b69f591b5650f8390792494f8380db2a41513b92', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '8249711f6e906bbdc6a4809aa46174426bd0fb965e3046e83a54607adba9e45f', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: 'c1d182229a8c783ec83a084acf91474e7a31b86755791fb6b5dcc0c298575dda', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: '868130859ba40b49376fb8e2e98eb01ab12af523f9bb104eb7229c4402267636', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '319ac730efaf5615ea45e47733957d57ec6df7390d4ee64694d4b35ddda7d330', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114732, hash: 'f913697bd0f5fad0226e8346500eec3a520d1b68f7575bffdc77dfef9a3c6f0e', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108208, hash: '27da4891d3d44c12c915c0bf4ca8bfccd8e8ef0bd880a409f5305db229a6438d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118061, hash: '2fe85dbe1965794d1382433ca400a7ec385b7131c270b9afe50adc0d97ef8923', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118300, hash: 'd8f5f9b5bae9f204c8010fea367da2d52dfdc541049df73fdabb2f71083319e0', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: '99f2f6a6097fdca46e33413c4ff6843c9b9f11f7f77615dac55516393bd497a8', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: 'b472891be236e91388ef5f90a4997d2d7aa3573e3e58382601f33dabb47e4023', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: 'c0eff8811b172fd21c3a5fc5f0a387f2c3bc590ecbda46610ec0517bcd363bf6', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: 'c2e0fa4749233488deecff089555a91234239076fac0e61a575f074cc395da66', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '7fd5ae8031b57f2508d7ab390d671f56366a0c751e93a65db12b65c25cd65d3b', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '4b25c7d361582c076534e38803e49da97d034b216fc431115e1c585394934101', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '333e748fadc16262513de580b665b602d5290e07293dffb264ac87c3a54f7c8f', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '875cc566bd76056428d13a5c363d252eeafd3ec6963b039003169ff6ca8b634f', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118106, hash: '012fe52f21b3d96ebb3713e4ae8c7bab891242f8c341189535fcd20953e3edbb', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115250, hash: '4d589f4fca482479ad2aa3502bba964879f84f7fe747136bb8e6cd188c220bea', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108908, hash: 'edacaaeddacd595ba7613ea785792832749d7fd3339f858c0645ee086dc41680', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87931, hash: '697ddb3c587d3174696b573d1445ddfdaffd180201eccbc0e4bcaaa077c6a6d1', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96811, hash: 'ca509b8f3696883f02b96f4814ebd9cc63ee57f0961021d91799696e4b188a25', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99578, hash: '14fcb77a83895efe0a80a4cd7a5cf0116036b2a80d8313960ba7bb18bbb0da08', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104386, hash: 'a09bd83228cade96ebac38ee3cd06cb0d048dbca98911089f2bd038ade50e98a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64646, hash: '0f292c73f359eb5a53ebd942db8da4b845aabeca33d2d605dcc36c6779779f80', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79778, hash: '82c1c88081b9d1fd5e0323b7a8bcc4caa3ec5fc7a0edbbb4bb95cbee57efbafb', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80225, hash: '3f81334f2c1d29d4a31ea3ccb98813e52ed78a22a21cd4439ec4d887cd37c84f', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81374, hash: 'ffbb29bdc919914cd23ea9974cd70f5b979bcc53fc87bedda2e3cd4faedc0e20', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: '94c362763f0baf0e1b57b397bed319d151a2bd803ed7a76c271449a79836c315', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66996, hash: 'e3aa56de13f623eda945a4cc34242b5f9dbb4ee5551b44eed233fbb78cd665ee', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88793, hash: '1e00a3e6a8c48ac7d7fc0c1f5013823e05e6068939516fe7d8d7dc23fb061ad4', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: 'f3292a07bef605ae30b41d659f9dad0404f33bbe9cdebfa2ce4ccb9f9e37f374', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107108, hash: 'a14ff9806f37f0864595ffc8c723e8ed017b005af0e28204a5383460f11826fa', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
