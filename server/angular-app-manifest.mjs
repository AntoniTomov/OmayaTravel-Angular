
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
      "chunk-D2yQwtyB.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BsYpyY1c.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsYpyY1c.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJf74Ufe.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPRx_U0y.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAlkLxEm.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BqX9CApo.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5zL3jThe.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CCZVtvSy.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cus1zODQ.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dshi1WG8.js",
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
      "chunk-CylZhxxo.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CylZhxxo.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CylZhxxo.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CylZhxxo.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CylZhxxo.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CylZhxxo.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DG2tIw1b.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DG2tIw1b.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DG2tIw1b.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DG2tIw1b.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DG2tIw1b.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CHsZU4nA.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DG2tIw1b.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CHsZU4nA.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C5IXfcy5.js",
      "chunk-BR4lQv7B.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CK9fiAiZ.js",
      "chunk-CGt4ljSE.js",
      "chunk-BHm-QyTv.js",
      "chunk-qdHwEQeI.js",
      "chunk-Dh3n2IYl.js"
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
      "chunk-Bw8nrRqC.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'eaed2bc0d278ece6f679a7f1a2f43b87603a5d3a358b705be31144d2e8338726', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '85611b6baca1dbd6c9d46da7c3b207f1b27bb50c879514e27160b958e49cfc76', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67252, hash: '95f71d55e7896ecd4b081ca7d11cb39f9a2fb0fe7253429a26f70e1c9ee6bc65', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80361, hash: '0772f92a98c4124f6fb1c7eea744e1cd067848184eda4414e0d50edd1829a364', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79694, hash: 'e91be3e738f63db62500a5b4d7ff3a52bf384c4766d1f7bf8fca8d45212cd2ad', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81606, hash: '811e84eae03d4bf804e1a97275c569eabc339c224acf83ff34d0566c2949f44a', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81371, hash: '45fb8aab61183fb7040fbabd0f36c4ae5eec90265c22c6d88157db710ee8ef6b', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77156, hash: 'ecf8ab8dde9a24f1b37f8cad39be84ea63b78edad49eb5f7199df30b8a5f9356', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76387, hash: 'c710988fdbac1b45b19bf0742042673bf7952545789aa4c2176ecfca8f0f2bba', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74497, hash: 'fe39ea656a0efaf0813a9e972a5c42d4aeaa8df75c2d87bb39f5b115c86417f3', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111139, hash: '12aaa9915528a12333763bc9d6fd3b14f1a6a4c96b271776d060b6ab28c55205', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 79999, hash: '56253cb7864ed8580d0768ff98a8462446bb7da2a6341b120729980c000021e0', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 90350, hash: '3f2da0a37defe5ada51a659c3b853dc2dba90f33797f522cf86c2106e79713c2', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67282, hash: 'a1fc218d45c0c1cd381e8453eb0c2c0d0be853c8b9da6df7810eaad1a89501a9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113707, hash: '1d9de711321fddf2b97613a871ed6d99bd469fed99a7c354c13b05a59112eeee', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120337, hash: '66810db922d397c31955fa165818f8bd52cbb0b60116f98fcd0e5b3fc7f2a5c2', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118749, hash: '32c50c9afbab6e4f9e23b5333028e0aec8a1efef6b4fa9f0965fe9ec438f3938', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 117943, hash: 'bd275cc89f668a8a813f9720459a3877846d1cfcf6806f2f4be7f3388d3bd90d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104335, hash: '7b909106f070a6f2cb3cd26359549ce3738a6d9724a99a3dfdbe4a73ced07891', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101277, hash: '7ffa6d12834c884db9f6fcf66968c9c7dbd0bef4eab94c4d6896c4119fe016cd', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109094, hash: 'e9877afaf102481e8e627f18f2c5ab071397908c2a569b40d0cd674cb97f954a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68082, hash: '49d466415908699f8d542c35c4b9dcde948a2dd6e338195416071f242f285e13', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122408, hash: 'c17fba4badf280323c7dcf6ddef9760ace4e49f3e549fce7464512299856d3e5', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117646, hash: '766bf6ccc22fc931e0388e0d020a8e7a8b6f387da2288216d689708c0977de01', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92490, hash: '459123194b300f94338751fce8dc67f38a4d39874f64969b47824b82395075a9', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104665, hash: '5a06b949faf61bd1e0fed44f0cc27f16f6da3e817cf39e3f78ecf22847efd1b2', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85351, hash: '91bd6577700a84249e97e33ad09109b56051980be5b3c84d66a9208c801df588', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 83793, hash: '66b71f6c53675277a868fb83fd952a8c30909bd01141a6052a8f0650ce0c05f2', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 88931, hash: '4425538ed7f0cd3e8ee7f6b5391f2ba80aca5608be14ffdcbb096f2b63321b3b', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86953, hash: '235b4452efb7a2e62bdc711c40f5a99568bb9f3021b296412b6ff79dc51f34cc', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87426, hash: 'ca77ac457ace8f7697fdd3ee22ab25fd72f76ba1e5c8d32d57ea0579ef2b9a08', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70503, hash: '91beeeee416d15a06f54f01b57edfe8fc233411d8aeebd79cbb0697c52181b0f', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 92313, hash: 'a5a81f7dce44d5bdb968bf0bb01baa2ecfc03f1d9ba18b6e41e0208408c1ad8f', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70106, hash: '75663abcd163fe9683ae71511a821818a2d1afecb8f1b257c140d974a136b673', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92560, hash: 'e01b293320755c3ff086a6d5ead085c2c3b4948ca877aa43e0ed4b2b54e3e17c', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91763, hash: '3e39dee49c994c08cae450d3a7096c0618f9f0c7eb77483463a8e563c7a14e03', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110694, hash: '5fa6384792633a84a9e4d5d3fe9b9dd24c3e25420578b55c6bcab61647429996', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101422, hash: '567a02541c8b8152d349a5ff5b27f67689534339af2836e6d21d86eddec98c7f', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67283, hash: 'd192d635a5de413d648c56f9c0a50b48053aa49c9d448a4c940be8c0d034e0d8', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77366, hash: '9aa27974f9f3848c7b2d5d534e8fb51fd19d561d9054b845a1450933bb1cdb60', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76219, hash: '8f10d011e8beaf07abaf4eb040878a2aeb3a401ac1b1fde7b26fb490ce1654a1', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82303, hash: 'a0d76b4884e5b96a8a8ba1399eca9a32360d5239882def7f69d3eb96478017d8', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123666, hash: 'df183e7d423ccfdf3ff8248135855487132ff53e5968fbad39107489c4b78a56', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 123905, hash: 'a3eed8352399b084cddcdfc98557d9b4369b5c93dc1d517d78ae1b593cf391d7', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123547, hash: '3113597d6576e750d1694160b10f2e78c82c39876d49547427e3b64209aad52a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120855, hash: 'eafd4c9fbfd76bed5d5a1d49f139487b58f0db90789356559d8ffbae11449aea', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 102727, hash: 'f57e4d95eea38716214bf929c101276da8897221f277021c69772d79eb2c16b1', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94184, hash: 'fb1e29c4428098d3e123424d6ede69432f63402cf7d930d3433e2eff69e4c7e5', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 92278, hash: 'f320fd27633fef5dc461102959b4278dc94112492dff381cb9e9a70c752fe164', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87649, hash: '61d0a5aee999ea3f57d23af56b5f582db6d9d96afae0706ba193ca91a08f0e45', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
