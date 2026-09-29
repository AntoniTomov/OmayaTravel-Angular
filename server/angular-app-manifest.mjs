
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
      "chunk-PCI9caoK.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CqU4N9CB.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CqU4N9CB.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bf6Ja_k3.js",
      "chunk-M1GQdCnc.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1xumpSj7.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CbwkhZ2v.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtplJ5Eo.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZuUoDPe.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dv7cEJPh.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2ZFrpg4.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0_vFcQS.js",
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
      "chunk-U3jKc-eM.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U3jKc-eM.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U3jKc-eM.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U3jKc-eM.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U3jKc-eM.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6tdm28zI.js",
      "chunk-B8-iGRfS.js",
      "chunk-D5iZytFV.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6tdm28zI.js",
      "chunk-B8-iGRfS.js",
      "chunk-D5iZytFV.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6tdm28zI.js",
      "chunk-B8-iGRfS.js",
      "chunk-D5iZytFV.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6tdm28zI.js",
      "chunk-B8-iGRfS.js",
      "chunk-D5iZytFV.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6tdm28zI.js",
      "chunk-B8-iGRfS.js",
      "chunk-D5iZytFV.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dr3I76SU.js",
      "chunk-B8-iGRfS.js",
      "chunk-D5iZytFV.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6tdm28zI.js",
      "chunk-B8-iGRfS.js",
      "chunk-D5iZytFV.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dr3I76SU.js",
      "chunk-B8-iGRfS.js",
      "chunk-D5iZytFV.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBWDXzxw.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBWDXzxw.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBWDXzxw.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBWDXzxw.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBWDXzxw.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBWDXzxw.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBWDXzxw.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HBWDXzxw.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HBWDXzxw.js",
      "chunk-B8-iGRfS.js",
      "chunk-BSY0-aQn.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck3vXcpB.js",
      "chunk-B8-iGRfS.js",
      "chunk-M1GQdCnc.js",
      "chunk-D5iZytFV.js",
      "chunk-BFspieZL.js"
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
    'index.csr.html': {size: 16193, hash: 'd232a027efb7256760b5919f9c7598c65f0f51bae04888cbfcbe4df6f47d211c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'b62d8564f54917e683d74a9240895fb09b3d1e157e83abee6af11e53f2b320aa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: 'b274881a675e702547f3c84c8a48c3db84928c9b8c5ea1df90933328a7e9a770', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73720, hash: 'ae2d1080469f6c8fd9b5dc4d2f1fd4b733311411e6c504c749b3a7ebd38560d6', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: 'b684e0ba040aad75b8b6e4f2b1f025de82fb971b14c174cc3502867c8c7230ee', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '0aed68b39fccb4d749ef9fdf847107d711b74b41deab3c5abd149d0dd275e382', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '6fc429fccd06debbba643b7b0b0988eccf786605042ad5bdb82f050205035352', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '9d64758ebdec97430dc520f6a1f5f3bfb5f6728b8d939e4a17a0e2caf558d19f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74626, hash: '24741c28213c59752edf5fdc49a3d8a045e463fa627e15946cf2090a8ff7dafe', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78014, hash: '7d20520a3695ca758f4360dbfafe845239067e1e47a602bb9ac1f642c8bd81b2', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '00017f777d8ef1517e7f8cfa5f7c2767b289ee6f6b3b89ef89802ae016f63091', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '7887e3779e3669eb8615ed00551d224bc60734c152bab401870dec9062b15757', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '67e2395cf2c2d03b835af598aa9df2693fabf18f74b613f883504ca13a79c9bc', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: 'ac394642e888febe0883a9ae6db5e9780419c7255b6fcbc3d410139e2b7cf63e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116864, hash: 'b8aef6b451e2ed75bbbca722812ffa07c1a9b489be64af82854dafe498a1e0ff', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113473, hash: '205464e2fefae9108e35ac69d6eb1a3dcacf2e5d14b58de7fa03b54bf84fbb6d', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120193, hash: '09685797f9788e6fb95ce973b795d2ef0af9dec852adbb07f75ea5979ed4dfef', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120432, hash: '9fcf69d1d108c1a3c06c769d10057c70d44ad0ca06fb91ec956af51d7ed93158', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100111, hash: '3621596cec1fdb1bbd272638430b84d042708f0fc4ea06522cdcd0cbc2edf6ea', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88165, hash: 'c60abf7bb16dfb7cd832cf225f5a637422f376783f089e98f2de6676170452f1', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87389, hash: '980c66a0af01e71bb2e2458fba97db22349488fbfb2712573f0fc6f6f262c9b1', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106246, hash: '3ee88c97a4c3f400ed41de9b597fd977e1bb8526f1abd4e5c955c530cee752cc', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: '5b346a30b9d01636b961a6b14ee35647a36f4e130d5b5b05a87d82ebad6d0fb2', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: 'cb308e024e15528348687bcaa92655b88fc05b141bdde0df57a19fbf6704d61d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '723963ae78541fc526f4ae35f1b1a0c6573f80db5b141429ddc94634c2fe9a59', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '4432e990901fe82afa88688afc0444c8368ad07c525d5cc10dbcc2dda833e76a', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89256, hash: '78d912c40ee34a6fd208ebeb04b6072e5319d5a18421d756b5374098fc030dd0', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87321, hash: '2dd686405b2ad928643d0cb1c4d5079ca15f1080969b6475d6ba1aa11b79c8f1', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84213, hash: 'de3f0a0d980e74c6c850e93b32865c7adfafa6e1ed9b5e35b0f5a2a4a4c996e3', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83990, hash: 'ca02fd99cae26265b05ca564cfb96ec9cc27fc4f02f2d70a34d8d1dcf9b14a12', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97026, hash: 'a205928ede8449dbde5e121404e2ade90ae21e9bb9fe54094f6f033027375c60', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99786, hash: '990a9676da282d98e6d8fbd5b956be9752cac739bbb2c9b9f5721fdd702c5969', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104628, hash: 'ce11742018c3637f5c31b9587b3055b0bdf808b72502f02e60a2cb5b64667f28', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: 'c87565eb678d4be05a8d313def9b520a3e4aedad604b002afe0b331d0bc53582', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120079, hash: '2049fc731b4bf5ca7f956dd7617fa031241bfdf3f2b0bc35eb31f2a5945107a1', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117387, hash: 'd92a233de6d79ff01c7edb603ef1225c910f2476f03f089c995ba8089f10150f', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114182, hash: '329bdef789f317a66d22b6502335d9b9a06ea8b9cd7009ee4c7cec61c56f8135', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88087, hash: 'f58e710eb362868a4f6e175b7d653df648c5c506e7389a56370cb6a898db48eb', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 81823, hash: 'd669a89db9ac1c16bd597d36c7357c75825305684d214958b72d6d6bd81e7172', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85403, hash: '37dc7b9fa882b2b8068ac4c4363076c1619a469162403627adc38a3f3bce75a4', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83419, hash: '6e2b0b32a7c7856e64849c302ecd3db9c2ef6a2c4881e566f85e0644398d2ca1', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97094, hash: 'b1b3743ab3a2ab26ccc3a2e7a2b3e648351f625d2815182cdd2b266931ae4f1d', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67118, hash: 'c7036af87f694f0c1d5ec98b3f44ab272e6d01086015ef54f217a3d15954f7bc', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88882, hash: '1ab1447fa9b2d03a5ccbbefdbbaf0a3de30422ff3abf9375ce16d566e45a0631', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66678, hash: '5cab7eac21759ccb4fbfcf2b57abd217c61ca5e0b35c189d8245d4d3f280629c', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109240, hash: 'c63f1849b40bc909dddb443cbacd4df955f9a5bc124b1f293974edf2a4d29043', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
