
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
      "chunk-Ch_t0phz.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DIGMfNiF.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIGMfNiF.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN1ZGDdg.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQ91Hicl.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BobGXuXM.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QsfuYa_q.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4Edt9NJK.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BqzaX3ac.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DS6ldFI1.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BliMK0Yl.js",
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
      "chunk-BZx56j8Y.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZx56j8Y.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZx56j8Y.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZx56j8Y.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZx56j8Y.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGFcGURe.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGFcGURe.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGFcGURe.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGFcGURe.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGFcGURe.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DW2Y_nGx.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGFcGURe.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DW2Y_nGx.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlAvn-BK.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlAvn-BK.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlAvn-BK.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlAvn-BK.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlAvn-BK.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlAvn-BK.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlAvn-BK.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlAvn-BK.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BlAvn-BK.js",
      "chunk-rxAHNDv3.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2pTNcmYw.js",
      "chunk-B8-iGRfS.js",
      "chunk-D7Ewx2Oe.js",
      "chunk-BgxtMJRl.js",
      "chunk-CypmnMeI.js"
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
    'index.csr.html': {size: 16193, hash: '913f464e1fd8b8d945cdbf661503b880995b1e1fa71acb4dfa7a840c417f3007', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '755e1f4cf5c6e9639309b18688b51242f70ef62e3fb92f70e22cdd011180a520', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 106253, hash: '92f17063d3cf4389d511a75154f637b01003bee552a061522cf41280d027a4a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77037, hash: 'd7044e07e797cfae419a5d0632a4f379f136f60f80f0fc3b023244ad8a33a682', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86366, hash: 'aea7b99514f1354030993ac77ec2a78c3644d38ed41adf4c1718f0806ac696b9', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64320, hash: 'f63361add925166dbf76963d60722923105b4dd618ca4c10944957cd911705cd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64290, hash: '7044d355e22c391f8f8c8bc247431707d22f402e673a6bf2135289983850863b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77399, hash: '61dfc87e391fa81485efe8f2df1c5fd0cd3e35f964a6da960216173af3e5485b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 75100, hash: '86e962e00de23b044e4d868aa36d0b8be087a3fba84118ebc661f2adb525b4b0', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78488, hash: 'dbb96da495b8ac2a4de7a7b5ba598379f14b722f4c06ca8f72bb46967ff92151', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78409, hash: '052eb74efa11ccb6859ef3ba171e90e417e99e793581f9001fda20ecadac29a2', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74194, hash: '2f586e5aa2e13e0b53268a6fbd2c44f2209aed6b8696cb77263c691aba44f5f9', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73425, hash: 'cc554c95addeee77951fd19a1f669bead8d34581e33095c113063022393f58b0', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71535, hash: 'b01415d08e1b6ec7888e47fcd1315409ceaf5d232d2791229cfbb7dcf33b1f9c', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100585, hash: '1133e5a7c1324b8da17e86b38902b5621262e5d0a7925207512586ea1dff4504', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88639, hash: '41e02fb94ef1c74837043a2f909fb75e15bf48c59dc350bed95bf45d969be426', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87863, hash: '9f4da3d9a0ce6b33d6d621459c788b72d39cfa6f9eb7aa575ea9b3e96427b517', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106720, hash: '729074969a1028ec998759b119b58b759b4b6491d3e4791d4dbda36ffa02f53b', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117338, hash: '6e15314b2a6146369c03e5c3f1a08295f3eb63d0d4888208617e27f67f35234f', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113947, hash: 'e9d9a4cebff4415bf91c3accd8d4b07576a88eee2acebcfe650c1db660702ba8', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120667, hash: 'bd790d6aa346ce48f5dee36626d2752ef1b832fa2fbae23992604d83314a70f2', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120906, hash: '787505626025f05b808b860ee2665f6e24d9baa39e86519c692c11262b1b9bc9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64304, hash: '4764bdd2f3b2c906712414b56b4f286c4d801521a11eee29e0331b4669f629cc', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74267, hash: '30a6136bd47405e1c02f3a5132db74a4131e4f22572f5d0a209a380e8843d930', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73146, hash: 'a73c61351968c9c8408b7d0d2565ebf07a984c566c5b570f09270a05b435107e', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79253, hash: '7417785cb0eff77e29873955766ac3e777eec62ec31ae96197a3841b5421bcd0', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89730, hash: 'f4324f5ba011e411f10e851a81c968a5b0460558709c9c2c7ac73748065274a4', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87795, hash: '3999f7bd9095c4dff82c3f87ebdcefa34f36cca9273768c2b95f6d9bb3f5931b', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84687, hash: 'ed0f200fcdf1b87b6601c5fd176cc05146b2a0149dd63e817233f5324340b3da', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84464, hash: '67f43bf33cde85ac1f962eccdef20d0c70fc4a4411d9ca07cc2173236230c470', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120548, hash: '3cad60ca95cf1699fdd400bc1a0398c53de3d19caa6ff3d33a695c72bb8e3762', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117856, hash: '5010c8733b5b7e4b7236b09c90cdd60ad4a89642adef3c78c12b07da0e7a47de', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114647, hash: '5d490dfd1ca6a3dce60fea28690450dcc3fe65020c1915970d534c4295ec2ba4', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88583, hash: '752fceb06725478ec90ce1ac4972ce2adf31f59a3bea9b507ab413d377df7483', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82297, hash: '51dd5b23d198f7ed35c049913caf6dd1c15227610a427a4b3025624f0c1b98ea', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85877, hash: 'd3010784649979a1c3ac14167db8ec0649583c40ce4c05599a858c240b15daee', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83893, hash: '22de966ac6ffb26f76b23c02f5c9ad6b4548f0cd2320da56004dcd90e9450a85', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97568, hash: '08feedc5a3d5b2ab1a1f57f86f6d4aa7d80f8d52c77b2bdeba642dd67087d1f7', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97441, hash: '45888f2938779aadb90952b6231fed4331f414138c2ef1b6ac9ba9e65a2ed112', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100208, hash: 'e35c4ec7df4b501677cc4f75de3f100f89401620b4b44bbae0a755af4116e0a6', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105016, hash: 'ec2edfd8597ac1fa900650f2efb3d032e8f5e3d42b80941bcafc2142a2b9f9f6', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65120, hash: '0cf1081f05da050d05d504af8287ff3a2a69d26f91cc4e62845c3d3e2e4e7f80', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67592, hash: '06caee6070575e7e25f676247d07f522055b8566dc8a7ab3c0757c9cd840a6b9', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89371, hash: 'efb8bb907fa5f08feab2c6bb80c483e99d1c97ca5c071cfcb20db67563c146f0', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67152, hash: '1d95a443f28da9d64f19cc700b498ed7599e1f3d72f34b260809985ed70aa1b1', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109714, hash: 'cd94e64e627d7d6d1b86e9d83fb7c737b61a3cf9cfbdd0f86f1f5fe64e93cee5', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
