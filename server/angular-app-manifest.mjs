
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
    'our-story/index.html': {size: 77277, hash: '32c31412b9d66f3650abb8f8308b161c962f444a06c2f7dc9b51130b2063ddb9', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: '303d345c7ef8220236220760e68a70550d9b77f16c1305dddcb8f6c18ded2e8b', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '9cd528f189734e4a4cdab5ec232e7f6ee3b635dc7b9dd89628cff5e7a06e7f10', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: '9a2d8e50c206987d8849cd430d8eebc4be0d7bbfdc286bcb912d89bedfeea458', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '417d27b4e420249c30bedbd8f7f69de5c889cef85cb94c38ff434ce050f727d3', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
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
    'termsconditions/index.html': {size: 82336, hash: 'ac71e7c0e8e456e5ea5de6e3a7ce8ed344c5d8cefd60888ebe7517fefa07fdce', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: 'c75cd4c46758e4ee27f4a4c08acd398de8c5e463f59db56769ad18457f20b823', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: '39fe3bd6eb509e8b82bc9eee45fcce53e173be947adfb326a1027091363751d2', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: '5be734711280c7f86b8ab46f2d549fbaabba87ed581773379ffb8fd6693a9b4f', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: '0216c3dc5392795bc34316e098a5023e39de8e58c64ba1daca8642e213ab3f21', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: '9e8d60206710b934def4e32e8ce36f099303a34f8478014b397803330d45b2e7', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '74f98fb25348273f1bb5d737fb7820d423db06410c9bbc93f401aa17c0b2b9c5', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '5d143431414840dcef6faa85c2d7b1f22a2f653a6ea86c2588cdeb2fbc3513bb', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'fab2f15a896ed9ffe08ada91aba42f250e69bfc116d3cd79de38206130a7e63e', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: 'be2d7046a58188f4fb1794e3656e2a714b492d6c960607825f7bda8ce0393660', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'd0d8c0f2beb65ae929dcc6f56abad2211ecb49b433a39d04baa8d344113fd281', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: '13b42a988edf1e6ff1768d070c29a67461f141f9cf941c757fe542790ccdf179', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: 'adfa2f5ee5d7ce9485eaca84626605525292ec732e82428f1fad0ef25e892464', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: 'a6b260c15360bf7707d9e571b7c00be745a8525c12f7e3f7cb058baaf6b5f029', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: 'bb7beba02a250fbf66971659f3be0e5717410de5478e64ef5a9e823b322ca7a3', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: 'f319f949035f991a9b6ae56ea174c01576ce4273aaa72b00263597b6bd2896d7', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118001, hash: 'f2a9ab4210ad4d29fe30fedf4d7bb876e4d4fd3851c754c021d37d562de586e9', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92588, hash: '8fb5acd731cf338e141b5aa472000713c4d57e420256da12c412479de40c49fd', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105051, hash: '6f6975bddafa25e6d06720c93b5bef0d78a621cad12a0c39dd396caf177be2a5', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92949, hash: 'f28f40104ad36a7d4a0271b5a79e33a8457b1706c05dfe2f0f560897975c4b22', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92154, hash: 'f9b6d7a9b922f00b93bdc32bb726531d2db784b0107539083f311bf3db1cb071', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: 'cbde5384896c73b163e088257ad4744490b0f5d9405b3d061164caddc5289b92', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: 'a1fce01669836af87c70021146ed8ff19e7cb152fe0e5c76542867bf1e6b3c9a', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104486, hash: '68e906646b6f253a02030e68361191ec5ee3e2c4ffc3d6871599fe9e7b98a8a1', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94525, hash: 'b1fc1e64477005a839b30fce4487069827ced1300d0ec60f1a6b35e200de52e7', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94446, hash: '415e5406b20c16aa7fb9e5aeb30309c39d56f06e3d14d92288e755dd31f38869', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109523, hash: '3fa80d9fa75396d0dd24aee491df5706bc12fe5ed9d753080cef30b98dac8e87', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: 'e2d90abfb22695d62e8ba21fc2bd12ce4c97483d6ddb854239bb409ced661f95', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67409, hash: '56f82ffab0a89747b7a01614c16c5109024f89e0139bc44e9f77dc8dcdc16eb4', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77491, hash: 'e49d0857d831f2081ccba51ed396fe9a412d715dc5ca7be106ea52b7d4f5d880', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76344, hash: '29ced0a371a357db4563cb98b0b14cbf21c95a5c2795d94f375ac3a023830f91', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118318, hash: '900d9e7f5b7cc3394c641aaca3c42bd173c810d05a884bbc305f55a388263353', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121004, hash: 'dc89b3eced10a17e162927df5480155e6b66dbf26ea5c4826279ef1c2feeec74', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119410, hash: '483a6352c8499c423e78d28c5a2fe744bc57a1322ce2919a7175870854b1c8ba', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118607, hash: '0de7a38e3f6f10793af243e2908d14075e1ced799546adbedd96f5192dbc2e35', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124330, hash: '655639db26b0944024e038a42ac84830ef67d817e52958662d7f35f03f5cc4d4', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
