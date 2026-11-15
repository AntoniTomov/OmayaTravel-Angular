
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
      "chunk-BTEqW49W.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-HlxFVq9U.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HlxFVq9U.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAhJ9h6L.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJq97Tv2.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCMNJgwu.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXUhTW8x.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-xBH9hTCL.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N7gyF71E.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIU_aK1a.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BL3s10JE.js",
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
      "chunk-CeDx5ZQI.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeDx5ZQI.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeDx5ZQI.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeDx5ZQI.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeDx5ZQI.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeDx5ZQI.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeDx5ZQI.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cy0iAh48.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cy0iAh48.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cy0iAh48.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cy0iAh48.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cy0iAh48.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Da1prmtv.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cy0iAh48.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Da1prmtv.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BN4A3skU.js",
      "chunk-Cc5rem_u.js",
      "chunk-BDk3pFi-.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbZJlwvV.js",
      "chunk-Cc5rem_u.js",
      "chunk-B_NHhS_H.js",
      "chunk-DYiB8zi3.js",
      "chunk-DqN2gh5i.js"
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
    'index.csr.html': {size: 16193, hash: 'fcf1c2abe26b2cd9446fc4a93bdf353c148c52d655bd8459b43cefe129525649', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '053283d8419503659948185a9cef6cd5002fe159b60487e46239f576bb686702', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: 'f7b4462b80acc89c1d8978954385ab89ec6a3243240405c332c0053c5a1857a8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '000e10e82adb6ac0ed18cf2111f8ec4e9446f501eb53f091b4d409cd81f16ad8', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: 'c084a2a93cac60968727259bf9f4e83112b9a55bd4c65af7651ada81efe3e767', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'f6e9bc161f45c1b6c64e3a70e8c1aa85d8717c01b1c3180c7b0cddc9426557f9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81577, hash: '622edc1bb720dc4910946d76fcaebe6f7c582563ed14696c26a1839fafe096a4', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: '927e5fd64bac119e8efee81e190397de195897b024b19ddd0e53c5afcef30e38', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '4ef1a8b0ee3ab6028f835f7df2b319540d7d67d6a2b1a2ce5b1ecd84cca769a4', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '280a877d832ed7d35dc5ee2dbb12569c5fc1918d7a9e485e697004e09c75a9c7', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '989237f8cf77259afec07864a62a2c0c19eedf733153e347038682a019048efb', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '3a757d0b2059bf08500ba8dddccc599a5ccde45a6422e3e3c52119575e83df3b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: '5dc6af7e88ec9cf5a04376c40678e06990ea53954d1685f887a2b161cffdfa11', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'd678d31a01602316400a53a3f388c3ce1fad0ad98fe424459a59d9956681f0af', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '5f3b8a342f47208c7db1be8e24528853317ea98bbb4a24c1f3e36263c9a4fe69', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '68b6bed34914b96829bfdc68c5f83db131a581fda7178214710b1a0745e4bafa', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: 'eb63977a615a7d42f94d7a0c0f58a9d474c44e720e2f2c8c54d591e868e1548a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: 'ceaa75e2eb72436f771d2ae6fac97ba39c05225f8ab6d1eb65c2e50087a2c9cb', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: 'd489dfd461288447b1440d46b0f3915c453a1c12bc3c01a53b6140badbb59580', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '65bd582586fc7a6683f35b15d48a7b18728ca33cb6605c7e9a141f24bae5942b', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82494, hash: '83284bd757e5f31535d0df98844fe0e03218feaf98190f6be30e719248e9a159', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125136, hash: '88f9d21d1d71bff2013a5fb49e0a54ddf05594ba354775f3aa2c4ff9234635a2', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124479, hash: '5043002d922d1185b482ba67cf1dbe3885bb64207726366fad4207299f747a17', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121601, hash: '7975aa0d322a075953d643576acaf8f589d5efdc5b9b84ca681c1d0cfc2af468', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123154, hash: 'f29189040ba770fab5820db1749cf7eb7f7631853cf55aa334e04cd595ffde18', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118392, hash: '9414460805afa298637d9605808f0fef644d5980d97da74688f08fe8cd2b17fd', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: '37a1175d70cc1d718711ddfdb5bc8f2292fd9c5b1aded158150715474f1f8db4', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '861f3d28bfa6d4c7932c9365a369407867a29f3ad38c85bd621d60110d93f480', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: 'db407f560955a95937923c302fa922aefb53a33e77a130ce1df6f9de9ce77e4a', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: '73d9f26c1cfd8b1da2eb453603f85c9f047993f7a7ac71f46a7aa7455da66622', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: '440a69d5e8783f355b7842e8ec2272fc8451d0adac155d8c34142bb956ba2ff3', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '76cffc14b7857bdc9d633a185ef18ab422c35fdef0d3df4a7314ea9e87272c7b', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '9ac4b3da34ebc7d029af3ad9b8d8e84f221143f237070070f2bd56615a011e2c', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: 'ebbe137e84eddca20b2ea1862dd75bfd4055f367bf0d4dc6cb9e80230f15358a', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: 'dfd16480fd0dfdd48c7ac0efa81b579c597333cb3b364085d298acd9338b2833', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '8e60a751e861e3756515f68e01f05aa9a15db2f02a356d3a7d39d3e4c4f371d0', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118269, hash: 'a5d00f50c6ad6321c24f5ea8099a1f8ed972d4eb706d638bc968e4eea3b4485a', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94693, hash: '006a0f4dc407800ce4011568bd416224332af1679d5a382a4bc3b0d59a7fc286', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107877, hash: 'a89b9fddb4a9c3fdbe045516fb2786259d56dc48ca64610fb4701823e158c5df', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95279, hash: 'f9fd4ee31a6bfb9d58bb1f6c81990d55f55f4a43c56356552f45e26a26f0ecb3', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94434, hash: '3bd88671c1a0bfedad5914e152461091e0ed055c4f9a2cd58889398fd39937a6', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: '5ddeee2717771941dd943db934769461016ca657e6a4ee9e0312bc944c8cb31c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: 'e365d571c6c928bb2a197055010780391cfdd9012e8e5812adec04cbb8bd6bc0', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104474, hash: '0ee118833b24fce7fef20398dbe55d7bcec70eee2c4f328578218165fd51a1f2', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94506, hash: 'd56c8de04c98284f6812c89a59a952f6cb9f55c96549a101448c2e1b9a553821', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94427, hash: 'b69369579a20b2e0fbbc872f1437789326210ddc9dbf4a7ede20bf5440c78699', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: 'd058c015f3dbd11baa6c0e297532aff3f9a7e6199d3f05e988be7a25a8c924ef', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107324, hash: '8699f80081bfbf0a74b79f6150a4e505dc7e7a7fbebf9ec53d9fd2a106942f1a', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118096, hash: '5de9b4ea2eaf1d24e2cd9c1fb6d280037ea8fa8dae7c9ac34d60da8aa09c0eea', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112125, hash: '4d62543fe4f9363c8ee3a7c98e551b54d99e28e4c85c44a21d6e2df89a7a559e', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: 'd3210e1617c3de008ed3022e798501b0bf7249ddeb11e7a075ec8d2abb179023', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118610, hash: '85a9ebef928cb81f240d050c5b8fac23e80c22290406835d258943c3b18308a0', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121083, hash: 'e761cfdc3174aa36672d1e460c852a5c5833538b572cd919ff1900ea696de1d7', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119495, hash: 'f72396bfa183664fa7a11e5af4669b8f601fe6c5d5154feb4be19980eed6a18d', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118689, hash: '9a2e9e09066fb66926b993908878ba7ed57d64411f5e15d1847961a8c87ddf8c', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124598, hash: '7ffb882c8320353f26f38d5610c542520581a84d6f94514e08da220e55e4689e', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
