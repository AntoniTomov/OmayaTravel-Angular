
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
      "chunk-Bq_P58sE.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DiflX0wH.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiflX0wH.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OVdOMLun.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLkaYt9q.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7OZcCa7.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHuJ__Yh.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKTXsj8p.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bh-YYquO.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TEorJmAP.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1EQ1O5PW.js",
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
      "chunk-BK0pK_k9.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BK0pK_k9.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BK0pK_k9.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BK0pK_k9.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BK0pK_k9.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BK0pK_k9.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BK0pK_k9.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-bf02acwX.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-bf02acwX.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-bf02acwX.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-bf02acwX.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-bf02acwX.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BajTsD5F.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-bf02acwX.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BajTsD5F.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D6-lbPyB.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-ZMEQGhck.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w5xplKyg.js",
      "chunk-CrGqB-OV.js",
      "chunk-26wFY1if.js",
      "chunk-B43suYWx.js",
      "chunk-FBBlqwkH.js"
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
    'index.csr.html': {size: 16193, hash: '1183bf1c02cc9a782d381d31b470fcf28a559bf2fc737369e7468b27ea67de32', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '3830b65b1bf14ac73a630aa760f7aa7332f21ec926f39888034100d2c19e6905', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: '33eee13b120995489d90d4c3598cedc5db9f1ab49c52d4ce313bef5e1671dea1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: 'b9fac7d4a221ab68c07426d6eb1a6402ebd814e23829d16297c883e80da45fa6', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '3746bccdaec56fcb20bf8b806b59465ffb701f86e3c7c8f396c1bc4dda52c7da', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '941a55fc7330699c4a5451866a82c3b12849ad8f010e797223377eccf9627d1f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '350ad78d63a5b708526502e11195575fed41508d38906a6cc44be9c80c6e9834', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '54a1290a468c33f8dc01254c2db45c320fc9f1594a09908b10d98148eaa55e6e', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: 'e08607180044b1f634daa4b8aa5e7c689734ff49ebfa4c5e3ae838d7695254e4', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: 'e25a7b9dc0118463f10a0f2b9a29fb89a21e032ac4ec7aa1d07d37928dd6c2ba', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'e39b932411dff2e4b55d5f93eb10c90857cce9a0c96edc53ff8d0ed31bdc8d9e', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '41e83e7b903a2305783056b61e35fe83a9a75df63d701a6f8a98cc5ee5553c40', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '7697fc1499cdc7af8b16dd9447e99b7a9378aec9b5ef538809bf37ed6a71403f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: 'fe59c9a3286601414b9f2a2028c257f40a198b50270d127ad2b07f886f50f8c4', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: 'cdc7ca755f9c59c259c56579b0986d1bf15ad71ceb73d022f47744bbb3ccd0b5', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: '97e16c857b99297784c863a4e439453885ffb42c1841b451e33258faee518893', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: '2315d9a2f146b4580564df6cd1b3d1d94c19fc86d48422287a643e28dca17758', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '765a574863a211efd388e053dcda3ff7c5a987688645be9bc8283c3a47e2a3d7', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: 'a2289bd3a4e67ad52b0850ad6c7b8963aeba0f4d6c98679fa36b0c170cb1cf9e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: 'e3766e9d10f11759b9ed4ab9d53c5d8e66725b312fb3e0dff2abab504a0f9f22', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: '76e8346eacbbe745a54c0c5ddecda441274479346fb9f137f2431b9eaab970e0', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: '74610677265299a8558aa2ecd5cb2d53909fc86f8d453a2aa2322acbfd035813', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: 'c887e55f1353e223117051304d42ee044355a734bef433c62d50979285b17f7e', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: 'af8e522b5218c9bdc02dbf77f703581245ba4569780e0e7a66dc5ac7640259cf', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: '51c152e014a2921d64ea266ed4134fbda5e8a9c9fbf9052a6322a40240edc11a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: 'a5dba0b1193279f5e3d002ba1577f1d9f67a2a4638e41320d907640f60195f0a', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: '13cc1d4c8e7b2468b6c764c951ba6d8f54d6801ceba29e641030843d285fcc5f', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: '2221a68cfafcf3c69d619a2d888920b7ff096ffc32f710f585b6912385f30b0c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: 'f253f119632c9cad0a459b8a936e81248e6010b88df4e12c325e567b7a17870f', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '586bfd593d40e10839b9a7b15766e2e43299e09da80a9391b410cf617ad041a6', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'ec92cd30f3188e12a903202b22e8b929860ad3e3398d8f77e5b696e17c8ff4e5', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: '4744aa96d64e4adf13cb7bd7899f7b41399ad7d70ca4b6237897e0849d215208', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'a0c64f787668ccfe22ba6282df2ef661c1670b13cb68955a700199e059a90975', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118012, hash: 'fe9e03dcf0ebdf53bc36575b98ef31e16d8767ebd3d5666339d83bae303b010e', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92588, hash: '5411e8a72dc9e45b5d1a174667fb361bd943f7080307aec282eb10700ab18ecc', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105051, hash: '2b548baf306ea96734c8b13842ecd3ae77aa5d705d835c5a9a150a92c509cca4', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92949, hash: '4cfcf948becb344c9fd1dbafd809237d060b9140f52594a49143e0a8b0ddd7f1', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92154, hash: '858a41405f0852be6623d85940beb4c885a57f73a308921f84eee913a684acd7', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87185, hash: 'c5d013f5443a3b759661484a8631e4e7353d676eee03870062d775a91f4d5cbd', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81880, hash: '78dd7496696bbe27d87a5095682775c1d32f77f768e652901a2065a3f81d6fd4', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104507, hash: '297f2f67c6296453877639fb1a6acc0b4ee1a0ded977abf24276ef771affdf4e', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94538, hash: 'c616d5ed9bdc88719b267d7a482ed56cf5d9400bee8e92e0abda821c4b929929', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94459, hash: 'c70e05f50722513b278ceb2faed253530a62e2fcbfe39a2e8cbab93f2cc3b3fc', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109496, hash: '049c96f483f74a260304b426344166388e23611809ac273e70b783310b10e4e6', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: '890efd001df0192ea4f9aa7929695850a16763d5460584bbc4d4f8ef795c1a9c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: '2d83e7b8739e216f4a21b2775879caa560e1f4bdb2ea6fec12d2ed76f4d26ed1', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: 'ac231914af8b999dd008aba1054d337fe8cf26ff4a7a15fe49a7a96aa72e3a83', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '2e537874fb5161aec280e3525dec2986b578c214751a396356fc5833f3ca35cb', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118329, hash: 'cb2cff56b2730911aa0e0ae2723f7479a34eb9e93d990d8c343f39b2fd3b1ebd', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121015, hash: 'f5d1f7b6cb3beb1ac8f88d73e534e7391f03a18f7c4419e9be0b3b7f37ccbf1b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119421, hash: 'a77f99c4396997c2d10c87a9b14bbae9e88e9df2b109ea8b7b165c55d441951f', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118623, hash: 'b474f08a6781697787930b84f3187f35285bbece47683140ec5156a68fb74024', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124341, hash: '86a19c59931b6d3d116f536564e2d947ff215ebe3f7bde6b891f4a433f33854e', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
