
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
      "chunk-D0zDOYLe.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DVqRJ_KT.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVqRJ_KT.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLw2yrdc.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUVEERVZ.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Al91EUY6.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dk3NoIzz.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXhxjIqB.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkWWY4ps.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxUYDwQ5.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CHpnYzIS.js",
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
      "chunk-B1aplh75.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1aplh75.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1aplh75.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1aplh75.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1aplh75.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1aplh75.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1aplh75.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaR90lAJ.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaR90lAJ.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaR90lAJ.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaR90lAJ.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaR90lAJ.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-swTLgRUD.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaR90lAJ.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-swTLgRUD.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CFdYN4Ew.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-DTdqRI6-.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIzHlx3s.js",
      "chunk-C_8QSwij.js",
      "chunk-BEupZDU9.js",
      "chunk-CtmMDpvJ.js",
      "chunk-RL-kg4vd.js"
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
    'index.csr.html': {size: 16193, hash: 'f8924f8eb2c3fb870261272a606a93ae82e982b3d76869c092e9e6411bd3a05a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '1f085dc1e05b79e5be7effc198102781af630d6d0c3667ff41831155fcf3b9d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: 'f41a4cd6c3ca4f05ef8596776448db67b385df5f07e750fc11f083ba27eedb1e', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '191403daf42efdee5ec118eb46d70e5a8f6e589a427c015bf8a56c875e8069ff', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '3f1fde29c2aa38409255eeae35460fd443e201e05ba5cbc298fef9194e5c183c', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '3bbaec0406f8f84c9d07d74abdfc4b14e132ab0690756a4c5374741eff844db4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'e7cebc74fa39bcb214832987ca8f764a8e55407b06a7501e021c0e549b34df48', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: 'fd219eccbcc1a17a1227e510f5a653955108665f58a40cbba5c370a067240ee7', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: '34901b1e41d7827db697b31e4e1c6709a65555943398795c157fe9e726873229', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '6d1889d1c0bb633064d3a6ea1890fa434caba3f11840612430b690ed5227352b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: 'dcc9960a392e33a209398376542a457206a781bcca055163c9b5f6c00f1d6a9d', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '3c7f696f5c10064e7f47c46237c2bd9d6726a9aae5fd03810352fd6cb81a9c89', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: 'ed91325c9a650530aaa4a0e49b628fab5ca615a0dc0bf6af959b016fbf5c4412', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: 'b80587c7c1314e8d9d64a216b8b7dbc76c9448c9208fec530aaff8cb0bd4a7ac', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: '4caeaaa9f67f2e1e5f521e2f9eff18ca769648c97eb72a2bb949523624dddf7c', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'ab34d69e91791b5427175b5dd19accf3b2bd752f7c2d5263a5fc9c5cfba49f80', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81577, hash: '6683a2b244aa038942d0258ce28dbcf7586005f48209562abf7c116dbe95fb87', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '140467221d4ac2504145e43e914087adaa06e44baf574cf0dd31b265912b1bc0', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: 'fc3dfa45da3947bddadcb709bb7f026d6bd531a76b7af6aae587080b683f4e8f', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '42b526f7faa1c22ca4420bb5c109cc0e1d06f7f56834b47930b7053a545da441', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82494, hash: 'e67d0cdd036b0d96c083f99f0c75309393975dbe4b953c04d91935d220bcdef5', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125136, hash: 'f090f4484a377cc30958269e1828957da98bc742cabcd187db5decbc9574e3ab', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124479, hash: '58e7986fbbbbdb7a3764fa10e0f546ffd83ad7352f1975edef8a2453275282b2', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121601, hash: 'add570436c74b25bad96f77d2935d85d610c917142fb4b2ae7a233bb92ca1b8c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123154, hash: 'd0d730ecf4205c36be9798bd0a793a252411578839347282a61bb91869eb7915', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118392, hash: '4c4ad7e1c5f031ca9f5f03629aa8a3777a83225f1c36f017ec8fd3a2be1a65aa', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: '9a004fb46ee55832284608711b4a656577ac9bfd99041833cac649b8440fd4f0', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: 'fabc3dc938fda2f146efd2c606bedb9f27119fcba35e1349f860f5b4d623f324', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '09a4f4a68bb11b6901b91d4e17ad6d817ba5ae06f28a38c8fc306aed306f9751', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: 'c351b379381fe9cded2562e5e3224be4e1fe2afb5382c1c4e6a0c0d3fdce4b52', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: 'df8705398876413fa9104baf7bd713fdd2aacaf71d1bee8dfd344530343060ef', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '2b38a8069660bba3d67416e9a3d60933305b2b2394c2bb8705fd0623b454db9b', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '2f2a94be8ad7bc0c06e45934100b46d675ced21e4ee1451099ef071a2b711738', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '64cd2c7f9797132dbea30ad4b99c6155da84c6aade06b6593fd7e99698b8f9f2', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '6a15d48062ac537563ff3b95ceb5c62fd560824323127cc887d62a61d776f85d', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: 'f076c01ee52d72b887fd25a91806764be4bb90a3a63cf4efc430505d13a72c77', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118269, hash: '98c4b1eed4a95b7f7f310e8c397825a0bb30bcc6a8722af87d2b83ebceadbc94', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94652, hash: 'b00a94c450994c23f662b99236af1cc0551ac575ab337b29c7134b1b15e683f4', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107750, hash: '065641842ec75cf656787e1f15d875b5d473993816d8b1b9fba3dd4bd254e7f9', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95225, hash: '289c326a68dca782035321a4bc1f6331c665600f233386c2fd6666a5c45a0d4b', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94393, hash: 'a20c5ca0c2b4af4b6591f95f2b207ef79f03cd97be33f36d33177a20ae3cb6d5', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: '5cbf0d0fde277e2fa869073c4f6bd5590e49232188a2b4007a915c7e439190d8', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: '28e32eef7daec5eec709f4e28af542d9eea0f73b691d18259f0235acae6dbbae', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104457, hash: '54bac27718554741e53626adb9ac63f2fa56d1f5077b342ab3ea717ccf128c85', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94496, hash: '625ac2544c8569832dfe919dd1e1b2956ff918b924d3ea2fac5dc55f98c10c88', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94417, hash: 'be12720607749cefd880ae47019f548c163b33f151b54dec8f001a5dfa89909f', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103304, hash: 'e0fd784a570b4fb4778031d17690d590dec4eb698643f595039b43930348e7b7', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107348, hash: '11274430d50624cac9f673bb6dcac12000fb095ba1229b6595fa8900ec9188bc', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118134, hash: '576d5e86f32d959b1b536cab2c84d729547519a5d2e6befe9d98cfdbee81c24b', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112147, hash: '88d16ee248d8c7b8a25553e22e270d25395aa5562c80364ccd9940d4074b7034', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: 'bc941046ddb4d2391188f3572d559936031990a93995912d5c90f68ebb3ef3d1', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118610, hash: 'c09743e721954cf762cf7276efaf9cedd98104d685e3977e2c969997cf09d66f', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121083, hash: '4376584ea3ace73d5800f1cf766950415b8670abf76416adee542efe0b89883d', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119495, hash: 'cc70e54ebfc11939200abbcdc8c4d4b5dbc2baa53a2118b9201c992046d5f77f', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118689, hash: '1def693b7f1200005612b9ea47ac2f2e692ae421568c08059d738fb8a47b974c', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124598, hash: '10976b276cba9b8580601acd9632edff2f88a02f4aad7bc1f2bcc6bde3e632a7', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
