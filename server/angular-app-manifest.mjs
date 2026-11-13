
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
      "chunk-awh2fyMr.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CtIJ4Lft.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtIJ4Lft.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B28nbY7z.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BbJe0TOc.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8va_cZLz.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bvri7D-B.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C2pXJbRp.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CC2vtWHa.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-kkBwFNg6.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bx4ke3zK.js",
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
      "chunk-Djpw1KHa.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Djpw1KHa.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Djpw1KHa.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Djpw1KHa.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Djpw1KHa.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Djpw1KHa.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Djpw1KHa.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJTkqKi2.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJTkqKi2.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJTkqKi2.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJTkqKi2.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJTkqKi2.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cm96VvdN.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJTkqKi2.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cm96VvdN.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BNJKiHsL.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-BK11K4Vk.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU1Ao9Qc.js",
      "chunk-C_8QSwij.js",
      "chunk-ZuE9ilqt.js",
      "chunk-KINOHavd.js",
      "chunk-DfM0flCB.js"
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
    'index.csr.html': {size: 16193, hash: 'e1056c2c308d7c3f0b83793e643206c326715cc6e0b54341c16e70f618205e1a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'c8ed9ce0d401262eba9b3d8d615a6582b61a5fc89d2422767b1e2112d4f8aae2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: 'a9d90aff7fcd3e0d4d500441287c704bccc9db76621929f188ca675214f6844a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: 'effb1eb10e69c4e80272f92385a724593a469ee635a276ac8c1e7f93533c3a3d', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: '6b416a9dbd5ba6d6758fdd3fa0dcb1908c82acc739891ca523619313fd53d8c4', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'f8512ccec606c8c75c56164e3b32ed99bd4d21cf8851049abe29d9730db9e6c0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81577, hash: 'a495a762de3e4769cec772cd096e8f0f8d27e22eac1bf86f8c1a5f5126e731c0', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: '2fc6545fe6eaa0fc9a7632029dbe0acf078b3329ae2219ea64d7f9e71493c27d', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '4531b7f87b9bd1c12c8ad6b766ca5e9b45b94650e14b748ce37dd13ee05cb096', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '8e4592130fcb084ad7bf7b9cc5d1b4e48a14456d8befa9e39e8282ea096fc022', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '504fa4c3f1ac22ef725f126714fefb826b291b168375574d7003ee5db65f0096', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '79ce62173f711f5ec0a165137bcf5f22bd215d8830b7daf2315f1292efc3485f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: 'd9d0bbed17555278ab8164009b03994be0d0b246f02ff7836c3852ec7e8d0a1a', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'd2e9f681ea393177719334217de3bf185cde786a8284155c004c65051718f848', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '16dc53a40c29a0e4cc72500b663efb5d60688b2097f4847c1e332fee1cb30be2', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: 'ee695e6859a86ecfaa787922ca8e6f5ed7f87eac2fbeee6d7413a1072702eb27', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '5e124d8867a855a5f0cdbb0671e05857ed931e5d4864ade78a69ab306812b7be', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: 'd2bfb8330e317e2419c4d9129681b46d496dec4273c804ca79399776e27b0f71', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '62fe980297dfd24d8b27459fc2b56e90b64d64b3d4a60fb3a8df259b778c20e3', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '3fd1ea487088c02032ba587b3eecd6efeccb28c1726d14c623ab7fa8fa9183b0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82494, hash: '267646057404bbd55086de8a95cc2b9830349e607e283851a2c3c199108e37ac', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125136, hash: '636c932eb80ef4e7983dbc48b1207cc80b79be4a004a97e3beec38cab7ab65b4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124479, hash: '2fa9c6e433e9e30a81e161b417cc4a5f4c5872aab2dcdc555c373981899caaf5', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121601, hash: '831dc00987ff5bae4b91b66aaf6d5b3645f32c7be47e1503abc6f6a6e072ed4c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123154, hash: '3bc4c0229aa52aa60a11425aabbb2f2a62aac154c421b778275d28a68cf8d100', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118392, hash: '893753bceb7e0eedd0a5240f7fda38b5616793d7647c5fe2c6f367b9999a356c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: 'b12b35bca1a0fe6f712258cb087e8ad9db06d4bb77494eaf6b7a0632544efe16', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '69feefb73020b7663b9a1cc3da52953d8a6e76e91b151423ffa0f5cc77573a0a', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: 'fca963ecd24a911c7ae431a1acc0b93a96456264fbe8919381f25a984e663f69', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: '61f7ce15f45c5d4e1cb5df3b74248e99ddb18fad341c1e565e91dbed7012cdf6', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: '5697ed5c836d1240a7e1e5b10612a63ebc1a04f54a37baf092a236c5d766b9e2', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: 'f90c5b457f1364f4f80e90d388fa0c0b27b4d4ac3ba9f2fb9a00decf3d9f6763', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '835d9d246eeaa2ae59774caa95277eb751088c89ec8bc5cd7306a16f08b6ea33', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '8de8210610b2229f23a3f1972b3eab634875a26f5e990ab15f6c138e18bf69e5', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: 'f8daf8f82546a242ccfbde198390a8e9e49508b3601f055cb61ef8e9ddf0bd9d', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: 'b768fbcf7117b1a4cec1f7c0e1aa55acce3b128059a31539512dbcba261a80f5', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: 'b47145203dc20fd4615d906a343b34da633fcc6168ad54cebfb73210e6e4b264', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: 'f7a9333068e6fbd600c37f63cc60add1d43a00be0ea8130487f98acddaf2a3ed', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104474, hash: '134cbbace86d256be6c083402a09515bc173e000501d66b378523788b1961f6b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94506, hash: '63f9479230eb261c3a14d34eebebb03b8cc45e7e94d20f6fb711f6c130172f3d', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94427, hash: 'b4b855dba8d2b30eaf646149c936acfc2dba82ec40de14e76c86dac60bb49977', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118269, hash: 'b38c12ab7d97ed7975ed2e67677123c596867dd5cab0f1dbfd2fa93cd37469ce', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94693, hash: 'b7df389c6a90a3b37e8accc8b97cca5175f0aaea66139e3078a0cacd7a54db57', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107877, hash: '94673067b76acb95f3237df9352b6b0f6b66332cbb3869ba75386f5dad954b8a', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95279, hash: 'fa88c03d0a5e6b411a4d298f843400d9c9c17f6c71521cda0682736fa8d104ee', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94434, hash: 'c6b07170468387e899adcf30bf53b1e6bf6554adb36e9c13e06b200516bc03e6', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: '764090f927230de091e8c44f01e8151fad11cf193a18d926e76c577c4da54cd8', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107324, hash: '2c7f5f38531e96bace8f092634c66ce1f53f38176189d1d6f9fc565a37b29c57', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118096, hash: 'dc8d7a6d385cb06b41641fb1e9d4b3ce578b60e8453bbacf0daedde1dafbc7c9', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112125, hash: 'f79a187b7918f8e126c58a7670a0f9e8d7cb9f24f419e92a8c545c781c7ae484', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '437b9f319d6401e4b6ac23a73cb2da61d110848687a3ffcd38051dac3aaae40b', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118666, hash: 'cb18e25397d4392c4070705c4e62130e970602c2e20714631533c7a262ed7209', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121155, hash: 'fab1319dbaa7b8991c3430e52645dde1bcb313219a80ad74be486b913e044bf8', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119546, hash: 'de7be3a9c1a96b295cd60d0c33fa25f51b0598cca015cdedfd8e533ff3d2bd86', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118753, hash: '5fb826059a0f9e5ccc42150a500ddec142fb14dbf0b5015534e5e4b96e8f9c95', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124664, hash: 'c9dcf7be152ec6903afe2f4788707f4d2efe96f1484c92b90f71cda571252e43', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
