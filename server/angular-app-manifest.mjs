
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
      "chunk-BHDHpBkj.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CxR_MKsw.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxR_MKsw.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDMPf04O.js",
      "chunk-B9VGKSOv.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-d6VB5160.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiZ9HeBz.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-a6p3zGyo.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSUA7d_k.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DxMUaGQI.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BrCe9yPV.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvDkrPhW.js",
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
      "chunk-CkfZjC-t.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkfZjC-t.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkfZjC-t.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkfZjC-t.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkfZjC-t.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkfZjC-t.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkfZjC-t.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BixK6bXj.js",
      "chunk-By5BL6Mt.js",
      "chunk-Ayhq7Xb_.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BixK6bXj.js",
      "chunk-By5BL6Mt.js",
      "chunk-Ayhq7Xb_.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BixK6bXj.js",
      "chunk-By5BL6Mt.js",
      "chunk-Ayhq7Xb_.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BixK6bXj.js",
      "chunk-By5BL6Mt.js",
      "chunk-Ayhq7Xb_.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BixK6bXj.js",
      "chunk-By5BL6Mt.js",
      "chunk-Ayhq7Xb_.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BySaUm3I.js",
      "chunk-By5BL6Mt.js",
      "chunk-Ayhq7Xb_.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BixK6bXj.js",
      "chunk-By5BL6Mt.js",
      "chunk-Ayhq7Xb_.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BySaUm3I.js",
      "chunk-By5BL6Mt.js",
      "chunk-Ayhq7Xb_.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C_i5FLTG.js",
      "chunk-By5BL6Mt.js",
      "chunk-WMKfWUbS.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/armeniya-kratko-patuvane"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/best-time-to-visit-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpqE0i0I.js",
      "chunk-By5BL6Mt.js",
      "chunk-B9VGKSOv.js",
      "chunk-Ayhq7Xb_.js",
      "chunk-DX-RfOUt.js"
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
    'index.csr.html': {size: 16193, hash: '5fb93da54e7cc8517a4a14640ef1568ec0c98ab891c9dc06f1bbd85ed1a76c46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '2346603ce9c5b65a9e3613e4f2367adddb6871cd0d50c129c65c6140be20d370', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77257, hash: 'e19e7f178bf389d3cb1e3e21c470638927d6f28d2d940b94c4e64faef86757fd', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76680, hash: '9d15b306b45b04b5e9d5630a7e746322226e2ac28b98264864205f20c320840e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74598, hash: '93fc445c4186460c5d4b3ebf850871654dcc139d12bd2d140ebdfb7629c07032', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67353, hash: 'ce218abbf672944027e79254ddd2a7aef3ac665a251a33497eee4c58eb537e45', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80462, hash: '16225bf6d9379ed01e5372810b0aaf5abc9e67441090b9216affa2870bf6b067', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81618, hash: 'f1733cd7808247a2276b4bfa04fdcad149283d5aedcf7c17872f5f0442d0124c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82243, hash: '33273a2918b2b99da8acbbb484eeb5ca36682e2d85f66e1414b3df9b13af7c3e', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85548, hash: '17e7a3dc597a0284f5c1b5048445d5be2d0fb79b7ce1c332a397cd9ffa969df9', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84054, hash: 'eb03b49242a5dfe185efb6695a5fed4e4786d402ee91c40b8f087dcaad8433a3', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 90108, hash: 'a52354ed6638ae9909dfe149eb833d8afcf73f939b7d054514f8eac0884afdca', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111552, hash: '849bcd7c0dd614627fc64f60c33f2033bb0be001fce2874207198931dee8688f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80100, hash: 'c019ac362f82b9f78dd87312fee0b4754fbc4547d66aef4478e502459f0396bd', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 99539, hash: '902794b4c68e7de126fc2847277ad8c9c3ab7d8ebe8f8f9f7230be0db10606a6', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67383, hash: '6fa81f866b8e0d28ec75f1b50ed121e9e1366eb8d8c59b263f6276b3c9b4accd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81558, hash: 'd31ee93e1aa32576ce44a3bebfc23dfd688ca04570f00b2915e9873f63fbc436', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113483, hash: '79f1f4165320a97f204255586bda8f6d5f0dead2a03b5d1e0a9c0872c4a65bf2', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104225, hash: '7f746ee94c3f9e1388f5b8177d44d8b952d2615333aa0fc7fce6f3c84586fdb0', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 107012, hash: '1f261f7ea416f3b31bbdc20f102b4595e2e3aa1d1c8770363cfc3e7dd554f100', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115839, hash: '5b58d0bf8a33c126dafc633fa04f53ac39c3170c0f075fdc6efa6c29a9bde02e', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115622, hash: 'fb3431c01037afc4422ed28cd228ffe42193955934f51d234dd26346aa21805b', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125143, hash: 'b23fe09844a9f940f402d554b3d8e3a7c383c4341ad9f5e1f8feaa7b86df9881', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124486, hash: 'c2c21cd4c4edafbbf6ed2158a1ebe2e0bdac4d0d15f16e2164c176f6ca2fd9b0', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121608, hash: 'cd3bbf146dd1257f7398bae4b8c3d6efb89d862266bdb2f7208039e6db75ce6c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123161, hash: '0ac01ceec5bf724b128c54a46786c554634718b89bebd4d0aaba398516a29182', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118594, hash: '6468bc5c47e6de9a65a8a129d5a235c7e01ee99450417adb7456178b002a756d', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68183, hash: '7f306b5c58dbde74a6b66ac8e451802759de60da5235909fff4cc07e91f506b7', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67405, hash: 'de073bac2e227d8cd87f23d389a54a062d6bfdd4c345c4b4d07be7ed42e785ba', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77330, hash: 'af0d001900d21642a9af422ad09a0a5e0803961a1959f95c32c47f564820d2db', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76209, hash: 'c68e299bd1508714bbde91312fd0174e4907212dbf6977c263fad2ad15f33ec6', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82475, hash: 'e96598e75adbe3dfef78ea101357adb7645e3f03fd162a49d3b99fed57f612a9', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87942, hash: '911e63b245524cf82df6c192c74b26abc8db31881675cac419a7754831505dfa', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87719, hash: '3f4ece0cbc03e18d1b255792ab7ca13b339e827ce831f1bb3e9d335cf7e3b342', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70514, hash: '0436558a304a6b0a06da3ee605518ae01cb47e293646a830be3308eff793f16a', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96502, hash: '5a0458a81fb22bc37e79c70e45c058a329ecd4d3cf1964db73b9ae96647c76e8', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69997, hash: 'baafc90a9c73d508c603ca6453cee96ace6519c96a474e2736eb3347188b0b24', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118276, hash: '0da6a2b7f503b7d2bcc797fcd7c8300b1e39c7334eae1f9c835e54aa475470a9', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 95040, hash: 'e403ed03789c176a3ad4eb349b7ed8bf035094a212e2518cf37834fd4fcc0dda', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107792, hash: '88d23421fc5ae83f0f72a04c60ea92f532de8471d3eb062d6482de879b29e44e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95260, hash: 'ca73cdc724a2ce25ac2adf2d3396564c3297edc05f547fc011a8d73bd1496f46', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94427, hash: '46e44f4aa233c77875e459957c2e4b6f3c4a702e11e0d7f6b0dda15172ea9033', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88097, hash: '756e0428195dc3372a80719b45f34f9b1722f7478d5b9ec88494867020dbe466', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82503, hash: '5afe0808179655aa6880dadf2caa624c84d5318c3e8b6db4a77089c199f0a413', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104438, hash: 'f3de91b2ca87ba599807b0a0c3885f0fe7b94198089c4d955bcb9e7524bf9457', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94477, hash: 'b4430a041b78587e35f0b779aabe47685c4e2e51e9992674f1b5b5a648ddf930', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94398, hash: 'c01d5f26651e6a9be04f54490aa172f1529b472bf19a9d5bbb40d670b2148ce5', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'best-time-to-visit-kyrgyzstan/index.html': {size: 119192, hash: '3947e452a1b4ced5753600a88f48ac7bb43a1bb3aa73fb6dda515342a318bc15', text: () => import('./assets-chunks/best-time-to-visit-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103669, hash: '3e55834fdc965f035aff5825d4e40fe37674cea077ac8e9e42d54911a7cf3213', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107679, hash: 'fb0f5307093121ae4145eaea85179828fa7885ade9d59186b2631687a339f5e5', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118439, hash: 'eff0072cb839a77033457e1d9f973441caec0420934ce6d68e2124230a5aa884', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112152, hash: 'bc2d1068d7734429da6d0f43af57023f76ffb6d4092ed90ad1eb68e802b58c38', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118617, hash: '4a7f1afe98d6a15042e19128a781796238f5bf651f261875d78a5407af3ec949', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121090, hash: '0cde1550369dc31e43296e5499816b2533016d28bf9c10cf06acdf574abe3f5d', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119502, hash: '4383ac196b70be4295ea97e597806fda4a3354eb0055f1b76106bf146b04f6ce', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118879, hash: '1a0071699f194868dd63d6b4377ea3770950aee4bef9268a725efc5640df88ee', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124605, hash: '589d3954cf3377a22942e35e78605f179193f981f085353da454316002742be8', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
