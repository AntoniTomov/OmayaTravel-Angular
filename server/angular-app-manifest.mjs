
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
      "chunk-CJOXQesU.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DUhiSb5J.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUhiSb5J.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDUS7KoO.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkUsNksl.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFiqM6X4.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKi8U8KX.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-dkbRt7a9.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWVRr5lk.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KLQdwrEC.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-sUaHvc3c.js",
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
      "chunk-BWZTfPDt.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWZTfPDt.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWZTfPDt.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWZTfPDt.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWZTfPDt.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWZTfPDt.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWZTfPDt.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dt17aag_.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dt17aag_.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dt17aag_.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dt17aag_.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dt17aag_.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDnjkw_d.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dt17aag_.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDnjkw_d.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bawyp_c8.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-Bvv3qM8k.js",
      "chunk-DRYpkhbU.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFhrb9y7.js",
      "chunk-AOAuPnL9.js",
      "chunk-CqEFNGLw.js",
      "chunk-DRYpkhbU.js",
      "chunk-CBCYBOrC.js"
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
    'index.csr.html': {size: 16193, hash: '6c197687dfdfc99e594f786ac698cef43059412c1a4dffe81ef3fdcc85c324a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '6aa33fed563d6fcccee822a3a8293a85159b984a41086ffadfcf3df7e8fd3101', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: 'e87223a5c8fe41473398c7547d48dd9bc9df610e4b596d3b3381668ce0f4d674', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81829, hash: 'faa65524244792aa5eeeba8d331551e51d0e4a7fff0513e4bdc7eacc50a14686', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: '15e21aa2122c02b1191445bfc7409eeb4d58aae320204f11ab2274aa32b704da', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: '59c44bf0692d078761873906452d0cc74cc52fcc5b764c137dd8b8f8760874c3', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'e5d7741228674ed757fca524945d4f6c6d817ecacfe1a2abec23643339e5baff', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '06d50ed43e9126a54d803c0de1c7e8171694bbdc72abe1f68eebdab5380cab12', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76508, hash: 'b515754425d97af70724070e84d7248dd6010907c6ffa552726051d256b3ba60', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: 'f23ed609bd4145f57aaca3022a621834800a66d1e54ecffc5d54717c1b83f9c0', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: '8baeb9b5186a6bea1f4e8371209928bdcb1985eba9896494dbdb09daf6ed7908', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: 'b8072bf54848af3e9a1b77168b8fbcda1d30c6ad31c387259f8ba62df9c61dd6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111248, hash: '2d9134b423dc78a395e6b83e05f7412d01b55859f726742701f7af289aa79efd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '2293b5a8f3b29fa2af058d68c80ec97102f0e339bae079c0f75983380f60b61c', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91493, hash: 'df68f92aaca5978ffa031e51016cafb9dbe605884d2f5aaf90d8daa0c82ca482', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '6c28636667d1d0e22cd285f369817c199edb2e2a09947b4fe2e552e534635a1b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '96eb08fd6d90fe1b7977b48985a0a9c90673ec77b41ec197b990879f58fef6d0', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '0592fda7f4354fda9aeeefbe8b94308e5ea7c50ab75cd20b7ebb9c31554c08b7', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124026, hash: 'dc8792b38d4ae03945a948a26991a44a7a245dc4e418b7e654b4a228f2fea08d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123668, hash: 'a06574b916e30d37e61171fe0fa9ff516c61e4509424267524bb1856595f94c2', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120976, hash: '3fbf689c33542f653109c3ba5acece30af0862e52698c1594b2ba0d7df23f150', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122529, hash: 'b1935efd3a803a806cb1c5ce618448dc827eca730dea20b34af701dd890736a3', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117767, hash: '2bcb3bec663129ce81bf580cb6ce239c8594ed6745ec2f0e5d00041225ce104c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110859, hash: '4d739f7fcb4f09bc83e5fea48fd9020c6500eaeb64b98b13e05c1003d6997b1c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101600, hash: '0973c109e65f0c0442c1ed1ad675a46d30c075c25f961dd2b9fb921ff585633e', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104194, hash: '10fdfe2c4534616574d7e79701331820eba755d6d8f40e3dff48554c6a715d42', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101166, hash: 'ce9c87bc70e45141d5cd0ef818b22e053bed21c3fd8f87a1bc807ae1db483b21', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106162, hash: '405f447a01286cfa30388942885fedec9e659ef8bf3e2493df4df8973a21af71', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87770, hash: '3c627218d7d1735608d3511e37ad1b6e2142830789500f4a2fdd5155bb02dcfb', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87547, hash: '774f927f7fdb4bcc068687d21a9bf07105e9294c315fa3399354d38cc4e570e7', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '539358f4b29e5144636faaabb770dccc435c247dfc2433ec20dceb0d3c871adc', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 93658, hash: '435d8bfe3b45c56e8bd10d049044dad1b468c3da77a28095d3f59b258f2d8706', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70227, hash: '0c8f22ec27f77ed74d1f6d2a3c9c754ded131cea5d238eacaf0b7078f2107eea', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117489, hash: 'e2ec89c1e23d256b7395c640e90c40ddeb30adf879ce3aa7fa90736d85637de5', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92368, hash: '13a09a39db11f9d56ff7b88ec2648cd112988fbe85e16ffcc1d3bf2f6bff7f07', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104831, hash: '8cdfb47800a6d0b0f25883e823d041ac83c4cbb3e597d8e954736e82e4b73f5c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92729, hash: 'f0b77eb83c434ca62743287a0a9c984c5b701a1eacea6b0b0862a5a5a3a49758', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91934, hash: '1b873ad3fc56ed46808cfb5c9d7b103894b6fbe3327c9c2294d5cf4e2487dc51', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '54885870ba62cc072b39ff68b216a8555834cf93aa834c3686038d78d422fc62', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '9ddd92d5f3446c891b1b2e986b5b41d31f699b1c81d39a8e855d2b4258087609', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104074, hash: '51238e2e0a5909757c886cba88933f11ea041b47be727618210a955580aa284d', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94305, hash: 'e26842f3dc04797a68bc5d8928a45ac3f822d2dec2f972f23b472f98c5991f37', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94032, hash: 'a2ab6c804f6c4ab5e1e7592b71852e8d09136d1081cf3db6e92867a33df8d3bf', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109289, hash: '85e525fdedd096fad7ddbddb141079767d4e5980677846a3086072d5ad87bb2c', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: 'c7bdc879a89aee36c8bfc55305cecade4172552841626da6396ede502a5f3a47', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67387, hash: '06c394c538abb153b5aadd4433dfa8b5f238bba5dd10729b858ff59df6bfb087', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '9feb52852a06fe7cc294cae5944953e1c0e5398c92ea20e651d60c2fafe1dcf9', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '0a11426b6c7b7a368fc7ae3039734e0744e25d1d93905dc51330098ebce21873', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113828, hash: 'f4cc4b60e02ebe0c865897bf5b20c0357ba449e3fbbc972585c8b05ca38dde25', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120458, hash: '2aa68293bb8fbf3fb8fac3a5afb9a0cf89274e94a3a468c769d5beb532f429c7', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118870, hash: '51ad99a621faa9966b176463515f586acb88ce717426d90c4489643a5859a190', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118064, hash: '36332908e64de7b0a5613ce68201074476343fe7276e460d3151c625f863cf71', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123787, hash: '7805b35c0c0707a805e1311bc4b5e0874da1f243b0b8064c3f38d9d85709265b', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
