
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
      "chunk-j1A74KOm.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-N-Do5rGc.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N-Do5rGc.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-qM9JX1Ws.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2-B4Kg7G.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpjeQntG.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dc6DsL_i.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9bcgRP0.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEm945p2.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B_mmNiQ-.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DjaWxjOp.js",
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
      "chunk-C6480jJZ.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6480jJZ.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6480jJZ.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6480jJZ.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6480jJZ.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6480jJZ.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bb0-nKjM.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bb0-nKjM.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bb0-nKjM.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bb0-nKjM.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bb0-nKjM.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bc6uFmA3.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bb0-nKjM.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bc6uFmA3.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CtDZjOgA.js",
      "chunk-BmdqGGw4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lie9Ba76.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-Bm2Uj_N_.js",
      "chunk-wYwcDWVP.js",
      "chunk-CXNJB7lH.js"
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
    'index.csr.html': {size: 16193, hash: 'b49df953a750567ff9bb2ec24f1973c3803cd4a6d61b25b39990940011e2618f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '07ff8a415ba9d885890298f52cc0c49225ecd200de22e21cb3355e1fc37ad736', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78518, hash: '8c83d791f47166725c9ca9989a9554628fe9b1ecc1385df3f588a0bc4acb7348', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74303, hash: 'da7ac40e6fef9f591c386488f659cde51a568c1baad2ff9cb4ea473a1880d592', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73534, hash: '33072cd8b8c2efe064da7df790e895cd6b2c1b338a3c77dea6738c9858b370d5', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71644, hash: '551314ebb126bc56bd2a4570b78b305b636947708ed0d406e374f45aa7101b30', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108286, hash: '254b8e822567c78d91d36a25961985b666bc87b242fff70f5588a6f9764be984', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77146, hash: '32aedd6adef9797bcb3c0b5597e97d0159b9391b81550bed432b23224e7328c6', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87552, hash: 'deec9e319140ca800712845cce2f78b2a8a5a84a20212c0b1268ab623ad87246', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64429, hash: '2c4028d03ef173e217ddc00cb5495db90a0583df939cdd4675475c7c9ba5c5f2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64399, hash: '6b6deebb02b87abf21a8badbfb8fc21cdf2e474d2640dfe22674fbe663f34b05', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77508, hash: '05838d4d774fb49dca19991a62670848a426d359e7a724982c8f657da558b064', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76709, hash: '0cdc1871d21e3577314dcdba8fc538fdf88241da4926399f30671cd2e102085a', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78753, hash: '899b7a87b25fdcba65025cf53f4b0ade88ee4a0aa989dd4070684ee84db3f636', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110817, hash: '2cc5142f239f607c00faf1a976b21828b5425cf89d445263e6dde407c936a25d', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117447, hash: '6fb53d2c950071a8e0119aad0fe641784e2db3e77178791dce9067791d4c70d8', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115859, hash: '81d3bbd6ddc1088aa41ecfcd643fca66f88264db39547b87bb0d0f0833161670', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 115053, hash: '61f7d649d7216742a6248a45f27292149e0362d5b4a050aefb254a5dc1793a42', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114756, hash: '1b0a85da04994076c39c2c5370f2898d5f9bbe91cbbc6eb94c096cfcfc5cb99f', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 89651, hash: '0c8a3b3fd095d22f7eec7b6a18592c1d3b30fc3184a8319d0ec77c9549913126', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 101849, hash: 'ea1ebef01fd21537a91d771cf6cf2d53f6b841531d43847ab7e9375f2109587f', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 89724, hash: 'c8ee72d284465b18e9f7b9e8cf4a15e2bed6d1341a08c0e02cc51ae6d5cc363f', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 98185, hash: '9da82c1835e5d47fae3c833f4ef070fc108936c9d613bfd222b8b2a83b1e2e92', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 106241, hash: '87316438417d9578d235c7fe9511d238ce86c0130c927bc8f05bba369b37238a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65229, hash: 'dce17c6bf7edf6618f2e4e006af7fa8f93f1b7bba223bc8fb1f303a057326bee', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64413, hash: 'cd487acbfe0e5bda0af4b4f64c8cd3f9e76c128c5cff314adf0fd14d4e743d34', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82498, hash: 'fc912c3b3601500d5329e4ba940151c5b45537e6e3eaeff3a47deddc16b70f40', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78506, hash: '2043ead80c2cf74213270c19b42c3f01ed47582eaee561abf1c40783630a8ba1', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86078, hash: '9443bbd9b471b418311426fda3f8f65e04985869f6a4349a1379eb52054c2a27', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84100, hash: '756c6a9b077c1db159517cf5f267fd1aa82ba0d8949166bb050ba74bf2c7146a', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84586, hash: '121678210405c4f4d9373fe5b656aebbe5fefd45c61cf7b06965eb012683e14a', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67679, hash: 'c77d0dd052e16d5883fe13293d47e7f0a5f4a00963718b60d62f840f04296801', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89480, hash: '9a082f1d8cca8be7192769a876871e5b08e4f112d151d661d4cb379f8e83cb57', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67261, hash: '0ffbc5cc386e714d25d8956b4b6c57d3ce5c455d9fdba6a2d97f65a997efcde5', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 88899, hash: 'b79399e902cf918ac323fd7ea4062a4f07d4b426ddefbe4acbc67cc73820ddd4', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 107824, hash: '568dd49b09bc30056587b62f0ea536ab64ef17b3978f91e650d8a3668930d41f', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98548, hash: '729475c71629e71ce347cbe65949126e18f0cd0394f9699a93bf37b471b8423d', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 101482, hash: '0c760308bed74a0913e78c6dd625f16bf466859da3254300c945c7fd98632982', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74517, hash: 'abb62765e824422b77ebb48be7879574b6398490eec5f237f9beb0aba5ebe906', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73370, hash: 'e7c5baded5ab064d2056566f05b28ccdae353e421814d5777b8315b3ffe2f99e', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79454, hash: 'de73737e4d823dab3617fa8dccff7bda9174d8df9b25544ecefc48cf971a3f3b', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98771, hash: '5d6c508470d7bcc58caed16d2604d0efdd9382b49ca3553da3d1d0d49f0debff', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91337, hash: '6fb029c0921af80ae96ca70c5313f83036817cca6aaa2af7b089f4e1704e2cfd', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87910, hash: '0529d1a85a0e4120f45bf6ad77ca67590ef0eaa9b6b4f301d239c7a8b60146f5', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84802, hash: 'beead83fda76c72ff7f19fccac8cdadade10ea5c0c6e933c95d13a996b097625', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120810, hash: 'a137eabb7f974790466fe456dacda24adbaa39276f6f908c85eb0a827e09782a', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121049, hash: 'ef97e858f01ae10b9a45c0c10b3f5dae13713c593e8e660ca6e63d00928de807', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120691, hash: 'ab9ff478db1a62dbe835c5867a49b910d09ffd4656749b7baf1c2a8da26cdc16', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 118007, hash: '8ab75b2c84464fb22bb971f0cef6ccbf89c0db2e88f36e96970c7095868dc764', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
