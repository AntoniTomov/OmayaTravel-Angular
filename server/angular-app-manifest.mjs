
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
      "chunk-ChB5YD5J.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-B-DgDhFB.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-DgDhFB.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cyYxVrxA.js",
      "chunk-C1R8VH2b.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKE4b92Q.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVSpxI6c.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LPfyEz-O.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUgMNWXe.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxD2le7N.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXGJP4Sd.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkIIFM7W.js",
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
      "chunk-Cwr6Fmsc.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cwr6Fmsc.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cwr6Fmsc.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cwr6Fmsc.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cwr6Fmsc.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cwr6Fmsc.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cwr6Fmsc.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cn9OJnKD.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cn9OJnKD.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cn9OJnKD.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cn9OJnKD.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cn9OJnKD.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT2mbNRo.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cn9OJnKD.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT2mbNRo.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BWTkXLPV.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js",
      "chunk-CYgrv23F.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSSOs8uL.js",
      "chunk-C1R8VH2b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-vFtgod3I.js",
      "chunk-ezNW20if.js"
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
      "chunk-BG-RQz5Q.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '68f62d99493a7d85ad62afc494e1c70d23ae51072332f61bf4b95d4633975cbe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'b17432aa60d0cfb197493ac8d21891a06a8b84da64658e7214f3b896e8c43c51', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111502, hash: '6bbb29645383a66c725511af57c9822fd2d6973714ba22c3d5e7b695ffb87076', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: '31421d060f12a5efdf1d5f91fba52bc739c1860eeb6e94b5e7c61d749c12324c', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 92915, hash: '77860efeacf6711112069620f8e375013aa67e208f5f4f24bf91d5a23eccab6d', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: 'ed6b374fb1b7487243a39c83461012d12fe222f560e35484247a0393ea34df38', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: 'e7f2bad18d716e7ce1736ab049af1904d511f1122ba73a9b899bc57b41167903', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81659, hash: 'd81abc70b8b0960472631b9608b2861f2341ed40eb2573a3f654cc31f7215760', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: 'c3d6dcb01f921687a440d13ad2f403e4d29ae28a34663467c19c0e59b7306d38', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: 'd6af3f26905754f3b5480232b33468f1f8dba07cd2cfeaecfe7a1f8d8512540e', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: '87e70852a23454bbb04b4a49e190c85e008406b856e40359ec5dbbebc1a01142', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: 'f59c817809e9fe6862155f71677e0c5f698ff9e1ba3ea8d1764555c726fa24f5', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77298, hash: '7be1f4c577390abcf40451d035c1b3e38a5b8bb6d3bf6ef850f7abeee1a368c1', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76721, hash: '22260d489af0d521930806021cea60a3cf1954eb585369fbdf0204a6fb0b1c93', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74639, hash: '340f870b8443f6d873efa24dfd00cf061e7235815b2811c1a735c91c75d4ce79', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67394, hash: '7f29bb7d30151a38fea6e01868b0d635c8749b4694263b65a0621bf107bbe1bf', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80503, hash: 'e2a3a3c227eedf8ee1518aaf92027f3df0bc4ae400b0439726ec07b36ae67920', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: '0968d22fc74186920638ec4cf828cba0516cd2ed571f9975959f5a0abcc5bc6c', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: 'def36fa70aac635d49005488f473affd2381d9eb3f452ec1fc33b9aa96c6ad36', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124583, hash: '0e40ddd03bfe67c6f0db6bd9fade48dbc01f7676674d9d95ea00228bdc3f83db', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124225, hash: '9a2d741b4d3f3e7a14c67b8d85ac36ed2f599e6f332cec4363b4d5f37a4b91c9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: '829a66ee3ae026a9fb15b3fc1c209bd4fc814f371f61a01734e3d22b0c88e502', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: '92ca0ce85bcc14b37ea4878e80fdcc0e29c6db4c67a08e854f12accd577819b9', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: '8abc42ab5d637b6056526a0f1553ccc6403d266c5ef7b809f9df92e4951906e1', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: '12a0e1617fe263cae92e64054c5b40b459d6ef44f2ebb6c9b739e249ff8c6f0d', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103184, hash: 'a581e10f40206eca33577b90c7307eec3b042f4f846f82e1a6981884a3e93701', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105508, hash: '7a734b16538ae7e033bdb8a3b7e0d88915f71b41226a6be9bdffd6032d24cf60', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114272, hash: '56be59518ba9fc5be9e9cc6b8c2c957ea0a3a8300c77a08a50576c2c6b9b5621', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102578, hash: '0a41ce8464f761675f4ca5a332d62df687e67f0914f27da2619b6a5bcfbb8b79', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: '0b3dfc95f065b6d5cd23a0448a009991609226b512baf13b8b5fa4c8dffe6bae', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: 'fd497cda9f78a78204894bf62477dea3486f188ffacb7f843186f45e89acc156', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: '0ed6c7b9db14a364fd33535302b859fc55a4f670fd031bf646ff48dbbe2e55a2', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94065, hash: '48f93f839e530a91117594d0ed60dad34b1c1d801776fb62906097e00fb73e41', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70196, hash: '02e7cca7d73711457a9ebe26fec4403db30e76d442318c3bd05d8411fc409cae', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118018, hash: '4d9ce8254c6b4d8cd8ed1dda5f5d9ca876ce31cb6f8f6cdc7d772f46f84f1458', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93567, hash: '47d95ce6a3c8f23ec6edfa1b2239d6c12959be16efe1281aaee4e02ad01c8900', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106749, hash: '46ccba88f582fc07dfbef608da2f107b691472903a53e5bbcb17dd9c62622479', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94245, hash: '5e0ef3de48f6a8bd7b4b7e9369480026193f62cb8f85a23fa751e643b22b1826', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93395, hash: '1075a6178e3b65cd62424b5fc3f8dd921836e7d037590dc4a32489482923753b', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87191, hash: 'c9e76bed03f741368ec26eb796e4cdf3dec29d21c2bb107772d5ccc9807376da', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81889, hash: 'cbffe7d71f942953fcdb5a0f631ebe32dca0b80bdfc9107ed6517da5982643ea', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104479, hash: '8db7eae075b9bf6d1b046d46439139499c0402c717a7505fb137ffef56e0006f', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94518, hash: '9af8d59cb3a2d8fd7583caf0ce3123073267ee6ad9926513601dedeb39df06a6', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94439, hash: '0e6704cdbf13c254732cf92d476ab0b5dad21bbdd890f2618642662d077bcdb7', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106491, hash: 'af37f1afb5c63279e1d74cfd9de31ad72370f648c3a1b0859e9aba98f82b38c5', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111084, hash: '52f74370f21c455126e134a88c9a31c1523cd8ab04665b2d896ab752dcd1f216', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68228, hash: '3bf227ac049319bc8e4edd0b0595dbecd3e59d1cdf06b920969e83a17fd06b81', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: 'a0fcd47fc355ca59e073f313e4609f709b23bea61f3b9d3f5112eb798b6403cc', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: 'a8a29900cbc7acf81439b74d758fb6d1fbd97af7b89fee7dfebafc4d83b2a2eb', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118544, hash: '278dc04ac64d327f6acfe2c82e6bf48e4eececaacf96036f74791cb2d8d6389c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121015, hash: '253bd2c40775a1cb0473f585752419e00d73e5d1fe7be6ac8e036f4cf89dff69', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119427, hash: '015fae022408cbac8a7eb65b0c35d87000febbf464c91f80f4e009efca02dffa', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118621, hash: '695e4858b39c1f9a926a7268fece14ae91d40371a404716e148211982124c731', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124344, hash: 'c62cb2b223e890fabcf0e123f141bac7d3e82b7563e2173feb8fd61917d6a45d', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
