
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
      "chunk-CFR9UPXm.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-C2R5kevi.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2R5kevi.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-h0yiIbI0.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDiRYHTd.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DBaKtfWs.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COIIcl_L.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-j1lY3dSg.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S887NGi6.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWsR_VRe.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dld4fpWb.js",
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
      "chunk-Bw2M0FY1.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bw2M0FY1.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bw2M0FY1.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bw2M0FY1.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bw2M0FY1.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bw2M0FY1.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bw2M0FY1.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cl9tvZOq.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cl9tvZOq.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cl9tvZOq.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cl9tvZOq.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cl9tvZOq.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cx2ruYHQ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cl9tvZOq.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cx2ruYHQ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BA91SbRg.js",
      "chunk-CVzx5gYj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--f5rk9gM.js",
      "chunk-DyzSqWdQ.js",
      "chunk-yOphdRJD.js",
      "chunk-DvO8cn7D.js",
      "chunk-MEC6e55K.js"
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
    'index.csr.html': {size: 16193, hash: '50f06ea5c2410f8482c65edb93a79abc53fcf9608a2ec0dff3afc53561e8e243', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '8a31d618c7825413b276ebfe8e96bbc244534c2a7a4dea3e165c019fcc2352f8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77298, hash: '9c1cd25062aac22410c86083adce13bb073d9cddd893ccd3efd8596a404a43ad', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76721, hash: 'b3fe7e185af1574ea5e46617a75f62defe4c957806cf6d3624e1e69bc7ab4861', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74639, hash: '2c9d7751368519f237fae0244da8e508ae70d3b92fa08ebedbc5f479ca888a7a', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67394, hash: '0dad44962a4538c80ff6f6016f394d46155726df1bd88a17bd6bada722aa244d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80503, hash: '6c0c5c27f6cf8b65fea107c8af664414c0e31382dfeed4b7ec3dd16004666e2e', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111502, hash: '78235cffb39c106b49031e33b90dfb7cf15596561902a4f6436c6af7cbf77caa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: '0458ffaa9f3837673fc25fefcfa9ff42128e05e1ae9e04cdcbf1592d997ea8b3', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 92821, hash: '02d32e5da5f7f8131015c5585958268163b06f8127ac7d080513c8c1ab450ab1', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: '3942d613b24bacab5804deb2e14ca0dbb6814224534c89063529e3fe39e999a0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: 'eb2cabc8d58b0e4f3e72c366ba2aa99acc944b2f6ba38ccfb6ba8ec524983627', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81659, hash: 'c4856c17fcf72de7124ac3a2f713cd76f052a3ec140d5da7d36681e96e3fdc3c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: '64fdba32b2ad1786b403427d78039ce9ffc1354923abfc3b4d4a16cf9c819808', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: '432e1b63c728a24e83ac32349480b57f25f321ff611364dc8d903234dd43a4af', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: 'eb3c0941f5787f1c38ca919a778052538cb2e4042dc954bfb43833a0ccfe559f', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: 'c6d9b1fd24b4cb045247dc8d37e53c25729ce7bc36a27432769705e1be53e61a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: 'b8e5a32ca97c55b8c1b3743b42658833d3c453e3005c850084f05ce2108aeaa3', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: '1729e844da3bd5e49265e6a23a5b49fe0566939b7c109e65557093919b1b331a', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124583, hash: '51a2a1941a767401cc0eadd6d97942b3c95634465ddd44caa110835ee76bf408', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124225, hash: '6bce285b93585bffa2beef5925f5f800d269fe84e4755cc248bba89fe4e97a46', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: 'e035a0c49394bd13ad4a09806eeacf3728b4a76987deaeb36f278e68a03e1bc5', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: 'a7ac0e93c035397ea7a9d395253ed0185def68ee76b67e0e4cd44f5bebed1304', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: '253a07ef14e69bc96eca643c677b6b2e283e82fb96620e6b999386548065fda1', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: '162785c8d67459d9862886dbcdc9f346cb948254f935768da18ed19c48a26a77', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103184, hash: '44da3c2a623d9f92f10ea899e3cebb2ebc71b56f3f71c6eb93e3a9c908badaf5', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105508, hash: '937642e293e36812e4877a4d439f28d8e08b40f84f50c0967dc22124a4c022ad', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114955, hash: '5951df7150f0319bef24b8926635cdb8e36833ea6f9cef341d3d93c57811fc60', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102578, hash: 'c8e1ed6204001248c8574c3ddc9b2d003013e1dc58e04499a9ace668e5b6caea', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: 'c66c50e372e17d024c10741b967ef8c3c102050731faad6ba99835cf68fd8433', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: '6c5a8f72fea73977f3654073e85999842b3155bf13e7f60ca4a5eef570357daa', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: 'cc14eed14ce94af4e988afe364ffb60b6bcb051b93ef6072503d3899fa774c0d', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94065, hash: '549694acb9bde425dfe9aea736ab72fe4389cfdbf818aa3db127a00b358a7417', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70196, hash: 'd1469ab6bcdc99b8f2ca974ee02213a4960aec48d5e91febaf9d2186229c7466', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118018, hash: 'dd9fd1d6c46f46723a0601357aeea52734a8b6c91b31f9595cb668d6da74ece1', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93534, hash: 'f3bcdc87a13eadb2088beaebcc0edbd3199dda79d6fb3dbb81ffa1dd11ea7377', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106644, hash: '8bd7b9ba32b77c4c25357059c5ef4618922d87f70a02fb25a1688ff25d8032b2', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94201, hash: '063699529bd34302a63ed975abf98813a84378e8ce9faa95c4b5b5dfbc42e374', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93362, hash: 'af17859648b4ae22aa3d72770105514c8a89f16828ab10092564d080b4d98d40', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87206, hash: 'cfdd48f036b962adf150359672fd04c56c055be5400c17da3beb3db5a46bb2d0', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81901, hash: '64b95076c3afb395221d106b0942aac33751e82839aa0db89d558f33bc24aa6f', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104500, hash: '1c78ad42b517c1a448882cf868cec4ff2fbc5686d2a5b167ca45eeda813ae8c9', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94531, hash: 'f62d7182633a2fc8f2be82926b97d929df8a234c3cc6f14040097566dffcd29e', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94452, hash: '8042d4a32454a6d2365d758fe225095df012678cf97f9f074a27913620a84fc3', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118544, hash: '65b63a09ed739d64528041c9662b275123fcef39994a606e3b4a0c4a8bff2247', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121015, hash: '6273ae9ef15a7ff399131e3ee223e116c91d6afa18701feee1eee0e74a270214', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119427, hash: 'dfd56ce73830509cfe9cfb91e268cadea5813e452cae0ffd5c7e7ae3a583bf62', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118621, hash: 'd25c3f34bd081fb3179092d51bd11c606a8934eb386a783bc9796cffc8fad71b', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124344, hash: 'b4d12311a2706721ec862774666e5ad360c09ae8b0d99ca7c006f88b1370288d', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106491, hash: '6e06852f0351c71c273eeac544cefca4d2f231620fd11257d637dfae6ce80082', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111084, hash: '5eb842d7b1a8dab15e45ffae220ac52c8f6ece745b5ac84d762ac55eead2eee7', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68224, hash: 'd3412f357afa6b542d9b6f76ddb2cf0493549afc1ddf4ea5f0199fcf54c31896', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: 'a96d62ede55a7e91435773b4ae2b1fb8a77ef58c0788619e8a00c0b1b5cebd21', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: '2ff560874904a2916bf00f2bc7baace7ec27ed133763ca25748607fca4104c2e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
