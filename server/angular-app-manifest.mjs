
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
    'our-story/index.html': {size: 77276, hash: '1688d90341a8b91f56e12cee9b8a5d8738eb94c0022f9e7aca494aa12396bb42', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '17201c50d67f60a223d980bb7d1df12e171f1b32aef24335fa7c501f9680445c', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '5b44c3396806609812f52eded187b02b2d80b03f17f1e3ec18cf5ba007aa5cd7', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: 'b60f15ad4602d632ad59f757529da1d4e43a9d63c6bea3ecb7debf14330a30ff', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'c3015f734ce72c9460d8a102ac5b0d67a4eee1060c4a71e6e72e3be44a6fea59', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
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
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: 'a71b591c66b901911c1cce3bf1db36344752990a98f8ea34c47cd512816c804f', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: 'ca147125b7e7573254c383ed7164fd202d71fce5160499006502bcb460ce6581', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: '7e8a068cd3dd10dc68b67623421c92bdd4053963cce4f8ed5398e551335a00e3', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: 'cf125525a1c1bb8790214fb792df71cbe83c580cf963b208c59c022cb687f811', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '195b0bb07a63835e9c7a51595805f5552824237089e1ac174bb1d344f914be00', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: 'bf9e21bcbcd7dfdae23f4563ca05cefe5e886c0eab9fffd9602a2366e979d917', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '68438c92bf3ad452c8db86d441edff6735d2f14bd7a280906948bc3a2f3c9108', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '206cfc35fd9cf92a0cd5e629039096b6300d80a5bb887f6a5071d74dde796e92', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '9e4c06b6ddf3c31608929721c7e8de536c6295e83fa07488cb390515f68dc984', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: '58260a57a21ec8b382dc022891892583c8c2d6d28c55115b3e59ea58c531f9d4', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '63b57032764a20974cc26a320d16c57f73590f7e3d8277e0488e18dffecd06ef', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '735347a9f8784873c046e83d5cb89201ba579b702c3b085a8ffd817eb6ccf18d', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: '46025f41c28bd7c4b41b309f6d6ebdbb6754c60d8572d4f7114e8849cc37f5ab', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: 'b7395e3c1946a453c5a284a8f0048322cf04c205be5c59e6772370104ac17f1e', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '533cc3bfcd520e8594875654433742b4974a48aed9501e26d3ebe4f9ed0be826', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '0a3805b57c0821b009a211ad42338b50ae5a71c7593f53d7ab3877c6cdf4a824', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '0a780f0012719e51d3adabb4350848e31fd9ebaa7d5f1eb2653af3f323def9f3', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96526, hash: 'ecf6a866081a901eb759233b16d38d6c769cc40698b67ea7cc6b4390c89d0fc8', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '68fde57770f0d6a4288e0500aadbd8f495b1fd4b2346ed4e3c3d32a427605c1c', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88137, hash: '359e71fb4b3ec7577afcca3c2b7987e5b5571c33df53eb58da0937ef1dd933a1', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82540, hash: '85083b996b42a9c1f4defc20463488ab6cfd973769e3a42e274af113cf49b75f', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104478, hash: '268c51e341bba362ca827c93ac22f558e2c89f693e4074dbbc640721c365c48b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94509, hash: '77bf31fe2215f9a7b902f9c8a0d7adbbd4d1e7662e86293eb10bb5376fdd1ac5', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94430, hash: '52b1559f4471fbb0374912332956af56b124893dd0a23f58ad08ef8095be19f5', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118179, hash: '0360753577e5f8e246bcb67a3d20b1fbb86f5086e54aa93a2c5802be5020f08f', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94639, hash: 'ef576eeb57fc7671dee9324dfc47cb1f8b121420ea090cda7a44c70d8be98b1f', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107707, hash: '4de6be5a0bf3c26d307534ae83c2f52f67c1f1494d0f987f71d71b36587522ed', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95208, hash: '4caacfce1d7e22c6686c6b431e09c3b935260077de3620a5cb63576e0a23c7e3', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94380, hash: '612d6a25c65f84c70e17485f20b008a8283d88e75740154a282b784123b85d07', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103444, hash: 'f4456c4318185cfeec58188be94440ac55d42323521c2032f5e5e4c51a6f029b', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107536, hash: '202fc2e6ebbdb63d7f3bd02834c61c88abd0bd1b1c35a0f6044865b3ba897eaf', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118370, hash: 'a64996f8e18795a7ebe418d3d0a2262343d37d364f67400aab29cea6752ef5e0', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112322, hash: '8e0f64ba61fe05617630a57eac67ab4b2f37260cde449610e387d72b3cb061c2', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '325ae50d7e52df82d5ab881817f741f5840ac38af850039d8a3e533f42132012', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118576, hash: '91a26a22185fcff589d2b33b3044484ba896bf3155ebe8a3f84b7a7b6598c541', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121065, hash: '437ff7c1c92f4ddf31d6b1552743c440d6de1b734aa729b7920a9b9bb93f6005', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119456, hash: '2b20f5976dbe999ce9c9385daf5283ebe6b7a638661d47a3634ae559099c5531', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118664, hash: '7b2b19b3eeea6a581576c373196ba08bf457b14e8bcd214a98a39a2dcf856b2f', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124574, hash: 'e8ec94ac6ca0e388232c13b4359fca064c6f696f8e78bd58001c04ab94ad36ed', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
