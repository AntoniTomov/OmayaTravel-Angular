
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
      "chunk-DBSVjSsb.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CJkO13HN.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJkO13HN.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CrL8YPsD.js",
      "chunk-BJEMVGA5.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QBSeW3L1.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQFTev9u.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQVltb17.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7xKYdgE.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-caghyzMq.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D1lO_wLY.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BE0BWrBN.js",
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
      "chunk-D_VYk15g.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_VYk15g.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_VYk15g.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_VYk15g.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_VYk15g.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_VYk15g.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BawLHWmH.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BawLHWmH.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BawLHWmH.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BawLHWmH.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BawLHWmH.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8HjR3h2.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BawLHWmH.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C8HjR3h2.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DwGefjbu.js",
      "chunk-BjGlaacK.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js",
      "chunk-Dp5U0lVU.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgDJDXSR.js",
      "chunk-BjGlaacK.js",
      "chunk-BJEMVGA5.js",
      "chunk-DIiCskZh.js",
      "chunk-aVKGYn8m.js"
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
    'index.csr.html': {size: 16193, hash: 'a7bb9004b2afc6ce60204c8496c218484e406eae0ca7272857ee49a6deaf9331', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'e40e48490de232267af656273dedd81c5fc1ace00e67c37e1ff7fb8ad471c68d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108277, hash: 'a17d95f216aff6aae5398e937639d675a7183d6e6ec02f13b11bc72d8978e4b0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77145, hash: '3bb06b219fe7f6dbdad185f6d3c3d8fc4796144ebc595e8b7852ad3b16ee38c1', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87864, hash: 'fae49b0d2dc0964dc9fd23ee54cf1baef9644aa7f17b5e477773f04bcc13651b', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64428, hash: '4a7148515726b5889f47ce5ab956a1e8f1accbc40fe6c5f08b8c07506fd4b878', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78517, hash: 'cb34a36cf98766664766ef8626e5b49103c44bc9ca895b91948ad913863529da', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74302, hash: '4b46b5d870dcb6f190722c85f249df6be3b668a46eddd101f0cf4d56cb896e42', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73533, hash: 'd3eefb7fb3ba996282734f626d2c0eb47d66958fdc5bd8f3c79a19fd98b6c409', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71643, hash: '4a36fd6512940a8a5e910627451a41f11f3fe8fe76af313f3fadf10ac78191c2', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64398, hash: '8839de4067f62e80d5897c663cd5a85de1b77db17420995c50bacd537a753b98', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77507, hash: '79c38c44b74e2aa1661ddda40d3442d2f03ea22f46877e7fb413296cc33e0579', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76708, hash: '5c292f6d7dcb9dd23e82f3a0dc54dd69b20bf90c7dd39553bc869bcb66aee0a0', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78752, hash: 'dc2a875f3c6062a7264589cba91a4df1650f67c64fa08a57fd1104391e0a1f8b', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110816, hash: '82a1d2563aa7e9f8f41e5038fecfd9b7f6449a4009ddbd73ec324814403cfc37', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117446, hash: '6e0477bea2989d0d4a54633fdddb639cf7d1caf9151a3f59136fd2d64146b0cd', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115885, hash: '08cd7c66a3e3e20510760706e1141388b5d0fff9c5110e431f45428bdb5928a9', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 115052, hash: '0776941de5fe97d9faa7fa67af800eaaa22a610fd143f9e80f9a16d9881dbb96', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114755, hash: '45637a6f9384bc9a2a4f2bf4c102c4fc4d7de6ac4bce9f556a9628e1940d647c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88678, hash: '71744a4ab5e9547dae5395f486d5b39f4475577bc0ff3cc02cc508866ddb6830', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100706, hash: 'ef024063b2b7535ca2869c85c8201823495c8df9328271d9295b6cd2cf1a940b', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88758, hash: '2f0e6f267189fb40f6e47ff575b706555fd25eaf3b4f7652ea8cdc01de41a5a3', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 97072, hash: '3d5143ab6a91c493bc457609fd8246a767bcef47c0ea41e4a2c2e093ec7fdf87', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105124, hash: '36a73ccce96e827653e364373f9471f2a7ff13d5389b8564f9f51aa943ba9505', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65228, hash: 'a916f7760d8dbca237a9c7a31303a29b59aadd2b247b94962043d909ee6b3929', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64412, hash: 'ca831d7949fc76744a3d9652df3bb77a0e0b10cf0b30d292a4ee0e4397fcf56a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84585, hash: '798fb1afed40ae88fa80ba0a1e3f7f56e6482507e0ced1ac27751f8e06b2a265', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67678, hash: 'b44c4cf39342b28b9bcc4c0e3e3ca1e9ed1a31ac79830506f583e098bebe133e', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89479, hash: '8cdb18572b3e6738f8922b25f40bb923c5dbd9992a153fd071ec2b39fa385022', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67260, hash: '4aa938004a49e79f90f1ddf133ab7faac0a9f7f524dd6e2fe16f0b904675874c', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82497, hash: '1b523c942f396a78b7903b1958325a9fd0633ee56f0d149b742ef1f7ea9948d7', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78505, hash: 'e7a8cd3a88aa6789d0fbec843fd0902180e0b4032dff13cc782500dc2d7f5652', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86077, hash: '4fbd34966697c9ba1d993941d71468bebd9c90576fe38ddcd12886e76f5a625d', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84099, hash: 'dadb248c49e94024e9d5c3ef9532cff54e6510acd997d732961501ae677f2c37', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87971, hash: 'a816b8317a07bf28870d6b985ff41ae3e5222d3d8a05605d7993a1835480a4b3', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106828, hash: 'afd19b350958128caac785eaee18fb4ec6490e8980c154d469df057d5f4adeed', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97549, hash: '372bbd271cfabf113a9f7052d52ded22cabe9a4f8447aacaecf3fa46edf59da6', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100297, hash: '12350f5320e5c98a48c53f41cacace1d424e57675d07484cf940b7303156bf38', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74514, hash: '2594ea940b9a3efad265489e40a3900fe31537dcb49dd1c722ad6b311a743832', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73367, hash: '194c8e094900fc9d2980fc94b0b1ada88ca945cc6338de00fdb7469979e0415b', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79451, hash: '9acd6e7cfb7bcbb2369c129ee49cdb2a543e895cd3510020ee3e75d0c507f757', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98781, hash: '9810a3d32d957798ac3fe82f4720bc68f6e8112458a551c73cd8c8fd300e196c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91343, hash: '4f63ff9e34279f8b562aeb185c8d7fa7451e6157969d352d8d16b47dc2edf93a', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87916, hash: 'a883b95a0c9bfe057a78d183c991ac4bd226664833dd4ddac60b937ce7a5c805', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84808, hash: 'f114e83d8f99041955b6f661ba526094042967dc257d963a8984ddff1d7e4a32', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120803, hash: '6c21021a01f9082a9ce15ecb93757e7fc9350ff59edd67b4c1504777c55278a0', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121042, hash: '1f4e0435c1869537fdc6698bd8a1c54eaba5920c5be7cb2bfc83db005dc77cff', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120684, hash: '6c19fb37bc4f97111ed4d6ff972e4d41c209b6956e92ad71a15ed5d640484bf5', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117994, hash: 'f1b261c29f13d9a491bd6116e3c1ba4f95162849a91df7b5eb38c1dae39f8e5c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
