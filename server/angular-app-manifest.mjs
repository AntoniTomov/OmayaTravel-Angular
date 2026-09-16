
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
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76264, hash: 'd4d07417b23609cd742610b04b4635968e21c3c9194f7b9e9baf11f963798485', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 73809, hash: 'eb64a8b6626c1ce1ffece51560f874e728a81360baa820d556971b7aa95920e7', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75284, hash: 'dcaba57d16bfa8d7dc971b7f0eeff40506a9dceb8fd2b66d2bfc4735f98ecb26', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79091, hash: '3fd9fd4955675a09700b8c01c1959a9527d43ce3f309c769401266e934ee78d2', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105120, hash: '330df7ff95da9816555a0007f0e44f1da3f8543a2853f556989cde41f9124018', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 83224, hash: '8bc113a231de8247295d0bec6a633505132cc54e86da0a8b1afa5af2066aac03', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63185, hash: 'cd08ca81d5d469a146f4a4406220526bc658cbdda6cd2829ff8d295332e906bd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77223, hash: 'f29e3fc242fcf7fe4a2334c9e4690660f5221f9693a2f4c58521d8d2caf2400e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 71395, hash: '289d915a6c7874c51232d8c142dc17b6dc4b2f35dfd058178a098bc35928f562', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72290, hash: '6ede06a3b4b2ec687d77f2f715b4eae5d3b861a6773aeec8a010387c403f0f3e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 70400, hash: '8eee08b79801bacf441096f4d17bc8a8627ebb57e4566a0551a97b6f4daab1da', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63155, hash: '5c75753dcbb4d78c107b165bf08ebff91bacf5f82196cfca1897ca92f93f52df', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 106971, hash: '06b2f800d3b1240a9ce3d253b31cb28698b4ca033dcf0696a199c6474c5beafa', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 116816, hash: 'c071eec45acc995bc3c80f1ef8115c91fb3ed210af0267e7809e795b4cea8df3', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117055, hash: 'ed34dc5838a3b04c1f81928e7df567f1c65ec26042709e4ccb0495603333a3ec', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 116861, hash: '3ccd123cf076f29f43fd67f168c2b81065eeefe3f2cd2f59c4d4aa1fc071af16', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 72381, hash: '3065d5622bf2e5f7fcffe0ca6134efb5fb32e9320c311b75fd8928ea5cb5ccb8', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 69732, hash: '162de39d880cc3b8392f9ab32ee8ee7a5f2810a968985f0d3255d87e6adcb191', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78118, hash: '59f258054eef2cee99e7d282208251a9f60fdc518ce20d6f0a61766f040ef5a0', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 85367, hash: '38b449426aedf8caa3175aef00c05349afa9b53a0f51fb16684345f6c08116d5', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 85147, hash: '29fd548c8a88d5bb92651ddc7d9ebf7b6738c9a136768b70e4e1f73ca32497a7', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 101961, hash: '34fe1a375fa56a57a79fce3936040d4a43ad55ca405d110204c1bcfda2e05f5c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 91780, hash: '8830fd89b392c612876020a4233c0225118f4b0890b4d1d0efeefa69f8c04688', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 86556, hash: '1e862fc88ca191380472e3a72d60212ea0129fc0f5edcdf1f69314802ebfa0c2', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 83448, hash: 'c5d05ab8a459dc57baa6a53ae35b699e68d29433875c6e62d8b4816c9ce15242', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83225, hash: '94e85b0e44782d5855b5f411340ae6f09b037a4ba9f79df215bd935c5c4d3ad8', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66335, hash: 'c992f7cd875e0461b7430353847d390b1751dec470a2b9cc6bafe5a5e7892b2a', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 79623, hash: '94c03313a402ab0860444c46482544f2f3c76b584cf35a9e64a66c6ee9f174d5', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 80687, hash: 'c5deae0179a826c607786d43fdb8351fad3803cd2c1dcbc3af19a8f3c17052d9', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96337, hash: '77c7c5c5d0d71b77a022adcd1daf27e0b37a44a0f8f310de10d429930389b729', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 88495, hash: 'bccfbad0d4f273dabb908626370774d5f2850f08c41181bb238290289c0c0c6e', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114005, hash: 'c68ebc6a11f7ad6682fe4c1e64b8482159985dbe39a672995ad7b3b5e38300bb', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 107671, hash: '3f1cf3831249de0105be68c538173bb901b054e922d054c789013a1f8bfdbe02', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 85262, hash: '7bcadb2a3bd9f03cc344b1e5ea6f7e1110de38d6f6d0574616d7a0496b785bb6', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 84090, hash: 'c80b9ac1c218c7a1e6a005b5b077ae1e32923064a978de6af40a4ca39545939c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 96535, hash: 'e2820b72bd1b2c6a77472f030fd804346405acb0bb44ca5e23a17c9a85be6a55', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101373, hash: 'd837539cfb0884ab177e14cb4449b6ce143ffb1050b56243d5361df6234bf888', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 60937, hash: 'e3bf1cd6b0d9d5731c2066c8b9f9b1de987d9581e19fd91394a785bd68cdefe8', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63191, hash: '56f3f61991160dc741ddeb232e2733a629dc46d313c2da3e7eb9a39be0fe81f8', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88120, hash: '437239d88ceb94d8fc4b0ab35f0d14181fe17860e45cb07d97ff95050e7fb9f9', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 65913, hash: 'c6a111a3a4bf68480f1203913cea15c7b04a3962ccc48cf4984d58efc74b095b', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 105915, hash: '37556d775a86122ccf0d967487ee9fb81d7030ce6e5e14648b713a57ea085235', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113552, hash: '17574d34c73c9b7ba640d941b985e87353cc45cf6d6f25350767869d7f206878', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-YVRPPUEN.css': {size: 11701, hash: 'C7FUCYWyi5g', text: () => import('./assets-chunks/styles-YVRPPUEN_css.mjs').then(m => m.default)}
  },
};
