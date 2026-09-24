
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
      "chunk-t-Huvfjg.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DbM_snhM.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbM_snhM.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bcl5wsED.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E3NfGkk-.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKwqMY6Z.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiPDOBJE.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-fk99liCj.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bt6uwaz_.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKz4t0cV.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9NzZEGW.js",
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
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkttPA0L.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CndOaXNE.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcToSbPm.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CndOaXNE.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-baFUcHek.js",
      "chunk-kQgnROKV.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dmij69Tm.js",
      "chunk-BgSEpQ7Y.js"
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
      "chunk-oM0jm2oO.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'b20c6344022e90e4758e4b8dcf5848a22e0654e1b3649250808674cb8fb31ac6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '2728c63f461ff827f58e1d46e2d4aef885916cccc4883ce66dbe1b49833b6bbc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '0f08882c921ddc3a34d7194952e045a8e0571bb17e5d4745ec9fd5b084b0f319', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '92d0c03a2012c37ffa07dc886867f6175c7d6eb17644cd080e62866ba425ed85', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: 'b7d32db6195cd6f6863e156318c2cad176c6f8d7ac2abd8bd4398689594c93d7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: 'e3b26e29affdbee94e219ca4193d738d4f4ded15cb1b8b63047a1e670324fa72', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '8f2cfcce094debe1e8358ab2e1dcff1367209248aaef82ffa81014538bcde4e2', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '1de7c298b92497088a1a89b0560faf54e2f5ccde5b862c9e1999dc1f99956c6d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: '8440b89cc70b0f244c3c146063627bfaa5fd32efe6c24e5412a5c2c86c156dde', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75969, hash: '599df009f11aefc765191fbfe2433ee163b6d0cbfced0a9720e0f45995ce8e3f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: '1a432ecd4bc24b71ca8628ce805c7419fd42b51338d935d7c5c9fa78cdbb31a0', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '854457fc1c1b0c0a7ca4f7fea60ae157f8db39093762c5ff53d3502ce9a904e4', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: 'f4dd462f94b880a67e3e202f3666c177cba27d64b1ae0854cd538c892bbcfba0', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '18b61aa40b899a022ae820e12fd4aa48a28203d51222d97f5a2b879b2ebf1470', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114775, hash: 'c065f49318b588ce4f6a139847ee1215b4527cb7ef4259910a71f305c9da4f33', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108251, hash: 'a66694e144101b2475719d96be9b0eadefb5f7c335653f18a452ed441c1a1473', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118104, hash: '2a9421050f649858de75ada9a01b8c76708f51f8040252d9741bb62e7fd9ec99', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118343, hash: 'f0f96cf49075ae7f484986db3deb900ffe73e2a0f187b6facfc0676ba71b3123', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'd27ba09c294e82340c802f101e46543a61154542d0608368c1afb054a63e445a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '39ae5242703238733bf7a037cfefe525a6b97f8dad6cf754e99ab497c467d8eb', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '3effe7d64ddbcb227de25f72c19ef2130a7f5c1ed5247d72989c41f34597d3f0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '76524fb3f4f948ba5df5a6bb7758d8a7718571b7a64bc7946bfa23b67d0292b1', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '92950d54b5971a25e6c18c38a33720d78318f76a6f75b74997fdf873a323a0a5', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: '23baa871cbee82bdd6777a6fac4979d297f8579b9f4f46de199e8000a765be45', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: 'c44034747acf5da384dabf790c51c6cfd2661b89bb29161787bb343b6392d3b3', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '98b86cebe0b54ca1607ab08cfb2d3da3110dd7a365305c051c300daedb63170b', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '3ca0b2a7263d12e81e16d0e745674075a7b2a49aca7c644c76c763079f423fc0', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: 'c3203696ba811de9c59b08a38fe39895df526ecaa54bfdb7b637a5c19d7ac724', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '40010cc712d2e08cfabafcfd04bfe3a3e4613b1e325815becd3daccd13839b2d', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '3884234efefd48f45aa90ea57d7c8a5452849695247c410c1acc9d7aefc287df', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79778, hash: '6f1a4758c8d8f6ff1c833696c395560561c53a6c31c496bada06151d3b6ba9b6', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80225, hash: '1d524317d95142349cce43e4738689653ebbf91ce880fba886dfc50e6d820ebb', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81374, hash: '57914ad4ea51164cbe20cf68fa7bb5a4483d5c3c9d710374d027fbd1030c90aa', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: '46dd34160c349a4c9e29e22747cd801475379516834cba1a7d93bbb673f2415c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117985, hash: '7c8115ecb69e54602e22f140d483afc3282a0d0fea073bff37c61de1f150f2a9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115293, hash: '51977fe241f855f260da7fcf0f86bdbd76e58a38302e417f721cd5c8429e133e', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108951, hash: '99de714e5c209d3fe872c903d9da79f1a67e6a7f5d9e8d525d63181ad4f1e10f', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87949, hash: '768582857a0e2a228c573cf4e30afbcfec4453734b26893888e57f454efbbaab', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66996, hash: '3f0082d2a48186669df0905a634012bf44d5afdfb409b4a378c37b25af3ed4cd', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88773, hash: '0d2d49de701ef277ba2491d1647d133207ac9cf3eab15ce1687170c7a7119193', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: 'e821abd6c1a6ddee241103048db79346fce46b548f0cee9059ec46a535afe11e', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107173, hash: '76f68a0dcebb877f8cea6c83fb50be6be86a09b7a3fa2061798cc3737b2c7934', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96891, hash: '02c1c27d0ebb1419b8d9c17ac0465ed5d261b984262215b98279c1e639b90883', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99646, hash: '02b75b35d77d4c1b8d918bbb06868e6ca85da372f0ef6c41db2087b6bbd8916c', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104500, hash: 'a6a9a29d6e88549b67eac7571528c4797d73c4a900d3568861010375fd036f0a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: '5e0782e4337263b2b51796a0da8c81cb09efd9c35bb0197959a6077e5786da1f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
