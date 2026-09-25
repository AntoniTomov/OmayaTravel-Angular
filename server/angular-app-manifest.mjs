
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
      "chunk-yBIG1__P.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-v1JS6mqQ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-v1JS6mqQ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz4vEzyp.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ch_GX_PD.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R4gt8LSG.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPTUkC0P.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Do8PnyfL.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B0_NSoR2.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Je-EQdYQ.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DetvitYk.js",
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
      "chunk-XuQQKNHZ.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XuQQKNHZ.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XuQQKNHZ.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XuQQKNHZ.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XuQQKNHZ.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dzt3m8T4.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dzt3m8T4.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dzt3m8T4.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dzt3m8T4.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dzt3m8T4.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlRhO7tn.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dzt3m8T4.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlRhO7tn.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g0QChS4V.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g0QChS4V.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g0QChS4V.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g0QChS4V.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g0QChS4V.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g0QChS4V.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g0QChS4V.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g0QChS4V.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-g0QChS4V.js",
      "chunk-C6vP0YbQ.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsGK2Qpq.js",
      "chunk-B8-iGRfS.js",
      "chunk-CYxFojTX.js",
      "chunk-DkrsFS68.js",
      "chunk-CMfpXYwb.js"
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
    'index.csr.html': {size: 16193, hash: '52ec0a107c357fe142e21222c8ea1d84e4bda470c28202b442b604e7a0020eb5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'd766e8fa11cb2b75e67b1703acf85c16623c0571ca5ae060a6d36ff8ccc72c8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '72b6162040117e5447d012bc49ee9c5e8d27d8e026db411dde6eff77d156b4ac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: 'e9e7cd021ba56880afcf43599c411a4d0bf99241cf39b73c909eda8fc1b0c6da', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '6c51bf2092c1379086fe3f90a313a9c708b78e8c5e5518c8465dfacc28115b4c', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '0ad8cabdd54d98d24ec01f4c449a039102e10fa4855139dbd0064f1839744b95', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: 'cfc94fcc15f5ad2e413897581346b0eaa6ef142aa27b37165aeeb8772b4f8887', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: 'b518495f7bd7cf1f52b8000ff4ef5a5997f649d23acbab074c7958c68153ecb6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74626, hash: '11bd2dd887bd0063fa46c6ca3407615304465880b2fb275184614e971f5f937d', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78014, hash: '399035f2672a50dbf67dda5ba7fdc71867fe7e3dc96bf4f45a1d1e6650df1aed', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: '47dfaeb4a1e2880f12b5577b7d71626342b2ae4e3d7058404b821a50fff79a74', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '9137b842a84df32d24ef841ad1ba20996e40dd4dc56a95397f9f399cbb736a5a', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '399d0defeef845e80ddfe0043a83aacf0e6119df3593049f0eb6a0804a045069', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '4c082ba3e70113d31e0568eebacff861622f8a57c781e78aab1c940503d663fa', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116864, hash: '7e66029c7aec2c3546bcfd0ca9b1c13a22e1ccc58430b2891565e14efe358152', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113473, hash: 'f9e37b40a7cce9e44f8121018002fcd5c9a4c3e7c9142e5e7603a0e7f1509514', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120193, hash: 'bfc353cd1cb589dce2bb7228dcdce6d225fa9ce48019c7a17936e824a7d7060e', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120432, hash: '29545b1fa4687a037e4ba778357438593f3188b8ea29a2a18138c86a9c04a227', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100111, hash: '799ddccb3fede9b37a4aaa9f79644d181b895048599c70f01812c7cb54c49a6e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88165, hash: 'ba8be19a03416386e29519c4058c5975ccc07439de4d0daca87d5bc96666151f', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87389, hash: 'be53683689bb5dc2f1bd55856355aa0e5bd3d301f294dd9d5003094b6fe91bc2', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106246, hash: '39c5715340c1a8b06093a965291824c5be658bc052398073c35d5e2abf4e9d80', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: '6a6103e11e8aed56b6fdfd77d6c2f29f1bf76b07b653f2c0da9c30907fe8d909', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '3a1f44cff284c8ab1dce5179fd0fe70e9ba75efabd280d6c5c3247f548f61d2c', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '4a3994fcc43fa2647c6f62e6e71123015c5c80065b2a69fac7eb1cf5af886d08', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '2eb1010a65c5eb1e9298067d4010324e09f946a9b13d16a891b659ec505a8d86', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89256, hash: '64b48c4ef8377edb9061820b5073830659e78e71c458792249f7e8c1dda45b59', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87321, hash: '2b27d3b302f9821112177e6fb9d94e0a331048cb1dc32aaaf34d4726bb1a7d36', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84213, hash: '83c25c8226fe1a67befe7e6d4d304c42bee8270d24755a907730d681397ea7db', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83990, hash: '8436d91d51be041b1fce7d6c61bc7a22b925333196b37b9ae6dacdd6f56a7f89', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120079, hash: '6d5eb0ffce62b052ca8dabf07d324b1f2c82f0af8b22c7abfcca6ac6f3d82992', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117387, hash: '9db8af0957e092b8e2f83319e8dd8b19a55342251d4f53fc798714b02d27fa9d', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114182, hash: '58e7c606b7eed0ef9b4723f7b87dee19ce8ff4ba40a934c6c24799b7b40fc433', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88087, hash: '4b0ab679bf96cb510b925f8b14eebf545c077b169bacc692028bb863e327b338', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 81823, hash: '0ca40792acf94fbf10607de1cf27649d0ab52e7c2ab747ade77ee4cc841f418c', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85403, hash: '916ee66a4c71dc0b519689a46fc82fe55c8186c376ff791aa4b89549a4e6b015', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83419, hash: '71c72e5e944ce6d544bbaf791bc8732da8efec9e7a846e86276f58b89e20600a', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97094, hash: 'c6b5b039b112d078a956b3bcf95108166bb6f55bf45351fec536d74b8fd34c2c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97077, hash: '719892c62c3a962122d2bf0ad92e9c92187d8a2b58f179082854281d0ae965f0', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99833, hash: '94c14291e49efa5963e5fd91ea9107696c3dd5ee5a81d9226f7b29998d48ff31', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104707, hash: 'f247d35c9a4d92250715eef6aca75c622a37192f07f376fa7e6311d913995489', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: '89825f6da7ea1601a73c830d6d17b29229be06d842bfbb75a8ba433d1843ae71', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67118, hash: '97ff2b674da87e0e7c123c09ccb797b0cf11e179bbc7c68665c15790a8994119', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88897, hash: 'a1c53fa40859a7187f962720f24fdf300ed05c56c657b6e827266f164d7358e2', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66678, hash: '152850e67fef2d2ec45027f94ac21d7d080c492b96506dd8c6cc5e888b4db8b7', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109245, hash: '5a68b168f7bc3a57a83ae6270542b4a4c0ab31107d6358d2617331dfef13c202', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
