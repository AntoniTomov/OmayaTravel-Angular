
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
    'index.html': {size: 111468, hash: 'f072dfeeb3a8b37e6ed4432b0e2e18d15355ee5ac6a3f355a637b80c555e9f68', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '51c01879d243bdaa37468f8b13897185e82fc2557819d8543489904dbe1a4c53', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '3b151cfb3627ff569bd9aa4f670b50ce857e5a39c34fe9c83372ff7c7bf6658b', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '7958b9fb4246e73551621935447545a3258fcd039d67becb7ae78a48a66f2ec9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: 'd2eefbbdbc4299b090381ee0af9ac74a9abd809dbc5cd46d4a45c83ee37903d4', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
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
    'termsconditions/index.html': {size: 82336, hash: '6400bc92c9d08a94a26375e4d1d9a9eebb0b1119749804217731d012255f7fdd', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: '7c247d5577130fbdee012731d902ed8fb781ec3c6fd0de0a8a24bdaa097fd2b9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: '8610844fbc6a3dfdbc599f1be992e608678fd85406ebd91d3fb9da2e78827bc5', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: '6832cd1331b3be111e491e7df88eb87fb161eac2943408a2135868f958817444', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: 'e45a3473e4ef4f548526772ce17a76fa4b8d2f8068498d82d4a2ad97bd426c95', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: '7767abd888bcc9bd7669e88a7c6f506c4b663d27a7ed3cf8b108905eb702405c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '57d523a393d794316a5ee4197f7e608fa2db425c39a4e49cbc1fff4f7c138e4e', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '908194bc48b4e8a3df1a3379fd3be082580f91800105567236bd82993b9550e4', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'a4da75ecc3afbbe568344c46d1b536fd45c49ba01be32adb90026ef9dd688e97', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: '628ad9895e7e7cf1fddb0f897e76ab9e4ac09c9d1ea67fee0c05d515ca7e475b', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: '1a47cbe6074bdcccdd4a5c25820fa6ab5aab92d270f48ad35d23ca5baa665b89', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112438, hash: 'c9ce9c60471d9811c44481001ef6aede11df16adbc4308b38d0331f0c88eeadf', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103157, hash: 'eef77bee2ad4d25e300fd307a99612843b9debb2787679df104aee98f3623cff', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105835, hash: 'eb329a3455ce4dc08cee8b1177c0858c6b07fa9e517438abea14345e34c1a386', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102817, hash: '55e4d5884b8cdb1bf4a3e22b1aeb79079902be1fcee75c24371ee5daa6b57f60', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106730, hash: '30e5c5750ff4a169bd165d7a81f0aa8a1a2198805139066eed3f9514a0ee4939', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117999, hash: 'f92f29fbdfbc886bb4fd6f287495b38fd2f7cec1de4d93c54b02c2d58146b5bc', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93803, hash: '2793dd08663824b0c236d5107db23a413f45ac72c510a081091dcd8e9d42a04b', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106716, hash: 'd37427fe0da6a785934d0af5b44c1c93e3d1742f70fec0ebafa4a5908e854370', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94218, hash: '4e4fc99ad6bab22d3ccb301dd56abb7234e4966a9db1758f0d2f226ae0e7adfd', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93369, hash: 'ca06b2d417a5c7c7373401f3c851da3639a5d859f2e18e7093154b70a3ed0152', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: 'b366d308b7f0a59811435cc4ed85f4907e4eff732f220667ca7617e8a4dc496f', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '1b88548492e960827879a07e2e9abf43812e26311d38a7aa1922ec2f1febcb97', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104486, hash: '7658d5b0b38dad616a542a00c2b597bd5b2ca180a5265e5c42ca5510778c46b2', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94525, hash: '2ba0a96fab7796234e92df72f1b7d65568addc38c597e718beb03a27a50f0fbd', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94446, hash: 'bc5ee75b21d2537c5ec9528695c02f16c4896fc6db3e0d4d7cc522a4a5514c39', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111061, hash: 'bea81acdea97af039062f6ba437f20127a88dea776045897b158f217c9efeacf', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: '860419e164eba496246135fd4b4ca09839e63ab75fa3220505aec4d438cf0bab', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: 'b291eb6f6572625cbf3fa5710ec71ce8ca69ec166e31586e2da9d23e4ac3df4a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '932f5b1399a171d6d02d38d09e17c9e7f9e3510a4fcf8059f2e6793aa38c762e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '0a5dff837928c07264d7a362b962f9e24d25394a32e7fbf54373541f5207c11f', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '3369534b0e018faa967a82c633cca56166821f3e2c6f0a7a722d2c91ac5dc989', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: '077e1fa274fad792da45ac0bdadc3415de3f02b9adc6907d88e320efe11ed9da', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: '811feb9384286099c54e45efc618f817f5b9dc9a7c0df26b699844bc7b6287c7', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: '81585c9cd7935830b1f8470cfff65a18826981de075df5286b20143d0c2b397d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: '269fe253284e9bb69068b10f272c6020d836dd4fd7b9785d1b8aecfd9a1ede22', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
