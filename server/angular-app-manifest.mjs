
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
      "chunk-DtLVZYx6.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DzQ5-jbe.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DzQ5-jbe.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VdipBSyD.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CahW314A.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BjQZ9a2i.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvJDK1Xc.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTz6WDCr.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChbYRZRE.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHq_Sanm.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdFOmqzq.js",
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
      "chunk-BWQIeX6c.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWQIeX6c.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWQIeX6c.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWQIeX6c.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWQIeX6c.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWQIeX6c.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWQIeX6c.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJ_I5SKm.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJ_I5SKm.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJ_I5SKm.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJ_I5SKm.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJ_I5SKm.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxcFoTcb.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJ_I5SKm.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxcFoTcb.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CRCPHqvH.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-BPvTa8x8.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXQbCS0Z.js",
      "chunk-EMDnhTlM.js",
      "chunk-CF4iV9Ai.js",
      "chunk-zXO0Tnsk.js",
      "chunk-D5zG-iE3.js"
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
      "chunk-Bw8nrRqC.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '9071176969d9077a7acd683b015ac1c9f71c46c94aed45ddf6141442474a0280', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'acfc64ae48c20d28319dd286015f4021fc7682f18f734b9b773c7015442ade23', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '678282e2239323788048eba2c387a3f547b7fe1f622d365ab9b265591a001319', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81829, hash: '52f9dd13f5721469f45afe917436d4e44751876442fadcfda3a6a2960cdec8f3', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: '5dfbd3726340c0a8ffb47cd2087b129c7b7c4c2e28aeb4333a131c14c6bcb40b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'cacac0ef6f928cc35a02eaab42dc37cdaef4a6b600f7d369f84acc983b5b382c', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'c94624e681f47f9ab466e3536dc1b47073b61a4ca7442877422538994121060e', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '068a5445c623c2ca3e3d53ba04e9ba8d6c90cb67d72c956d69f138b0addc4d0d', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76508, hash: '8a29239f4c179107a67cff844cd9259fa337d5b04f6604d232c887fc95485141', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '8c17bc5daf031895b606998f1828e13f5f10e330727094f7e6da7aa2435eb2d5', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: '0d03cbccd8ceda7bb1490456a6c24899bc7dc77c120899b1de9cf9058b970937', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '5c68b1c8bddf988f2183178fed2dbc6c1d4bc680fae929d1699ce8f017c19804', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111248, hash: '6f0178a5e4bb2148b0ea0e802fdbf39eac57eeb5d87eb448c4c9fef6f3baa700', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '539e44d787b327bc3bebfeb58a67c8193e1d3f314c0b86d2c4c2681757ee3422', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91493, hash: 'f7369c1e32385be811e6796cd6d2d22fdcdab89373fe0db3cecd99c1d44129ba', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: 'c5844ee4fe502ba2b430175fa1542457d4037a6e5c7aa0379a7911a77b792839', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: 'b8ca717dca558f60c00501ac394cf9e81ebb13c50c9ad930e022a12c171fc701', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: 'f368e7382bb8b3c8611f8810b2fb33f1b8311f71b70e477116deb85fb828938e', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110859, hash: '39f28f03cd6fd3f6ba8f42b391a657313d47e27322a4b0ad1a5cb4f3bd0728e6', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101600, hash: 'b6c116a8814553eedf6f4ab654e37e8f4fc4e3132aaf946881a23787b6010ca1', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104194, hash: '836e54fdcdaeba88fad6c53ef9a88b696bb0ae4e1afd4854008103e0e087b375', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101166, hash: '8bcbcc00ccc64da2ab072a41c985e52b647bf329c685d1ed5360ced8572dd1c6', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 104839, hash: '2d590d3ab4da1a1660678236b48da3087213ecc26226b0b41d6065c445a4606c', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124026, hash: '8c67e7ed50046f3070e8a6f4e74346c782df1759d7bd6158a37c21e358c86972', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123668, hash: '781391c73455d21edef3f3543e1a98ac076a3b1a6f35439d22e2e25bb56181bd', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120976, hash: '5f6e76efa624a696bd65f2c4e787aeede2b40d8a9713ebb4b5802179105f9475', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122529, hash: '7d1749d6f18af17d8a196967ed383a8507146994df807ee4a1de625ff15981d9', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117767, hash: '964155e7b48b5e0c136aa8a9d1396ef2d466f47d07aad18de0ce5d1ac09e1152', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87770, hash: '7101487fed26eda48ce48b871e59aa0aeb3d48486bb4eb695722f8092e6819b0', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87547, hash: '91fa257ec5ce1c1824b0e6b2a95b7883755ac8159a340fd0db6f8df5413014f5', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'f62ce242f818ccca337fe1cd76752f2bc854a3d3cb7108656a0706c6dfea290e', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 93852, hash: 'da4045b0c544a21dad7e91fa9743fc592165586f5e332aaade05524f5b7a0c98', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70227, hash: 'b0ba9f3e02ba24961a7ee3f0eaff6bb0a0eca5ebee00acb90775a50af76e75a2', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117473, hash: '8231dc4ca4fc6fbf77a549d6291eea94fb967d76fec7a5edeec12d795c990724', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92368, hash: '55e1162554d354d9a21b8e39554ed17b90b7a4fcb2039dd04ecf069ad69c30dd', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104831, hash: '564acb3af9d1a6574c7e257d473ef3c8c8e2596452cc6fc8498af99ad7032253', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92729, hash: '5a091b4295346d1199fd4c55f310aac1fb0422210f4e8a875e114b8dc11bf552', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91934, hash: 'e45d593632b21f821f3844e5033c0e7bfbb33d21721195a85d39b775858fa944', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: 'e10c88042ac45917605fa8e354504fcf8b79c14bf3b7ecc5988cac279e0ab283', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '3e37a80f41774451fbbf7f943fa12a9acd6a665d2fd4a94694229be0516a3b9f', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104266, hash: '7264d4a2da43421921266d090c26e2acd3184611335ae7652b35928091ee65fb', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94305, hash: '44e1ffa59a24dac2f52254e855e42de6463119be6a537d28c315b2fab327dcc7', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94226, hash: '0e97df4ca659958e0f37e9ee93d15328ad6d1121943b3848718201a976bd5922', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109289, hash: '55673ca5e35f950a7f0f137b66bed2ed65e2065646af58e780384cef36b54c60', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: '8285a686e8226a0ae6d62a63cc4099731a6c099fef9562f767c1e456cc7c4192', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67387, hash: '51d95bfe0fc39bfb423ada554b670b35343b598032b55c0982e009a2f435ffce', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: 'c5b91c63236747bd181e7170ae10a4e08968234036dc38083d2ea93b92f8e9ad', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: 'bddd90f974eadb3151334371b99070cc28e5e1e145b9bdcb0b95d92bf7666916', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113840, hash: 'aeb3c5ca4d37657f5479af415b0f6c129b799d6d81c9652b41b87877e059bcf6', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120476, hash: '09dc68e10203d056fbe26e8bb17d253aaa7b98125b085b40b0be30e647e1de3b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118882, hash: '39995fe1943ca7a7f62b84602f0677bd68782461f7e7c6f315a63679e05ee1fd', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118084, hash: '49b313dd07de5d413762e4c12f8a4be9270291861b3e4e5952ce4944c1cec22c', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123802, hash: 'bf13fc9ba368fff9d618f3db72d1c65a749cc08a45305e509a5de30137b36a27', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
