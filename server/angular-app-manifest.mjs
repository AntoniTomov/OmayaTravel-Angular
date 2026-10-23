
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
      "chunk-B5PZ3-mj.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-AgttluvN.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AgttluvN.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CeEplaR7.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DV_tZdB4.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CV57PEW5.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8tjuaSd.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CY2-5jjE.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CslxnRpD.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dks7nMJw.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3IgmykO.js",
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
      "chunk-C6bL5pZx.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6bL5pZx.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6bL5pZx.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6bL5pZx.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6bL5pZx.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6bL5pZx.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6bL5pZx.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE0_X31l.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE0_X31l.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE0_X31l.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE0_X31l.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE0_X31l.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YzZAjORs.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE0_X31l.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YzZAjORs.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B8R-Gmqe.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-DRPl1kQC.js",
      "chunk-3BBwjoEv.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSla-PFa.js",
      "chunk-9Xv9P3Tq.js",
      "chunk-DfFk3-dJ.js",
      "chunk-3BBwjoEv.js",
      "chunk-IHesu7v6.js"
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
      "chunk-Bw8nrRqC.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '28c58e49bbbf419c0049e40a03ea48e7036f3c3accf056800d9a2aade8878d55', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'c0c5dd491286e3070470437dd68ad6e9ff041c81fd3bd00aab73f30ab209aebf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111248, hash: '704f3d009fc84c9b2b96bcd3981ecdb2c1664fd77a1cec658c949e2e82642997', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '72c9024d3a5b23eb13c1ab283a6f02937fc67b36db62b021ffbd574608981c4f', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91493, hash: 'c3f556237c484c8c5205d4dd400f02999dd017d1fd6bcef63ad6fe4c7983c91c', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '50b8fd88be82971d3ba1a8ed720520bd679a1094ffdd18ab06f1f7a47f73ef9b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '2c39c1676978c4e488563f903839ea99b466f1ebe52d78962171a42237a13ef4', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '4645cb28fad65fe6b15622d9654be8673fb0948fd7959c88ca2be37eff59ba0e', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76508, hash: '6ff5cfec2282c334d3241e3b2be74336f5ea8368f1d30bff8d381d98e2a7197a', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: 'ecfe33ccca871cb13c6933db99a08502b531725a2995712cafee98b451101970', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'd19d13a560605eeefd84a9bacf269baf21d783883a95a4fcd4d99782ebf6809a', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: 'd8fda17879269577e02d106323a377339050b3cb026e79493da6e3bd7ccf5ff1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: 'a1144cd4c084145ce5a14d4983561255a82f8f6a4474038216e2af828b4a700c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81829, hash: 'b6fec6f42654c3d6386ba7fa292f36f3c867272478488dbd6161b55878a805b5', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: 'a0a95329900568fd8de90af459db569623d3d8d53940e54bf61cb940adc0cbeb', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: '74303d77662e36ddb5bb1802ba6a28acc5ff5e3364a51724c59ab8f9885d322e', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: '31795b79f332d2811992666cb827d6b730ce52a9020c29eb8968133645b418d0', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: 'fc579900b10f495c8ac8696f08ee92753d5cc2472223ee6097ca8f22260116ee', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124026, hash: '4c987f00c4d4b2352657a4599a61142f80df41910b6696c812d0ce7f887a023d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123668, hash: '2202845e9e40dfc4230591758b8200a1b69102e8399bcce05d8ccb1883b37169', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120976, hash: '0415afa44051ab2f8098d9805de232b6cc0f97fc5744b74d68e389718503e1a5', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122529, hash: 'f8c4718c5c0ec22d91305963ceb61854c1b41712a4df7d46fb4a7b50a80f1048', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117767, hash: '862a203ceb1927c947dadcef29c48c33418997871df138bc013c97106aedf184', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110859, hash: '0bad62be1ccc85aef9389d79c3dd3c862b3849e070f1152c9503be67975fa7ea', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101600, hash: 'f826c86f33a4e61008cfc6ee974d184bc4e7e605db6e5e4dcfa1e3e17e2d54ea', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104194, hash: 'afaffc27c929e372ef322a546aaf0d8485350e655d53b0c6f8f7d839472a07cb', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101166, hash: 'dcae173688f5519b3228ea51dfe1b445878e9b89dd6bc80171a66ab13bf76013', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 104839, hash: '6852fee99a1559438071c1cd714bce60b67ac2d739b68576bdb27ba18f22a5a1', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87770, hash: '4cd41ba7f2918b020efcde5502036b472da3e1890e8b7515dabd5a5b1265e45f', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87547, hash: '72eebaae1bbf434f564d8c5fe4806cade559c26074dd27c4a700391fa1bac4d7', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'c0e9ed1f3e204d7c8024cc315c493b04342e7f25d1fc60c328d299ea725fb8f0', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 93852, hash: 'd15036d1184e395914fa9dc36c982f9d3cd3265b4c06c42be6b6fd6ed13a1c80', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70227, hash: '87ea888ac400c274fc0133a18379f4cdcd0ca6ebe5a904ecd4d23670e6a1fabe', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117461, hash: '85863f7f633885cf19d604e15515094e5d4fa183d2b7a1d7da266cfe4487ba47', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92414, hash: '4bea77b7fffd1a6dfc097872ea60ffc1de48ec079656d0fae85d070ef27c385c', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104949, hash: 'de6cfbd22c09832754f0a8d4d38497abba8ca55c5d4cab1b767c27c68285676f', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92787, hash: '344f8059cd71023dd91b30a8fbf2dd3c09b4bd159e321de1ae4222f7ad9a8de6', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91980, hash: 'ce868262269aa235c17dea84e68d67d8b731aa1f8358f8a8812f91be8186164b', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '5d9275db66ca970096d7d628d9a5b5f7851f3e2ddcf58625380458e11d4bf20a', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '33a252128df34eecf2a8a8661060c1140222579599f88ede16eb9e49e02d0990', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104268, hash: '088e0285daf8ff57912933ff3d993181a2f6faf67256d51fde91f8c80f8a8726', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94305, hash: 'd2ca61b39e129a65267e9e71cb37ae2f6f83f95c9f5f14bf2647e735127b20b1', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94226, hash: 'c102ecc4a4529ed407999339978f1c8728ec7070dd2ed12f488b4551f3218fa3', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109276, hash: '6ba863a090d68733c6f391474cae8459f62e214eba12be504a03e9140ca84b74', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: '9224bdb06af579dc8ac110f0a5dab891a1f341d0f7ac2587191f2fb800fadda9', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67387, hash: 'e76b91330c2db7f33a1b0a60b3b0220acc370aee7362340faeec46546ace9b91', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '4c7c97ff7ae06673e2b640ff131c1c0e03df056190b15f1ffddc3e4bcd2b7dce', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '3cc02d4514c0a9716721788c71dff29d14b3ce74166a5717f4cef26340ea309c', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113828, hash: 'd4be61b6654e11ba777492e5485790fddbb33fde9553bc347eccc50ae921649f', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120458, hash: 'dfc374c3efe652aaed0a9bc1e7cecc92c555c20ddfcd93725d74b5363334d630', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118870, hash: '642efc67f5f7d89b8e79b7a36114ffa33b02a810230ecfe1b619c493c014a21f', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118064, hash: '789991dee67fd434cf6b87deff8f6259cdf24c46120410dc9e5cf7f1418b664b', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123787, hash: '26df3c6ab6640a684b855cffc40dec5b8e72f2c8d40241eab5d78d193e6450bb', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
