
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
    'private-tours-your-trip-your-rules/describe/index.html': {size: 74880, hash: '3e8445321fb60990bda22a675ea242c6a6a6a242399cb0ab199f569fd6367730', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 72486, hash: '79b681c51eb29a862c1b40631c217feb37e3abbe1ddebab71f7eb45391cf6b7f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 73957, hash: 'de0c7b908697bacff12519113c1763f17d670c02aa8fb1bab1ff6a4ddc1fbdef', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 77759, hash: 'f8b027b0091999568c81b8d57f0176a40551f6bf445683a71c93edd925dc9a2a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 99263, hash: '63c21c6fd689206e4d9704b6992fed18901ad88de3b0da40b2b928f858d31bb9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 78942, hash: '5e067deb7c586a564b23b8575cc8150595508df90ecd20bac2ec27d1bf32f762', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 61689, hash: '40541c69a181e548e388a381db7d6c3d4a0b6fe697e5544b0de2f852b849726b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 75580, hash: '7b5a32a2c5590b517bc7530ce415cfb1cb120d8305cab6d3156e7e5df3ddb5ea', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 105073, hash: '5477715c9d3deb5d0ed4854d97f979e9be70bbe4397568b6c1bd6218ce88b944', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 114921, hash: '95806fc4939d7d9a74cd57287806779bebe3f7b97788d029be9a8a15c5118ff6', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 115160, hash: 'b26164d22d271420fd5406bf80a515b3f7e55799df708b28a380efaf23a30636', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 114966, hash: '86adcc844483fa59ca59dce0dd330751afd16f0d7e80d05333cc2caa14a76a8c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 84072, hash: 'eff14a2702b70a3edcabc3d3f0452e7d42153ff1aebf612a68dbc2ca0b922b24', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 83851, hash: '0da0da7f15740cce0d0a16ba0570cf0d6e4b145670ef0e6b528b3c5e2bdf4112', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 100667, hash: '46d5933d34d57d1654cf3465e84516c9254d94edab65f470785fb956151ef5c3', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 90485, hash: '13aeb997408294291c6e9bd8aecb6348c0fd51f4d51a9dbf7d801a2cc74d06ff', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 70988, hash: '92ea4b9b28e3ad85a8169fa51990e0269f83376ba15fb8cd7c90cff815ad7949', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 68339, hash: '49229b87a646a31dbb6200cd0a8d0e906d5615e8ba75bac6d7e4938b09c1066d', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 76725, hash: '895c181f28527e26b4adaffd8efc86dfa48fe8241a9ed205dd9036197241d6f8', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85249, hash: 'a9a29b3ff79d79b5738a558851c7321123fb18fec6d842355e1ba931183ec3fe', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82173, hash: '32d548e6af713d6107ca77b688dced17b2181005fad0aca3b6aba20ef14c3ac8', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 81950, hash: '002028b22d1ca5a549a36beee4986f6cccaa42cce8d1811aa6f9183112dd82c7', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 65042, hash: 'b0fcef24b45e3919170b0d652231f58a15fa3e47a862e825f82d2c4ba69220eb', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 112109, hash: '70d654d61dc4556b299e2c15ec36c9658454a84e8de7a54558b54108f655ffb0', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 105783, hash: '7b49bbe9f018d178ffdf010b6cfe910806dee68cff3664c9bc6699ed88a02e32', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 83960, hash: 'f281df262be7234c1c39589fc5ead065452090132e19d484084a54d02017e152', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 82787, hash: 'aa1bd603673e4d6ed4af812fdad448058018ba075a06499f2080de08117932b6', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 78291, hash: 'ee99f4d20cfe24a0ed9e782323833f0d6da38051620a157b776f4eb409962d3d', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 79354, hash: '57c4ca413f0e37e2bdbfafa54632c94da34581d208f3673c0445c528369f5fbc', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 94935, hash: 'edc9312e9233d0a2f8c7b5bef18f756cb5a063fe04b5db49d6376f76f83fb643', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 87170, hash: 'd17bdc98cdb85c767540eeeef91d62d9513ffd800afe8727ff47983571d1f1e8', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 95220, hash: '387d04805787764d5445803b5ce0e5d5610de590a06b4c00cdcaca52a3ceef3f', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 100049, hash: '53393d03fe6faa367ccc2adad959e98b6a0a1b3d6cb71145e80047b8ab9e8e07', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 59690, hash: '3585a16200ee20c36d9c7d81186a856dae10b33841b7c856356c56e44e149289', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 61744, hash: 'dfd87f922f42699505460ec16a33bd880944b49d95fb5810d059dda8fa307f15', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86633, hash: 'ccd45f843ed607c86c0fe1c98539f749c20b04e7aed5d8e8136d4e83b8fac9a6', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 64627, hash: '8367c9ecdebe606c105b7f294ac247a861d33146bfcbef61331dfac7558fb9f9', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 103940, hash: 'db3c24e355a01dc3ebc12086479721094a932fa6e66cb54da430c7b9b11474a4', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 111591, hash: '2565fb584843e749784cbeab329a74faed48e04a0dac8d53cf504c2a8a615ccf', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
