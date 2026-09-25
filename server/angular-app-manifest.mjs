
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
    'faq/index.html': {size: 77935, hash: '47dfaeb4a1e2880f12b5577b7d71626342b2ae4e3d7058404b821a50fff79a74', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '9137b842a84df32d24ef841ad1ba20996e40dd4dc56a95397f9f399cbb736a5a', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '399d0defeef845e80ddfe0043a83aacf0e6119df3593049f0eb6a0804a045069', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '4c082ba3e70113d31e0568eebacff861622f8a57c781e78aab1c940503d663fa', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '72b6162040117e5447d012bc49ee9c5e8d27d8e026db411dde6eff77d156b4ac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: 'e9e7cd021ba56880afcf43599c411a4d0bf99241cf39b73c909eda8fc1b0c6da', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '6c51bf2092c1379086fe3f90a313a9c708b78e8c5e5518c8465dfacc28115b4c', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '0ad8cabdd54d98d24ec01f4c449a039102e10fa4855139dbd0064f1839744b95', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: 'cfc94fcc15f5ad2e413897581346b0eaa6ef142aa27b37165aeeb8772b4f8887', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: 'b518495f7bd7cf1f52b8000ff4ef5a5997f649d23acbab074c7958c68153ecb6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74626, hash: '11bd2dd887bd0063fa46c6ca3407615304465880b2fb275184614e971f5f937d', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78014, hash: '399035f2672a50dbf67dda5ba7fdc71867fe7e3dc96bf4f45a1d1e6650df1aed', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116864, hash: '7f61af00d8356c5b8d88b6f647e31312c20bd1f666fbfc9f93e1c0c3ac635f71', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113473, hash: '7012e08518d3fcc099483ed38f03e50a32513ea8243770e706a6c9effce50a3d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120193, hash: 'b3b44b1193bddab9021fa17c08545903b6124c7b6da905f5158840987abe77b9', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120432, hash: 'a9401c4c5cb7e6b36e982198b9d8263c97e748b9ba210ed3aaa4263d857bc7bd', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100111, hash: 'e31f4dcb452f6c92333bb57293516cbf91ead0efe365f6033eb67562589722db', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88165, hash: 'ac0ff4994ce121304d69d0e434da8100a332587620acca4f3ce14bffabd52466', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87389, hash: 'b4768c7a8eee7d24944e32f4e8bc723bfed0e575217d76e93b5180330a3f6a64', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106246, hash: '2596ea1ec42ad6df5037ddfacd249d856a0a6b3710a2d0e479ca65d3b456a397', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'a60b2858f07c935bcaa133155bc76502e1c1b2138b53ec439d9259855d783554', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: 'b6d547a0a9fee0d07b267981076402a3e20f65cc3dd6701404293dbfbf96ead1', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '917b33e21cdd95c1cfd9e205fd240d50ec8e2729efd9875104ee2e4d4f7ee951', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '8853a1e04b7ec09c6e486fdfe213933d435c636ace83e9e53d682c0f0fb30cbe', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89256, hash: '6cca0a5aa58ab6415ec9f772bacb51aa704ed742406fe799b1eed1a19a0ac418', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87321, hash: '0f4e1e40d6dd504be05379a02b6949a0780ddb4b7bcfca1e6090f4a646ff29da', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84213, hash: 'fa3b12b8fac09a9d58e96e913e295c1564d11686ad03b07b6331e13f82394ab2', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83990, hash: '091f69abc08bbc1281ed314a0d256db5533641fbb7b3b75ea84cddbc80b34a43', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120091, hash: 'e29360599e4a5b2c2c7fee530f924433c8c733cb6e20e7d0a49c42bcb470244a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117399, hash: '29b72d7eb5be4a3853798d5ba75b29b3e33711215569a6ee3c900b7bccd63d6c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114195, hash: '19fc3a01f4a814fd7d57737e51b04b67d0e5dd06804486734933418a83045274', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88087, hash: '64e2a2e55f2ce91b8863cb18848eb880c29d9ab1b0cb90f6cec414f9431ca098', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 81823, hash: 'b2dc3f7f3055fd413a14d6149c69c689c91a21d51e98ce7e3b9c182193daf699', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85403, hash: '0689fc36c12f416f5ef907d0aabdecd2e6ec56d11b5e2db2b528915baf4c08b1', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83419, hash: '0a3a4f1291ebdca3b05d5fc1d4ceaea43a48d7f31db21cf6e12ebe6d81593e22', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97094, hash: '0f3f9f041f5fcc33ccd24f2ae1f690228540c0cbda77ff6b34e1edeaa804c35e', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97026, hash: '39f53f23694c4432917fc5aa064533d91d9685ef847443b450743cea80447bd1', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99786, hash: '2f846dbe90466030984e9f21063234260c6192195167981ae8bdb3950e789afd', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104628, hash: '3942173656a1e94a1e94b0b780990a1ab26d22b21599b9bf75a7b48f03c54054', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: '1b5ba52a3f7be95f421563ee1de137c47b4bcc4063a9e2106e850fc74df9059c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67118, hash: '7d4592ecc232551c061729462f141a5518aacb01c1f87a9bb19262615afa8b29', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88897, hash: '7a3fae7ffdef2d7bfa957ff27329e72a5af2524a9083c98654372bf86e0543ea', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66678, hash: '5e9fc567d8afe3bbc691b1357ec66cd13667afb461e4ee1543cde66413f93db7', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109257, hash: '710327aa67ce50f493606d215511bd6afe88121a3fec7b6d276f28b0155dd13b', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
