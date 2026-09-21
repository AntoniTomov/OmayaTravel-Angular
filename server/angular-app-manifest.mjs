
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
      "chunk-C8SUJMZ-.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CfTU0068.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CfTU0068.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NAbxeVzF.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BYB5jO0O.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJvdH5yb.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0oulL0qx.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEmobqbP.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CH-rV5Dm.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuFAEZP4.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DR_NFkmt.js",
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
      "chunk-DVaDU3xJ.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVaDU3xJ.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVaDU3xJ.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVaDU3xJ.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVaDU3xJ.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B71urOJn.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B71urOJn.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B71urOJn.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B71urOJn.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B71urOJn.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSAtceTZ.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B71urOJn.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSAtceTZ.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnLXIAXP.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnLXIAXP.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnLXIAXP.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnLXIAXP.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnLXIAXP.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnLXIAXP.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnLXIAXP.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnLXIAXP.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CnLXIAXP.js",
      "chunk-B1NDnT2h.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMZhbz3s.js",
      "chunk-BglLbSDR.js"
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
    'index.csr.html': {size: 16185, hash: 'f9f7fb327f0ab80146d70c4ee5134dd68b493fe2e556089f5e187bef57b3d72c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '6d8a57f0cc3c15d497afcd18b8fcedc74bc8fefabc62d6df0d07d89ffa0810c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73429, hash: 'a55d2deb0f92c0fbde861d9687d10e7f4f5fc0ddb377050c110b3f23fd19c170', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72943, hash: 'ccde4cfff894bd2f8809ef3c685506f5e5460b958f958fb08915e8ea245bbc11', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71053, hash: 'ea08e04b40b477ae7482a769287133d6e5958df57eca8e06fea62491372e0b79', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63808, hash: 'bd06b3249d87b20d6b1a83dc720ea48334b6e2249a722afffcab053630c60b1b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76917, hash: '5a127a7b8633aeb7e6d865e6ea22570574b65ea75efc878426ab163248741a97', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74462, hash: 'b8bf5b26f8b6fe362ef65d25de4050b5c3ac033887760934342448287824f88e', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75937, hash: 'c22dce534fa130006fa20dedd08df33a3365777aa64233b18fe0def1f6f7380f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79744, hash: 'ce84650dcfc961aee327fa43e7cec664a6f45afb986c12d5490df82f807c4e87', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105768, hash: '6ec02933331fcd7d57d1d304b0970c5534126256da4d54fd3a7586f04804b1ba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85884, hash: 'b97df8feae9f00ecf21c0a26f2ebfa41d0f3d993d570821501331a7a199a4da8', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63838, hash: '3688d6e98664f9db1ae2ddbcd7a99512ff6a1316303103014bec132727b8f62e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77876, hash: 'fe19ff0cfaee7f3eeca474d1d8979ae5c8ef23782d3c45d1ffea365edd5a848a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108173, hash: 'dd1c75fb31a9036dfab15c198eb05fd06db9097b00a48f344c62ae73421b3545', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118026, hash: '06d9593071f0f5f240227236a13668cdcef45c85d1e67ce2fff19b168402be8a', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118265, hash: '1b53fac27f962949afa3b38e5bf64c1e2ce4486d2fd6726a85cf960498c668f8', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118071, hash: '8a24f35f5fed2f563b777de0bdab925b0c4a6b265b5635cbd58910efad8d5dce', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73034, hash: 'a100692ecc971603aad00c5e86713b9562e70339406939783bff2fb9fb593bca', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70385, hash: '8450a0bea4d0c055198a71dc10015555cfb7d19db8f805d00feec8ea781d3922', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78771, hash: 'd1005f802d20a5c939392d29d4964404d57f8645002ce941dc5a39ca57d143d3', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88001, hash: 'd6d69ef3ee55a81145104d2e8a2cc5cc167535e18a52036e4e6babe071474743', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87225, hash: 'dc2c17848003b258dc9747dc4ce99674b3e332fec25b9e2295231dce840b9751', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106082, hash: '9ae411551debdea72dfd2626756f57b7893efcc5e9fc3c6bdcfc8158303b0445', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96803, hash: 'fc3f27388990c30932dca5ac23c2da80200ea72d8068408ddbde9dc7152eee79', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87209, hash: '612fb131af2ec2fd8b769df9474d1e9e74a05e0937fe27dfec35ee8bbc0fa212', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84101, hash: 'e7a33fed360638967336588f728b1dd87441998c3ec2995b1b6a1c112680bf91', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83878, hash: '16aee16f9866a53ca2dad4e63ce7fb39783673e3435ff7513f25c84dd34b39f9', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66988, hash: 'e0504a468906b959ef95bacfe91b839ddba80ebff024bf4c3397674d16e543e0', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80192, hash: '02904014e967fe709cffb9d7f84265da633311bd55845298a0adfa1b309fda4a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81340, hash: 'b4e654f0ef01337a1ffc74d6b3ff703c0d3db684a0ecfb949fde6af257708794', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96982, hash: '832fcfda1f31cd90e22007e3a1338ccde48f1ac4449d31c667ef5022d1392a33', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89144, hash: 'a9d70abfd9927553a67a887b16b1ec623fdca1804c6f958ec8244dffe6c79b31', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115215, hash: '53399d64c491ecda5530d455f87b31af1f84068a1289d5ead1e62ce1302a181f', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108873, hash: '8d18505f28af445672fd99d52bf78ba1cbd88aae11ad92a0c6703144dea79971', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87975, hash: '6c4e7405a025331dc2353905f2fb35ccf8a31fbd5460f1ef5b79caac88eb51dd', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100085, hash: '2d750393701eb873775f1d74f61741e464df50a97fc6ab7abc66c014ca8e513a', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99582, hash: '316ec1281e4fe00b7b6317ddfd193e87bac79a0d1f3a16373143659bfa4c2ad1', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104399, hash: '9a41fa432a2bdcf267f4e8724da0ea7aaae9973b2449c8510a883b134f2248d8', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64642, hash: '822d5df5a375d734d3e97240fcf176178b8b58de0d27b94be3df4256478442f9', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63844, hash: '5e9f354a829b84fe276882ff29a72e6aa46b215a134db172361e8e7f6aaa36cb', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88765, hash: '0876b726365814d3f857a47ebeafc017d2cebb233cab96c8be6be38458b1fd7d', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66558, hash: 'd6755a6f14d5a10155f761daf8338b0e922c956bdd1510b4ce824e8a2442a5f4', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107093, hash: '49bf198551b9fd8fc98495d82df513919cfaceb336b79b5987f8293b811d0905', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114723, hash: 'b3c88ad04010e5c8a1631d7702d7763cd7573ea3350790cad2e8d19b60bb2d9c', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-A347SVMG.css': {size: 14125, hash: 'eSV2injb/Ms', text: () => import('./assets-chunks/styles-A347SVMG_css.mjs').then(m => m.default)}
  },
};
