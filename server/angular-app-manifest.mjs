
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
      "chunk-CbfnxHIa.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-wuAAyTSa.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-wuAAyTSa.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BT9EH13f.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-WGZAAv.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db2UkLq1.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DDgleISJ.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlYE7vuR.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-aSivhFuW.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTUMCJpD.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY-ZzKpn.js",
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
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DzylKmEL.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DzylKmEL.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
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
    'index.csr.html': {size: 16185, hash: '9a3525b69c451fd5e7b7f8b35ca0f8d13815ef6b4c863db123d2c0b01747ee7b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '25f9cb54c82b187791d612e7cc81bf1f0f622b5d80325c68eb99df512fd119e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76517, hash: 'f03b077d02d30d4809a470afd238b194ed16fb57c07e7c263beccc533c988a1f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74062, hash: 'e3d9d81724098539227fb29395fba134c69febb738eb28bfc42b7e9ce167083f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75537, hash: '69e7fd82ea7e3870de42214472381942a8cc0a998df9fd1ce1a11cf630448d78', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79344, hash: 'f9935e9f8b630f764795b1f14450ff0ce32a21f1e57d2c1f9f4e7ed87599b777', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 71645, hash: '2770211fccf49944d767879ee522d1651daca24820a59199e89a1e992fc60003', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72543, hash: '034549e2f1bd44b1d231821ead63eed1e2a55cddd33729e4ad155e659f27283e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 70653, hash: '452e07434d216c737cd266bfff0ae0b793aae9edd7435fdbf168884f54fa101a', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63408, hash: 'ac569da44f443858c68af2997bc797c25429ab72beb26ff63fcba4c1f008df5b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105395, hash: '6fb44d90ac3039e28738f5b64b87deec4845434e66f77d35e5ef646f1f203fd5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 83314, hash: '74d9e0d827c0393a24642802ebc86feef917ffc27c08c2067cff7e9693ab60a2', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63438, hash: '10bd7ecfd5fdee5f7dbfb8aa5b0c1a6812fe084ffc889ed92fe571291912dcde', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77476, hash: '2773a02ba408bea986ee85a77f5124b1256811ee92ddb667a1af1cc51e84b4d8', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107216, hash: 'fe4f60fd05c1b68da4396a9486d67ecd820220ebf5b11fedcdbd75be0c8c9e24', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117069, hash: 'c1a5915217e586d8458fd8afe6106d10e3a6b05d099443e042ab9d5d7ac2ec90', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117308, hash: 'd2f5ce1ce76e1fb7b8882d9df58d409f7b1050caa46d4c9f9cce6f49f07de904', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117114, hash: '0cbe320ce779ae889139db8c240177dc06bcae5a042eae06b2c9246f68d8b487', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 85634, hash: '290b9af08248e403d4f7bdc823b09225593efb5a43341520e01062128de13e3f', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 85400, hash: 'd8a2386b99b8d89314bfe555baf8dd85fd2ba3280b3d773b3c406b060b0582f7', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 102214, hash: '4c72e680e78b2d4f7853d6422d045cc31023c9c5da553fbef2d5d20e501a6f28', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 92047, hash: '0ca2bdbd0a5beb6fd08ecffe75aea97f8a10b78df349303698774cc46b21f4a3', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 72634, hash: '5efa17054b0c3e4f8df7df35205c07145ccc25bb2a726f86f5c4fdb381db0634', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 69985, hash: '5d8289ae0c2120766c4930cb87092c44be8a75dac358c74cca657fc76d4e8fbd', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78371, hash: 'ae3826753fd76aecaf4618c6f6abce7676d8315f374156fbcc6feb0f2bb9783d', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 86809, hash: 'f44239d59021aa6edc6caf773dadc1c8deb93cddc39acaf770fc16d5220acfe5', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 83701, hash: 'ca7fd1a43887f791b121dc8f0ee473f50ef628a68947cbe071d0b40fef21117a', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83478, hash: '94a086a97688b41341ddde70300b1ec51654addde63f4d598f174d0e500e49fb', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66588, hash: '134e5485b558fd87dc1c788e05dc0123a4db0d6e5ade39d6226e3d7187d30fa7', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114258, hash: 'cb1b0f8f10a4a1eb6134323327a7aaec4eb6cb4a72b0aadf000bb177e8ef1c13', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 107916, hash: 'b1715fb9061aefde1add24f7af168859709c62668b55239cc2b170bd9313bdf7', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 85514, hash: '91895a699f6652cd08b92aa2f715ff526ea4639376156b167d302319e7baf1a5', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 97433, hash: '81aed3b85612a90877d043a04dec6cebbe8af1b9989835e23992e76ad7ed5e94', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 79524, hash: '8029d66258e006f2e8cadc4b6d88ed23b0ababb725f86ac24ff1eb1035448b14', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 80940, hash: '128b522330d4600de59ec88a954ee2b61e0bbe2875e0bdb7bdf2111b0db32f2d', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96582, hash: '95bc47b12a822662c073ec6ceea39bb93c1b19bb5cdad8c3f32a53955ef86236', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 88744, hash: '99d6b3e1cd5eea1b9ec844f80739e527844682b7b0ef2ce3589bbead73f7929f', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 96802, hash: '9895942441e6af0b0725ec36fa9a4a43d9673bb13f52dd6d15a226ebf53231b9', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101626, hash: '0fea38947857005c3e1c6e14b7497a16f91aa28848b065abc960644239a6fe78', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 63686, hash: '3da5624d2a5b1c65c2af5f917769d7a38750a02d8acfc1c5462d421bdbaaedfc', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63444, hash: '121ffe6f72ec7cb929d5e25527273144a994af45ae8d94ba36403cb9a4459452', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88384, hash: '74a01c841f657eca9523801cde778c78c8ce7ec728b13045fc439ad4139f28a7', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66166, hash: '9ff130755c02edb83e84458129c5e6d35da6e42b1fba1c4fd1d90f65e83fa86a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106116, hash: '7a92c40865c15ed6adf9188642ddffd0ba4ae525a0b5ccbd0e53c21d813cfcfd', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113740, hash: '6f5f34b0f4f25996df8050dd713a188623d922417467c38b23285389ae187e22', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-XYMMR4NM.css': {size: 11956, hash: 'nkSLHVLnJFQ', text: () => import('./assets-chunks/styles-XYMMR4NM_css.mjs').then(m => m.default)}
  },
};
