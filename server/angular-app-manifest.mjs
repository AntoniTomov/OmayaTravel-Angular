
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
    'our-story/index.html': {size: 77276, hash: 'b901f63f200f2a02d18471d64fa8017cd30cd1dbe56fe33e1d092552b04a6a18', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: 'c631ccdabc7eab7502ea57e47529146ab2102c1a8d8578eb6d1c5f2eb67ffb9d', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '5ff7f542b3cc031da60ac0db5dd3da1690d5c87e01e9be255cecc2b90ffd7517', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '5d352ad2fb0e67b81ee2bcf0f5071bb7cfc27a10260045ebf0e1b8a4abd8404e', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '0191dca019d99bf290792696880af4b3ff04bdf711b594c534f1a8cb9a85527a', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: 'abf0011ee6f7fcacf2acec856c011a13bd4229d9a7e56a09ab447d4bb16fa762', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: 'e8a752e6a29192ca8b2177aeaddf445ff20c23cab7da2810d5dff179d17ecfbe', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: '998eabe0fe605c39a98f45233d5e23842483d53b7b1256e0762ae8d972c7d404', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: '899eb711e3b3381ef529496983d1d46263598ba40053abb8b80409b9b4caac34', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '96217b89b30d96346e7e3a539829281c98521e517d2b905f7faf42891759bc57', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '69abde9eb07fd159898c76bc24ab219ce21722b6c2ff833aa01711a90b049602', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '90cd62213a3631f978a7829ba9276beb3fc207c7b368f27314cc390c7d2841bb', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: 'ed63dd3706ba52af73092726d2730c0ccc156fa2e46ca08f474bf4a35351bae2', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '94dcc431a6c7db26b8217b059f6664f47d3bfeeb17f8b0103b89f032b75adc42', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112763, hash: '51b8ce527f94ac31b2831783fde79a870ad78cfa78b2b584f82fe9e192a13fd1', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103496, hash: 'd96fd90ee6babad5ba6625949a18a1727b944f1add01ed89dbace7fe200b895d', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105937, hash: '9babb4d941a53f953264ca3af4756fe4b5b15ff3745303d71b9a56759663bdf2', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114758, hash: '9eb6385274a7c3c1d86da0c18747c97cf0737621879d0d099a1485e5c435256d', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 114539, hash: '196ff9f8dc0d0b536f39b79243503a1f3f406ed1330702f8d74bce5fd918df10', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87970, hash: '337730830b2ee974a7f533c73ccae2e0c8134e788a64b279f385066091f7df84', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87747, hash: '88ca03d1212f79e162ac7283f8c365bc766f6a97d3b4b65cdd9f73c3a683c263', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70541, hash: '39948f89810cb4425d3ea42c2921a1910e89e35998c28464606e47b0d49b0f6d', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96538, hash: 'e896526fc7fa7eeed8c147f9f5d1c4195fa692403b3f317a155606c84467495c', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70019, hash: '9bf32b5410aa0c3e6b078db318713d735e90656c960ce04bfe903f0d1a4f5704', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118179, hash: '90f8b0a13e630f9a5c122b02f04b6a140a1a863eefcd1b8d91613acf3699dbf8', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93979, hash: '4009a9e65554a35ab9b50570ff832bf13c762ad5b63178162dd801466fdc3523', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107102, hash: '5383ea2bd6d93fb2844632fcf41b9f92226c8560daef2a42e72d7f2100f933e4', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94560, hash: 'b2b74a6228ae2550d9717fa77790b115e52cd01b1afed7b0ec7cefa79f2921ef', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93723, hash: 'caaa32745943d5cf4d7b21d80e9100e216d7fa47147d483af5c8bdf8199ff4d1', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: 'b808076fb17b0481550f9701d29b356f31dadbb810092af5f817e0df981d55bf', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: '2d74c99e9a66c4b538f1d5fb298f038cc05c526851dae2bb18eaa845b4999e52', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104457, hash: '85a6ae36c953979438d47aa345c3654f8e3fbf21dc87a14a08126b8edc29e46b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94496, hash: '5906857394d298a6d199bb39f7545e0e4925d71dbe5e824ac41fde5100ccecbc', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94417, hash: '45bf9fcecafc298830c145f262b4ac0ac59d743d2b55e98a82b9110ad9b02b5d', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102753, hash: '749794e3424eac8c082480ca1bc18444e12a25f75b3276b054ef460f6427acaf', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106839, hash: 'c42e505662d149b7ca93379a7d977ffde742e4c2a148ffc8b44ff95ab2635ea2', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 117673, hash: 'a74be505c8fb1343ef5addb7730645d7119eb5c1cc5fab7d8b352dd7274388d5', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111620, hash: 'fbae9aed02c8a1370f5e7f326b49372dcc03edc6d2d2c1b02d4a6267eecdeb76', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '656de2be74168cb885f7f853c377918c8870d138ebb67f2fd39e81de233f4a08', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118520, hash: 'd7b9feac5b12c0d60977cdb6a468192f4d3c98311c5a8569d6093abc2926605d', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120999, hash: '4934b672e44b9f60f5b69555dcd8af89b2f13213af9852a8001893211d933020', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119405, hash: '01965c344c088ebb3d78734aa7aec6c7d4cc4f1dd0fa5e77bb8def5937b83ff7', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118606, hash: '6eb9894d46e5cc8868012ac996ec4f9e7b4e755b4bc67d2aa138b1a5f39f37c4', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124511, hash: '1b2c12420625bd01efeafa5e7e805420af8071d22572215570bbb961cf2050ac', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
