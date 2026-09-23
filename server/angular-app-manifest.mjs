
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
      "chunk-Eb61fsXn.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-7rzqG_g7.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7rzqG_g7.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXntNove.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8ByGb9eU.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B14SKELW.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dp5zeFTq.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-a0wvpuEN.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-oMfAObGP.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRxFmhIU.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-089joE5n.js",
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
      "chunk-6Gn2AatS.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gn2AatS.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gn2AatS.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gn2AatS.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gn2AatS.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck5ywSkH.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck5ywSkH.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck5ywSkH.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck5ywSkH.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck5ywSkH.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVBBFMg4.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck5ywSkH.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVBBFMg4.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4-zMke8Q.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4-zMke8Q.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4-zMke8Q.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4-zMke8Q.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4-zMke8Q.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4-zMke8Q.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4-zMke8Q.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4-zMke8Q.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4-zMke8Q.js",
      "chunk-BE16shT-.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDuT7B6g.js",
      "chunk-B5Vp3Fxf.js"
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
    'index.csr.html': {size: 16193, hash: '88829a8cb60201192ba160728c72768b1713ddd32641a91c45561f707a529b72', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '8eda64252e089e6faed28653bab586ee2fc60b25bd663aa2394258fed79979c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: 'a72d30b14dfc00dbe106833330d4c3f8950fb599366059034cac33b260dce2f4', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '7b525a327fe82670f169fa4cf84812a20904c2fe77b5747fcffcad096a09661a', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '49bff3fcc6af446ccd03f4d87aa108b4fee1717ff77f165a3e43961541a02696', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: 'b6c7fe8368eb2b14e68a366dc027f60f615ce9538e6abfc9dcdbaf29c237c217', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '7835d05d68db8f6b1440c84e7587744cc0c0461d6ce73eef00d64987ddb6a880', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '562b82597faba9a1753698b85736a4e8fd22e17bb8d36fed3f87f169e0c81b29', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '5c007c3171934de989c2e4060c48246c80774403eadacefed28e2c6afa5d190a', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: 'fc2bab1f2d47b80859d78f75d59a6d8a6d051d36c61a6d8d43dc3b85e3a76326', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: 'bc21ee6e1488ea6b81a54e543f8776516358bf06f4e700f682f5d5512d4746aa', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '7b59e070f72432cf78a238973ddf793ad899c9d76fd5788a80aff4c33bc8667f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: '658a734941ffaf2543486e4aec91517af5288f2d9e2cf0255e30297958d84948', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75969, hash: '233cefaebc1ac7f8dcf4d1669633a68b8fe87d2f61f9095f488de574c05006b4', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114775, hash: 'd91850e32257c0ef5d2d15cbfe9d7e7a82b4081705ad8684dce8d368cde6fbf0', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108251, hash: 'dda20500d4da477028cad55fe415d0e90d88265438e2044e3e6b14641d69d625', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118104, hash: '683114f36bbe57f28f7d2eb77e8a886e835d4ada29ecbe6b5f1261b612634e48', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118343, hash: 'd897c17d7d81dcd0ebfd4bbbd08e84d75ae2d6087438af44fd54544633c9b154', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: 'be6a5e429eb25d7f4907aba09966c2cd17d552005b391644d3567c7e4b968f78', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: 'aae6ff9d9e8ac68e4905351077bec4566db7f65a9b8e2f008a0005341dad7389', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: '6e3095fdc0e764162e5efa6c6e3334de24179d413f767a7a4450cae6764f062c', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '754242f6a9c68aae4017e129a239a2bd120217e570ae39410d2c4c6bf5f56212', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'dd4f8a52d2203d5fd5f8966ce5c4fec783de1e3a96825203dc1232a538e958d4', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '909caad07747d7ac30c5425efd550f8a33292b4ee9e65f69461b2fb46decdae7', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '0a1639f58fff01c3818c2e45d6bfc8d6c9b5db5150b2b570ed6f06a82495f3f0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '33cb5f06cd018c1eb37108979d64ab5a954aa381bf2e198935cdcaccf21ded1b', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: 'cd8dc3e1d5800b3dbc67856c16183aa0fd3219e579b4fb17dc65654cb9b3ba80', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '46b6ea6507948e69e173a2aebc66e16490baae3eae4f31552bebd5d8e57365fb', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '144d640323e445398a4763af51227050ac9884e54e0574ab64490886f8b02e1c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '11020d32d4164072cd1dd0f3d0ce5302e393acdca097e7d79c097580d5fcd7ae', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79778, hash: '5f6d6c9fb98c6b0b8320dd9a7ebc54c9addc4197b7d762e572df4b5998ec230c', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80225, hash: 'add612bad8c23df11c4867df93b01726b0cce48a94ccfb1d31f1681c41825182', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81374, hash: '1fb4205e42ae5f96e57dc75a611bcc2e5ce05491ccc271c0562f3a75e3434ef4', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: '04284727953f24380a4a747ad5c026d34557aa439ede423455bb7e94e70d6904', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96845, hash: '13a279eb00beb5242ad6b07f710057c4c7e9e68be4f9e14d2abc8dd5cfc783fb', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99604, hash: '0b9a2f72e0a3a584a391411e20640f9a0e537e96f111007fd81b5b8fdc004505', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104428, hash: '8ce871e87911dd07d291fb389738b5a5b677526767fcc0636021be3170056671', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: 'a7b7c3b7fb5e0e7132ee8df7ad94c1c0073238e91c2fff581f82950f7fb3c541', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118163, hash: 'ffdfd4a5b48137211864dc2b1e2f7e57f02c6d4b0b5f4fb1d33edf4d87be5a69', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115307, hash: '7041e3c950f304417341b1b2556dd9a302ba9895f350fcf295d784e88db68376', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108965, hash: '04a710e2b9f1de2023811742685e934851b2b769026da5af924e6a1d1194e8c1', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87931, hash: 'da24485f3f78949b0a6e0a168b53b1307e90eccdc0653a85a0929c7492b67d76', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66996, hash: 'c3600110c97fbe1a6a1a19ad3d35ea295549ea67aea02e4cf2a166b13ce77e02', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88773, hash: '5eff71666135f354baf68dd579a078180a7718e086cf1e2588fc94a1bcb48d0d', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: '1c2ffcca03ab0c60f5fe6efc49346bf525a10f55d24723fff701fbbe7705f576', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107151, hash: 'cb75e3f112c06ef26e5f44859f1b17c43c48b7d59fc581121340468f975624b2', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
