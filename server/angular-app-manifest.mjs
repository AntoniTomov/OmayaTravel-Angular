
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
      "chunk-CvDyvdC8.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-LKs6_S7J.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LKs6_S7J.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkuOO3d6.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dn-b-DwI.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B39s6BLj.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ccj5lp6i.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUpgJeQK.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPEQY2Pw.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dw9P1fAp.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5ezDYv_g.js",
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
      "chunk-jhK5_eyD.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jhK5_eyD.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jhK5_eyD.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jhK5_eyD.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jhK5_eyD.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jhK5_eyD.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jhK5_eyD.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwimKHbM.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwimKHbM.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwimKHbM.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwimKHbM.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwimKHbM.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ba49e9Za.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwimKHbM.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ba49e9Za.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DnBC0vwP.js",
      "chunk-Bn2soH2f.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2RKZxt08.js",
      "chunk-C_8QSwij.js",
      "chunk-C-UQAgSK.js",
      "chunk-cT4APPZr.js",
      "chunk-DjSz1cNx.js"
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
      "chunk-DHDrso3y.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '6a6b4ee21140b94e5bed878aeb252dc78675ad486a50b9ca0838fdbf65f80e3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '8301f9d472816d40a5d28dc72f92d9e9eed99c7972a0a808c75cd4560a47d4f8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: 'e5f430be9c23ed92506f1a570ba8c0ecace7c51118d56e45705c22ba6a51497b', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: '7537b367fbcb3835d78be0e2f6331b063cebd86527a5fc27d61104eb504770d7', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: 'f620664b20ac0044093416aa7ba7ae460ebab4b406024f894d3e2d68b015fef0', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: 'e3ccace3b52cb7cf32d340dd01167829401a86d2a8407a92f3ae9da0ca713f7a', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: 'e5428f85d4ec2a0f82205cf154822834d2fd720babf79fd225af4ff331189bc7', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: '2932285bdad193ffa14b539d2296c7b71388bab5c40e920b8078f8294085608a', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: 'cec01ca16f68fe25ae5c6e07e707c23d06c58e73e606681d9241c9697d5133bf', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: 'e86fc12f253ec83821f863c91433885d55c6a7d8d41408671336a378d85ee1b1', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '104b4612c6d090c66c86fcf3bc91fe4343d85d79c8c480c6e8cce73d8d50ef8f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '649672ae7118df4c877cffe0e13df0e338f9bae1d83c229065341b2934ab2dff', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '7dbf3956eb88bd4a47b7ea934fba6384b8060124166c4816e35038b6e28fa97d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '87425f6a668aab54faebeac6807b9c0cb2e4d28e3b4c973b0e5de1760c683d4a', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: '09fdd5466d4afbc15d3a4b171db3b321522610fcd23604632b4e8d4869998efe', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: '0f722a62aa1e31462203739afa1583d741fe12d4bef986baabb7a6531636bfa6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: 'd5a1a9104bd1b6c980b7f9fc032396941c01072d1bc877ef8e5e50c49a466dff', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: 'efc7df0f4528211d83de10368b6a3cbf25dcb636b71d7f12d8dbdfb4cb7705ed', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '26a72b548186ca4b70b1183ddcbc2d880c7924a430a1c72d3f39bf7e2f9d817e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '82785ac8f455e3ad7f4fe0bc97834cece453c31d7449a30200b67b3f0aef7c1d', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '5ec884ae344b105b78894de357eb4e00f27ae8dadf00f4f2502933f84ebb18e6', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: '79bad9787e3caa67ba3e436dc4e35e15c6ac5072d66125b827c7665151f96b5c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: 'a1fea739063cb4c96aae22982b4300bb358014086b8870e54a995af07557d399', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: 'b84c89a0395b8c5d5f555bdfacd6985c250d5fa9b821376b3086e19b89ba7e3f', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: '1029c0fce13cc9f7bdea852f444f1d205f71bfc03546a6981a8f88d7bbff1da1', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: 'd6f524256342ba34390227e358420f55501f22a45e5b86c08e59664810348ec8', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: 'ee8a0ecd0723350329d7f86cbb6cba904dbb9da2185415a75cc7c462e8e51584', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '8cf5b44c7866711c201a42b40afda772345b4dc7f6424835435abe19dbf22033', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '4b6c4b20a601a284c360a582e9c11882e13f7802f2998664f2c5ba3be2eef8e2', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: '8f94dd4768b5e882043b515b5d9f703bf834e2acfcf5e4671c54a7852fb67981', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: 'd5db709003ce1535f4bb0c6fdc1f6849d63462a4d04d7583d2f5a0f2a134cf03', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118179, hash: 'a80f083d5c77e04ae3fca96d0a164ce2cf1aeb8ca807d909026b2f14213283ce', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94628, hash: '4fbaf0758386c041180bc9754af2e914e4327d36feff0dc44c919044091789d1', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107693, hash: 'd452a11b9ca31ea53c905229ffb96d22a5a831969352d74751f4d05210ccafca', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95197, hash: 'eee9f4073285f72d6455dcf575d5596423fc64fe3401817cdf3518f9543f7e48', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94369, hash: '23eec3ef125c6b0213f380a5d2b8c11118933b12fb53499acbf489e236c563b9', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: '65d8907f35ac63987f554a13414fcb3a233d5aeb72019d183c347de2217c0887', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: '6ac72a95daad1fcc4c15e0c904ccbb01b1120bd397b051b864c85b2e7d18583f', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104474, hash: '36bf72183e229c3acfceac8808a340c536d36b076d81ac691199ec083a761278', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94506, hash: '7374ada27ea964f01a857593f60096357af60950bbcd7f6417ad5d3ce4b105d4', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94427, hash: '021f89b2d327b0f3650bad619f27518f287d585694d37a17f46fd4542eb6cec3', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: 'af443e0f2b73627071d758b3d3d2dfd476603464be5ea085f5e690c589ff1425', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '4ff6c8f6a09817f2c5f7599a2ad696ac3d7e508c1e8df011998c6ab94a3521db', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '44b95dc297bcb9055bbfa70fe88bfe0112e18af6ab9c15887903296823393120', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '337d2088b3815024d1a4c1dc87cf9f823161f1f522572daa4c526b97feaa87cb', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '16ecbb7eb356e16225c085c7bcd1523b617f4ea08ae89f5dd14a511678254ca0', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103296, hash: '8c9c0ad46578ea365034baad5747f18ee9314014cf850432a93f5c6e396af464', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107340, hash: 'c81d82b61e8e5ea73522cdb6999725b198d84e6e4494bb15ad47a03a04e8a960', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118124, hash: '344a9d4b8d6ba33d478a26e643defb03c9d85375c8918b1f5f7b878ebb4b1ee5', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112137, hash: 'd67d3f4e8fa419c87b4e177629a74c3259992fc8684a8952b75ad58a6e9a3a36', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: 'a14cbcb6633bf54966f3d3bd335441edc66e71fb922bfa88374307cfe3b4082e', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118576, hash: '806ec56f212cbe820facfac86793c12240526d01e364d4728a8ea081d84ebc99', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121065, hash: '6965bb3ca7ece7d381b9ea491595306aa382aef5dd99b7a9c17e5d3bd77afa94', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119456, hash: '84a68911014a997d9462ee47d8ee6ecaf6bf0ca5886d3e18f53b9fa1804058f0', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118663, hash: '94774a579fc917de21440b17779715080d983abd0f2b3a5c0b4b7cf6c17c8283', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124574, hash: 'b643bf245e6817419968be46a08c35c82fe932b254da117dd0987aef9ccfdd0f', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
