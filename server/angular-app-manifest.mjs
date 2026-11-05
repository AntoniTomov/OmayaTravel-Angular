
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
    'destinations/index.html': {size: 81659, hash: 'a8376771d105c6f52bdfa24e3317764736651014d320caeff944e6c4eb92672f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: 'e03fdaed8d5e73765d8cc98a96c5b70c68a9c8c0418ee55b786a84add88fab25', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: '1bd32cef03d2f83b39f94014165d0c1e5d373eb8b965f69a91141293dc3ce133', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: 'eb87e96fa98c8ffc799835d9fc54651e1eccfa774a185c9f3d8045b53046599a', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: 'e381232494e47878a8aba6d8c69d8e154c2062db9bdb2ac981499415e21c490c', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111502, hash: '747a186dd4acc81c07859617db00a88861e96fa47812b82cc54c1280910d4932', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: 'd304c7346a8459401d6f78cb3663f2752fdfdb23f9aa4d74a2b73a225d8f787c', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 92915, hash: 'af4af235f2dde61cffad58bb4e58e0b65f2c0c60206427626e7162bfd15e7fc0', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: 'eb9d66b8182893436479de113036803d156961bb8575652d445bf6802ee85115', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: '1d193e03192fdaabeed7006523ed84cd865aee27fad5333be947d4f06c40af48', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: '7b0d5aff3b5788b76da4a747f37b56ceec9855874d9c3b7a91efe58329f4d6e0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: 'a89fd9e14d96042cf2567d58feb3f50c54953f7d73d2bf67f0edf5ca0a3b57d2', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124583, hash: '3a2f269ad9f37b2b396e2b46ca1923f40af0251e7dba3d42b356815c23d9feb2', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124225, hash: '21eef308d26f4760e3c2ade044dd7787da882b08daa0b3d0597adb606831c1a0', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: '51186e2461bf60a7f8a879223e8ce36772283751bd093acb521e3476fbd1a459', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: '51e80393d015e3a10f6346687583de1c10506eebc054da11e9337de6fc642c83', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: '9a8bafec5de6b27978c9fc56e727d2f3240f526c1f3f23a755cc8dd003603348', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: 'd2ace4c3daa96c92818bf19eba70be0deb7a27d2a5d85176d1bcc1d7fbeef37a', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103184, hash: '56609ddddda162a07498f208a0ac24d3dcd83b711a91d9941486973c87710662', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105508, hash: '2e18a3f3b418a83794a70b228eda6158e57f6c436ecb1c530de87e67df0dcd4e', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114272, hash: 'd8637ce5ea0a04a5f3062789fca8be0f3f4b996218cc85759f4f176c7b1ff2c9', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102578, hash: '8df818ce0df98fc6b28ee8f7c74d08ca10bdeb8337e85caab6262aa6f8579e49', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: 'e3acbc9c87e08c6c89fa9c0e3b418295c7f2396d6a4e41028f216380b2b72ae3', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: '38a9f82890f19dde36dfcab316ea407bdaa9c2d316882a7c38da9ffc57c4e43d', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: '778ae75b9222c656e23544ddc912268659e5ceabe27bb03f7d6ef76346a316e5', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94065, hash: 'd227196277e8f35c121a99c882902254beb10042c741d3a738b6aec6d53f9708', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70196, hash: '98e6205ae96dde56b37e25df0f6c6164db15fd0085829a33be148a50abf4b2ec', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118018, hash: '7c4253d4f906f04ff37d6fd6cbd594c43e338f551ca3efda8847d6e36bb72651', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93534, hash: 'e8dbeeb7adb9c93215352577d3b8fd2091ad3c20c8b571735a276ec5c0fc2da4', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106644, hash: '53a60c74796db7c790275033e73c105deaf785967e7fcce1c61355e0b75c295b', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94201, hash: 'c31bb748369e3f824e5f3da36b467d067d69dda14f489117f15955d2a88a6987', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93362, hash: '3ba821f944569be532e21bb0c8542eca22097dfbd5d8785513b018857f440cf1', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87191, hash: '04ce4d3f2fbbbc04db451606e254e5769be6bd1f655c480b7cf590e8bb1cf6cf', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81889, hash: 'd045a6c7248828f073ebf843ca920e2cc2d04565243981db0169c03d747549d7', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104479, hash: 'ebe19eb1144b69e78fd892bbe1a2126b642403098afc8ee07b504e5a16cb72bf', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94518, hash: 'c5d886618cc613e6913d6de2b78a66d8f546d4c144b66839eee64499f388497b', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94439, hash: 'fa680b75cb08079423959f866d984fafd6bf45c264ebc58bf8bd9ea51b4cfb14', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106504, hash: '921ce1b585a73ea59d8da18b1e6c186b91b42c74e8bfab3899b0e0936826e6f7', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111103, hash: '4b9e971fff58ee2befff721e0c2a3016762bf70dc566ef8cdec01cb778c5d3a4', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68228, hash: '5fcf356ed5819b3e80e400b59d5ab4044804cbcf79982112d41b07f8f5034333', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: '4643bba4e609084b0d37d00ee2d8a4edc6e71a6b10e1f6a108531d1934edb0cb', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: '5ecaa3ac5f9b0bed739465b61d244f172cdf8340bc2172cb262afdce4e719494', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118544, hash: '497b86b1044ead10e31d5e541e8f645824e3fe9054d45d178fea6a803cc7c39f', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121015, hash: '5b01258c3512824f1e714812d05e95641a79e62941a24941091d0855b21c147a', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119427, hash: '1fa2349e72ee62a53909fcc6dc4070369ebdf4de9f8a0c5490ecc16101197f1f', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118621, hash: '13a24a4f6abfd4b78193eb58c974a32a3f235aa8176613c9421e63d34883b88f', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124344, hash: 'ce6e697a402eb11fa1863c8e3788a01c730bf1568a03ee03aa2e7753b6e515c1', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
