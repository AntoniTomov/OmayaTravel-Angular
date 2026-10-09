
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
      "chunk-CAEY-not.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-FtU5erL_.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FtU5erL_.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIV5FWGG.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X1g1PfdP.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I93lmnzn.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BO3SXm6N.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CR8sFvDB.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-slIJEoyi.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEd-kjFt.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dry-xohx.js",
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
      "chunk-BC67EF3W.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BC67EF3W.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BC67EF3W.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BC67EF3W.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BC67EF3W.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B08IWhHg.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B08IWhHg.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B08IWhHg.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B08IWhHg.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B08IWhHg.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-rCzwgfds.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B08IWhHg.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-rCzwgfds.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUQinyAV.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUQinyAV.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUQinyAV.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUQinyAV.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUQinyAV.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUQinyAV.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUQinyAV.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUQinyAV.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CUQinyAV.js",
      "chunk-B7xzEBr-.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMJ38XNl.js",
      "chunk-BrgrEaL9.js",
      "chunk-B0hsOVey.js",
      "chunk-CgLNB7k4.js",
      "chunk-CB3iNcq0.js"
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
    'index.csr.html': {size: 16193, hash: '935f8cfdd704605f338e3bee68af18734273098c48e156ac8458768265bb6a84', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '22d6545633378abe1794aad329fc3b3fa2e5131333be7544d5ce09e2f23045e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78409, hash: '8d791027624b64315a6db3535f2300908b6ae5259026ce28418ec6a5fb7e4138', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74194, hash: '1675f5f0b2cf75bef5919f51e697df938a495adcd1ae1a88742ac965bf6b6dc6', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73425, hash: 'fc226cbba201cdf6fbbf786be2d305c193b953c4b16591c4899e9156a9e05643', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71535, hash: '595e8d00a2e3aa96a54629d4f24bc55b0fe2dd6b6d1fa960439f5565977aea7c', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64290, hash: 'bab9cf2c1880172f24e9cd4ba827be9c23d6a28065afed1f11f9a1eb92156b2f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77399, hash: '1ecc87b0cab0f5f06fd621995dc2950a38efcded3096e1ea7f032abcbec62e46', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 75100, hash: '41e984037c1e285c4ede0606badd1c8f501c3d39ba5bdf98c00311f059eabf4c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78488, hash: '9e94174a957ff8d9e246cf9591cb0c339e3ad912740239c0860cfce0224d8064', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106253, hash: '8610faca3ae5d66ab3cc2910f778e6c44ce01a0c370aea091cf2de3285973b1a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77037, hash: '4d5d806129bff7a09a536b568cfe52c450f9a928599c7b17c3a685ea188db594', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86366, hash: '9d11090ee6dc81a7ed455f008a602d026bce8e7613f8abdb715aae3e6b3c6184', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64320, hash: '7e1bea4fe09c14d0f252f16f4c3ff2a07484b25c7464ae0dc212f6213a8d8210', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117338, hash: 'b2c7b7318b3010f25d08fae613c0349de3999ff7115d7eaca457c472199330ad', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113947, hash: '54f4916f39fbdf2809c9e5c88b7847d69740eeef31fd9d8c895e5566c4c95015', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120667, hash: 'c9875e51f9c18ecc0c088bbf9dea27b2a681548b5e5f0c3e46ba5be5beef5e17', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120906, hash: 'd9d40dee2167e60191c68040921b17d6a4ba645a2f86f9c2dccf01ea94a8e69b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100585, hash: '62776d9d17be345a9ff4e09243f2a570afa5b3d77d6c4700b4badf4b40382a1c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88639, hash: '725b7d63bb11b800c8851a20586b0d9cd84959c5b5d24b57b2ab9ad30a9f47d8', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87863, hash: 'ba272835dc52f5309b79dcc87ff278ee29ef6a20893b1cb17cb366bfba19ac83', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106720, hash: '5745047805daf2814edf92bfe561e8aaa74b6cdfb6ac1c48d9da30aa1c9156c7', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64304, hash: '250f82492cdf5ae3bc90f348770bcc80f0a431154ddfee2def6ff9d8f9656f5d', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74267, hash: 'c22290bf221d81895b754277e0e66f3dd7a4992c27c74b09864af7af15886c9e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73146, hash: 'bcaff7181f612a33fa1615931e68b0b56fa40eef7048dfddf6eb297e669cbc54', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79253, hash: '491f7fb6ba797acf2c25a0b00d6e123d2a194cf13c6d21cde4fbf60e0337832c', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89730, hash: 'a07c44a34dbcaf71cf007d937d405986c69d8036f37ba065bcb856ff217b5054', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87795, hash: '83fce06bf9eeba644fb67a1716a884a88f7e900a4bca79309d3a89ae98f4bbab', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84687, hash: '3e05d19ed943dff4cebc8200077eea608e7aa2793e1918b19deadca4ecab4839', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84464, hash: '2255378e86fe554a4c9f3d004813926d31cfe31eec138269ba6ef00345590a85', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82297, hash: '58bc5569642c0e9f6f42e7da9daabc355901b591057c00aee4834ac4c7a6ac68', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85877, hash: 'c9a1eb9b607a28b0f2f8e7b763e8a4d73b0fa7dc8903b25cc896fe38555ce372', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83893, hash: '0c62b81171a37fe089907ab360feb0a42d34afb30d0428d5548859b7d5af1379', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97568, hash: '36b20a818e5ef1c7ab0e04a8d0505113748090c001e9f2d23df4ffea621648d6', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120553, hash: 'fc4402f1526279c75c077ac373eebec6488046cc873d0dcd3ee881db9aec33d8', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117861, hash: '866642452a426a9e151317198e132ca6eac91c9bb6e5c5b9c13f25195c1d9c15', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114656, hash: 'f99f74de2c3268c2f641e0d09a4091c32a82b2a2fb4ba3c5f7631a4f35e67a37', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88561, hash: '1787e9a83f1432f8f59c0671e267b7502c2b5845bd9946ad18e6d19e4dfac694', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97500, hash: '64ff73d420e6f91f06fdcf5997760f70bc78184d6ea385e0baeb02833a588c04', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100260, hash: '647d9e712b90592755e9403cd5108b64f7a9b77f9bd9a9f8f96d8afeb8d3219b', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105102, hash: '68e1903619636dbf176dd19d1cc0a91687d2ded4686f167e98824f8b52928e65', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65124, hash: '9cd6afbbb4d75bbd0c33fbecc1abff14ca5b9774632611699c7e0f50b4238de7', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67574, hash: 'd4817113f822dd441087db3cefb38625e94d8539a4166c6c172083f22a1494ca', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89351, hash: 'a0981210856e0147c6b6ed5caf235d5ca5ba30667f794347e9df5ddb50e58a21', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67144, hash: 'bcdf39ebbbbe02b818f6c90565d1b832cd567f6092fc8200c83484661a888c58', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109746, hash: '7410ae87ea3a32fbc2d0da3bd5733b6286fdfbf3228f9fe93252bcaa63285c17', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
