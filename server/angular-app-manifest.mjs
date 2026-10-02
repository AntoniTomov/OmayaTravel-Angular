
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
    'private-tours-your-trip-your-rules/index.html': {size: 64290, hash: '7044d355e22c391f8f8c8bc247431707d22f402e673a6bf2135289983850863b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77399, hash: '61dfc87e391fa81485efe8f2df1c5fd0cd3e35f964a6da960216173af3e5485b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 75100, hash: '86e962e00de23b044e4d868aa36d0b8be087a3fba84118ebc661f2adb525b4b0', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78488, hash: 'dbb96da495b8ac2a4de7a7b5ba598379f14b722f4c06ca8f72bb46967ff92151', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78409, hash: '052eb74efa11ccb6859ef3ba171e90e417e99e793581f9001fda20ecadac29a2', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74194, hash: '2f586e5aa2e13e0b53268a6fbd2c44f2209aed6b8696cb77263c691aba44f5f9', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73425, hash: 'cc554c95addeee77951fd19a1f669bead8d34581e33095c113063022393f58b0', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71535, hash: 'b01415d08e1b6ec7888e47fcd1315409ceaf5d232d2791229cfbb7dcf33b1f9c', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106253, hash: '92f17063d3cf4389d511a75154f637b01003bee552a061522cf41280d027a4a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77037, hash: 'd7044e07e797cfae419a5d0632a4f379f136f60f80f0fc3b023244ad8a33a682', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86366, hash: 'aea7b99514f1354030993ac77ec2a78c3644d38ed41adf4c1718f0806ac696b9', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64320, hash: 'f63361add925166dbf76963d60722923105b4dd618ca4c10944957cd911705cd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64304, hash: 'c6a7f6d1346c8de8db50e0a913c0671c786d7bc217e531b43879794446f0fe2d', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74267, hash: '8a42472d2eedc9511364b7ee55452ae1e3ad7240f6f87fc1c07acfebe37f47a5', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73146, hash: '50e373c5f3882d43f364ab52bef6d590151a8107ffd8fd1f97c3a6a352cbaf04', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79253, hash: 'abfe627dffaebf210e8269994eb406f548784949373307500bb1d4f599f5c7fa', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100585, hash: '0c2a5677f406ca11b4dfec4235b6e226d4b2f4e8cbe949c5907bdc22777118ba', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88639, hash: 'a2a48857f007479bd024b9f0c445424067be7bb6b84b315c280de8fc73caf1bf', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87863, hash: '00913aefea8ee674b49177573372aed8e0abec56fc910ee63c70509b7b7663e4', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106720, hash: 'b126300c83e94ab5f987235550679721c0ba4e73790fe85d40d64752af2b8dc0', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117338, hash: '95bd74ed9766c91fe0ed60b80d78751fd79c0be5f20be212ae41249e6d1959c9', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113947, hash: '559b1b89161f4479e0e96d47d87490cab1344ec2ce01958e6329659c980bef0d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120667, hash: '9f785de4b8dd7407e87dadb6a4427177d9c2bd27d29b904ee51272a5fa9390c8', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120906, hash: '2909c2d96a64998b3ce361101b9084b3cb7a567ede7c4719a4b71c907a20df8e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89730, hash: '6ae061747a4af906a573a1b6562b1aa02a057bde2cde7b686d0920e632fc5ae1', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87795, hash: '062db84edcee22129babb0ce8586fd4b9dcb18d3c68d7c0f5a44ff636e70e427', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84687, hash: '694dcec176d14259d7438a133101d5133aa35928891472ce026342cab39b07ef', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84464, hash: '5da4dc3cc0bd456ad861bd619c2aa03d2585e02015936e45b41d18535b52b75e', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82297, hash: '319c894f8dc555b60990a2ac97ae066b7e201ae64c31166d96885cee28a9720b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85877, hash: '3dd1d20a45ab144769220cbbc4ecd77da206a132447b4476bc5cbd333dd150b7', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83893, hash: 'd5e337da013444753ba0fbde4d79a29a747acd49f347d34535ae16f6f5dfa7ff', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97568, hash: '6ab4ca204887fac63c7e22e6367d85a9e7bc13cf833b2e73131627c41d3d214b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120556, hash: '23a608645372f26a4fa770e058dbbb8137453bdb2044b2011db74180a5c23c45', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117864, hash: '57062697e26066c91554e7154e74d4db85f8e1d92d15deec3025c27745f0dc03', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114659, hash: '43e5b32a438fde999b9913b7fbb2cdfbb6310cc64544b96c386f90ff40a1b102', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88561, hash: '05e0c9306c5bcd8f4297a35d4c9e913ed3747a21f2ab6af7bce1a7b04178d6ec', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97441, hash: '71f7756b0941b92ec761aa780679fc802b37533bacab6d72cfeef5da0cd080c8', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100208, hash: '557e627224173325bc26f73a02d64660add287fae6e3caea5b1de2341bdd0081', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105016, hash: 'dc6ce635981ded71d1d80c496dd4370a260d7d9c3bf0a4758ee1ecaf022c4a2a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65120, hash: 'd1ed9b06f4edfdecf2c313d2a23befcc9e715c67ca4dc7c697fc77259ea2a81d', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67574, hash: '6f7b928eac54b4c4db33fedd59728a36f2e7ca987471941d90383faa7d40d23c', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89351, hash: '72b56fa468411556d9f8be7ba891b403ee9ba737bb6400bea6d7c57ada4768d1', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67144, hash: '45720a704b006c13b75d2d8c7035de43d573acae6169f76f88385618f28ab2ce', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109714, hash: 'b974918a9235ecb0fbf64a28ebbb001ab570ea39f3060184daba726bea70cb3b', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
