
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
      "chunk-CwZ3qHXx.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-WOBCmNs9.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-WOBCmNs9.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkIwqHDO.js",
      "chunk-67RGrhS2.js",
      "chunk-3WhSP_Qp.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-dyBrKXzI.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIL7bCUw.js"
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
      "chunk-BmnZxu0k.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CO5jN_Ao.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgW5GPkA.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f7V-b_pR.js",
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
      "chunk-CmTVWL8u.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmTVWL8u.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmTVWL8u.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmTVWL8u.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmTVWL8u.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CKs3-Y-o.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CKs3-Y-o.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CKs3-Y-o.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CKs3-Y-o.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CKs3-Y-o.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3ZmroPU.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CKs3-Y-o.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3ZmroPU.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnfPOFqW.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnfPOFqW.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnfPOFqW.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnfPOFqW.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnfPOFqW.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnfPOFqW.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnfPOFqW.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnfPOFqW.js",
      "chunk-BGWyfxO3.js",
      "chunk-67RGrhS2.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8IkFMk5.js",
      "chunk-3WhSP_Qp.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8IkFMk5.js",
      "chunk-3WhSP_Qp.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8IkFMk5.js",
      "chunk-3WhSP_Qp.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8IkFMk5.js",
      "chunk-3WhSP_Qp.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8IkFMk5.js",
      "chunk-3WhSP_Qp.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8IkFMk5.js",
      "chunk-3WhSP_Qp.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8IkFMk5.js",
      "chunk-3WhSP_Qp.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8IkFMk5.js",
      "chunk-3WhSP_Qp.js"
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
    'index.csr.html': {size: 16185, hash: '4a71c43aca72f5e3ccd34e63c43e121d60de07b0b422653ae978ea5ca7698984', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '5d047dfaac43825fd74abd307d5af494920460c34bfec5946ef80a8b9cf2ed38', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 68840, hash: '6b50b0bfc410a1ae650e5d76cafde1f3674b98756b14d0f9f227589c1931c617', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 70981, hash: '26db6ad10b6fd33be874c9b5d8269a0bb2b37453a74f6644772d6f97598523a8', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 69085, hash: '41ac1eabb3417e8062f62e4850c144ccb68fe1bbb4d351fe8637315ac7d926b7', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 61954, hash: '448de36a6836fd16980267cc0bcfc4c4b1b8b86b431c75c5d70b00948dabf4b2', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 99382, hash: '3bc0a574d2698983d2d660c659518af7e48c5fd40e52d9f15a77aa33bb6cb195', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82078, hash: 'e39c88b1991a9a0f3e568c5a8fa7c94304434b7c2e27bb735d260af0b941f9c3', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 61689, hash: 'da8b18d74f8ff5c5f8d7f5bae6afdd8c2ed05126ea5cf2a83373e9750edfede5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 75428, hash: '4e5bb59817b5dfd7f715d62af95b970a7ebe14b40b07caf82203604eeac4d5da', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 74880, hash: 'f83ecfe9423e36e84b5dadc85bf74297fa7ec44630b99a9ecca11a497a976b84', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 72487, hash: '1f79f871583cacc35c7a72cb5cb27a389fd134d0ed441a352c0d44115de2413f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 73957, hash: 'abfc5a14e7a5f0197f0c91f32ccade515e666ac2d7521f5644f3d5d8313b34e0', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 77759, hash: '0c444f5a6b5cb744ac7528365531473d4c38859e45efaa37b0a9754a45b9141c', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 70988, hash: '639b2e908a19fd3e6288dd2a16c95e6f150da86f3bef7ca8eefa94ac1329877e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 68339, hash: '392d514b0e4bcac2081fa58e8ff41b9dcebb489ee42c3ff1da3ecfd74c11c37f', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 76725, hash: '61f0e4fa81ae1de52675ad8f6b9c0f456a6e90286b58686062625619cfaff274', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 84072, hash: '865cc6954ca5951a8a39a05381342f82d6188092452d0c0ca1789296de23d3d9', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 83851, hash: '29e9ef0bc253a47219ad0f198db84f21e9d56039528c64aaae52b485cc38063d', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 100667, hash: '4686186659d55d5b120e9d7d043d367063eb6e41c3234898395e9c6a3e6a8c77', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 90485, hash: '4fe3bc0b333fd16b7e1fdc4a945ff1b09e8d632b24ad7e5c3b8112fd77918e1d', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 105073, hash: 'ff3a670a18725b7d3a9bd1988238ae074456eeb2c85058a9d72f6d0604a4a275', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 114921, hash: '7696194c35d2e418277a794fa574baa3e9918829bccedcd4624754f39d03dc17', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 115160, hash: '984d9080ed541b1be1ea26dff861106237e4da32edcf471415e255a10d885651', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 114966, hash: 'e1c225a7acbc9b950769afc4e96dc7ece54a4ce82564d374f43230f4e46aefc7', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85502, hash: '6eb2cb4cc2b1f63f5c8225c695eab31112550e82768bd0fd750c5089683dddef', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82396, hash: 'fdf656b9af73a4cebc7573c35507a933e5a565e2dce3fb0668d16470f29de2ff', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82173, hash: 'f3136ebd1ad855c27d1ddb442a2835117a12ff0c5d2a4caf7cadc8efe96b801d', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 65131, hash: '2dbfb5de4a2cebf801feb214f103eaabdfad6abd4e2b5c756b3a04d69b63eae9', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 78289, hash: '37c317df263c57353d82b470f79358400ccce02555168c1694b5aef3f5fbdff6', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 79352, hash: 'c022fe40a8c7eee54ee3a4df8b7d5a598cecd5f622117f4b3c2ef0e5cb4c4cac', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 95267, hash: '3948b30cf97c45383527ee1374ab70eede659003e7b6058dcbfd28ddacbcb560', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 87434, hash: 'a7e7d0f204fa1346a8fb1e6c92bafcac270922e82924723edadb0cad1e1b1cfb', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 112109, hash: '14d75317429546069c411341d42aa5f046341e0754fae999256d9863cac7382f', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 105783, hash: 'abf04dd6ca5b4722bff6c040ac4753f87f942ee3ed1d61e1b59575315ff5f998', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 83960, hash: '717e9844b08cc1e809d5e737fefd5240a142331cf16ce93ad0284a5f98c9d2e7', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 82787, hash: '5997e947fcb38586d34cb59f3f3cc012b67c8bb60b14e8004c8f87f1289a2f07', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 95222, hash: '030a8b77ef61e5f4ec32216a7ff9d38f495f1c222327dd6b34df98e813df6c9a', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 100051, hash: 'd03d762637855be99abca7af27a5096a9f04875e603eb315713b3bb30c4fc391', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 59692, hash: '084b2e740a3f8b91b55823af96698ac150b0a4b1f7b23bf46ddf9ab6e6096a80', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 61746, hash: 'ec456fe8267db56f7105fbb526dea803e13e1fd26833ed99ea74e28dee984f8f', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86897, hash: '2e6ef979f9126948996388b0b58a7dc9595503d2991001d8dac8de7de15d9fad', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 64699, hash: 'f512d1be71e92f784b8193b27ec99805e7a3bf01ff595dc9d477d9aa4bb6daf8', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 103938, hash: '859aebd0908a66dc3f6813dfa8ed2e977bb25b086d2d7e4d1fd1dd64f5f7c1b4', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 111589, hash: '28bb5c7417569677dc03150da18ff81a971b95cd86ca622007f57d6a7d961829', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
