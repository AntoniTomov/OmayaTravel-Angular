
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
      "chunk-xwTMLLS5.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-B2RUYGOQ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2RUYGOQ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNMygkZG.js",
      "chunk-B0ndYLdH.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVG7QG8H.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Csvo8xtm.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-qKOeVQRB.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPOHZDw0.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DpaJJA_-.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-fhBlzB_R.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cpb-8qJ4.js",
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
      "chunk-CEGQgr7Y.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEGQgr7Y.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEGQgr7Y.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEGQgr7Y.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEGQgr7Y.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEGQgr7Y.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BB6wKd_U.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BB6wKd_U.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BB6wKd_U.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BB6wKd_U.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BB6wKd_U.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DOT28NjW.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BB6wKd_U.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DOT28NjW.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZOypNcwE.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-DTY-Ywnh.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyDrl4G3.js",
      "chunk-B5DLpBOX.js",
      "chunk-BLXiWbeX.js",
      "chunk-B0ndYLdH.js",
      "chunk-B2giJm7E.js"
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
    'index.csr.html': {size: 16193, hash: 'e637394953369b8898d9eb34f06b0aa1436593419485123bd3e8dcde4d9ce096', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '58b625288993e5d433a193659bd69c01b8d22022a8db44b716dceba916798619', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78409, hash: '997a4f0ffceefa80c111bd631ec0d2686689b318db4a30061a620f66e7c4f460', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74194, hash: '991d7b894d5450cca0c0c6f684438345bf7ec29c0e87d9594b540e6fa14a4190', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73425, hash: '5fcca228ad4d0a523eeea66dc24d9d313e23721643804c070a3ba91f705b5506', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71535, hash: 'e4766dd459206a06418085742b7a5dc9d47a441c06908a89d124f38aeec58d06', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106253, hash: 'd594faf093c09e2bddf83b1e0ef54d70a5adde3fe84bc265f6dfb9186f5c11f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77037, hash: '85a3475af07e79d7d957a3560906fca753a02a98d0b2a22a829e212c8f8f921f', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87756, hash: '23079884f4520641d12ccf759e504f18aa69bb3c4938c0e4be11c60d2cabc8d7', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64320, hash: 'f8ab5ddc4724ace6b76f44d118fb966087d95bf8ecebb8b7f122d11001e6980f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64290, hash: 'c73a7e1fb860556eaa8db8a114cadc9709a6fdbce4efeea8c05a12e3d681fb7e', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77399, hash: '04c00ff6807e3e3609f48e29c61caaf633fb28278671cae31d6884210a42b7e1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76600, hash: 'b46643e358e64d902353b189f4f86f428d3eb7aaa5a06c0ccc73f7273308918f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78644, hash: '1cb05f11fa63079139e38de207142ca0ab7cb96dd6e9b2485521b635433a81ec', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109714, hash: '7fbe9f0fc5ec31d50b044049c10990b933c4b820caf7dd77024cc5f099ae0419', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117338, hash: '849c662b139173e5942ec2d0da6f20b56c5d5c8cbbac7c34ceee3db6570b83bd', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115479, hash: '6636c8f9c758e36ddb8bbf2ce1cf954ca30274bdd2a937a0c515215a095d4ec7', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113947, hash: 'e75fdd5acdce08ea67d94dd04d95e4b0d41cd376f0a24113fae4f1aa715ded56', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114647, hash: 'b2075b1a82e31c619b2099bf63f393c6bf409986de825703d25d80e0427057de', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88583, hash: 'fbbd9291d178ed39b5582554b8de29e8a91e689daa259cb4727e348197106183', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100628, hash: '3d941ec632277951a057cf075add81390d272d63e2e10df74ab21959119de89e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88665, hash: '1f134cbe448e5e5f26bb95f4af33e6e82b66694296c696dd5b7377e023f24508', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 96964, hash: '16a01182bfe4ff8a4c6508b4b5406827c2bb1da98c6add46c1287e06739933d8', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105016, hash: 'e9a11009278cec4de4a0607e7b9f6c255ab551eeae3922dc0f20ff1e12f9cff1', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65120, hash: '407bb84c5b32686e6efc54f808a09121bbd279a2a699dfdc95ff00d396bbec60', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64304, hash: 'e84bca45281c2e49a3a9585e7ddd9fc75360559577d30453089ddf8836031d42', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82389, hash: '4ec93e0e3f1923a9e05289b0f329b2cbe762d61289a4e8f0f6106468bc1aa130', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78397, hash: 'f5c427b77e68978fbf4f79a163efcc75b0dec4c6b64053c442c78ffcbf18e136', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85969, hash: '15ef3e802d0f5b85b17fb60ee5acefdcc50e66e97a9231081e6e0a7f0c0cfbb3', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83991, hash: 'd6b0791573c9f51e4fc757bd1da2cbb00d887bd01c724f4d8f0f6fe72fce1aaf', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84477, hash: 'df870b1b742aa0458aa7d03a038ea9fd249dabf92df199ddd0dce1745b507aed', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67526, hash: '57bc8b913d683da030bc3ac4db3e72d73dd499aaf11385a0c95b4efa848ec204', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89371, hash: 'd581e48188df416e6b19bfeb64c36de062e5ebb21cd3f978e2f8b801286320d3', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67143, hash: '62add8f77dc480fe98d2e8d8e7339e97d30ed02ebb098ddc871698ab374735f8', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87863, hash: '6fac1ea0451c686cb8cef6190a352360c66e678357c423b7503aab137205afc5', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106720, hash: '03bb189761bad8a45706eb8e4e6b1691b67551178aad2f3c5a40053342663022', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97441, hash: '312cf47e6f7680afd1d21fd63a930bead765b627a5001197c37f9c307803e1c5', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100189, hash: 'f1e8e61e05be8d3e7a6fe27dd9f018705346777a1cbc843bda75cad5a6770af9', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74408, hash: 'a37b48fe2110ffe5baf176afcb81b963648b3265c777e2abb880498dfa0c1fd0', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73261, hash: '2799b2aa081df13a4a2b272476fc481f300ac3d7021e4af6e015caa0b30ac8d0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79345, hash: '331bc5816c08200ccee5dd3fda5cf6c275fc33e9b07c25b22d41ad86b357829f', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97578, hash: 'c4f69caa0e4474a963e91c38a2929342fbcc4692ed747791fb615b08db1d6e2b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89736, hash: 'c7dae60e0bb40d25457ad422532f5d406db613bd82dbb2e526c96554962895e1', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87801, hash: '4de24d73aded414aa8718d565f7d7fc4fb6893fbaf0078a73f524c6b9fe849b6', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84693, hash: '56619b45d5661d7982095129a33c48018d6cbabeb2250a5b94191a437959e10b', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120695, hash: '35d49cc579f342e620367acfab2f5984189555bd183a9ef0491087ca093163f5', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120934, hash: '08f49d55ba458aad87bf19bf3e206aec88dc976f3b90beaeb8b2c539d74738ea', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120576, hash: 'd5f8795aa0b16ab1cd32d0502e6b5732bdb016c77ef554096765e4a43146115a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117886, hash: '47760b7def1ab72dd6e0a2015541338b5a26d7313b1ceb60243d16261bc08105', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
