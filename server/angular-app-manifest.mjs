
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
      "chunk-Cy-n_6AV.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Cxx2f-B-.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cxx2f-B-.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BB59lw-8.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dj17vcXj.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXDIphDI.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bp-3221u.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWM6hmO1.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoFYj4pn.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMPc1U_O.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdV-M8dC.js",
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
      "chunk-D0-uHdsH.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0-uHdsH.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0-uHdsH.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0-uHdsH.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0-uHdsH.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0-uHdsH.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0-uHdsH.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChbGeZIb.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChbGeZIb.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChbGeZIb.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChbGeZIb.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChbGeZIb.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5cUjHkY.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChbGeZIb.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5cUjHkY.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-vFnFhg59.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-C_xvpTpH.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/best-time-to-visit-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcNuhHBM.js",
      "chunk-Cc5rem_u.js",
      "chunk-B6UVu2bO.js",
      "chunk-DlzwngAD.js",
      "chunk-Cro8wrSE.js"
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
      "chunk-DHDrso3y.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '8d780df5f8851db15b95ee74c23172baff4d7b1cf7ff6b26b7685fdef137dffc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'd76d88e20fa230d83a3c995b2d5c157bae19d4f872898e475163eb06cfa64367', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77257, hash: 'e1d73c61b8de87b2af3012f7decfdd9e388891807448fe5e1318ef889f6d585c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76680, hash: '059756e53cf3cd268e889cfed3e20043da0ae31b2d5a3a25f92357d30637f27d', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74598, hash: 'cd05c5c092841ee185b0be77c5ac955c622b55fd27be4ce65262ad6e4a698553', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67353, hash: '12d6fabf0c5d35042340139e9fb9ce16d01b640bb6b7a08f6bd5f04296f5dc4c', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80462, hash: '76177494a53f6bc303894b4f2e3d2bb1ce2fa28a68ac931bb1045d41d70a26df', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111552, hash: '29ee64f8793483d1add8edaf8a25a82eba0bcfd4e19d6a3e813f424bfeff94f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80100, hash: 'cb2f7a1f2f868780edfd2533ed7009982d69f7570640de1a1d2c05ff1b719ac3', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 99539, hash: '21aae0be4c8203439e5c46c4282d8b78933f57aac0a1ab004af6b4f5012fc7b9', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67383, hash: '0a49592eeac2e88e74b381a581c6bad5247b3014412199b60638f5bc9cbd61b7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81558, hash: '69dca6d6c421cac8a95d4a78aa4d335455672f35888e4c99aad844c8370ae953', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81618, hash: 'e8d79cceb5fc34ff68a385b2e95bc24bd8c87a3e389222e2951aa8c743fc972d', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82243, hash: '3b36a218b5b2681fa9f7cc9515fbbd36b8739b6f1667092f4b5480645a3a66f7', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85548, hash: 'fb93e84197efefbb8158ad065f44cf92de11c2cb37341af02a04fd676bd91121', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84054, hash: '4403e1f82009ecb9e3a4dcb960e668e11574bc8c2f292443f6d158f4c0a4493a', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 90108, hash: 'ef01ede02a101272c399218484da1edcda4a9e5c2734d29e0f7c14429455b3c4', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125117, hash: 'b6d24b2dc4e697a22da14565f6f1752775769e7f9f3f8fe644fd37f6f2d6c787', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124460, hash: 'eb883ec199f03d56d91bf7abd089bc63dab15a115f2bf8e6e947222eae97fb47', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121582, hash: 'f923837507e262f1ca547ca4cf02ab35ee00f47a8fcbb51f802bea633474ecb1', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123135, hash: 'f3fa6256a4db052fff21affa480c460b511a89aab58cba31aaf07c701077a5d8', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118556, hash: '7f3110dd0ef0671a365fac9a9d06cbf455b1a0b00cc86579479d8be253baab27', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68183, hash: '3a11025dc5e8662c52924ec6d083cfda37cea3bce867f3ff3af21355589f2886', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67405, hash: 'ad4d2766f2c018a3032a0ab1acbba1c2d7676f01cba2503732c39e5d7b96cb6a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77330, hash: 'c9224465913aa56c2301d8aa0f4d1966a3d86470697d073a6bf317f15537c623', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76209, hash: '15a73d8c5477b8afbaa8ef62eab4878788039f7f1beeb3314c68fe6101778fd5', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82475, hash: '863023674103a0930e9040a16213449b42139eb76efa14ceecc6d6e0cb1f2610', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113483, hash: 'b75c08d586e56676ba55afd199316d0b8470823e59e66cfa5a935e61afa47728', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104225, hash: '6da9ee9ed717b5d770ba8d238124a9324b3882e9b7b36a5890a057037d70d887', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 107012, hash: '45b2d94e2ff68579a03841fe72ae2293ec4eaf0f444137e5a4ff7aa2d60b2846', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115839, hash: '885338f6780f77db57e2b7cb402bce32c6da7b97a0349c975749104a0bcd452a', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115622, hash: 'a7dc60370e1f2ec616578fa97e791658eb996e063995aeeae8aef148841b64a1', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88118, hash: '7a3f404a412e535208c4aca78d76b86ce44d3bd5579b0ba30e777c22fdb0e62a', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82521, hash: '38ec703f3c988dc1d23e53e6015ea59e7fe597e8c256265ba810160386b287b1', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104459, hash: '4e848b1d72ab3cdbeb17e27a3dfe324e4f8acc6f83963fe9db790ebdc7f00558', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94490, hash: 'c6bc8c0201b08d45976a374ac39dacbfa04851740f678ea1ec79a38a9b283999', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94411, hash: '78d56b6eced9c0f0f2deadd0245d6219d7875b004dfd1173901687b0f5d3fb2f', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87942, hash: '3becd26aa30a0e39a08da36858fe08dff636a6d000b08d5d950fafaae7390c01', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87719, hash: '4483d8b8e57584d07999da7d39da7b1e3c1eb1c0bc414429c70f50318696ce96', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70514, hash: '34325471ac6b23ca5ece88f7f86a8b8a1372085bd26b36f0cb37c2d549a91e2b', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96507, hash: '67ab3d1882969e2eec4773224446bf53da97ac3e420e68933a965c3c8415919e', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69997, hash: '0ace5dc572a7416ac0cb27fcdd58f8555ddad7aff72fe4ddaa7ca8b3527ea1bc', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118250, hash: '793543f1b14bcb0b0d04c30d5428e2cfef6f2bfcb1825afab98657ca33f60590', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 95034, hash: '5de8d49873b8f05f6ee50d63a3c4e456747ebb9800ba67ea3b9362a109466680', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107771, hash: '40f7b99c81a3284f5f50706f74476488d62278f20e35d172f8ff54c05df08d72', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95252, hash: '117a5bd456bd9295794d012360928de59aee8b39948ca8daf2dea0d208fe52a6', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94421, hash: 'abb6d9ac2efef54a2f1c2c91e46a40d50e0b5bf21a3ef99bccbe7c35340ee924', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'best-time-to-visit-kyrgyzstan/index.html': {size: 119192, hash: 'f56f8a2c7622694b40bcfcb957d750eec72327177168ddc4862ed3a3a6de71c1', text: () => import('./assets-chunks/best-time-to-visit-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103671, hash: '551846c049c6f349385b375d4262de120d88579d0a49129a781e67001d0f4401', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107681, hash: 'cad0a6068ca234e9ca13456016c223f498da2e86659e052cc5f4100c993b0a36', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118439, hash: '9328f2a42da76b5f785145bffefb191b1f3d3bee4072b67cd8362ddb4b85a06f', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112156, hash: '474509d7a392bad3a9cb71c5bcf5113d64b59f7af55593587c2f70abc902535b', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118591, hash: 'e14a45f1108a1330297f48b893a50c953d59dcf6b942f84b7b2b63b4d6e067e6', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121064, hash: '1b1d6a889308702a12b913d2193a6f3a347f9737d78cdaa6a090644881327b8e', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119476, hash: 'fd9acbe3f37102deca080036ea168e5f51b9309f18be80c0cdb7d781da8d32a2', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118853, hash: 'e4ab94f90554374efbc5d50b88c2cc41d2f21f55264c5736fecd192e222593b2', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124579, hash: '55d8f5a2820f52384b3fdea1fe10479c98f4b6b10e932906e9201e1b58583316', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
