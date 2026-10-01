
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
    'faq/index.html': {size: 78409, hash: 'df58374785097762ce9f8fcb72c399eb761ad4ab7039126b5c4245441c33883f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74194, hash: 'addd4490f477d4b9cbcc8213d6f885084413550b39ae823bd261b454f18be0f0', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73425, hash: '5fdd3f7d8b8eea305867e0f79c3b74d21949272500c091cdb630f368a15f0d61', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71535, hash: 'e0a7c0eb75ae49faa6d50cd8f43ba4cf3d648c2adfa27a12a28854469389f847', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106250, hash: 'd59b4d617a511020c4e712acf59e5f4e171ca6b7939af05c1713351a3761e341', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77037, hash: 'db22b69c77601fc8536c6989b9d27a2dfa7e14e032db608f343bdb319afbcf6a', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86366, hash: '238b5df1615137c30fa926870febca9eff591231749bf26bb97ad01c2cdced25', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64320, hash: '33931800d608111830b46a3db09a32b0c33f5518eb4aa1d4a4e790d33b875d7c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64290, hash: '5afb227231cd06da07a93e2d365aafbc1361113d495440254572755f67f26988', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77399, hash: '015a4208c3b3f384e86188822211c434a36e43fb34475cfb29aff182244b1d25', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 75100, hash: '84a82575e93941e71a8828215b56c624206daddda4479e62c1f975f4fc99aefb', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78488, hash: 'ef4f3a27ac5c48b69424eb852fd46afd3cb638710abb45c2543d5af50cd2a9a0', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117338, hash: '67f57372a38da3cf39af154e6443fdd7efb6a84f78860e8f6a794299ff4ea125', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113947, hash: 'c15800bddbcf14cb361a4cd78abe16c4078099590241df919aab494f2429d3ce', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120667, hash: 'e3c70bc4f0b7cabbc5787d1a0bfc95b6831b699bf3d6689537a347463fab256b', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120906, hash: '807fd518735310f1d2f9b1a8f4d11366b36212a9820d551dfc19bc430a8efab5', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100585, hash: '92f4723d2724f1a8f3d219b27048d7d73ae2c0987cf115618970e86495d3ac9b', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88639, hash: 'd3deb071c0723edaefa5e59051664a1e7de0808286f3a0f96cb2c62b13fdae53', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87863, hash: 'aaff4e26c6b82e7a08756a77de7aad072f1e4974a9a951eb89d398cc195296b8', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106720, hash: '4f1599bb982479b0762ca1c775d6b522d09d9ee72c9ae63a8568fa20fa8b8c18', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64304, hash: '69457098f23dd547954df9567a951506a8544a6658fb11cdc209a3e0eb922e48', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74267, hash: '2939465f6163841b6e50faeebaf82b0551e8f3ca970da60415d369be66e9e045', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73146, hash: '60703cccc89b8053e0935e89c732b44278a3b5c8cc4a7992a652edfb805cbc5f', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79253, hash: '7aef123cb2818aa004f1eebbebba7ff35c4baabcdf016d061e304fa8aafa602c', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89730, hash: '29e47c61582c094a68b7ed12c3d7a25c6d354d30d7c93709d27d7ebb2fa5ea40', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87795, hash: '53d91f5e3924394aec7ff76ad937fae2baeb1f512d42d57378e9059e4e68423e', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84687, hash: '519d8fefa091be7a7a206fe3e48b811c205629a06c34efbcf701d557d79ba933', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84464, hash: 'a70473d1cb20c21b628bb1948938b2747fafa2d40884d9aa4a95e48cb5069b0a', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120565, hash: '8cf9de61225dfcd4aeda5e3737a1e6c0b65c9d9655e5482af4f46ec5e5c94fd1', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117873, hash: '0fbd08b39f36ad483645c8f7b42ae91ea6faf2de74a2609e5f0e447efa2c9309', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114669, hash: '7ffdf971d60fb7f8aa0cdcf173f0fb1621e39148c0488f5eef4d9acc77f7a32b', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88561, hash: '1ed8787711b8cfcd7573996f1313ee4946a7cf002ccf9e8856e0bfcfedeee128', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82297, hash: 'e4f8c9114a1d8da6f2317394bc4af61296c58771aa16d16c2329626e6922b36a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85877, hash: '50ebdb14e50055f834dd5a4e0f2fdddfd56edd1a523e16b62404dc9711205f3b', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83893, hash: '849bff3939976d06bccd439400e0e7c73d61d8206bdd01bc9d728eabccd38c41', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97568, hash: '06073b0f8bb71b34a03cdc15083192ac770bfd98615571d324ab3177b8a50352', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97500, hash: '0c7864d8fa6f7fcf206de7735296aa3047d5fb4a8cd75a3fffe37ae672d10c5a', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100260, hash: 'c270abf626bde9c6751c26037b98ea9115e4219f24fea45cd5b32604facadaf5', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105102, hash: '08e1d9edecc8ee60539de7ec04bf4e9f37ce31fd26e03c9f49d3319b6a96b731', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65124, hash: '0c6b3153be00346b8e07b389aff5d2d455ed5fe14738776e16a687241465fa70', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67592, hash: '601f443994f5058ce7c79a39d54ab67bae89efae0e9ddb760826e1c7d892f444', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89371, hash: 'ccaeb6e893c73ea86eb3108c959453d5b39ef4f471f49d565267b2e269bddec5', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67152, hash: '421d7c9f146ccc6970267b744c9e3eec9094615f85473206f9399e29eeb86732', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109731, hash: '347e1932e38ff37e6c6511e9c7e427ba9cec693f3f38b71b3e52efb466af9e0c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
