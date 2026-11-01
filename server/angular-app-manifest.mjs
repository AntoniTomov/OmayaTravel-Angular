
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
      "chunk-ww4Bj7Dk.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-dlJdqeJ8.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-dlJdqeJ8.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CvxmgT4b.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--TQWw96Y.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bdtl5r2y.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ct1VYjtW.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCXBtg_T.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bwnruuci.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dk1MmHnw.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5nVM6ajb.js",
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
      "chunk-BTXbGK7W.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTXbGK7W.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTXbGK7W.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTXbGK7W.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTXbGK7W.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTXbGK7W.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTXbGK7W.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsI38yu0.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsI38yu0.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsI38yu0.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsI38yu0.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsI38yu0.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--nVxnbbC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsI38yu0.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--nVxnbbC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DxDvcvyY.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-CneyOkK0.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByA__DDt.js",
      "chunk-DyzSqWdQ.js",
      "chunk-BadKsc4m.js",
      "chunk-iRD_u3wY.js",
      "chunk-Ce26QsS6.js"
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
    'index.csr.html': {size: 16193, hash: '921d50beef1dc38f0ac70b9ac689f9596c72024245c4a6eaa6e873fafff5c424', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '788a8cd5c732dd570426252a289f36fd235c5f1f0b70d7c0b9edf57203ac6ea7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: 'df6525de6fa5d8a3b7217bf1e511c03eccc850318b86004c60736307c8da5ef9', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: 'c75055a86831f97eba6b4d98da2916204100d2cf415ef796f5b1ae6d7672c854', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: 'aa7a316eee607f1605f27a3cb99620cd508cce9f1b0b1d2261e694367ba03104', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'f7f69b5abd6dedda8a69402537260b126ab25675bc87db45154b8660f39ad4c9', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '0fba51d68269d620a7c28f3bf4b82e7903ab436674ea2478b3a9091cf1c8f410', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '031c54a9b139909d6cab946e1e95f4c36d803de334aeadf4f2967e6ba7ee5aac', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: '19078811fb983aa07ac5185927f86c03f426df98a9e0626dfa366b1df743eaaa', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: 'e7aea28c0b5851e18c3368d42e12878be9c997018c6493fad48c46226288f71d', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'fb9cf9babe41df51dea21ea87795c71d17cabf7408354bc73869be48a5a8e491', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: '6c18005189b51c89e18d2a608fea161b70883c2ae5242e5d8b5c6750a7e2c2f4', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: 'f072dfeeb3a8b37e6ed4432b0e2e18d15355ee5ac6a3f355a637b80c555e9f68', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '51c01879d243bdaa37468f8b13897185e82fc2557819d8543489904dbe1a4c53', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '3b151cfb3627ff569bd9aa4f670b50ce857e5a39c34fe9c83372ff7c7bf6658b', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '7958b9fb4246e73551621935447545a3258fcd039d67becb7ae78a48a66f2ec9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: 'd2eefbbdbc4299b090381ee0af9ac74a9abd809dbc5cd46d4a45c83ee37903d4', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: 'b127bae75d8180a516edde20f185df93201f6d56b26d409468b66af991cf574b', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112438, hash: '11220e6251fb5472abf2ccc1000f73056f5cb4b4ae35b41550a78d16f8fc5327', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103157, hash: '1015943aef325f7ab6d998471671f49776cd12688bbd4788de7d5e30ac02d945', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105835, hash: 'ef29147a7f28b8f65a9df02ce6a37240dd99c6aad7792d642c5246f2723f2911', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102817, hash: 'e83ae94df717391b56e38cf8f54e9471855fbff2685a9444554fa55a12d0bbc3', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106730, hash: '361eccec4e68688b78c21cb521e501770b0ffac2ab06e114566a1a4c83d4069b', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: 'e4163d7921cfd208e6efc2a40084d1db8c338196dfb30bead3cbacaec24d5695', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: '4056535f3bd482ccbc85fdadb5e9f843ed9055e618e7d72b6d669a1ffa0eb76d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: '5ead462b5f9d1677894a29b5f8fa5b0081b2f0a790246748373a4982a4f6350a', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: 'f5b19a11a7626176330f78065df2a0cffa1d939073366c4bca1c6c463f606227', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: 'dc1781a130cb940fe1f6714c1a4e69ee7369b118d27220d1e9319978e50e6c88', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '52b46588933dca82fce5a4aef25fbdf84c04ca9afe2384a687469c1a2170fa17', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '0b686079ff2af52e6cb31b85bb68b5a3d735c50b4fb42050bafc25e2193c6038', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '8359e603b8a8a2f6e3f5a1c00961bc17e4ae8998f559b6c42967c8dff85ea2b5', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: '359d3eb267527fa2b4fc792d1df12447970bfd9f28acba236ae0584092cb6051', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'd696d9768514f0777436c6727c2b6f52a37c92a56d05928981a19c8ab76fc325', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '6b71d72b9e51491a6801361672520fab716666cc928bcebc432d05b41da09492', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '066e0fc4d910893656ddf31abe53be56cc87b5a961ae4a82a1ba9a403b336343', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104502, hash: '42f8f0ddf5d838ebcaf55ea8eef132b529a87c1354d5ddeb399bf8ad2005e80f', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94534, hash: '781e23ab534ea1068a0e50a3a092b7bb347cdace2b39e4505a496bc79e2f961e', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94455, hash: '79f3e4c7440f7fae0b52edb4e8989e321389258c11a982a962c2b907d0039fae', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118004, hash: 'cbe85862bfa64ddbc4cf7b10b2e6f8c1c5ea74b01b971cf1527d0876474a5d08', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93745, hash: '5c3e36f965015b5366ac4d0c5def9e0ac2f33de7c880366dac1c733f1824aaa0', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106558, hash: '83a6849e99d074c35fba1ee5f1f77144f1855ec4782c9d020625bab7c6c11271', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94144, hash: '2062f187596e6125a7e4ca2a9ca11db54407efa312f88beead21be02b826c31f', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93311, hash: '8c2d9ece75c7b2c45b356879ff4c7fd72f0c0dfac621bc0ed1bb77e83e89e4d5', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111078, hash: '73b5d19d3b22133923ef63544bcf78fd16d54c6b4ac18524f7024cbd3f96dc77', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: 'a50c4cb4868ff3238b16e28e31e1f006e76b1bd4adb497397eca1a6248e8b344', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: '6738bc93ceced25fee035a3e1899cdf499f451085535ec6083796df496c0fc2d', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: 'c34ea1a6176c1ea39abdb3e3ca3d3e3ccffcf552902680474c99ca6f93c229df', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: 'cb329855561cd5a224b39c1ece2eb0a9e2beee22b93b7c214df240e01cb8eebb', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '7c4558184a1b1287d8128fbf5e834df8f87e9efc8f6b5a1ba75c1506028b945b', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: '164852148f0cb299a0a9892e8b0d6d3d40306655ff03c63ac28466bb672bd04c', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: '1aee955bdf23c19057c2b0abcfc76b35a465e2cbbe16f46df0809e1aaf638e87', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: 'e3135f3df86bfa44b107e8a12cd593783fe8d0d845a4e982fc8fb54072391546', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: 'e2ca4963803749f871245b1fdf8c96d33ecf374f62fe8934121a24b5539a91db', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
