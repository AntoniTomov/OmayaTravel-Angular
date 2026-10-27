
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
    'our-story/index.html': {size: 77277, hash: '279ebdbc74579aeb2ef7c0b628e974b064a05a90fba0310a8c686a815d94ce35', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: '25d2b00657ef486de4f119aa510913dd2fa501747f8d42b38943763f3a166f8b', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '79eb9efd67ad81b3b00607342c768ac711afa54775f2ffee71bc1db564a37e7f', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: '029952fdbed242c0bc2e993070526b7931999f37fc73fec4c813a04693468473', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '2515abcb4377dc9e28a9ed799106eb8aff4c0a80ba5ea9878ec9ef703e65c2a1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: '6dddfabef6acb638493838fe2441e99b79025636d0b8c0a8e8a3b54daf9c0911', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: 'f15bab968fa1eb40bf0a4c25f9bf2ad57db4d7d65e14478217a7df0914ee7aa1', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '7cca9d4753370384927000267ace58b7dcbd742fe95e6240e8116e5051467246', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: 'e570606bbae3626ee5ec93b99c0021088ef7ba83a98a1b58081425722968e9b3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '2e98bad0e5ca07df5fd98f8db36276e40163c32cd04c873a01095308f78ada0d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: 'c3bdf50a25f2b69358ffe51047fe119f74d80909a4563ff10ffa433b2d04245d', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: 'd4bd224aa9b0ef7e93a76b88333431652aa59e30accb67bac4a2cb82c89a4bed', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: '7286b499e0d6c6312132f0645d56d95fdba07c79f073011f67acf01a354687af', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'da9ac87c445c536d9a43834a133336a5e843d5309b3afaea1dce0836d499fe0a', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'efaa12e813a53874d7993b38c341af0dbf4ce5ee3593bfb35c9c0c71a6411bea', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '81defd6c9240ad20f3d42aadadebe7481b8b470000d2d649178adc9f67c772a1', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: 'd432c5d00dd66587d78a10476c64b525b7493c1982ba0a6034e8becc7e611a2a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: '3fc439458b6affb5cb52deac5e0f126cb70a628258e36f7266c32d9787b002f9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: 'aede170758f423ec49700690908247e5a998c85a56aadcb655e8e425abef0dd4', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: '3e0b43bf08db1cadbccbe728f7216e6ff07d0ff61370e3e7e7d714479ac793ea', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: '6b4daca5b1469965f95e004b2e53b2d5968a8ce39c14d83a4c416cc59223c93b', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '1dced0ccc982af531684d4ed8bed3f19529a15c93764d70a100ae220f6fb03a3', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '6f21ee6d0672b84ad412994423b33cb4d75b1d6455dda7830453daa7bef7bb52', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'fc74e73d8451e3b6e5e1055c4f8fe84c296cc281492fc244250f9edb32f6a9b1', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: 'b750a9f09df8c33501a704edd20de7e9b693df4095b47bdb52d99c9bc3496099', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'cb7e680bf8bca230f81b7f5dde480b9f9b1afc14caf7b51ef449eb5d254e40c4', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: 'db89da547603e6ee13f2051013c849a7eda8bac7edc1fc90009d0881ff9f510c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: 'b90346d94bf8f61eacfaca8e8a8adc33889dcd32ee954b02338c35c08000012d', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: '8651b982416f052fbebacdb49f7ed664ebe839115833b3ec1bb31d3b802a21a8', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: 'f895b034eec83f5eb1090a9972e78efd3c609c48faccba9b6133e0406f5f3a40', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: '54971307699bf203cd4ebf5a769b67bd61798f6e5f6a818553ba9c2c37f99f7c', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117999, hash: 'a3b524870dafa4e75901b66ee52d62d7a223737660e663dab9289753303ea68a', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92606, hash: '23de63a39ac3b57b3b7e2f97c6ce13d2ad465a223388e2f18e38dcddec06875f', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105081, hash: '7fad1ba0aa9feb387f52fca8ffb81e0a00f1634fdfb9eff102edafdcab8498ea', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92970, hash: '8a8d3057df5781d40ba26197ac7f65ef133ed076d94b1213b40da0f2c6c532b3', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92172, hash: '9d4be214eb9c6523704eb070d2c98bdba6ac9951cfd8d75b24b2c72d36bf617f', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: 'c7aa542ca8ea1c34ebb2a4798f0c6ee0dd30c2bba664076df14397acdf4412b3', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '068445d3091ff05ef4d55ed61738a3e9e470e8554d291b8f3f3e8e2804a303fb', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104486, hash: 'c992c33c8f02259d59e97013889fcf67067a9748b6189307cbf2c8badc7cfead', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94525, hash: '85b9ff53905147937986f1feec6b42ba11c6544fd0a4080df34346b8b7a9a554', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94446, hash: 'ae2b3848832e150b0d4232ae61f9137558388999c3f36489dfaabebbafcd51a8', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109496, hash: '301afeb9cf8da4223738661fb3f8b340972418bd93a2270fcae2e32acb8e0b74', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: 'c620d3e4ec3ca5b2e243d56583382e0117c00563c94a75885b7f3d0c8b75985f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: '86ae5a05d5a46891695e515c35b90e5e5cff0b6693935476f2c5e773ef52776a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '1d385e22dee5a392468c6fa1f0872ee13a88804e86780a9e7de0b4a8637b06f2', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: 'c85d822d00e1a991d0b98e6d28b9e7094c736f336833c2d875ef506ce16334c3', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '7fe87a502b963279351982d1b8f2112333e85646cc1283b047434088b4949dfd', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: '6625eb7e96742591f9defdbd018a03eb35a598fc0d15469b6a2c695a98910b7c', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: '72cc3d3b761ca38a3a4e36590a71a46ee2d6c0c0543e754ace33eff9d5ac4f34', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: '55fbbfc8a8e038afd024103187fd3911f5f7eb48d3dc135581d21d82009e5b5f', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: 'f75ab72d2fa1a5874caf4e1e03ebe6a04a8d92219366f7f44004d510a27b41ad', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
