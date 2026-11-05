
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
      "chunk-Bwn0tpsa.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DbUTuUpN.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbUTuUpN.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlShdxHD.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6VVmIX4.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJaIbTg_.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-xRPu1USC.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0m_A5fz.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-glBY8xJl.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5hoB-fK.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-rlNI_S08.js",
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
      "chunk-B4oUfZfg.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4oUfZfg.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4oUfZfg.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4oUfZfg.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4oUfZfg.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4oUfZfg.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4oUfZfg.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bbq6dl3w.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bbq6dl3w.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bbq6dl3w.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bbq6dl3w.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bbq6dl3w.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bqtf6ySO.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bbq6dl3w.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bqtf6ySO.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D28Aqz-c.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-B0Qwm20L.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6e1w4mo.js",
      "chunk-COscVnWl.js",
      "chunk-DRrHCV_V.js",
      "chunk-DNDfdGOe.js",
      "chunk-H0H9pq-k.js"
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
    'index.csr.html': {size: 16193, hash: 'e1b60eda1e6efefc917c40749c703d2ab79ba307f3443fcdce4ba73cc15a6bff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'fbc99c8e8248caba4f0ae1899eb773134044cb5bc16aba827deba32e68940dea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111633, hash: '1d90dc8d11ba2b0b17ca53fcd9ccd1f052f6019760a93529fa9338b7621cfe66', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: '8a273ee168714f674ef99c34342f5beeed8f11afa917fc545cc72b8168ea1bb4', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 94707, hash: '7dc2fcd85a08f77ece6698977dbace89f74373b31cf26677a0987a62bb5f9a1a', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: '2256b6b8108c72b80c7eadab7e3b582f486fb7deef6cc6080be4648f39e2438e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: 'd70767011629bf0a4d56d6710595a6d963bc6b4acbbfa5289edd18d650bdf491', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77298, hash: '91d19ed04067e12777f92914b0c756a9af5b24b2f330a0584692e193a9fdc305', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76721, hash: 'f6ddca20d33913afe15e1908bb6c054cd7c5b4fc263653fb1fda814552daae02', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74639, hash: '7cd8900511cbc0f61c695c5445507d2c13a97deeb339e118c15c1355d498b3b7', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67394, hash: '1a016a8bd8708cb1048b9d25b9d8bfb28c092a157c9b80ba2f8a11db74790270', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80503, hash: '930f1c3e58aef61cdb94aa91be64603105294324a642a17ddc4c4c9354766013', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81659, hash: 'd8075a49d7a0f71afbc7f7a0348a6eb7fbc92a333bfdc8885bd08c646ff1092c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: '8f3ebaeeee0d269f572c2f586867fd7d5cf92821bff19e76f76e6f61528dfddb', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: '6b8d520bae1b7ea91a576dc0fc96ca05180d91ecab07d0b5fac6b5b87986e58d', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: '9fc9f87aacba29469e68ead3ea72ed4d83ed5cc37a8a0a889e278ed2c0e2a6b1', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: 'd8950f815fc2d9d9d8c5118ab71fbe575b71bfac66b88124567aa1c4dd376193', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: '64594149a7cd9d6d24967d05badf35daa7515bea37f02cc092153c149285f3c0', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: 'a7f09e53f0ee48a89dc8974c6e5dd4d66e16b159b63a7b670ba38f7372b9230c', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: 'cfb292db6e7d3c0a25d880fd59b1f8b015bc3bc09fea9fdaee0c8840354a4083', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: '10ffac28263c94c508910aa2d9ce9dcdaa2c9696e90037d15da74b7a8b84e7a5', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103220, hash: '637cfacfd291856a6b4c6c1b3e6d48f052d03b2b372f50cb70e7cba166f0f973', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105670, hash: '1cfbee85b18727451c6a400af619e280ad319c59c2cd6c2186f791de78f66bd8', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114491, hash: 'e54f37cc4ecf142be2e6c3924a86c085148ea921f9275aad8178e0084f7e4073', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102329, hash: 'f44b721c301f9aea7ebef62f0a31a75785af809444e5310736722695ce63b415', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124586, hash: '2bf7fd26ab7feae39a2dfb7cfd263757f9f9a75a45c21fb5344745b12906042b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124228, hash: '26366b53d8e43b25db00e2b05150eb925825a4c52fa1eaeda10bfb44a980a460', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: 'b7f18f3a588114b0b0a386cf7287bfc2fb1757ed7f5e18d8e5aafc99494e2382', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: '1eedd0c66226292620b109f4d14918d95e1266d5f17dd6ea00425b184a3a0890', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: 'cd491f0ffd5228e12646801cf0ef2dfdd284e0149aba2a8919988973484aa543', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: '6a7721e641ca173081a8a00fdee25e7110101cb1b211a712271ae74f2aa49ea8', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: '21c4fb8c3cf852a8ee75925a12bbe2d34eafab16fffe85bf7f400a29f98bcba8', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: 'a44c32ff1ad38acd7ef47688d91c7e350586a44ccdd75fe3cfcdca01bb96a242', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 97871, hash: 'fdcc5d5c5fccaba80b20960a80803e193351760f6598a3f28eed08d3bb7a3a2d', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70038, hash: '79f554389a5718e4b04a3fcee45c63ae767b6c37d020c1bb7f936416f89a827c', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118231, hash: '5266590ec78181cbba316f5d6f8faba34b240a4de6f8bb7d5db6f369142755e6', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93668, hash: '38ef053f1cc014992ad9dc17ad8d8706ddb14cd927f6d4cad8db222403a8ed73', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106689, hash: '041f1017b425fe46909e4ec5854bd9fb2aeba6022ba8d37b56eeaceb7b957946', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94203, hash: '99e921ff19fb8b9c16ec60f0a37a33223376c636ecbe737fecc2ed5d7650d52f', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93377, hash: '231fbe8284210755b6ebc3f80acf6f631651909a24d8ee416dac797cfa7e3b12', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87210, hash: 'bdbfba0cac1d4ce3efa706362146aa3522694e056603139ce9d8f9db86ef2e68', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82557, hash: 'd083f2aaa5dedb80a1192b58cc5a0e69f7b8d12fb7821fd639932d3b645d06f0', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104500, hash: 'a31f45c1fded570ba0ca7f0c51c77847ccb40f9c36c0d98128fe4c66286b7013', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94531, hash: 'd0bb931f1d1b39595a2af8a521b980cddf8158f4cb877041e13d3d7a36645b12', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94452, hash: 'cdaf9a5562054b83932153d25e302f216d00a255fc49c70ecefd130801c583b7', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106237, hash: '75a1b5356f71f9a00040815bb4551c2b3a2d043b2742c8c24b537b125460adcf', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 116997, hash: '4fd5cc61b19f3c4d7133e98dda8fde93d4c90550133177b6ddf64c26147851aa', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111124, hash: '9d20125bc893fc60abc944ccd5ab35c78069abf6e62c622e2119353683440e09', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68228, hash: 'd7bea3dfd44464a11307ca6c5eed181f0a82440e7b395ba5efcb94af963013ee', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: 'c53f7229b8e2f43156af26f711dd55fd7b6008d260966f8daa32579ab408749a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118573, hash: '9e6f9eb72ef959c9f3940c09c7a7929f08bccac3f294596e60127fc638b66403', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121062, hash: '8c089ce2b383e8d3487ead09ac77241385708269989758e31e4f08f1f9834952', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119456, hash: '162baf745181d79cf39733f72b43b66b7bdd7b0cc61126609f28e2159cf2a315', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118663, hash: '02fd3e60c3a711cff62b406aaf24c7f1be9df023e14a688cf399b9cbed03494a', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124386, hash: 'eb7c0888da6d48e435ad18fc34ec5493295214639053ac3d7963d4c91e0309c1', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
