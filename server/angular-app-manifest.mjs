
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
      "chunk-C-SBpS71.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Cf-fb3Dl.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cf-fb3Dl.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkEbQy0Q.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1UdCL5Cx.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbXPOyzR.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LYyFaLYv.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQYKVmI8.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0qq9sGyb.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BjO-8_Ev.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BcM8ihAZ.js",
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
      "chunk-DHxeIbGi.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHxeIbGi.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHxeIbGi.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHxeIbGi.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHxeIbGi.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeMkfToG.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeMkfToG.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeMkfToG.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeMkfToG.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeMkfToG.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-dmfCVjeR.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeMkfToG.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-dmfCVjeR.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxCduHD4.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxCduHD4.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxCduHD4.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxCduHD4.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxCduHD4.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxCduHD4.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxCduHD4.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxCduHD4.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BxCduHD4.js",
      "chunk-vpqMA-4x.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwcSdr4C.js",
      "chunk-By2RiBOa.js"
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
    'index.csr.html': {size: 16193, hash: '51fd535a14fc7ea968bdcc2d667ad77d659bdd3d3fdfb2ceca431c9d3588654d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'c70fd34a39dd9d27a62a4c7ef44cdc7f55167bc4c3193feeb5961510fd57c205', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '15c411b57dd09173126b5c13e50b9e03dc86f16596e144c0d25d5d83f85b30e5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: 'fc37cec8548451a6f50539beabc1cfbda2f96291bee2ce676abc8a6cac77d61b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: '5b404d63525e4a5fd8c60307490d0e33d560a77954496486af51750286c8bdb8', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75969, hash: 'ff946925fa5b809e348a5cd6919f847b009c6a227f27199e653d0e9cbe0d9b11', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: 'bd6c8597c3f8ad5eb7dd1541194b941f8083d690922f4bbe9d08f2b6f62ceda4', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '518f37d57d1f32693c48e058a4d6198b3091f436e9b372cdbbba7496cb420268', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '6620e47978c12f9a3558c66809d89d07068e1df995de96657216d749c62e6d67', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '3180dbd7e77b71826aa354e829166b2d58e51f38537822d91e6fcaf86416890f', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '63712d7b7d65b21d780388aec9a4a4c9f391669d9813978b8c8de8e7cbc1da0d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '27fdf8e67a401fde25ba5d5a68b1ba0c2e7afe9f2802b8674c79d550705d409d', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: 'ee29c213daa05fa1da8ddb2f0c222925ce66b80c821e48d09b28fcf9d2893839', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: 'efa5eaf34ea3d8cf541ba124e8080846b503d67b5281c0dd563ec15772d7bb1a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114732, hash: 'a6e0b1fffe7f1c7ba6b30c15e71d8d72907a7ee50db33fba5380f2415293f995', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108208, hash: '8d68995c09f70261f5c59f0cb2e7fa3de6c073b883ee53f7bfb84a5272ccab84', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118061, hash: 'f26b393600c06e6885163bbe55114a79abeb0f4f591eacece8e5b5c0696301cf', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118300, hash: '4d03969ceb35de930bd8d8283debbb655828718280fbbfca0b52a5266b2190cc', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: '96208f7ec89c68caf264b2a1e59609404e67683a0005e214086fb6ccebc674e9', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '0a968d81aa7e0d627def2e1662571e7b1f68f83ecc4f2c2f4a22edc68d450ab1', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '73dcee1fe938047a6216cf211b9d65037027a9678c1ffdb908b1ad7a7bd5000a', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '7731f80a66892c3a1ea9b93cd961f49f95ab8d684f90d91d99d22b42bfb56309', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: 'a8e7a7471a2251d12e360795dbd20b59f65a83e95a6605d7091a1b3ad696fec9', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: 'd42d1c50051724abe7dc5ca73cfac3da7adec6bccbc7d0d54be328bb7515f7d8', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: '2853c35b8f6364b656de1babe165ca42e5d7d79e6d71a3e264d15affd7bb647f', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '8d49f0bf615ce60aeffc64ac2e4854cbccabbafeaa2033b75dc19489604795f2', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '50c6e8e6f8679e6de1e63c075a1a380858d0fb505f1453ea926d153c5c6c7c4c', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '549d5e7888ced2e47345b126efc75478ff98b0675b90ab9c33a5d444538d250c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: 'c80b669f603856c04169d7c97d52b42c4e68bcdc7bcf349f665641b05d1ea0c3', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '26365ba9163b08ca5a4ca447ed87ab98acf23a7604949cbf63e12367efe5e3b4', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118106, hash: '5acaa5ee08131bb61b87f773ace6b15572c0c5449e907429e8deb41152d8cc25', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115250, hash: 'a92c1ab6315add8a0f7adf3fbdafe918f3afd98e082b045e06385ae6d3ab628f', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108908, hash: '010a7ed674bbfd095b866c7d757053e94e3d1efd238c596fe03b7d887634e274', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87965, hash: 'ca7a6f2ff38c499b62e725da3d72487c9dbc5636dab11e4bf3a0ca97ce514f74', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79778, hash: '5fefb7f6351bc0b180c820e3a6a6868909b5f6cb30e0fdbcf50aa801def4d701', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80225, hash: '9f73fcf43a077aa95d2982f471752ea941ca7dbf4fa6e7b20dedc15729ace27d', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81374, hash: '391741c7fe6569474fb7539792cf23c5f81a4ede7b4def34f5937121ad2cf8f3', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: '5e3bd45c4e14e28e635d6f5cd7da4cd7a789f6a02537e27eba01ee8f48b7d2ce', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96828, hash: '2d4d50fea0a3f357b6082323251c37b047926bd46f053152367e35880b6efb75', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99594, hash: '75075411eafb55a3eff10900e25fad863efebbfa3e8a3f7f58f643e6cf9a25d5', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104409, hash: 'ef16926b7e5854eb99b98581f7a88fab8215c379dd8781c0578588f5eae433bf', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: 'e8383feaeb21c0b8c44065663c065480c29032dc24c7f9badf977ec0c7d35049', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67014, hash: '9c2102cfff0f2ad57413df1fd7f4f16ab5c4187ec3900104baebc14e302a7024', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88793, hash: '23b9f5db241a36785536fea51b7daf2407b30c45a20d05f9418c2c24d4df1d80', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66574, hash: '6586bc60baa641e9b2203faea01411661d213ad9da44420270dca947afba0422', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107108, hash: 'a5a5027f3e69378dc29a861fb9febd98d3cbbcb01bed09cdb73d88bc2cfe7218', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
