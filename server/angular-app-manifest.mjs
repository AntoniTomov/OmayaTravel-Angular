
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
    'index.html': {size: 111552, hash: '849bcd7c0dd614627fc64f60c33f2033bb0be001fce2874207198931dee8688f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80100, hash: 'c019ac362f82b9f78dd87312fee0b4754fbc4547d66aef4478e502459f0396bd', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 99539, hash: '902794b4c68e7de126fc2847277ad8c9c3ab7d8ebe8f8f9f7230be0db10606a6', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67383, hash: '6fa81f866b8e0d28ec75f1b50ed121e9e1366eb8d8c59b263f6276b3c9b4accd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81558, hash: 'd31ee93e1aa32576ce44a3bebfc23dfd688ca04570f00b2915e9873f63fbc436', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81618, hash: 'f1733cd7808247a2276b4bfa04fdcad149283d5aedcf7c17872f5f0442d0124c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82243, hash: '33273a2918b2b99da8acbbb484eeb5ca36682e2d85f66e1414b3df9b13af7c3e', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85548, hash: '17e7a3dc597a0284f5c1b5048445d5be2d0fb79b7ce1c332a397cd9ffa969df9', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84054, hash: 'eb03b49242a5dfe185efb6695a5fed4e4786d402ee91c40b8f087dcaad8433a3', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 90108, hash: 'a52354ed6638ae9909dfe149eb833d8afcf73f939b7d054514f8eac0884afdca', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77257, hash: 'e19e7f178bf389d3cb1e3e21c470638927d6f28d2d940b94c4e64faef86757fd', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76680, hash: '9d15b306b45b04b5e9d5630a7e746322226e2ac28b98264864205f20c320840e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74598, hash: '93fc445c4186460c5d4b3ebf850871654dcc139d12bd2d140ebdfb7629c07032', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67353, hash: 'ce218abbf672944027e79254ddd2a7aef3ac665a251a33497eee4c58eb537e45', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80462, hash: '16225bf6d9379ed01e5372810b0aaf5abc9e67441090b9216affa2870bf6b067', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68183, hash: '551e2ed39cda5df46eac04f13c6aca529dd9a67dd9f7958a4fd39851eb06c266', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67405, hash: 'd1ceac995c7fb4d817dd6695cc11b40a595b4198e29797705bf045171923a631', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77330, hash: '0dff78fb24c8a9bfa579163a85f5e6e8bdeaa4b173468e90cfb950e5096e6be6', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76209, hash: '25d5b6c1d578d2b6e421b67240904f59e09deac67583b903671c96b057246080', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82475, hash: '0d1ef638b480d76c046a438d8defd28e8b1fa0ea312cbccba15561ce35065d20', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113483, hash: '79f1f4165320a97f204255586bda8f6d5f0dead2a03b5d1e0a9c0872c4a65bf2', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104225, hash: '7f746ee94c3f9e1388f5b8177d44d8b952d2615333aa0fc7fce6f3c84586fdb0', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 107012, hash: '1f261f7ea416f3b31bbdc20f102b4595e2e3aa1d1c8770363cfc3e7dd554f100', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115839, hash: '5b58d0bf8a33c126dafc633fa04f53ac39c3170c0f075fdc6efa6c29a9bde02e', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115622, hash: 'fb3431c01037afc4422ed28cd228ffe42193955934f51d234dd26346aa21805b', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125143, hash: '6885e7877fbf65d6747d45badd87c4bb15a56fce6af7a7c67f728dadecb53857', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124486, hash: '6c3626849081d6e12c70263ce38175910fd3b650e7cc7ae66273aa26a30818fb', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121608, hash: 'a8c4cd10847b9cef470649c0356725cb904d6344b484f64ac47e584b6c3d9b47', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123161, hash: 'fc37f7b368a2a62846833c7b315edb028054bfd7af7fd2dbd1cc31b70812cbb3', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118594, hash: 'c8b8f81aefe2d2008717f92b8e0388f6f6b4e291da462d5734baca2afeeff934', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87942, hash: 'c4190a9bec89cf087a957b87ea3f7da9f1e6487e14e289cfe486565d1990d288', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87719, hash: 'a7c8093a57e2e7ee389cf5732c767495e543e24c6652f106f0453875dd8044c9', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70514, hash: '70b5beaea4325742e43b37801f822143f0b0e4b3f4a0389212b423629f53f03e', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96502, hash: '3c97b0522479b1cb10a309ea1577cca1bfa98608e0fe80cca86463ea142bdc79', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69997, hash: 'e9e7443f8e55819540b1f7f74d68f3977897dc35a8fca3e6e88b5ace71289954', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88119, hash: '1c215057b5a00ffeff23173fec3a40678b2acba6e614dae33b34463ca98a04fc', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: 'e643ebe9649054b768105aa5498d7cb627947b3209911df6c81f23240a49f310', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104459, hash: '466da8943a850af548ff5d7dc221cad84dbb7298b0d94587130c87afff9d4507', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94490, hash: '8d27b9036f32f1b8529308ad10e23d3852438cbb9c1d2566a542cbbf53af4ab4', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94411, hash: '909d1749ed5fb20f7e256d3866dc8ecfeaac8b8e24b50977ca64768c5c9dae5c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118295, hash: 'c6288449907b68039cdf9869a9e25eb0d3a099a5101d3b926d5194011e2efa0c', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 95005, hash: '1d8ecea02ed5b09fde79928a8493e5f1e238096391fe260096a0de898903e6b9', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107714, hash: '24a8fb1aa7470f71f6e5f466cdef22b8d4a4cc0e6230385545ad6817312b75b8', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95218, hash: '77a8a1301e721fd59a977100bd38382d28b33c0dba7aa5ba016b8a42797a04cd', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94392, hash: '30011a2b2f9c104bce4c20ae0acf03e648d2804322611b02db8a1c7bc01b2574', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'best-time-to-visit-kyrgyzstan/index.html': {size: 119206, hash: 'b25fbfe093acdd9b5259bc3c05d1aeb708beb1d328bd7333bf7e916833c0e0c7', text: () => import('./assets-chunks/best-time-to-visit-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103685, hash: 'ad98e4691a377e501cb20abb299c062d087b936c8400aac74a9869b3680675db', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107695, hash: '8f01d472de6d05381b24db2cafc56b0a643d18fe18fc170c03dd1424e1bc9770', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118453, hash: '4a46693f916016dbd1ac66ae365bda70992e508b8ea7a541f7a169d9b1a39c5c', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112174, hash: 'd8318338d131a3c095491e97b49dc730741f1dc4df14a0f977ab8312946db4b9', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118617, hash: '79426e3e49cb36a66d0a6a2a6088a22b3dc329580c1f214edf446f6df5c9719b', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121090, hash: '4486c6e1bd6aebe875fb3787f49ab64462860b4997adc53db5144f7957b46d26', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119502, hash: 'e282efde16a45d1fcc4195ec07b8c0a1e76e298beda96f3cfe6a49227c16f4d2', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118879, hash: '56ee37d9a131d2a79953ddd12253202a51d7224d0307dcaff078d831235b0018', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124605, hash: '6faf67b275ad340b24d7158bd898d74c61ca94ddde54bd4e2edada9b4549fe1b', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
