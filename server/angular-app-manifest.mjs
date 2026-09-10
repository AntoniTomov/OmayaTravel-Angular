
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
    'our-story/index.html': {size: 68840, hash: '1319388439b204b52bde31af638293afd7511f3c1ba51e7fcdb2a4c837311b85', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 70981, hash: 'ca26704523b9b8ba0c9108b069fe59e60601a8042414a03c2a74da308fecb293', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 69085, hash: '3e90faebbcbc14256767f7272c20c1cb2020077462ac65d0c7148ef417df1ea8', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 61389, hash: '8a9e98690042102662aa8e6740e1be7f780f3e19278574dc417d3189f0a0f285', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 99263, hash: '63c21c6fd689206e4d9704b6992fed18901ad88de3b0da40b2b928f858d31bb9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 78942, hash: '5e067deb7c586a564b23b8575cc8150595508df90ecd20bac2ec27d1bf32f762', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 61689, hash: '40541c69a181e548e388a381db7d6c3d4a0b6fe697e5544b0de2f852b849726b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 75580, hash: '7b5a32a2c5590b517bc7530ce415cfb1cb120d8305cab6d3156e7e5df3ddb5ea', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 74880, hash: '3e8445321fb60990bda22a675ea242c6a6a6a242399cb0ab199f569fd6367730', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 72486, hash: '79b681c51eb29a862c1b40631c217feb37e3abbe1ddebab71f7eb45391cf6b7f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 73957, hash: 'de0c7b908697bacff12519113c1763f17d670c02aa8fb1bab1ff6a4ddc1fbdef', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 77759, hash: 'f8b027b0091999568c81b8d57f0176a40551f6bf445683a71c93edd925dc9a2a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 70988, hash: 'd59a344d9a6fc1b25b5f067bd47341bcecb545195d797ece7a5fbe29e3abf29e', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 68339, hash: '9fbcd79fab31bf646af7b0ae29d4922b3ccb52c2ca00aeba1dfc23af8ac6ce61', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 76725, hash: '1d9523e526d3268673f63b515067ada6a77b7d56a52994db89af0b947dad3204', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 105073, hash: '5477715c9d3deb5d0ed4854d97f979e9be70bbe4397568b6c1bd6218ce88b944', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 114921, hash: '95806fc4939d7d9a74cd57287806779bebe3f7b97788d029be9a8a15c5118ff6', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 115160, hash: 'b26164d22d271420fd5406bf80a515b3f7e55799df708b28a380efaf23a30636', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 114966, hash: '86adcc844483fa59ca59dce0dd330751afd16f0d7e80d05333cc2caa14a76a8c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 84072, hash: 'd664ae25deda04f92c374eba320e9f60fd48f593d8dada0bc98fbd12d8e77add', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 83851, hash: '09c84e19f5f95200f9eacca84b7fbd4726b2f7b7d6f5f06293c2d203c6f8e24b', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 100667, hash: 'ab8ae4226b93217e98a27e866730472520e88f08555ace7e472ee98fbcc26a69', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 90485, hash: '885186a9250f83aa5479515a631b34e44f47cb4b317a0782b1acd58cdeb2f3b9', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85251, hash: '3814335f47990f9587c0a5c3d2396c9b9720b1e8a66bc868640896b85557e9fa', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82175, hash: 'aca73aca0089ccdc7dce4770fcb81a171ca5fdb75568ee9c6fa748426e71459e', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 81952, hash: 'a225d0d4a1e0e784303887a39584513b32c16dfc67b4ce8564435856b1833dcc', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 65044, hash: 'a3f467ab05dd1d8395ebaa974ab5fbf1b52153ac72dd92bc13d7df356be0ecbf', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 112107, hash: '3c1d96de7151a207d1cd5e7e53a8998666a8f815da0d7d493a40cc4abedb8c7f', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 105781, hash: 'abfd7496e064c21338e4ef47c430cd03f37ca2f5e0dbe239550a97535ba2db77', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 83958, hash: '145e7754f1a36d5ab5965de6d1ba70d646c6c598fbab1de428c9e2e4304b06ff', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 82785, hash: 'cff400da95754921336ff32565f46230350696a486b83abfcb15ccfc4c1fe703', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 78291, hash: '3f5bf0aa58bbc36a11221e0b0e5321cdb26b5b61c7c0a516963e816e307f4226', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 79354, hash: '10db51e4b375a19228e466ee0682f8f7807beea96b35064aaebd3ce9bfed8a1c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 94935, hash: '76f52a645986b9e208a05d6478d5c7acc4ac949a866f28ac727f4fab74adccd8', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 87170, hash: '0ce43e062862f0498507da3f767b8afaa59514516a0a10edf14f7934a23028c9', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 95222, hash: '939a08a37668e160cfd8ad1f0b3587c6b7a7756498ef47c90602127944bf95be', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 100051, hash: '237d52be7458c1ca641fef9900308ae2124cf0eb597594c924fada503b95c232', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 59692, hash: '0a3988346e1ac5b44b604d89527060debeb639a291a89c518df2201b8568b151', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 61746, hash: 'e8e32a67788b5084b0818c844bbb0769ce670922cecf5f20aae936e844b90b1a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86631, hash: 'c3f7d6315970728f79b08f7376912b061bbf6f63047007f0689f957e2c403c18', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 64617, hash: '8866d83ad3ee8f9ca80c0c3b94072a677ecc63d0baff054653d10ed28bbe6d76', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 103938, hash: 'b7740c9c0de752c069e1636b24a574f4b1dc4f8243050c03e8653b2e2778fdfb', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 111589, hash: '81817d2e6529fb586daa7540a446d764f8680ed57a221c3bf3852d693da498f8', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
