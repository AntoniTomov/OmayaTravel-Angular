
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
      "chunk-CYd-jRQN.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-MRXa8FDP.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MRXa8FDP.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkZcEena.js",
      "chunk-yUh2LCJv.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CoL9vMco.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5uEm-ON.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0izvMGd.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpPKlsjH.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PSD4RF9c.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7fApQyK.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CF4GCMzf.js",
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
      "chunk-BSI0HoL_.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSI0HoL_.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSI0HoL_.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSI0HoL_.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSI0HoL_.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSI0HoL_.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6zH7MBSe.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6zH7MBSe.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6zH7MBSe.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6zH7MBSe.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6zH7MBSe.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-fYQwTzNG.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6zH7MBSe.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-fYQwTzNG.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C-9QyE3x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-CEa3tht4.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLjKo88d.js",
      "chunk-yUh2LCJv.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CTZwKe_H.js",
      "chunk-BBVG5o1K.js"
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
    'index.csr.html': {size: 16193, hash: 'd8c3b5bafb45979f92d6dacfbfb65950a9f4d1a0c5f92b2ddd88618a1442d835', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '5f046c73641bbad6f5511ab403d06ece7550ab41023be2f4c14b2d77a2408333', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81371, hash: 'fae5f973265c6ab8efd01e0fa06d7e9f83b8a6eed43f9dd0fff4763b80ff3665', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77156, hash: 'a7c219eee1abfb94df9e647333f597af0d71c57d392541840fb23dbaf065c647', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76387, hash: '665b19e1789218406e91a49b2e9d7dd4204bb6f5406b88ca393b7b38ff7182ba', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74497, hash: 'a8a26a5b2177fc2f22b5917503144b67158e3d98435385fd324d1852f55017ce', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67252, hash: '693a69d80b94b57298fa6b1f3b8039fc20eaaaa63d00cfc9b9afce4bac38709e', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80361, hash: '53945d505fdda379831196e1032b4513a472841bf5df7733b853119cb43e6491', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79562, hash: '99cced92f9f3de0d1521f3dad6541d74d995ced9e3297cc4fa07b1dde544902f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81606, hash: 'b0eac984aff8a831314de926c79b8bd198c51fb8198f3f4230e59464ee54cc91', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111139, hash: '069d6d1fdf9fbdc0ec9e21ba3a7aaa5d3b51fbc0dbb947fcaa81b064fe640640', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 79999, hash: '13a28c6bb89c1f34e4333eaa31cb05da26b9e9dfd7a991fdd0da612fecae43c1', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 90350, hash: '7a804485f7418f34cb7ac7171c8215420c2b33eae82f69486a7dfa2e33496650', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67282, hash: 'c8fcbfc3abcc6cd436eeb7360dbaf5e777d029b39f2542dd37826cb3139a1c14', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113707, hash: 'd7cdb599cdbe9a2267a5d8c67c025edc68fad5c5455350335248537069f1920c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120337, hash: 'da5df3a80ae7c7e5f942005899a338746519845768f6a389b46b9e27587d5d66', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118749, hash: 'd56edaadb8ab60eef8269b1e92ab8802452a6c9bf67bbfa71d82d002f999561b', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 117943, hash: '11fb082f39b10ad5a677968176509b7719f5f9684c43cef17d0dd46d82e22431', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117646, hash: '347d45b76c9b733ed4fd9825ab66a193da7f8e92cf263d9aeb2a221791d80edc', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92488, hash: 'dffdb14c0e8ac1d243c5bcd50ecee6ce16b9354004471023f378805997027de1', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104662, hash: 'afdc5c6cea66ad77a76ebecee12f9ea4445a1f20539794e096ba78fafeb19167', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92558, hash: 'cf830eb62527ac5d428269f78d576bbaf312dea0421acc5ab8a244f99a06fcb1', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101038, hash: '33792b812df7d756249f7eaf1581ed2ce8b79c8b61200c895e0295e07a1db6dc', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109094, hash: '2f1f5745a78d19285aecddc7315ec3fd5c35de7465e3aef52c80204bc0792371', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68082, hash: '26227db226bce42ba2045ace8e605292c523d89b59f727ab675cb88211d42ecd', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67266, hash: '97b40fca6c6a27a208bfa2c896845c06bc9928257fdff7912b25524d3b8bad75', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85351, hash: 'faea00b6f64b754bba087510d2c3a018f88368e6fa9477e88bf171539643fbe2', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 81359, hash: '9378a029445a0e5782e8781f83f8902dec2ace1eb1d6348a5fcc7762d503f734', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 88931, hash: '188d10d88c4712c67fc3076257cdc5e03709dcee71e5eb013f23e6ddb05205e0', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86953, hash: '9544332b76e840067f7f137f4df3c6f6322eec7cdbfd7266e06f79ad99c609e0', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91752, hash: '5ce8ac5d05f16c7264db36a564b2738b8b518c20d79b2de6e4ae3027f203e556', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110677, hash: 'b81e5cddbf455184ab89b270727c24fa841577aa8d106742e9269354d2c1d292', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101401, hash: '96af49add3877a31d40ab45d85c48fb5ccfa607b952745132ccb2b1294a8f834', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104335, hash: '54e11db7d9c58a9b6407f307a9c7e9488ef6afcf5e59102aa88fa9966b768229', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87439, hash: '9bb873c49f943242000ede6367fd52ef1dc3521521c09f1dc19062a63f074fcb', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70532, hash: '6e9458bc01aac2a8effba3acb26aae9af5a1404218a908c2966a9694bd9d3ae0', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 92333, hash: 'b31515731ff2675237f1907de4b7e579340cf099d9a2543a763ce2e9edef1d9b', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70114, hash: '4d05a55b22f41e0b5e794c16994991eb90c5408d278de9df93f1e0812d2f9c10', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 101625, hash: 'f80a0c60261a9b8a1584448107423d3c36aee342c9bcba8e15c4eef2defdc4c2', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94191, hash: '13102eee8925d5c58f821bdbd69d54355acb4d569e9c9a26fb99a50e6a6621b2', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 90764, hash: '8eba80aca0c6d7dd207e6f619c8b7ffafdd6aad76c5b0a4c64a2325d20364aff', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87656, hash: 'ea8fdb3384b15994d4b07b30c9dfc9e3e063f1744251f7cd730ea34fb90d1300', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77229, hash: '332636100b9677e4db7404238071834e0b1c9675898e45a38fcec262d83ec692', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76108, hash: '03ad8c6df41ebab38d450a9305e3e6cecca6f91e852e98b9e2adb20187fb5f91', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82215, hash: 'a956a9cd56ed0ccbd0beaf1a222ff6ae3f60c82ed69dff307bd7975629ffd35b', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123666, hash: '5575ec12fb5766a1bedfc1c5a54b2a7295f743c07cac116c6fde30dd81ae4d63', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 123905, hash: '8627272cecdc99033da1165eed9c5743c1f2469b3f8b2ca85df16b5e58d87861', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123547, hash: 'ce8ad1eb5acd66528b1cfd3531c03e5e4e1feaee8fa47135ce9d70122fc45fed', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120855, hash: 'c4dea1981a1f1451d260a21389cd4ccf317ee229d8cd0f902e6f173e79acb65a', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
