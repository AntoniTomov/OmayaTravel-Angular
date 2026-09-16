
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
      "chunk-WD_3XdK7.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DZQZBOcY.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DZQZBOcY.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFQ9enf_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JLVU7rnd.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_wCL5G_.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6Lkn_dx.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BbhgtaDb.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DjYhVskf.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZ30gUPu.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BN_nnfxw.js",
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
      "chunk-CfmcEWe1.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfmcEWe1.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfmcEWe1.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfmcEWe1.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfmcEWe1.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFxH284v.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFxH284v.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFxH284v.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFxH284v.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFxH284v.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BBflwK8Z.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFxH284v.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BBflwK8Z.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYK25itE.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYK25itE.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYK25itE.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYK25itE.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYK25itE.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYK25itE.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYK25itE.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYK25itE.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DYK25itE.js",
      "chunk-dRztZ1eT.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlNJwNJ_.js",
      "chunk-_OowTYv6.js"
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
      "chunk-oM0jm2oO.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16185, hash: 'd62462a17f3f788632792c562c4c26c94e4fca5a49aad71ce706f3e1f58a5c16', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '9b2d0a7c49986faec239ae183c25723db799deeee139439afd81bb09441c48a9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 71395, hash: '289d915a6c7874c51232d8c142dc17b6dc4b2f35dfd058178a098bc35928f562', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72290, hash: '6ede06a3b4b2ec687d77f2f715b4eae5d3b861a6773aeec8a010387c403f0f3e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 70400, hash: '8eee08b79801bacf441096f4d17bc8a8627ebb57e4566a0551a97b6f4daab1da', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63155, hash: '5c75753dcbb4d78c107b165bf08ebff91bacf5f82196cfca1897ca92f93f52df', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105120, hash: '330df7ff95da9816555a0007f0e44f1da3f8543a2853f556989cde41f9124018', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 83224, hash: '8bc113a231de8247295d0bec6a633505132cc54e86da0a8b1afa5af2066aac03', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63185, hash: 'cd08ca81d5d469a146f4a4406220526bc658cbdda6cd2829ff8d295332e906bd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77223, hash: 'f29e3fc242fcf7fe4a2334c9e4690660f5221f9693a2f4c58521d8d2caf2400e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76264, hash: 'd4d07417b23609cd742610b04b4635968e21c3c9194f7b9e9baf11f963798485', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 73809, hash: 'eb64a8b6626c1ce1ffece51560f874e728a81360baa820d556971b7aa95920e7', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75284, hash: 'dcaba57d16bfa8d7dc971b7f0eeff40506a9dceb8fd2b66d2bfc4735f98ecb26', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79091, hash: '3fd9fd4955675a09700b8c01c1959a9527d43ce3f309c769401266e934ee78d2', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 106971, hash: '6b94e4cbc066f436454804e810d029244421e3d8e53d23ce2ef4d9b59c7cce79', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 116816, hash: '62721dd8fa043967538ced14b9f7f27debae589192cc251bb63efb1f48830bd3', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117055, hash: 'bed4ab2d448998bf717bd690b1f5079bcffe64bcab65b47372e93cac7f9d4044', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 116861, hash: '068e7ce44983389f8906d875d86c9144c620ed8cb5dab5587ce4a15d142c49ad', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 85367, hash: '38b449426aedf8caa3175aef00c05349afa9b53a0f51fb16684345f6c08116d5', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 85147, hash: '29fd548c8a88d5bb92651ddc7d9ebf7b6738c9a136768b70e4e1f73ca32497a7', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 101961, hash: '34fe1a375fa56a57a79fce3936040d4a43ad55ca405d110204c1bcfda2e05f5c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 91780, hash: '8830fd89b392c612876020a4233c0225118f4b0890b4d1d0efeefa69f8c04688', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 72381, hash: '07b9fa9f98070d954b953865487e491da94f811820c76e735d8735f893d4c587', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 69732, hash: 'a2e04493d9dee12b810da227ab26bd6a108266d2cf342657c840e6ee10fc00c9', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78118, hash: '6241214c71fe7d394b35848258cea718e912fd68c9c0d6f60935f742c644f3bf', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 86556, hash: 'd191ef135413695d32074cb6c9fff091596fe47a049bca2554fcd74eec69cb33', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 83448, hash: 'f7f6279d0880fb80ac75d6869f550f39425b26f8286ef4d8b20315ed8b0957a7', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83225, hash: '0c93fc622fb29c4678cff0815a92077bc8bebe701370dd19f989b21dd90597bd', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66335, hash: '119031a0ec8b1e171f9c96cd2a49e920ed5f1df1d2cc67bd7a79b87b84f2a9cb', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 79623, hash: '0dcdddb182d0ec6b8bb46839034d2c86ce928b33c6e7c9ba91ad5e17e076436c', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 80687, hash: '5db1d371e6fcf3d05f5ab622743155cc3357cb2da1bf6d3e87347cad00bec77a', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96329, hash: 'e4a492a28128a9093cf24fe2f38917ff14792d1c1295f6ed1e11f52d191b26b5', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 88491, hash: 'e73fc9c9aed5ad0c07011824fdebf43f8ff45ddf57026149401844cb35c60c13', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114024, hash: '4b3ef3138b9510a36ea32c97fa2bedc4c7d1f463c09144fac0d9a1a00af2b556', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 107691, hash: 'd8c0eaf34958e7465d2d62c53c9b3b900aa85ba9a5e8522aed9245d9fd82900f', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 85255, hash: 'b2ed7daccc300665bd28a225b81a26a28962dc81fd1117ae4ed83e4ffd4bd3d7', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 84083, hash: '934ef85f0cbd0dc5a70e51e7df870330af9ee2a75f934becb6a564bc7d12c041', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 96529, hash: 'e16422767bf86c2a97c6d9e35dfbbfeccc28f5b5fb0e43301e5b7e6857d26ed1', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101367, hash: '34c73cec5cadbd32f6eeb1402d9bf2254170ae41a0058eb3c8dc55c7ae17fa55', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 60937, hash: '0d0422c0c5791ff314d559b6814c4da4497e11b83c888f33fa4eba33bd1880a2', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63191, hash: '2cdcf0d677c3a3560e2ed8c1b3436c08cb3867f7a9cfb12264dc529cccfd32e3', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88112, hash: 'c922116d65ede3eb09f8d001efc617d6790b55e1ca659935880a557ea35bb292', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 65905, hash: '82c6a26020359caa65bf975c9e4aa08ce260aca27b7a009b4d1f045cff8dc41e', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 105863, hash: 'e955646963f1451ef832eba804866344db4a5b290e6966a18132f6a5f560a799', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113487, hash: '4326b7422904a9e8e2a56acb3db66335f4667bf5362753438b97faea98843df7', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-YVRPPUEN.css': {size: 11701, hash: 'C7FUCYWyi5g', text: () => import('./assets-chunks/styles-YVRPPUEN_css.mjs').then(m => m.default)}
  },
};
