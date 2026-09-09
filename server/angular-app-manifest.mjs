
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
    "status": 404,
    "preload": [
      "chunk-BLMtb5wM.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-N1mfUASO.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-N1mfUASO.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdW5Ahz3.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bc9V9FBP.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPQ1b0BK.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CqZZzl5f.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRjKyFl9.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyatoUKn.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoaZOz9c.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLUJUCwV.js",
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
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DF0SiT76.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DF0SiT76.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
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
      "chunk-DIE0-hN6.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23699, hash: '249cb52b6cc2ef657aca95723cec20151e517bdacac329f220cc3de291ea53e2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22724, hash: 'a8d5aac404439e637f1f40ccd376ed933f294403b0fe6f10e63147253f64865d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82333, hash: 'd768e018011631a75a21cbd730b9d791661e1f5ccca625e825d1110b3549f7f1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 77594, hash: 'ac8719a7f3dc11e6a58332052616a845546273edf42971f4dd77462010735d3f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80294, hash: '0bdb0609ddd933d35134a71818eb9b2e7f47d95151512eaf4db9331f34a8afe1', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 83025, hash: 'e7a71af51c8a1d9235adc2710724cf835c6165faeb49398b6fdd0385f1ebd164', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103533, hash: '9819b763903ebe58b892cf7c9564f5b76b1987ca9c46747d66b40c803bf0cb44', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82834, hash: '2af258828bef613a64bafcd2d81d8af5bb887e48145c05afab93bc5515eb4b2a', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69142, hash: '96907ad28912cce2c86fa59767af84070ed0e700e6a17edd07d2de1ac3503d9a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83033, hash: '8aa57d1726d96bca7d8e1a0db33331c852d461670bf29caa4943bb30c3e816c1', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76293, hash: '17ad2987a26f3c839ac50164d48458d072b8293400f26d338582c568601a3c94', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 74873, hash: '6b4cc15a10121315e539011a06d027599a485a87a631cea87425089a1766a57b', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76538, hash: '7bb4eb32b1992ba31fb828451aa778c67f40436c68c1d06d24446371b00271fb', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 68884, hash: '124b177d4e9c590bfaee56a65523e7f998973ab8d15ee55e1413de92f582d3d4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107626, hash: '6cfa1b7a32df9befeb7f2c26bf5da76ba2b0fe0e720fde1270191fbb8d1d5c36', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117856, hash: '0aa2cc3ba8db2795f3aa684755c0798064abdbd902fcd2ea3b2c7ea38cb596d6', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117929, hash: 'aa63872c90f9e74f3e4385926a0fc261d236ddaf167d9c281b91eb11c43079b6', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117788, hash: '27571315931d54eb69e4873b9df5de5e66d27e978984d013fbc4ec309087fbc0', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78439, hash: '3bde6e964d311caf1bc5f6ce011ac8fd38a955365a3ba787d115a48797fa75d9', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75790, hash: '52e511be121190f8865172b2dacc8e24d052d976610251cbf5ab6cb34b134de8', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84176, hash: '3b330c388bd6d431001129f812a65ec4f44b44ef3246aad152067966581f8af8', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88006, hash: '0cae6850c6312be3fa552f32e96a166bba6c379e4596ec0ac232ed4a4e2f9d6b', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87785, hash: 'ac0873ec9ea84668c7ae71f7d10e57cf09fa5355451a00275e4ac33776b72c8e', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 104601, hash: '677bac9f8a44d35dbb8fef6603949b277ee3786ee9ee9d4d6a100296abf290d1', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 94419, hash: 'd1a255fbab7411fbeb4d15c1eabcaa60950be03e16908c6198c32d7c224aa4eb', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 89011, hash: '7ea6e98fb829a01f6dda5d0bba1cf6d48e52771b1450f3898fe5857ebc56ed44', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 85935, hash: 'a5a89b9c8c9fb3acf27cc78729df1d663f659b6e7fa27404bdca6a6e36635858', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 85712, hash: 'f1fdc7f6991684e06c4352d3607050c64fdbcebdcfc99b2be52034eeca10dd98', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72497, hash: 'b07e7b51e83ac841ae58e54ef19b14ce4f898ea7ceeebbb97513755be5ebc629', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 82969, hash: '914af18d2502c6f4850819d9b20ae8897120f9a05cc4e419077035dfe73ffee8', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84409, hash: 'c3bafa1f73f8a509dd68f2e8d662fb81ea4ee35bd5b04351d575ede8bd924914', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98487, hash: '8b5ecf2b2aae1ab5ee965b78f968dac4e9bf612b650292a36752bea723c6cd3f', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 90722, hash: 'a52d294f1753c0cb1cb7b516f907c31a74e7a925a351d29d822b33f3989cddc8', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114073, hash: '14616b4555341145728dc13b0e966fc9b6829529f271a5a3eda93f617b5f833e', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108316, hash: '61a599a40c2f815a4bb1981ed2302834058c215ad5902807a2c60dcaa8af9552', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87892, hash: 'bb120747d9c3ee5f0a40e087fc40951a2863a9a4ac00705b83cdf27589cd4245', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 86719, hash: '731372d3fefd506349e0d5a25da65e95961f583e9fc65bb58453e43f6afadf3e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99156, hash: '17de3f8da3e099b328399bc2cec18c264e09acbf5280bbb448c50e8b01ca517c', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 103987, hash: '6b3030f7f10d7cff0c468733941d320044523f79c6e8a7e4e1abe75eec4ec573', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67187, hash: 'd9dfc6bbc81f6cd4dbdd7aa4d3679f91cd3dc53c2754e3b27e945732f06c04bc', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69221, hash: 'dda4c4a79a4516e898815dc6d87462cd83f3ae182bbc0e28bb225e7a30792ba4', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 90393, hash: '6217e754f37aa3b58ea288366d99e96406b970660a83250cb87b7aa5b8312d56', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72072, hash: '72ff3727c0f306c8e99e37cda1d2728714f6dc75dc17250c69da24ed53b49293', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106862, hash: 'a43d676d59b9d22ce35b5d4e0f76aed477e1a6bf5696f4371baf557e13270141', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113700, hash: '88650de3bbdf180fd635bbeaf1e9c714af67fb583699028e7a01a3748fc03c0b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-7YCQRSU6.css': {size: 6523, hash: 'FeML6i+pYaw', text: () => import('./assets-chunks/styles-7YCQRSU6_css.mjs').then(m => m.default)}
  },
};
