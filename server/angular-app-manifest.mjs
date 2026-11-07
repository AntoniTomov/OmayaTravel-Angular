
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
      "chunk-DQ04IOvG.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-C6s45Rhj.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6s45Rhj.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaAP20tj.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFiuhdgL.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEV83TIL.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BLpgR54D.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DqyEHKK4.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lGcG7Egg.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0UgGQ2d_.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-phELpI7E.js",
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
      "chunk-CgDc_IJY.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDc_IJY.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDc_IJY.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDc_IJY.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDc_IJY.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDc_IJY.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDc_IJY.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DN8MXmF_.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DN8MXmF_.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DN8MXmF_.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DN8MXmF_.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DN8MXmF_.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KUQBGvfP.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DN8MXmF_.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KUQBGvfP.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-iudTADDS.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-BgH0hMfT.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUdMz5-q.js",
      "chunk-C_8QSwij.js",
      "chunk-CtIqaHft.js",
      "chunk-D8iYTdKW.js",
      "chunk-DAtkjE0I.js"
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
    'index.csr.html': {size: 16193, hash: 'b66a88dcef0a29d070705b9a4f7e4c7eaf61cd938207a8912d7ca8fabf7f88fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '0760d4545df35303d9a6146e25ae8ef0e4701fb05d0062ef0b5584074ec7dae4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '8bf4ac23b4356a732fe42995c79d75e9c6c71c74d55a22e81a0be6d89875db46', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '5cb260dbdcfaf84739d9c48e9816c39714a722ba5bbc0d9657a2b209ad9662b7', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: '4e170259b9ace3d3afdf5190fbd7d5c54ea6fa63b63c4877812ae51fcad6cda1', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'c3b1aae88db6215c005887186a70856e01979d07a9cd46b6cc0edb917264f13f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: 'c0238ebe37da1d75448eadbe1fe64a93764ac026bc94577f3d24464e78ff3dce', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: '5b046e19a03b96d33c28f77ecd8585b1c00c6bf940bc768453f970f8b8b162d9', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'f35d2eb67afad7a85d4ef828b7aed96c32dd85e5bc0abff937a5c88d3c7aa9fb', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '9e2a786344ffc9453bfe8b511b5342df07ce08ba23d84f56d1837460b3101b72', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '01c75dafa6cc8c27e86419d5a713fc6178055a9d6f7b0ffa52ee5e65ebe39832', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '7cef15b673e37aeb67f7bed803d53bdfd156583e555208a5bf02e26e9587a2a9', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: '1688d90341a8b91f56e12cee9b8a5d8738eb94c0022f9e7aca494aa12396bb42', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '17201c50d67f60a223d980bb7d1df12e171f1b32aef24335fa7c501f9680445c', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '5b44c3396806609812f52eded187b02b2d80b03f17f1e3ec18cf5ba007aa5cd7', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: 'b60f15ad4602d632ad59f757529da1d4e43a9d63c6bea3ecb7debf14330a30ff', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'c3015f734ce72c9460d8a102ac5b0d67a4eee1060c4a71e6e72e3be44a6fea59', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '9eb43bd86a687fbc0c8893407af4f9416ad9a87e8406f99db6e300a05c751f4b', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: 'caa0dfc64e0b522d1d8eb01ab07afba4cdb6a019cbe2fb72ce66dae7b4cbc802', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '9b8f82ba706caa996540f3eec73f0394c3eeb24b03705f18c38daa37dbdedfb0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: 'dd6bbe257a298715701d41e9e1b1f5bf584061f5d2a840b1a0983357f32ebf55', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: '8c4ffec5dee509a993806dbea26b8c3c2856e396513496acc6a5bdd0c1e6009b', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '2ee2d21bafcde113d5bb89c317939db4cbb32661c6c2aaeb7a88f5eeca5214de', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '76e4b572cb982bf30cfb622945e808e6ef87dff9ffea02aa9a2f3dade09b2f53', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: 'e639b5f942ce22885c0c9dba2c6effe831ac7c329240a0e3aa7a5e0d0c10d5e9', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: '3e31d6ea468e14674f2ef4d76dcab732d5b3032ebf290800a168c12475769cbf', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: '95ca330c1f9f2e06620bd8165a0358710090cf8554f923995b0b202303783f79', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: 'df5ed2a1236cd7cdff36428573a2f66da5bc4e28c8a7c863af13da0738c1514b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: 'a167a485ca440ec4cce38e12cce3915de92b2f7d08cf97159011bd6ab8b4d1cd', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: '7e140e9afd7d3d2340e274a3d731e9d84c14abeafe29fc54c3c1532b3ae2f728', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '4c0ddda2599595189b82ea1f67df833c053223109645aa32e1b586be902946e7', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '0a54e1c3ab7d9e947a66a3351a2864b36a89314f204c5290633c001c2a9976a5', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: 'f4ec0a50ef4a57ffd195922597276a936b1eccc8d1fa399c9bc6d25697e9242a', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '74eac96cb7aa0476cf50add76f00994bdf8841ff3bcc4bdd8a2efea2dbf2c1c1', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '42dc8ef32fc7b2b3b6d808c5332b7e057eb75dc5c8dca2146e6c604b1f39b458', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '1f280a7d8ea9e5738d745ac54ca52714f15589c5d01ac07d3f92ad1ab34f7286', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118196, hash: 'a76a17e99665bc21b78f96353addd1efe8f063e8662698c529755097c4a33efc', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94620, hash: 'ec23b9768afb547477b941c0e8bb9f6403d213a940e77c2ba22fcbc9515bd7d5', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107683, hash: 'b106cb8e4072b41f0e9c8dfbc5970c543aec253e9ec8b475e98e190567cb9ead', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95187, hash: 'c538157e5970623b7d57814ebaf71dad45d689bb555dff408f2dd9a96dd1c95e', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94361, hash: '0e21adac912f73e656147e58e1fcce5b0658db8dc4bca02ba2e6d622b71d85dd', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88136, hash: '357c81e55b8b7fca4a5ad2bb0c9ec422e57d2ee9bea2cd54047e536f620ba32e', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82539, hash: '7916ff48d8eb26b22b8490f879c90c5e8803e2ae0ccc6a483a4ada3f98db3ada', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104478, hash: '9400ce2fee3d476f3e7910b4672fbd97f56d21331925c34cc48c58846d3906dd', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94509, hash: 'bf9786cd3783da406b8ba3a2636d24e0b577a5f321200cf1248b0a88ba6021f8', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94430, hash: '71cb0331caffdddcfb8ddb95391e855559d33289f6dcc7380962a5bc079ca378', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: 'a1083686b7d9ba93234286076d4ec23a71e87c821ae21c3e0082ed510380dea6', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107328, hash: 'dd611d23be61f35417eeb84ce4958d35eefdba6f65963a7f814433d6a5d2dbb7', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118114, hash: '0ee30d0f8bd8ce409001519f382127ff308cf64703153029b463a0dc02509481', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112127, hash: '9110dedc05acd1aab83093a87b0c75a8102d5ddb6d3d412711e6df35770be04a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '58d276c35ca5f2c4e91676946c727c8bdc407d4a42e3a9107af30b17887aa8d7', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118537, hash: '49add38eca9d4baa7f4dd1c75b37d8c44c5a596ca9ff74fa72f02edf50f108a8', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121016, hash: '41882a32746480695d1b3e49a5826754bb71fd9d2707e40f53bd8f4af8de5b75', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119422, hash: '9d582b6cfaa974e942e3f29a58cb5d287a2533eac775bdb99116f035ec20677b', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118619, hash: 'b1a518e9ff9bc1d98446b2560abd41ed4b62590a5c61471a607a87096d7bcabf', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124528, hash: 'ce731568dc650eca8fc1d60b44b6e939bd615bbb79ea9d8af5ce8481b061ed7b', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
