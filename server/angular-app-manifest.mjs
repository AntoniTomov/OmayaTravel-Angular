
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
    'index.html': {size: 105768, hash: '6ec02933331fcd7d57d1d304b0970c5534126256da4d54fd3a7586f04804b1ba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85884, hash: 'b97df8feae9f00ecf21c0a26f2ebfa41d0f3d993d570821501331a7a199a4da8', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63838, hash: '3688d6e98664f9db1ae2ddbcd7a99512ff6a1316303103014bec132727b8f62e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77876, hash: 'fe19ff0cfaee7f3eeca474d1d8979ae5c8ef23782d3c45d1ffea365edd5a848a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73429, hash: 'a55d2deb0f92c0fbde861d9687d10e7f4f5fc0ddb377050c110b3f23fd19c170', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72943, hash: 'ccde4cfff894bd2f8809ef3c685506f5e5460b958f958fb08915e8ea245bbc11', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71053, hash: 'ea08e04b40b477ae7482a769287133d6e5958df57eca8e06fea62491372e0b79', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63808, hash: 'bd06b3249d87b20d6b1a83dc720ea48334b6e2249a722afffcab053630c60b1b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76917, hash: '5a127a7b8633aeb7e6d865e6ea22570574b65ea75efc878426ab163248741a97', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74462, hash: 'b8bf5b26f8b6fe362ef65d25de4050b5c3ac033887760934342448287824f88e', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75937, hash: 'c22dce534fa130006fa20dedd08df33a3365777aa64233b18fe0def1f6f7380f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79744, hash: 'ce84650dcfc961aee327fa43e7cec664a6f45afb986c12d5490df82f807c4e87', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108173, hash: '4a48c7b8a3807406a68d95b6cd6b30e340c66ac533c098ae1bc3351de62dc7ee', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118026, hash: '7d1dab6065ac21f20b1802458fdf6fc7847f3696272cc01b4c523ae7c4363c5f', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118265, hash: '1a08d417ebbe7469311fe74bd153c8c9b2c678e4f53a55f8e228e2dffdcc956e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118071, hash: 'fe96e5cede0d8c0c5a8f5b743eaffd82baa48b8c52e91ae1fe76c1acdbf48776', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88001, hash: '50deec0c3ec8ace290b550794cb9cbb4d681f043609ab2436facc2af029852dc', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87225, hash: 'f78b134b0546492b2db663bfecf1d3612c799c78424f0d4462036ef3380e018f', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106082, hash: '6061ed94d343cedbd8e2c4abeef5b186844742aa76a21253134d84d4d842ab9e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96803, hash: 'b03192990e5155ebf53ddb44bdec57a0c9b12489c4274a5dfb4ac38e1dbf8832', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73034, hash: '017dacde890871d345f10a9ab862daefeddc3c049dc99e72876dce9c285810fa', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70385, hash: '97e80d810b5c6886bfbd059d2a55f19e4518dc08ada8379c702afd2442bc0d45', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78771, hash: '28b28b9e7b0d23fce47fb158eb283292709f5b599992c33ebdd754866b47dfd4', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87209, hash: '96cb4f70d85ad7d4ee82c49f5480f86c5ec7a37d830acebd9e318d45d94e209b', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84101, hash: '98ac99dbf9a7f06220653561a4b7410177fc1dd1421a1e9769af8e9e97b1887d', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83878, hash: '726ebd4e5a970b63fc12b98f1ca888ff576d8ffe6c76be040705c48e9467931f', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66988, hash: '8a4af8e82b20af4bd5f844a8d39aaa9828929966c04eed96784a15338bb873a2', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115215, hash: '4a54dc3fc4d810952fd36c736f550be44cd94132ed6231ba420c21d6327a9f22', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108873, hash: 'bafabedc34d705270f083918419ab42d2e81f1b31b3aa001fbf48cc18bd6d11e', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87923, hash: 'e71e3a9d46bba026430048c52954208995e0244a08ed1ec76f826be4950ddcb4', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99947, hash: '4852ea13d64f4189931a990c69b3d91a487a86669b0a6d52ea6552b7d692bc56', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80192, hash: '02904014e967fe709cffb9d7f84265da633311bd55845298a0adfa1b309fda4a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81340, hash: 'b4e654f0ef01337a1ffc74d6b3ff703c0d3db684a0ecfb949fde6af257708794', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96982, hash: '4bec3e0f4fd252429475534787cc865b9edce947f52c21ee5b52b2fd0975fee4', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89144, hash: '1f6d6a96f3137eb70a0fcbf08d4c6bf0c196a4e28f12fe485fed8c733c45d5e5', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99671, hash: '03d645ad0c1b15826085ef4f4d39d7966ab0470c08908bebac728a13e8b432f3', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104545, hash: '4900f1b87d6ab0651aab7edb9b023c924f30f8249cb9858b59c249134f53b129', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64642, hash: 'd2823362274805ac716b8791d9caaed1de1ffb4901b4fa8269e02b9eece72c37', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63844, hash: '30b2eb11cd66d006b1d1120d819bb2cbf3c497581a0c0dda8a74a8293f925574', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88784, hash: 'e13f5ccfef260d3b34a7f921c1d818f9d251de8340cfc55d3c8434a66b454a70', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: '35cd083ffad85fa86ea9fa123ae6680ad92ec8a1e3dc2a831228857335c7b8aa', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107073, hash: '2c535f48af9cc91728015db84811fea9f51c720a8d25496a680b2f118ed3ca0d', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114697, hash: '931e7b23a2372efae51c1342a77b87bd5bb2b0231134970a0448e240f43b81bf', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-A347SVMG.css': {size: 14125, hash: 'eSV2injb/Ms', text: () => import('./assets-chunks/styles-A347SVMG_css.mjs').then(m => m.default)}
  },
};
