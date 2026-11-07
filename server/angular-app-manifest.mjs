
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
      "chunk-CnFhe4rE.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-9kiVVV5D.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-9kiVVV5D.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5S9sZLK.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvqMIsEb.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CzPuM5j3.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CChQHSMm.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D04AeT0M.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-x16lXe4s.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-fYKCWUDe.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BBo9R8L2.js",
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
      "chunk-DWkmRVsp.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWkmRVsp.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWkmRVsp.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWkmRVsp.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWkmRVsp.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWkmRVsp.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWkmRVsp.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaWhWftn.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaWhWftn.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaWhWftn.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaWhWftn.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaWhWftn.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwM77c35.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BaWhWftn.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwM77c35.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DIHH8UFI.js",
      "chunk-DIYVKVHV.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYC9zv3D.js",
      "chunk-C_8QSwij.js",
      "chunk-Du8eq3Id.js",
      "chunk-Dk89skoE.js",
      "chunk-LFuMHdQ9.js"
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
      "chunk-DHDrso3y.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'fb07aed6d27ee15aaf10eddec438833e3f1e45bc9ee7323a40623564e6e39d3d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '4c491ee4b894f4c0354a766f40c87d572a1082d5680b4c4f0df36c5460728f9e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: 'b901f63f200f2a02d18471d64fa8017cd30cd1dbe56fe33e1d092552b04a6a18', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: 'c631ccdabc7eab7502ea57e47529146ab2102c1a8d8578eb6d1c5f2eb67ffb9d', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '5ff7f542b3cc031da60ac0db5dd3da1690d5c87e01e9be255cecc2b90ffd7517', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '5d352ad2fb0e67b81ee2bcf0f5071bb7cfc27a10260045ebf0e1b8a4abd8404e', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '0191dca019d99bf290792696880af4b3ff04bdf711b594c534f1a8cb9a85527a', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '937f0a4ee74f4e9d64c5b5b65d10ea99433f9284b7f6e0fdb6d85416ccd40b56', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: 'c96032546bf002f2345e9fb9e98ba99a960e57c84d026750990628a3161a9e7a', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 96881, hash: '1645b4f690fdc8a6859c829c597dea3a9336796cef7902595bf53eacdee3486e', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'da31b2597a15ec7f0aef6a549ab86217f9b1e0d639d72bfff964f0cbe8042f9e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: 'e43bc7da7a3307c00c39adb8b343403a10b08d6d8b3235c1bdf993fd8d816ee5', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: 'c2e9742924536d206f983b7d431d7413755193aed05fd60ba834ecea8f4ad095', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'b9260a3c64d3dc0b4b55358a32cd2bcc9649d7d3265a540e51df60d7e1f8c611', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '18b1c0c6d768e5cb2d284a824ffbdb42100c790648832fded52ccc8e87fc21c6', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: 'aea3a9315357ff2df192c2c7ed01da9e46d31dabcd4a0bbfb35599e450b0da91', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: 'c6f471d66ab2b94eef14b26013c3e6976596b5ec68751796e82b5deadf9cfefc', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '9b00a66be625662e0629cba99ee3af9ea76e9076bdf7223b9128f5b593251820', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '4e71e2f8a40b8cdd3ad47feb5059e213c6d6e0ff1d9695210c39868502938924', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: 'fa5b627507a0728bd55420434ab8ea3d374db3fcaec7ba832ac9f77eb67a6f41', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '0ea1f86d456a58272ed3feed8d9e08489a93b7b373e4a57f689d3792f442ea40', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: '304bbd27c89552df008f604fff181001e04214c593bd40f6b61adb786822daa9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: 'd41351546bfd65886f34f3f2e32d9a8fb26c9d90209966084bb5b84b3637909c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: 'a646f9d748479f12a1467165bca482cb7d44b574c543dc658947b373b6ad2085', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: 'ecd30c5c425242bcf788424e67b2f016d33e696305bdff525b6316a340fc1352', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '178604c9dc684fd79fe32d3d7a213c903d4457eecabf434386f8bcccdd331efd', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112763, hash: '316569af5786eca1f10d50e7a296875a8a228048fa2377de492b40da4b3e702c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103496, hash: 'a54115ce76940b5358db9038c42c862922ce23626e9165b1dbd2d51d5405c3f5', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105937, hash: '4148f189f3c6dbc2f1c7eccf66996b1af961857d72a2171c0c9b53775dd72c5f', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114758, hash: 'b0c9357105b2d2e7916964e09f5743d3c53e4093f0ac4af3a58db2583aaf81e4', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 114539, hash: 'c80c46cd5dc46067f69a7a5095db67d4b3a3d90451a6a94a4a17fe5b3e26636c', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '6d465b4486311cd0785f655205039d6dc82ec3f3181d85ae3e346bef03724d5c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '0265fdd39bd40789ee28c7d1010d85d7860895b363a34befa94169c56c4edf86', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: 'c93093c3beb27493520de875afc7edcfc84e9736256f7d54890d7eea93957da3', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: 'b22b7e76aaf4062a9c75e01a34bad2c9e8cd199c9d7b0339ef4e860594736e0b', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: 'ca4dc7e6b9be7153f8d1cf8a5d8ea38a1fcc70c6840d97df072744bf6e7b1eda', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118179, hash: '09292ed864c0fb89dee7378eda2dff6ce91277ea325fc075cb0804dcd11b0d6e', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93964, hash: 'ee2d3fef12479750c8e0eaa908ad18cafb9845e3132bf5a2309d29aa1a4078f9', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107057, hash: '1cbbd95ed68801194f29e09ec4fbea6898fb410506790468e8f5355e579159b9', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94540, hash: '31d211855b1c3234363b27dc1e1b42c633406a5909e41e26341bc6e9d227fb98', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93708, hash: '88b2ec3b25e5505455e31c275bf9e5779ba4740112dc76979bb916ddba91cea2', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88131, hash: '0ed2945ba60d879e435780b03df8b389b6f7714f6815488ac5a1393e6925306c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82534, hash: '86a9f7035e82eb1b193a185c06f9f894c1cb53b22ade8f6a6c0e0a13dc4006d3', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104478, hash: '4c87d9598ed847a49933671c3b69de4fd89faaba95fde36fd0a2708b5e561034', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94509, hash: '7385cf46950907a1d3ec83c89a5b971e6d8b6e53ff2878e0eca5ac9b95f739ce', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94430, hash: '693082a7ad4377cc0a0b5085f8ca6c93f0af3b90dc652edf231ed19e53db10ee', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102596, hash: '787a495ef8c012705c8474cd2467fd67b540a9350db7acf2b998f49aff9f8201', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106630, hash: '59baee11b3f318509ad5d7d3a8e48f996583251239aaff70cf0fb6b9baa35089', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 117390, hash: 'f865a25422043eef801b6798e1c624feb5e680e606208933141626bce4a916c7', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111426, hash: '16c5fd04083b0ebadd8fa903707ba290a75266531b89e2e7bd7a5aec8a617bd7', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '9c6c8fccdef655b3715d25955e6f291748074e7e11a36601c1d7053da31634f5', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118520, hash: '0c074417cf65b7508676c198d77a036d17279b72a952b00b733b17f30e048683', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120993, hash: '42731c5d915bafcf3e8dada5b3f2b45e9acbb3872fa3f76dfccab990d6586a94', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119405, hash: 'ff46520d97132986a0ba9716c34da297d2860854d617b5d344c2e148f2d80459', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118599, hash: '1069b9f553ccb134f7fad178fc2432fa9250f565c6eec0c671ce44c05ed4b300', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124508, hash: 'f4dbac48136b219f5c936b8e6cdd81d36e2ba12a3890dc88191ba5db23e3bc71', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
