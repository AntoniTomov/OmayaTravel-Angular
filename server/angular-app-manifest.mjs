
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
      "chunk-DZXcAAg1.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CHXbp873.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CHXbp873.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDbjDoT0.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DuRyF1cq.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7qGxzBYo.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2WwT26R.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTWHPARV.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1IraNvm.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dp6VBef4.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6rOCBo_.js",
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
      "chunk-BUDPHd9q.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUDPHd9q.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUDPHd9q.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUDPHd9q.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUDPHd9q.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWBPsC_G.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWBPsC_G.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWBPsC_G.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWBPsC_G.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWBPsC_G.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4tsztvV.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWBPsC_G.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4tsztvV.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BczrBwyH.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BczrBwyH.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BczrBwyH.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BczrBwyH.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BczrBwyH.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BczrBwyH.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BczrBwyH.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BczrBwyH.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BczrBwyH.js",
      "chunk-CphywAiA.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAP7gvbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-bijAMFnM.js",
      "chunk-B6eSn0qd.js",
      "chunk-DQmp4nrz.js"
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
      "chunk-Dz61_mDz.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '0b6cb42289510f24e0b496df443384ee8b57dd1653b93f308562cf1b461f4e42', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '60228d503e41e440cc292b5f703f0d979cc21299d08446c921c2f1ccf73c0377', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 106250, hash: 'd59b4d617a511020c4e712acf59e5f4e171ca6b7939af05c1713351a3761e341', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77037, hash: 'db22b69c77601fc8536c6989b9d27a2dfa7e14e032db608f343bdb319afbcf6a', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86366, hash: '238b5df1615137c30fa926870febca9eff591231749bf26bb97ad01c2cdced25', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64320, hash: '33931800d608111830b46a3db09a32b0c33f5518eb4aa1d4a4e790d33b875d7c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64290, hash: '5afb227231cd06da07a93e2d365aafbc1361113d495440254572755f67f26988', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77399, hash: '015a4208c3b3f384e86188822211c434a36e43fb34475cfb29aff182244b1d25', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 75100, hash: '84a82575e93941e71a8828215b56c624206daddda4479e62c1f975f4fc99aefb', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78488, hash: 'ef4f3a27ac5c48b69424eb852fd46afd3cb638710abb45c2543d5af50cd2a9a0', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78409, hash: 'df58374785097762ce9f8fcb72c399eb761ad4ab7039126b5c4245441c33883f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74194, hash: 'addd4490f477d4b9cbcc8213d6f885084413550b39ae823bd261b454f18be0f0', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73425, hash: '5fdd3f7d8b8eea305867e0f79c3b74d21949272500c091cdb630f368a15f0d61', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71535, hash: 'e0a7c0eb75ae49faa6d50cd8f43ba4cf3d648c2adfa27a12a28854469389f847', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117338, hash: '6c081087abef6e6f6233711a280c129e4a18e13573b87a5679697719ab4f8d3b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113947, hash: 'aabc8658a33c4670c3355f467e65677c10b94fb5752039fad4ada60481009a6c', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120667, hash: '763ce24c372fcf57b495d507310313dceb0740f2b5f22ab28bdc135284e097c6', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120906, hash: 'b092d077657334e0e90257d19772b9416c963e615de14903c115a9f6f2f30446', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100585, hash: '8bdc28ea771a0c5d7d15cf1de375023f057dd599e83ee78c431291e2df9a91b7', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88639, hash: '5e35036c906eb65c8047ed8f5e7ca3e47ece9e7fc9cbb3c4709fb4d6013c77fa', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87863, hash: 'e05caafbc22292a61e0c9f562d085a5721309f3295b07f7cd38935d06efddfa1', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106720, hash: '7e2dd88c71af5f874dcd7955dcfd617d6beaf70b0d46012df728ab9b184bfd36', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64304, hash: '425dca3c039a21bb429cb13586557c64223718200e3c0c3548fae7de9cc32909', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74267, hash: '00cb8f4466fbee915b4bf2cf04e8f494a6a942f30a2e85ca9c64a30fadfd7f00', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73146, hash: 'e230e14530d06362463a6ac57b781e8b1d51ccb2b1e51840b4b01777e4cd7727', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79253, hash: '85698da870ee4bf52ba4bd6201bc0e9c74cd315948672b7d5be26a8f5e78f0c1', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89730, hash: '6d892e13fa3806049ed59c6ba4e575303f846e7e94e60f3ffed87ac07c8ca15a', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87795, hash: '36156b485d3459d3144b1bdf42223a6e8a7168a82ff550b76a1ed3ecb2ccd6a9', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84687, hash: 'b0fd44785bac9012fd8df5e58a181c14f32e8d6bb4c5d5f436ebf69e6a0b7332', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84464, hash: '7d88dfb655779d765f3856dd3d8bbab7fb63d5bdb77d8709e7a7116a3dc6298c', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120553, hash: '7f9e612bff8778380b6a3b64bcfb32dbc8c49c05762712fbeeb32ffcab63428f', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117861, hash: '8c1434d17ddc729475e8862223181c6b3fe3522a0c036493ce0ee667be182218', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114656, hash: 'ce1fae493c3261ea67291a227c73c643dd40d117c4c78394702b5a15c4b11868', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88561, hash: 'eac03906491312491f6a7fc73bd83c1a8c65819b8328925ad3f6fd16717423f7', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82297, hash: '83a6d47fadfbd1a8f7cb7dcd9ef2d6cb62138cdabe6cb1af46957b7cbe2e80e2', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85877, hash: '3ba387dbbb479aaca2456292edbf3c427ab636214333fcd269afe430b69560d9', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83893, hash: 'fdf914ff3e10d9355b92cfad15e211e9c3c7fcda76d7727511f615eac4c17810', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97568, hash: '200442ffbb5710d130765f9accbd0344077c9620585caf54f4c89d312ed3981c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97551, hash: 'e128a05f21b450c685dc297bb0b37f84dfce5d8bee636b84ba342e39a56bfecb', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100307, hash: 'c65ebf612094efb54a9e15bb883adc988eac177d9f1f9fbbea9385f0dad6c5cd', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105181, hash: '872aac4fd96a5a89e4f6a335f99998f3676bce1ce029ef8397c5bf0e65336a75', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65124, hash: '21538d8b2712ee4a828b810527f74a026e5382f67c36b071357fca69a5b31b03', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67592, hash: '95a23d22d501affb2d891d1a58d78fee5f3e5833259b97806d358dad78907a48', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89371, hash: 'a91602307ef60c4febdd10866f1d9dddfd2415f7b4e0cebacfe917affd7ea541', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67152, hash: 'e2c75f6093ec1a71c1b216ea637cd520369b5fe668cb9a1ddf794a050acde579', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109719, hash: 'a8c5e947d95ebaf46b894a317ae77a666e4dcf15b807b413b00983986f58bd22', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
