
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
    'index.html': {size: 103533, hash: '9819b763903ebe58b892cf7c9564f5b76b1987ca9c46747d66b40c803bf0cb44', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82834, hash: '2af258828bef613a64bafcd2d81d8af5bb887e48145c05afab93bc5515eb4b2a', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69142, hash: '96907ad28912cce2c86fa59767af84070ed0e700e6a17edd07d2de1ac3503d9a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83033, hash: '8aa57d1726d96bca7d8e1a0db33331c852d461670bf29caa4943bb30c3e816c1', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82333, hash: 'd768e018011631a75a21cbd730b9d791661e1f5ccca625e825d1110b3549f7f1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 77594, hash: 'ac8719a7f3dc11e6a58332052616a845546273edf42971f4dd77462010735d3f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80294, hash: '0bdb0609ddd933d35134a71818eb9b2e7f47d95151512eaf4db9331f34a8afe1', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 83025, hash: 'e7a71af51c8a1d9235adc2710724cf835c6165faeb49398b6fdd0385f1ebd164', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76293, hash: '17ad2987a26f3c839ac50164d48458d072b8293400f26d338582c568601a3c94', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 74873, hash: '6b4cc15a10121315e539011a06d027599a485a87a631cea87425089a1766a57b', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76538, hash: '7bb4eb32b1992ba31fb828451aa778c67f40436c68c1d06d24446371b00271fb', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 68884, hash: '124b177d4e9c590bfaee56a65523e7f998973ab8d15ee55e1413de92f582d3d4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107626, hash: '348d79bb0ef3334674e030f5a849c1942974e8753a30170e67e15ecfd5afe4e9', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117856, hash: 'b9dcd5df0b42a18155d9ffc9b1f494c17a5eda677867c3ac456ac8f0503c20c1', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117929, hash: '4703d9dcbacb44bd6b16269d2a279faabdf6aa8d5bdd43e52c2548fde735e437', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117788, hash: 'dc9a86ab4db40c456ce9f18a9ec40f5eb0ef0fd6843f1d82eb7814b75734a088', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78439, hash: '3bde6e964d311caf1bc5f6ce011ac8fd38a955365a3ba787d115a48797fa75d9', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75790, hash: '52e511be121190f8865172b2dacc8e24d052d976610251cbf5ab6cb34b134de8', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84176, hash: '3b330c388bd6d431001129f812a65ec4f44b44ef3246aad152067966581f8af8', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 89011, hash: '763056620c2c84484b23a4f903519b18853ee90ab045752b4e8a446fb6dce47f', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 85935, hash: '07d888817e858faf71ee55f6845bd0b30df91a63f25e786bd4e978b8ab7eb69a', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 85712, hash: '8cb29ce6c6250c6cfa913c59c991c53d25590886bef12a3ad95dad9b8526dc89', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72497, hash: 'f2d4c0f4987bf530954102f910362a436dca54ea1c3e89a5f5d16f3396cbc931', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88006, hash: '59a11fcf4e261f0297b3f9d730042188b1dc9070bc388706475b8f1ec76e9f73', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87785, hash: '22065039393443d4d131236f67ac538ab27767ff60557967ce0ea33253142ec0', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 104601, hash: 'a26e6bfbcefd61d5b0d7624463db0f160b4cd980216193420776a7e29b324551', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 94419, hash: '243b1420ea4d02be12e3a7640d6e7ff055b361935c42dc817175ab6458257cfa', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114073, hash: '14616b4555341145728dc13b0e966fc9b6829529f271a5a3eda93f617b5f833e', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108316, hash: '61a599a40c2f815a4bb1981ed2302834058c215ad5902807a2c60dcaa8af9552', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87892, hash: 'bb120747d9c3ee5f0a40e087fc40951a2863a9a4ac00705b83cdf27589cd4245', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 86719, hash: '731372d3fefd506349e0d5a25da65e95961f583e9fc65bb58453e43f6afadf3e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 82969, hash: 'ad0eb83c3dab5388d3234b988b41a529362d321efee4b47de127d725e3c97bb3', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84409, hash: 'abca5763b9fe43ea3e6ed5ca73124d146340569b3667619d9f3a27115d519b92', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98487, hash: '67d99ba69ec2357533b1bf6a59e95a2efc0d14c4c5f32f9ef8bdc92f4d92e4d1', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 90722, hash: 'cc92ffde3288d1e8b0e5d10af067de872f94312b3891c513c69f2ed0b2169358', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99156, hash: 'c5b1b0a01ae7ab34e87c2fad65c573b5f0a8a5b1480cbe6dadd805fdc2779097', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 103985, hash: 'fa177480282d8b9eda8e3fcbe532888775647e5e0523f97c948461d079ab830b', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67187, hash: 'd9dfc6bbc81f6cd4dbdd7aa4d3679f91cd3dc53c2754e3b27e945732f06c04bc', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69199, hash: '716393df5724568bb553a11810b5a148aa9d37b62f7119731e23a018046c3e7d', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 90391, hash: '9c78c7cb59e812b6b4dc4208b7b946baf375adb2f010c3eb0c7f8950fc9c12a7', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72070, hash: 'f74ee440d056e243359ed12535b730615db3b704c1a49d42b35ccb3cac69fddf', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106841, hash: '6c9df759bd590f0fc50c67833bfe32b9b1c596baed1f014406746cd31bdfb8ac', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113669, hash: 'd76882eb7a0e91deac5c2d04cb19b27c6655f6a06f2f8314bb0db14d40913ea2', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-7YCQRSU6.css': {size: 6523, hash: 'FeML6i+pYaw', text: () => import('./assets-chunks/styles-7YCQRSU6_css.mjs').then(m => m.default)}
  },
};
