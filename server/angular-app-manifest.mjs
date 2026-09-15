
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
      "chunk-D2ccW5si.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DBhxSa11.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DBhxSa11.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CN_7Fkbn.js",
      "chunk-BHr6lnV0.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BE8-mukp.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8JYr7hl.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BF0ZUjzw.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-Vvnmp6.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3_paI1d.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1Qh-_Pt.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYTsml-R.js",
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
      "chunk-ApdMhavl.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ApdMhavl.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ApdMhavl.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ApdMhavl.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ApdMhavl.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J_YU96sv.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J_YU96sv.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J_YU96sv.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J_YU96sv.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J_YU96sv.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1Hl45l3.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J_YU96sv.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1Hl45l3.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D44OPvPN.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D44OPvPN.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D44OPvPN.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D44OPvPN.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D44OPvPN.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D44OPvPN.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D44OPvPN.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D44OPvPN.js",
      "chunk-BZU8srmL.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvC_wTBW.js",
      "chunk-BHr6lnV0.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvC_wTBW.js",
      "chunk-BHr6lnV0.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvC_wTBW.js",
      "chunk-BHr6lnV0.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvC_wTBW.js",
      "chunk-BHr6lnV0.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvC_wTBW.js",
      "chunk-BHr6lnV0.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvC_wTBW.js",
      "chunk-BHr6lnV0.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvC_wTBW.js",
      "chunk-BHr6lnV0.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvC_wTBW.js",
      "chunk-BHr6lnV0.js"
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
    'index.csr.html': {size: 16185, hash: '9dc93bfea0eab5d06769d021bc2e331d12e975f7d912a7beb80e6d8da7216ffb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'e633e52fb2ddf56e66297ec66635fbcdd6087637224e87b61d7f781aaf00b77c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 75208, hash: '83024b4d58d9afcc455abc7d247e8f281c5f1405f7ad4e11184ffa3812eb6bb6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 72761, hash: '4cf7114d41f146277c32c695ba7e729094adce5b8619b1af450408bb3a899e80', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 74231, hash: '05b610e8b9925ca8c43728c64df72a3503582ea045165fb5b48aafbb5c8c4580', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 78033, hash: '2c5408e638effeaf0db597864daac25ca2cd321519005a65f8b06f16aa939baf', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103357, hash: '0b0d7b74bfba322be1bdcab755b928d66bd5d414c4c6f84416a48bc393bb498a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82352, hash: '029fe03d700fadcdd89ae6aa3846a54252e06d13a512e7333b009b058fbcae70', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 62017, hash: '22b3e5b2d441f69389ebb7f1c2b35dea8f2c3f0f0f3310dccb077c69c4e4666b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 75726, hash: '224889ef4699e9e389b960ba8d7cd3d66cfd09e00811b53082a0d14aec039a98', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 69168, hash: 'd644a3b9fbd6afa99a76eab4e259618a30c0dee8178556fb9583c0c2623dfe60', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 71309, hash: '6dcf167142d52d7be77fda50bf9d58537cbd68bc438b97acc5ef31ac0f2e6b46', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 69383, hash: '55002bb1db24e80fa2d8d71659026c3ac2ef556222e2161c4091f6b5023b3d63', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 62228, hash: 'eb50eed2c63a86b7694038fdb773879974e59e3e7d87e94a08f4b9501388c52f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 105349, hash: '028022cf216307cf3e14630e86f728d7ef080682122d5fbbab83c8b313005994', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 115197, hash: '9dba20f3f937a5b6e1b5ebefea6d1403ce00995d944fec4d5b8f2166d723809c', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 115436, hash: '972ef49496bc5ffd800f46000f01d169abc1a2fa72f170738ff4b1e76319b21e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 115242, hash: 'ecb55e25b1b8f4d0b5684969e5a49b214d77c10fcf707539d1ff5a160de049a0', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 71284, hash: '3717fe526212cb74d68fa122f5a858a7e022e7a05462e47767b564992b5e8f78', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 68635, hash: '89ad7bd49e44a82e127c0749595943655ad345b7a4341ffa1c47ba5768cec9c8', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 77021, hash: 'c249e2ef11a8ab26e226d87a6e3bd070d3318fa31f00e48af867d4f4466e6bc0', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 84370, hash: '97314f4ae5cb7c26e6dd840a6e36a741c136cbb19bcfdcd4f94f79c15553c9dd', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 84149, hash: 'ef56b455236eae7b0ffd9aee5e1a03cfebe3ae042323a66887d610cab54a4633', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 100965, hash: '015ba47247d89122d41ae4373bb54d588a83dc296de1af5a5098d3de6bdb8826', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 90783, hash: 'd15c157d1b223ef5bbf1d138a6fa341a203101a58664d681968d12004e7fdf28', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85776, hash: '2a94b704e2b8da54df3d775f2e06940a80ed80507e1b2abe3fe2d5e37a6a3d7d', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82670, hash: '68dbff7b4c029b8413c706815a3d92b35977ed9ccbeee322a766ceff1f7282c6', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82447, hash: '24bfebc3f9e8fb755f566394eacb02f5e2d336d487c486e0efd9476422284749', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 65429, hash: '748292f707818a1ed27d3a13164a43ba7b9c716e64be8f302d2606da79b655ce', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 112381, hash: '38ea00edf11acae847c1f5c4180d56f8bc738cb091f0a10b81112f54226e57ad', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 106055, hash: 'd653303619d59821eb05d48fe3650a5de76491780e5078bba28d7fe320149492', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 84256, hash: '222b0a743387d83142bebc9209d65bdc68ce112d871f7b4494efff3205e7ccdf', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 83083, hash: 'f818a72974b6a598baa9db834df73ecd6fab86174b45ce404fa5e784e8794596', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 78565, hash: 'eefc8fb99d0442f57b83acd1ea8bebd42473e74c576b98b9f422efc5f8f09a2b', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 79628, hash: '5861ce80827e50216840a66bdc5a7e6d7af7fedd066f49a4bb8831bc6fb0a517', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 95543, hash: '9411445ad9e6f5e16901b9a8b3b5381c1f2d8d34f1b6895893d149e6b64535ca', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 87710, hash: '0bf0de4d019e7f8c7e32b82c66c0bf6af8383b28d3aeac198a127e4b7c029054', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 95520, hash: '1f70b9e6d318bea231ce37709e25ff26238bea6da640604e0e3b3f1cc34a860c', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 100351, hash: 'a06594442c942e6331c66e5a6f800c1df2d776686367d6dbb075203c48b1b897', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 59990, hash: '678a8f335a54453857697bf96760bb5e59a84320c96f3d53cc4f77d030d3cb8c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 62096, hash: '04a7e08b55d94091463429362a64b1609b8f1f9c7f3d7d9a4f29e02dea78810f', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 87201, hash: '249577d8fefd03bca54c12395dbaed3df9727282ffaf7c328ae05abaadf49e8e', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 64997, hash: 'ea884e63eb79b972a0086299a023c712ece780a28995c9db02432646fc71fce2', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 104212, hash: '15282e76d3adbf96cc4fc05a12105a92810d3af8d9dff3b1885e573c80182c7f', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 111863, hash: '8ec673cc3f830f18043b013b0a508961a171bd3d1e15d84eb49b2d929eaf5939', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-JPQCLZVL.css': {size: 10112, hash: 'RE14Mils4z8', text: () => import('./assets-chunks/styles-JPQCLZVL_css.mjs').then(m => m.default)}
  },
};
