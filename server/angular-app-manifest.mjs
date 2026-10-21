
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
      "chunk-CDGMV4Tb.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CRwkk78F.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRwkk78F.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N1msFH_o.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRiVdJb1.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cw9gF645.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Drm0VgKt.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIpWRnuK.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BS4FdYFM.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BbZDxA6Q.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SjtIT1rN.js",
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
      "chunk-BKEn1p--.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKEn1p--.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKEn1p--.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKEn1p--.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKEn1p--.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKEn1p--.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKEn1p--.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_u4n4af.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_u4n4af.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_u4n4af.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_u4n4af.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_u4n4af.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJ2NsbFy.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_u4n4af.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJ2NsbFy.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C1UjwV_B.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-PU3D2CPf.js",
      "chunk-o5Jkz_ga.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjbkiXeo.js",
      "chunk-AOAuPnL9.js",
      "chunk-D6PuzvHk.js",
      "chunk-o5Jkz_ga.js",
      "chunk-BIX2sxlw.js"
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
      "chunk-Bw8nrRqC.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'cf3c8f360e21e8e4ef748e2bfe8c6b338daa1aa5c45af9dc602b3c9a373ccb3c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '407a1f702151eadf33d2e16136f442f4701862a036e5f1ca47acab3ec89523e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81526, hash: 'd8986f92e3815515ddc5a8e38959872214403b7e80ee9909202ca62f88b396f9', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81717, hash: '1b0a104b545805066f7c7ac2972c52ed9d522baac226aaa5bd8ee6ec344630be', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85456, hash: '50a0a60270ae191813f39357ab74fb492da4e1f21c4bc6faef033a38a27a980b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 83962, hash: 'eab25d0f508929a10214404f37b3c854bdcc5e6bf47a207104139f7c9f5abfc5', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89036, hash: '9be106b16f0340f5d5f4fec7b2c04c738c5a71b7cdbde02536c81b410c982064', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77165, hash: '9558727b54479dabc107482fa5abd700ac147a9088020db5b0b50c02904427d2', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76396, hash: '1ad509022d9aee0297e36b8abaa0b7357052741001da37a7b35f4fd7bd726859', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74506, hash: '03fde43df113631fe4ebfa0bcfa9dab6d71cb471f6bf0b4c04cab89742381256', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67261, hash: '605e27c241110b72d8f1430553b9a03a58331e484499c642a58a3928c785b557', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80370, hash: '788cc1f03c70e88bf1e233620d9bd8a1ce3fee571633d2e991303e48f3b6b957', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111136, hash: 'f50dcc88974f36e39fb84dbeb9ef2db5639bbca71ec7536e8292bbbd4fa83de4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80008, hash: '85b2ff0863902116f75794ce113874301fbc5a018f56f89cd49276fe971e7f53', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91381, hash: 'b2506476bfe50fbf3816b20d092bce31241a96d4d3f41d428f0fd4ac589dcbc2', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67291, hash: '8c74c0e1b4f1611f445c19f29641c628004dcc89b089acfe639f98b15b7d690a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81380, hash: '4a4a435c8228011d711ffed4bbb8dab8aca0e4d5b839674bb2bb370a91cef014', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82224, hash: 'fdbe01bfad94048f82ffd758be8fd3711a1d5063640a97dc3c7cc577190d5cb7', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 123914, hash: 'f2a22940a31cdb404eb982cee57a5464d7a5b74848504b726391892857d3de42', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123556, hash: '15d41fc6b3aad449ee5e3e11d92a791bdb5cf9e3dff933f379620c5e426446d4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120864, hash: 'deb7559035d172fe12ff2f2ee2de73bfee00efd00d81013dc4c87cfe315f8770', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122417, hash: '5ba4b682af6570c2a7f7d41c1f23859bc3030b9d4fb46eb9631d6cc808aee6c7', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117655, hash: '56cd5d4e78f39da9a416b759f7da87616b98070a68475f4608fd4812d39cf5e3', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110747, hash: 'b4bce1fdbff96f157133663385275900145ef2bf593428fd947d5fc14c9e7e54', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101488, hash: '81ef7a5d3c9d1fa36a7ab4e86c7a37bc3d0aaef3666b90fdd0d17c2e8d43606b', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104082, hash: '58f44713d67ae7fbbb8d218be52b45d7e97f6e7a2e7522de671317e6ad0d3d0f', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101054, hash: '426857bf2074e288ac947e95afd1aff29979e724815b4f3b7e9bade5bdce7702', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106050, hash: '189609ed724119d6c24403e1696f958e55dfb06195aa429bd8c918efd12446f9', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87658, hash: 'd7ce3df32ac3f44144bdb2a4bdfa0c2f7fc9508cc5a64c74ca22b2cfaebeb102', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87435, hash: '755ed76fecd1ddbb665daec9745a95d7b5de51ef602a1ee8b1f05e050c958f23', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70432, hash: '24619e89af4e7a6eb4cc45235a0777b07e71f5da89b4d47842fb195b547ebd3c', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 93546, hash: '6b5f32eb453a19d5b5e8e9345c6d1e66594fc73d8e40117ac5f7834bb45b7c88', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70115, hash: 'd047519d8cfe8437da607eeebee4c148b796765a5cb841f08a5bcd479ddc6a24', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87058, hash: 'e33651829f3ccd4e5e708e2d789a9488f258df43920fbd13ba1ca78cc501737b', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81756, hash: 'b6f3cf608ab2dc556fe8d72bb81d0734e630e54691472698ec4a959bc98dc842', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 103962, hash: 'f2a711bfe94305c5eefa6de9a24b65fc0b55c061ca8aa01006b560a71f2f60d9', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94193, hash: 'f142863213a197987491a4267cb32811f58a65531307121c310e363ff9dbd63e', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 93920, hash: 'aa94c5177588c9c84abec46451f9681cce6304fe973c053e64e8c270a7b8f6f7', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117377, hash: '4a2894a2e0a7c3b4b56f37fbad8387151de758d820564eca83cd6f1f3b34a78b', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92256, hash: 'c9e85098f9325d64961fbd04e2f368c8d7e3c784934ea526f93eb79f7f6b4566', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104719, hash: '6d9e8e0c5ba5d12009c7c417509491ef8bbba43fafe1deadd0ebd68c9dab02ce', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92617, hash: '8af016f06ad73a12475053053511c740c67c57563ef38af942dbc925ad721861', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91822, hash: 'c3016021f6ae86f5610ccf218a2fbd2bd798b501ba229c9b019f48ee9f805371', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109177, hash: 'ee910e7847451d189ba1094d3309c74b978f189e3cc5e050aaa8da1e6dbe26d1', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68095, hash: '610ae07adbae5cf3a7274389875716370a1de6fc5cc6adaa10a6105aed8570d0', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67275, hash: '7b8f4eea9fd8d47a47bf0b1d1ac608cec37368ca54e80f64d56d25b4677ba177', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77238, hash: 'f000af04c404e62729f9035b55bcc7361c58fa775aa0c4fa903621cfb9b7d8c1', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76117, hash: '4031a295d221078577631f428bd2940546fa4387b2950dcc7d8d7c23041338df', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113773, hash: '1a3e64eedd3de3d806f543d269382d832d5fdaa9ecaf701a425ba8e018bc2a5b', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120416, hash: '20f061909c71832aa5454b36aeabcbe5119768b8b4f537f0937adca3dbba0963', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118807, hash: '474b7cd5c3488650d324d9ad6c2983d5485baba6793427c1596fd34016dbadd7', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118014, hash: '5c387c07e655915aebc71b94d27c9b7897c775c92e2e2e452c768e63a93f455d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123739, hash: '960e11f1d66499e48827f18438112deba091441533bcdc43e02c051659d4691e', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
