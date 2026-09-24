
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
      "chunk-BP7ziedf.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CCErXnMD.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CCErXnMD.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdVhBSiJ.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJehz41C.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BM5dekUX.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-oEbThX5-.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAaPYC3H.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxO7UBvC.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1adUeN2A.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LkYtvcvM.js",
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
      "chunk-CyLTYqcn.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyLTYqcn.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyLTYqcn.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyLTYqcn.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyLTYqcn.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-qrHcT-jG.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-qrHcT-jG.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-qrHcT-jG.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-qrHcT-jG.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-qrHcT-jG.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTS0VP22.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-qrHcT-jG.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTS0VP22.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B265vLe6.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B265vLe6.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B265vLe6.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B265vLe6.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B265vLe6.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B265vLe6.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B265vLe6.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B265vLe6.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B265vLe6.js",
      "chunk-BNXMBStw.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0e4g0vN.js",
      "chunk-BwmtI_fj.js"
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
    'index.csr.html': {size: 16193, hash: '31462a88a72ed63300af6dd83d9be1908795647d75e4fd3f9ca7bc7e4bf80cd9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'fa3aaf075b031dabe99eab86595da5c2cd5df21bb9e2fef9466b6940333067c9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: 'a927542840513545d2578ebf7ea64b45e46ab0c48a90fccc1cb6b5463f4296ab', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: 'ccd683cd97df8fe42606a9d0ed3605f7299683948fffca54446de4adc7464a14', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: 'fb9cee01ba40a51c6c28fd82503741a68c959f6c5ce69ca60407864899286ea3', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75969, hash: 'fdd3a8303d9acc1692c21ae573dfa4db859baff85e674e2dc6f0bbafcadc9c87', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: '9330ea82585ed390366580476f198f876f36147174c6c58e88f86871acfc6c36', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '99933a26888762d97bf31dcdae9de0b0280a0a4c180f5e47aadabef87ec4958e', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: 'f7e6e5fe2b5a765ee43531e46bce086933f72771e4a7abe3c9b34b49498ad4a6', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: 'ca8353aefea2c6bc0af28866c52c3da2284913c00a539f8ea5617b92557cdab7', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '574ed6a002379d9a3bcae656b7826b3213ba263b1a24a1a9b11213bd0e67bbc4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '7c9660f448514fa497228eda688b1987d58160b0056bb9665da9b0d55abff6aa', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '8aaee99f39eab8e193408a35a3f0ff6beaa3a47e4c65990ebcc8a4455e4ad1c7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: 'dbc8cebed45ac1675d5d92373c683717fc70400df5b54c1a6ef3d3b1c5beb6b3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114775, hash: '7157b683a8efcfc4a114f50c319f25149c5a05fa0d70ba3d85558d7fcf234ac8', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108251, hash: '6347eb11bf4c4c13313c54e8a3abe9ef89bcdc111ca47cdaf26e57c958673b98', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118104, hash: 'a7ba4e4817cfc1a1652221068d9d779d41d96564108fd43d082c17d4269b6db0', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118343, hash: 'c3aa9011090bee5f87ef17484dff579baa0270a370ddf3de585cdcdb342651e3', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '6f7a117ed6bce20613559db54e2967bd56987ec7dcd18a9cf82c8976db5abd3e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: 'e60d9656f798953cbb4b5dead6c6d78e81c3e410a76f2556d957cea8981a5928', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: '15c997b212d695b22f03990d4770772dac3d2024228ab5f792cbd40f05394d6a', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '36cb625d744a518aa62712af453f6870dcda09342256931c99774706e1723a2d', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'a278159e2c98e0ab59bfe3ac737f48ea38034491634ab646a47c8a7e3984c643', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '6fd8836682ce9a89b038e1fe4dec2a9e6937e5017ef544e6af5f12361037523d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '6f99c9cbc4e08ab2d836a8aa39b4d61c4d7c36630fa73e6193f24977b46ffe3e', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: 'e3735f03fe4fb6558022d4f482e43454a3e6067931547dfb831c7b9a3e91e0f1', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: 'bba1d3cac56e3bab98f6f8275cc10bcba3a86ffeacb729f6a9a6311e1bfa2159', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: 'e9d3244241ee38fb4401deba476ac77d7fd898c3aa76f6ad1cf2e9998ab2058d', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '9e8c73cf392091fa05c267f1fe1438b7091979b1c94d9e3155d8dd2ab725a673', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '70b6c602e3857a8ab33374d790f1801f6274c3b505ad8087cc8df5de388b3421', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96830, hash: 'cc27adf341a6306f2abc9af382c841f66569e6db79f0298e3f0df999aec04df4', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99596, hash: 'c4c9f070c08aab5dc9981f0fee88fb5983f3f9e544bf7e7511c868ca8a8c1fcb', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104411, hash: 'a870f0028ea8c8c0876c7793f8d59a7f696dbf083a62ac7618e8e5bc93d02e30', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: 'eef1b188a0d9c64d12f70761f48eef887811d6d21b10fad530bcb245810ff00a', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79778, hash: 'dedfe053505b11c23147fcc07461b06b53b1d6fcc0bcbc1a25214ba2e1997a2a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80225, hash: '552c88fb69094b360ddb5af5bffbb2686ee62e17b4227c217f317f8a5762f2f4', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81374, hash: '4cd7a51d509b827c3a0defc2056550b9463347e02232df39a111d71f5d2cdd3a', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: '35b9c6f61d4f82746907aa69ff7e3e107f1bc2b99cb8239adfbc46199046019d', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117991, hash: 'b3d6833915e38f21ea51081a7890e66541654ebd663631e0385e85a13506e55b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115299, hash: '952293a128d4f1d153efedd3f81062848f3179437ad669fb8daedb905733fbac', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108957, hash: '9d9479c6cd624d5856fba4e4f9f10894f8e0876a8d3a4e48fabb8f88d4292252', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87931, hash: '2b298c7686ddaa43d505f91cb81908a008a24607b17ca78415b38ff05075c820', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67014, hash: '50155b9d100c9ce847f0aa654fdf4edecdb57d771084bea303e0e596b9f0348c', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88778, hash: 'e1ebbf85dd57d84bc60d91a956883f81d2755157526f906f172d2bc1648448a4', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66574, hash: '0fc97a2375d22d377d4eabcb4a49f9e370b57e0a47b7cd283fc043a8213d9cad', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107151, hash: 'f43d7677f8b3e112663645f7f68ba70dc07cc19ed1192e0417af0c1e944676ac', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
