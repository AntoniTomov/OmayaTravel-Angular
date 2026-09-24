
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
      "chunk-DVFVXA-w.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-0nVCz9CJ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0nVCz9CJ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXbtx55c.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gkkxQtPP.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DN-sWrRm.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CMxrj6k9.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQ9XXzg8.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-c4TqSlBb.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SzAOhrY6.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CewBf23x.js",
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
      "chunk-CgjKKHOf.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgjKKHOf.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgjKKHOf.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgjKKHOf.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgjKKHOf.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DCshEgCu.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DCshEgCu.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DCshEgCu.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DCshEgCu.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DCshEgCu.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYedWZCg.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DCshEgCu.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYedWZCg.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f61mextS.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f61mextS.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f61mextS.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f61mextS.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f61mextS.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f61mextS.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f61mextS.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-f61mextS.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-f61mextS.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-DRpGNy_h.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5PwQ24S.js",
      "chunk-CypjeCqx.js",
      "chunk-BdvSq9ds.js",
      "chunk-DIVe9TXD.js",
      "chunk-BIZ2cVgz.js"
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
    'index.csr.html': {size: 16193, hash: 'f755a1a09c8da01d720e6b86f67fcfb3973f81011f0c2dbeb803e476a423464c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '96894e04904d9173e7b7b67ebf7597b63aa3a1ad3045720485858e5b4768f2fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77935, hash: 'e73fb744805ce62f7f9978abe087b3414d5dd5c71dffd52f2b2ee35a98caca37', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '9036b4debdb6157cb79924ede83681b4c987ab33ddf2dd02465781361dc7884b', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '680d42cc8b923eec6d7110db053cf5791b0257400121f35f883e55e72bcfb469', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: 'f846e74934b515926cfffacd8f200651cb1deffd362cc4796c388b28e0b08c7f', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: 'a7a78d03ff428d7a2b0f76bbb784f4406ea0f4d567672fabbe5e9b2bf9c66e26', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: 'b2c18b3138daff97e8b41109a72b326aabb878fc258b6650befd0cef76ebd7a1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74626, hash: '766415da317cde6301438c327f9883860ccb565ef9dc37af009a0dd1a6ea5c69', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78014, hash: '576e582107ba43cfa8dc213f163013a41c52f3f88304059ed4ae21cbd36099e4', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '4853d0b3941319b2cb5200a59d7c9722d02322aab68030256e42f191cf4ff34b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: 'e28dc8548a336b5b97d9a98397e7fd32a238a17184c349d7280596d513de65bc', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '9088e8ba0b09f033dfcfc5fb5623ec8e5d9f95c61652e0eacf472e9ef94d9c83', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '44b8cf619ad7eb7c81ecbeb8e696e3fed6a70373d7b6989328e9f7ef2097e083', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'c37fd25b590337c85ee25a9d4ad0662ba9f8281f847cd97fc93b91b79c50e416', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '21962810c3518d3ca06f55adae0bf772e98b2d9b375fdfb41213411efd245e36', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '2c075f24700c3845185f3e488ae558e102c8cbefb0b2e79dca92b178fd593978', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '3e38134b202bd3c88cc5d3473427f10308eb23612a1c66a129cfa611bbca4193', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100111, hash: '33bfa8f27e14e0fdc659a40cebdd133c3d64f620641fb48f05ab1076cb67b5fd', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88165, hash: '2643c7118db9b8fe89ca0dce3acbdf2f0a80c47c93a505c7a7a93dd3deae6747', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87389, hash: 'd5ca6b31d147d58ca9ee28e9d2599f96702ab7429ffa424069fba4f0d70eb3dc', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106246, hash: 'dbabb02fb05571e5bdc851140a03bfd99bb4464429e160cbe8e5eef12a980e54', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116864, hash: 'e8be4712dd93080bc6424e34d68b28d9cc0e51453390ac5bb776019800901477', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113473, hash: '85ff14a6c48ade74596b4735f6e55244e6fa2ac32a40b340ac029e97141d84e4', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120193, hash: '00572815f8454be35184f1bfdae28964cb49e89d82bc9b10084439381affdf1c', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120432, hash: '747e0cdebd984208208a899c168bbfc5bd3c20a0bcfb68bfd102afff0532ca62', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89256, hash: '5b7e0c441b37c8069477ec08f2e490997b3e227d53a80bad8275b6048afb3631', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87321, hash: 'c18a626243ff8714bbfb4e88981b3462f92c18d50ff7d29b641c56577fbaa19f', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84213, hash: 'd0436559da159439200983161a85ba97fb231c6c3d247a88aadffaedae99a994', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83990, hash: '0c4d8297dfebff93c3aca27d64f2da655185f17496506fc453b9656f19174a9e', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 81823, hash: '766cab6957f38fd0baa41371b525485508d3634234ba11fd8087fee5cb695710', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85403, hash: '2fa0e7010823fb1d770eed86892330c88d499cb3ec0beb2b214c54f78a13015f', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83419, hash: '057e73e5d15eef6b2ad9ebe133d19344e75359f4af30cfb7b9570646c9214111', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97104, hash: 'f505d5e6c24c806fd75341a1ea25ce12a80d1a048bfe7d0e71d4597a2451019d', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120079, hash: '5fa511ae562dc914c46af13b527e06bd24c9dc1d31b22bfedea682f93e33fb85', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117387, hash: '595e72b5982a7b782d6601840c963dc8dee00c0069192102adad446de73e323e', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114182, hash: '158a326e7be0aade2b7dfde9d7be685cbc4cc6775597f1763c008d66055691f7', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88087, hash: 'ab2d4f4605d57f58b34053731967cc7208d764d0aec1d28c8a7810b60f0898c1', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67118, hash: 'b6493df889a9c5b2e6d15e7d31ce811c2d5b6be1896bfe4214e7087d5f5c3cda', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88887, hash: 'c7652d4f7c63fa5199867d7de873fcc0892fc51b73ba676362d71177616495b1', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66678, hash: 'cc579451db5a76bc9ea0719578bebbe2fe95284f7afae0215f75def3f480cd67', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109240, hash: '418173c554696f103e3ba876a8f511c5ab78e05f1bbceb49f61ec426b2ba2041', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96967, hash: '391c104d61df8b54633355f4fbe129652559d1b18def589f4bd5afe9eae00bc8', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99734, hash: '1d9ddbd6466e936f084a145fd0f3c199c7bf7cf840a0454083528e58f9af4d1c', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104542, hash: '18d1bee4a7a49f4facc3bf5121e5b29ae8f2c4f803d3b394b62f6485935f56b6', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64646, hash: 'e40ed65a271e5c9eeda7171ccb5799657f1ca232fd5d408bea1c4bc2841114d7', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
