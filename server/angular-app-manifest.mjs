
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
      "chunk-QduSclBx.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DSLdlFpf.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DSLdlFpf.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CbFGM1zF.js",
      "chunk-FrpMA7e7.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-13qfL_MU.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_CPUGzf.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CqZZzl5f.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B79jLcDi.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGlstnQL.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w2Wt2xlz.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAnkttfm.js",
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
      "chunk-8qUfn_Jj.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8qUfn_Jj.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8qUfn_Jj.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8qUfn_Jj.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8qUfn_Jj.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Du5wi_bJ.js",
      "chunk-CeSJMJIV.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Du5wi_bJ.js",
      "chunk-CeSJMJIV.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Du5wi_bJ.js",
      "chunk-CeSJMJIV.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Du5wi_bJ.js",
      "chunk-CeSJMJIV.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Du5wi_bJ.js",
      "chunk-CeSJMJIV.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJjSyc8A.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Du5wi_bJ.js",
      "chunk-CeSJMJIV.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJjSyc8A.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq6REng3.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq6REng3.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq6REng3.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq6REng3.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq6REng3.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq6REng3.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq6REng3.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq6REng3.js",
      "chunk-CeSJMJIV.js",
      "chunk-CN8HjM6x.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-pdMJDWvK.js",
      "chunk-FrpMA7e7.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-pdMJDWvK.js",
      "chunk-FrpMA7e7.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-pdMJDWvK.js",
      "chunk-FrpMA7e7.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-pdMJDWvK.js",
      "chunk-FrpMA7e7.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-pdMJDWvK.js",
      "chunk-FrpMA7e7.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-pdMJDWvK.js",
      "chunk-FrpMA7e7.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-pdMJDWvK.js",
      "chunk-FrpMA7e7.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-pdMJDWvK.js",
      "chunk-FrpMA7e7.js"
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
      "chunk-DIE0-hN6.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23699, hash: 'bfe8c9fd3976bacbbb0311339cbd6ec950898e3e179c15f5a0f082de22575143', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22724, hash: 'a732bd02dcdd67d31074e9b88fa72713e7f7b599961f48c49cec0c36f04b37a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76463, hash: 'b92568120e3ec71375dd0194d9cb499d37498a3e29c168135c1a3e261d682892', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 78604, hash: 'beebc2c63866daba3ef4336b6288bb4bf8e9dc7b6a20fe3b35a545128f734df1', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76708, hash: '1be8f4c1ea3be57834852c806fa7aeec2d03e8903e56197a51c5c32f803de8cd', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 69054, hash: 'd211edbc0a013671869b347c3af810b653fb95551c675f814f06cc4b9e802c33', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82503, hash: '7ea9731ef93c2d8a920388d2438f2958ea045cb826a53ee2c8562567848db4e1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79069, hash: '541902ac9768cdff45cb9b5ac9c8a2546f1460b9a39a5e2e079e1ca95834d54b', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80790, hash: '95994b6d7d685561246a9851c67a95caa34629871785e0906316ae9d9040129d', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 84498, hash: '3c16f63c36fe03b3f3ec5d51ef96c4ca8493549a6adca5214f1c414580068073', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107264, hash: '8a89a2540fa5954a536ef5dda1b181cbae6e671f21e95352e7a73bc68de2ffc3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86565, hash: '1b400ad94a02b4af9110b9f87db9950de4278e8ef0b664e21aa51db9ba4bac7d', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69312, hash: '603c832f8997aa78f8c64a29d0580468f58b2f2ca6427e2698245450b07c02c6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83203, hash: 'ef8bc006a9ecbfcd184c0730038b039912ffb6bf3ef55833206d386ba83eb791', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78611, hash: '88503748fad3e1cd8bfec6f4e63fdc96795b3e1fee77ec67436a5a869b8dc763', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75962, hash: 'b1ac92cc279e5b245bf8796bb1b95bbeea3a8ee72e1bb0c8f488fb7716e96b97', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84348, hash: '749649d80c783b7b25cadfc89dabdf802209cc2ee105acac4f730721c77cf89e', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 91737, hash: '5b10a45fccbd1de73fe849e16ec740335f872c0c784f90f37827157b501b4838', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91516, hash: '7f21e3d12055166229acee7df5678fbb9c0b456c89d1c54c4750904f576e2469', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 108332, hash: '0d1905dfdffd43ea1f812b07cbc36b340cf090e7ea5a0c6c370a29b3c4243d9c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98150, hash: '37a8ed00dad5d5f4cab07dc2d18ccda308e6d4911902435c121b97e0ee84eb70', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 111407, hash: '4a63a84212b7fd3b180e5c74578dbe51beb950dd88140538643134fa5f2c477d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 121637, hash: 'bdc46abc17f70f271077cc78cd2b8141f733a2553cbf33579606f178a21e77ed', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121658, hash: '1036022ec61f4858ad6c6e2086bd25a9d1da9105213c7c6749a23830a1f8362d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 121517, hash: '1a3ee21f71fc0c19acc20c573ce9ab5318f022ee1636c38418205b629ecc9d03', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 92742, hash: '53e2defba4c325224c899e88b1b71e96d7f7a340dd646e33806bd19c420f8e77', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 89666, hash: 'b566b73e3e585b6a98aad4d27f6edd90016c09c2e09f54a43b7f2cfa96841be5', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 89443, hash: 'bad002a35ddc6448e41e82b0144b9e5c1cf5bdfa41834d135629cc6381818db5', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72667, hash: '1219b9d08ea4aa12be3bdcc388c262d744e9779f35856a6c38e29c3ea22ce0a9', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117806, hash: '09fc65cbc1f6c531750e6c83bdb9ad198e7bdb29a53488584e5fa445b76ce79c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 112101, hash: 'c7c062ca97576f95e7bd101f22ab0d1c8d524c2bf5b64c77d24f8f6e4f357244', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 91625, hash: 'eb46ecdb7ee731f63090ccd5cef02c90dd75c33ab95289ea41cc091b5e8ace7c', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 90452, hash: '4d5c7b7350ab4468fb3b4459264fd180bb8ef7163fa3b007634ce5dd31b84cef', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 84934, hash: 'aa10a44b46d87d45698118880b5b0f5392489808800825fb417fd8031fc1c931', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 85717, hash: '96315e5c9d56ed783c9f95248a6436f354d546bae28d895882b2c764d058d458', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 102268, hash: 'b16b76403fb467fd23e6cb76559e1a8f849a41f3c0f45748aa1d1e1d814e5e90', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94503, hash: 'c172b275b74d142ae155feec65ed0b5d7ea6427b19dc12aa956def5f6f3c01b3', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 102887, hash: 'ce0d1f2ba62feafd5e39415d651916fce9bb9cd055d8484bbb9fab666c9e2da3', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 107716, hash: '2ed0288930d78d1da9f1a80326082efb3f02dce8ca8a55f074f60fbb9ef735d5', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67357, hash: '476bcf5d790404ebc9140a4bb933e42a52f3cc17659d03341639168cc67b0fdc', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69369, hash: '6e3be0ab6c9b9f96571f8e0d40fd2124d43a06a05c352c4ee01785e4302ecbe1', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94124, hash: 'f71f2d561b93c13083ca2e783263291a3a39ce2fa5c12bc6349d30dc5965adfb', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72250, hash: '8c09756702d2bd5ead3bcc9bf57f7fde1869eaccfd94b48f09d71e7bde503a05', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110574, hash: 'b3969795ba225dcf5ac5733b660737ce415ff4a43d76c77d94ef7f0bf5b64ecb', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117454, hash: 'a289fc975b499af74f8240e1d2f93101a44347433a904d7f919e3d7ef6b88cfd', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
