
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
      "chunk-D0RVuPbc.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BW-GUYmZ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BW-GUYmZ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GXzNIE0F.js",
      "chunk-BuiFb0du.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVkOQER3.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jDUjIW.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DOH-sp7q.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHk-Wax5.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK7W-BPN.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-udNuYM.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-c7anFcs7.js",
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
      "chunk-DLqd-KAg.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLqd-KAg.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLqd-KAg.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLqd-KAg.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLqd-KAg.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLqd-KAg.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CucmNWiI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CucmNWiI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CucmNWiI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CucmNWiI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CucmNWiI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BG2HrP99.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CucmNWiI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BG2HrP99.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CgX6i8Ag.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-QwuwnTy-.js",
      "chunk-Dy35fFvB.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0Uti4m9.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-zRetSuRB.js",
      "chunk-BuiFb0du.js",
      "chunk-QwuwnTy-.js"
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
      "chunk-Bw8nrRqC.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'ac96a7d5ea5f8b9ba4e3e0ca187bf9f95291eccda65e51f937ee8c322776e294', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '81aa38ec2a0b2ce2c3bc398cc011dd6e269513305a8b9f5a42c8c6e29ffda6b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81126, hash: '0032106681b2b1c42bbc922324f876e40394d308e5c9e8dd6f8e86fc80ee3aca', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76911, hash: '3b706bbe6ae8df38d12d63ef05c2132ba7e8244147f701ca8d2777ed872f4ae9', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76142, hash: 'a80738848419599059c9004c9d27bd7829f8234eeb3cbb8b17f1641cc5c4e228', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74252, hash: 'bf72bcfeb76aaaff985fda44dd6acfe24c6eb1d8b9d57a51a0cf10863c4c4e4b', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 110894, hash: 'af2b117585237fb9fe4be0f7012517dbe05f0fb2043056f3964bcbc20907d1f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 79754, hash: 'd19d8f241a96ec589827ca9a05763af5a7a6864c9a099ff65f0dee927af25adf', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 90105, hash: '7a07b511b867bcb2fbcca4cf84bd956b0b415991d05b016da16eecee0fb66a9f', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67037, hash: '1955b81b8f1d443ec485d5996d24806c1b086374e99c1a3e261888fb86ae9e9c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67007, hash: 'ec00d5e80b2d6992e1eae38ae8e215b2095aa77ab02c5eda7f7b0fa82e07ff20', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80116, hash: 'ed23a9774796e28d887af81a2f40e1b03b5e0c32e2a9d00fe1cd54f64aa8b326', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79317, hash: 'de7ef1d5dd3963c92e8bb3193cc0f73234c4885518bd880e0b789bf5f2f20da0', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81361, hash: '7cb2a0cfe960b0cac0c996f6f3c78a7e03dc6af75586ef681d309ddbcf10d16f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117401, hash: 'f1daf992414b5a753f67725d6c06caf4cb525b3fa9c4ce7112113b4d159293f9', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92262, hash: '8e68351711a09ad1c311061db02c7b8327504f1f01d58889a30ca605e94bac0d', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104468, hash: 'a764b6a9f062807073965f83f9a8182728362f78952cef14369545b8f384260c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92336, hash: '1e80a4ff43442e3f9fdfe4854f44d861c874899017d809cdfd6f694df5559f06', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113462, hash: 'e5f3730592f429de021c6dd78dd0755176350390dbb06c60c44cb1f6d27dc1cc', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120092, hash: '3a859fd11fe5d0bb252f070b78b02f020fa733d55c8858fb997638a462020a68', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118504, hash: '7271930809cc6a9c3033002f70b485eca2b72d62b7f15c8544c950a84629f301', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 117698, hash: 'ce1e891b12190c223c3b3a6228ee232fdf9d0cd60effa7368cd20cd23afcc211', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 100793, hash: 'd8ac06901f9b35606538a57eb711f9feaa523aaf6650a3744ac0e6f95b0e1b8c', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 108849, hash: '898ae80a064ce5dfbd90f3440dd477316db223911e15074d6db123a2e701297d', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67837, hash: 'e80f51c1551b5f2b9a6745b16e78a7b4c8a58201ca71a533752d8eb4bb962b84', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67021, hash: '74221f6cbbc17c6d488eed9f170c01ee0f52301f14b964fc29d2246126bb7603', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85125, hash: '0d38ac20df5e2b8f566a906d2d30859babe2255e66c24f5cf5827a6b56dd8730', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 81133, hash: 'f84719878b41704fbbfaf2ba19ef8914527e7d2f0de9b1b74bc90f4e99f15e78', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 88713, hash: '9e4f5e27467bfa77024bdc2fa9db8a3ffe1f9d254aee1e4e3c5a2799b2b7c684', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86730, hash: '64fdb6a492ffc3ed088ad807d455e7b3d36fff707973af0be65d8866de0d8999', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87181, hash: '48dfaa7992b104e206b81f1a1c02ccc09b7938a2ab5c940f21dd17ba9a84d6f8', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70274, hash: '96bcbedac451157c30e074c2cdc4e668efa071d005e1b7a72bcbd6c36b86d174', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 92068, hash: 'c82f2030e48e5fde14a68469fb1b32e260b698bcb36d32e6db56858fcd311a6f', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69861, hash: '844be621430a97714aa57076436e0042d8113d6997f8737d9c1bac04b580287a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91507, hash: '7d0a9eedd616150a4e6a9c19a4d40df12d1376535daa7a94cef3059b21df593e', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110432, hash: '21b345a5fed307e260de5b1ebdc9a3aae0a1ffba11d19c54fad7562a8e5f260b', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101156, hash: '64b43249514fb494f6e7cf2352fabcbbdf8b485b5c21be571d0477a5234612d9', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104090, hash: '997d6aef6ca07ff441451fbcf5e7c90ad454dd28e8147c1f756b7727009ab76d', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 101390, hash: 'da86cca91ff89dcb8488bb5a3bed68a34e9d0bb373a7c1fef161244e26754ef7', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 93952, hash: 'e9936f8c5b014046c61b1decd3c74d3c496b9569dfc173e06536bb71c134d2f3', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 90525, hash: 'ecdf2a931076526ca47b834c87abc1359d8a4b110711f34a46f31149bf54cc2c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87417, hash: 'a1bb4da6d2ed0b559fa0516b8c768ed432865a599a3b8d63f2032406ade66a3c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77123, hash: 'a4d65e0c1be985204eebd43d4740b555eeadf4b899674238ce615accc18bc287', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75976, hash: '852d1abae30625f80825800349fd80e7675da8cd7f786efd74fa9d04f8438e58', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82060, hash: 'fd1511fd0cf9b36e2a17ddee3fe21278b2d6ae8b61396eebf675bbfe6e74866c', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123460, hash: '1a5646e5f366ab675f24027f0773db5c65e0c090b3b834edea0e6d536b96606c', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 123699, hash: 'ed3cc0f016cac21b0ca486a0b6599f551f0e5264e825f381fd36756819915223', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123341, hash: '7c8ad6f500e70298b8d05ef425a3cd28f1e98d00ec3697e7ed8b0ae4d6999b79', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120659, hash: '77f2c9ad0e343cc9249d349d2844f64bb2eaebf828f4c0d60b7c18f1fe0e123c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
