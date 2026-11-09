
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
      "chunk-CHIrygO3.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Ccc92V8k.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ccc92V8k.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-oLR655N5.js",
      "chunk-D-BfdQ0m.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7RU8TraR.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DkjMzvG2.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHuJS2o_.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8359fx_.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ca4twbuh.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwzYkF_s.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_BZ4Z97.js",
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
      "chunk-BHC5Slio.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHC5Slio.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHC5Slio.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHC5Slio.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHC5Slio.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHC5Slio.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHC5Slio.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIZPtRRV.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIZPtRRV.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIZPtRRV.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIZPtRRV.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIZPtRRV.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CQtyOMH9.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIZPtRRV.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CQtyOMH9.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-X7m-pXSY.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-uGb-YGGs.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cor-0IX3.js",
      "chunk-D-BfdQ0m.js",
      "chunk-C_8QSwij.js",
      "chunk-20j7XkjR.js",
      "chunk-CQzurRuX.js"
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
      "chunk-DHDrso3y.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'cbf134453fdf01c537d64e7187c8ccc1019b6f6cd18b0a07ef3b34757ec86a37', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'c21abbd2bc11615077f78e2d904cd95fc053ef285f0fc1d57a707efa56b1ba30', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: 'a871490ea76d176a5dddbd78f85b0a84f5e928dbaf1e5ffc1f11c673a01f9ac6', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '8a2e5263f3decd50a58f14b65f3e564c8e273b3e8364b7eafbc830adf8ce4e7e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '43bcd8c46b5b803f1a3de8458c823cc814285810c8a3b556752b0b97b8fa88de', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '2f880ed51c5e03b16926cc1ea1ee63f449895e1701b15aa15570d859461562f1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'c3226ba91365fb3baecd1be695260f00141decefed515608d76e1adef806144b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: '28beb16b0a356c22522e581ac895241bc0325e0541630f41058e893243e0d6e4', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: '0e74943d2e7fc269d45f363ec37daf2afdffa701c2c4b20051864188e36154b2', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: 'c88b1c6c2eda40f94f8bc753b7ee7ac78298a2453941e075fc2329f568dca92e', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '272d346da3538869506225d919ea1a0871afa1aeb3482463c2c39bcf187396a1', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: 'c80d935977b5742987a64e495ae67215159fa5124308e528400866542297d60a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '8b41e1454ba635ebad88da3b2700b514793cc5969647fbac5c9058d6e5914609', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: 'db2b266d191221d828000c976ae4dc2e5b30ad7738e34124084a3255f7f964a4', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: 'c3643926f723091d1008893e76331fcc84d9f02cd681c62e64c6eb2578255ef1', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: '4ca0f942a4c3733172244d8338c58695de4b8a6d9ce2a28112a82601023617bd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: 'f12163307dfe29422cad6849e6c2939ef657982beee3af21a5909c113451ca31', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: '0bfeeb51cff0dc546e2b28b51a2644525c9c85069b4816ce909ff7b3cd02b569', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: '5098aeaf3fe1a0498a3ebe2125b32a52b1279ffe74cfee89a4d4066c94ff63c7', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: 'f080c1a2febb03d59e1e246a6a7526f373eca979a95fd2bee8331905e267078a', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: 'd7f4f1f5dedb87ae5bc62c64a1641dbcc128a33753d56bd5c41d28a78ae94407', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '99997fd7698d181b900c59b103a4b02ead5a5e8fef78253855b58cddae706bde', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: '663c4f06867a4785504610f32b449bd50045ee7fff8f500a9d839bcb306e0e3b', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '3d8eac2988dd767a1bde91d09bd14241eaafa3da6ff16c960c0b4df1d4a60ec4', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '31b686eaee17f0674c892cea7bd3721ff851a2a2e62d970545faa701b29be731', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: '2006e40110022723f9b2cf14b9b8a9a487c912c46948136908afce5b3408c90d', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: '48b8113687fcfe5ea7aa2f2e1452d5bed41c04aa5a9c3370f267eaf76de17b95', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '7c9bf56feb9c1dded059a39083032ccf8ff92c1a7b8e6103f5227dfaad2c6c13', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: 'd2063180a424e87d7fde502bab73332acd4b6da016045c29140c5b841ee6342e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '8326b818c611e1fbed54f2ebd800d03c22aab08b94e7a2bdbb4687aa8f688a3a', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '27e0c8b74b22be41880fb5ad1d2a3d25dbdb0188653f0d7b76580a130d571b8f', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '2575e0661c536f6c8fda758fa826891db0264cb47b60c86214f6c3b3f349137e', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '4189ec8cb16cc20dfd36723779a57d2d1cc51a5af421cf13bc35de22ec8862cc', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '381f48fab659746062b198dff1dfc921d71e3a11afd075575703192a0b4040c1', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96526, hash: 'a02d314a83540ae94f07e20d0cdd6b98070164d75d65b73fbb6ab9a27a5ab6e7', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '132f005f1907b72ab597079079b55c55e0efd91eaad4980762fb90bbbc207852', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118196, hash: 'bf9c6c510fa7f21c8d585d8680e0f6b76cf1a1c9402ca54c3c1b947c404c3146', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94620, hash: 'e2d18240691d5ab33e1370962f90f7d8b280829f9217056f131fef39d9884365', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107683, hash: 'ab6d54410a04f220279ce984a3677ff877871a92fd5bc2c6136feaae693a5620', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95187, hash: '01a4363194540d79da657f0e2d71942d2c009690e261be6e0deb6bff95cb21f3', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94361, hash: '72838b75e5466a0b53d37c90063c97ba08a7ca35f15e3d7f7d936c587a788cc2', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: '736534354abeee143602f28675746c4231246d20a5bbd5e38c71870d5c65ed73', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: '825e4e8cd0d1ad2bd95601f9193eeba5cd1affb4d433432bdca48d569f5900f9', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104457, hash: '896dd44309f2abdcd7f26e78183245a334add959c621902561672f5f77bd0b42', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94496, hash: '20031e6210dcdb5f79578df14cabe9e2b49580c9f99db35a95666a2a593d252c', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94417, hash: '73fe9f12620ce6d5632ddbbe77a3064b2c6f450785df4de7ee460480ac2fb247', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103444, hash: '35e005797c7eb741545ccfea32ca9589e0c2263b5848f4dcbdbaa49c7a1787f4', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107536, hash: '86d7da932ef04a6835ae367e0bcd536dd9b6f2391e777790217411ec01134e5e', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118370, hash: '0e9204d278c84ff0546e4ec4ca7d976684e7a8c369380cbf459593b5871ba894', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112322, hash: 'fbec084b58836165b41b3731f59d16cc624195a4b7a126ff840bde9704a20b48', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '6bd7c30d4ef23e76b219f9587d00d923953fc6c8b20d22e8fe296efb93f2a8d5', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118537, hash: 'a4287354bf80a1dfd302f39fb7ded9c25d9b1788ae9ce0d28ed6723c0fb015b5', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121016, hash: 'eecb28e688079c94ad04a4e80c0186a24a1be28ba9b8183ed4a9c21f5c471498', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119422, hash: '0023422b99fead12743b50ef9411a407c9f6a0f2193e6e359d36f6caddc58d49', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118619, hash: '5b2a5fbe591e5c9e1cc2f0c380a8d692a11d80d701a2c4a50d01972effeba09b', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124528, hash: 'd2fb2ac1f09f36a408dc2553a2999acc270be1e8651da0be9761b7c246547c02', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
