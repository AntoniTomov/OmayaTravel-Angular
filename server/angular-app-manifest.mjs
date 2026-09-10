
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
    'our-story/index.html': {size: 76463, hash: '2e46afd09da6248446e5ee70520acf847fdf4e1f5e3aee6fda58fb40f8b463b4', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 78604, hash: '96ff32ce52a391698c7f5ba9c9fa36db0ca1af0681bec61c02e73afdf701867a', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76708, hash: 'faf338256ad6fb806d78be6399fbd0c45fc8bfa9ed1fac13dec3f1c7c0fae3d9', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 69054, hash: '0d4c0d041c482a8f47093de3b00328574ec4b566ec6ab22db599ea37eaaedbd0', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82503, hash: 'd6fc6499d223d2dbc41eba98c91fbe9ec4ca8cd7c2ee81a2b554c023a8f3f88f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79693, hash: '09497605e014b11627fd28e28edcdc51fd23b66348a818b4d04c6e29fae069cc', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80790, hash: '36a7c4469b8134713fba2f75affdb7de9ed2e218feb0095f8b0af83576105012', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 84966, hash: '854c29291e723b3731076faa8ebbd6244428289d19939cb9157d8fbef84ad2cd', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107264, hash: 'a8b9844ba616195d29a989b75b2a4d886d56e97a5ad99fcabf7aa44428cececc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86565, hash: '37472000a204341acad4b1a5e8996df6cdf34e2c7505180198a8cb6f4c53c6f7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69312, hash: '1599390f93556d69d9542432c3cfc0f839401ebadb42f1af58751aad426ec0b4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83203, hash: '346827b42f040f75970ed42e1ea535475556c69dc548db5f72ee6e82183c1063', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78611, hash: 'cb0f8b7cd574042764bb0460405856803b0fe9bef2bcc300e8c948e804b0a473', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75962, hash: '321615d568c4c9e5ae85f2bfe90e7879572bbbe4a22c50dbe4f21504300038fb', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84348, hash: 'c40a35d301a435b17585cf4fb1b3c3fbd29b085c7f94bbc63e3f4f6b874186c5', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 91737, hash: '55f98b767dba61b6f68a39a7b533718b22293a76d0a6d0c9d4dacb34323c14ed', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91516, hash: '0bff786d04102bfa2d6427f1a5bfe3818b8fd4312dc4957bb2bcfeee5e275a4a', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 108332, hash: '01654f241a27a1a34a4f67ec3c09f54e4c9def28d1ea19219a1b3e48fa31141d', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98150, hash: '62c397014b22ba334de1b51d8c60c3f42077a9ca54e1a019feed5eab452a14c4', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 112459, hash: '49dadbe9b88cb2ea56af988960b732fe88df8b2fa563bd0bee46e6da751d79eb', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 122203, hash: 'fae726c999861d2e6ea25f2aa3abc1ef953cb0f31e5e42a77861a1ae5faf7c0d', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 122068, hash: 'db97bc3800f5bd4bd9a7883723a65203cf784cb010c6bd7abef308003110a710', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 121926, hash: '3036b896814d98ae83fabbe4f12430f48e4949bf59d79d5ccdd89b70b6a8583e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 93000, hash: '32074e475633723e3ffd8322742a16fcb4ad4eb3e8799016757416751619a196', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 89924, hash: '6695dfd4f95aee14f1dbb1371b6ff75a2df0d44ca2b6d61c7f061a56e2cef9dc', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 89701, hash: '63d170ebaeaf72b97f098fdedbd8c35d4629ace15418b1cb102a622c586fbc38', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72667, hash: '878f7f2a910fba07bd488eb3ee7c9a2173905259a6546288313884628de2fa18', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 119172, hash: 'cf182fe0eb3c5a85388f18b5ff644d1ffa4f48a5ace5a0b058416807b3bde9bc', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 113168, hash: '59104ec66746090a33044673971672f4b6d3536efdb0a3576dc483a65b03b72c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 91625, hash: 'ac7d4ecbd89a5b88980cdc7ce93005031865a1335d99f5f850691fcc2b40eb71', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 90452, hash: '64b2ec253b1b1239612beb8a7ea237c9695d1133a8d1bb56cf6663a880aa5342', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85870, hash: '3e493b7cea631c68e525cbec47973f70e9531806463802bbbf0ac93b5a1e0434', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86185, hash: '261536b9622586b32ed9ac63e506271c8d6798feea68c5fe46161175b3ffd42b', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 102682, hash: 'db5ae39b1d07c398b47e432331f851bf88faebadb886d9541a7c61ca586dd48b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94917, hash: '57d000ae4f164f42c460b484dc200ae2d9fa90d857fd11a0fa12a5f666b0fd15', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 102887, hash: '6018ca2ecd3ab0bb2813b764f97c4793d5d6cecd0ff7e4641e811770f8e92220', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 107716, hash: 'a144211045ce037735237ef4ef0158ce00cf285409b6f7e712169bf3fbcd4a76', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67357, hash: '7541b1cb7305b82602cf68bd4dc5036c8a0f52cd4a392795f07191e3727ddcc0', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69369, hash: '4d544ad689daadb81b1fc629f68452ab016741c032b8b707467d37ff157d75b7', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94382, hash: 'a8c16cb601f03d843679eb48802920bc3dd09e0c4198bdd73c55095b5411bf09', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72250, hash: '6cce3e4effbdc7947b3f323953325e3bb30c96f86f965d4c2f78c697a64b9feb', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 111003, hash: 'c1a93682bde2da84eacf6edcf8d9b90ccac6fe19d0c35e96bb8c645815b87d81', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 118976, hash: 'ed41d83be3254d89985e36138e4a9191a8dbb94d9a76abb03d5611ffe27c9fd5', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
