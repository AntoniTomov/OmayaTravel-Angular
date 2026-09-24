
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
      "chunk-KbeHUPT_.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-C_nwLiBF.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_nwLiBF.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-akX3D-IH.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--jxN1grg.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DuBu6COY.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2SsJwfkU.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0lwEwoO3.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PoEgyUzW.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzkGRd2S.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3nFZ7lA6.js",
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
      "chunk-Ypx2TAc7.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ypx2TAc7.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ypx2TAc7.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ypx2TAc7.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ypx2TAc7.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CYSy5Osy.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CYSy5Osy.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CYSy5Osy.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CYSy5Osy.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CYSy5Osy.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQ-Qpvuz.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CYSy5Osy.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQ-Qpvuz.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNbXyHwp.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNbXyHwp.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNbXyHwp.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNbXyHwp.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNbXyHwp.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNbXyHwp.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNbXyHwp.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNbXyHwp.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BNbXyHwp.js",
      "chunk-C6TG06ri.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hlsgucz6.js",
      "chunk-ByCq_M_y.js"
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
    'index.csr.html': {size: 16193, hash: '5fcfa021698c52d1a6ae9844a0a5feb2df22230f64edead7f8d4d975b05ab979', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '351f1e16759b62beb6fd4290fe8f072673cecdf07777bef677384314ccde9eac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '85a26016fc9aab851ee8b79768dd02ee3d0fc3bbd685b753261aa6a9d13ecd60', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: 'ce775244077bb7b3bbdcf4043dbdc8c8fcbeedd26418b63c2a29f689bcfbb629', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '7d2801f2f3ab48911995d65d47618b9edc81bdb4cf45b7e31a1df156c777ad4f', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '1fe69f002b6ecc3e92f2892ff62989f49c89606759195050f8f8051416d7119f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '260a71a3ce0a2b9e369058c2e1cef7a523c3d11105d3e75f67d56310149d367d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '6e4b422b9c26517bfebeddc0f92a7fb3636d8254991020c892dbfaba9ce466df', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: 'bdef5c005b3f1c74891dd7c6b0f7fcaa1e58e89aa97e45b15ec8e066ff96bc13', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 77858, hash: '01716d0466a0f4883c80262576847173a2c7f15d7404f37997c0958a41cba8c6', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: '354a4507019e6cc2a28a6380d49fc8b1dbed1501c3c48c22be76d78663df1f9f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: 'ab0497fc428f2fed4f03608a939dbaeba13beb37552e60a76ebf3cf0e732e42d', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '0eac16699ceac26d71315c160a8a5467f124a006d561def580ba2c786bd6be76', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '9ec04fd587a8bee9c58e9cbe063ef2a964795b80495ee2ce251b94062e06ebbd', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'ba495ecb8e4b341cf97417697e6e31632b044b6682019ccaafaa0b370725d905', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '56049691b8437d3c22a0b550ddc5178fe641e532f55d96f7f3b8864253a96a64', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '4f729d1b42400ffbaf25665ecd832b8d64491b9738459198f03cbc7eb8158c26', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: 'f1c8c6b3da64d00414670eafb7f67eeeee127174b5d42914d34b87e8edb3adac', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116708, hash: '81d1e766464f5bcec13e2b7633ff8ea3ff129ec7b704e853e71316218e81d5a4', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113317, hash: 'f0e9f9393551e1754b0866f8ff5506178e56a4c639b3f92029b08f824810c48a', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120037, hash: '9910a75947fa6baf921205c5fd1bf1a20fff475e4b4519c21c81ff39dee6b630', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120276, hash: 'f425531a6afd322e97af42c4416d15a09580dd90aedac7a39a5697e8042ffbcf', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '47fba11d73aab41f16942b0de38c0d632d14d5cdd1a9b14ff5430b3299242f3b', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: '8835e7419168723634bad341481c9451196464535665c1e9ff46c2bf444544ed', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: 'b8362cb141d4d1a1093b838c5e0135b9e16f0c1d27282aea0220cf76c550bf89', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '9f17595ac8704af02f1eb23f177e2dc6b043a021743cdf36658373beda2039e9', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '3533e7bddf2860dc4bdafa1945abd5b7a9309de74d945b76f5d8afcd32c318ae', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '6d848e119a82ac6f20b79cc5a666b215e4931f7c6075481eae7acffff69bae02', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '5f52ed034fabc872934812a70b8fec72fe678535c1196d0e2e5f0939173e698f', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: 'deb615449110ad153ba9e2b85b3ed9671e36368af2321e0e483cccb0ee1d73b7', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 81667, hash: '646833a5a3c47c460b1d69a9046876afb62c0120dcd43fae90bf2fcb2e00866d', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85247, hash: 'c39eb6bf492c76a7fbf9579a899a3aef03cdb29c9d27e939b44fde3204d24701', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83263, hash: 'cc6c8b0165cf0f430f4f317418b6a7402baac8fbf4f9b0c0c491214f81fa6b72', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: 'ffb509da3f0cc8d22feabe9badae35c2f95995a023cf5a3cdbe9b0784d2c129e', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 119918, hash: 'c9ec8795af9f6fc3962b283c803d1416d2397a9c125d3788d5b3e17aeb799683', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117226, hash: '3e57685ae44d62ba59c1d387a08a82e52b85026294fb0bb3e500454dba4b8ff7', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114017, hash: '7ca1f22668f3f5d4c9fe05ab4637fbe2fca603e3d3c5e2f4b9ba5ceb0d95cb79', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87953, hash: '6f8388f958b54b7ae52d24aba7acda972a427fd4bb820fbb9c8cd65c7e7c93a7', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96811, hash: 'df3be009d902b6e3a33edb324938b459ec6654b3021c0e5162fb8d8b24916aa3', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99578, hash: '1415642a4c7a6ef56ad8892fa9a5a4d2a6e89c4a4ff7df409891c349f57ce994', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104386, hash: '67cc1d117fd73854dee8b7904c7ad377444fd8a0ee0b5085d433f65f5a10def2', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64646, hash: 'ebd509c187ab120d4b7c75b05182d700568ab4536974a9175582c507ec575162', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66996, hash: '4259c8376281ad93b64e9ab56d1af16599fc911e5c71e4a90940b5303401a37b', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88773, hash: '25effdef1aa63632b9e916050a2c174fbd03e943db12206ad980be509903dd4f', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: '63ad38bef659346a9ba3518d5576286f0776dccd797579647ed2198e95edfb42', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109112, hash: '89ff865145b92c6038ddd3c44d6973a7b1c0057eba15b7f28a23734a6e906294', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
