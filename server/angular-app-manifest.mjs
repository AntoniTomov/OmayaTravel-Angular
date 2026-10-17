
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
      "chunk-BFII0UES.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-D2t_aasS.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2t_aasS.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FIarSUvx.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHlxhX1E.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0oVK9K1.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDmAK4G0.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CwHb4Lrr.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGZpl8uV.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4YkNLrx.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B0ZdBWq1.js",
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
      "chunk-BWH3HG0G.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWH3HG0G.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWH3HG0G.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWH3HG0G.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWH3HG0G.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWH3HG0G.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMjr3Pr4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMjr3Pr4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMjr3Pr4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMjr3Pr4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMjr3Pr4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ELrh8ZUW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMjr3Pr4.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ELrh8ZUW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CTe5P-8F.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-ChTJECVs.js",
      "chunk-CqU59MFf.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWtBh4MJ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BFvqWPwn.js",
      "chunk-CqU59MFf.js",
      "chunk-UgKQHoOt.js"
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
    'index.csr.html': {size: 16193, hash: 'aa3382bfa97207834b59a4448b53bca3d3718616d3627c4f40648fe38a14facc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '18c18a84de159c15a7e0145ff40b0b03a23b17acae0665c75ab0dc30db72a9f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78518, hash: '3e32ce0074c7bb6d31d01bac48bef60b837c6f0ddf595407b9b9c4b124c03dab', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74303, hash: '507e1cd96e5fc133018829b4521c1c663032e9580f578a4f2080ad9dc598fc9c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73534, hash: '32562f71dc0d7ed138ad65fb51e58c26c42e440b2aac66c26aafe73e2e7981b8', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71644, hash: 'cfd7515058d476c7cfec2807e4a4207e8a4f0de0caecdf9ca5af527928d7579c', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108286, hash: '69d12b249e8e91d980bf8f17f5da6e736fe74930c68660085c2e233f2096df2a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77146, hash: '1977f0476b1a599fae9d7ce1f71f3c09177f42e51c19495f5209ec8da260d862', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87497, hash: 'af21e6b91b49c51f8a9bfca800de041799d5393e5df54e8d87068a761626b06c', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64429, hash: '7b32ab8ddc30ff56d545bd9b61454e8be9b7337d91e7680b3f8bb8fd6165da4b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64399, hash: '4d4f66a3c44a8df0d2cdbaad4276c5e1b6c0a21d31ba92315c717745534438b8', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77508, hash: '4d2cc26fc9b48cda70153df15f0dee204087bc9e76376cdd873d63df33c737ca', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76709, hash: 'ffa8249aa7b2b8aafa3d20f13a91e9241b52cb7a5a66479afe2eea908940b977', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78753, hash: '68c4bd8ffd1436cb3c2125c3ae8d1d155725b1ac1d7004cbceb126612eeeee39', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110837, hash: '91c4013d0145ebd3cd70a7115690d90616f6074e11677d1463b24a54fea39691', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117467, hash: 'dddda88589cc74f1dfb847eda0574ddc870893b6ad112fbcaf27b1171a994111', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115879, hash: 'e33676490d6dcbd4fa3246699d8df18ad8d388efac0c65e356b33f3b16571a45', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 115073, hash: '4db9a664d4a8e49a6e2c47159ad970bb3d6697edfd73202e2794906ba26436e9', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114776, hash: 'a8cd0f388098f44750e93d9f3b3b871624f602e2bc71fcf8d1fcb813e3351d96', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 89651, hash: '4c585376e29b8e27bfc0b5a6e0bdb12573fb983d63d1d1ccec3c12eeff4fd912', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 101849, hash: '96261f1232282b2aba132d0c6cc31956564ab79f1e4cd2e33a4ef79294ca0e07', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 89724, hash: 'bde9b81ee4fc690e33f4068690e9d1a57dfd08da8d6dd192046bc48bfb1081a6', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 98185, hash: '9b77627be380f597395c6203712561984ca6749692a2838b7308b0458f8cc1cc', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 106241, hash: '357bfaced6efba660b01744817685202efabc236b64ba45f3280d2597ffc8466', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65229, hash: 'b7c425b17bfd45a7f4dfe186ccc5c19f8322a7484da54fc9ec64bb7bbd296f90', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64413, hash: 'a717ca69ebafbe5f5fdd46ad0b676051bccc802ddf95e3828ee4c1744008a2d4', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82498, hash: 'f07e1de5c1c4c26bf4108bcd927795f349f42e3b50ce288bc24ac4cdc5e7aaf8', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78506, hash: 'c987c5211d70be8fb36cd2b8fd2ebbc8c00310d2650151bfafc0d0ec5ab58890', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86078, hash: '7fe85d66e27af51ca83dfba108005f8043097a4bfe7dfb45ad59133db9e34626', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84100, hash: '4f4c4af5b406f64ddff09efcfd895782d196807d53d59910744f32def23f6d48', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 88899, hash: '4c072805e9e8e13d126dca7f1c26ca6c915ab51dbf41a0e5bf1877dc321852be', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 107824, hash: '6893d0d0fb5ce0c322ede10239380f22bd823c7e71a06d44fee8c7e4ac27afda', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98548, hash: 'bfbc78fa61034b140346646fca41a1de2dd2753e72e211f41505455e76f7f042', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 101482, hash: '8cc73a1cbd8a01577a06534799837351db7d4ac60ef867c2cbfbd1492aeae61d', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84586, hash: '7e4ab4370e72edb79178e192aa7244ce81797ecd189fa3704d5b1408f0c270d6', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67679, hash: '74926638713104ccedd5d2e70b1b09427a89134bcccf175c212623777034f3f3', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89480, hash: '56916a99bec1208d39e831844a0b795754fa570870f0f68c680a35eb8ac550d6', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67261, hash: 'fe50b220c1eac0ea34c6a8076b6184b1fdf7c060f4c63f5a764100c8743363ef', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98771, hash: 'c8b9659790bb567cd51ffd4bc01ede4c0898e89a85853cf927cde5e0eaed5321', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91337, hash: '8e9fcb399e85ee8d72a34736114cce64db7a687c69094282a5ec68f273a6dcf4', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87910, hash: 'cb31d923ab36d5a72231bfd2e79a1623bedc87ce22d78a9499bfac16907bfcfd', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84802, hash: 'df17f9645588db4a564a684d5622d0b9da6a173b4b98c2a0dea07308b1dfaffd', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74376, hash: '74920eba70706fb3e7e380401a93860e35d6fee6a55a4464b00c261f728ad9f2', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73255, hash: 'cfd8b92d6ede0c6c2d3af360b5ed076fb70a978d09933ace0585a66286e840b7', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79362, hash: 'e7ddc9c3d749e3d5158fa6f94dd9bc767dd60f95de7f5aa74a2f665936eac2c5', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120796, hash: 'ce1885aeffb5c52566cceb1600e3cdc98050b0034a5a240944c162fe52952800', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121035, hash: '70f1f62706d13b1d2a55d3e17880a959015cbf115d4cb610958a1ab1ef647438', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120677, hash: 'be36e604fa0dcc43b253446ea360fa0a0b46ff24d1f4047efff246d788b4e1e1', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117985, hash: '90cd276d3c24e7d0aea800dcfa1f3e546e98cb77966e617c3ce50094a06ac1f7', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
