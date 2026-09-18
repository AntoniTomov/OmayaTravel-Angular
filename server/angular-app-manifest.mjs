
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
      "chunk-DB7JNStc.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BHmsHjp9.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BHmsHjp9.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dxgbdqe5.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNLeho2O.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0lQksRF.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CD-30zL7.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P797CYU0.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Do1-sxKs.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-52FLuCCz.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DaAka7LO.js",
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
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-efx_DX8U.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-efx_DX8U.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
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
    'index.csr.html': {size: 16185, hash: 'de8d5f38aca84b2274dbd18a2c7bbfd5fc13fad4e924f677ed3d3a12e216b077', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'cd5ee1f616eee64d94d4ffb3a0ad6facf92a5cc87782906674cd89bccb8114bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76256, hash: 'dce8dc51e348cc57421fb0f57e4653566ab78b8e9aae9d36f52430f9e4984477', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 73801, hash: '9b40a581aef2723d49c0d7412cb8e0fb93d970fe1bc71cabb72fa23c17b2f2b8', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75276, hash: 'f7e20bc67ba66652d1c0c3fdfd3f5724c8852b90d5a82314b5543932daefd4aa', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79083, hash: '148f9ef8489e0335fb45b15e46da8e4400d8a58cc03b402f5b700ba37d7da44a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 71387, hash: '5b5522d92836ebaad1aedd735aa89c1f59d5f0270bbe8270230bc8d1555365d2', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72282, hash: 'bfc2df18544544d84f288baa739318d66b863a9e18d07f2f7aa38a7d7632914c', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 70392, hash: 'b42fb6e55c941228de86bd72bdd23bf119c680d28cb2a19c2d09b66be27fd18e', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63147, hash: 'd6d4dd69e683b33e99f8fc43c6c3f3bf893ce0dc4f9c66f5ebe87dff73f996e5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105134, hash: 'add1476d1aea2c3d982339b47d7bbf0c0ec5972b4274198864e707949220427b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 83053, hash: '94b9f08a24a8505aa9d75f84caa70dd5c89706ecb8decffda8f24af192a8f5d3', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63177, hash: 'a3cc8acbd670467b923038b7bff8540f4223d8b0aef0f9db0046eef4a396d31a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77215, hash: 'e817363ac5f2146c9a5e8622eeee245405d0928e6c1b0a0350cdc40fc0f15e1f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 72373, hash: '44f4ee12677da220da3d9bbb9dc90ae440b79a8ac30d6bdcae3215d7ddee61f5', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 69724, hash: '7539fd87c3132a4870453978d55376a508b3ea4f9d11a8a64e09309aa9c176ab', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78110, hash: '9ab8904af6f3800afd39b086d3ff8018446104128ad27f75dbf08c9777bfad34', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 106955, hash: 'dee5db4c7839a434d5fa733f693f925c3ef41b21d8e361edaee5cc610b576099', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 116808, hash: '2a29f761545a96d458031b1d5100729b26c59a6c1a5522306869cc413b2bf0b2', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117047, hash: 'f8167ecd7bf77f4d0860c44af0a3d4f795ff10ab29ada3227537f744aedbe7ab', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 116853, hash: 'fc9e4027dd66197e7b600f7ee4e481be39687da7de38d0827a88ffda00daa3a6', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 85373, hash: 'cdc555169dc078ddddb1a6edb68d4022f211224414fa8eb85cc111f59285482f', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 85139, hash: '30f28d89d2a44a48df62e7c92709e3352c75aa5dcfe262ce9a87201ad5de6709', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 101953, hash: '7242169d0fdd0db7a7818cdb28580f7b13aa354e3e45272dbb8c29b95b592003', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 91786, hash: 'e99b7304b7b92c2f58673448db600367c409500bd2f14a16116e0f33fca425f7', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 86548, hash: 'b91dd80cf1da1e491e8feffc94ed9833630629026e7fa2b778a424f4d4c77a23', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 83440, hash: '80995260c7842954aa0be076be6310d49b2aef742790ea84bcfe0406bb955bf9', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83217, hash: '0c7f6afda4f9858f18ee7a0dd4e29b4795fda310744364e6ba31dc341980b007', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66327, hash: '32851b6983a06686b5bfdf9949bfb36c9aaf991b6ade3a37ebfcea2b00081be7', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 113997, hash: 'e66f9842e9a7897cda72d29f4d761ddf65ae343c33d9871b1bcf292fc710f367', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 107655, hash: '5e0fbbd13dae2504b89426837129f7eb5b9bade35f7215a8565e54dbe4078253', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 85253, hash: '198fc9147771a29bdbb4bc28186080842dff1a82e14812225cbfe26d00982d12', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 97172, hash: 'b6e186f4b3e82c37c473d670a15c5d500e8a7c2d8b6d7dc3fedf8c3c4336ea35', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 79263, hash: '7fe362652044ada8b437232c374bcd8dc6e376330d76a00e0467963427d15c1a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 80679, hash: '4a56b228ed1de444c339986c82303231385fe991c92e86611f4dad774e619741', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96321, hash: 'edcce800867fefa3c3809aa72280aedf65c026cc8dabefa17bbf0d690b7fcae9', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 88483, hash: '2ee103db2890c95e2d64965e950de7ef4c2d4bcd86442f1d03eeef0693f35135', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 96523, hash: '67b3d0ccaed804e825be42c2e6f45db7263319bf7df3831225fdf3223be2c8e7', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101340, hash: '6d3ec4296e8504ae68603464b76eb756b7a9e2285ba04c8287e5f7d8ede12875', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 60929, hash: '816bff4b32ec4210202023a9b45914a9ed576baee1ee3011365ad6637810697c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63161, hash: 'b0ab6a833e20f5b67927ee3fdfc3d7abbd4fafc899d6cb113a63e0bf1c12a037', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88124, hash: '2699a3f9ac9e6ec5b983c6e98d396e1e2f16fcaad2d1c9bdc2b495432b03db89', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 65905, hash: '0902136856a119e4753040fb684f0f214898ac92e4edaf2f115aafe8217562f5', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 105855, hash: '45f1ce488749dfba55d789f7edd3c4fd90054c147e03c18ebb86e9669f51aeaf', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113479, hash: 'c6e47556fb1e8eef86536329267ab1ea85d06c52fb3490ed4c17b937a85d049f', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-YVRPPUEN.css': {size: 11701, hash: 'C7FUCYWyi5g', text: () => import('./assets-chunks/styles-YVRPPUEN_css.mjs').then(m => m.default)}
  },
};
