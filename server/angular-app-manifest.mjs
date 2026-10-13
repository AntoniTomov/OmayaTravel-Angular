
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
      "chunk-BI58I2-j.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-D_04u6xc.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_04u6xc.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-tAr6v2.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUiay6uk.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B14aMQzv.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2a55JTb.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq86aVoc.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CB28qdLM.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwVt-hmw.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RmqR1bxO.js",
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
      "chunk-DhxLc4i3.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DhxLc4i3.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DhxLc4i3.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DhxLc4i3.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DhxLc4i3.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DhxLc4i3.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CduK8rYU.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CduK8rYU.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CduK8rYU.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CduK8rYU.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CduK8rYU.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-zVXct7.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CduK8rYU.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-zVXct7.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BkhGgkDL.js",
      "chunk-GSW6i-Ld.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxo6FM1m.js",
      "chunk-BJ6aSVcQ.js",
      "chunk-C3gMNEIZ.js",
      "chunk-8XDwZPf8.js",
      "chunk-DlW9QWo0.js"
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
      "chunk-Dz61_mDz.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '6d3ffe1bd7f785e5afaa1ae37e3647149e6fa8ed0633a2ea8c53d4f5acc7b8e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'e122e5d64351a7bb0811ee8f39cd488a259b99b2d8715369d037d9d593e0f9cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64398, hash: 'bda730cb1598887f3498f83752ed79162182a6a9e5af86c7ee5f0c1867943905', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77507, hash: 'f25b02c9dfc760299a0ed61a06ab51c3c111f1e2baba5ce7b7994c0bb7af9cc2', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76708, hash: '82166ddc7c1ec55ab8227bb2e8e832d065d1cee305e352663446ebaa97965de0', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78752, hash: '0fab4a9277c3059cfd1d2ba67fe18f91f6d4ce4bb92b61ebfe5069358460cd5a', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78517, hash: 'af79d1c1ba79cc4d89cefd7141cd67deef828f5ea86f79ddc86f5767ffd887a9', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74302, hash: '47c73d010224652dbf8488097486f3d95675944a758ec416c2e2f700a0a19c20', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73533, hash: '3e75b99e75c6f27bbd02da184ccd92f252d2c0990ea4d091227fb43dcc933dba', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71643, hash: 'b99373eb90747f620ba14dafb21801565227661f6f48fd7427eb2c24d8835c42', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108277, hash: '1fd9108c0c378b44899b86ac1c23b86b4e5f5b6def91380080eb3ef5eebad830', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77145, hash: '69e19778564bae05970e74299371679bec0039ca982ff75140609a1ff083fa19', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87864, hash: 'bd7ab93a30f9e9bab7d1886ab3f071bb56e6e27831e43dc32f4d019c1346a9b1', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64428, hash: '5eda30b92b4f26b8e5b6c57612b0f815577c9299b7ee2a54a090d716f624bb64', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109822, hash: 'cbbd4b4e1bad01fb4cb25e8e391c00e2273230bf91757a6f54a2ad6e0ee09071', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117446, hash: 'd893ac6e8d3546837527d2aa37558354ef8caeceab3a003d8cc56f1226e7848c', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115199, hash: '81d37ab6781d071addc705acd0c12141e87e45ca84877560e5664a22e68654b5', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 114055, hash: 'badb7c5b6cf9ee53041947454b2c10ddb43a8cd9e12b6be95bfd2450687da18c', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 97072, hash: '6a987d582220fde265ec714d0cf8f7cf604802991844c49d3824639bca9fbf60', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105124, hash: 'ded5f6befb74fd447b251a03f8e0df4caeed9156b56734dfafadaee5f127396d', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65228, hash: '2c41f7f7ce8f74df9126dd8b6ef581ba100d46af0e0fc3ace7f582b942fe4635', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64412, hash: '2405b242d0dcab39886726db176d2d0a07abfd199215433e513e5101eeadc831', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114755, hash: 'bcfc3105ef4934065fe56497344ae9af1a7b706b3672de26b8da7b2b83b3a8e8', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88678, hash: 'e549ea9c668bdedb803f90c1ab9e0fd3ac1ae17e4072a3e89cb82e5869f2d02c', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100706, hash: '22fc9761fafea49a035daeab7ca7f371acb56cec54c28f80007ec776af6806d5', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88758, hash: '830ceb28e805af5ad08908dabfe37f14443b8affd1716c12c64dab9102cbc65e', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82497, hash: '774499226d870cdea23d24cbab4b61eeeed85ea211c94f35f1fd8833ed4d983a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78505, hash: 'b06a59ad79eff78bb18f09bb7f78907475e47c277408d43f34647e43ea1d27c8', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86077, hash: 'c7f52ff1d6b549b0ff340cbe41fae1e25a6a0761f73e5032817e689fd41ea99e', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84099, hash: 'e05c461f9850668aed7705aedfeb7f1039b35988bdcc8489fc77aa01b9972676', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87980, hash: '5566ffcc0aa1c33659a2fcff9a6848aa5ff283bfcb502f6d84ef4fc922a357bd', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106843, hash: '5bfbf7d749916ddd4e7d298b1ff7c3e9996d44bf8e2d716b14d599ae07d9ceee', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97566, hash: 'ff336d1e01cdcaddb1e16ce3fa1623c4983a13b27982fc9c86645c9c0705cf73', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100306, hash: 'a0094e47a2e1a6808c626c2d640b22a6388123768ba605aa13d118f4228819d8', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84572, hash: 'ce08f5bd21454b0da8b8a51483102c12fcfcbb205ee2f76c9778bada96d21e01', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67621, hash: '2ffbe3e48c7e48501ab595af8cf5940c33503b162f6e784054fbf095147181e8', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89464, hash: '7b9c88054fb91f4a6813966653b4335c92f8c7793d3bbce43df46fbbfa7d34ee', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67243, hash: 'acf7f1e24b7af0c77f9a7e1b6cccd5540298902a671199bf31914c958a30359a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98760, hash: 'baf43798719c5a87dcf45c72a0ba5380759d0e465a1409f98d765b34fc7de299', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91330, hash: 'f9080c92d9c6b42666e81c1b5bc7c752158b12b173a4fda524c1808680b394ed', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87903, hash: 'c7678bde6a30978f19c990026fcfefc94178c9d3373202c74b81481dbb7bf981', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84795, hash: '88793d802bb33e42b4a9b3bf30b46f8578eec4a1c876bfc79d4119a0611cacfd', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74516, hash: '628d34665629e8c7adbebca498539030550bd1d52cc59a445bbee5f2f312004e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73369, hash: '394e9b3fa31a788ae55aeb043cfeb536b00aa2ca278afbfc93cda56d30fa9ef0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79453, hash: 'e98266b1c8ca4b53a2f3f580957fa4f269013af282691b571d016fac95353215', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120848, hash: 'bdda52527fc989a90ebfc17e99d8cd54f8c1741f7829e8b4bf5fe47e8487e563', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121087, hash: '1081bed67b6042a8267a59c7657b4febc59a4446ad9396ddafbf910abef9fb2e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120729, hash: '30f2748302e295eda0236814f81bd53c5e280e217c5ec14c5a344ae306cb8172', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 118043, hash: 'e4b795541a4bd52d0670e0be1e6407062664b77db0f4ab88480a7dba5ec3b03c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
