
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
      "chunk-DmlvM1S4.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-YkkEsvxH.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YkkEsvxH.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFovuSHw.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlLp6aw9.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVv_26vv.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3CeOOpl.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-oVOiX5ad.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzB1gTFt.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B0C4eugD.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6ADbnO8.js",
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
      "chunk-nxrde5ka.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-nxrde5ka.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-nxrde5ka.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-nxrde5ka.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-nxrde5ka.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dn5UxYl2.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dn5UxYl2.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dn5UxYl2.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dn5UxYl2.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dn5UxYl2.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEBqUdVR.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dn5UxYl2.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEBqUdVR.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSVEr9U6.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSVEr9U6.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSVEr9U6.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSVEr9U6.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSVEr9U6.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSVEr9U6.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSVEr9U6.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSVEr9U6.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BSVEr9U6.js",
      "chunk-B8vPwO_P.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dprruu-M.js",
      "chunk-DK83O8t7.js"
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
    'index.csr.html': {size: 16193, hash: '91e615fa57140366ba34e258f628dbb7bf743defbfcf5a61160e79680118967f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'd446d2bc843b6551a599fe8be22f2a68e58045fa42be145927eae40980739373', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: '4d76a47ba3e46b76dbf56a82c3a4244ac5dce7a5e3bad53cd6787e28aed7d016', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '095f11a3d6f3d873d4f83c02f1dc62ed4a6cf5f5ddb4e2ea13fdaf8870d2bace', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '211d3e7dcacd2e5a8d668be3455c60a0358c4ac1fd1d00fa5abdde074ac99222', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '866b7c181aa728bf525d33fbba1c8ef3113c20a079ca14377d9e04162e870594', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: 'a2da5cb12eedfb442e77b84d1be64b1af6ed31d39b4dcdd05533f6066bfdcb6f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '3fedbbc096968f952fc8c863d1a55dc904a70105e962930d865e85acf8d1c8b1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: 'a1b2a807733b75e8ef75e96c868c919ffd3a19abf908e3b69f75c75f6fa40ad8', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75945, hash: '0fcf76d4a872fc417000e6e9d715a60866084ef76cb152e587a377b87ffd95c1', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: 'cbc30caa6c51765dfd9d9c94fce4cdb841a0ae78328e55dbc6a44e5d6a1fdc50', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: 'a5901c47ab2fdbcce038128110ab2ea8bcffd743287bfca69e16de855aec339b', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '2d57de9e6bad8f7a7d7e614a7eef28e9d83176046020ebd411dbe68cda787ea4', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '93112d8ebb7111044135f52b074b36df6968e322cff56471119658ad52a22253', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114732, hash: 'fbf23f8f4d8b1f70640ec02164c71a3838b2ea79793fbf3db770d8f87c5c767a', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108208, hash: 'bdd6b13a486f1605171eaa3ec868c574f4d61431525c35a30eac2e39cea1a17a', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118061, hash: '657860f11147802d781b5514660026d73623710c14767e496d39f3d3a04849b8', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118300, hash: '76a5ed361e841cf669937d0404111799868f04760ab420cec0b743a7575a7fe4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '9e4a62c495bb35a37d7b90cb671fcfa81e902123f797e18fa5919d1e5cc8d53d', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: '0ac4d29549f6f6d15a9fc490177ef5e779e6dd2661831ec039d3ff05602f33ae', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: '707855ccbd2c9d9b1b2dc1cbe04341a2d91e09464aac5ed90cd082138a9f9d48', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: 'e22b8bb18d99c32dd2d5ab3ecb9ea62abf3b6b37e871788a929c141567133404', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '0e346beb6fa9b1df021b825cb410bc7c83f6a0c8b40d92b1079532d0b292ca72', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '2df5689a924659232e61c3ce5f4b70c06c43c0aa7eb25c2d58d38acce52295f8', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '66dea2f189b718fccd02a7c76838921e34b64cc94e671ae6ce447c3b2bc80abd', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '52860b47831f1885506b2f4b5cbf57ce34f680738252add18189b8d11b89eaaf', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'd9fa8bdf7e76a1d7120f60ea857523b3cfe3b68fb19efddb6df80dc9bb018c58', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: 'eef0641e61f7a3a7f663a2dd6b857f98c1f595c220133cbb5865e152b784e5f8', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '8f7a282460f90ee03f191e572cb3a3b03fc1f88d2246b3d84106ed62b4b1a61c', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '83f8361432f9b3efde8eef330c403919cacd3dd0604566fb0a6fcfa6728cfb5b', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96811, hash: '1504298613df2c6a89db4f81a07e0e043cb90da2842a4b49594201f45da3c5e4', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99578, hash: '06d164820a09a8ae1883502f9f9f18aefe998d98424fb176f9c5295737c8e422', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104386, hash: '3a17f630d39020e05cfb7f6ada2bc0eec3e102c6fe47bf69758d06ba1637ee96', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64646, hash: 'b0ce86eabe16fa59e6590ce92ccb131e87356d220e3da1dfce1c2660a56e779f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79752, hash: '91154d4f24b0f4bbfe51d6dec5bd32e0211667d2d6c4541112777f43f647350b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80200, hash: '1363580669603eb933f6fa46c1a6234b46aa2fa031d1154b35e42086462955ef', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81348, hash: '64b972b21fb17917e20e567800ed4a03ddb0aaa8da4e6f622edecebceb89ec06', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96992, hash: 'e9e63780d5a740b9eb49c02736b1661139d653b177e34951d04180cccad5e55b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118107, hash: '5a31bfc9451c99edd5cd52b0867c40650bdf885a54491e799386d9bacd9c6a6c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115251, hash: 'b6d4a67c6cb9a28d0af402c1becddf1ee70a7993500f03be5bebe19eaa0962d4', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108909, hash: '7639c5b142000bfe005e30cb4e1a6beeff3c057dda673afa203c75db4ce99aae', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87931, hash: '1d048a46725ff07c154927074cdea9775c459442f13a0e12050ae619eb28b422', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66996, hash: '0cd05525e0444d6a5ec72a53971dfe93ef00fda901683a21198ae7c5499122ec', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88776, hash: 'd829a6a5a38d361426dea6075d25ba1fa52111a5a259ee78b1ec2a07bc9c0a08', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: '7233bd3e273fa2ae9fd8bc3a1412399f8551c594375822a44afdc3f2ccf58294', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107169, hash: 'db60b615afe4d427c39eac3e8631cc3005d4c17c302fd0266e3af9b73639b795', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
