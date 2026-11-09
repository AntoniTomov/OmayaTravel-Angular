
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
      "chunk-DwRgqvcz.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-ERFAAoO6.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ERFAAoO6.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O3bKMdCJ.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-zs6aRW.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtgRP1Ar.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpdiKciR.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cfb9_nsY.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CoQecqd_.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWznOgLd.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1V05D010.js",
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
      "chunk-DA-VKKTA.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DA-VKKTA.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DA-VKKTA.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DA-VKKTA.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DA-VKKTA.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DA-VKKTA.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DA-VKKTA.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-luVYdyzv.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-luVYdyzv.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-luVYdyzv.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-luVYdyzv.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-luVYdyzv.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dh47hpBa.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-luVYdyzv.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dh47hpBa.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BldZbQc9.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-B2PZ0WkW.js",
      "chunk-BjiCJrk6.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bef2DtkB.js",
      "chunk-C_8QSwij.js",
      "chunk-DoS6FJ8T.js",
      "chunk-BjiCJrk6.js",
      "chunk-D-akbnQy.js"
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
    'index.csr.html': {size: 16193, hash: 'ded712bfa0957c1461f456d7ef87983a0487514201083e1dcd6e93bf96f0dbbe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'd1760d2c24afbd2c07889eebbc3bf3cadb36b7f14b0d2c85eced241e8fb7e06c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '3a32be487af52de5fefc512cee0cde47585b0fa4e44f2297fa5b117e5d2aff18', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '4d3df9c74623500f002bd2b2cc02fba4042e202944ce82666a16e5d888b35f2c', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: '1df38442daa2ebfb971d2043f7d2fd06b4a0214ad956cf3548fe70f6e9f704b8', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'e4903b8cad3f18a3572d037bee2ebbc3d53ed5afac9731cb772dfb3455b52b8d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: 'e1764214491db79aa2e8f54a3f031621436024051624c3197e30a974b89c4bf7', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: '4b7e32f85f029c21fcb9b7abcd591d709e5ce1a82a288d6b4ae5eb0f18661882', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: 'be5845daafb9f603547fb570376e307e19617075cb8cb9e6b7971aabc9a0d968', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: 'f831ce1612897537c557c5a87a5b6fbe23509083b0676551eeaa8929d4698a53', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '47ea059fdea57a5cac8d986c4f670bb941dc2ca374f8b22244429f787ad70ffd', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '83d7c9c0a5341c3aab32c06f75ce680870f64e3d2969b246b5a206f3d4b72358', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: 'bc3d3dd51e5ef0faba489b0ddcd002bb3bfa647c5b85e23290527f91317377fe', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'b50d68e02605fd26c5cc0def2564348115d43666f5dfce291f91830a173c028f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '25b6c4018d5c5d15437dd396561a692be806860f8fe18bf79bd7c43f62e3bc25', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '3eba2ca20632b75decd4078de483dd7277872db2bae30d2ac48bfdedf8c33a18', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '9dafa4bd2d1c64c4f432f8a3dfc979fcc26369dcbdd8d18fc4137590ecca3465', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '836f920e01fcbe7beec8acf7fa8f2e3eea6a8451d5d0f09843ff2df9ce4b0c65', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '17b9a31c6a5c270af5bf1aafc84c9d361d42369b8cd709febd680909057d6459', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '181992266d0b89fae8fd60a830f0371f99fee9876d5d2ed842b247fef57178fd', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '2b87ac95ae65e75fca9f1cc151649b3b084657c150ac39d0a66911b5c22dd9db', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: '256eab5a2c156efc610c8c2f634eb5d5ac4eab1e00aee5920c059788deb55f0d', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '37a0a8ee5d035ec741e6f69e8e1c285073800369111d821dff5b25e727192f7f', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '9a637bba99c831a6722bda926743df3b63d821a946b513ca2b5d64675258db09', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: '00bc12546b00c7564e7a03f714206ee1b637c3af8dbc53bf2a495a0e39a16791', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: 'f868aa84b9519467e5a326feaf0c8f83404b4e91c5ababdbd60a4df6b4a95615', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: 'b5bd232232523fd6a506610bb231091fb0e3d5ac26deb6fba14e13a00fca3df9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: 'eb4c35beea905ab54a3cd2463b1b45ea0147752fd01123257e7c6a4ddae477cd', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: '37714cb0525e25f6ad47d6cfabee95049217c1b1e61600b2028c1f56fe1c2ae6', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: 'd2249c7153aa09d905f74349bf96edcb10e35b387d33429de10ab36b90ceea29', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '4b5159ce31e5ac96167a5bce37f388c60c8284596f789543524ef7cab675a5a3', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: 'b0c09b353809f527660a9ffa9d75dd92ef77a4db21f45028f8aee5b334854826', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: 'a2cce784fa2fc0e909995489f5af48517a5435d3bca8923f239678cdaf9c794b', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: 'f4bd7c13cb4789f4d95adcbf4da302761e31d18bd79c4324edc28359a9b210b1', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: 'aea3d0e5f1a7d8d6cfe64a76413e737de548caeba246afa53123f444befea4c7', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '40a6b136648e33b849210074d2237111ec39d48f650123fbb716b654454be9d7', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118211, hash: '4e4f95df15cfd42bb74c9cc2f9530cce387ce8952b9dd6f4b119dadf3f3e6f53', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94620, hash: '73a3bf0794f9a612410e3c7baa447fcb49ff6e65b5ec5ade4283047639e18993', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107683, hash: 'ccf7218f723cd80eae564c04781bd6a243c9489be9fc01489bbc8502d31b80b7', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95187, hash: '4c9c75a168bcf75db860ba653cd39e6e680687ea691faf17a6a9805ecb80c485', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94361, hash: '3312dd49e1d8da1f95a77c100229b7de366017ae349145fd4b148b9a12fccfab', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88136, hash: '003555418c851e9bbfb52c134b717fac1b247f6925b7fdc3cff3246105f0d4ca', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82539, hash: '108891f34881044e4c2507ea0e01062ca44d85f685e45ed2cdb222f7f320d44b', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104478, hash: 'c68d01186752391ab9dad7b51b7dc269e60e855394a0b96793456d3f4c7a641e', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94509, hash: 'ce46ca6e33754e6e9a3d2d191869377569b842b432d927df2373ff5c0831fb9f', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94430, hash: '8ed5cabd1e98a5deb6bf75d997220d7d9c6ace21145c3b12d98b29c3129c040b', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: 'e45f0ad1b9c6a81bf11d685bd417e799da64f23f4e79edc660b377138523ce0c', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107324, hash: 'c23e86569e63d81e15c60b50389557d514d7265bfcd8beeb18973638ad4f7740', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118096, hash: '2ce8a0f0be68381ea2536ca0db393417bf4c7683f5bde69ea05915eaddf3244f', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112125, hash: '91ef584fd077449c54ec5a0fa75a2513522b96184105bd93dc0d875dd151da98', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: 'b90ef2a0b5041f86be9f01e0b1e966ec04511625117236a59e164cc85519cafe', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118551, hash: '1f21f195fb9b836cf8fd8d721def1a0cf17ba086dda9c54e132752a292fb3f70', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121045, hash: '6a5e46ff9e6a1d4a51234c20f3ce0d6d2484980adfe8b9fc09cd567c268b82c7', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119436, hash: 'dab0de991076b2c4f27b6b8971bbc93299d26483a182cb356553b1f18adc17c5', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118644, hash: 'e4f8cebb8156b1357c5a3c58de350846c202a94fa105f9007cf6879afca34ea5', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124550, hash: '0100c2bfbb440e831825eae08904c86ccd7bb322f70d60b69efba6ef90eda8f1', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
