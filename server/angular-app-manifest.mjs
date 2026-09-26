
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
      "chunk-DdujHz1v.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CGgKy9yv.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGgKy9yv.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Da9N1_jz.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0rNI6PJK.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7CPK9FlY.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B97ynxND.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CiBvFCwS.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DrYO0WtB.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VlBAw8Ax.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8F0VTa1.js",
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
      "chunk-DZMKb8FP.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZMKb8FP.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZMKb8FP.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZMKb8FP.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZMKb8FP.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dja2UY6Q.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dja2UY6Q.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dja2UY6Q.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dja2UY6Q.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dja2UY6Q.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGimi6Pu.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dja2UY6Q.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGimi6Pu.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZSr8RRyd.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZSr8RRyd.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZSr8RRyd.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZSr8RRyd.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZSr8RRyd.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZSr8RRyd.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZSr8RRyd.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZSr8RRyd.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZSr8RRyd.js",
      "chunk-Bv3NdSvI.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyhyQ7ns.js",
      "chunk-B8-iGRfS.js",
      "chunk-DOnKuRTL.js",
      "chunk-kd6zyUKJ.js",
      "chunk-D0pyA8lc.js"
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
    'index.csr.html': {size: 16193, hash: 'cdd01601d02038c071a3bc0d401e9db4963272d7235bcaac12bc3117e49d86c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '53a26d40ab397f639ff897440d58198329ff7fee521da727f4f9c6ece32cdeb7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '80595698385186dcacaf6ed090150035fbfdf162b3753b97a2fd57ebb56f7a63', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '4fcb07f08327399419876c6d9cc1979eac74d9e0f1181e820ce0d6e291167cf3', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: 'a127f4559ab7abd603eb8cfaa00dc63f35c4302a0a51fa24df7e41be5d3ca2e2', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '025b0ea0fd83a8d31338bd4123062b9e5e2cfde1ffeb55310bee74102d13c3f3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: '0642c5b8d1c72e50d34d8db733b058aa44c7ce8aecde813e3914360293758f0a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '07b702d2448679eb23bd39090ad6f07efe82e200639e4eff479a7ddeea5a0f78', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: 'b53ee570a8925ac8722c9715521d924a24d55ae49048e851d2075ed9a3fc35a0', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '78458443cdc9584d1b639aec8b46c7e1b012773d129db10ee6c3c69ff6d2f16a', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '1485404ba80af4ac645faaf1b4a459fc328e16cc5117c52ad21ef52589d17a12', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '7505713f7c6e99532861d18118a10355a0ec0faa0d7aeb0df6137257313f7e8d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74626, hash: 'dc5df872223d431ef7d951828f3e3ea565fea88754bfa6656fe734ae07e65f0f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78014, hash: '956acde1c1e9054063ace14554191ad016e16b13f97695508d0b80dfc43f3ddc', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: '18480fab8d793acda6ef7ae69337d2989b772dc273bd334dcc1db71f5cb031a2', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '44cc4555469ed886209b1b18d7ff3ebf4543579ac52d10c6b7d1f016c5d88528', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: 'cb3c46ff3f9e03f30cdc58de6cae2d05f831ba59aeb91f5571ebb03c2739ce86', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '508c18c9bcf8cd477193c6296c741285c7f4fe7a17cfa8179c0bf7db72ddcde1', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116864, hash: 'd14fae4b25fa9939746a7725ac6fa82552d7509df2da6d405c3a5399baf540df', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113473, hash: 'e0ae2d0a2997466ef2e882c3475ff0bc654ec956043bc6625364253b45e5d609', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120193, hash: '4595fd3ea789dbfcb10e0db8f33cca610961db9849a369775a1545e37886e0e2', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120432, hash: 'bdb44a15c4ea8d32725aad00a35b0e7f5cfabd6fdbf421426a7bc496aceb76ed', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100111, hash: 'edb74221aa964ef2039c08e2fccfc05fd31baec07540fa37a58390702b4972f3', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88165, hash: 'f87f113845f10ec87fadd7ee91cff25f705f96c9cbe62f5ab4cfe3a75fe24078', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87389, hash: '2e5ed444414036ef2e664b70e2997d1f304e3b95067d4bdda0c73e535aef92b9', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106246, hash: '866f90e33702b9402bc401d89bafd9573a60b172b04ccecbfcf81a1a9ec4d87c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89256, hash: '1fdb68d11d186df4cc4244dc7ec5c1fe26ecb335dae623593192b8c08366c707', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87321, hash: 'd696720e7db1e97910025433b1329ca3879469aa413ca1789fdaac2f348d862e', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84213, hash: '168e89341c29a567f3b3356e01f00095ee1083ee025d6a30b3a4d2a494808ac4', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83990, hash: '8d26090521f0f6384733dc4cd05922c0d3323883871601aec438232361cba5f4', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120074, hash: '9e7ff2263ef98388752cc1152b1ebd4dd397b4412f9d910f4c7dfa7f397cce7f', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117382, hash: '282ead4b49f74f7a78cd3976843b807e14f69b3d13110507975332df9071ed8a', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114173, hash: '6bc166327c836d192aac341689e69a5f9a7d2964e1f699e1203af88755ded6e8', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88109, hash: '8af1304fed81271f465e237fb36cd5ddffd223e6c235824866bd59ab8ba4b990', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 81823, hash: '115fdd106b203d52c423d7072eb41fdf24106ffecfdb78bd89cdefb8b6e6a427', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85403, hash: '3d8ee58bb7bffa3e06ca5ec36dea5c5236023e74d08edd2c04a36595a39e3c38', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83419, hash: 'f65946b192076ff170d667c29d2bdfd6da4ce97cef6cf9b825dab5685f2726cc', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97094, hash: '7b5a8384a878deb55a1264636386062886048c197a02f96d4ac1b4e42707fdcc', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67118, hash: '37d9ce75ef821fce08c19db90208ac91af83299540ed55c4f2ea20ad06ceaa22', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88897, hash: '790acf5b172e13ce69a5848dc5647b06bd9a3601a0ce0fa2a9ef46ae92ad6e88', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66678, hash: '6692a5a6cd273ba3ba1caac4d96adbe629dc2d392ed8fdbd0abf3cc3d36676fe', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109240, hash: '0820509c314e92b1f81e4cabc05454e3c813b26d620c4c0a81cc04d351831c19', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96967, hash: '75a81881f6c8252bbb2535c63f2284f191b406ab9d2f17dd1d5c5241c81546d0', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99734, hash: '94087cbc6a0e945ef9383780e0d15b8098c88f378b493724630a43423aacbb00', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104542, hash: '3af18543fb1b536513b60c8db8ce76b08ee15de866a6cdb24d300ad371c26215', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64646, hash: '45f503adc0ff5cc98966aa68422136f2af6100452d61cc9b3960bac3ccda2f1d', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
