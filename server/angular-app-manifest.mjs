
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
      "chunk-k1tBaUln.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CcPG8A_R.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CcPG8A_R.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnpqfpIi.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DgKyBQ9s.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-LGWiYD.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGueWXKS.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtjudNO6.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BgWsFzNt.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlDkInO7.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXN_Bg7X.js",
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
      "chunk-DT5ZxczC.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT5ZxczC.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT5ZxczC.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT5ZxczC.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT5ZxczC.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT5ZxczC.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DT5ZxczC.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YibOpUnF.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YibOpUnF.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YibOpUnF.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YibOpUnF.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YibOpUnF.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGHoofnV.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YibOpUnF.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGHoofnV.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DenkeObT.js",
      "chunk-CCXgqNZp.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Blrs7kLc.js",
      "chunk-CcMAHSoL.js",
      "chunk-DREB4jP9.js",
      "chunk-CC-yLpge.js",
      "chunk-BKo2TK3H.js"
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
    'index.csr.html': {size: 16193, hash: 'c31b8278b0482c9b38492a193c1aca02163ff782706270c1841734cae460b6a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '40b1cae7b90d25d953bfffddb57f170b71a0438e3242c8d7051ef6902932e91b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: 'd093123588aa1ed376818a291976aaa4b563390334d6cf2c72e5a681890a0dd5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '959e7cf3d4ab359d2020d26533bfd87c6c121d97490e5eeb9f007bbb0d9697ff', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '4a2abad6cce7f541803ab47ef0ae8bb8bce4847499d327fd7c8c2296be4a4903', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: 'cb68948871f2a0451ac9be17dbb1f6fffa4a87e1cf8c4163762dfcb65309437f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '59660a6584b8ea8ad4d9447ec2ff0a322440f928600383d599e4f42bb81f6da6', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '22c6a1295d82af20d4412649a1fa08d032e092b0de09e47f0f5000c7f8b24cdd', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: '6750c25aeee3dec0b770931eba9b588d8d118fde761f573253b87855c04f013b', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '3c155c2e04beb596cd40393693a43ad06caa2839d4aea23e14c5ad8be54a118c', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'd53b86c0bc8767535c35146b97cb9547c5b1e1f21c0c7af4766ed913a08276be', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '64b49b166c8bd44290071bc1e60902886aed14f61e800c2dfe66474ee57a2aa4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '28782c17bdfbe0c9919fee5e8018aa9bfcb228e82618109455cfdf90e312ebaa', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: 'fea0bddf570fc062a4d5c8fbbc905417c819a5771900808a6c57bc23ab7cc5c2', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: 'bf510a1518904c949e6a95b74a5e4b961b8a324694f92dab5190e5e430b05f85', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'af948174b5afddeb04317387d1081533b1c7db900e02e7d0a9592660d078ea3c', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: '52c592921ccbeecccbce0381c02521ff59ceabad31cda78e1e9340980b166e71', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '1e6437837402794988b9c2b60762a8b30b53d58cb61f4b01b0495bdb18e40a88', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: '1e07e9f0211b2472cbcfc23b85eda413601fe8bd2e8df2f88f862e91935ffbe3', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: '73f39f04e0d9100d116d1f7c19a975e9448b3a79d90460387acb6d150af1aa69', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: '82b101d9b4b6a79c138b1374f232872deffc1b7b1ecf756e1e5577c1c4c2b02d', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: 'edf47ceaaa078ccddbcb20aee58dc5f5234a7eb61de5fb212093ba567c4e373f', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: '33379c53bb050f97f11276a62e8e6ffb3db5adcb70b5ebed9fdca0264c548234', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '1d0511e308cac7a3619827d2c26e77ce9802d771084b19be7cde776d53455ffd', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '9107b4e8bb8a2fc8ab0160df674d932dfba66615c8b35b17dc77f5e6c8508598', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'e3b2c859b8a2bb3c90eabccae57abc6c3f4460cac7294388a64c26384e6a3fee', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: '5715a6af64205fd97d6cfdc71f7859324a9a163e17d31c829562f808b7199b1a', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: '21305ac9ed77910afa847fd2710ffa67090d3cf5bd22afdac43188a83aa7e307', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: '3742eb24f6521bcda1085e7da581bc1a08483cb9e4bb5dfd7c2647829a2cbbbe', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: 'ce950aee9c2cda4e34a601301c62f2a173bb2b2d485bc17d7223f90d9f07138c', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: '6f66ae746bac6fe2c261c7622513e2ef10826a44b160fe83b0b8141e9775a4f5', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: '96f9d08674e9ba8a24dc25fab30deefdc8a4697e754859a49c9218af222d59ea', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: 'bdae5ee2f906e2a3069f4e6cd1c3fa33e924048a0ec3b115ef517b6ad5be597b', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117999, hash: '42af851d0a3321df2f246db620661f3b0d21467aa2d5fc491cbf3fafe883fe93', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92640, hash: 'c4e423d879a2f394103d85217d03ee1f46cee2eba56c1d7f3cda5ed4448d14f0', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105189, hash: 'd806354ae4fd8783df0b809d60d7002169e1a7e6937cb245fc4a250b59dbd4b4', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 93015, hash: 'dae6479ef64d5142d885758f89389e2cec7170f845d9406773be94f699af35d5', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92206, hash: 'ec3c99fdc195174ed2f33dd0f296fb078f789b4830368b9e934caefd6c37060a', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '09aa9b44075030d927a00cbae43010667f2e565095c93a1a4e3c240c3873ab05', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: 'f916d1653e5dec09e7c52570e5cb4b7c7cdc61e18cdab61b00cee404afda05b5', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104486, hash: 'e27583a8dc880853fd1537bc972019d56cfa09a53353c57bb7a619f37984b438', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94525, hash: 'c6c4f8b2bd5e040027c13c5864f3c0f9874eeb58b0a787b654a6de151c5ebe62', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94446, hash: '9ff8b4430cb839af921a3116f0ccaa9595a19634c68df11559466d148479a351', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109496, hash: '67c71eecbd49ce0464a9cc810c8bfff61cbff6fd8b8c9489080fbef29a013b97', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: 'b9644ccaf08a15fd0f8278be9b6b39d718bb196408cea5110cdfd85d18d49119', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: '48ccdd9be8edcc99a9a806d0f5e0bc9227c2715bc400f01842d2b75fbf7f816e', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '52e280e59ceb9a5ef43dd4d1c094c1facf90be043a3acc6acb9e242f1ae0010b', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '17da317bd64328762c5e7c1a7979bbfdd130c799b5b4376056db4fbc69136fba', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '998de07ecb88c4d236c77ae75a1c0de31d9b1c1745e07ae9e2e74078cb7217d4', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: '8e3b642d26be6ffbbc5b706781d93c91cb41b65d7df7ea2aa208adab5d1e45f2', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: 'b929a3bfe9b6edbfdfcca2716feed06bc8d9305d7235cbc131a03401fd91547d', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: '92ab34b47a942ce7da88c64d7d2a8ea125e31f62be0701718e9829dc202cce1d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: '2364201b0da76e67d79aa5cd646ec6ad541fc388affbe7be25d9b009e29ad21e', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
