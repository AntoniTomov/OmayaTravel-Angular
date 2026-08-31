
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
    "status": 404,
    "preload": [
      "chunk-Dy2uDGZj.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BaQZdqdX.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BaQZdqdX.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4Sg12TIV.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cy3TTF4v.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B20LRiSk.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH9gmLqM.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UU4ORNFF.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A_9XF0IH.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D4cksveU.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1AVFCZ9.js",
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
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUytiHtw.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUytiHtw.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUytiHtw.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUytiHtw.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUytiHtw.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUytiHtw.js"
    ],
    "route": "/private-tour-planning"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUytiHtw.js"
    ],
    "route": "/september-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2skW-BM.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUytiHtw.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2skW-BM.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz7GvRmT.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz7GvRmT.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz7GvRmT.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz7GvRmT.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz7GvRmT.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz7GvRmT.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz7GvRmT.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz7GvRmT.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-9EfqMVm6.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-9EfqMVm6.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-9EfqMVm6.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-9EfqMVm6.js",
      "chunk-LRKqUKK_.js"
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
      "chunk-Djl6BSTu.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24167, hash: 'd8343a8ad0eea28d4b142ee8ea1b9d14e094eaf99c25aca4896c232284111b4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23194, hash: '9dac4aab71065fbdeb5afc7d399f588773a8b0968438461dcbd190e92597b0ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 79280, hash: '3986cc2923e04ccd6e9f12a148a8171aa856328a7350c8a85f21f1a42108a14b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 62527, hash: '023a19fa6fc26dd121c955e46388dedc40d2c1122c5db0ce64ac1f717c11c117', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 62541, hash: 'a899fd4be12fab0de98fb09691837db75958685ea03c1bd79837aedae5335f66', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 62542, hash: 'bc0d891eaecd511fe3ed12c69b92b668110f8cba8220210c72b3a2f3305741cd', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73425, hash: '3927f0a1fb5d876c3e97abb17be3d0ae1e8f54036db407ff1d019996b35a90ee', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 71314, hash: 'da5e67159bbe5d7bcfb845a446ca77f47097111ab578c9cafec8ab6f5ef79b10', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 73594, hash: 'a508815f24a6d15d79afd1a5f0fce041a267accf7f23c6b7a9128349f93f0af6', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 65818, hash: '87f631d444adb92f2dcb22991eefe80e8f45131973fc0698b1a6d84f6be877dc', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100459, hash: '1b61b4b246c53a224f5a9cb855309c3d86567dd5478e51f5f59bf346906d3df2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 74885, hash: '87e8f8d9c1fc800fd71fd15353d153ef8be3a05195e17d3566c3c1279f9be9ba', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 66317, hash: 'a8ccbbbde2d0c0d582fdc51e230a9c6b8ea1276149f753d3194d3720628ddba8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 80095, hash: 'f5b2d31379665189bcddc06cf171e84cab456267bc4bf5ff1ef0ae4de24d9881', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 81302, hash: '226a3f09e3864cbc1e518204a075e641a40af3951c531069404130acb6609171', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 98029, hash: '58d4360730f1ba724c6546b498dcff14b05f9780c727a8364a7ba9bf107fc02e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 87363, hash: '72339f6fda61f0e084b81045db645477818d6bb65c7a1247100426af3034a3b9', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 92635, hash: '8ef644ac417e5fcf4188a9a852503f3829352d5d39cb5a9fb38393673160411b', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 96655, hash: '13775eac0bccba56a6ff9f79afa97da8859f0ecc45cc3c0ef0abc3cab00ad118', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 84958, hash: '31ee510286b694f007072a3808c3e031970730e1bfd22670724bb81fc5f66be5', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82174, hash: '019e26d41d7af720e0b192ffc3f2e1b346a6cbd16f033bc512f35a0cb5a87a10', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82025, hash: 'fbf5d3422edf9b0f9cf83f35fc6940aa6d560b4ea990b7c425b97de043b3ab2d', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'private-tour-planning/index.html': {size: 86230, hash: '39e46c13e905addd9b309b6ee805109958cdfc688a87ae0e3e6450007379c4b5', text: () => import('./assets-chunks/private-tour-planning_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 95768, hash: '97a3db67d3360338279b2aa797de13a667fce8e2cfd62ccb26730b2522debdbd', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 96825, hash: 'ed9122eb7d4bcdac41bd891953d26efe321161f2ea64ed56befdcf54d7b395e0', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 96473, hash: '168a704001fff0a33a2bc3aeb723b3fd6be466d7fa839acf7b61914b7a2e284d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 98767, hash: 'dfc83402ae1d7a56da4f09e36720cdafbce6385fc095800543a92eefe54f8202', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 62544, hash: '95d7555d7362ba496b3bf59c0bc0b8a2239edd938409356c098246e03ef0fbf9', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 62541, hash: 'fc384fb3bfd55affafd46482fad681bc7db470c5f63c09905354ece18cf7d620', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 93367, hash: '64d0375ffbc91aeadf070d500556db04fd239d1fa8705946cf9c50ed843142cc', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 86232, hash: '572749e573f519e9c9cf864a75e9e6eecf897ec3bc3409f0423c4776d2b88b72', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64453, hash: 'fc5fde37d08f3977ea40be2042eb203158c6f14bc238a1c40529594ddf66079d', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 66279, hash: '29b6b60dc05679ae06982a1ca2d4fc476bac9ff5af3f6ee5c2b877cf48e59903', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 75649, hash: '3e2757ffdc3da615134e9220bf3c913eb4182124f4b45bed72b4c6074bbd1627', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73004, hash: '8f1ccdd9cde8363995e12a34922dd88ff9a4b3dec90a36aea92b974be44c0629', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 98816, hash: '885e44a70fa9b9de521f11198e3c4f31d9c8e4e42f9af204bed63eee94345232', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 98807, hash: 'dbe4e00e75f3a17cff3d49b4c9390f775ee8022cf332db6891f6dfd9498c967d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 96936, hash: '4638fb11cfa65978361ab922b4119b8f2724f52e16cd39a0510ba0b7f05822c3', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 96983, hash: '07ab9caf389a58811e3c11b08bf0532b30bbd90634262b282419429faa6be932', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'september-2027/index.html': {size: 86121, hash: 'eb74e191cc8cfeb2306e4a75822e42c1289d5cf74a396ab72f50f1589c465c37', text: () => import('./assets-chunks/september-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 69675, hash: '26c80da8393a408891d368130e92e68f8baaca6b380497d91467a4bcf8f9dcce', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86121, hash: 'eb74e191cc8cfeb2306e4a75822e42c1289d5cf74a396ab72f50f1589c465c37', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69339, hash: '19ecbbc48a3d0562eb185cecc6f0045096d5d30d003858a2ce6999b31e11c395', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-RGJZKMT3.css': {size: 6006, hash: 'XLETGTWqs54', text: () => import('./assets-chunks/styles-RGJZKMT3_css.mjs').then(m => m.default)}
  },
};
