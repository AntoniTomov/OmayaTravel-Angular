
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
      "chunk-BxOore1l.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-PY2lGhzZ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PY2lGhzZ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8H7qPaI.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlSCSLLG.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C_gg6BaB.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJ6d_E2W.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwoZ6ccG.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BcPBxxjo.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DqK1kQ1E.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnIb-ju5.js",
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
      "chunk-CdzmjSWt.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdzmjSWt.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdzmjSWt.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdzmjSWt.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdzmjSWt.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdzmjSWt.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdzmjSWt.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-xJwslZnL.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-xJwslZnL.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-xJwslZnL.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-xJwslZnL.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-xJwslZnL.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-dz8bV7p0.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-xJwslZnL.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-dz8bV7p0.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BARYY8Gh.js",
      "chunk-Bet96H-y.js",
      "chunk-B-JJyMGi.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXRkWEmr.js",
      "chunk-Bet96H-y.js",
      "chunk-BGlpxNBN.js",
      "chunk-Cg3r-hHW.js",
      "chunk-sWxjg9kX.js"
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
    'index.csr.html': {size: 16193, hash: 'd2fe9f549cc24f226cba5f6a4e05c16f7013b064957ef37c37697f7f44186634', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '20472ad77dee2c83ebb5b37a0b47eb45a66e0740042d8f37e80975251881db2a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '41eb49342fecdffafbf787c3c819c9127e3f955dde574ae38d2e19f51220eff4', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: 'f42bdd83b80739eba71a08eef6ffaf9b750cf9c3bbd088f6645d872610e83afd', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: 'be948340afad2d5a7b5f7a62d878b72e267556b03756ffcff62ed9d744e09541', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: '49c9f82bcc6f29dab26550e1694ffacc48b9d6fea6e37e4697c79651a77efd7d', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'df579b0f8e379c22eeb7819a332e0590c389498fb349da0fd97ae1e78fc771d3', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: 'c4eabe2e3ab0dc781e310b5daf1fbd79b0be327746c22ffb56327809cfb1b1f2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '03c21f77add4af3d10cfb969a959aa61c8c0b8a4a20916c9cc4a8099a3ddc397', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '8df327061268fc1c164cc0d6bdf7814c375f0c180e05cbd9749c38bd4c9f00e5', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '50665b3983a1a058c2a09eb1cb2b79fec923d2d2d347cea26c79dc7799983e35', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '783119bcf40b73f2782df5a83223cf7f9733bcabff71f61b424b1e02a7c0e1b5', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '32c31412b9d66f3650abb8f8308b161c962f444a06c2f7dc9b51130b2063ddb9', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: '303d345c7ef8220236220760e68a70550d9b77f16c1305dddcb8f6c18ded2e8b', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '9cd528f189734e4a4cdab5ec232e7f6ee3b635dc7b9dd89628cff5e7a06e7f10', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: '9a2d8e50c206987d8849cd430d8eebc4be0d7bbfdc286bcb912d89bedfeea458', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '417d27b4e420249c30bedbd8f7f69de5c889cef85cb94c38ff434ce050f727d3', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '0fbb8d096e395a94582257791fe3d1216f0c79c6ee7c20f8b6e45dec0d0c2994', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: 'fa3bb1b6f8fc8574535e2b9067ab8c85c33644aee16ab1fc20734c2d54ee4042', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: 'd3157ca202bb89e7c3f67af2734a2f329790268fbb4d4c9d4bff6b4ef53789f8', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: '0f72bb34b7a9e8f5b5d45d8aca11dce278ad3969db34da00eda9ac6239261660', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: '6d49b638859f834622b7080bffdd971f74eed1a4cca8c63853485d82f344800a', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: '1214ebd200e38346f6a965bc1c181dea1597c96f6251cd23f71d75142917bb5f', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: 'e5b07c52891dee0f1658a41a38a8a5205e5d26eea789f314e34031545515eddb', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: 'bd1c15f8bc7b4c1a9d8715c5957d16a3a86edec9f24d4bfd5904666e1c5871b2', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: '6ab7206fe2a64693ca555acc732712ba82ba32097935aee6cf5a8e8069a2eec3', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: 'a25b2c6ee677c8c20fd40327971e93b50f1d6944fa2b61a0eaa278aede7a1ce8', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: '3b0513db592c6bf5f2f48c6fcc75077738ebb5d8fc80361bb40e26eac560472a', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: 'e86e898e038f741a8f4c6def3d9ba1d20ef687d72a8945a6a191e12e5bb0439c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '162ff8ad1a1c3457faa1d7a78a6e725daab7cd5722617a18284f8213f9e4fa00', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'a99c25c882c3d40a0a01a19884e8fe9405379539a8adc5a2f9afd24b24b068d4', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: '1ad47c7b5ff6f2c9578a251f8f1d0bf01a3d6ed366d3383b37132216a3478cc3', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'd083107a328290fdb47ceb7d57f70a5065e433097d0d70ba630ce1d7769b98ad', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117999, hash: '912f76afb121804029af893f6623b9cd6eea690b55bdaa21ae54bc2824562df8', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92588, hash: 'bd9fabb989e65e66738ba4fe90f63910beadd768c73062ecf7fd406cc239c51f', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105053, hash: '7642eace2cf5a7eedf31a9422fa7ec5b79f494d2cc114f0df7a58f2f18063b53', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92949, hash: '99684cab1c6e5a9bea2bf654dda06885b45bd7fd1051ae5c4cd1459087cb7666', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92154, hash: 'a66694ff840102e3e65d17934a484f0a9d62a8f30e434d8d7925537a896939e7', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '436d03f9595ee5ae0a6d45bec1760496ebc33f95b5230eefbfa6a7f4b425c06c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '1c6c0eba91485bdd9c6637a7749e977dcc930be4dbfb7b3ff297eca19c641349', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104503, hash: '77a84ef9b4c65fe7ecfbe072d93de9edfc11c512ad1decf330982ff2023185a5', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94535, hash: '8396ad11b5099e9524ebb0f3af8ec80a75e3162f13acae4614de41459cf361ae', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94456, hash: 'c9f36b81057dfd6659ebc91ff140bab5b612a006254af7e8bb6c85d602ce82fa', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109496, hash: '92f839482528f676cd2c7935bbb47d9a4d52e6e35537be95a2bdacbecb7a840f', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: 'b91c63bb0eb681e9da70f521b112c5f0ab3775c53529f2a67d54c59621692096', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67387, hash: '934fa970ce1e4119a4a525c3f15a895613da609b9c35ec0ed3c57d93aad59321', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '8e638cdb7aeadd7ec9781c0e1273d4a4173242de2aac3b58949210736e1d3bfd', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '5d077e67c88af702ca4b6d9cfedd610c3c1a6d79aec59469217c91d41387caa3', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '4df8b0c6365d87dfed1ff37a5189c03c0a3f3125be24f44c494a3d9d547e0810', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: '92b55eff4cdafeeee79742ede55a28cbc3535eba141ca0c1af462e1353f45992', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: '0d08333c9e6f44f18c5ceeffd6b6f71ab7a20600e63b37b48adb51e470945bdf', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: '4cf8e5b1f629aabcb92508e86b824f06118a6778c413d151400d4df472f7fb68', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: 'd88487f12b43165874a96e8c66d3e88987ec0a160cbd8be1c589808a58dcd9bc', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
