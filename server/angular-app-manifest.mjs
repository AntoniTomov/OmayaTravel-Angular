
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
    "status": 404,
    "preload": [
      "chunk-CAStMiSP.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-B5AcV6BH.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-B5AcV6BH.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DghjDmqA.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BckoU1_v.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B0IGTFoa.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH9gmLqM.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C9iZ75ca.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DDnewBD6.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CF78gXWP.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C95IzzX6.js",
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
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Doi2XzB7.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Doi2XzB7.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Doi2XzB7.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Doi2XzB7.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Doi2XzB7.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Doi2XzB7.js"
    ],
    "route": "/private-tour-planning"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Doi2XzB7.js"
    ],
    "route": "/september-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpOyL-Jg.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Doi2XzB7.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpOyL-Jg.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvFEAZ2a.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvFEAZ2a.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvFEAZ2a.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvFEAZ2a.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvFEAZ2a.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvFEAZ2a.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvFEAZ2a.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BvFEAZ2a.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeuZsc_v.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeuZsc_v.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeuZsc_v.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeuZsc_v.js",
      "chunk-LRKqUKK_.js"
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
    "status": 404,
    "preload": [
      "chunk-Djl6BSTu.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24167, hash: 'f0c6a93a0d98616ad2345d9272facbd902ad5a8e1085370d04aff996051b002a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23194, hash: 'fb2ee8b258dcd8fb894ab199b1401fd72f8675bd42112448552f60649c20378c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73425, hash: '5ef4ff2cd5947b4036abc7f7adf84138435d73e8d5bb9cd49290091aca5634d0', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 71314, hash: 'f1de74fd3b00a4dd73ada6e2915b1d27a8b9d99acfd5767afb0ce4419fd3dc2c', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 73594, hash: 'b363bb875a2e6b1c827bdd84a6172205e59cff0e6305ef05f3ae010eafcf218a', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 65818, hash: '8f482197dafe69e0fac6e5cdc7ed8fba88b138c9d8236e47c6f7bb83a0dc4039', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 79280, hash: '0569141d6f38f59efae1cce99b7977e0604f5d4ca1bb8e1bb525e1b0ffbc15ca', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 62527, hash: 'c0602792e9a3972b3fbcebb99293d48d639635519441b715466f96db426c0e21', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 62541, hash: 'c5d525dd8474fb84c6f280503befe375cbe3fc3b5b0f825835e03261b783fd29', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 62542, hash: 'd667468fddfaf12ba6b3757c35bd4271b47ff7761f2ac413d27290957f68f35b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100459, hash: '401170ed19190273abedeaf59a0a605618e096595d6fda961704ec6a77878078', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 74885, hash: '0fd1a492a93630e87ca87dcd2659ee0f4c251c1e1e21ce3857c2348d18d99778', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 66317, hash: 'c5b2a6f5b59098c513c9926f7e2db2240a27f3ac1e3e9ebe7e4790ef7d41a67f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 80095, hash: '646397a8bff41e2a9d7958333620b4597f79f1f5bc89b5b7e2864a9e96b7ec30', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 81302, hash: 'd0bf72b0724ae9d1ee07cfbb3b482c2a4ab7e5f0840507d5603fc32917126300', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 95766, hash: 'a06d7c1c756761d2fe7d5ceb37fde538824e0305a56f103c08a67f998606fe0f', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 96823, hash: 'b087723008a9d504f07877c24d6f5d2b42840e9e8c1cf17251cea4706577b7af', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 96471, hash: '4e8c49454778ff47793ac1ba62da3c1b407b8578e687078740f66defc6b74ab2', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 98765, hash: '7b5545995c4c512783b7f26f484428b7734ffa39b78040bbc08f1f8c877fd05d', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 98031, hash: '66f54ae0c75c608acec1cffed934e900e81dcb68ab8e0a908529baeea0646ed8', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 87365, hash: 'bf2e7b76cdd6c4f5c931c66c4a3e6632719686beee84b7b8116ff0a3386402bb', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 92637, hash: 'bc84d0304d7cb66bfcf967aae3d598c8cf103aeb5c09ff2329e11fe4056180d1', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 96657, hash: '89f259ce1896621e88ea8fcdaeb2b43747fc525ddeb0e338e14f0d4f58598b7c', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 84958, hash: 'b163b309c8c6e5009d9a50ed7ab73328f2ad9cf1aef805721c19b16e52888d4c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82174, hash: 'ae1a447833c12cf8f0b369d1977e245dc4500da64324806f6164f6f8774a510d', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82025, hash: '9b0ae15f5436f55d171e3db1986923d3bef9a89c0c61e42a325e1abdb3ec1c86', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'private-tour-planning/index.html': {size: 86230, hash: '88cba74a88bcf35872a52dcf838af949374c693aaea8f2d906aacd1cd815b034', text: () => import('./assets-chunks/private-tour-planning_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 98816, hash: 'f7a1dfdc80cfefb2c29891a2b8db4181672da18306ebf9ecf7c036a87557feb4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 98807, hash: 'bd7fd3682a7378d9063d3a575e44c55ff3cb9914bc5f4908294a39ff97e1a283', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 96936, hash: '5cc944efd9b7755985518a13697c80693a4e60d14751d0915d35a623626c1963', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 96983, hash: '5798e5a5912f8404e20875a13965aa3d7157553e6f802ceec59a184586865824', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 62544, hash: '770e62afe15f1331989263e8002987e0a195ee1fe0580dcdeb74ba7e303de63f', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 62541, hash: '7ccb4f0ee993059ab4fd7f6d3dede2a350c57ec6bae7979cede8f15cca460673', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 93367, hash: '998627d1207cbd33330e1721236bf9ba5d7a9434a9272b468ef43bf1e677c1c7', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 86232, hash: '137914b324e80b976af078a523efae868408835fb11024b4c6795af94e07c917', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64453, hash: '2306be84b6ed1018353955b47fbed39fd033d73480cf7f957df36bafe225b717', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 66279, hash: 'ac27874d5f49778a2e467a902bc897d0c52c3f38ce386b5c5ebb474688fbcd04', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 75649, hash: 'b0afe6b3ec51e6675f6615673e432a76633825e3b04823f72c1214ce147e26e8', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73004, hash: 'c5010bc3cee65315bddbb03d38e88b7f8eb602ade91b81d109ec94402b6e537e', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'september-2027/index.html': {size: 86119, hash: '15c2e8a8314a17b4cf09ced0610912f4b6c0f52aad0682714b7c89d5b36509cc', text: () => import('./assets-chunks/september-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 69673, hash: '9fe0aa9dec5b63348d86c814a5694775f4f94adb4e21adf13abcc60de625d77b', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86119, hash: '15c2e8a8314a17b4cf09ced0610912f4b6c0f52aad0682714b7c89d5b36509cc', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69337, hash: '12712049ed9beb93220d7ff0c27aad5c52e0498864e1cf41c8709f2b15fb802f', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-RGJZKMT3.css': {size: 6006, hash: 'XLETGTWqs54', text: () => import('./assets-chunks/styles-RGJZKMT3_css.mjs').then(m => m.default)}
  },
};
