
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
      "chunk-C25Gx0Cp.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DlZx4jzi.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlZx4jzi.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLDKqbDs.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClxkZmgE.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CcHy3F4L.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jyT2wz_D.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-y8JYZTkN.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-o0UrkzCE.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZED9SQk5.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SbX05OXH.js",
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
      "chunk-D9eXglwj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9eXglwj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9eXglwj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9eXglwj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9eXglwj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9eXglwj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXPtKrcy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXPtKrcy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXPtKrcy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXPtKrcy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXPtKrcy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Czh2U3gm.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXPtKrcy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Czh2U3gm.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-l0PXXowX.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-B6AxwpHy.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPW4fAUH.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9eujKJFG.js",
      "chunk-DwGw12ip.js",
      "chunk-iYyZASei.js"
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
    'index.csr.html': {size: 16193, hash: '38c725a6b48b73282dc4b708196cab72c623a074f3392d889be636b7d26c74d9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '8b75140179a63159e49f54b1b20edb17b774cc95ec239e2d129658a94cd29f0d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81371, hash: '1b073c72a092c6105fb4a60180cc50f056b500a033d63922a0c4009d34eebd79', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77156, hash: 'd5322ab974f5fa17d09bfd170bbd304b1e745e7d65074d84e022d86e44c2604c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76387, hash: '4d0c75560ce2a9e33ecd8f62bf2dcbc274db796951a882c1b9ffb6fd8a46cfe5', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74497, hash: '9152ccfae9ce18ac4ddf7c256f4ad4988ab946197ea04bbcef9a3a30de8d6728', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67252, hash: 'a98729bab520827edcc8a0e03352598847fa20e2d883c0bfd45f753a78cfe05d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80361, hash: '5405b0ac4c1bc7f7aeb41c8fdf25da42fb615111d8fdc7636a00537dc592e21d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79562, hash: 'd7791e3bd7acf230f215ffc836154edfabc57ebb2f149265eb34c4d2d296a32e', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81606, hash: 'ccc7e17bd993daa7bf2b7ec15a9627777bafeb5430a30b22ee982d303b866b7f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111139, hash: '93baff007aa22c6cd944235fca3ba032217b5447d896de58a69489fdf778dc28', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 79999, hash: 'a7638fee3bb9d20f458d2ba63471fca11601f4323e8e8ed6dadb7a75a16b3bce', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 90350, hash: '7a83032b41d4d7cd43ce6a1243c0184173b56df1d601d228466143a38f809dd7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67282, hash: '8e0429a2406af50fd2d901f64115e49257d6d4a0eac4a7db97428fecd45696b4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101038, hash: 'e2c78b155064651021d931d466c8cac797577eb01553ab7c1b468405fe6744ea', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109094, hash: '29ddffd295a5f6f787cffb9a4edb3b4913469b3b2985f0e3f66a6b7c3056317c', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68082, hash: '9eebf544c327c2c49c80aa3b5a0150924b247bf6d6c61a5e0bb5ba3699c071c0', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67266, hash: '3edcb5b7dfe90f114a215c729a8d58596593f1b3898d39f5c62be0adca525fc4', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117646, hash: '3cfe9e5851523801c3506cc16629414e64b69e1b6e51f0a7a207e8cc0672f243', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92488, hash: '08fa0bdcd371eb2ab0538b4b71968b12617e85f7a10977ed9fc76b3c336c02c1', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104662, hash: '47148e7473dfdc59d473d15f6d5af1f62df1b51bcca7c2d5c3d62c73869bff2b', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92558, hash: '67d5adfe0983be2d75a7cc4be15a38fd9d307fd928a97cc6d3de9be5a3b2e16a', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113707, hash: 'ae6ee2c895d6a419f286f69f708fd491135607bcc69ae9d9b5e76b546a6d5155', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120337, hash: '53d888c574ffe7514d206f5db474bbd4f6708da5df7311673e99a5bb96a8d8ec', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118749, hash: 'e2cc344c60d90d6e32826645dd27f0950f27ec88eab3ae6511a0fb7e3b2318e9', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 117943, hash: '14421d796985fe80a7ac726a28ae6e57c7651ac1999944b66a112000dd1cef87', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85362, hash: '3403c2fe01d7b2a2a8c060c185f6828d66d11503e5961da3cf99ef5f591ddee7', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 81370, hash: '7fe229b3d3abbabe4e5a8adfc7c6c31a18305a0c2b2499964590e994366aae36', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 88949, hash: '521158b69eff393b016e525f5aa76b8675ffbea8be3172be1e773db628917261', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86967, hash: '31e5a7ff20bb890181ee42761969d4f0dd44a57b964666ed427438f650f40d81', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91763, hash: 'c16790db39dcd7f628250d3d87d414f8970324ee419d4177b92def7c077b40ca', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110694, hash: '0b42a045a524a545efaa2a87d83c4ce63c791c257d7561c5c90b1f4f881b5ed2', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101422, hash: 'd3445989c53bc3780aefd75a61f2778d6d9f868abbdce86d26b900eeb0751f25', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104347, hash: '4aaac841af51b23c622c910d529712f764fcac34c7515ddb862ea16e8e71141b', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87439, hash: 'ee74eff66aeacd7be2a899ff2f36a7cb8d4c18f3ddea9ace4ed8175a07c2c054', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70532, hash: '603140451705177e2ac3c74e009ffd64c9bb8f978ac5f0d543bf69036e4d9f06', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 92333, hash: '66e799a408638b05a55514d64240b5c73eeba1c78b99109dcc6e942a4f411167', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70114, hash: '51b659f595e3d8c775598a6b1b79e24fbad6b8b4caf342351999ef4918d2aa69', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77370, hash: 'cc525c4e3862cb5b4980dcf7e1f3aaf98c71ab9948794d62b31c091a168cb187', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76223, hash: 'a16dbb3ec4ecaffd2bfd6f18464daa5d43812dbc626ba8a69c8df5f50e624e36', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82307, hash: 'e95c2a88d3e6a75cc9ea38fa71306ae0ca5191643d3ad870d3eb239a0f809414', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 101635, hash: 'fd9e0bee593c6a17da217ff3f3428dbc46760419993039897620d3cbbf9fece3', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94197, hash: 'e63fea894ebe7193174bc54387b9f45361b0eaf01f1fe90e5778db52f248a834', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 90770, hash: '5d98893401d5991a97fe9c67b13cbae9169295da1a50a57f48c8b1910f3398e6', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87662, hash: '436c66b231471db498a0a4888bfe6bf9690f398c2cba9c562d0a54ae40eb8078', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123666, hash: 'a177fc576b1e6733d6e3f4fb8d663ccbc4b5a5e5bac057ef2a94e4b89b826712', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 123905, hash: '21764b1be95f847c32dbd2dbdc8fd5ab6779581efa725264a6d7acb4371bad31', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123547, hash: 'fdf3554df199a610595c0fba22600a9dea0bbc52e1abd31010e00790a8190740', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120855, hash: '0593f2117641d8ea0b6577a76e22ba084c3f78d346ef98fc9ec41fb7ca82aa50', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
