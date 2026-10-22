
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
    'index.html': {size: 111248, hash: '6f0178a5e4bb2148b0ea0e802fdbf39eac57eeb5d87eb448c4c9fef6f3baa700', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '539e44d787b327bc3bebfeb58a67c8193e1d3f314c0b86d2c4c2681757ee3422', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91493, hash: 'f7369c1e32385be811e6796cd6d2d22fdcdab89373fe0db3cecd99c1d44129ba', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: 'c5844ee4fe502ba2b430175fa1542457d4037a6e5c7aa0379a7911a77b792839', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: 'b8ca717dca558f60c00501ac394cf9e81ebb13c50c9ad930e022a12c171fc701', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '068a5445c623c2ca3e3d53ba04e9ba8d6c90cb67d72c956d69f138b0addc4d0d', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76508, hash: '8a29239f4c179107a67cff844cd9259fa337d5b04f6604d232c887fc95485141', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '8c17bc5daf031895b606998f1828e13f5f10e330727094f7e6da7aa2435eb2d5', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: '0d03cbccd8ceda7bb1490456a6c24899bc7dc77c120899b1de9cf9058b970937', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '5c68b1c8bddf988f2183178fed2dbc6c1d4bc680fae929d1699ce8f017c19804', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '678282e2239323788048eba2c387a3f547b7fe1f622d365ab9b265591a001319', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81829, hash: '52f9dd13f5721469f45afe917436d4e44751876442fadcfda3a6a2960cdec8f3', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: '5dfbd3726340c0a8ffb47cd2087b129c7b7c4c2e28aeb4333a131c14c6bcb40b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'cacac0ef6f928cc35a02eaab42dc37cdaef4a6b600f7d369f84acc983b5b382c', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'c94624e681f47f9ab466e3536dc1b47073b61a4ca7442877422538994121060e', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124026, hash: '33c93775da9f1415b7a57c13324743f46b65aa9ba255e027e4c2fc24231360f1', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123668, hash: '44c8b65c055a2e5da380290b3bd544afaf593d4b6b04140a882ec0fce281c5c2', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120976, hash: '450a6845f642834226e7c08a289bd29548ece133dac421637ce1b87f8dbcabaa', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122529, hash: 'cd438542ec0e9eb9dea96c1cd07e4ba779d74e4bfaad3ab6cacd46c86eeaf3f5', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117767, hash: 'd8ac5ab17bccbee89c592d4e81e0d014f2f57e8e108904e9c6c241187d51caa0', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: 'd9b462b13d9181142c2807215054faf139b2a2369dc263d0cd3340e851eb018f', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110859, hash: '39f28f03cd6fd3f6ba8f42b391a657313d47e27322a4b0ad1a5cb4f3bd0728e6', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101600, hash: 'b6c116a8814553eedf6f4ab654e37e8f4fc4e3132aaf946881a23787b6010ca1', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104194, hash: '836e54fdcdaeba88fad6c53ef9a88b696bb0ae4e1afd4854008103e0e087b375', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101166, hash: '8bcbcc00ccc64da2ab072a41c985e52b647bf329c685d1ed5360ced8572dd1c6', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 104839, hash: '2d590d3ab4da1a1660678236b48da3087213ecc26226b0b41d6065c445a4606c', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87777, hash: '5af411ecb5b255a00abf261b186cbbed4956d6fb75f2a3c3c4a57cefbe5f2f78', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87554, hash: '14a18726958cc45b58f9cf57f8ff296611968707c504e1608eed52097cbdc48b', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70552, hash: '5603d85127890760df3f6f6a0bf037bb36b1d686cebe5f91ab0ee34e830ea5b2', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 93865, hash: '9acd161b19abef61debc162570e85f1cce76ab35f7accf8cbe7dceca09dba407', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70235, hash: '679f1bdfd0344f8da14ee4f81526b677279e9da29f6ea3bd43288870ec4d3cb7', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117461, hash: 'b39d7847d118403d3df5330c8deffc785e7175c73f660f740d5cd5c32896138a', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92377, hash: '127e0f9f62351897b0fe4184ca879f7f215480a62c694eaaa886060e62021577', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104844, hash: 'b317996602ddd886b8d86c61fb2288bd3156eaa50c87e3fbe2193a24f024b58b', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92740, hash: 'f2c8815abce3847157e144f3259a08e6ef76caf59140b8bc9b58c4b52b71d1af', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91943, hash: 'e3c96a2f19d9adbc577ecac422db4e8b030d8990719f03c1795eacd69db073ed', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '2df90ca6bbd5a46a4a06f193cc7b8303f3d2bf35562295a3a2615c6e01bb25e2', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '88c75b5981e95bc57346153860606cf267f84a538c515aa2d1a3cf027966762b', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104268, hash: 'd11b1a140132b18a0517fe873290f2a0c3e53c7e846764b5b7751c7fd0bc80a6', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94305, hash: '7416dd9e5ed814addb8f2b62cffee6a309bded37ed6fa4b8ad28159c43612349', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94226, hash: '723c6f7aa4f9f785090d2edd2fa639aa4f877b7f7c73a29875323bf9838cb0a7', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109453, hash: '686b5ee1f093feeae6f7972b0d7b133e194563865d770e7b46622d3541465097', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: '528f20127605712f392569329283265801a2ae9fb5b954a084c4327b3f05f7b7', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67409, hash: '90c5e3ada9219258486481e90c094e4e947c0097fdbcb9f2e14899bbea0b5afe', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77491, hash: '61698eb1d0e78b3857a125262b9883402df6dc81271e6b8d9ef637de0b5258d6', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76344, hash: '100a854093f89739fed2aa208dfb3f61949d94ed8e0d58be3ba0bbbd0aed75a0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113828, hash: '262c43783a3c3c133787c37e3de06b3de24dcb95b0a4a44839f40d1deba818e4', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120464, hash: '9a35b352e5a5839acf521941b6dacf8c394886e3add027822993c87ef09afe16', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118870, hash: '327dfe815e58e0b241fc05210e674f2f91e1c21afce175e8e1857ae517302df5', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118067, hash: 'a2d96632389914940e13b7d9bff939248dac9e56e585a9046066f45c34fbba3c', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123790, hash: '4153862c671b382f1cae2f7839cfa6282affe6256e1087f0c1a3eb76fff1444f', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
