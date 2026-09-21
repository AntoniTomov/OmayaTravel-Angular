
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
    'our-story/index.html': {size: 73429, hash: '1864a069ec8308219a43d12a565a32b3d64df8662caf52e28160fa1f223d8ea6', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72943, hash: 'baa4706a7b34f5f64b8d7c03f75cd2489cdd1332701b9a9350cac35a6b59ac6e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71053, hash: '50c899aee4e25734d15c61653803c5e10ee2ff5ea44ba2603a8fe92f41f45291', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63808, hash: '534755ef89bee4c655868acd6761a6aa3c668094ebaf0ff2b2c4e23fd4282586', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105768, hash: '7858bf7ecf4dc1fbbc23b49d6cad45f5f2f9ba4234b7cf6135ccc0d4f54b3976', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85884, hash: 'ba41501d8a645e790d05cdac94c62fedac438b535b631ecb52a17e8c8c9121d7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63838, hash: '9eeed764d3f7a0d31d6bd42ec200fd12e30b0bba3024c0c7fec3c4984651b913', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77876, hash: '0fa64995eb98c3665436448a32bafa1676ea9310d7804eed040093da1557a4ac', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76917, hash: '25ba9b844285f9024853f2a161b1a24f81d4113c2b09c9a3aa837861bbe45b8a', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74462, hash: 'c943689d54b9267de6ac901e3e8214f3b927c858eddba236c74d339f62c4a3d9', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75937, hash: '3e2bee51ffe8b869c601f12fd0511553695c1d0f8a0c0fda94550e536624d290', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79744, hash: '0781becf4b3bafc7265a46b5d9f6dae37394f1cfea7f12d0fe1ad74aa132478d', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88001, hash: 'c75ec8d4354607bc76100c20b5fec92946b8e8d7c455f419ff0cfd2af2743355', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87225, hash: '15842f37156f326a6f157140974e81792cd7fdb8b07516be8efc2b622bf82574', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106082, hash: 'f893131c4fc80d1be050677bc12063fd581dd66e25402e0fdcda5bc46bdd06d7', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96803, hash: 'eec44354b9ec74a49d2145d0fe70df971d1f36076dae98459f56ebe013a8798c', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73034, hash: '674729d5f7f95e6282993c3db2989aa91bb07fd957be7715554592f8b9c84c35', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70385, hash: '62be6f4e7c6a4f9de058c234271defb6da73b181f5a50672c7d071d1b075d5f7', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78771, hash: 'a4e128692fc055ff63174f30e63f2f1387d8afd93886906edf97c78c34a8699a', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108173, hash: '5255402bc8b9361f72ecb92fb165d8d8b327affd417fd29831ebf63eabef45c8', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118026, hash: 'ec0f3d70eb96e6f13e1f990465dab6e0d7fa992afad394976dbfeca9ad03fd3c', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118265, hash: 'f397c3797ec1640958aedcc879787ffb73a23d6a63e83d81c981983b448e4b68', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118071, hash: '865a62dc21486f13bf2c2b10d0f4927f0fb9909cd3808d02d01c855b53f888a0', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87209, hash: 'f0ab79a10708a0e295d8029ae5180220a8ff742266801df7b9b8cec4f621d6ec', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84101, hash: '17fe83cdd8a8745b5f2dc540f070cb1f0e58246050b27f461ddc64d3452fe93c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83878, hash: 'e52761a8feb66311511c2a8d774f6f89b6fc8566a7f49589acc7143b8adfbc06', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66988, hash: '7923b28059ea5a593b5c2af6634985792c9f095b808d7e9f89774d4082f16fa7', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80192, hash: 'a30d8da895d7f2500964ff0d15a9ce20d8197c579d40ed0adb2481c790ec0eb3', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81340, hash: '85f7779b7593104873df485a6c72fae4240e1cb40f28687d4576de7f079e7cab', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96982, hash: '162a012aff151f409693a9e27de09d91b76d564c2028380669877159751cfcbb', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89144, hash: '8076e781227bf072fc9efaaefe7a74ec07b4158ca6e7fe4c3125735b9134fd00', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115215, hash: '3e147c7446328855a6a3262aae670b4379588a6f887cf2c0a2116339061de735', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108873, hash: 'a35cbf184e9abf24c274e4a414f912858f904221401c2a275bb6f250fb461dca', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87934, hash: '8dbb33b09d798cda09289034bbaba92f9f20cc95c30893581448307920c4106d', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99963, hash: 'f00f41f5fcd1e0dc6c45938028d13182cd7247fbaf724a58d9d7b811204e1b8c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99570, hash: '8be68fc837c96d1081a9c540f55fda178b92c125498d01450ffe6db1d4ff20aa', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104378, hash: '88b8a57a6c9feba294331faa236a9758b83ef675ed949291a34361365909c50d', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64638, hash: 'fbb95b78515ff1909a818d0d453b6af9c0eadc70ac0af9c037d8b745b4e56138', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63836, hash: 'e48ff0a1f9df3297f34156276c2f68debbee2ce4cf3eb029c2ff8e563bd52aac', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88765, hash: '2817b54fe368bc88ad0ab0da49f821315c05d8920f4ec180b709c40743b40757', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66558, hash: '05fcf17b2277a6cc2f7d178587bdd75d43d9184e835b75a656ec8f4125c7ca92', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107073, hash: 'fc63df0fd72f6db1106a4bfb8fcb934ca93ead211f12059aefe57848ea77ca07', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114697, hash: '5e62a460db332db15a290e91c4d26c60d4315074426b68676662d5cf34f5637e', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-A347SVMG.css': {size: 14125, hash: 'eSV2injb/Ms', text: () => import('./assets-chunks/styles-A347SVMG_css.mjs').then(m => m.default)}
  },
};
