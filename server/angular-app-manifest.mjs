
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
    'index.html': {size: 111552, hash: '29ee64f8793483d1add8edaf8a25a82eba0bcfd4e19d6a3e813f424bfeff94f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80100, hash: 'cb2f7a1f2f868780edfd2533ed7009982d69f7570640de1a1d2c05ff1b719ac3', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 99539, hash: '21aae0be4c8203439e5c46c4282d8b78933f57aac0a1ab004af6b4f5012fc7b9', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67383, hash: '0a49592eeac2e88e74b381a581c6bad5247b3014412199b60638f5bc9cbd61b7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81558, hash: '69dca6d6c421cac8a95d4a78aa4d335455672f35888e4c99aad844c8370ae953', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77257, hash: 'e1d73c61b8de87b2af3012f7decfdd9e388891807448fe5e1318ef889f6d585c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76680, hash: '059756e53cf3cd268e889cfed3e20043da0ae31b2d5a3a25f92357d30637f27d', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74598, hash: 'cd05c5c092841ee185b0be77c5ac955c622b55fd27be4ce65262ad6e4a698553', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67353, hash: '12d6fabf0c5d35042340139e9fb9ce16d01b640bb6b7a08f6bd5f04296f5dc4c', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80462, hash: '76177494a53f6bc303894b4f2e3d2bb1ce2fa28a68ac931bb1045d41d70a26df', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81618, hash: 'e8d79cceb5fc34ff68a385b2e95bc24bd8c87a3e389222e2951aa8c743fc972d', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82243, hash: '3b36a218b5b2681fa9f7cc9515fbbd36b8739b6f1667092f4b5480645a3a66f7', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85548, hash: 'fb93e84197efefbb8158ad065f44cf92de11c2cb37341af02a04fd676bd91121', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84054, hash: '4403e1f82009ecb9e3a4dcb960e668e11574bc8c2f292443f6d158f4c0a4493a', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 90108, hash: 'ef01ede02a101272c399218484da1edcda4a9e5c2734d29e0f7c14429455b3c4', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125117, hash: 'ac7e464cea28785bd6f9c7718250b99d93cd02fb9afab02ea3bb536e861b855c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124460, hash: '8a3d12651498aec509eab9e2417fb011dda28401ed7cd8febd33d07d3af5fcfd', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121582, hash: 'c35a2bcf91fec2e9355a6d2462fd21c3b4205efd6a7451b62fb82626d21ddaca', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123135, hash: '829ec59bc45cede3d1055c7bb3e4ec0133050b21fe2321da865bb8f1cccb3f3e', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118556, hash: '52f29d3b397ab28294878620d3d50bd140313675883946b556f91733af25b446', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68183, hash: '3a11025dc5e8662c52924ec6d083cfda37cea3bce867f3ff3af21355589f2886', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67405, hash: 'ad4d2766f2c018a3032a0ab1acbba1c2d7676f01cba2503732c39e5d7b96cb6a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77330, hash: 'c9224465913aa56c2301d8aa0f4d1966a3d86470697d073a6bf317f15537c623', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76209, hash: '15a73d8c5477b8afbaa8ef62eab4878788039f7f1beeb3314c68fe6101778fd5', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82475, hash: '863023674103a0930e9040a16213449b42139eb76efa14ceecc6d6e0cb1f2610', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113483, hash: '10aebee05a42946384784764263b18fba5810768588935439ddaeaae37a4a93b', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104225, hash: '578698761d710ec0f04ea2704b94f716c0486cddee694d98c1ce2ee18ce5e741', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 107012, hash: '639554aba9665bacd25dbfa90756001b7eb3017538a1d131174cf9756e76005f', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115839, hash: 'ec0386c4ea7e4cac09ef80bf5e2679e005a6303e01f9ca78e6fa84cdeb48cca7', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115622, hash: '588bc087d4ad341b869c47d783d523525bca879b1f8d29beb4a9f1feb289c597', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87953, hash: 'a84b488e400b7c1043c630aaaf95e011f499a05bf8591f13b2383653ac46b91a', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87730, hash: '80631c09ae24641a09173e4c249a311019876ef37f00f07159865b96548e351b', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70522, hash: '2dd1760c485797e825d2594f38301942b0bb1d077cf8208618bffbfff204b222', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '5c1c0563f0d80b10303108386323e8d8730da7221e4773d34b0ccfcf1c348f34', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70000, hash: '767b6852e523dd8e303de1d6ba671a5e242ab3f6531f2b852422b789d8c91fce', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88097, hash: 'b612c000ecf5fe031a81d41bf5dc67a1c193ff249cc96ccd9753916435837e77', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82503, hash: 'fef493aa97775cbe06ab414b2fb42484174b7c8b6f8865928578d6dc14ccab20', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104455, hash: '845ae6dfc1c617b9c0a8586c5f0f097003117d2ab307ca71c5d9f3a6195a9eea', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94487, hash: 'e6d5f4d11b43fedc5056d4a07ecdb34380febe40558bbf812722037868d4bd5d', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94408, hash: '04a5e90dd394e1d880f0b58958e7e4b22a09cf2726d0458968d1e4659b487702', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118250, hash: '793543f1b14bcb0b0d04c30d5428e2cfef6f2bfcb1825afab98657ca33f60590', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 95034, hash: '5de8d49873b8f05f6ee50d63a3c4e456747ebb9800ba67ea3b9362a109466680', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107771, hash: '40f7b99c81a3284f5f50706f74476488d62278f20e35d172f8ff54c05df08d72', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95252, hash: '117a5bd456bd9295794d012360928de59aee8b39948ca8daf2dea0d208fe52a6', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94421, hash: 'abb6d9ac2efef54a2f1c2c91e46a40d50e0b5bf21a3ef99bccbe7c35340ee924', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'best-time-to-visit-kyrgyzstan/index.html': {size: 119494, hash: '2b0b1cc7c7bb8b1365269e8fbcb7b95e938c1730bf010b2a8b313b0e67a80399', text: () => import('./assets-chunks/best-time-to-visit-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103829, hash: '2db5a3bd788c637e7be71215a97cf03e02349c40122c7383f59b8af445c3182b', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107891, hash: '335a183c4584bb0389c19c93c8045e541a9a9f52b5cb227dabdf48bb428e92db', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118725, hash: 'b4f57c3c0ad204df1edba3b86f90d2369550899785e694a40e7bc120fb3b6a4f', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112353, hash: '4676ee3c3588b0d27a70cd8612a10fc9c381c33afdfffc1d64ebb39a8c0ff0e3', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118647, hash: '7b607b3f3678b8548fcf3797a8f5d19150e87cb71cb5840186c9acfa63f71a36', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121136, hash: 'ae4bd5fa19af0f92c2cfc1a84962b03411a51a0a33e5305c0cbf62f6c8dea12b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119527, hash: '17a56aff0b7e06f9fc9b478bfe727f8e16a7dd16120676124240eb27daa2ce9c', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118917, hash: '5bd45137e2302d5d9e741c8114a9fe7a3df98a16fde84f33f6988ee4595b6aa6', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124645, hash: 'b6618d6bc59010dd04094e9ebf084be90acc8f8e3a94e366988c0c5addbf98d2', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
