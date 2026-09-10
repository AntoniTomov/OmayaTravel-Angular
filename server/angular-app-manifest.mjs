
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
      "chunk-JcbxRW-8.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Bz4lHHLt.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Bz4lHHLt.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BgVW_6S4.js",
      "chunk-DlUnvcci.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COO0aiJn.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DaS_YJLL.js"
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
      "chunk-CqOgLCeN.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iM3h3P3X.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bx9_-ier.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBN-rt5-.js",
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
      "chunk-DTGup72-.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTGup72-.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTGup72-.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTGup72-.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTGup72-.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f_B2NBqo.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f_B2NBqo.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f_B2NBqo.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f_B2NBqo.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f_B2NBqo.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAdwYudn.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f_B2NBqo.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAdwYudn.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8JW99Vo.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8JW99Vo.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8JW99Vo.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8JW99Vo.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8JW99Vo.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8JW99Vo.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8JW99Vo.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8JW99Vo.js",
      "chunk-BB_2mMfu.js",
      "chunk-C4fMKNJB.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ohxpuWaR.js",
      "chunk-DlUnvcci.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ohxpuWaR.js",
      "chunk-DlUnvcci.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ohxpuWaR.js",
      "chunk-DlUnvcci.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ohxpuWaR.js",
      "chunk-DlUnvcci.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ohxpuWaR.js",
      "chunk-DlUnvcci.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ohxpuWaR.js",
      "chunk-DlUnvcci.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ohxpuWaR.js",
      "chunk-DlUnvcci.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ohxpuWaR.js",
      "chunk-DlUnvcci.js"
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
    'index.csr.html': {size: 23699, hash: 'e1c986a47128b4f9546ee2eb04cf8f613714d29de4acb1771a663a0a5c4aeea3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22724, hash: '4c2d39552c7df48ac70d967a5fc807b386ef6fbcf26645e472b22e619b80858a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82503, hash: 'd6fc6499d223d2dbc41eba98c91fbe9ec4ca8cd7c2ee81a2b554c023a8f3f88f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79693, hash: '09497605e014b11627fd28e28edcdc51fd23b66348a818b4d04c6e29fae069cc', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80790, hash: '36a7c4469b8134713fba2f75affdb7de9ed2e218feb0095f8b0af83576105012', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 84966, hash: '854c29291e723b3731076faa8ebbd6244428289d19939cb9157d8fbef84ad2cd', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76463, hash: '2e46afd09da6248446e5ee70520acf847fdf4e1f5e3aee6fda58fb40f8b463b4', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 78604, hash: '96ff32ce52a391698c7f5ba9c9fa36db0ca1af0681bec61c02e73afdf701867a', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76708, hash: 'faf338256ad6fb806d78be6399fbd0c45fc8bfa9ed1fac13dec3f1c7c0fae3d9', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 69054, hash: '0d4c0d041c482a8f47093de3b00328574ec4b566ec6ab22db599ea37eaaedbd0', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107264, hash: 'a8b9844ba616195d29a989b75b2a4d886d56e97a5ad99fcabf7aa44428cececc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86565, hash: '37472000a204341acad4b1a5e8996df6cdf34e2c7505180198a8cb6f4c53c6f7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69312, hash: '1599390f93556d69d9542432c3cfc0f839401ebadb42f1af58751aad426ec0b4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83203, hash: '346827b42f040f75970ed42e1ea535475556c69dc548db5f72ee6e82183c1063', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 112461, hash: '7d92f42f3027b99c284dbe1dc555ee5f9421be17cf51f0559f180bc023f11251', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 122205, hash: '6f1fc606c17b3fb06abd606075838f0cd6bb5e26615f7bda8127df7d9b49360f', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 122070, hash: '99f73e429457dcd966002de1812eb47afcec4e1dcf9c503d253a88d8027b8b52', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 121928, hash: 'b92220b055c375cffa4bbaf815b700018c27e6be52023ddeab84450608cd1e91', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78611, hash: 'cb0f8b7cd574042764bb0460405856803b0fe9bef2bcc300e8c948e804b0a473', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75962, hash: '321615d568c4c9e5ae85f2bfe90e7879572bbbe4a22c50dbe4f21504300038fb', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84348, hash: 'c40a35d301a435b17585cf4fb1b3c3fbd29b085c7f94bbc63e3f4f6b874186c5', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 91735, hash: '1b914f26f8840b282a3f34e222b9697e072e3cbefb1f7156aab7ffb679824765', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91514, hash: '506c702f2859a253b84042e3b495b82b5a5f752266077ad955f97cc4d1f41d0a', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 108330, hash: 'ce444768c27d916ae6ac65239b7856c2d8bab165dedf44985420778a9023c1aa', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98148, hash: 'e6614138a7b68a6bc09e9d1e7fdbdd055baa7b029b04df2c2e670d7b175e6e24', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 93000, hash: '77f069306c7d3652a93cbb32be5501ce80057cd7bcaddbf94b7ff0c9ace8465d', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 89924, hash: '038ce749e68414f826bf3fa7a380ad47229da9ab97b3491023f1d825d172f481', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 89701, hash: '47b42e1aac475b23989deb5d724135b0c340721284c4713420383c5d34c98a4a', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72667, hash: '4077d99860dd890136294e18f4a5f89deccd115350566e59e61a47d4aad16c0a', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 119172, hash: '97d9c8d04d2f8a1d16a543bd49c4d460a79cc54d6fdff642ae4acf6c31868f42', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 113168, hash: '3d2988d61367dc624c199b9d8fcd453244fa3fba0fca47a7797bdfdaf7e23165', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 91625, hash: 'a9b60bf5d00214a5942aad2de07ff38d8fa9d18684e068a356e1e25afc37a91b', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 90452, hash: '7418461e744ad6f566448625a63c9c8453b66dbe1ad2cf64d2e3e7d077bb824b', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85870, hash: 'd115e0b23e0f4cae8375ecd19b17a020bf7cf88c7f720b499482f1273cadd15c', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86185, hash: '9c5273a1f433ae37ffba7547198dfad6fb293ecb5c7a5a9f3abbdc03e5114ccd', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 102682, hash: '90b7834976bf8683ab93ae6e74082d0b88f9cad712dd8b87e5837d83c4101984', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94917, hash: '232115cbd45346e1bcda831b1ce7db396f758aa4c3815abd640135218159c149', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 102887, hash: '710cd0205549e17d8ed089f1cff3b70e71428c7bee01f9e215389da1a0527305', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 107718, hash: '7c9e011b834b32f26ddb4a5428ea048dd5b273546240ab8f3ac403dbd9755f13', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67357, hash: 'b0bc37cc68be8a4ba0696965f36e1ffe2505103759a23871bf7ca92a286826df', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69391, hash: '333bfc4bdc0bd2c98d50a52068856266f0c1efbf6bbdde9789a0bdccfc2dad9e', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94395, hash: 'b7e3a49750e3304346960613ed2728cec2817822025585e99113d833b7819d6f', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72250, hash: 'a7b18e794a25944104edcc38503464050ec305e390e07f6ea59244f49a672c05', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 111003, hash: 'ce07596b0150bbb08e993387b689cb92feeabbbe17d72178505fcdf56932657c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 118976, hash: 'e7877a762470d02aeeca1e9274d9da7285b73258be538f0b3b249a6871125c5f', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
