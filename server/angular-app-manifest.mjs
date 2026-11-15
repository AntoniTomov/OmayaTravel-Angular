
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
    'index.html': {size: 111526, hash: 'f7b4462b80acc89c1d8978954385ab89ec6a3243240405c332c0053c5a1857a8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '000e10e82adb6ac0ed18cf2111f8ec4e9446f501eb53f091b4d409cd81f16ad8', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: 'c084a2a93cac60968727259bf9f4e83112b9a55bd4c65af7651ada81efe3e767', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'f6e9bc161f45c1b6c64e3a70e8c1aa85d8717c01b1c3180c7b0cddc9426557f9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81577, hash: '622edc1bb720dc4910946d76fcaebe6f7c582563ed14696c26a1839fafe096a4', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: '10e2fd3b459ff7e874d55edffc50deb6366eda66bee1495d27efab83633ba91a', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '5d0d2d1be56095b372110d8db9db162bf934382678894e1f16d58fbf1b480fa0', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '1dfe5726f3cace3844f9e86288ea58b21e4d27ddaa0c40904fa784795dd75d4d', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: 'd54b7950afe3249157493c27576337579ad6264efe654e24ed8dd133bea1f5a8', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: '0529292e23eb0e76b0b8ae73eab538e4db8b1551c6be02335538f3ad3d2dfa1b', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125136, hash: 'ef0f57efd4fd2cbe9679928cb155b26119b3d8e79f3d7f480bdd8fe3ac26556b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124479, hash: 'd526e8d0b5305af6243b6680e9235760b9ddba51153fafdcaf7f9aa5d24af991', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121601, hash: '2d5c67242ccbecfdf175b8ac9942fd418c8cb1b41d3a898f46e08d5160cf8fd1', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123154, hash: '67780ed2632e9d8691d1b6c96095dd6ee746d53454995e12a11d5fdcac5b3d18', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118392, hash: '1c72acab458704f74c80bf052257fd0c31da6eb9552c2086c6df1463b6c33534', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: 'a69e55e1148d430b4b712a0814af9e808d13ba34f81a32aa399a6e6a380e3c5a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: 'a80e5a36e923eec70f6621bc57c71c5301331e5611f8ca7ea5f6c3bb0a30d5c5', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '7a5cfcdc8b7c2d0ccce4039ec5e378c6b43b6a49d9db88ade51d7f921505aa21', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82494, hash: '05001358d63d8829326d7af1add5b2f04d6393267b100ad19c04f07ce63938b9', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '14883ca7aaab858488bd698916243bae2348f12539ab802786cb3123f4cc1590', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: 'f6baa2b0a3991e57b3901a03156b3675a2b4904d3ad070a03e4e11fa88f802a7', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: 'bde116378e89d7a2728610ca8d1ef6bc6bfbb67e9212c21cc7dde93b9f22b645', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: 'cdfac59fe81ebf71e174aeca819960617106cc5f427ca9e4d27034fb7a808a78', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '3b319aa0ea5d7ba770ee2dac9c23ba3fdff478bb815caf510d054b5ce824f59f', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118269, hash: 'bef35b8f277584f69085349bd8cf7b982711161498b47dd43ab2adc9b747618e', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94652, hash: 'c704d14245217569d0a60014685cc7aa58e80be124f12c183898a86a0b782ece', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107750, hash: '23d51f8fab71e71db5919656fd7843dae4b894e706668a558324e978dbb590c9', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95225, hash: '633d24a6960a19e2e9f6766e019886e115a9248058a15cf6068e04d9d35bde96', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94393, hash: 'b07afcd8aeb29c5d6861a685af4eaa344a7a81ebad4a7a9d385328a99b6ac1c3', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: '7f35400b0bf847dbe24a5abbd30f7cf8b954b12f13e88dd3675c98f3f5cdb840', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: 'bc273431ecb4d4f5235858e79fbe114677b721160f1570e33001abd198ba05f5', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104457, hash: '490cedd16711420878597ac38b5c150c6f96deac85ddeb85acf1c6b1f501a407', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94496, hash: 'bb901dbad2faa638eaa54f0576335524cf369da09c8ebd400f429e011b996d0d', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94417, hash: '6991261999db77b74cc7590d962474127a56b08bbea847ac783d5beff1f4200a', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118610, hash: '38073167838f7ce98328d88f798d8b353b44ea7edc0c5280503b4b6efc9f645b', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121083, hash: '401753abee4fe21acfe1407cf665327f2ddc23a982cb7174bdbd867e64198249', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119495, hash: '6e6c68a3d79095fc721c249cda5548310884cb7517d5350e56570a3c1a2a7d19', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118689, hash: '49fe35a7b8214c8c3be6eb999dd6fd250bc7a628ca18b6c7d5f6bff2dee7f48a', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124598, hash: '1608514b98d7514db5de095d0b3cf71890fb9aada418fc0005bf0de3a1544767', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: 'c73f6c665dda635f50affe6776976420905f0dfdb9190d29dc8abac78205f527', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107324, hash: 'e8f21338f555382a1b0c82f2fa72e1ebdb2cdcde5dc1682bea6705f4dfa92a55', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118084, hash: '3d82c65b4af1887943264b20c6594af57fd6cd8603fc913bae8f8a08da6c6afe', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112121, hash: '5aee3b8f4b6ec7b564ed18d1a00d5a466b6c29bad4d9ec280d1fcd23cbf3bc42', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68202, hash: '04a755954d31bed33043e493a80d181a04e652a485949ab9e2cf2b31caf6d4bb', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
