
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
    'index.html': {size: 111502, hash: '6bbb29645383a66c725511af57c9822fd2d6973714ba22c3d5e7b695ffb87076', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: '31421d060f12a5efdf1d5f91fba52bc739c1860eeb6e94b5e7c61d749c12324c', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 92915, hash: '77860efeacf6711112069620f8e375013aa67e208f5f4f24bf91d5a23eccab6d', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: 'ed6b374fb1b7487243a39c83461012d12fe222f560e35484247a0393ea34df38', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: 'e7f2bad18d716e7ce1736ab049af1904d511f1122ba73a9b899bc57b41167903', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: '4cf1349c85c084295ab39cd632cba881254298242c366d4550976e71c71c98fd', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: '9d826d49b2e3c1f4bf187db1e455c3148035c6b2fcdcb722059188d696254346', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: '72d96ecf9d0e2e716865ba0b1c49ddc2bb4575c40086c152d9016acfb07deccf', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103184, hash: '892ccb646b60a7f69cb5a711b1dbbdf8409188befdf574b0fd692039b31fb7c2', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105508, hash: '9d1bcc07011a4d953fd7fb8921453ccb521bb42926fdc352c3fcc91807c2a74c', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114272, hash: 'bdb15d2f0a7866aa3936885ef981c5916155a9b0937e181a1a10a980d9d05b4f', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102578, hash: '5bc006f6c236cc40773c712a54254235cc6e651ef871fec9c8ef72d198225c0a', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124583, hash: '6008808b2b9fe6e9800b397451b98bd0ac9e4a30868d02dae8ff9431fee53dc0', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124225, hash: 'b484884e7aea7108f1c1063f2f5fc06a0d2910a28895ef5f714df29aa5fa344f', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: '32c661685780463229cad739518d01ec92b7876b141b1a57f8942f17d1d17155', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: '7dd1915af2b9fc3d81cf02f2a8d0c0da5c930df2f35bab558c3c0106ca388db7', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: 'e7b47ee518dc58d44449f68776074bbc52419ac4bcf10245bf8cbdc387ca8eb4', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: '1a3e25c6ad89ae8035cb027fab8767150b6d38759ace04568832e9b143735759', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: '1d8bfa28d9122edf6b7ea5b957f08d5e3bdb7bd9cff7620fcd8a3edad9435491', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: 'e1b54afe5a12874a3eea5a360dacdf8df49bfa0abbdb9862af46f88f6557a9f7', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94065, hash: '617d347ab29a497ba6c543cdc989d3054a899fc1a00615d694813ddb30df0cad', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70196, hash: 'f542953b84c77cb0645fcdb2286012afd49a7135c908e6b394d42b262d4739dd', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118047, hash: '18ca72703eba64d8cf16df51492b90772fe498528321f32eaf2bb3f282c66cee', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93506, hash: '67a91100aa89b2ffd4ce89bf4de7ae3f270c9dfe1d030fee7413d99d87023537', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106581, hash: 'c639af0d08891fcab335198557f845eb48763a359a7998b2c2f1c92a1b90cbb0', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94167, hash: 'a7b66c7c90d1641b6bf53cb299f08a524708e7e3c026c33fb190c9fec7d84fa3', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93334, hash: '6b9da2e28a1e7092687d4b148d2cbdc86aefe5031b5d7b1507c93bbcc05d069f', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87191, hash: 'c9e76bed03f741368ec26eb796e4cdf3dec29d21c2bb107772d5ccc9807376da', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81889, hash: 'cbffe7d71f942953fcdb5a0f631ebe32dca0b80bdfc9107ed6517da5982643ea', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104479, hash: '8db7eae075b9bf6d1b046d46439139499c0402c717a7505fb137ffef56e0006f', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94518, hash: '9af8d59cb3a2d8fd7583caf0ce3123073267ee6ad9926513601dedeb39df06a6', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94439, hash: '0e6704cdbf13c254732cf92d476ab0b5dad21bbdd890f2618642662d077bcdb7', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106504, hash: 'e12e6189b813927facfa202afd2e05f351f1248d79b79d1094aa47344a539244', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111103, hash: 'df0c456b74ae064d3002e439ea3b2fd4a46bd69f47ba2ce43232887ce5becc84', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68228, hash: '78335bb859d4b2174ad56386e893ec7fdd2fcebf7154a5ed6eed3da3f4c62ba8', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: 'dc0da0ff1df3c187ef5c8a4e382aeb431003b35b0a792363627953262e43e7f7', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: 'a95fbfb0300054108b34cdb90ab32682df2d3b6d9f66d29ede27e54ba23ba307', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118572, hash: 'ab3c0279509b760e9cf6f5fd6643376e8de36e2f8c70cf8a94ff9a516f3ab199', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121058, hash: 'b05b9844150fece86c6ffb6fa58e3eed448b93b4dc1e064deaf18dd19c2e1c45', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119455, hash: 'd76b9d427a1ef298862fdd6454f210f7a1331ab07fe5f93c0126cd2d6fd3f901', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118661, hash: '2420c2a2a1482495e90fb7d3a79e4ef4919144d01172593b76548e678eceac8d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124379, hash: '8174a4ab9a140c7fdcdeeec77c1614befdd994a7067820bcfb3126b664759c1e', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
