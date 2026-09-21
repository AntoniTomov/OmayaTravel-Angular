
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
      "chunk-DKNQHNDg.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CwxKNavs.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CwxKNavs.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIihBan1.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9Inos6U.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CZ_2ij2D.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWSBFUSl.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-oIAqGLLi.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0GuKRbBB.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-9UFJMF20.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSuEM3W0.js",
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
      "chunk-7oJ1V5-5.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7oJ1V5-5.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7oJ1V5-5.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7oJ1V5-5.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7oJ1V5-5.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgWacEm1.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgWacEm1.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgWacEm1.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgWacEm1.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgWacEm1.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_cSGF_JM.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgWacEm1.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_cSGF_JM.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2DXZL01D.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2DXZL01D.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2DXZL01D.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2DXZL01D.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2DXZL01D.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2DXZL01D.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2DXZL01D.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2DXZL01D.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2DXZL01D.js",
      "chunk-BwXnRnBW.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQWFpCx7.js",
      "chunk-BOUl6BLe.js"
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
    'index.csr.html': {size: 16185, hash: '77f44a840f3ad2ebbcded1e9d1d78c0b63394c8dacb502efa3a1e3308c43491c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'c38825a89fb37b9a3a96fd3d477f1d3739f6a9babef5bfef2c3ba9c66412a0da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73429, hash: '53a4d9b02809c20753f57a82276bf605a56f9666ee35e00a33db9784a36bedff', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72943, hash: '6c1e0329e0f6abc8247530aa33bb3352f7f252cd5be5d94c9ab2887866eb4ace', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71053, hash: '5f9ff5b1d537c2ab4f9b9bab40716ecb28b6ceb97f2d074bec51b3e321093593', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63808, hash: '92176585a3238908a5cf7aa0b946a633596de7ebc41015c07a95780aaa1a3216', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105768, hash: '239f9df3ab9820eb861c915c6a343014f4c9faaa386008d387ef084bbd845596', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85884, hash: '90a2e5406bb571fdfc1cf506e1ee7730b1584dd4777ee87b8f675a294576d4d3', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63838, hash: '63920efaf229abdcb8d8444ad4cd7481405dcfa24edfbe24e1ac82b357d287f7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77876, hash: 'faa40fef8a1b70e082c167f94ab046521000427ae6b56d41f47837083b85f02c', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76917, hash: '906a14fb24362dc537a7d9fb10b7ce152c4b8efa74984f310fff9d75bce707be', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74462, hash: '65e5ed95c816ea1ed8e896d98d0dadca2a6d73e9734a0c85540c7ee768d84f6c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75937, hash: 'f327d377892dc129b4551917f650bc649f6d41dc48c1477de04b5a2b0823303e', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79744, hash: '02d3b38d537e406de189ffcd95184c99755a8a1a7eb08ef0bc6265baea4ed92e', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107616, hash: '25af06040a18b0523f323f091280ce636a4b988b59364efbbafab5511cda58ca', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117469, hash: '858c306a12784fb3ab34f0abcea7c5bc6df89a67b3c3360118ab22571231e1a2', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117708, hash: 'cbc017584d4fb90b307f52d4fde2784a7ddf536e4e879c05863e2febe1469170', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117514, hash: '92c253207997dd1c2bd66236142b796fdec2a997e4221d66b747fd2484e65471', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73034, hash: '7e8090c1fe2fd083f6416a20fff53b7fcfc129d0e816cc0615970f386e2b3b1e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70385, hash: '7e37801a4e131b0a6ed9885ae5a80c17414c732deaadea938bb0b3cb1f9d9455', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78771, hash: '3584f76a836901c9614d66f075104850a5f7ddc7d34b2dec1190f5b3b50d6d0a', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88001, hash: '69c8a7ab1a1a877f56aa541c6589460cb628bd048e14dcab4b1cc1d9b5723179', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87225, hash: '08e989b7f6d375dd1892b7b235f5dcf0d2dc008323fd40585ee6ad12ed6f6a30', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106082, hash: 'df2c89c19676a2028dc5f8a77bd7ae9dd48d11755f7d011f63c8fff510a9fefc', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96803, hash: '06b17a82a9beb373248c3696e62dac0d6a7056a604097b7bde27e4b1ed7fbfce', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87209, hash: 'de4f023bd60c86eacf8edf12b8bfceb552b9aae7c39cf274ccd9d9b2488dcee0', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84101, hash: 'f7b33f8ab91c157a5ba21ab9b52a763c966ccde92651f544801d370e4f9c1476', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83878, hash: '68a5298aafd12efaf924f853cdb8e7da523a4bef273f177773088d6993c6b429', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66988, hash: 'f7afde9e60236d375238ffe3a5e6c26c123de7d27fdd0569fa46e1d3ca9a273f', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80192, hash: '9951bcd3ffcafade9ece8f9391ac8371033cd4e97364329e09d6e95af8f51bf4', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81340, hash: '360b82896ec87ce6d855fdc75f39bbc950055ef660d3b1b52adc36b9b720f625', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: 'b3d60f3d954feb386322436d53c41694fd42ad89a6a036aa9edea193c99d1920', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89148, hash: 'f2ddd43fed45977791a434a2a5ec52f5d259154b811a1dd4a6cfc200e8461da6', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114658, hash: '02058d37a62fa929019a763c02777849ce3fae3667e0235d88247ef580a546c9', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108316, hash: '1c52031fee3637edc381a30f9d5329832c65e848fcc295aefd4b5a4747fe5f4c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87934, hash: 'fca8fef0efe302eb667b804da57546ac58a7bc0ad195a84af3cebea6c92cff4e', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99963, hash: '24836ab9ec2bfe8a3765a88ff8817cfce9f964a6dd2a9c2127a33455575a5604', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99582, hash: '944329fe59208ef5a57b8b90c0b59f11a9885fe1d3e4cf1e68f23332f379c83e', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104399, hash: '3d171d205465de3f021f240668911a000ab0be71de09dc601515f91d8f19dc11', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64642, hash: '547877f6f8a03d91e2d015405f2191f303b157de4594cb20775c2bc8c5552a39', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63844, hash: 'cddef2ba0d58d3b2a1ef6dc48a70ddfcb38537dd8db5d9bcdd473cea3d1d34bc', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88773, hash: '25f333695fbb53e69de500f9de16f4e313e3b6dbc0035f09c109de5de19c0007', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: 'c6b084aadd62b373f7199b0d54059bb32ad7bebda85a0a375712e441fdb7fd82', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106568, hash: '3689861dce0730d218166658968dd2493581197a98dff1b1bb68785dcd8b31be', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114205, hash: '434c5725e042fa16086ba13619a41f10674278ab13f63895f6476044930fbafd', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-A347SVMG.css': {size: 14125, hash: 'eSV2injb/Ms', text: () => import('./assets-chunks/styles-A347SVMG_css.mjs').then(m => m.default)}
  },
};
