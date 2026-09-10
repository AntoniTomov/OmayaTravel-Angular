
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
    'our-story/index.html': {size: 76463, hash: '144d19c31bfd5d3ba87d55404ea2b1a7a55deac826669ce2043f2570cf18b4d5', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 78604, hash: '8580bc674b764d8fcbd7facb673cab6f347a4aacf78391dbbeca0d14ac4f3d17', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76708, hash: '29f49f0b958ea5a37dcf2460ab0a0e28e3df3b492ebf6a375975916d56134784', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 69054, hash: '722bbe72f5f8613284264ae5d8279cdba61ac83d3b78d080e796cf27f9f8adc5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107264, hash: '72ef327b9d58e7c5738764970b720d9bda8521e0b3e3cd2aa2c8ad6c9ec4ab28', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86565, hash: 'ded52ea0a1c429ee7a1642cd6ff36990a38e6ebfe678ee1e8158b638b32a5753', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69312, hash: '7d4abece8a86460a5ee16759145bc9e23e5fc911bdd6e8d9bb10708d305cc361', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83203, hash: '523521a9e5001de99d561fb39a913ffd1ddfeaf95c2c110850dc99f7e9aa0e8e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82503, hash: '4e7718680772e0a6feae47d3bcdbd9fc99c40f4cb7cdc26557616fe113632ba1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79693, hash: 'cebcbe45f0ef96786524e5ecffffe96492db300df955b31440e936c392a0c8a5', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80790, hash: '280ef311be56e39f27450cead8644dea0b6e0f29f4ed5a557aac8b0a810c15f3', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 84966, hash: '02c2243ae14cef0dedfc39d3157715de951472d5dadaceab04e30c7fbb852b9b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 112459, hash: 'f4eb809f5ea92763af9bfb5019d94a5026328c7a42e7666797413489926cbc16', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 122203, hash: '59ec94f61ba6c0b3f281f64172b2388a84946f39625df59dffb53d0d17cf74f2', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 122068, hash: 'e994a10d892b39e717ab2409e87bce40e3dd74e5ea5494f258e4c2f1fbc152fb', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 121926, hash: 'ba42f3a3c689e9c73a83d8f971d763fcba01a37834fbbae0fe94e6857a0f2b27', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 91737, hash: 'cf1a42eacbd2f79d9cf20621aeb66f7852a2067a813b67709433477a9c7a3d6d', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91516, hash: 'c8a6e8184071c23c3db287ff418158d8b9f736705bcc63311f651e450b1b55a8', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 108332, hash: 'b06b1d4b917920cc41f916139a29644ba1e326ecc64daedeff4c841386216318', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98150, hash: 'be141065c82fdaa04b2be0288822e7ecdbeb3b1cbc8861cca57f3d8c48272e7e', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78611, hash: '4b46406afdac2b0d42c1ff6507e9a518eaa9e7dc8ea464a58a36dc55f013fe62', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75962, hash: '34b288967e8ecca5ffec09ceae8961f13802490ebc41e0a988f2f252a017b10d', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84348, hash: '0fa574b82d441ccf5996938b5f46c0d3ab23e0088660e0fa74c41e6836b3b611', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 92998, hash: 'de58f1671729ec577c4994463a0c03c5c2165a29bae7a8c8ec4a34da11ad6912', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 89922, hash: '4bad8f3a80c68eaf0f6768591651615e3e2decb847e1419987f853e53aeaa328', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 89699, hash: '16c981b591c81c5df5183aecaf806234dd10211d83acc4b952fdca1007f35964', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72665, hash: '6b5eab2a46c85f57b4cc77fef2f215848aa595edae6d8743cd915c376e2de08f', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 119172, hash: 'd1badbff4c3e2ef8c4cb6c298b4f9f6b38d543b16207508cb032d99500f75660', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 113168, hash: '6d557622942d4cfee8e02af3c49305cc1f4fca667bae8d6cbe60a91a1ba917b6', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 91625, hash: 'e7957e5997d55154bd139f65375e2f3630990f0b42d4ea92a31024b3b8b265dc', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 90452, hash: 'bcd9612336a5827a558eb9b8f12c597980f02e03f9aab0d3defb27a392611da9', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85872, hash: 'e586001489145217322278b0a3a062076978ba2ebb35154048642f749d7db5de', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86187, hash: 'e3ef34532463b716566fde199126a4ffd0713e763bfa0e9537a09364d81f540c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 102684, hash: '8613e9ecddc12ad3e98b50950425aee09fa985b069fbf9355b34ca2ab551461a', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94919, hash: 'cf4908ffc3874decd7eb744b3855dc5acd02664b7b85fcf07f39c3296b4b8517', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 102885, hash: 'b7cf7736c7ae8674949207dc7fea3018007344a1f8a536988ef0b11b2ab42e5c', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 107714, hash: '4c7d085d9618b2babbaee83657b72e101bcfddea1ccbdd5f05cef9ae5ffd6441', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67355, hash: '2f3bc630e4ad219fd27337a8588131e638ef76c78cb53fd30a1cf1b58ecd9dc9', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69367, hash: 'a428bc98520485eea49cb31dd783f3b5e3c365ba505767c8beb5f3e9a6aae052', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94385, hash: '0e65d9783e4cfc29ed13907fcf29e419ed4b3299b24c9b4483694bb8b9686726', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72250, hash: '5c111fad6bcdc89be58fa365b1efe5c6af44d825ef3320aed1c7acf57b943098', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 111003, hash: '7e298679799992b3ff77fde70f1c3479625a35d71f7db97451ecfd4233ee8b6e', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 118976, hash: '48b0d1416fab3862907f9f46a1d3ec71aedb8917f13853f413e111608941a3d1', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
