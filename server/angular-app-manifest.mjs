
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
    'faq/index.html': {size: 77935, hash: 'b585e3ac068ffa87210e15fa0700b39c00f09138ada19900ecafdbd71f699824', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73720, hash: '39fe7a9cccc45ed95b6b51a3e94bc3d1cb84686d6c84a72a660184bf9f27eabf', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '42175afe13469767f19544ff93b17d5bbfdcfae656fa0a9190c88bb7864b71b7', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '8e9ac2eff22ab1642f594d9ab8d04e11a14dc0f3c567f414be0b57863095918a', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '660b934239f52d16b92e70d1dbc55ff60bc177728f6a9754a69124027ae7d511', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '7c114f3d1971835d5a9bf521ac32af6675908aa3a8bc7e80fc126f22272657b4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74626, hash: 'c6073f4f8f817ad88cbc22af517e987c3ec2a45d38b7d589c4999850cd345f38', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78014, hash: '3f60c5e7aae0a5d0cbeaa0d2e3ebd1db246e1ddd2f763ab220e874c34f5ad8de', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '60d988ddec71d03dd7cbd52f42d5d3e5b2dfd57980440a0cb929af896b98a644', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: 'aa8ebe9c9dd05790102f02152a8cae18e1e9468f956c4ff4cf7a298a87fe8944', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '094d01cad241d4b525c3e5e7ecc26e681deb5226e42f1027f7c505ec09f06ab2', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '17a7452f9f5532f375f19a3148b8b3bf50733eb78694607f7c1ee1c34f91b0fb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116864, hash: '57afdb000ac7a9be7a783bb2a3f1605c44e204b7750feee85e4d4bc01066cecb', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113473, hash: '96ed14842f087231c7449c8988ea362485c5f0294428f3ca722fd05274537b4f', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120193, hash: '3092ef1cdfa6cf6ce9e690967fb65b98b047e20f43f2cbfd132e845e45c5f7ac', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120432, hash: 'ac41deee7b48f542fd0c8861ea820696d8bffb7eaf0880e8729ccc2ef700cbc9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'ba124283d93ad59a12ec9a33149e741afa42a89a783632349f2b5ac9cfac8514', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '435be336f39ee9e1f4cb86f8de3243ceb58bd66216dc05322a462124931fa437', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: 'cb07a9b66720ead263ed65925d38c74bff9f0b46930928b629925e9b66f314e8', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: 'a76bba4733a98113eef4d93659cf2a703a3ccefed9f730127400cafc046761bd', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100111, hash: '9b4d42d5f00af631cfab98430107277a252c2c7dfa9c1db804b08197e0409cc7', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88165, hash: '2535931f6d92de36da17aa608d6b2a045e01f6876168ea6d456cec0dc0d79479', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87389, hash: 'cbe914aca3da8cb053e5c97cff5c64d2af36d6bdb409dfb4f89bcfe1616766d0', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106246, hash: 'a3264f8e90359f1df2688de63fa97f9cc3f3019410e0aa8a19900b81b796fe9f', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89256, hash: 'adaf0a39c43c6605a0fb543103935cf0b1bd8b3ee9b77293b7bafd32963707f8', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87321, hash: 'a8a6f47136587ef341f2831eb1628a1812d8f323fd291b50255e43fcc2593031', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84213, hash: '3b09609221e859aab1e53521a3f7726045ed1ed17554f7cfe3cec5664a677add', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83990, hash: '65db1f3eef1bf3deeece638fa9355def4ee62714f151137438a57875779a8e35', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120074, hash: '05906ddfbec9d30130f89816f604a4509983ead0f75122dbe0bdc754bbb99375', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117382, hash: 'eff5eff4394c87fda8744c3c7d7a1adcc5883e8ba7e00d490eab66d4af86213f', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114173, hash: '3b1a11708c4cc19c88ddbc53104974ceef68d90d6b0ed6380e95758688f76420', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88145, hash: 'add1d7e3befd22e8f5c89ec4146f0766d9b3e6417f56a07914cf9d266778ecb1', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 81823, hash: 'e47e93d7c6ef4a207421a414a311abb638bfb6ae201c703947d68a345bfab606', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85403, hash: 'ed49c78d7908590a1c13799747e8b8347d960954e38ea958d2192bc3ab16867b', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83419, hash: '7dce7274e7b5f3196b7573564137a7d1b6569f2ae3825e08669f2618d6f5c0dd', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97094, hash: '86226d3f80b5748092e5a57e9b7de3cf92abfc9c9c122f82a42654210dbac148', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97026, hash: '2252c9650c273953cc20c9f8eeee1298a644e7ece71be2f919d3a89080f04278', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99786, hash: 'eb88d2e6f36e97294fb441c3c585306e956d8ff15612d157debc1c676dac274f', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104628, hash: '4f6e84e5c23a51502dc57b5c9a63b82aa827c9e5d7ff92273041a3958e80a136', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: '23aa53d5c56ab634d4740066f3c3340bd3741f05363aede38063980729a36c1d', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67118, hash: '2825944741cb0bbbe83e65f6f99a19230561ce462c6a606339d54d176c736cdc', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88897, hash: '3f05335d66d7301fa7afb55c3a88383b291be371443f3d72cf978b1769557bc1', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66678, hash: 'a2cc0f7891ce8c84f6531cd4c2aa0b4633abdf5a4ea16b7d028db6eee510acdb', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109240, hash: 'fd149e27be18e5a9ecfe9967303fdba44b642547678f91701aff04e00a1f3e75', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
