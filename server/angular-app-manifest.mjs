
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
    'index.html': {size: 111139, hash: '93baff007aa22c6cd944235fca3ba032217b5447d896de58a69489fdf778dc28', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 79999, hash: 'a7638fee3bb9d20f458d2ba63471fca11601f4323e8e8ed6dadb7a75a16b3bce', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 90350, hash: '7a83032b41d4d7cd43ce6a1243c0184173b56df1d601d228466143a38f809dd7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67282, hash: '8e0429a2406af50fd2d901f64115e49257d6d4a0eac4a7db97428fecd45696b4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81371, hash: '1b073c72a092c6105fb4a60180cc50f056b500a033d63922a0c4009d34eebd79', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77156, hash: 'd5322ab974f5fa17d09bfd170bbd304b1e745e7d65074d84e022d86e44c2604c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76387, hash: '4d0c75560ce2a9e33ecd8f62bf2dcbc274db796951a882c1b9ffb6fd8a46cfe5', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74497, hash: '9152ccfae9ce18ac4ddf7c256f4ad4988ab946197ea04bbcef9a3a30de8d6728', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67252, hash: 'a98729bab520827edcc8a0e03352598847fa20e2d883c0bfd45f753a78cfe05d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80361, hash: '5405b0ac4c1bc7f7aeb41c8fdf25da42fb615111d8fdc7636a00537dc592e21d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79562, hash: 'd7791e3bd7acf230f215ffc836154edfabc57ebb2f149265eb34c4d2d296a32e', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81606, hash: 'ccc7e17bd993daa7bf2b7ec15a9627777bafeb5430a30b22ee982d303b866b7f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113707, hash: '39a85d59b92ec4c3f84dbe9db94980d8bbf7e199b68f205ff366d092594b693e', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120337, hash: '8580dfba8eaaa393f20354f5c4ccbf8c10c3411796e5e4942453576f14c1bc2f', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118749, hash: 'b41216f74b76a55598f92807c9fd3269a2b752dff13cd2616eda14e66d361faf', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 117943, hash: '15c6239fabd761aed6cc733d67cffde34ab55cd52ec939e3e81cd799be8b6fe9', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101038, hash: '7b8bd799238897244211419da5573e536f1ad32b82cad7b1d20705013b9465d1', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109094, hash: '082455b4c97e73847f26ee55f9d5e92ef9e041ca3a1f119343d19daa41163bcf', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68082, hash: '71a42d2c530c24fdf5e2357a36402d365edeb9e4958290f34f4ff91c54e83fc1', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67266, hash: '4db4bcef37d3c1f484cc5a6c38f3756a07a227d74aee3218a22105e12086c5e8', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117646, hash: '3933336deeda6eb9e86bc74a6c7c7da3cc7b7f6932058d5c4e8cc49c4fc28180', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92490, hash: 'ce3a6e383acadc7bd82a0880d5955de0732c3415f911ddcedfb43079f35d1a81', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104665, hash: '3f832e8d290d0b416ba92ddd1fe2c51b172f002879d4dd2c113cd1accc1c9a81', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92560, hash: '479debb7ec7d8b56b28300538fadffb7e024466183bbcde0873c8895d2191702', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85351, hash: 'a0ead9dc2f61095714d06bb42961f99da7e03acbfa6c173b5c2d7603b2090940', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 81359, hash: '9cc6b97d94a54e66dc63cae23e06df3fc7fad6ae50a4c7383e3837cd6a69fb7c', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 88931, hash: '39d080bcbe7d9921a6c62b7fc28beb9bbdb7a31258281bd5a0f6ea9c3cf475b5', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86953, hash: 'b309e148af62cd96e554daf4a181241e80b0219ee36f897bae9a00c06332a587', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87426, hash: '895fb062b7cabbbb3cca247c60101ebdbb749029e9ef3773c3321956a509e47b', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70519, hash: '6c4d8c24bd7a3d98bffdfd3ac008b61e3c0b74b65ea0f8fd63825eeb07da0e3e', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 92315, hash: 'ff49e56bba2a0898ff392fe9099dd20a1bfb393607999ecf5d0395065ee3be2a', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70106, hash: '07070e78d210cdb3eb8f7746f828d6f8bb8c753b762d2167fcfee4f977dedad2', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91763, hash: 'c16790db39dcd7f628250d3d87d414f8970324ee419d4177b92def7c077b40ca', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110694, hash: 'd652fd6092cfaeabc7ff8288b37b0e3b67a15ce9718b9f6c36b7301682b91b67', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101422, hash: '7d5172efdd77e1b176514091d314c47e3dcb91f2b0b89874be0005145d6516c9', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104347, hash: '4aaac841af51b23c622c910d529712f764fcac34c7515ddb862ea16e8e71141b', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 101635, hash: '884d7fc72a310eb9b4b7bd11ef8f9f67d0cc96f66d964d1374e89e8ca1e3b4da', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94197, hash: '171a6c659ca98b6a1c46d1fc7f0328b15629b9462f00e8487cf29a86186cb49b', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 90770, hash: 'b0bdf86ca1674b449870c457799deffe36d5c10486de2c5510cd3bca5674c679', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87662, hash: '5200d996a5052c21cca52f8a00c7d7c9db39a805f456e1d6c2f42f57e06cf29b', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77229, hash: '5ca9ccb7bb9637c542b3d3fe9cd27f976db539167f67a4b2cb97f6664b027ac6', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76108, hash: '2976e3ceeb4d892aed1c9ebfd1c6d38bcfaf6599f225469d1de6cff5b3575d92', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82215, hash: 'ea465f2d1c5cb3d94afc4dd0bcd487514b4c7dbf3c9bc0201bb09c148dd418b0', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123666, hash: 'a008651b62c437309de58def1eb9b5a87b201016058f877bfdde49bef2b6a807', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 123905, hash: '37aea8389206d1afdbb7ff07eea167b389e96058a8366d44ca1d2aec5da78109', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123547, hash: '75130360494761bf5f27a3f662110777cfb7b890f90e9189bffafeae90549080', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120855, hash: '4d002b74b1a2d825fc175a4aeecaeb0fdaf6798ca0fa69b370925b5bc2e4ec4c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
