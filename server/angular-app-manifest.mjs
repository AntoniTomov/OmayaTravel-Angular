
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
      "chunk-BLMtb5wM.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-N1mfUASO.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-N1mfUASO.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdW5Ahz3.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bc9V9FBP.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPQ1b0BK.js"
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
      "chunk-CRjKyFl9.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyatoUKn.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoaZOz9c.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLUJUCwV.js",
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
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bac7X6Jk.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DF0SiT76.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmKSjir9.js",
      "chunk-RMFxIAFU.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DF0SiT76.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY6Kr3X4.js",
      "chunk-RMFxIAFU.js",
      "chunk-E1cgZUdN.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdvsHDJl.js",
      "chunk-CMdYjDSZ.js"
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
    'index.csr.html': {size: 23699, hash: '249cb52b6cc2ef657aca95723cec20151e517bdacac329f220cc3de291ea53e2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22724, hash: 'a8d5aac404439e637f1f40ccd376ed933f294403b0fe6f10e63147253f64865d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76293, hash: '17ad2987a26f3c839ac50164d48458d072b8293400f26d338582c568601a3c94', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 74873, hash: '6b4cc15a10121315e539011a06d027599a485a87a631cea87425089a1766a57b', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76538, hash: '7bb4eb32b1992ba31fb828451aa778c67f40436c68c1d06d24446371b00271fb', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 68884, hash: '124b177d4e9c590bfaee56a65523e7f998973ab8d15ee55e1413de92f582d3d4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82333, hash: 'd768e018011631a75a21cbd730b9d791661e1f5ccca625e825d1110b3549f7f1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 77594, hash: 'ac8719a7f3dc11e6a58332052616a845546273edf42971f4dd77462010735d3f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80294, hash: '0bdb0609ddd933d35134a71818eb9b2e7f47d95151512eaf4db9331f34a8afe1', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 83025, hash: 'e7a71af51c8a1d9235adc2710724cf835c6165faeb49398b6fdd0385f1ebd164', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103533, hash: '9819b763903ebe58b892cf7c9564f5b76b1987ca9c46747d66b40c803bf0cb44', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82834, hash: '2af258828bef613a64bafcd2d81d8af5bb887e48145c05afab93bc5515eb4b2a', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69142, hash: '96907ad28912cce2c86fa59767af84070ed0e700e6a17edd07d2de1ac3503d9a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83033, hash: '8aa57d1726d96bca7d8e1a0db33331c852d461670bf29caa4943bb30c3e816c1', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78441, hash: '46c7f2d91e5d7e2216edaf82b083e3229c51d61266ecb2a56db75f91d01d02ff', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75792, hash: '31bf0c066344c7fe12c1218077fe25ccd8d570bc9bbaae38cde03fff1d18a494', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84178, hash: '62619dd2c90e5552065b6d77711e69c4983235b4826dde366d0831f3ea98ac16', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107624, hash: 'cbf10fcb8a79b5b9624b8eb12fcf872e744f9ff95f45be10e2a7720636496fc5', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117854, hash: '53dc9af793aad1dd7e9dfc10160b6ebdd7b0d31c09452aaf28dd72de8f7e52d9', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117927, hash: '2d65008ae8e18904da997cbc506bd067de110308ea097ae863018d3dcbcf4efd', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117786, hash: 'a2a312207caabc2517ca3185de712eb1af8f37e733d8eae474931a0f05835e84', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88006, hash: '59a11fcf4e261f0297b3f9d730042188b1dc9070bc388706475b8f1ec76e9f73', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87785, hash: '22065039393443d4d131236f67ac538ab27767ff60557967ce0ea33253142ec0', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 104601, hash: 'a26e6bfbcefd61d5b0d7624463db0f160b4cd980216193420776a7e29b324551', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 94419, hash: '243b1420ea4d02be12e3a7640d6e7ff055b361935c42dc817175ab6458257cfa', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 89011, hash: 'deb2e9391a66355ee7c3ce6199fc0d22bd048f1b3867e6f0a78d175216fa5636', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 85935, hash: 'd8eb5db86f832e770045a92a0292cd1ff2a77bba32a128ceadb2126553a20fe8', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 85712, hash: '72e4a375453a5eb2989af68bd2f298b9e2aea3e81db861d58569b3f1c72a8ea3', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72497, hash: 'bc255f980985422b94833f27f29fa6970cf0a8d880cad4324d74c5664cad4e30', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114073, hash: 'be59ebbcdb3c049611740c28d9aadf0360209fd63e6a4c7f12c673963854a4a4', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108316, hash: '5f4fc4c627310a5ee7740d262ad741f2c807203c6f5d5bf2e25aa5c64386056b', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87892, hash: '6f7c770b3c8e1c49f85cb0a7c472217f7df521429394802de3bf5109f2ee0245', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 86719, hash: '733c07afcb8fcdc41d529b08c8b15c80a1ee8373b458b2e5df38f59f1b09ee09', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 82969, hash: 'b3e48dd70bf4ccb187b4c17f236faf8974f2db40cc5c7b27b26b0ae9b2f46ff6', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84409, hash: '892eab8f6cd77407ed2e0e39c308cfc4070eeb6a046af21fcc28f37ccb4a29f6', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98487, hash: '9c515b42a5142b6df102c52e93d80c8a65d4b82e2d7049ea38a857c4667cb207', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 90722, hash: 'c3866f5e9249fabdd0be5272a1eb47b81c3708e468c328fdfb702e97094325aa', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99156, hash: 'a940f97518fdc7e3cbde4cf225919458684ae25244b5b4bd2bc3d2841f9addef', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 103985, hash: '71515c701350c617891e6163000abb7f708b27a94fe5febae65c63ce59463458', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67187, hash: '18f805ed811aab2bc4c06fb9e4e88f6afaf7915a34f5f6a765320222a4b60f51', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69199, hash: 'e6f965791c9a95339c65f76826b3a3cf0adbffc596626f5429f2d882194224a0', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 90391, hash: '2a6d78a4d7dfe70d959a47e691a401be3b80c2b3f2c9bcb32e2ac6453b12a2a0', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72070, hash: '0b459af85b1b0b41a00f6a626256318a1f7fb5cc8e1c74a60bd9d5dcc3979dcc', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106841, hash: '9bd44db4d0843b79e511fa6e7770fee4f53489a146e0bfad9a16708f5d05df8e', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113669, hash: 'ce8abdcfc90e2c3770c9bc73403fdd5f77c0f1f009f34f6ac819622a63500174', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-7YCQRSU6.css': {size: 6523, hash: 'FeML6i+pYaw', text: () => import('./assets-chunks/styles-7YCQRSU6_css.mjs').then(m => m.default)}
  },
};
