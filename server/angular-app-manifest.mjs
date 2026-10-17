
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
      "chunk-BjuhHcVH.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Dw4uonvu.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dw4uonvu.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y0DYqQhU.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DK1YPVPX.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5nPCdOA.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIwzU4dA.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5WDXhjfp.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z4Pp3Jh5.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByFFjdzZ.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfJd2pPS.js",
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
      "chunk-DFu2qqEm.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFu2qqEm.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFu2qqEm.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFu2qqEm.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFu2qqEm.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFu2qqEm.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RKqkcsV.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RKqkcsV.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RKqkcsV.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RKqkcsV.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RKqkcsV.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZVEb4vW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RKqkcsV.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZVEb4vW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DTFxGv0-.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-DBE19WtQ.js",
      "chunk-CaYZVhpV.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFvZnHa5.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-CiYQZhiG.js",
      "chunk-CaYZVhpV.js",
      "chunk-Bqs3A3-1.js"
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
    'index.csr.html': {size: 16193, hash: 'e1244c313816f3e72acef027ccd8f64cde08fec112cd0525ef6f6d8885d760cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'ce0150d15cfe54cda6186ef81861abe1f200b46a0b7ea9b48e290f404f4eee01', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108286, hash: 'cd47e9f4278f422c4bbba30665fe4340345a6d5ebd06ee0cba34c27c56c4a62b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77146, hash: '7c53abf6152fe3dea49dd9ea814956ef3c30b9aa4f1ba4747399f027a9eceb80', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87497, hash: '8be627dbbd406184428f191f45e2e1a6962df28b07bde057cd74ebb50085751b', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64429, hash: 'f11c25e97b155e8d443028f46ae567fc5133bd23b5af1b01cb510f46c0ab6710', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64399, hash: '1968c0021c1bc9353c381f62f09b3fcd173f072f5cb022d2b709faf930433917', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77508, hash: '7a5847140ad417e28d918ce0a86eee9b1ff4258e785dc97a65ee7e64e1cd677d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76709, hash: '78eb0e00cbe7e083a9e1139708cfc7ef5cc59a78576fe9dbab49bb5519c74ed4', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78753, hash: '833a63d105b2e1b9f7f1c13f3468b42d4d5f4fdd9672ce6b515aecefea397f6c', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78518, hash: 'ea2860e2ed965ee924b69d8acff02b642bcb40fba2954e7bdd97ff7762808013', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74303, hash: '840fd362e6feceec7d11ac46821cc08861b1e5a4d4f923615bdffc90ea650d5b', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73534, hash: 'ed18301e115c67a6a7af33ca9dfa0260a4f0efdf17453c5a8b2cbb4eb250a14c', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71644, hash: 'c8aeeccba30d46af8085d3cb7396910c892e71b16c64dced8da765c6caf40620', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110854, hash: '577921ef19aa87ac0299d4a4ffb78bd2ccb9b45efe1920c5f43af509cba58d3d', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117484, hash: '72efe38f696ae0f586397b3f44215bb08a1c19b504525fa85d0d9e6436813659', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115896, hash: 'd69168cd9b905f41dbe2ced5f3533c6b52dcb5a34c7a935024da3b34cdc83833', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 115090, hash: 'a736c5351154c2ee4a92ead1eb7d8b4be3f46d8feb3ee4f135840068b6bbee15', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114793, hash: '25ff66856839400cd6607529c52dfc5ffa665a2b75a5b545488f966b7e879cec', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 89633, hash: 'a6ed9ad8b5ae1f7e9e6bccdc565cccc2eca01d37383943867d2be131bba17e84', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 101807, hash: 'd4c981d14e75747dc397b99366a0e490a8587014d63ceed1831c93cf7d17edff', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 89703, hash: '9ac3dc846a0a41fd9feb3d4276a9af838e18d5ded288bcb0e0c52e17e38df04c', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 98185, hash: '0d4c018861841c6114a551a9e685387bdc19e2e9b82ed70b623db81260418591', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 106241, hash: 'e31af806b4a5928e2a1e43a9e7c4a35f79f4f5ef0fe5ca59a0839cb55f0bc9e1', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65229, hash: '1d95fdcadc0b32ea5e313a3ac68ed09f6ab0241d9505022a0745c61d093155cb', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64413, hash: '785bedec2e26838ebdd42a961b04e758dac8918722fe8da3ad5cdc221f7e0d67', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82498, hash: 'afe5104f64addaf16ff0255646947783b25a9aa40fea96287c736d80dd373f0c', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78506, hash: 'c3ac1c3e8fdef5a8ecf5f8722d91493c267d2f75f6fbb839ba281cc1bf1d045c', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86078, hash: '3238c39cdc9a1ca715b2fde83a0461a0adcb9fa13ad1bfaf3300489533b90a42', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84100, hash: 'ee3e7232376946bc2b5b11b9f7fb6aaf5a66b733c1431cbcf97443a5fc308735', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84586, hash: 'b7b45a887061c08fcfab06a63f1fd89e437a9f1fe89564cd2ddf022eee7bb5ac', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67679, hash: '88ef81ac39895dfe2733cab0f8976a02a26961c0a5614b4f0c943a886cf0c982', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89480, hash: '2799eda3ab0a4d80cd7ab393fde201d99ae0b332ede80f0cc48816841345b55c', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67261, hash: '45ecad176769baeb8d7b67a148378f5c3a6d593384dd6e26428187fa0c77f71a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 88899, hash: 'cc4648e802a5e09e54fecdf4b7cd58d1e0436d003bf0fef517ce0ec07b947d89', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 107824, hash: '00ec70f87406a21c85a96d2a106a312ed593451e518949f413c46a28adbab31f', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98548, hash: '7691cb72d7d7560c59d15c2d3d6036af5542dc3bf16390b1a512b8a9be19051e', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 101482, hash: '2b6f1c4ba44c076d96aa5bacb66714197493adb916fcdb1ada76e0823ca7b68b', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98780, hash: '8cf041d6d1dc65a2b1b47f5a6194b5bffec1569e93f382b965c3864185d882f4', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91342, hash: '68612fb4ac5e93b52d94d0761ac7ce78f156424fade08d51b274899ced505772', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87915, hash: '36618dad20cbdd7cf0b2800a9c0041366e154391c9315977433ec47d9003970a', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84807, hash: '09a9c8038e8d79e32f4e259656cf57b90b9022d7151deaaf1d8691edf185419a', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74517, hash: '2eb1eefc869aa7cefa62793ee4ad41fa9b18c6476bd16e06cc3534cb10700a98', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73370, hash: '23f05612780e68b91bfdfc372731bd6f46be1aeca9f993c35242bb88a9a09a4e', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79454, hash: '304f32644eebcbf3401e1ddaec746fb3632f0d282f71be0c72eeb8d25223e570', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120855, hash: 'f57d4cedef67462a6b0e014d939a11e7069c04ebb3a193da5afc69c1cd09c4c3', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121094, hash: '008b13ea4c622fafb293d911b5368bc109c4b808661534ae871ee8a6647480d2', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120736, hash: '35633f0d397009c131014046e0453bd644f240b23abf7ae481076933c5bb4c1f', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 118053, hash: 'b7c1a1bce8c503ea9d2f9d8a406c501199c7d2ff71a2818e5ea95b8683ab0961', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
