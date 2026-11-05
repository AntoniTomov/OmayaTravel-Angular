
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
    'destinations/index.html': {size: 81659, hash: 'd8075a49d7a0f71afbc7f7a0348a6eb7fbc92a333bfdc8885bd08c646ff1092c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: '8f3ebaeeee0d269f572c2f586867fd7d5cf92821bff19e76f76e6f61528dfddb', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: '6b8d520bae1b7ea91a576dc0fc96ca05180d91ecab07d0b5fac6b5b87986e58d', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: '9fc9f87aacba29469e68ead3ea72ed4d83ed5cc37a8a0a889e278ed2c0e2a6b1', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: 'd8950f815fc2d9d9d8c5118ab71fbe575b71bfac66b88124567aa1c4dd376193', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
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
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124586, hash: '6755c3709301ce62e1f92dee704da4bc20e6ae47c31e65602b54c01c9e8699c3', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124228, hash: '36234a806824bc2a91debae5e43fd1c370b758482e6d470c9f332858a67409ce', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: 'f728f4eaafc8ce3a2c526a8c882ba2b86668f3d5e433d420dedffad62d6d0636', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: 'daab3c61dc42b7482dfc5f5dc795beef75cf9b7e9b1145d10e93c24053d506c2', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: 'adf3d9747c8e4108d1f665a93cb5de8f9d6446f2a1efaa00399e01dbba5eb3f3', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: '2f1be81a8bfab02b8b7714c75c4c847f84720b0e8ad465d28420e9f1d6d23794', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: '83d041b9287f0e9e700b4d075f573958a166570931920663ad62343d7f42a7ef', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: '032b7a03b505d969ee8a8724301a38944c2aa3134d7ce785b4e458fba2b9eda0', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: '949ed24a7b0ac5ecf01b3df2301a9c48ac0284861940c62cd5f57ea0884e504a', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103220, hash: '0bf63196a0bd2cc8bf7bc03a4939026de68d4937ff9479484e9fbf4d090985a0', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105670, hash: 'be3326486b265e76bda2b76eb32bddbe5abc815e4c1587b8dcf71560d4b3567f', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114491, hash: '153d82846794598c848020883e7e26b423fc4483f9eaa599abc534e789a0e426', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102329, hash: '634f44a81458ac7520e4adbf40b073202be89644910c270a375b4e55c71b3a8a', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: 'a96adcd2fe4a637a219130266c86de815218ca727fc24dd0053ec0c859817c53', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: '8b73768b5396ac064aa31e9c115c78700cb40314c60c87e1839482986bd766de', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: 'e628199ac3650c1f375c328012ae9eedd3d72d627305b54d25ba918a30e4d788', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 97871, hash: '8bb3967898b9fdcf107748c525033dd680d5c80cf157ae71b38443ef4d4a70cc', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70038, hash: '0eb18e11780223e1986dcb242783ff9415a57965a23f8bef80734c52eaa8c5df', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87210, hash: '51f7d2afd394ad81d5966b90ddd16db3ac020c570183c9d0eb9c91a3b5321854', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82557, hash: '729337d0f778fa75e091f04084e60d92173afb1c16f4cdcedf690c1f1409cda1', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104500, hash: 'a31f45c1fded570ba0ca7f0c51c77847ccb40f9c36c0d98128fe4c66286b7013', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94531, hash: 'd0bb931f1d1b39595a2af8a521b980cddf8158f4cb877041e13d3d7a36645b12', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94452, hash: 'cdaf9a5562054b83932153d25e302f216d00a255fc49c70ecefd130801c583b7', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118201, hash: 'a9ff34ccf63590468d96b2a21e557514b025762c6e94e52a03c7cc40b1488db2', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93712, hash: 'e6b19b4a6479e4a32317cd4d741ba712304437be89de1a3b6e74074ba2e89ba5', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106800, hash: '04d37602035d4b9eb3f8f04def3248c9c0298766441f40df112074f44792c59e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94258, hash: 'd41ff80947a45d3f0547b486547b7c84599c3667e717094bbd5aa17b950376bb', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93421, hash: 'a2ae7b7c6de462dc33730165d769b08e0d0aeed70b55f43cc1e70547eee7de96', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106350, hash: '4e698945db123626aaedce5114982b5905e747585658b46bf1f3da37dee83742', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 117164, hash: '9f0906323ccb5b92a1a52392d2dee637600e6aa69bd08f4eb76d4ac32b80f134', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111227, hash: '8d492425c3c02948a5a9681213d630eed2db144890623a57850de09c88cba637', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68228, hash: 'fa0685132a04ad62e5484f616193e4cbc2720120933153a48ce78b8ada20c31c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67468, hash: 'a8f9e81e5dbed412571add762b4f33617722ce842c0a29329282a2e96a533678', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118600, hash: 'ff53fef0fba9bcbd8b08cfa12bbde96972bf5c66b6e9b133782492db2f33e5b8', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121087, hash: '67a6d5d861c458fa33a7891dda6671208c2c95048c3ed8289c59255fa089dbe9', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119478, hash: '457534f429c343061c0f653780f07f2d6671d9fd0f0f7f137d3cb5c9c1fa28bd', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118686, hash: '52ed59e0cab0ebb8ab3d7ec0d02843adc2749c5f3387d7bdec3bce67f209fa09', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124413, hash: '8e41a7e16214455a78074ed7a2ffcd98bb6487ada19a83f4f3ddf0f5231ed92e', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
