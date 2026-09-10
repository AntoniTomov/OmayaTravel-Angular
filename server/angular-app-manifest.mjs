
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
    "status": 404,
    "preload": [
      "chunk-D9PXYNJV.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-1pPjPa9A.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-1pPjPa9A.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmP9WCcY.js",
      "chunk-iom5YVcu.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DzqKFkJQ.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxIpJ4MW.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CqZZzl5f.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVmNviNT.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZhGeAlv.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gOblYn8C.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSYXcwK_.js",
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
      "chunk-CkMwH0E_.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkMwH0E_.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkMwH0E_.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkMwH0E_.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkMwH0E_.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dh6VaoJZ.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dh6VaoJZ.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dh6VaoJZ.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dh6VaoJZ.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dh6VaoJZ.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vnaW6XvK.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dh6VaoJZ.js",
      "chunk-BB_2mMfu.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vnaW6XvK.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bd-UDR2U.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bd-UDR2U.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bd-UDR2U.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bd-UDR2U.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bd-UDR2U.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bd-UDR2U.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bd-UDR2U.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bd-UDR2U.js",
      "chunk-BB_2mMfu.js",
      "chunk-D9QFPrZx.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPIu9YrP.js",
      "chunk-iom5YVcu.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPIu9YrP.js",
      "chunk-iom5YVcu.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPIu9YrP.js",
      "chunk-iom5YVcu.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPIu9YrP.js",
      "chunk-iom5YVcu.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPIu9YrP.js",
      "chunk-iom5YVcu.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPIu9YrP.js",
      "chunk-iom5YVcu.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPIu9YrP.js",
      "chunk-iom5YVcu.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPIu9YrP.js",
      "chunk-iom5YVcu.js"
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
      "chunk-DIE0-hN6.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23699, hash: 'a2f4e84939ee38dabc4ae3375c3c1df2144b79bf3f3f545d2068231a0c1a689f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22724, hash: '95820883bcd6c957db427dd0307ce9ed0b2a4cd64b6cd919e021ed70587a90db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107264, hash: '72ef327b9d58e7c5738764970b720d9bda8521e0b3e3cd2aa2c8ad6c9ec4ab28', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86565, hash: 'ded52ea0a1c429ee7a1642cd6ff36990a38e6ebfe678ee1e8158b638b32a5753', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69312, hash: '7d4abece8a86460a5ee16759145bc9e23e5fc911bdd6e8d9bb10708d305cc361', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83203, hash: '523521a9e5001de99d561fb39a913ffd1ddfeaf95c2c110850dc99f7e9aa0e8e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76463, hash: '144d19c31bfd5d3ba87d55404ea2b1a7a55deac826669ce2043f2570cf18b4d5', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 78604, hash: '8580bc674b764d8fcbd7facb673cab6f347a4aacf78391dbbeca0d14ac4f3d17', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76708, hash: '29f49f0b958ea5a37dcf2460ab0a0e28e3df3b492ebf6a375975916d56134784', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 69054, hash: '722bbe72f5f8613284264ae5d8279cdba61ac83d3b78d080e796cf27f9f8adc5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82503, hash: '4e7718680772e0a6feae47d3bcdbd9fc99c40f4cb7cdc26557616fe113632ba1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79693, hash: 'cebcbe45f0ef96786524e5ecffffe96492db300df955b31440e936c392a0c8a5', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80790, hash: '280ef311be56e39f27450cead8644dea0b6e0f29f4ed5a557aac8b0a810c15f3', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 84966, hash: '02c2243ae14cef0dedfc39d3157715de951472d5dadaceab04e30c7fbb852b9b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78611, hash: '4b46406afdac2b0d42c1ff6507e9a518eaa9e7dc8ea464a58a36dc55f013fe62', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75962, hash: '34b288967e8ecca5ffec09ceae8961f13802490ebc41e0a988f2f252a017b10d', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84348, hash: '0fa574b82d441ccf5996938b5f46c0d3ab23e0088660e0fa74c41e6836b3b611', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 112461, hash: 'a95cf5cb847a28d592b467bbd48fe8cc8790f8365ebd6e83466292d4f331723e', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 122205, hash: '8acb975e1217d6404785d8f23cc85c2ca72ee2c35202dd6369ebf57b9b43df30', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 122070, hash: '7957bf36bb2592a3c0644faf9ed60891e32a968b17234d87c67f2ba75a75d7fe', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 121928, hash: '7e2dbf3a4f99328cb82344197f6dbfa30624420aa7a70eabb69f186f5819b8ef', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 91735, hash: '4a97a3ab577ea094c4dc50810c8260f8643075563f884ba5124af12c38ce798e', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91514, hash: 'd67e933f321cfa2265ea84e03d0934e485af34b0282ae9475eed7fb018b856c5', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 108330, hash: 'c9ac2340b363709ecce9886976b25c8314a2b943b13c60bf1f262c7b74bf84ca', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98148, hash: 'ba255584a7e684655e728d841a54b6ea7f975825cce6eebbc739c1705f06c5c6', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 93000, hash: '28e31827be59233661fc6b58ad03fc2735045ed8d5401cb26e66b73253d38221', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 89924, hash: 'bcd4eb83659ecb7244a3ddd730904dac1f772d90a194877f8620b939cd8bd3d4', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 89701, hash: '19da4e7dd6e907481f1e8f6ad2bed23c39c8668f263c8759677d2e6f24c06cfc', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72667, hash: '2e9f69b72bf992fe6bba33e2d89b71922342454a0e3fdbef89cc2464c7eb545f', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 119172, hash: 'c04352fc4a73c5f7c1c626cd312d7d5eba51351a7afc23e86898212723173ab5', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 113168, hash: '5b220789c330252b45e02ad664edb70cc8d72a2fc318744c5cf04c57be89da0e', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 91625, hash: '2a366fc4e7c31585168f9941f41d621f251db3b0c37200bd71175183070cdfc1', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 90452, hash: '28e6777099ba4fc1745ef44249e813a92767d7eec9ed92f68e734436289fe589', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85870, hash: 'd5f8d5e03e93a48c16573aaa41db89b86d121eeab41da32f3a72780ff8acde8c', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86185, hash: '2a9975ad0467483f47a676ecc57d7560a66932ea1650299fef8c9b9f19c7cbe7', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 102682, hash: 'da8f2eca8dbc82a35d3afbb88b0b0ee725b947768f6fabc15ec18b29400abc02', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94917, hash: '6afd0e7f80a6a4732e76ee496234a9790996802a8e4432f466800ba1106bd94e', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 102887, hash: 'cceeeadfa483b21750da6fe99d78e3e88220def28b195e56dfad2a8a1258673e', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 107716, hash: 'a4f4d6b787de6e7d50d528492b578e8c6fcaff90061fbdc59833a32317f12ea7', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67357, hash: '5714ae5fdbc7f475af7c1cf9897bb47241712b5c6c9b43af2d46ada08eabfb77', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69369, hash: 'da9b8866921c34ab4fd19adea3cf00714cd4b582414895525e162ff823512192', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94382, hash: '3f0b9d2230c60e497d40d64a21e17d51cc271feaa6f20d10fbb79e6586c0f0bd', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72246, hash: '05d795a260ecbe4c8a563d53cadca28c9d2664cb19b34a9d1361fbbf2ac5a180', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 111003, hash: '6f1451c0b881335990fe2b4b1854424b7de3cf7f288c233c273a0d0ab9145291', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 118976, hash: 'aead2a7e1185207b35fb5b0b1b2a6f26e93a59b81f7b46f56cddbe30e83000af', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
