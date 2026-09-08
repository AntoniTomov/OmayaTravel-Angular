
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
    "status": 404,
    "preload": [
      "chunk-CqWOUe7g.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Cn8Zslfl.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Cn8Zslfl.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BYlRp-YF.js",
      "chunk-C2vcVALJ.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E2gVR7QI.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfIla78L.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CqZZzl5f.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHzakq6r.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSPCYa0U.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGaEDZCv.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVwtpZG9.js",
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
      "chunk-DZUk7xV3.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZUk7xV3.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZUk7xV3.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZUk7xV3.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZUk7xV3.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CN6OdjnS.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CN6OdjnS.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CN6OdjnS.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CN6OdjnS.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CN6OdjnS.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DooIcbbU.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CN6OdjnS.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DooIcbbU.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iW-3Y0RC.js",
      "chunk-BAxVj4eK.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iW-3Y0RC.js",
      "chunk-BAxVj4eK.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iW-3Y0RC.js",
      "chunk-BAxVj4eK.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iW-3Y0RC.js",
      "chunk-BAxVj4eK.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iW-3Y0RC.js",
      "chunk-BAxVj4eK.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iW-3Y0RC.js",
      "chunk-BAxVj4eK.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iW-3Y0RC.js",
      "chunk-BAxVj4eK.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iW-3Y0RC.js",
      "chunk-BAxVj4eK.js",
      "chunk-DBi3jRC5.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BfaQaoFx.js",
      "chunk-C2vcVALJ.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BfaQaoFx.js",
      "chunk-C2vcVALJ.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BfaQaoFx.js",
      "chunk-C2vcVALJ.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BfaQaoFx.js",
      "chunk-C2vcVALJ.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BfaQaoFx.js",
      "chunk-C2vcVALJ.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BfaQaoFx.js",
      "chunk-C2vcVALJ.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BfaQaoFx.js",
      "chunk-C2vcVALJ.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BfaQaoFx.js",
      "chunk-C2vcVALJ.js"
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
    "status": 404,
    "preload": [
      "chunk-DIE0-hN6.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23699, hash: '124fe4027a8cafc244ab62a60c426b3942c2d4964525d667be4a1726e027cb06', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22724, hash: '2d9b6b3591cf55eda71958ab6ed589f150599e8b9a2c09e3e9ecca00caca535d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 103535, hash: '026d3487eb4a8c425bacafc89561439958fff19b316f58b1bf53cd13386d29eb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82834, hash: '1a113ee8f1c6c9f625e528f7e85e90ca80fc6d144e4d54794cc2c06bb0a9264d', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69142, hash: '42343a0d976116fb4aae4cf07fd31e53e6712e541ff33669b585c46821709120', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83033, hash: '015688a22501a8ca7167ffc38d4b79e8c984f771710b21a31943dcf5d2e487e6', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76293, hash: 'e54d8dab0c91b163634e7ab6d1780a9a1a60b77ed0dc7f270061467873b1f4c2', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 74873, hash: '790a0831936c00af7995ed3a19518be50900543ef2077baf1a472e4671f1dcb2', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76538, hash: '56e14ebca52ec56688180b86008772500aa8611f942d2865784433db76beed24', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 68884, hash: '5caee00050109b5a094f10bc80897ea5acea89be36779ad84d25ed5a3e176d5a', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82333, hash: '8866c030d37d94956fb1e73942b84a7c089ba72713067d79ff4fd4be28154852', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 77116, hash: 'd494d6345e44a5e930469822a46f20d5e60e9825c8abedc68b0f325f5858b906', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 79982, hash: 'fe4bbd689689489e407e16319e7286d745310622f6d300fc5d51d117b764e851', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82547, hash: 'd887b7672074bd1141a7e8c34be83029eff14d7bc19135e3bb0418f6d6c1693f', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78441, hash: '93e2c624f38be80af15410b1cba4118e3e8fde56985414e8d341be6573e44fe4', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75792, hash: '32e1bae2336c62b1c71c5ab235c0c1a9e9c095e1945dad6d3bebca0eb02ad72d', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84178, hash: '9b2cb6530b7be53de395553250069604ed8815986cef837f32b608b3b0f22fec', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107385, hash: '0b0581a2a8c5dfe0682b93ec5869ded6299ce791af0b0bb7ed2387bd1d270529', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117731, hash: '9388423ebfc2a95315e39da6bd9a1f57a458346c1d92c066dfbec3fabbf08781', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117915, hash: 'ae2261a49c6805cfba01bf639da71c552cb817bd3bde91de0aec033b1e786c64', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117774, hash: 'd88bea37d2c92c04c92044f946a51db5ced13bd545f32c485b535ef5dc0e28b7', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88004, hash: '1d90415eef71ba9c9b12a7aa9de33faca40ecda5ce410254f4b827cd23fc56e4', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87783, hash: '95b28b52f1adc8312a1f237c35e1c211295ae5467b3448add511122cc2d5dd54', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 104599, hash: '19b6be98a376c7c8e16fd585c6c2ae5b40203f20c890d995b185c57135742927', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 94417, hash: '1bfa2d783b94f481f61f7076216b17247b4be0a4fd350787c9b601f07f8d648b', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114061, hash: 'c76eda1ae0dbbde9d32ee47013c8e94556d73a444557cd835c67f7806be2e1a4', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108078, hash: 'eb7777aa89fd6e8f18b5ccaf106700efed53b7f94a143e5bafab359f452d2b6f', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87894, hash: 'd9397671de57934ce79bbe939c6661b3b7477597c19bbd0fea418348998be47e', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 86721, hash: 'd3ae5e97b5b6060fb4c469cace7049b5292390c95b52dbc2dc97e4c5734c4e3c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 89288, hash: '64a2e9804024d41e751b1f29309e6489f8576f79d9c924efab58e44438427787', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 86181, hash: '30abe9024a768144cd5f3cd76a69c48d80542ef13f7c7be32849f5f4438bdf25', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 85959, hash: '22bcc0820a6e35661c165f1924eddddfb2fddf8b39314d7b9134a13d2eb92b07', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72497, hash: '28708a9673127866fdb9af1c703e691b0d09588ca4ffa14b74668d539bf96161', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 82542, hash: 'da2601699c3db8d0248e3d2d196fe0a92a078a5e8598a4cc2e3043d9a7707108', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83929, hash: '7e117dfa5a0c4f3c38deb7bc1cbe21d9717514e0d79551ec6342f479345ac1c6', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98847, hash: 'a9cf845a332c0dda79554f259dab9a8379a16ad644cbe93d103c247772085c6c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91013, hash: '84a6e81971f1f1f2775efccca7126994a47d2fb95e82ae1ded6bd4ddde5c8fdf', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99156, hash: 'cb30ecdaf199237675f298944b258548ef3cc7c8af97eff444c094ccd448d593', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 103985, hash: '97edc69b655f1c5a62a132100019bdb97c448eb90519a32d0ff661b4ce1a8871', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67187, hash: 'c6cb2624a8b50c4a29607d3bc6f7595b4f3916f92882281b32b484916c3ddea8', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69199, hash: '50eb6f46221d706d8a2501e9a347c117ba77f79e1c386d8cba219540f27f500f', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 90658, hash: 'fcd6aa122396089523f9a6457955eed3e62337276868e7c2903947a1953cc817', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72072, hash: 'a54755994a81f037c0596effb95850c4862c7536f38fd291bd749cff0da5afff', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106829, hash: '8b52e857e44ab22853fbff08cf5ca58442f709e81f5b5aff90f01e452a14ec21', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113546, hash: 'fd265e7b19707984e400d68b45941025ea3e3e366bca8f32f39e94326c7cd785', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-7YCQRSU6.css': {size: 6523, hash: 'FeML6i+pYaw', text: () => import('./assets-chunks/styles-7YCQRSU6_css.mjs').then(m => m.default)}
  },
};
