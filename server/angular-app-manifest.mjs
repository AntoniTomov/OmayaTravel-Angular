
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
      "chunk-CokgeKAt.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-B0M1wHPw.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B0M1wHPw.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTguiGiK.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPzKriZm.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dw8jJd2B.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bn-nunxw.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EZhUZqmo.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkT6_wBL.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C-q18cT4.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bf5GKpCi.js",
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
      "chunk-w2L5zBvl.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w2L5zBvl.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w2L5zBvl.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w2L5zBvl.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w2L5zBvl.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w2L5zBvl.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-w2L5zBvl.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BuBsY9Iw.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BuBsY9Iw.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BuBsY9Iw.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BuBsY9Iw.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BuBsY9Iw.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PVwtaUgO.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BuBsY9Iw.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PVwtaUgO.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BOl9cFrk.js",
      "chunk-Bet96H-y.js",
      "chunk-loUjD4HR.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpP_m46F.js",
      "chunk-Bet96H-y.js",
      "chunk-BOoLrD3Q.js",
      "chunk-mY-EUQho.js",
      "chunk-DQ4OVcaF.js"
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
      "chunk-BG-RQz5Q.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '24402b25718240977d151d4abb8cbff366d973b0c5d162db4dc23bd09ddbd2ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '507e23475dc49c7a2e4f5826cb68d43115b462b487e13f39ba8a5aad5cdd1876', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: 'c3bdf50a25f2b69358ffe51047fe119f74d80909a4563ff10ffa433b2d04245d', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: 'd4bd224aa9b0ef7e93a76b88333431652aa59e30accb67bac4a2cb82c89a4bed', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: '7286b499e0d6c6312132f0645d56d95fdba07c79f073011f67acf01a354687af', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'da9ac87c445c536d9a43834a133336a5e843d5309b3afaea1dce0836d499fe0a', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'efaa12e813a53874d7993b38c341af0dbf4ce5ee3593bfb35c9c0c71a6411bea', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: '6dddfabef6acb638493838fe2441e99b79025636d0b8c0a8e8a3b54daf9c0911', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: 'f15bab968fa1eb40bf0a4c25f9bf2ad57db4d7d65e14478217a7df0914ee7aa1', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '7cca9d4753370384927000267ace58b7dcbd742fe95e6240e8116e5051467246', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: 'e570606bbae3626ee5ec93b99c0021088ef7ba83a98a1b58081425722968e9b3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '2e98bad0e5ca07df5fd98f8db36276e40163c32cd04c873a01095308f78ada0d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '279ebdbc74579aeb2ef7c0b628e974b064a05a90fba0310a8c686a815d94ce35', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: '25d2b00657ef486de4f119aa510913dd2fa501747f8d42b38943763f3a166f8b', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '79eb9efd67ad81b3b00607342c768ac711afa54775f2ffee71bc1db564a37e7f', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: '029952fdbed242c0bc2e993070526b7931999f37fc73fec4c813a04693468473', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '2515abcb4377dc9e28a9ed799106eb8aff4c0a80ba5ea9878ec9ef703e65c2a1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '5b15e6eb24610d8bce8f182b66b7b9b1cca67a18ab9acffb84daa5185cde7b6d', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: '14f2399af00a5589f4903292d69a3c45fcea0f4e7a91557ffaefca9ff185605b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: 'db69f1407185c1e6ba402e311ed5756ad16b601dacfa4a6267cc3f72098e240e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: 'c7657ec9ad28cbdb76a95ee88fc697f414b8f1a5d24198e414109f478383b822', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: '3a1129a45d1c9b7dd1af50d715f370d98782d2fa6cf732063281f996fc96fc99', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: 'c5eb7d66b17ed2fac6136fd61198e7e3f323424389a63a7e5f49f2b16b827f90', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: 'db89da547603e6ee13f2051013c849a7eda8bac7edc1fc90009d0881ff9f510c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: 'b90346d94bf8f61eacfaca8e8a8adc33889dcd32ee954b02338c35c08000012d', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: '8651b982416f052fbebacdb49f7ed664ebe839115833b3ec1bb31d3b802a21a8', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: 'f895b034eec83f5eb1090a9972e78efd3c609c48faccba9b6133e0406f5f3a40', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: '54971307699bf203cd4ebf5a769b67bd61798f6e5f6a818553ba9c2c37f99f7c', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '7022ddd39c10bc5c12563499c13433029abe9bb84d792c91a68bd25308231625', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '26d92d5145577d15fb58e4c87f3de4dc1001f1305855f2c4031c936719f9488c', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'a109e84688a260fafa70ddb3b577da5d1ad95a33c16449782d84d462da40533a', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: '7d045c7cd7a1c2a6ad50b65b4ae9f6b2f601e8c984075968d2c2e38ca85c2ce1', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: '23ce95cd252a75ea70401d31a5c9fcf8bde11fd281c051d77a8dfdbe0ead4e14', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117999, hash: 'a99f3c80acef9b75adf8558db546ae433c6943389d171586b82985ca50401880', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92588, hash: 'eeee2dc71abcec00fda442d25c1d2f3b9aa784cc2527ee4f748b587ebd51e34b', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105053, hash: '5df9e35b5925721f1b1831040e5ae70799f737c1e4ed109b592f2ec2c03fa8eb', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92949, hash: '38654b52ff8f2fef5ac771eb950ea5d949c39fdb93e4aca0d9caa4e12fde6506', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92154, hash: 'd635f0a77c0b5492bf0dcb08de7bd9e90d602962a88efa6f8be41975a926fe1e', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '7ebd5722dbeb296669fac4f5630186705360a71e6a4c19b2bd76652bd6ab3f9f', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '4a2c763a219c5bb6664a2440ee3cf863a1f51c860c5c0135cf6bfc22e4d4f966', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104503, hash: 'a2be6114477eb66e3d62dad3877be461ff07c980b13e04bbe96000ef13258c2f', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94535, hash: '9f021da5b76213abc3d7f4c10a9bb17da309e979dbc45f3876b09ee453e6bc2f', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94456, hash: '0b6dbc59c8d58d4f4101f4c5f5eba2f6276423aacb22cf45ca71bba97baff07c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109496, hash: '1409dbe5c683ce404917286a5095ef1e5f7521a3d67b2adeeb93350ed9126b46', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: '1923ac4986f13d6ff0374ad50a0ead77bcd10ea011b6441989ce0f849eba1bda', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: 'f4e07f65c0cf5b4aad0638c87810cfb57f7c289fb53da9d6f3e19a127164677b', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '8e9136fcc923cae53974abbf05fb4dfb3a25c03e09f9a46d6c548299985142ab', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: 'bf5c08594b73d42f05387fd1ae617a5b5d6d205fed3dd51179e517bd614542c6', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '4deceba728d1e500ef0830fd7b5adc465cb046c864a122fee1ad74e9e1a89cfe', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: '9f0bbb1eed1392beb0f8d59bb759499afcec533da9a9d3b29f51fe2f35b56670', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: '20caeb807b14c4c7765f0e8770faaa481cbfc896dd5ce006f8f72b671c46d83b', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: 'a36948ccab3353243dd6d654506826f031337c10b2d735dfaffe20a2d5823cff', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: 'e3642f5fa483c11ae33b4816f7ca63cee0a802b9eed8bbbdff7b72874ce949a1', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
