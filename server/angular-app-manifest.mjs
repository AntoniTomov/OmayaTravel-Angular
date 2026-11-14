
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
      "chunk-uUtO7m6x.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DVux2KUV.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVux2KUV.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gQNzyPjV.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q9UKJsTu.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C9hcrKkU.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BhAw54mA.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtAZ86pr.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bo4LlKEB.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lIdn7oB2.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dcr-k9em.js",
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
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7RT60j3.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7RT60j3.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
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
    'index.csr.html': {size: 16193, hash: 'c0b442ec2385e1c81177eb81d0ab1dde3fe70abc038b85986b98683d0fbb4547', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '7aecd9c8a2cf7001c53a18cd9290b4f2ba35348d563d64b9b3dd4eb4f977af90', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '925effcb457226a6f97f9c8b0e3fe99e9b56a4655905b8312d08ac97c2021dd4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: 'f0047a17940ea58a26dc15328f6a063705cb9002c0a3838a2efa34e278b908d7', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: 'e3d88d886bee6567d1ef19fc8250f8b89918e42e6f0799d2face37554f7c3205', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'aab5a9c0cec669cd98265059e61fc10a73e3009fc240419300c1e19733c3f383', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81577, hash: 'c98a6dfe80781bc91bf6b5f3faa3d4a90fe094676b5784bfdacd8bd3fa79477d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: 'c83769897d216ffccefcc9e9f57f5ead3a715ef33b141b7a1bf051e13e92bd9b', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '9066df04916e0f71161959b719fe77d4572028fb6057dbcebfb210eea844b9f9', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '35da05d275405f3c2e0429bd16ca919e8b2cb6d337986a008f86b3c0f664db1d', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '3c3d6975b8b2b80d638ecaba5be46ec196cd6e4bfbce9174f0fd64ac20fc1cc4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'c63a18214f1a944753d6e0af7b6fa3059628ad2376e1a3aaede05bc7f209d3fd', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: '6400d558bb2bb4c61b382979cbbba7dd322c1acdace8308054ac62e3bed99758', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'c6a9e6d240e24fc523e7901088d3189e972b60b4605bddc2bcef967471901eff', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '0adf545b3963f3100f8138acbcb2000ff29f6d5cf37a309d7786dc6a9eab727a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '4d7a1f74c79c200c5daf8b5c741577f837a3a6db3ba2ba66669c89561ab67e06', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '3b28b1e498b48c8ebc73f4984fdafbed26a4cce89f0d63d541ed115d3632fe6c', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: 'cd00d04cd59bab61b2d6d388e35c5be872d9506be1f82404b082ba94a64745f3', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '58223446fd7de138cbfc9fb6466d6df63057b0034fef3356fa7576cea315c8c0', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: 'be3fe70875f18aaee23249dd57b487cdaec2ccb03cef588d6775d7c4ffe8a5f0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82494, hash: 'ed31cb69efa97430c7ebcfe93d6b4dd606d9cb277870d11b6938fec0119bc799', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125136, hash: '3e1dfecefef5a9fc9e2910b50181384879eba4740daae007e00caa72465f867e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124479, hash: 'e6b608e5b729fd87f154b9644c9087ec51be37f5a2b7fc39c5bd1139441dbc52', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121601, hash: '2cca8916dd7dc73e6db99b5b75e8c69c47b81485a6c92bbbecc8b83627b5ac92', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123154, hash: '32ddc753ba67cde96bf43b390a26b1fe6b3f44c4b6a0c6ef9cfaba1f8797d048', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118392, hash: 'd4182dfaea705a0bf85d7bab9d96985870d37cca9e5c73286f52a5d16868bd1a', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: '6e73da0a607bf6ac74c2841b6583b5ef79057a3421b1c0cb65ec1ad8e8817ea9', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: 'def678d6a88e8bbe619f05e928f2c4787368e8d63c8eed0adcd8a03ef10fe5a2', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '7b635d63ad24f7e8d66d231e69c932990f5b2e8546203676c64d84cfcc2ca182', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: 'c0d9aacd8eb7121ec7aca754b6d110273d58579dbd3eb58b47a71527e478f73c', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: '8cd65da15588cceb482b872de15889e216fc7b76851e3efad9d636268a8232b9', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: 'f135f992464eb36bcb8d432d21be3abae9c7d8d3d10a6d043f1644be37a3736d', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '6605baa12ac5a00151173b9645172a7d5053c669179d546fc983102765256f45', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '6c3c493bc3a408c72660b6ebb6043d7f9fbcb4c76e1519b7244c55fd86ba5505', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '680101a832f5803d71e678dd726467cad493cb8adcbee7315b6abc6f32388a3e', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '6ca82d10d2284f5030f39dd1461a476b92a96709692cac14db6c40ae5b737164', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118269, hash: '123c802e8ab21be56435984d116815796b43293d9d659a453678615cb0bbc6fb', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94693, hash: 'e15662d024a5c6b8de13fc8b8a9fd14f9b970bb330744679272e9310f90a6723', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107877, hash: 'ed82e55eb60212029b050a0d727c052d8be83a4631a279e5fcf5deedcedf5cb0', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95279, hash: '75db0eec68209f8686630263398ba2ee1f180919832f603549a99992f56a201d', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94434, hash: '01d0394ffe163c022b783ab274ce32129fd36d9c71a0f0445f95f47e217e6a84', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: '1b452efefdec889dccc77db01a8672ef86adfc7d36375eca58490f942abcda78', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: 'b47a7c6f2bc265803193b49e19da8bec55fad7a3896ee8e176778b7857986b41', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104474, hash: 'a4c4c768a04a57d7e590d7a2307acd582f34ed2b0d480a772e3fca16c3dd5b37', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94506, hash: '46c409c42926fc8fadf9e7a1d26e836d04c28e55aa6c5d19a9d4819a07cffe9d', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94427, hash: 'ce3d3f0583e180587b8645bf6c256efdbbd78f98cef78e2000b5c1b31886c607', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: '7f0bcdbadc0cb4c23641a7b58621a28b56f5d3ab23d4bf3b80b015f5e411ce61', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107324, hash: '76d8268d54498710fa99d001ec692d15787dfd79a85246991a9ad98ecc484cf7', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118096, hash: 'cca92845558258b4c926fab8d2afcc6bf843674a90717a24da43549f18bf397a', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112125, hash: '71762e29a7e046339ffd4840b08665177c5b260a5be6954acfb52666d098e4ba', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '518a070faf751cb51640f4caf917faed94f33226617af7bb30f54263fd69a3f6', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118610, hash: 'e0165832c819eb92f5d26ab60ecfd3f0cbd096793bb550720d1fdcabf9424f2f', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121083, hash: '9df1da05865a91fa9f6f9d13b02783e412ad4ae662660e7128404fdcc7d11b2e', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119495, hash: 'a6ef6d5f03ec4a3d9e783edb37799fb350da3b495898f865e1e165f40f08c4de', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118689, hash: 'dad10d9459de6da5d1a8a804fb0fafd5f8c69b03b07c6bd3c255deb60541d93b', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124598, hash: '8cfb3f2239faa7fd1c50fad0d3d0a7763b3ab1ceecdba4899ad9a025006fe6b7', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
