
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
    'faq/index.html': {size: 81371, hash: '45fb8aab61183fb7040fbabd0f36c4ae5eec90265c22c6d88157db710ee8ef6b', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77156, hash: 'ecf8ab8dde9a24f1b37f8cad39be84ea63b78edad49eb5f7199df30b8a5f9356', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76387, hash: 'c710988fdbac1b45b19bf0742042673bf7952545789aa4c2176ecfca8f0f2bba', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74497, hash: 'fe39ea656a0efaf0813a9e972a5c42d4aeaa8df75c2d87bb39f5b115c86417f3', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111139, hash: '12aaa9915528a12333763bc9d6fd3b14f1a6a4c96b271776d060b6ab28c55205', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 79999, hash: '56253cb7864ed8580d0768ff98a8462446bb7da2a6341b120729980c000021e0', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 90350, hash: '3f2da0a37defe5ada51a659c3b853dc2dba90f33797f522cf86c2106e79713c2', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67282, hash: 'a1fc218d45c0c1cd381e8453eb0c2c0d0be853c8b9da6df7810eaad1a89501a9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67252, hash: '95f71d55e7896ecd4b081ca7d11cb39f9a2fb0fe7253429a26f70e1c9ee6bc65', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80361, hash: '0772f92a98c4124f6fb1c7eea744e1cd067848184eda4414e0d50edd1829a364', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79694, hash: 'e91be3e738f63db62500a5b4d7ff3a52bf384c4766d1f7bf8fca8d45212cd2ad', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81606, hash: '811e84eae03d4bf804e1a97275c569eabc339c224acf83ff34d0566c2949f44a', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113707, hash: 'e1bba9ffbc48b57814279c851cd0146b49f97e95a182457e0b555608c93befa7', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120337, hash: '0e6c284ed20a59498dc9cccc0226cf91f8d07159678fde9ed32737625260f63d', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118749, hash: '59abc39e6f1a919b667793fb039cbaf13c07694275cf7ba20e60276dbd3ff506', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 117943, hash: 'dbfbdfd2a19a5e3b6b797dc32fc0e25699bc076f2269dc136f114c4f5e6fc564', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104335, hash: '23dbebfe51bdf1ab2a0e1bd89b76c7ec26abed2865751cc9f42ab5ef6001deaf', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101277, hash: 'df6931b02d95fed99d50fba0723091fd802774ddb0d224a679b01a62fbe8a3bc', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109094, hash: '66a2f3775c29519d5a165db3c4711430006fd369cbb70d3577da81229f85810b', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68082, hash: '0a11cd08c4b9df94cc88e72199f616171f0e3767067dcf2f09cd6a6b103d9bf4', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122408, hash: '060c5fc7fdb7127435c332471f8da8b25c651b8ff43d0e9c1c292700733d9bf5', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117646, hash: '1b99469bbcad7d13575ddf334b69f5dca42d972a995e68d1ffbeb516b6a16077', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92507, hash: 'fbdcccab4c6b0a27e851701a3b33d8d80cc357f6f686f9cdddbcf906abfe641a', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104713, hash: '09cff404139580d497203bac4240587e5796b17fb8cc94be8cc5ebd4dc935c20', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85351, hash: '6567b6a81db6a1c2c9013ab1227174a389ccedffa5e78134563d0c8e44b7ac94', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 83793, hash: '95554cf36bdcf210fa1b5514049f75361f31bc777ab0f7f889007ba46f8a25e1', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 88931, hash: '956fe7a1274e796ffb4062ef06c56e302cb867c3611fc0bc3baf135d0d8bde09', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86953, hash: '6c5d589c557d5f930d92f18e6b82cea6b9c18d9daa5a85f58ce6e6438c1a181f', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87426, hash: '6bc4262b198034cf61b0c7a7a6fa0736e8a742911dc49a18838b0dd929f8f4cc', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70503, hash: 'f9953cc8158e870f159f08b176373d9339e375e45319ef7fbd28518f7eb67501', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 92313, hash: '4dca21e36d4993a8b1646b28fea7ce14e762d8f89794a89ab4f10b437a8a935b', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70106, hash: 'a0e5b0cee83831d639702f6e9f6cc995b3c85b2c3fc4f9fb8648300d15883928', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92581, hash: '7c69a59a28c898be89d371a3c776d9847b5439b0b6607e66a9da574d50c8cc37', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91780, hash: '1b562484807c1e4ea96b7e60174e9cdb5cc01446eca81520104c7dc838645375', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110718, hash: '7131902d59c0d1e5b2f48e9e3f9eed20a87fcf652aa0b3c20e59c9996c378bf0', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101454, hash: '4e239937dcb5cbacc913c513a4bb9cc41546553410a1c46d2c2fc940c131ed6d', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 102738, hash: '503774323ae31d892a5520659ca4991c8eb0902b77ab6bda02ba97377e18fe03', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94191, hash: '51a7708077cd722c8dfb0dcf7756ceef518e9703aed2baf399fc48d999ea3b01', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 92285, hash: '8b36e6090027a24a3f18aeb4b2db2c6ac022b3065799370befdffc909d2c472f', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87656, hash: 'e6239fe150ef0a464bcb5e3c93d55c5d3cbe1328617091d4b59382d9156219d7', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67269, hash: '15e7d2644cbe4ecdfdd413e6e433c2dac5c07c887723fa6cdeacb06bec99a34b', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77246, hash: '5f5750d3cacde13bca10fcbefe9c66927c9b93c899db8a34e748d662e7b20779', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76121, hash: '9bc48796d82e4e1e38842532199b15fd519bba8c1520ac2dae9ade933d02e2ee', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82227, hash: '8162698f307f8c7158658cfbd02752e5abdf87ba14f36d520ac56f3ca5624a39', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123666, hash: '22b363fea58b3b9fcceb12cc71a1ed26aec1e7e41d539c472c59103fd1cba0c2', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 123905, hash: 'b0c12d69b95e2caa5d33f6ffb83354f1ff615d7e677f098a1a77e4168b14ba25', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123547, hash: '6c4c171000b1c070508759acdbd1ee1b2427d35dbf99c68b65a361124837ac44', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120855, hash: 'fe33d89bc44783d8839f90c78a8de1ab1d9fcf882d4329a23afc553e4da6b615', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
