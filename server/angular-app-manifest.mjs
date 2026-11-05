
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
      "chunk-Dr63NhsN.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-btUzXQFZ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-btUzXQFZ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cFwkqLQ_.js",
      "chunk-VlD_QSxC.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGKjsWRs.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Boi0HaQ5.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JttR6s6Q.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BauwbpLu.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFzQutMK.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cq5esDsw.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Djv_k9R2.js",
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
      "chunk-Do5xCBSf.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Do5xCBSf.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Do5xCBSf.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Do5xCBSf.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Do5xCBSf.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Do5xCBSf.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Do5xCBSf.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iATAqbMb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iATAqbMb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iATAqbMb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iATAqbMb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iATAqbMb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxbQYgJT.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iATAqbMb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxbQYgJT.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CxoIzegO.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js",
      "chunk-G_ARzy9l.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGYnyPt5.js",
      "chunk-VlD_QSxC.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yVATEdsB.js",
      "chunk-BWbrlDzM.js"
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
    'index.csr.html': {size: 16193, hash: 'bc68489918f96864bbb1e13ba619b92a1feba8851a551a0a6f988cf47518062c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'ff6bf22c1f7d71d2f0cc772271cbd1ededa0df1d60eb092611f78e51f161642b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77298, hash: 'ee3210fb227d6a8857a351141e2111bb58a6fae4704192207d08baee8c487ea5', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76721, hash: '83e50de8227336a9cc1cfd938bb519e03a24b51fa9f2942bb6e3258d5434e7bf', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74639, hash: 'b83579ba6346d183ba06d9f5f49e0d5e9e502b3c57399584410049559d52a081', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67394, hash: '5d6f5fea0d982a2f614675e9b21e0092652ffc7b271e89ea154a249ed846e360', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80503, hash: '6882e3c289c67baf601fdcaa02692e1b85ccad07cf15689e71f7163cb2fc3fe6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111502, hash: '747a186dd4acc81c07859617db00a88861e96fa47812b82cc54c1280910d4932', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: 'd304c7346a8459401d6f78cb3663f2752fdfdb23f9aa4d74a2b73a225d8f787c', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 92915, hash: 'af4af235f2dde61cffad58bb4e58e0b65f2c0c60206427626e7162bfd15e7fc0', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: 'eb9d66b8182893436479de113036803d156961bb8575652d445bf6802ee85115', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: '1d193e03192fdaabeed7006523ed84cd865aee27fad5333be947d4f06c40af48', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81659, hash: 'a8376771d105c6f52bdfa24e3317764736651014d320caeff944e6c4eb92672f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: 'e03fdaed8d5e73765d8cc98a96c5b70c68a9c8c0418ee55b786a84add88fab25', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: '1bd32cef03d2f83b39f94014165d0c1e5d373eb8b965f69a91141293dc3ce133', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: 'eb87e96fa98c8ffc799835d9fc54651e1eccfa774a185c9f3d8045b53046599a', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: 'e381232494e47878a8aba6d8c69d8e154c2062db9bdb2ac981499415e21c490c', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: 'b8776492d8597bbc53056d0ef87f35fb7c30125bb8f13446608fc49a895ca822', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: 'adb271407c9b51d6f723cf63323aa999d1079aad19d060ed6337f160761f937d', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: 'b5ba0083df8900d8cfa60892fd0fc75c06504765c7923731729c5194cb56c18e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103184, hash: '4f22dbb4c2e1f91390eb63f0aa1bb5d29efd438ee3d50c56a026b91678eb2d0f', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105508, hash: '3a8122869d9ab89d3aa85f59e20910fb42902edac4970eb5d752e2c8b88c87f4', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114272, hash: '0a5e6db8e8953c840881488502b170f74d82490ae712b162a939eee43bae5f3c', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102578, hash: '4cff46a8cf6eda2dc8b7f4f171c2b193f69d4f66b67dfdf6699bc853b8e711cf', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124583, hash: '3a2f269ad9f37b2b396e2b46ca1923f40af0251e7dba3d42b356815c23d9feb2', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124225, hash: '21eef308d26f4760e3c2ade044dd7787da882b08daa0b3d0597adb606831c1a0', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: '51186e2461bf60a7f8a879223e8ce36772283751bd093acb521e3476fbd1a459', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: '51e80393d015e3a10f6346687583de1c10506eebc054da11e9337de6fc642c83', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: '9a8bafec5de6b27978c9fc56e727d2f3240f526c1f3f23a755cc8dd003603348', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: '2c4c7c48a0719db8499e0b5c18be3e9b7df4b9bda76a683331cab7a20561fa88', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: 'b2e7987cbd1bac803d7f68e8baada17fd495c8e09f451b8170e8805169f105e7', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: '9ffa1b399460ba02136ad2a15e02d0b0c42b56861b246766902b7e7ed6129c92', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94065, hash: '8bfdfc57c9ca347b24956318f20c0e5068cf6318b8d99217acc7eb865bcbb055', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70196, hash: '08408e3c90fc349f22c0334d9e9a40d44e408041514acfa00943f412aa982624', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118061, hash: 'abcd5dacf5a10a37b9b63e9585616317939e1b9c27cbc2242302e42afc25425e', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93506, hash: '9fd9ce29860586bc7b5589fac13d24c7c798ea7abb9d0702af5052cae7c4ef2e', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106581, hash: '3d4a8d9e87f66ffc7078721dd946458be628d6461260985048c0b23c3a5e8ec4', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94167, hash: '1ecbdc4bf39934110e7aa6f24ca2a0fc88789b8fc94b3140f6e4346a18b1bc42', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93334, hash: '7ab7dfba883ab1d519f1d0467d77f4f357b3e72da20e63f608a4d75540eb582c', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106491, hash: '9e581e69f11fc26e7517215c9895123f32f9352dcd8c07ac1c8772308198eb35', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111084, hash: '4890f9938ed7c7eac61abac9695dbc8ca20c859ee1e449689f518269342733fc', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68224, hash: '0eda677af63cbb4e91fc67dc751f7f682db13eebb9ed003fc008685261fe4543', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: 'd660f0308d7726f7914784f05de7b2f1db754c318f5d21888258976bebc6a146', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: '909cfebdcb2847b1de1de708bc7a740cd27235d6508c30b979187f50531596bb', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87191, hash: 'fe4592060e91db138f5554cfaaa4cd217e4bb6aa7a8b2c0b7ac78b9eb7e597a5', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81889, hash: 'cb7fc4b5e247cfe726e6ed58871d16943452b3bed76c9a73b4cdd5324e6e4866', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104496, hash: 'a76dfd540e77b5b2c4a7897a67176ef218e128ad0fd4db070f126e71cc83f6a1', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94528, hash: '07a26d9166532690f2f55026dd71f13700e000b508cebcd9f7e1efb1e7ca8e8a', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94449, hash: 'c7101185379361a7a894f408537b5d28846a7ebe2eb3df5c25d118260e22cbcc', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118590, hash: '69b405a2751705f58d03898c9b9882d200809e053f301db1dd521cc11c1e8789', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121078, hash: '5420dbd0f65b21837298a0fc12a6417abbc256df5d7f1a2b3d82099a99cc8f2c', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119469, hash: '53a50fea1217ef304c8156b705be49b7acfef177c97b1a115194cd9f86a04aa8', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118677, hash: 'b0155cc129afd35a6fb0f131ee3254825f9bc298ff054ad9b80fa9debfd6dac5', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124401, hash: '6addcd85d45903929e4c34be3dd9e4244607fbe75e07096b69060034e628f52c', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
