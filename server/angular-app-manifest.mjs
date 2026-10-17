
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
    'index.html': {size: 110894, hash: 'af2b117585237fb9fe4be0f7012517dbe05f0fb2043056f3964bcbc20907d1f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 79754, hash: 'd19d8f241a96ec589827ca9a05763af5a7a6864c9a099ff65f0dee927af25adf', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 90105, hash: '7a07b511b867bcb2fbcca4cf84bd956b0b415991d05b016da16eecee0fb66a9f', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67037, hash: '1955b81b8f1d443ec485d5996d24806c1b086374e99c1a3e261888fb86ae9e9c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67007, hash: 'ec00d5e80b2d6992e1eae38ae8e215b2095aa77ab02c5eda7f7b0fa82e07ff20', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80116, hash: 'ed23a9774796e28d887af81a2f40e1b03b5e0c32e2a9d00fe1cd54f64aa8b326', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79317, hash: 'de7ef1d5dd3963c92e8bb3193cc0f73234c4885518bd880e0b789bf5f2f20da0', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81361, hash: '7cb2a0cfe960b0cac0c996f6f3c78a7e03dc6af75586ef681d309ddbcf10d16f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81126, hash: '0032106681b2b1c42bbc922324f876e40394d308e5c9e8dd6f8e86fc80ee3aca', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76911, hash: '3b706bbe6ae8df38d12d63ef05c2132ba7e8244147f701ca8d2777ed872f4ae9', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76142, hash: 'a80738848419599059c9004c9d27bd7829f8234eeb3cbb8b17f1641cc5c4e228', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74252, hash: 'bf72bcfeb76aaaff985fda44dd6acfe24c6eb1d8b9d57a51a0cf10863c4c4e4b', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113462, hash: '651b6060b696b66eb060e1bba345727d01286cb96101adebd0db6936841b632f', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120092, hash: 'b8a1df8f2625789765d35da6f1587daf5ee3141affdbc0c457e7fe7d556905ed', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118504, hash: 'd8de3f2673beda6ff0ef3f9608815648efa3977b5e2ce34ce0daa80eb1dcb89d', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 117698, hash: '7d594940522e889516371dad44e3db7d1568b8201b90ecadd0a08c62e0e74ac2', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 100793, hash: '9c84c180821ed142870ef768cceb7565c60136e324b7303915e3fa25447ef4c8', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 108849, hash: '50ae86f31de7fece124f215bdb4563106588af0235aa8696d501f725fedda55f', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67837, hash: '142c85ec21a5cc2ce7d6c0b20be43d50c48af5561708afd9e8ca759ff5db16c3', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67021, hash: '2317fe02c55f259a8a1065c54c5123c4ac43b6681ed866672f26ae562db73840', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117401, hash: '5e7525ff19c4f6c79decd12b3887e17681573ac36ad0361616c2f40e5c8e21c3', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92243, hash: 'aa18ede972f70e1411d4aa32f7a94e23902d48c635342b0288ead928687ac631', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104417, hash: '68ecf00b088751bb60c5d0b749c8078190e4a2e018578e0c70b62d5a67514c5d', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92313, hash: 'df489ff0d2d7c52e0af279f4574b8fbf8c38606556fbfa6ed7dab2c627dee452', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85106, hash: '24a196f3d2938593804404bc53a082887f44e12b7c2e29ab90b3b3ce2f151448', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 81114, hash: '3638761e0dcdd6cbad62cdb30f4b2df99b851fba265f33797e2de4f698e2d3e5', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 88686, hash: 'fbf0cf28713f5ce1293ded4cce1bd9579e1c1872b92741a1cdd37a1d1eeee1fa', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86708, hash: 'a6950ec050db76f8c224f932a75b79dce3bbfa813992286403b3d5954b675d22', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87181, hash: '4120e7a65fcb9b5baef776ba5b9fb4f9ff02f8eb027e7e3a82d3bc6752780089', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70274, hash: '889447a34265d465297ae6a2b46818a6d4d1421fd26137f433c2aea88956f149', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 92068, hash: 'ae6e720d0fe365349f243a5dd473a57aa4682ed476686429927718e997469d53', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69861, hash: 'abdd1aac6194079aa29540d64811a4c51171747d8e339946ee1a95b733d06a36', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91516, hash: '68fdb0439c93e000f1b91d1eb5f5bd12a843521e87a25d54b17a01f86b3b68aa', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110447, hash: 'b573d8f51c856b7821b7e9782e813dd2af17cf221f15405b875bc11154c55cb6', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101173, hash: 'b0037f5cc4d49056ea655d1430d907223bc6c68573d942c99bdc4072e2d608ae', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104099, hash: 'e961d3b6598721cb55aa8d04bda2de32b1401fb2edb4b3b8ac2980fa424c7567', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 101390, hash: '620eecbb75c84a7534c5fdd288ef68e969d7eb01a09f36dc7274274d101902d7', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 93952, hash: 'cfbea5d976959dfc91a7fb82791eb36744f07d919c7a2df9427cfef2234a5025', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 90525, hash: '30c0154b37d0d11636aade5c50c78a2420591a430ec159860720676079517dad', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87417, hash: '9644ff0cbea13902f3c8b144257dc1c4e99b6550e76aeb83efcb30a886a2b1a3', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 76984, hash: 'a676e1ea908c37967d25b27fcf7d7a8f84d4ad9a1ebbe7d695577de8ed1dc575', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75863, hash: '7f446f4d4b3f80fec5450611572ac098d2c4060235241d3a7fe64a0bdf1a39ac', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 81970, hash: '320f95cab93f401399302276b1b3b1244b7921ca813196771ee933ee31c55916', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123421, hash: 'cefdd5af3b8f22b017e6623d84a7e8ef20eb2595f06671a9f00b13320cb975fb', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 123660, hash: 'f3d96df9e5a5d35bf56ae39eb989a2a02e3ece72d7d0dbee14253c8a9f4cf6d6', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123302, hash: 'e5318674d190b3349d2c6b29b80ec17d02e5c15e0938b11bf8d9a4ebd682105a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120610, hash: '00dd8c0ae2ebc18ad365ab6a51c1875b0745e929f7bec9c0cf082ad413f09d98', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
