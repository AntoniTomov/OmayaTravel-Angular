
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
      "chunk-UEXa338s.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-ClmrRx24.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClmrRx24.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C14DE3cX.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R1AblIak.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJwqk2E5.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DjZu1XX1.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D38hKJvE.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dfu0tYxW.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CRoNTdrO.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1r-yqZXm.js",
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
      "chunk-ckWM5APw.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ckWM5APw.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ckWM5APw.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ckWM5APw.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ckWM5APw.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwGQVjR6.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwGQVjR6.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwGQVjR6.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwGQVjR6.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwGQVjR6.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dt7NjKeE.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwGQVjR6.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dt7NjKeE.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsimTrkg.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsimTrkg.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsimTrkg.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsimTrkg.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsimTrkg.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsimTrkg.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsimTrkg.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsimTrkg.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BsimTrkg.js",
      "chunk-CyrMf2rh.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxtS5o6h.js",
      "chunk-BpTeVkeA.js"
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
      "chunk-oM0jm2oO.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '22c5bd780fe942d80c13f5c5d48a21d7e5cb05c3a80713eadd153046dec72ea4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '6c66020e1d64b37287b713377ce50e382df2dcac21ded059d6fa662e9c964023', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '37c13648c6db5ca1a3f42acbcd9ac00b72f5061d15c829a948fbcdbe4af381ce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '8aa1fc05345a182e5a2b2778a1c24209b288f701e97b91fcd37117a53627bdf8', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '31cc1bea6fb5da7a7908f64d84d5d3ddc182e51576c940abc8e4e388bdc634cd', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: 'd43bc9b381b6d992751bcc46a28f22bd6b861b2233acf9f7e1fdeb1e02fdc493', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: '20b66c3593bcaff70ce1eba7f543649d2fb3c376e6b89900d5bbb32770294e91', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '75f690b97588b158f39bce6e992b9cde1aa1346e8d62ded18a1b5ed7f2b17d45', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '87de526d792d41938bb2282c0185122b5ddc2604b1b2396d15a68e9ece77a9f6', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: 'e8ede9c1a6a7f5bcb20c3a2afa15d940c648b0d06a046507dbb25d84918a0df6', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '28127c28183296cc4cdd46653ddbf0b39d5ab9b7a173a04c62ba9b9f77485e1d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: 'bf25475c52b7df1aea3795f39cd985e5c5a8b9596b70eaa1f59d5ce02cfb9b76', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: 'e23b1af8438ef86d2f1e52086601c3953cb73e9f66eaad4d279ed22e387eb716', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75969, hash: '0f3c52c627ca8378e06802bae9a12611b268ccbfa7535b44bf7568683838318d', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'e972bb0c3109d037453513f1aaef4addcdfeb119a36a564cdd340ff545aa4e56', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: 'a57e722a1bd2cf3f0ab5c522f80ece9c149f545e33635b39d2e645e84449ce7d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: 'a9ab3631ea6019d2a545b3fb47201ea6b73fe1bb1579def366bfed4e8a995370', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '8db1ccd087cc2db0d4d1853af01f01678bcc8478d0ce878b5504aacd97092a4a', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114732, hash: '727f8b508cf8b6365e43f0f5ec78689303667eb7cb4852b3bd98679478e7ad18', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108208, hash: '1bb55fe386b98c865e8990108d6647ab840e3330e6c53a378ebd168e3834b2e8', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118061, hash: '50bbdeb08aa0b8dd864c1a2e33aa9ffac12f36b30f0aaac9a13e55185aa0b757', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118300, hash: '9ff3dcf87fcf781bd75a57a3744e4708082e82fac53f685a59badfac96f061de', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '280a35d1d466bd7e13ed7bbc7a4dc9c4b138d61ff51889d2011d5ba870704602', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: 'b14fff760e19b4cfa3378702a9109cffb3a108230f64ca4b22aab41c502f40ed', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: 'd61f69ca9772d8d5547d0f9c0cba783566314d37f0ff84ec08952bd331e32bac', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '76956ef5e56927a35655596b33b30e29ce8ef9db782c1ee94c5935e595100061', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118106, hash: '38b38b4b146e58bf9414d131202f4570b009a86a353e5ca94b623f816617d848', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115250, hash: '6e4c12257a72cbe19d6c5d9ff1566f02dd2e00ae6a5bda4272bc6177f1ec9a16', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108908, hash: '7f4c13ae866de41bf31bb71440ee28b66563fa6cb1a338766d02a5c992615719', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87941, hash: 'bfbf041675a7c74eccde33c10800b979c2384e60478bd31f8f578afeaaa6fa08', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '9273f8d800b0ab3d14d25117c73ebcde0eeaeb463ddd756eae110110a84a4168', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: 'b7d3751aafb82da2f05374ea7bead5e17c04a20d1b7f452540c4ce7ec0100ebd', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: 'c4604007d0b77cb654e24f1b1465b51c1ab1d67db2e735e3e35c88b5934a76a0', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '99ded1bf1c75369f376044baf78b8dfe3aa364498147e00bc6df7a86406973fb', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79778, hash: '4484b5171b62dc1e9d17123f4a14c6c40b9027decec3a9c6dc42e4c79ff4758b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80225, hash: '407199a666d249290984451a4c0c5b5bf76fbdf4f2474feb23a8f821426e8e98', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81374, hash: 'c582da96373c21d929ebf65a8d930bf24d54ce9382f4dd8db799de916b7eed41', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: '9136ddd7fa781e677da33928e1ad36ef3b533009de7dafb615a618860de70fe3', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96830, hash: '58f19cccefeb766c97b7c82032e4510ef97e4947f5a6f8b38218352b54bc258f', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99589, hash: '630ca8b98e536c66f432606d12b61a3fe03a66f8d6f879c9083cc28e58f4ffe0', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104405, hash: 'ad280a08abe4fa076e5c4d82effb1761ec5cee5053289eb30ede02f6711c2a9f', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: 'ae372a226a60b8a830ac6df97c142fd857a0c6f6a5fd9e12ef3404862b75133f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66996, hash: 'abce8b32d2e8fa788920f6f9b4df67b290bb6daaa9a0931de4e5fffccc9d000c', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88773, hash: '7f77563bbd05379af065ad59b6a558560962f66007642c4f0c9cd413e869ec46', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: 'dfeb2bc7c0df7204a9d9c6ca6af1bc586a61030de44ac1ea8b9cb86dfdf1c05a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107108, hash: 'cd723c0cc18457d83daa581b876e901dbcf5d5fa8d1ab9c18fe3175242a048eb', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
