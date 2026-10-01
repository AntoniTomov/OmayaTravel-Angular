
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
      "chunk-BoE2nkav.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CtneD-q6.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtneD-q6.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiG_cYta.js",
      "chunk-C45Ww5ZA.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTsubY-B.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D4Zy2yDR.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dzc6QLFP.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-fW2i-cJi.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSf70qUz.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZZG-4p_.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BnCdwFYR.js",
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
      "chunk-BJb9ctk0.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJb9ctk0.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJb9ctk0.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJb9ctk0.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJb9ctk0.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6mo3l9K.js",
      "chunk-B8-iGRfS.js",
      "chunk-5k0Hw3Mm.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6mo3l9K.js",
      "chunk-B8-iGRfS.js",
      "chunk-5k0Hw3Mm.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6mo3l9K.js",
      "chunk-B8-iGRfS.js",
      "chunk-5k0Hw3Mm.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6mo3l9K.js",
      "chunk-B8-iGRfS.js",
      "chunk-5k0Hw3Mm.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6mo3l9K.js",
      "chunk-B8-iGRfS.js",
      "chunk-5k0Hw3Mm.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IJ0g-O7U.js",
      "chunk-B8-iGRfS.js",
      "chunk-5k0Hw3Mm.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6mo3l9K.js",
      "chunk-B8-iGRfS.js",
      "chunk-5k0Hw3Mm.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IJ0g-O7U.js",
      "chunk-B8-iGRfS.js",
      "chunk-5k0Hw3Mm.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXDbbqmZ.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXDbbqmZ.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXDbbqmZ.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXDbbqmZ.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXDbbqmZ.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXDbbqmZ.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXDbbqmZ.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXDbbqmZ.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DXDbbqmZ.js",
      "chunk-B8-iGRfS.js",
      "chunk-DQ0Uns4d.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdImDBm-.js",
      "chunk-B8-iGRfS.js",
      "chunk-C45Ww5ZA.js",
      "chunk-5k0Hw3Mm.js",
      "chunk-VasDMg1b.js"
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
    'index.csr.html': {size: 16193, hash: 'fe296aa7f389a0dc0112e225beea357a18e97a90f99f1fe941be55fa1154c466', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'ae024428cf4508d0a21b863d3e0faac7a4f0dbf84101b63a67ff74ea87f352c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '60d988ddec71d03dd7cbd52f42d5d3e5b2dfd57980440a0cb929af896b98a644', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: 'aa8ebe9c9dd05790102f02152a8cae18e1e9468f956c4ff4cf7a298a87fe8944', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '094d01cad241d4b525c3e5e7ecc26e681deb5226e42f1027f7c505ec09f06ab2', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '17a7452f9f5532f375f19a3148b8b3bf50733eb78694607f7c1ee1c34f91b0fb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '660b934239f52d16b92e70d1dbc55ff60bc177728f6a9754a69124027ae7d511', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '7c114f3d1971835d5a9bf521ac32af6675908aa3a8bc7e80fc126f22272657b4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74626, hash: 'c6073f4f8f817ad88cbc22af517e987c3ec2a45d38b7d589c4999850cd345f38', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78014, hash: '3f60c5e7aae0a5d0cbeaa0d2e3ebd1db246e1ddd2f763ab220e874c34f5ad8de', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: 'b585e3ac068ffa87210e15fa0700b39c00f09138ada19900ecafdbd71f699824', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73720, hash: '39fe7a9cccc45ed95b6b51a3e94bc3d1cb84686d6c84a72a660184bf9f27eabf', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '42175afe13469767f19544ff93b17d5bbfdcfae656fa0a9190c88bb7864b71b7', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '8e9ac2eff22ab1642f594d9ab8d04e11a14dc0f3c567f414be0b57863095918a', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100111, hash: '9b4d42d5f00af631cfab98430107277a252c2c7dfa9c1db804b08197e0409cc7', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88165, hash: '2535931f6d92de36da17aa608d6b2a045e01f6876168ea6d456cec0dc0d79479', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87389, hash: 'cbe914aca3da8cb053e5c97cff5c64d2af36d6bdb409dfb4f89bcfe1616766d0', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106246, hash: 'a3264f8e90359f1df2688de63fa97f9cc3f3019410e0aa8a19900b81b796fe9f', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116864, hash: 'f04aba9b80826151cf651e9592f25031c15a467da210a7570c01ef7955fb3062', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113473, hash: '7f8d34940c334132dea083c7d6b2fc7d3da5295c408f17330361846c8e5c17ec', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120193, hash: '05c162111f52dd8a21996de14f227d1acbe2f3dedd1db8f4e59881973ae3ba5e', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120432, hash: '7e8db6d8ce9ee1f1745cb42acfcab6c5095e9fedff6561c2462d66a25e381a9a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'db842347317adad23e3aa99719602d91a7f984cd32b8b9335e8ff4f08bd537ef', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: 'bd512df6198c9715bdb2d6f2317bec312f0a6cea40c755d708d896ec10bfecf3', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: 'fc50b334fa7f3b4e181a5e04740ba77e4f93ead466602dc12f2abffb3992e4ca', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '898eadedf035c3895dba31a36e61da74330c43735f803146c94b2faeb6d0da4e', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89256, hash: '335c21fd7655c6946fc24a07ad1abeda162d391fb4f92e330256159bff678a5e', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87321, hash: 'ce93600d1d4eeaae3bb463f2dd28a96fb6c09dea99ac8edfaa874d05f7373a4c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84213, hash: 'f5ed0d2c60ba6bc55cf71bfb76268eda5d29377e9dbdba682299003cf84d1188', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83990, hash: 'ee4fdf0c598a0b6a2b57b8df55d2390028399a2b98e83f5fc57c2c120f7c7731', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120074, hash: '4a1b9963f530bb81c4a0262d4f8f52a72b8fa709aa51bb8bbb0b8fa0616f8042', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117382, hash: 'ee3c5997a2a950f59a23a46addf262726e0ca9817c7dacd2b86b501b3f31f80f', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114173, hash: 'dfd7e3b1bbb933ae26823b6ab3a9b4d51d2a18e5cfa508b8be1752f2859d7982', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88109, hash: '9455adaf544c32a093aadb7f87d8399c0c9e17e49cf13e6928fe71fffba117a9', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 81823, hash: '362e7fce0db7d7c07ab1c82968ad1550e601754be383e7615e6321ac505220b6', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85403, hash: '0760d415636b2ff3799015792cb639799b60781c1095dc610a267cb82049f2f7', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83419, hash: '96e6be2d2ccf10ee96281fdc33ceceba1d5ee933c66e351a86519c2ce1e2382c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97094, hash: '521c47efa85bd4bc46b6ec4613223ef52bfda703a8cfd4591d905a77975fd83a', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96967, hash: '5481679ee76efe63440520ffd9ebf558a93d3231386ae82077ff9df2555f16b6', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99734, hash: 'e29f701b148cf6ac01f890e00254a0faa00d04caa3876d483ebc63b7bfce2bcf', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104542, hash: '31887bb13c59d22d4b95d42f0d891d29f77ec5641a786aab86fc87fe39b1ce63', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64646, hash: '539beb413b4b096ae39ef0d162283d7caae43b78857feeef7d0d2286f2347a2e', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67118, hash: 'a1cc3c815f8e2b022abb0007bccfd655b3b53bee6233ae51b2b8ae2eb7837394', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88897, hash: '13571659580dfddf498aa73112325e2cef34b6adc2a1dee230a6c41b5c9562b6', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66678, hash: '5489c6460785d415a927126ab1e017ff7b1b33cbffb1862d86514b069b127998', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109240, hash: '59dcef02bfcb49273112153cac0062927c6c25c91f150bb0a9bcfb0904adf6d3', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
