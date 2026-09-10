
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
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82503, hash: '4e7718680772e0a6feae47d3bcdbd9fc99c40f4cb7cdc26557616fe113632ba1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79693, hash: 'cebcbe45f0ef96786524e5ecffffe96492db300df955b31440e936c392a0c8a5', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80790, hash: '280ef311be56e39f27450cead8644dea0b6e0f29f4ed5a557aac8b0a810c15f3', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 84966, hash: '02c2243ae14cef0dedfc39d3157715de951472d5dadaceab04e30c7fbb852b9b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76463, hash: '144d19c31bfd5d3ba87d55404ea2b1a7a55deac826669ce2043f2570cf18b4d5', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 78604, hash: '8580bc674b764d8fcbd7facb673cab6f347a4aacf78391dbbeca0d14ac4f3d17', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76708, hash: '29f49f0b958ea5a37dcf2460ab0a0e28e3df3b492ebf6a375975916d56134784', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 69054, hash: '722bbe72f5f8613284264ae5d8279cdba61ac83d3b78d080e796cf27f9f8adc5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 107264, hash: '72ef327b9d58e7c5738764970b720d9bda8521e0b3e3cd2aa2c8ad6c9ec4ab28', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86565, hash: 'ded52ea0a1c429ee7a1642cd6ff36990a38e6ebfe678ee1e8158b638b32a5753', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69312, hash: '7d4abece8a86460a5ee16759145bc9e23e5fc911bdd6e8d9bb10708d305cc361', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83203, hash: '523521a9e5001de99d561fb39a913ffd1ddfeaf95c2c110850dc99f7e9aa0e8e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78611, hash: '50d03c4c10219b4f3d8a3aefff2fb6574c441b8baa7f73d81cfd25a38a1d00a6', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75962, hash: '857f94759b2d8f956a8ae996ff9749e06feb5b65a19bf87e8691d9535ffdce50', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84348, hash: '414f91b991e4e6f2f972697953489d3ceec399d043fa546e82519e3b3e84b59c', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 91735, hash: '4a97a3ab577ea094c4dc50810c8260f8643075563f884ba5124af12c38ce798e', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91514, hash: 'd67e933f321cfa2265ea84e03d0934e485af34b0282ae9475eed7fb018b856c5', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 108330, hash: 'c9ac2340b363709ecce9886976b25c8314a2b943b13c60bf1f262c7b74bf84ca', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98148, hash: 'ba255584a7e684655e728d841a54b6ea7f975825cce6eebbc739c1705f06c5c6', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 112461, hash: '8b956b0aab329361b3cb0bcb58ebb4fb29f87f20e7f09601a8132ae22eb088ef', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 122205, hash: 'c18259c496d7e5259bdaa306437e6c8a8000e4f2da5cf982ffe15611c27119ce', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 122070, hash: 'ba0c3a6fea3e9f1024502c1bf22528fdafbd915588af9fe41ce8911956a731f9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 121928, hash: 'a89a6811f6af5a2ff07f391d0c0814e4e8eb62b044c497e0ca514e8c2a302a96', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 93000, hash: '2039c5a22ea88415b608595d28076e22995f7f26fc165cca9456b146f0f2f033', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 89924, hash: '4dea1e121c8e51e6e0299d065eda17d56699dd319a3ce4c35399c64c54d8a868', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 89701, hash: '8b4a5b0ad034caf22ca39199afef1966fb95b9f86df0fbe2687d7fbddd6aa758', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72667, hash: '9eef24446da4480104ddd70e17b3c3ee39e19382a8baa0d7a4ee28afa980553d', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85872, hash: 'e586001489145217322278b0a3a062076978ba2ebb35154048642f749d7db5de', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86187, hash: 'e3ef34532463b716566fde199126a4ffd0713e763bfa0e9537a09364d81f540c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 102684, hash: '178ed7418c2b596d70bbd166a0229793581179dd1af4f5df0f7d59b1df2c3676', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94919, hash: '069a9aab9193ceba501e08ddda4045508c98de747f7493c294125820154b8808', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 119170, hash: '5daccf35c4bb5f75e204f143d7305666c4795a6c5a7913fd6886f187ad9c1a12', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 113166, hash: '669ce331eb9dc32030db1989842f9c5442704fcc01ef7b60ee48836b20c1cb2c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 91623, hash: '481defe847b7b1b2a2081c4dfbe54d83b9c9de3a644631266c965848e3e08d06', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 90450, hash: '0ba48109ae23e615c1e7ee87cf3097214c36ca16de390074bfdd39979064bc35', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 102887, hash: 'c75e58ba3359a298ac8be953783796e100014955d11484fcbb2f9bf86d60f0a2', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 107716, hash: '375a2acafb9db410db5b3ebd1f1caa63902881789c55a32caa5933b7fa5e6646', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67357, hash: '091e52da9f9a5aac4d554bc8517f51192271993dafa5985ee72b0a7068671002', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69369, hash: '9e9eeff49dec55482ff3f0521955d4abeadf48b4940efc2a4c8dd83cc32141a7', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94382, hash: 'fa6b921f3033a0681b3683287b141af84906b60c0ab62d60b868fbce2a76abf0', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72242, hash: 'b76416c08e47f9a921009fb4b55b75664ea22940a50dc8df60b68e5f3993d438', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 111003, hash: '468780e1805b8b4e55a4e1357c0870f4b917a544eeefff73b877b10c35e33f50', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 118976, hash: '7628d8e9f3a12379275234127c73e1a82963514ed0fb0a1ccf77a6127b2c665c', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
