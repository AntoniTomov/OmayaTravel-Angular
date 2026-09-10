
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
      "chunk-jc_-zv-I.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-B0SawwS5.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-B0SawwS5.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwuNymWC.js",
      "chunk-CIMHgEdk.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8BlKxo-.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEYPDoK2.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BF0ZUjzw.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQXFqcj2.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cPO2CBWw.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Mm6WTVUR.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-umnjOpE3.js",
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
      "chunk-CeNeYYfo.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeNeYYfo.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeNeYYfo.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeNeYYfo.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeNeYYfo.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNb_dnKC.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNb_dnKC.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNb_dnKC.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNb_dnKC.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNb_dnKC.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Nn6-2__y.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNb_dnKC.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Nn6-2__y.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yRYZODwP.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yRYZODwP.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yRYZODwP.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yRYZODwP.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yRYZODwP.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yRYZODwP.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yRYZODwP.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yRYZODwP.js",
      "chunk-PfukwCsJ.js",
      "chunk-DLsHeI-j.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4eMpGcRw.js",
      "chunk-CIMHgEdk.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4eMpGcRw.js",
      "chunk-CIMHgEdk.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4eMpGcRw.js",
      "chunk-CIMHgEdk.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4eMpGcRw.js",
      "chunk-CIMHgEdk.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4eMpGcRw.js",
      "chunk-CIMHgEdk.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4eMpGcRw.js",
      "chunk-CIMHgEdk.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4eMpGcRw.js",
      "chunk-CIMHgEdk.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4eMpGcRw.js",
      "chunk-CIMHgEdk.js"
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
    'index.csr.html': {size: 16185, hash: '1f757de192a1abd6a7d47f0fd5e0bfeebbc33f9c39b338db9560da394bcafa02', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'a58e9d6c833770e0e19b77edaa4939aca8d33308d9a74a809293e9055b88b8db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 99263, hash: '63c21c6fd689206e4d9704b6992fed18901ad88de3b0da40b2b928f858d31bb9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 78942, hash: '5e067deb7c586a564b23b8575cc8150595508df90ecd20bac2ec27d1bf32f762', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 61689, hash: '40541c69a181e548e388a381db7d6c3d4a0b6fe697e5544b0de2f852b849726b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 75580, hash: '7b5a32a2c5590b517bc7530ce415cfb1cb120d8305cab6d3156e7e5df3ddb5ea', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 68840, hash: '1319388439b204b52bde31af638293afd7511f3c1ba51e7fcdb2a4c837311b85', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 70981, hash: 'ca26704523b9b8ba0c9108b069fe59e60601a8042414a03c2a74da308fecb293', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 69085, hash: '3e90faebbcbc14256767f7272c20c1cb2020077462ac65d0c7148ef417df1ea8', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 61389, hash: '8a9e98690042102662aa8e6740e1be7f780f3e19278574dc417d3189f0a0f285', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 74880, hash: '3e8445321fb60990bda22a675ea242c6a6a6a242399cb0ab199f569fd6367730', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 72486, hash: '79b681c51eb29a862c1b40631c217feb37e3abbe1ddebab71f7eb45391cf6b7f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 73957, hash: 'de0c7b908697bacff12519113c1763f17d670c02aa8fb1bab1ff6a4ddc1fbdef', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 77759, hash: 'f8b027b0091999568c81b8d57f0176a40551f6bf445683a71c93edd925dc9a2a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 105075, hash: '99a0ad0b70af99d61b724789fa5fdb59eb6ac11e58cdc0e0e9dd1c51782870b8', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 114923, hash: '73764b40f7ea6a659e836cdcaa9c24fe717e8470d7437f16ea762541b6584c7f', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 115162, hash: 'f53f43687cea1571324cb1ad6141597557cfdbda70d109c64f8948429cf535cc', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 114968, hash: '04284e0ef447053ddbbdd73e84442ac6a1a2722cc585b87a1fe8830452ea0595', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 70988, hash: 'd59a344d9a6fc1b25b5f067bd47341bcecb545195d797ece7a5fbe29e3abf29e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 68339, hash: '9fbcd79fab31bf646af7b0ae29d4922b3ccb52c2ca00aeba1dfc23af8ac6ce61', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 76725, hash: '1d9523e526d3268673f63b515067ada6a77b7d56a52994db89af0b947dad3204', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 84070, hash: 'c1fc2cf581b684f438e01357c8349dd7ed32a72e65ff3e8d06ba4e16cacb6364', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 83849, hash: 'd77a9b7aac3909b665091c0c489ab3a5c994a71f334edb1ae8183f7ad4e65359', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 100665, hash: 'b95db41580417f585634252acbe5b989adcb56a2dda731d9b539c10ca2a52b2e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 90483, hash: '905b0d4282f70a0dca8c4bb74e27fbe10a9b69d9682f7b133fbeb50723b14225', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85251, hash: '129e0808f1d18ee57cd5698c3b89777be6bdd494652f7871b838442bb2991bc3', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82175, hash: '4a4e8df089820db31082552be477ada866570a6f60c0e89560784224a1bc2a9a', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 81952, hash: 'e797a949f61422f3faf344b3828a23f0b89757d6f6a22d8097053d452a57347f', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 65044, hash: 'de7981350df25079ab9c8656a1d72099c28b21146a5b93d070153d04cefcab49', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 78289, hash: '2de650b6dade6396c11669a3bd6850f636a1fcf1b1d1dc553d038f17f914c181', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 79352, hash: 'd15ec4089bf32720cb436ef1a4ab7589927a3fe7e6d1d3a8c9c2c406beadd454', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 94933, hash: 'c8401863e66106d9edac387a22a1be01c0a43b529b8bb0db8ed5f49f5507ef34', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 87168, hash: '8a3cbfcc4a63bc085755138e65430c7768348ebb01a54c115c8ecd3512185d55', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 112109, hash: '5bc2727b079f9b68501986edcbef57e0ad76b9823098b226ca92288dfc6cf306', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 105783, hash: '8e02ef7908396e5d6690d52628781aeb6a81fa17c223c50df401c0155850722d', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 83960, hash: '60e22d410e32a7764f57c6f23b888c35f6adf8b891f91a0d31acb53b995bfaa2', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 82787, hash: '88dc8600e902ec2aaecda006af2e9564b2221a23a38446c5e6acae7f5190f509', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 95222, hash: '0df727099d2088c660e9dbc724aba567fc30cab31682490a4287e9097fa8fafc', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 100057, hash: 'a515fd39ac7e4c186231ba659a661d3302560bfdef6a9e5dd63cacff499b1bb5', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 59692, hash: 'e2f9e7006055771bfcd8ac3d8e08f032537c45541d682ec412a710040d52a3d0', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 61768, hash: '7cd5a026a3cde67e6a6340c18500342e1c137aff4ac12ff39c26d31d589f5b16', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86631, hash: '2f5b04cbade8374e47f574049934f23a6802b3ad5395f49082793d04ef531779', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 64617, hash: '0e0f8c813124edec31b23d51dd2df3cd67e8baecac0f838f87db57a4164fa3ff', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 103938, hash: 'debbdbe90e5cd17b73a1975b004be8e248050fcc96e8b79924220d4af9bac936', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 111595, hash: 'a64a8e5eb22b4de0f0d9d9d25fed0f7a0d21da438ac314ebe91881a8aed557d8', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
