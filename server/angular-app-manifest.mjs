
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
      "chunk-DEwnuba9.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Dapg3BPA.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dapg3BPA.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CERAEk2q.js",
      "chunk-CJOQpuOe.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bvs0bA6w.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yjhalZQg.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRiuD-pR.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BYknXxWm.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BBbAlS16.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3lJjBnx.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BbSZcsjf.js",
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
      "chunk-C3UPQs_t.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3UPQs_t.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3UPQs_t.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3UPQs_t.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3UPQs_t.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3UPQs_t.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3UPQs_t.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvNzIXM2.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvNzIXM2.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvNzIXM2.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvNzIXM2.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvNzIXM2.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DU51v6Py.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvNzIXM2.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DU51v6Py.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6U0ZoiUw.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-BP02CtU_.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3yp68BRv.js",
      "chunk-B92g6irG.js",
      "chunk-CJi0KLuV.js",
      "chunk-CJOQpuOe.js",
      "chunk-BWQhOqmr.js"
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
    'index.csr.html': {size: 16193, hash: '9537417ba6bd12c251e134c47b871d1b2f71995126ff80825276fa2936b4e18b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'd97c7ed340cdf6c4a44c5baa179b243aee7a2c05a4d9f68acb563811e92d8d2a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '21b648b34071a1c94d6f4c08d45104d179dc0c19177c0bc04bd72a51734e167c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '408d3aed0e3c639d965398ad346871a5973a59b7f8faae6a18d2b3cf5fdd83da', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 96881, hash: '4bbdc904d47e1750ab45d6abfe934c39b9c922795a5e75ca17bb3644f954d546', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'ce0bdf78cbbc351aab2f6560b87ef9ddf49f127fa9b2ef61c7c990ad6b307e14', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: '32c6b21cff31a555ac218a7713f45379c59e69b487dffe2de9af182b2764503a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: '317ad911d400cb2e1501ea24b096545b1f478ac9007f1c0ee598ccffde045a90', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: '15f9d36f9f6750e63a78431f1da1d52dbc16bbb5b4e67a8b9a662e86735f24c1', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '2c8d729f4b7e49a27d1e19e3dad4c722082f5455d9e83ca7f90b3f6fcf47965d', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: 'bfa0974fe22dc1dd72fde48429ebfaa2e699ce6e7e4689670ef0240857b2947b', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '9ef55000b4d399711d3e466ea9c1e2856f2068ebbcfccd1a5a9c408caca4a399', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: '7002ab16b2f56442a19ee200d079daf2b02d6863737a31f8d646e732487fd8bc', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: 'f07e5c144920544c904752da8743715048c39166d784ab6c803839d249320237', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: 'f161b61165685471ec0c531feffa6296e3b4bb7177990f04ddb68bd45ee802e0', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: 'b9c53e9662659fcdfbdded40851cfa28ceaea7509b3a5469d11d7a783a927ead', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'eaad70d55ba9d7f209143fcb42c1721e0504b29b469f233a2da7aa9368b24eca', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: '46e4b02239b4cff2f9989ef3c3a698f11329daeb86f8ca3c036dfc17f717b493', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: 'd85e232e2a31395357cb73a4728b609079b9cefcd15fa547e9128c9d203886b3', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: '223d8492ed785ea7c6f12a822e7f2d1a0a75869f627b0498a723edf5c3c835b1', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: '257ff41a7cd207cfbb6a601ab2263e9b748db0062c009f628cf91ee72f71e78d', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '6e0d3a966efc7b63ec74f4fde4943e65fc773edb5ccc73cc1d5bf0f4e7eb7ceb', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '1b3eeb54c2a99ba1a090c6b589d03cf13692961558f32f48a5cda33ba6b38916', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: 'abfc2c1389bb4898e268960819366cbb40d10ee0ab735dba7117cdce6906bbcc', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '6ac86b0af8e06e9d0540ea8f9958cee7371f4b30873635efadb1df7e3c4c2072', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '87bc1fdea42b5b56e8fe0b15d98225a076148f474fdb55ee4b9f9881ce20dbe0', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112763, hash: 'b4d6e7b15f6e7561dabb9d09cc0a423f6080826b6f3d197546ad0d0e4293618d', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103496, hash: '7f87ba6d90c4d9f1741d39a867f2f173683024d89b38bcaf64717a0167e4e8c9', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105937, hash: '28f6635a0adf7716b5b83db1c84f84a4287098bd6988ed6d1a161bcb48f8d05c', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114758, hash: 'aa61b8cde97b8626e0027b5b1d78053463134765e31fd7c9f69c65a8517b93fd', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 114539, hash: '81ff325d3cbd7f2dc912c45b7fcc51d3996586e39534e7faf020c704710f1bcd', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87970, hash: 'e732fc6cd9fce86b86801e29a30917fed95b26119b5adb5f768cd03697f00764', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87747, hash: '038631c54810c8d6a420dbfa8aeea2f94c9da4b32bcf6602d1ce2c2119925a04', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70541, hash: '0c8801f63f895a732e3894698f501f5f1526f14726ab50feb1327915adf4691d', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96538, hash: '9fd2c7ecbeb519d8ab693a3e251822ae53c8d4486c5a26ae87654d16ea264069', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70019, hash: '0a52e50955f9d05e18b90001754456445b37e600eb38878858699574d9f3635b', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: '3c4167bffda84bc446e9db1119f4163e58aa761cea2019c77d246f70486e319e', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: 'ce7db00fb237f9b18db93a97a05c20e3892a6a5ea6afa7a237fc251e4a7565f9', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104457, hash: '602ff8022adcdc241df19dd0d33f5a8c7b395693878daa228d89bf485d0a807a', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94496, hash: '6e6a2c7d4efa0581df89a370e5371ac70d5e78f666ab0d5d442cac29ac9d884d', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94417, hash: '189cf0274070d50f6a19d9a422f20e93c29dfc4316bb7eddf2a23c0f0a08361d', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118179, hash: '55835ad37f85d00ede1f50c8a44755dfeddf642388751fca6174652105c2899c', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93979, hash: '54f10e9dc2ba118c6582e0c6c6356c8e9c2f173a2010a30b5f1d440de35fa499', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107102, hash: '7ab3c8ca300c9f8ff7a2adf6d69bd9cb4160210f388df2596e0e32ba3f689d7c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94560, hash: 'd4b10eebd6e91ac16f22c0e4d0666c6ddd231902a64783ea5a09948aa8f1cec6', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93723, hash: 'd63703e8edb39943a1841db6cb8e843c3dc710f5ffc0567dda95c7abfcd56eb7', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102753, hash: '5ac2dff91ec9af82e0406ef972631547273e55d21dcdc0b1f977b552dc4efd33', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106839, hash: 'fbebf3d071c676f1e0ddb6159eae8bee7db46d8683e90d5df294824eda2aaaa6', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 117673, hash: 'd47229034e16eab89f357431acf8fb93de5eb910cdccf5a0563956abc8eb8cb9', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111620, hash: 'e2915385a1138d97d8465ef776b122fc012a7df58c88237ec4069fb03eba0cb0', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '623c36e96cd0f95ed193eededd49be017266d242866d34e2dea3694108e009fb', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118555, hash: '8fd1170af43c0bd14d7af2743a49aabe2ba0bab83ec09cb7b9d7fda1099675c7', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121049, hash: '7caaa53464a3400a794d17036fdbe761b2924cbeb9bfcd85c19066f08db3b178', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119440, hash: '2a2d2e10079ddb387131db9fc6057f941880dba2e3489c8f4b40badbf3b44867', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118643, hash: 'a9cdfd078b946f92b44a87771ca9bfc1702ba3c8b3b9890651374e6095611d68', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124558, hash: 'c47bace631e26c260c93d255abefca63c4eb8e2496cda432a6befe19988c12c0', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
