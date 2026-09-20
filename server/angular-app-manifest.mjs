
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
      "chunk-C0rQbAuL.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DLDd2SxC.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DLDd2SxC.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1Mh5jaXc.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DaDdVXdN.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAURH6qf.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8kHw1Ml.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BjWVHS8i.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8dksgBO.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DrfWsRg0.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9PCjOjB.js",
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
      "chunk-CuyiiJ36.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuyiiJ36.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuyiiJ36.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuyiiJ36.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuyiiJ36.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZCvVcw-.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZCvVcw-.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZCvVcw-.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZCvVcw-.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZCvVcw-.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cehc3iLe.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZCvVcw-.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cehc3iLe.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDQWqKiX.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDQWqKiX.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDQWqKiX.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDQWqKiX.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDQWqKiX.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDQWqKiX.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDQWqKiX.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDQWqKiX.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BDQWqKiX.js",
      "chunk-CzLeNnp4.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMcNbNXI.js",
      "chunk-CiO22yNm.js"
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
    'index.csr.html': {size: 16185, hash: '18eec9e28b03df37860b126291355d054ef420705fa154a53cb3530ede06c7d2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '6702c9e41df5a01c2ffcf0bb199c17be72b763363d270fa96179321f8d98bbb2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105395, hash: '13dc1ac60235ab954e3d13d677e0934ddbf2cafe995ee495ed35d2c2c7912aa1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 83314, hash: '77fc77dfdd27d2afcbd9248d20861426102478c7f5eaf3318e7c7d708afbf2e7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63438, hash: 'd917115540b4993cab9ca847f4c5351e27e2c3c2229392470b49971f78710109', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77476, hash: '01dfdd1cb135a5dc37f8a71ddab083b42178fd70c756bdecce829e587d010639', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76517, hash: 'ab7a4668ae084da10e5098d9c329a2e4efe3369cb5067f3f4cb9608b2d82bcab', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74062, hash: '80dcec9788b68f886263e9ee993404238ff4ec458b04dc642d8135097ec42ac5', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75537, hash: '5785923af93e024adc2bc4bb4bf30aee2956053fd4f0d145152262e5bdc5ce85', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79344, hash: '49464d01354574b417c1f695b36fc29906df72b022f9642448eb69fd3cc48b09', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 71645, hash: '959eb91bbfc50598a0ae5c698efbeedf8b955ba0770c2ae611941b874c9c3f76', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72543, hash: 'a233a456a06451718fe6029358f6cf664ec4c5c75722cd9b2a19b783b68abce2', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 70653, hash: 'b5d3ea90bd9dfda19a51d2f7a8d566ba2d288a2cfc50b3f2e93ca88353c8cafb', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63408, hash: '0e275a12ce7b941ffb6f50d5ffea6740d65232c2f4088bb4c223d049392f3eed', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107216, hash: '20448a7c999f67213b400115c0bf2ead738f08f9967f64933ae78614250809b1', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117069, hash: '531fb500a751caf07190d2faf2b1ab4d97203997c9b522252b094c769f1bd78b', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117308, hash: '1d9a090430e80b175d107ba270bd0a98f93c2b97d48df44af56d2d64df0c2e3d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117114, hash: '4bfd9c3af538ed3ac8d91b764543bc133c241d3a6b3e7dd7ad6f98fef06a47ac', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 72634, hash: '14a1696930b4f74091c29bd99fcbe85ac6a4b9a3c1817ae27b06f7fa94334404', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 69985, hash: 'bb56c995d06bf3177fb63744200d5b7554ec223e3bb6d84e1e5c9302867a01bd', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78371, hash: '30ef43f921ec9d3896f1b5739b7be132f3a410b1aab5c8e48609ee63ed2eef57', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 85634, hash: 'bae15f733ed5807215020c733ad6f9ea7899701d17bd88c93104faf9ff9b2a6d', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 85400, hash: '91d5e7fbc0b2c4321efab3c84793ee44e51e917a4cc2daa51c14c9fe151e493b', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 102214, hash: '693c6c5e1e32a1257374521eb7a4c97d6ff2e5b4669565fc6e6192a5d5e820b5', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 92047, hash: '37644c9767205082cbc9a328117cad02e75716134d1c167813c599aeac259728', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 86809, hash: 'ea7b27c043d0997990758908e778fc9234fb52090a6c3b8e26471fa9ae49fe1e', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 83701, hash: '592269d11632583b33af536c74f827f8a57a5b988e687b02119d6421dd990be8', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83478, hash: '1461701166b1592a53bc03582122f28929218df2ecba821b96ca9961fbf7d1ab', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66588, hash: '6f539b1ea97c3f3fcea82fe69092c7fa6a633c7d2a6d98722d737523efc769af', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114258, hash: '8dcec0735382dbe35b3abc0f9693c7ee159ef8cd170a33a4b7430f0788533bfd', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 107916, hash: 'a241fce6fe551bb09d97d67ca45e9c87c21ceecc4a28ccef87027795f1fc9ad0', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 85521, hash: '630a9bc8fcd2b22a465b866879763582b812846f99169a8e7f23531a9b717581', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 97444, hash: '3b2f5f881d523a84ff58f448ffe8141d07a22d1196f36bfd140d8f56f202948a', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 79524, hash: 'd1ed30cabd0df120860227134126b8bed9b99c9c1a24a0f00e20994cd269230b', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 80940, hash: '3863fab942b402ee662021a9b820466f650bfbff78ae6fa14be79393e53ed125', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96582, hash: '1c4ba7aa4d6d5940b81207d732b1034fccc88cf387b1c92a54c762ac62ada182', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 88744, hash: '1e315a07ad46fbe7800ce748a64b28c15d1542760e6e3401681f233a78a29edb', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 96885, hash: '9f9b6269e705bf5f1f82fd08e78c3036caf7aaa44ded66002ff40bc1f4218b71', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101766, hash: '00aa34afb2c9c29ccad1b0c3c737c67fd04734f52da12bbdf476e1924f479ee0', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 63686, hash: '376f5956ced6b3a65104fdbee6a43f85f8860900ea2afa67d2873477bf2def5a', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63444, hash: 'bcc4a4bbd23a968fbb1f747cff060c197388f34344f5d873af46bd930672b784', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88385, hash: 'a6d089df446fa72c9c41817cc9c7dbf984045f5293ad7bd9dafc72230f7070d1', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66166, hash: '7fed3867d347df2b03bb0bc5322b60f65868a4b47cb2e3f9eb35d7b42c79fa54', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106116, hash: '54e7518f2e6b75fa8a748b46bd1652240a95c39354e92a27206247a865e9cad9', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113740, hash: '16a92f1295a4ba7cfaca8ecf26a60b454b63e751698adb305d96f44ffb577a36', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-YVRPPUEN.css': {size: 11701, hash: 'C7FUCYWyi5g', text: () => import('./assets-chunks/styles-YVRPPUEN_css.mjs').then(m => m.default)}
  },
};
