
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
      "chunk-DB7JNStc.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BHmsHjp9.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BHmsHjp9.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dxgbdqe5.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNLeho2O.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0lQksRF.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CD-30zL7.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P797CYU0.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Do1-sxKs.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-52FLuCCz.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DaAka7LO.js",
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
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSf8GkaF.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-efx_DX8U.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXd503E1.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-efx_DX8U.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BtuYT5dK.js",
      "chunk-C2WhPW5p.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWm5xFiq.js",
      "chunk-Cu72vTj1.js"
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
    'index.csr.html': {size: 16185, hash: 'de8d5f38aca84b2274dbd18a2c7bbfd5fc13fad4e924f677ed3d3a12e216b077', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'cd5ee1f616eee64d94d4ffb3a0ad6facf92a5cc87782906674cd89bccb8114bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 71387, hash: '5b5522d92836ebaad1aedd735aa89c1f59d5f0270bbe8270230bc8d1555365d2', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72282, hash: 'bfc2df18544544d84f288baa739318d66b863a9e18d07f2f7aa38a7d7632914c', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 70392, hash: 'b42fb6e55c941228de86bd72bdd23bf119c680d28cb2a19c2d09b66be27fd18e', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63147, hash: 'd6d4dd69e683b33e99f8fc43c6c3f3bf893ce0dc4f9c66f5ebe87dff73f996e5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105134, hash: 'add1476d1aea2c3d982339b47d7bbf0c0ec5972b4274198864e707949220427b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 83053, hash: '94b9f08a24a8505aa9d75f84caa70dd5c89706ecb8decffda8f24af192a8f5d3', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63177, hash: 'a3cc8acbd670467b923038b7bff8540f4223d8b0aef0f9db0046eef4a396d31a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77215, hash: 'e817363ac5f2146c9a5e8622eeee245405d0928e6c1b0a0350cdc40fc0f15e1f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76256, hash: 'dce8dc51e348cc57421fb0f57e4653566ab78b8e9aae9d36f52430f9e4984477', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 73801, hash: '9b40a581aef2723d49c0d7412cb8e0fb93d970fe1bc71cabb72fa23c17b2f2b8', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75276, hash: 'f7e20bc67ba66652d1c0c3fdfd3f5724c8852b90d5a82314b5543932daefd4aa', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79083, hash: '148f9ef8489e0335fb45b15e46da8e4400d8a58cc03b402f5b700ba37d7da44a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 72373, hash: 'e33c87ad4d72c801f8586abf4ee4e7457d43124921ae8515959eba902df7926d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 69724, hash: '201cc8db784603c88b0d3db2bdb1b05db94e5dd801b7746ab84423efcb9588d6', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78110, hash: '6236ee7ae69c70f85ea07d3e456aba76bd9e38383e1087d3163d27d9a58b6605', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 85373, hash: 'c5bbe887e1848699a41b32d87f0e8c01673147aad2e8c1addaba9468ae2db138', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 85139, hash: '03b7bfb041586931dd73cacdc8b5761c37252fddab6df9b524b966a1a88d9f9a', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 101953, hash: '2750d91479eb6944c91a1756a0b925241638769b75f41f2e868cc4f714e9fcb4', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 91786, hash: '8667e6b5de0bfa56e5ae6a4f21ce5054dd50b614cb055efbdcf5ff8f9a2f6809', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 106955, hash: 'd1d03d627446e6a569647d5e634a9ec89661d68ec3ee3adc8cb45321674fb966', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 116808, hash: '2571a566275795a6f254cdf9860bbc3c98588a97d8d408f859eb9825a8585059', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117047, hash: '3353331e01f5c9b0308b52c29aa974c31a9801d018d3f9150faf6a827f1ec76c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 116853, hash: 'e746558c65bba6ca9c8ef20e11c93a6bdb79ca5e0e5d0baf8b02a2574599f95b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 86548, hash: 'd06ca6bca67f5980f33f36f030c5e8e46b6d28b4a2e9b7457bcf8a01b7a6760c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 83440, hash: 'ac224ce4eb507772ae1ddacdd2a96678db0a2cc856f63ecedb827ecc975f0aaa', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83217, hash: '9d465fd0af87fbdc3ad961b17de117d7a8a3f4bf9c8331206ea7e9bfe0483cdd', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66327, hash: '52d2e5b23ba52d6a1de65e780c33f2212aac42ecbdc8f23723aff184f9cdd26c', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 79263, hash: '36ee9782c3a48e8896beccbf3036e7aba9fc84e3b67cc6eeff7abf329045f878', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 80679, hash: '1d9ab84b291063e24b2e3834c54a9a55e69d85a883ae231f2e570cae8272ae4b', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96321, hash: 'a3d96f72dfd2849b38da382ca8f384f0c1e9b03202bffc0a337a2f9bba4e4ad5', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 88483, hash: '276c9f7819401418ffceceac69e9a62fc7bb173750ccb8899c48210add0a4fd1', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114016, hash: 'a1febbe24735440ca4833cfba79ec020b60b58da13a5d84a3a8ac1c3589ff1db', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 107675, hash: 'cf0c30ca561c185c0d399310f7eb683a89eba36d1609adeb1868893bfc20eebd', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 85253, hash: '2be54f5cfcdda5934bd37765d0786341df9cfb534625eed4ccf5512329914592', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 97174, hash: '67725f1040376c82dd8215a62afb74f6dd7aa57c7c6ded9f0903ac2f9f1b52d2', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88104, hash: '244f1f84615501b6fed1ded595162eeda3c0b9a797662021e6545d9bd1366b6e', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 65897, hash: 'fc67d970d03c937e75233dafa62d1c189606f945521a7c5314c50097551542c2', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 105855, hash: 'd61b83c126b187d5041d045e9940af535910fae469969f45591b1f2a5a5ade74', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113479, hash: '8bee8053a3436ae365475bf0ef8b3889bd94583fb3264fd86ab0fdf57bc4fb68', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 96523, hash: '792074d8ebb758ae84801bdb882e8a3dd06e48886134c8a83b9ad7e57addfdb9', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101338, hash: 'db750de55fce5eb1a51c362c9b9c3c938e3a88c97f70f56f6e02eb253e6f1fe0', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 60929, hash: 'cfbb300d97b0e787f52b91be0c02cd37e4579b94a33882ec3f50cfef1e39903f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63161, hash: 'b18bc8c2d08a332271b64b9b7b3e649e51c83c41ffdf34ad9d0b249e569dec5a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'styles-YVRPPUEN.css': {size: 11701, hash: 'C7FUCYWyi5g', text: () => import('./assets-chunks/styles-YVRPPUEN_css.mjs').then(m => m.default)}
  },
};
