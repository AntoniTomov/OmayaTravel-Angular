
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
      "chunk-2vwuJBW7.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-bEAk4akR.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-bEAk4akR.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BBNnQ6uE.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpjtUAqy.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck1ul0JI.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C7w2Amgh.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CP3d23N_.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Brl4fv_K.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5nbyfMg.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BC_JNXs2.js",
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
      "chunk-DVNh4OT_.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVNh4OT_.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVNh4OT_.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVNh4OT_.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVNh4OT_.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cv8oQVOR.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cv8oQVOR.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cv8oQVOR.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cv8oQVOR.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cv8oQVOR.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BiqfXmok.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cv8oQVOR.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BiqfXmok.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBz8OVCa.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBz8OVCa.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBz8OVCa.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBz8OVCa.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBz8OVCa.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBz8OVCa.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBz8OVCa.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBz8OVCa.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DBz8OVCa.js",
      "chunk-BCd44NmA.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQwmEv3l.js",
      "chunk-BzwNOcZu.js"
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
    'index.csr.html': {size: 16185, hash: '012fca0c2e2e84e7e9372827e3e5c04733c7bb051de4519c48d1dc04fb38b760', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '328f3c7dd6566091db0ee4dffa5877c3d5d67bc11739e0d14eb326cd9014f536', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105104, hash: '3c49686863eab7969cfb1caa0d4b47fe7303085234e41479552a80e881b8386e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 83367, hash: '4bc6642a47058981b08dbe7098e71cd0e117af57e31a33ddb4fdba7cad648faa', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63177, hash: 'c87e6ba8700bc75c715acaf0a5ba5ff99122a046a3e1ee44dcac1c31fa025678', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77215, hash: 'ec3ce4dab5f57ad42dfb2873372adc5f23e4573daf52a8d5e348c5c33ae44d52', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76256, hash: 'a950788434d3b230dd8ec0fe6e16ab6f57b79399e695107a258f7a67efd068a5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 73801, hash: 'c3c74ee7ab4c864b7949dacfc47391ce0a9d2f881cc4070c30ffe024d9bdb1b5', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75276, hash: '777ce56c4a846986ed58b3389636a226634dbcc27d0ecb805d9b824f460806b3', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79083, hash: '99af2b715ec3650a9f709db74d5925d4c38c08870790508037566b69be20a174', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 71387, hash: 'd018a51eb22930513f044e289f3422b3023bb619e851b902131d698cce78c144', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72282, hash: 'ff69f4cfd4628b2d8d45c89cca3f44df28cee8c060fa4c0980ca5cfe39cb79ec', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 70392, hash: '146809fa9798123962308a92c01838c14c7b73ee79d11a504b537aff8b9fe9be', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63147, hash: 'e2d1fb86431d8e77982422a5132328da8b32e1e497d8bc68c7cfdc3706d83496', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 72373, hash: 'ed0ebd5ccaf08c09d143b78855a69163e111a4b600334379894fee17f55e989c', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 69724, hash: '1ac9f80accaeeb5b57e6351bed2dbed5f99a95de9126c49a0424f85e18a74553', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78110, hash: '4024f37cb8aecd3947b52694e3406abb68bfdacf9b18fcf3328e9e92c0fb0510', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 106955, hash: 'e774eedacfb0ea319c9b4e3ea8263bf8728e7fbea9e27995b969c5877658bb70', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 116808, hash: '164c7918622a23b79aa355520969127807999e8a24bf9c53391f7c020c9e0e87', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117047, hash: '859e5388042463683e39b8d9549cc508b8305858a86401483e2096079ee90ee0', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 116853, hash: 'd21de5b20ea4f9d00e207bad21cafc566cb674535a17854c9955677a82b5e42c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 85343, hash: '53e83eadea454597fc045ee49ea82c440024ee3658f7d4760e8a7dc53d2d8218', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 85139, hash: '634c45cc89561c01fcf21bf0c778c439dc43c1d7ae81c65a7c9f1f5d96e8161c', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 101953, hash: '657597dede658996bb596e5273e8b76305fada20b66f78d22a7edf78c378d491', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 91756, hash: '2eef9ca20fe1edc3f861d4532cbac2594e4f19d81055b2ddfd55b0c1d6ba625a', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 86548, hash: '6bd874e8cefaab82dd5f4a5f0118e7e464ecfaded52a4ef89069cb83f07f1cd2', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 83440, hash: 'c9de5ce2dc402d6418f456f4ae507668c3121915c4163de65df3816e42c5d174', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83217, hash: '825bcba3febc76394ece379783268e1b0f7eafa7034ef75c5c18f4c8ec995449', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66327, hash: 'a376c37561190c31dd70ea654533e4beb20ac9b001e284ff3c1c5069d6d83a2f', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 113997, hash: '780fff0f3a93afcc4d041dc85b7def187f6511365325ff7b93bfc368226ec5f3', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 107655, hash: 'ee38e3628a04d1fc7d93870480567bc2102371a89e209085d6c0b12eb37bedfd', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 85241, hash: 'e4f965595ffe391c55084c5adf5a1c226b9a9418b0e260b70c825de7f4f2d57c', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 97202, hash: '0ac3e7184028172474ee119cca50715729dfd235a2c9d0b2f64f19984b67724a', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 79607, hash: 'c35d4ee71f31aea9bd68b763d7be723c837824d937940cb52e3d2c3fc7cdcd05', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 80679, hash: '33a2f5bb1ebb985fbd57aff5190e335fe82c7b2845b7a1cf644509e0356be671', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96321, hash: 'ecc3ef11176983edcf53fa492617fec8438a349780cebee80a1415e7aab96616', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 88483, hash: '109eada39eb4b1bbdbb8f5e2df2dabaec2dfd1e8e716f6f759ce2871f25899cc', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 96493, hash: '9f3d482a0d9c9eb4e7020f46658ebf850731bc28b7f63d57d2c71667810d4e65', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101338, hash: 'bbe1a674b7b3ce8c92a9b2cbbf748a2e607749b3c82addcf6198e7119a73978a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 60929, hash: 'da932d5a4581b16535264b4c6a23c30ee560e748fc0859259c3b9ea0aa459cd7', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63161, hash: 'ecc449ec7218d1b02d04daa256181f7cb4f2255aedf328f4131580705bf2cf66', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88124, hash: '54a099441706ab2e8b01ac66868dd269df033e7e1612bee5cd859c0a89074cd2', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 65905, hash: '63f2a8c4c81ac7938c98b42f6ca22c25556ed4b0107d10fe5107e4d7dcc864de', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 105855, hash: 'f5993083c03e944ad45e84a2fc7e1dcaa60b1b6a352c4d969087843c45c9c593', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113479, hash: 'aa4a5ae6c2ee07cb263780a1ec78819a58c4bc523e6a262e0a72b90a278285c5', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-YVRPPUEN.css': {size: 11701, hash: 'C7FUCYWyi5g', text: () => import('./assets-chunks/styles-YVRPPUEN_css.mjs').then(m => m.default)}
  },
};
