
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
      "chunk-CUaj3SMP.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CLmykgD7.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLmykgD7.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DrOgn9Xd.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7F5biPL.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CP7Dkfpq.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZ0upsnn.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWmd7ruz.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsNiU0iO.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BgFfgBvp.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwlrpQ2r.js",
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
      "chunk-BPJr8bt4.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPJr8bt4.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPJr8bt4.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPJr8bt4.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPJr8bt4.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COKuiSoc.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COKuiSoc.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COKuiSoc.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COKuiSoc.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COKuiSoc.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CS3kkn84.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COKuiSoc.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CS3kkn84.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmQLReys.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmQLReys.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmQLReys.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmQLReys.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmQLReys.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmQLReys.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmQLReys.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmQLReys.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CmQLReys.js",
      "chunk-DdlhZfUl.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzVcg81k.js",
      "chunk-D_4AQo8U.js"
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
    'index.csr.html': {size: 16193, hash: '7d59ad81ceef00a4975ec0ac5e41c3433ab172fe053df2601a9242d4828b5954', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '32fa50b42d0d5c90ffea0288d1ffabbb7db5435c25e64d8ab1907465ba03a06c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '8febe5da0f3855f7093ef76d0b4417c5d7c1a00ff1e0219400fff74ec84a429d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '8206390ce57fc667207c121ce41953cb2a115504f49281963f42ef3142b5c1f7', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: '7ab162bdb2024efd99e499d436b9ea7c2ca4af2facb6a694b9e629acc964c273', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75967, hash: 'c21d1eebcf87ebbd3a852f5f6df43a3323a886c16bf43e153efea6a205717fa4', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: 'e55a358a34bede88f240bf1dcf9d2be31453049551c54b1dd4f038ed7494c2f5', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '751a98a341c12634f1f32575abe8d71c8f97a096fa791385e5973a7319804231', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: 'e52fbecff4848ef0180166ccc4f633c4f0ce891a059f50e4c8e1f4fcf3550ab5', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: 'c1ef6c406052d0ad3e902e8966c6b396467390c89b0dfc3a832380c4855a3f88', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '1a324b779f9de5b2ff191c43f2534a9e874e084c88c4220352263374afa7226e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '2112d0172aca1cb3f8c7dbf62cc59b44d2b4044b4d4f95e3efbe331fd45c2153', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '10abfdcf43ce84c4afb2ebb1180c35783e2dc812bc88b6f3989bb95ce3342ad0', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '4839ad386063134cb5c69ce7acb6c20a5e607a29ed860caa72fa6188585c6df8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114732, hash: '9f4665620a51551ecaf7994b0e9d77be240f4918d5e42b7d23918da0f0e2f5b9', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108208, hash: '02bef8124f361c556a3c0c87ce3344ea8fd91bd33f8ff7a8cd4b58a144664dae', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118061, hash: '6e77eb52fb712984d5dd5497020efe8df2abf10e7c4fef25d162f9b530a7a9c1', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118300, hash: 'e40e9837d0aaf84d68bb9d8e5161b0a69d359d3917626a12c13d68192f9fa1f6', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: 'dec4f600004e9156ad4447876370cbe52bb6e2ef7c16bacacdeb8fe74c000e95', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: '7912187539c8c6e1882e8eea35365fe76f382d4b01ef365363581040a0296fcf', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: '6d50e3772c47aa0d9ae1f5b2ab0cbe80860ef3602d54b7bc36b6b51e074d9367', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '9399513afa944b1e4de31dc6a75116083289ad852617c846745047afd97815ac', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: '38d67a7ad2c53d18b3195946e44b5666fc49820fedf85ce892a597afa012812a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '32347eb3db2cac4a13d77986b9b64552fc5d102f1b8a1c8550e2c238268d2cab', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: 'cf3f55f8d43f8aa04e5c03b85f0163f6565fd36ac72a3691cd430d2ab07077db', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '5e4e4d4eb7c409b0399a42002bd030d864790f3deb212bd02240db69946887e1', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: 'b98d6296cc4af051e6fa73bdbee1071f331780a2bcf61180341d6b3919277a54', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '4fbbc001abbf62c2c1887f7f6406394e1da0d60993fb371e910d21ead0ff47b6', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '241d459015662534f3bb9aaec1192ea309d51cb48ca0fe4e98f722584dbce8da', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: 'c07f18a1af58453bf0950d504c3ab9c8782f16f96c9b1cde78c4e4ba3a60ecd8', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79774, hash: 'c05875b7d29ac1a76763cc365427bb97d0903895c0cc33556c256c2b1337cefc', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80222, hash: 'c325e9efcb78a0d3e74cb3bde6adee41a6b151bae8cd580422c4c169200758fc', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81370, hash: 'd69dc5609ffb349c9843c2b51914ffb9365c831747ce08e93c4e6d3ec1a8eb81', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: '17925a9ce87e5ced2296a7d909cc3727f321c415c466615ae264eb4a20e59c1d', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118110, hash: '27f2510d4d0bb5737fc947d7e6924327560a9d87f2864f3dadc92e02a19043d5', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115254, hash: '8498866c8b930c92680db7c3bdbe5e1365e7ef801bcd02a3d71c739fba251e88', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108912, hash: '8a6957907d3353710f4c12a0e57f5d0f8ddf3ed237a269059545f0ca115fcf8c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87931, hash: '1ad229c69c814386a87a72925ec8a5b9d0ab152b57268405a02f9a0a2fe33293', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96828, hash: '7f37cbbf6b5b07788bc9ec0ad053e5757b11a8944ce07b1176f48dcf920770f1', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99594, hash: '80247bcfdc1d3198f92a8a7db0ca9c8c6ddb17c8ea6e1dea4f6798eb82dd0901', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104409, hash: '8f93ec736aae9fc44145fe906447ce6a32fa90e6939de2ad44db4d9d54416666', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: 'de9ed2d4dd9f5f2f4228e61fcc2e017285be6677c900ca526a13c7701b753ccf', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66996, hash: '4ccb3c5e1588a9732fc6b0872a8e7e03a6e7c2116ce529839a32d02ab6112810', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88773, hash: '00a78a61ef4d3ac22f227712c0c571c613982c3e2d40f802dc4bede04faad3fc', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: '0dd017957a16fd13dfb9db529760e6c5b5937e41c6f44da656f8118c92f9a2b4', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107131, hash: 'faeea2078bce8c48515be9634c3e21fed54e159423f4aee3856ec2a33edbdc30', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
