
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
      "chunk-BTVS90kq.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-yYhw7pEf.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-yYhw7pEf.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8iU6X_5C.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f-9Gxu7T.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dm1Ilh9K.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnIYIgQz.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AOp7Y7H0.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPlHP5u8.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8LEL7zB.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CbzWqTNW.js",
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
      "chunk-DcQ3AfWv.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcQ3AfWv.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcQ3AfWv.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcQ3AfWv.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcQ3AfWv.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCeAxvoD.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCeAxvoD.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCeAxvoD.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCeAxvoD.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCeAxvoD.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2OZ_y0c.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCeAxvoD.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2OZ_y0c.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPSNpUJq.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPSNpUJq.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPSNpUJq.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPSNpUJq.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPSNpUJq.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPSNpUJq.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPSNpUJq.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPSNpUJq.js",
      "chunk-BDx7lcYl.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQCvOqvW.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQCvOqvW.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQCvOqvW.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQCvOqvW.js"
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
      "chunk-PUXTBsVo.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24223, hash: '6a5dcc83e1c6a43fbb0dabe00902a770f4959313032422f128dcd7eb10dd956e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23250, hash: '4a7bc7a8a9bf680f045912f3d5b9c56fc3b1f4da3610b6478c91fa56d36cd4a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82896, hash: 'a964dceeb657e292bc48b00889e088140625b6e4b2e64e455268ec3236e76d76', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 77679, hash: 'd90c717792169bf2e609c77f16c6ca0ab177e038e7c67e0851f3cf780902d31b', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80545, hash: 'd8584435ac89a37802ead342bb40f8c4b29340c91184f8033b26b75e2034445d', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82757, hash: '18b48e2ecc2a6303809753157629af7680f82b715add151d32b668faddb9299d', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76856, hash: '6d8c0ca64606033a034c5438643b93e5a1b8f7000bc489c0522800f80867d2c4', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 74982, hash: '45806a13af5a698b20b884e603f2671886982b4ed70816a7f494b2985f0fbde6', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 77101, hash: 'c95a94899c1f93e62cb49c93e27ace54cd1eae6c82dcac5617e43ded9b59d3f3', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 69447, hash: 'c43df577e71fe4525d2fa488701ef226507aaeb0030b110462842e2d244851bc', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103709, hash: 'c8da45c2c2e2cc978d82967539113cc52f91ed7ca008ff09777eb41995b79685', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 78373, hash: 'b53004d318c2529481351d57fd63cf94b589b8348467e3b0182707faa3b2f270', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69705, hash: '6b0495524bf4c9ac4ff34c2a9bfcdda3b23ade4ab74000d9813f7d36b73e4019', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83596, hash: '543670252633336c502a2ff7aa5b641e27ff83989b2b8b0dee7f2d07082ba3b2', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 97600, hash: 'c13052dcf36b22be639f77a68304a18358fd58c6cfb71a292751fd79cbcee719', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101438, hash: 'a71f891c2d626261fa2eeabe2d801cd8799910e8c9e739b9af4a05c23aab08c1', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67748, hash: '256af163edfba96c70240b8c9885408ec9d6363dc8ddc3b73512c8c09102bd2f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69760, hash: 'da6798714e8322f17df3ae1b7baabac9ad50cb4283a4f2a016a0e88de312b1be', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 105535, hash: 'a3283101e1ad2f763222e99708dd53cd0a1c36b3b3a461697d9df7da9ecfce83', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 116233, hash: '9c92ff0a89a19e2ddc80e053986d7a718e97d06413506b190d1cfab4d953ee61', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 116472, hash: '7112e150de74d6ecff36c2807e353c92b33cafa374b2f33591d5923b9dceb1b8', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 116331, hash: '8842035a79283b2f0ac0e904e2914f0861acbe0699e897d843d387d1f911e08a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 82382, hash: '7dad0264c0fa805a32fae060fe61e15adcaa74af79c8e78f545caa81fc71d410', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83792, hash: '3be6ac2ade2d8e7dfbb757ccbe0b7e2e1ee8f4300725edc9ae1d229675832074', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96976, hash: '02fa3c83507d4cf6a274364beb67d132c4e3b65d828adc45ffe265f55ffba5e5', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89869, hash: '689aa7fe8d512f085177e51c156be45215bf64cb897e3d0db7f00d71c2fb016d', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 79004, hash: '54091221afb07f44d34856e7c2f7cd4dbd32fddd75e0075c77732b42cadd86ba', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76355, hash: '30cfb58f9b0127d37f57f0abb5e89b66d24c2636c7e2b060c0ea84952783d4de', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84741, hash: '7211c491a700456cbc006a2b4d3001f492e1aee4e790336568ad540a88e75d2d', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 90291, hash: 'a58ab27fae523ca847114be7575ec16fac820675e6e775165aeac41aef91fdca', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72633, hash: 'cff749a717675408dbb8354fff4ded007a4826cc17e1505dd4050b34b99c6df0', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 105322, hash: '9a38741957c1079953b624b71adff44f7c497f1f87553f935a01a70c51188bc9', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 111428, hash: '07e9d8465048fb76e8a4349d1b7c5ac894832c94826b388abbc8ea9e739be35b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 88643, hash: '113b4c6ac30dad1a0d581902443afd0431af94f3c90bf68f23ccae417751d389', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 85894, hash: '8a3bf429ff9c827b44f5719abcf3902e155436a4094cbb716fada542fcfd16ff', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 85617, hash: 'b63dc7abf6f4ad09989bc6df71389a7652adac9cfa24b5a540b26b03ae8aca5f', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 73060, hash: '4517a3ec471ee77a84f816f0d245a8ebb013318875ecbd2b348f7c06d01516de', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 112000, hash: '4f19c6f8fa0e5ad8e1a0541820bdee1ca0db4856631dbde2b293d0da60d61be8', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 106174, hash: '2749cf118eb0123e2f9e698ed0288284e8409759439f058e44dcd97cfb8e7141', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 102985, hash: 'cc5e7f67c7e15906ed4c20f6140d46e1675976cbcb1b49c844ef8e1366aa56e3', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 92135, hash: '7cbbc313c013c2b081b722f4dabf4ee08081c071320ead9b1a3337029fe4f953', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'styles-RGJZKMT3.css': {size: 6006, hash: 'XLETGTWqs54', text: () => import('./assets-chunks/styles-RGJZKMT3_css.mjs').then(m => m.default)}
  },
};
