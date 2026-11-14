
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
      "chunk-Cs9CAG1e.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-naChWtnH.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-naChWtnH.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2wCgTYn.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CqodT3hE.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4YGdOX4n.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CQ9QZwK4.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cs87QFhc.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRT55ipu.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-sgmFpsjD.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CvZ0cTpO.js",
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
      "chunk-H3YqZaIF.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H3YqZaIF.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H3YqZaIF.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H3YqZaIF.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H3YqZaIF.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H3YqZaIF.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H3YqZaIF.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CigZVOrZ.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CigZVOrZ.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CigZVOrZ.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CigZVOrZ.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CigZVOrZ.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkuTVCXB.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CigZVOrZ.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BkuTVCXB.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CpTqqLdS.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-r3Tox-Zg.js",
      "chunk-VE1___9a.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GN8vKfoi.js",
      "chunk-C7OS4ZvX.js",
      "chunk-Bw1arfM-.js",
      "chunk-VE1___9a.js",
      "chunk-P9GvYn9C.js"
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
    'index.csr.html': {size: 16193, hash: '186d4a39e207cda59d454659191ebacdcf1a8667d8b341c3791842aeb077c0cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '0fda02f8bc701081fcc64249784c245a97e0fdf8517aa7b039fa1554cb60682f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: 'be6c4035beb7d3e17fb4730770573d4f51e5f570b6295bf6199c94896d97f968', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '1108997cf1d1332a00ca25e3be4811922ef08ae82a56d13efaef8978d2f77ea5', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: 'ee751221750fe83897c156537dd7bb8e466b0a18d8c3e88c3552d0c6fa13cfc7', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '975130fabf47dc3101e88b70ac189d4798dbf5a71f0c95a5d09640b41bd28672', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'f0b598a672b71a00d926e1ce3c133f722f84c4cfb64a5a738050298a4ff1d318', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '98df1ce2b0e01a0a1f34dd1e94d5da6978a962d8164888b81f9f0700f247521d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '1d5f4cf3251d99e222a1e727268485060f84231ce46bb0b261b8136552ea2fe8', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: '89ad40d4c5408f2073fa981b16891bb15c599d3469e16250f34aaf06ff596d9f', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: '326140d9ab3f4734d38d54412e86028daed1d47d553c77b78cc5a2931fdfbffe', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81577, hash: 'fc9c10106b1b1d159e73d5a41ef06097d3111a7f8736466e5c989074349b9c38', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: '27ee4d5fa5c1979d34cce6444f9e9d06a79201938c2aba22ed03283144e46a2a', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'e22e559dca892d628fc2b324ccfe09cb47f3e509244d00a9087a86322faefcc4', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: 'dc2fd59919f1f1e4cc595cd2c38facf0efbbdfaa594c5771ab15496bf422b759', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '8eb0abbcb02d36225094cd1a86d2277622cf3c8f64d829ab6f9ace5b5d8dbb63', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: 'ce7c0d0c14c2205d69f6ad4d92ded6ae82764502717eeb2ad014183fcabe800a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '3283008d10db0a614e05971f46bf3147f625ea2d0bf5b1c2e642bddcc753aca9', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '74bda23a51a7e2c4aeb49c76fec841cf7954e90597d308e4fa006475d8e1745f', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '433517cd0ea85f2b4265d8e3e6b18283882a29a8d830790e2c775689f3d1cfcd', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82494, hash: '76a61effe8eef779cfd91eb6a115e91aa631a139c1291871893a90c14f399dcc', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125136, hash: '1356582585acdb47bfa6ca2b612b5a930a730341177e0dbf1286ed6864ec07a8', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124479, hash: 'a89b7fcf010e19725e046bded2a98fc62476df9626bd3cd8a73a14ad7b8f7061', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121601, hash: 'dad3cb68302b4208bee351a217970e4466bcb13acef4b6b5b85e2b159ac90144', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123154, hash: 'b183b0105bebf897a3e1fd6eb3cc1c2fadf2e5453303a2fa3c0146b2a849fc64', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118392, hash: '5cfeac0930341de82418b8584e7efdd133f5dfa7db73f11cd7547a8064efa386', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: 'e291bc96e0371f5805227e7db379a2370ca21fccc1ac7cadc5e905e7df7f8a80', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '6722c4bf8cf7c8c3982589bbbfb9184f7d7a0f418a91920f592c1fb2d77b7bfa', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '67fd7d5ac1297ea8683f6ae8c2986a1c46792691c4bff8ceadfeb36cb8c13e08', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: 'e2a2e46b3ced8fc419fbb7a77abfd7c89f774a1b6776d82e52d728ee952995d3', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: 'f95a1ce4e9a2106e506c68849705f3105a8b9b4aef4a690e6c5b99122efb86ff', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: 'acce524fc8a148ede450881763b79430a1ea80ef165e09f3032807e844bd394e', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '601d3eef7e7ffdaa7f987bcff91bd75b99dc458b4f7810a5a4d0bc2b546c9547', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '53d33bf1b1cbfac234dc183ecbf9b0ddf65c285e6d925d5b76373f5ed16db10e', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '97f828aff54e6e1511914b3b4d700c2bfaf0bf60c31f39f2579e93eb373b0adc', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: 'eb0fb756bd7be36f0dff295aff6cfb5035af7b909acab9e06b94b73753d04380', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118269, hash: '0ee07969c7f4827ede7167e0f19ce90b0dd3e6186f274db90e92eac5d09eb06e', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94652, hash: '4aa8ca1ca999dcfda95473fc1104e2263e2f90ab35703543def86f166258da26', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107750, hash: '59caa87037daada9010bfe45d27d7f82cb96896c1a98d0547d3046805278b29d', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95225, hash: '1ae4da80952414c1a54b139307eac4f54231647511f0cd3f3239a0e3abd27726', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94393, hash: 'da43b3f39694ab37845a7a55fa9a535ef7896b83061971849b8597828344b6fe', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88137, hash: '7d351e759d5878e3d4aa9c8384c8b142648bf396e2a76b3ec63ff0ff77d86eb6', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82540, hash: 'd2dc601b13aee5beab9f56525631c61aa6f73972f6087b6c444b3dfb63e62169', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104478, hash: '93125c7fbfeaf8f54ba42fb1d112d1a0789103e2fb25b1f58b835bffe472c35c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94509, hash: 'd4dab8a54d730303b921a63bafe3757e52494d2b12620e53dc65c652d9328a99', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94430, hash: 'e71906d9096099f60c82cbca02b1e30690e48dfab53cd3e41cb6f60b00248196', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118610, hash: 'b5cbc632848ccf3e4c949e40efbd87d62046a7842593ca144f61d3af1f0654a5', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121083, hash: '45e2a7dcab243afe060df85c61bffe3ba8a71f589ce574a6181eef2ccac1274b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119495, hash: 'a6d4984a6a73c712d6f4e1399bdd9680f2b2073d548e2ac516229a6c2ebcbc28', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118689, hash: '86132815026764bbc56625a5ba205eaf787b10b4fb691b3663554d70cd6e0e10', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124598, hash: '8dcd10b0ad145373879751229ee305a508979344a9c861ed7bdba41f51206d57', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: '73b2100f67c133ec1608df01ef26fd81f2e83b3229d93a2488f3310fa48195f1', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107324, hash: '232b07e96e8ce2f957445a22d63f5d44f2673e73515377cc23d937af846093aa', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118096, hash: 'ca3e4858506671a7dd150a190af5530f77397844be7b909fdc1258814bde5c2e', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112125, hash: '6bf4b2c055726631fb7d9c4f147b83cbc1ae2ee3f728349b8e08ae1f445d21bf', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '099ad20f2cb3cafe016807ab0dd1a37ddd9d55f8a91ac0020dddc07594f231f3', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
