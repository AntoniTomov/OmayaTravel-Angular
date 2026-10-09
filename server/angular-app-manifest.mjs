
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
      "chunk-DckRJ6Hf.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-m_KuG5H3.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-m_KuG5H3.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B58JTby_.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-o1YLuQ.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlvzQqHe.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLMo6NY2.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3uSE1fP.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-coaxVkfQ.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DeitB11O.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChbDohrj.js",
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
      "chunk-Bj8qXvD5.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bj8qXvD5.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bj8qXvD5.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bj8qXvD5.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bj8qXvD5.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2NuOO3w.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2NuOO3w.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2NuOO3w.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2NuOO3w.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2NuOO3w.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C9rrPJ1f.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2NuOO3w.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C9rrPJ1f.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2nQ80nq.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2nQ80nq.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2nQ80nq.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2nQ80nq.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2nQ80nq.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2nQ80nq.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2nQ80nq.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2nQ80nq.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C2nQ80nq.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-pK1xN-NJ.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Hm9zMzNn.js",
      "chunk-DEi6qs8h.js",
      "chunk-CvTPPUa_.js",
      "chunk-CQIHcsTh.js",
      "chunk-BlAKi6Zf.js"
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
    'index.csr.html': {size: 16193, hash: '1888c5d3efe49e17aad1a05e6ea674e26ee9fa1fdfce85841d350af2c8463b41', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '0703f2a3bec0b87629d3f19bbaa110c127990fec17abc51097c9332ec29c427c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64290, hash: '779d5ee74f63539b4a2b9a7126b82dbcb909d3d5b22a39532d744c427856691c', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77399, hash: '9a92f165dd1b37ebf0f3350e7f40d0d617ee35c456b71af0ada60055bf8521e9', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 75100, hash: '08640bd08b35eb0df8ff5049bf7de472e5c3e26cfcb93237a6597b2bb15a3280', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78488, hash: '593eabf0c80207a64bc307028ca85da99293de1533cc5b5fad4fbf182ca72ea0', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78409, hash: '745b3a351f0daefc2096e196f3e239acda3233ee1980db698d8995fb6efe8dcf', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74194, hash: '212a22518c729666ff4d460a6654ee6c5bdc96a370ec22013617211b662f0066', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73425, hash: '13a56a2b26d508d8043bb663157e9206d6e0358a28facbcf28d375d8cfb985b5', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71535, hash: '649644dc17dee02df1547ffc02779be7183e7e0aef265dfe38552b419ddfbfbd', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106253, hash: '1c06b6b58d556cff2f1eb2f93d342515f33f6c2542c2f8531d0461929c14a814', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77037, hash: '080339b1b72cc87d0ce5ed68b5249bf4b8ff5a62ee65b499110bfc1e2a0254dd', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86366, hash: '4cc79d7b74f6006dd1e3db18e5686195fab344fc1e76666144853233fc2487ca', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64320, hash: '3ba1fe799572f485f9f0ba492ef67570da24666b1e0176e13c8537a8cc1d78f3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117338, hash: 'e55ff50f1a7050949523189f00afeda4cec557e0855800153f965046bc901a51', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113947, hash: '4b667db9da5f7cc7aac97f5f6f52318891d201864be2fc9d1859b41ef9220d76', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120667, hash: '44949f826acf382fa8318bdcb96027f0e62cc05643da9e16a6ce1a4a134faedd', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120906, hash: '6a1df32f9fd5b0e4e759a089210a133af5f599413aef4c53200153a41cb34b0e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64304, hash: 'c157d22ec6e8137caf53017d30da76171677b19ff793305049fcbcd84fc4c854', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74267, hash: '4b2c35dc455b9664a2ca223c34484e3712a533a4e5b0f533265af0c8e54f62f3', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73146, hash: '027b458a26f51c58ef717626f0b9aac63e8cc0f2968c0090f6cfeb6909bd5de9', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79253, hash: '5d613c98b66e09b6cb8917c88083692448200aa141dbf4b6bbe0bb26889c2c58', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100585, hash: 'cd255ad393478a23ff06d20c27a2ebdb12dc1cb971be0986bfe4fa9aef7f01c2', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88639, hash: '47fbf49f41b29adabb3aea94bb9b1a6b9035cd5b6372b9c88f60e4394ced0780', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87863, hash: '2ff81f4157fa3b58abc1186b3bfc53e03cbeaf64deae4e80ba4f180d522c591c', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106720, hash: '8e3be120bf3e964f4f310d7878ef428093f1d4217fff3fe584f8497541f76620', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89730, hash: '6c38f7edb27302bd066f8e9e2bca76617ccad13d1def7d6861f3bf3ca0c952cc', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87795, hash: '44628c65eba0f0e570f50bc5d133d0d7e421191e212c3c43227eb1f46a22fa8f', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84687, hash: '4e07b8957f445b6aaa2c9210b1aeb930db63fdf399385eb6fa99c4293bec6be9', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84464, hash: 'c76298039a74e0bb0d3809383ba7d4248300954cfb37dd4974492a65a3bb565c', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82297, hash: 'aedc5d94cdf7cc6cd50c0f3193e04e89e3f4b5fdc3b3e15a8c296857a21eefa3', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85877, hash: '5dd25fd746f29c5fb289c2fcef08b48353eea9fd1fe198ed03674a29295f11e0', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83893, hash: '567940dac50ae360fd7ab0655f36bc36f77ce184322808d4cb5ad07471d70bb7', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97568, hash: '29613cc5d5de399a24829be9ef0664087b22a945d5cffc72b1c98319a6f6e51d', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97488, hash: '6447032a90deb344453877c9ff37a09ad72e3703b7abee1e8dd4b8401a1fa997', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100247, hash: 'ef9c5de766cb0b1e7252964eec8d81fd5ef7cdf774337a5065387727ef581af0', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105080, hash: 'b375ce182ef5feb050e7fdcddfe98fcdef4c250a0173a5be8a56dd13968b65f8', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65124, hash: '971534b2decd0af30050c73e8379697dd1d53a3b6f2dd9d6e0a32a478f78a377', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120548, hash: 'ca247ccc27ebe3be114e2a8ae0bb4736b2a94d43b216516449b286160b47c166', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117856, hash: '488609eab0c93eb6f2fe57a711169491e57f9bf969b250397edd99687ce7bd3e', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114647, hash: 'a80d61de5567a4a27b46b2954d9426bb6fbbe91a7553ee65116514542781dfc4', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88619, hash: '706bb0fb99e546b26cc14857dbe213437a680e96a3cab523c0d6aa6f69c9e3b6', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67574, hash: 'eaad92f39cca80911acdd7d45cd48da90d5c4639a8b2df3e0a81724e230784d7', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89351, hash: 'e6c303dbff8cee1baf2299ddac5814d8faa1b74888cf49acf04a592a641b404b', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67144, hash: 'a45947eaa27f6bb5741c374de74e57fbb9be0a78480b3212cab02811f37f518a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109770, hash: '27835dd55112ab3ebb73f40ad771c55e5b8e4b8ae5973317ec62157075196ef8', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
