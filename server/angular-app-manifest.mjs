
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
      "chunk-Cyx9iyJv.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-oVVOKpfJ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-oVVOKpfJ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-zZ7btng7.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D1AaR9He.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFHyOaT-.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7pw_KJF.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N6LZ_fGq.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B_eN0QXg.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UhOLUpqy.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CHIGUZGV.js",
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
      "chunk-DC1eQ4Jg.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DC1eQ4Jg.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DC1eQ4Jg.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DC1eQ4Jg.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DC1eQ4Jg.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DC1eQ4Jg.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DC1eQ4Jg.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gl8ptKu.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gl8ptKu.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gl8ptKu.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gl8ptKu.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gl8ptKu.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMx1kwN_.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6Gl8ptKu.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMx1kwN_.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-U9udmdDs.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-gxDy73Ql.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCa9kIy.js",
      "chunk-C_8QSwij.js",
      "chunk-C-8nrpHo.js",
      "chunk-ByE0tjQt.js",
      "chunk-DGnz6uRY.js"
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
    'index.csr.html': {size: 16193, hash: '0095fe15aeb8c89bc18723f15b17ab9686d712e82d055a11e068841170df10cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'e6e5375423c9718ed40001c2da10fd8e82d138ab9f91a1af202b90b460ee2a6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: 'adcd8ffb7d25a5390e05df7a77a56c48763d1c4193a2a491e93243342c5fa4d0', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '33e6391307e7508570aab231181b24a42cc8ffba48a1a74df03d63c145300fc8', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: 'eb148bb15d73380e4a7b66cd9a06bcb8d8089359a1dc5f405c4eb5a4b57beb3d', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: 'c9d8a066d0955a6a6b4c2670ec52b1f283602a80aaf028f30fb1a4da1965109a', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'f9e29e99bccfd1da35bc9fd2143575cab4328a749e89b5c5ad7bb8783025a177', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '610d448a2d5c4a2c3249348013ad7ae5c6c096bdf4f583e4b6b960ccb11b8a80', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: 'a28653eff8e4550f3b2e4963670e6c7cef0f1fd7bd650574a2ee84a8f096098b', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 96920, hash: 'e10cfdf2dc038ca02a7aacafff7abb2443335fee9936e1434590857c657174a5', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'c30c81ee6df6d4b3a4140d41897600baca90e3331f331cc78d2c3fc74f213143', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: '191529c992a2d4b9b43380acacdfc6d15941bec40fb4750d306e21caac75a9af', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: 'f3d2080e18ad6a92fc1e7daec0d55486d9dd8d7a8c335da2e4ca422c7a31fcd0', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: '0e80a81523620232e3d199fb2bfa4cd77dfe5bd7360fff1ffcff3eef0d31969b', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '171033d6ccda02378aab86170f0a26b3634f69904e2f344744ecfa9943e8a98c', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '042e939ec915a0ed2984ef85f9ba3f47b4e5e51e769766d489242754a6c9fa73', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '85338cbcf2aa9a15bce47de18caf5647d060d7aabb5d79e9a3ad82117a75560a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: '014f2333eba405b96cd1cccd98c4a0a212e54e44b16c4a5c66c5443eadb473ac', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: '92257576fcd94d9cdb3581b9d45ec39d514383e7b225b2b84567879eadf52c30', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: '7be57ee291703a53ec9ee8e7c29f6beebc997a31ddb0817028cad9fc5b70ba63', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: '61d1a385818d7780fc1968812798208ad2f88ebab885c0d8dcea1bb9eaa54eb4', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '9db1dad3ff69960cbecc2c298963e50bfe9d5a845952107231d5432439b3ed8d', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '46c44399821fdbe988ebf9e78e63313cb12458ac56cfd8386818daeb22c07626', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '2182125d2453fb650ab5f4da8c5956835d7f70a8a45cecc9efe8e724996dce83', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: 'd1f49fdf4f9adbd9145c5a114f876ff509bd3b8f2ca87ecfd1e4332d8ea4e4ec', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '53694df5e515fd0990dd26fe7bc57e88c3326deabb334db3984d424b7528f720', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112928, hash: '79452ada588d3a1d7f4f9b1a8340faeb966eef5004f4e5f5332d240569b5d2c4', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103661, hash: '715b46f24d0ed2b2db1e1840dc1682b60131577214f791ce7e0526edd92af0b0', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106102, hash: '43c74f8369fdee6fa3cbbd800dfc937dd746037490e62e1fa002b1459c1c3e85', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114923, hash: '1037324e507f4906cd901a22917fd4201aeb7afe6a8a0975ff2867182c9a82cc', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 114704, hash: 'b87d45419402d615cb8b56b65f0c9e8ab339d685dea490791f3dbe29371f5ed1', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '46ef0712e63177cd5f2e38f72484a2ca76b9248e2507bf3391d483e8617b7814', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: 'a1f3807471e759b7f81b290da9a8efbc7bb63cc13f2a9e19cd11ddb523d6fe1f', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '7e1ee753038667fad0cf612b2d66fcd17715944017d5009df238c9eed0734eb3', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96526, hash: '612afa402195371b4733d8431845f7f054255d404921b2a8525e41eb7dbc8877', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '945203721f3eaad4d19b05a0784fa02e04a328a6e45dde4f016cb69b014a7fc5', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118179, hash: '9a0ed2fc2817a4bafa268ac87f7ae29d4e1b2faaae036eb8ea7d905ab706e297', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94116, hash: '045d32cfef1ccb27d3450424ea8778b68a472f0d68c87b8558fe969475f97b11', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107179, hash: '7c06a34b92ec763254aa1765e007a8592b1ebfa6f6d07fa54d95fff5d20f04a9', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94688, hash: '1d568f8339d27f70379dacf27b633fcb4761b59121c693340f618cbbb26b7294', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93860, hash: '1829bdc5788d0c310aa13e6961172520f281b8a29056a68a644a6a5e5b29d125', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88131, hash: '052ce6de6e8dbb7a2a168a23aeadbe9016a07aa40d1ce23fe6712d5f7446188d', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82534, hash: 'aee92efd1df9027ccd0a45f0d440287c928160982d4118eaf22f7f23b5dbcf62', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104478, hash: '2170e1f84528d72f6fa861abeb1240833bc739ee322f45aeea995432a17fd169', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94509, hash: 'c64b40c416e181aa68a2b34e451c7f2df0f925ba69c81044bc709f6e9572def7', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94430, hash: 'a018cef0b7791a62d471d44602961c2d7a59d71821b9261e35fba5a17ba9f6fd', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102918, hash: 'b4f352b54398b084dfc7432d3d74d4be2bbe23f8c2c8d1e4ff731c938c832ae3', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107004, hash: '410dec933bb21cd71b7b5bbd5975e4316ae5f66bc917a238e96a19a2893acac2', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 117838, hash: '59d636a658c6a4c13fe347a3722bb162f4211eb606cbadea365f41da50e600bd', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111785, hash: '7ff35766031e5b16c106966a6d7e6100500da9c0522cdfcb7d6491a65e223a50', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '2c717b2a42d3ed3415a3e4b0caae45a3f70fd213d706ebd48e672d816b1f3858', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118520, hash: 'eb5a1996650a10d2a331d7ed84bf3c7ce34d315afab0768dc6d4afd9dbd7b683', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120999, hash: '0b0994ef2c7c475c497617375308891daa6438f2de8d1df5a79117a30e6fa4ee', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119405, hash: '2019a8d2207a82afce12f9a098e22475006833f2ba68abba0a57855d9a10c35a', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: '1680c67fa5d9a64a5dce7d8afddf063b13dedd9daf856b6c6a813ae3d0748dea', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124511, hash: '87fa503d9df6a02681dc45cf0c67adbe2704dced21e5b4a842d5a9c5e7e3dcc0', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
