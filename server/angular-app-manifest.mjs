
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
      "chunk-DiQTFUZl.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DgUe2jMM.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DgUe2jMM.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-srvdJOSM.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWfj_Knl.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAiJ140G.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ybkR-MXB.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNYRa_An.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgwBCtC2.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Jla06Hg3.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIorE-Ek.js",
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
      "chunk-CNbnUqbC.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNbnUqbC.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNbnUqbC.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNbnUqbC.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNbnUqbC.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaW7bE44.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaW7bE44.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaW7bE44.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaW7bE44.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaW7bE44.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cp0V4CoL.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaW7bE44.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cp0V4CoL.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH_EoRU1.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH_EoRU1.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH_EoRU1.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH_EoRU1.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH_EoRU1.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH_EoRU1.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH_EoRU1.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH_EoRU1.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CH_EoRU1.js",
      "chunk-DEejy0wI.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-kkfF3AHY.js",
      "chunk-B-nU0V5j.js"
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
    'index.csr.html': {size: 16185, hash: '938d3dee7ed03f2481ed1c6eb8bd668b53ae810ebd51c9bd345676ffde5def42', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '963d0ee8298ccbd91a399adb71201c7bffd0677b948f290fc53e29d52cdd8026', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105768, hash: '7858bf7ecf4dc1fbbc23b49d6cad45f5f2f9ba4234b7cf6135ccc0d4f54b3976', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85884, hash: 'ba41501d8a645e790d05cdac94c62fedac438b535b631ecb52a17e8c8c9121d7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63838, hash: '9eeed764d3f7a0d31d6bd42ec200fd12e30b0bba3024c0c7fec3c4984651b913', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77876, hash: '0fa64995eb98c3665436448a32bafa1676ea9310d7804eed040093da1557a4ac', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73429, hash: '1864a069ec8308219a43d12a565a32b3d64df8662caf52e28160fa1f223d8ea6', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72943, hash: 'baa4706a7b34f5f64b8d7c03f75cd2489cdd1332701b9a9350cac35a6b59ac6e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71053, hash: '50c899aee4e25734d15c61653803c5e10ee2ff5ea44ba2603a8fe92f41f45291', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63808, hash: '534755ef89bee4c655868acd6761a6aa3c668094ebaf0ff2b2c4e23fd4282586', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76917, hash: '25ba9b844285f9024853f2a161b1a24f81d4113c2b09c9a3aa837861bbe45b8a', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74462, hash: 'c943689d54b9267de6ac901e3e8214f3b927c858eddba236c74d339f62c4a3d9', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75937, hash: '3e2bee51ffe8b869c601f12fd0511553695c1d0f8a0c0fda94550e536624d290', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79744, hash: '0781becf4b3bafc7265a46b5d9f6dae37394f1cfea7f12d0fe1ad74aa132478d', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73034, hash: '674729d5f7f95e6282993c3db2989aa91bb07fd957be7715554592f8b9c84c35', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70385, hash: '62be6f4e7c6a4f9de058c234271defb6da73b181f5a50672c7d071d1b075d5f7', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78771, hash: 'a4e128692fc055ff63174f30e63f2f1387d8afd93886906edf97c78c34a8699a', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108173, hash: '92e390dd2ff2b03ad006f3ad2c0356969c3199ea3827b2b759176140246dc32b', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118026, hash: '55348f97ad95003ef6e1f5f72f9bc6432719fa2d953eab53f99b360eac97b812', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118265, hash: 'fd97699b32c3fddb7c30bbde7f40384c3be483b50136d951dc1ea733cd844cc7', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118071, hash: '8c7e29ecdda6a81dad948401a2eb5c3bbeaf8cde70c77fc339a5216f330eeaa2', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88001, hash: 'c336f25402ce9c3007f161a0823263c3578e9ffe359e890f102d242178bc1a3f', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87225, hash: '27710edf83ece7d8ca4936fd87b47e80f4ec81ea2551894e7492a059b4e6211b', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106082, hash: '87d9b15581774de661bd7cfbe737349dc927ed7a48eaeb8d2bf89a644512ccc8', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96803, hash: 'c67b75799db9d8af937504c1327884b5d18ebca485a1c686c60ed47de205b555', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87209, hash: '234ae24a4348882bf53fee681db58628db4e976d63cb6e8fc14d243f96b01b8c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84101, hash: '6dfb9fc4b0bcea779677e048674bffaf256c1f2e908568d942bfd93d66210aa8', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83878, hash: '23d4179db3245592aa7f36a2a5a2c49be7bd21465e83e01ea57a9f2360c80db5', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66988, hash: '1252179eca3f028234d9c904e98293fb4c6b5addba6b9bc39672e8155f2ffbc6', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80192, hash: '49d9b67f9ad5ecbf2ba0393ed7edcac0e9bdcb4ece4691e9f54784104257003a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81340, hash: '133bf1fea9e034320adbfe410b2a703ed5caf628fc41f09f038e8f137cbdd877', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96982, hash: '4ab33ecc4d1a31f65f185bf5b3acbcc8ef2b3500ae1cffc7c1e36408c74b7ac0', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89144, hash: '1f3eb9f167dfe765d1bf7b8ea15dc061797d13240e57b1db914ae9a345fdd26a', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115215, hash: '3260f7e49c1a01151a1bff66fa77bfecbb0c6cb14e5f3754c4cf5ab3ce6d6b6e', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108873, hash: '0b4feffb65e5453a5249ffc51f6f155846a801cc31310daace4ffd78b050a50c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87941, hash: '7d6cc398177f5c1bdd3f451d6945cf92c2b918dfb56584c4889d11cb3d10f645', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99977, hash: '7fe49ee5579a9e025fc8a628db5411b5c743e985072bb38f56bd3608b4f07f82', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99570, hash: '7baae7727262d6355a5f7e5655daa6148f5f783b8229f4121946ccc05cedb591', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104378, hash: '4ca5f6089577007c5acef203d184d63c4c4d56eb105c3a43734bc6c64a1d95f9', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64638, hash: '3782782c254a3de262dd78264062d497759e55ebd6f2152d17752f4a4a0cbe3c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63822, hash: 'e2cd4beeabf410b8d1d1fdeb4229c9ac521acd9bff104f0bfd5050f28cc43b44', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88765, hash: 'c6beb95c8a417227576494c43b131ef1e452d46bca4c25e7d73020387bb7a2ba', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66558, hash: 'afcd6f9ad0edd6b3514b68f3867230440f1846c8d5a917da1083ed3867f6c932', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107104, hash: '99ce42675637759b0d02edf5721b3de96b911249ff094780849173551a8c4029', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114749, hash: '27cfd6cefab07eba64aa80a05121b0030b191ce09eb82e205ef9f2b56e40d4cb', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-A347SVMG.css': {size: 14125, hash: 'eSV2injb/Ms', text: () => import('./assets-chunks/styles-A347SVMG_css.mjs').then(m => m.default)}
  },
};
