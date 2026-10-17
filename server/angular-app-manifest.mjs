
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
      "chunk-DQHVdDux.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DkvYYR_E.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DkvYYR_E.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6plYlli.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CrKB2omI.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEaoA1g9.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5aamHGa.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAnFpW1I.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D6tebFBx.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpHdEZH1.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CKPOqPJp.js",
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
      "chunk-CxNZ_Gvw.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxNZ_Gvw.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxNZ_Gvw.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxNZ_Gvw.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxNZ_Gvw.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxNZ_Gvw.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGCzIYdR.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGCzIYdR.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGCzIYdR.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGCzIYdR.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGCzIYdR.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck750r6I.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGCzIYdR.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ck750r6I.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WagVlB6x.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-B1DvKAvT.js",
      "chunk-D0LVNg_j.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D84jWtYF.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-9EzcIr1D.js",
      "chunk-D0LVNg_j.js",
      "chunk-R0XhYuMx.js"
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
    'index.csr.html': {size: 16193, hash: '201be21d491a7d8c3c69a5ecf5968df062723977635d787f7639ae6857bfbff5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'aca44b515d411ad65b6e920fe04ae0705233cf2dbcf30ee8c0cb506de1f600ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78518, hash: '5582898565aff9958dd0d6806e7aa9d8a528fd0880e5d572ee4ef4506b252302', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74303, hash: '95b753af58e0740f2d0be01178be485553d9d9c2944b26d481c4b7063c685adc', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73534, hash: '8b9fd29a6dde8ec9f47f1ef5e8521eab181184ea46f7f2b64fe0d6345b55bf08', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71644, hash: 'b8207ec93213a6a7c84b135b54f58ae9457200e76f9dde5098c969ce68b88e2d', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108286, hash: 'bdb280fdffcf992ea9e8391838004339af6913e1abe1fc4b4935fb08015dcf9b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77146, hash: '29f4e6484a6b9fc489521bffe9551ca1fcb20f700ab1bbee6cdc9db205f5a5fe', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87497, hash: 'e0e18ec721da44318a9102e56132ad597c33d6fbf26d835f06206b7fd7cc7b90', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64429, hash: '6f6eff4616f69d92f1e751c5b2bf8ae307950d2defae9a303f50110c08c9524b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64399, hash: '7d3258fc6f2bd7d51949183ad673410d24ea8a763031cc73f63e5fd7c5771626', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77508, hash: '033ea7f23980c1cd8456957806658435002d3911dd58b42e2acf2e03ee68114c', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76709, hash: '0bb3fb85d570cacc0f2c30e38fe62fbb5878d5d5fbc9f0a37d1a1c7c3879a2af', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78753, hash: 'fdea95f9488fbeaa1f0bc383985fc89b428fad2ea0736e3f054180246a2b1565', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110363, hash: '7830ebbe1d00a66c1bbef981b76c19b96b0832452724ce6848cf37b87f7dba14', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 116993, hash: '09ec77bfdf102b587f5cf378bf891f19bc18b1a6619a95adbd7dd1bef7139e5e', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115405, hash: 'b41318c5fd2ac9b99f4f6f87fb7708c914849fa70e8e701adda5ab997737b2f0', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 114599, hash: '09d86028c1a8904ad82288fbde38e21e87ac8cd9c605e0ad83368bd7be6d6493', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 98185, hash: 'fb3fd123df1ba8edbc9b1c44e791d92ca5f7760626b4b501ac9d82b0acf8127c', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 106241, hash: '0ed5bc486940ba6bfe6d5eac59265c9d0204fb61b2c739c419f78bfa12937acc', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65229, hash: 'a94fbc42a17de5a3cde9692fb905428afca48a384134404cc6219bdf55b0f035', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64413, hash: 'c0dd7e5d0b920c3e9be394f5f89a472851fe65437d02c025e73cf25da8f94dbd', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114302, hash: 'f74877d7066e4c23794e7a6e0b3af6dc2ef62a082b585e59f3be89c48b691cdd', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 89648, hash: '1056427c7d171db24e7bef9692be6e9d3763d17cf4c2547287ca4147982e44e4', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 101839, hash: '3ca5695e368a1ea2a0855c0d11146a618440d4570a9101fe8d6803cef517de9c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 89720, hash: '335cab76a7a61c1355dc7c7437e8f85cdfb9eba270ff5f56220160a896ad9cfe', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82498, hash: '6faa95dd4df5469829267b137e4362758f02d2bac850f4b646ae7442e5f16c2a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78506, hash: '3d475b6905204c95034c1f4864ba8b47924ac67c477c8431febc370098542be5', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86078, hash: '5700cc2f8b7b585ab9f4205760615eb37e5286c9df9de1f8ad8def93353e01f8', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84100, hash: '1920a4129c12f94275a433c674907b0206c12a3741ecfa1a7a07edbefa507b38', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 88921, hash: 'ab16e26630f0ac464b7b98f684104c066e058ba1ed3bd11db18659c97741dc88', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 107857, hash: 'e07744a6ea55abb4441c58b4496244d664e104ed97dc18d9a8cd4a955322aa30', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98589, hash: 'a661060d5ec41c5784deeda6d0476e1f1cc52280afb6d6ce2742ccfddc0d113a', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 101513, hash: 'fbac83d1e5034f5ed8552dfb0db69ceecd9dca4ca49a72283c685bad86cfa634', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84573, hash: '8d9a5df033e6f9b14bc41285d3e54c68ccc555cff4e00c4544b4893217a9c428', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67666, hash: 'f1bbf74e7fa8e90c82430d090aa727144e36fdc69628abeadf0b60f2eab1f3bb', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89460, hash: '747cbb440c90da27f873703335f085e894a340442b8bffad1f8ac120c97406e8', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67253, hash: 'ce5b8d0aa8f9624f1e7850a3138a1507a8e731ee81b24b433a5c13314f402bbc', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74517, hash: '2c82b78c0edaf59daaa66497c2bdaecc50123a3258dda0ae5fa67ad22e732d59', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73370, hash: 'cdf0d094a2341d6472b878bf4401d9540da26f818b9939eba2dd5e0b6d75075e', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79454, hash: 'c37d43e0978c8d71e40a4f8049631f9a4e418ea85b51a62f461b790bb3687acf', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98769, hash: '63faa5af193f419adf0a719d58b62e2136614208a84d2d5afbe33c7bcc2e792c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91335, hash: '0357440a723a0d4fb9a592862c64758f2180d0b14b65d11e2aab0fd449c11990', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87908, hash: 'd0651e96cfc9cd4008107195277c1d944352f6d791b096f680a5a4fb05e2d367', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84800, hash: 'b58612c8cabab1b78b6768c65cdf0a9edcace24b971412c5dcea3bb23dd27b0d', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120384, hash: '636483d5c2d384c9d79f156260edebd9d5ee545d69831cb6e60d50a505202b27', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120623, hash: '4f5e618d04f8d296237949341e2d88fcdd399354afffe2ce9562ec4b42699b93', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120265, hash: '02397db1903445bfe143fad0225507f9ff7e8378db7ddcef3ba4d1cf1a79a5a7', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117579, hash: '76ef979d7794c0d7631324d404eeea639733fa9d48177d15ff98aa3e2b75dddb', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
