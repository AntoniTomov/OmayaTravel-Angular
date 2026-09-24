
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
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '260a71a3ce0a2b9e369058c2e1cef7a523c3d11105d3e75f67d56310149d367d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '6e4b422b9c26517bfebeddc0f92a7fb3636d8254991020c892dbfaba9ce466df', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: 'bdef5c005b3f1c74891dd7c6b0f7fcaa1e58e89aa97e45b15ec8e066ff96bc13', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 77858, hash: '01716d0466a0f4883c80262576847173a2c7f15d7404f37997c0958a41cba8c6', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '85a26016fc9aab851ee8b79768dd02ee3d0fc3bbd685b753261aa6a9d13ecd60', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: 'ce775244077bb7b3bbdcf4043dbdc8c8fcbeedd26418b63c2a29f689bcfbb629', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '7d2801f2f3ab48911995d65d47618b9edc81bdb4cf45b7e31a1df156c777ad4f', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '1fe69f002b6ecc3e92f2892ff62989f49c89606759195050f8f8051416d7119f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: '354a4507019e6cc2a28a6380d49fc8b1dbed1501c3c48c22be76d78663df1f9f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: 'ab0497fc428f2fed4f03608a939dbaeba13beb37552e60a76ebf3cf0e732e42d', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '0eac16699ceac26d71315c160a8a5467f124a006d561def580ba2c786bd6be76', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '9ec04fd587a8bee9c58e9cbe063ef2a964795b80495ee2ce251b94062e06ebbd', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'ba495ecb8e4b341cf97417697e6e31632b044b6682019ccaafaa0b370725d905', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '56049691b8437d3c22a0b550ddc5178fe641e532f55d96f7f3b8864253a96a64', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '4f729d1b42400ffbaf25665ecd832b8d64491b9738459198f03cbc7eb8158c26', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: 'f1c8c6b3da64d00414670eafb7f67eeeee127174b5d42914d34b87e8edb3adac', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116708, hash: '7b74fd9d10023c9140a83eede3fcf00c24a415b622917cc9d2223b7fcbbfd893', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113317, hash: '916cf0ddf40338ac1a92a2422e72b52adf125ebdd525e6df22c3732a24f5090f', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120037, hash: '608b33006a2d64a16baa27d8aeb9be55f0e6b04e07871e64119de45d43a445d9', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120276, hash: 'f11774c5184b98faa31617c5253997a44ab6ff0064d9908adc96f26ae04b68cf', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '6e025518d8f9a403acc66da7ddcc0038888a8f2d84a8820c0c669957ac85a959', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: '812c94c6c1988e45015b9a466312b02ffb073a106c18b2d6b88a27edcdd89210', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: 'dc7b7b122783556a9643bca4da6357afc0b2675c7f90867f90c374b5b7a8bdaf', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: 'fd96887a00596d4bacb1aec4886161d107af1d1cfbf2e97af5f8db80a7211f27', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '3533e7bddf2860dc4bdafa1945abd5b7a9309de74d945b76f5d8afcd32c318ae', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '6d848e119a82ac6f20b79cc5a666b215e4931f7c6075481eae7acffff69bae02', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '5f52ed034fabc872934812a70b8fec72fe678535c1196d0e2e5f0939173e698f', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: 'deb615449110ad153ba9e2b85b3ed9671e36368af2321e0e483cccb0ee1d73b7', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 81667, hash: '26f8dc28d55999911e7d940cd46f89fb4f849b2185933377fa240e20bfa93e95', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85247, hash: 'a7369428442413c3b62102153952c7b6fea8404381ec57855a14ac9b91fa0f99', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83263, hash: 'eb3b1c01ab69ff8fbcf87eebf6e69f2d3185a45b16d02d65c067e7cbbf5db949', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96996, hash: '9cb9547120705a5c373db4b54a8195045e2c46a6d0f24f4e69f0372b992d9446', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 119918, hash: '8d7baa4dae6c60aaac8b16412b663837a9dca031b2b5ac01e7540e4bf5a7e55b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117226, hash: '6a3df3b29a41e8606c23720472e8a74aa01187551c1c2911e9f93d1ca87f2506', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114017, hash: 'fb2c3c40e2bcf26c338da78285e11b4b571b3959b56c8903844713b82d8de531', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87936, hash: '8545154829606ff69b59475c90e1a18406a8f26281121b252213b6d7ba0b8c48', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96811, hash: 'df3be009d902b6e3a33edb324938b459ec6654b3021c0e5162fb8d8b24916aa3', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99578, hash: '1415642a4c7a6ef56ad8892fa9a5a4d2a6e89c4a4ff7df409891c349f57ce994', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104386, hash: '67cc1d117fd73854dee8b7904c7ad377444fd8a0ee0b5085d433f65f5a10def2', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64646, hash: 'ebd509c187ab120d4b7c75b05182d700568ab4536974a9175582c507ec575162', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67014, hash: '0b4b98dde13d08e34ca48faeeaad881b6e94be19aa1cb9eeaf8f9feecae88931', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88779, hash: '7e0e8ecf5621a83602ecbcc9601a696e22a123913d1d7cde1376500720673ed7', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66574, hash: '1aab2a71a1ad05347652f48d7f0aff4bc9021c1a747b7140b5df2b0899b1f0c7', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109140, hash: '1cbf99e6254019d70a9ac06aef3e7f0b507aa8a75f202351b3b1dbbd3769dbea', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
