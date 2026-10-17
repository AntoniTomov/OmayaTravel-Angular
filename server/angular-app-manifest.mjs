
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
      "chunk-CY9QS2ZG.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-SUixRXrN.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SUixRXrN.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlQa2XPi.js",
      "chunk-DICdyyJF.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--r5CNqb1.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUeiB74Q.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChRnp7a7.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-sIdUMxga.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAs-lOVy.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbOPjFn9.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DN_lDYwf.js",
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
      "chunk-B26FkvwG.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B26FkvwG.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B26FkvwG.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B26FkvwG.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B26FkvwG.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B26FkvwG.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6zAooSW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6zAooSW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6zAooSW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6zAooSW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6zAooSW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6BbVJ-b.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C6zAooSW.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6BbVJ-b.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DI1Pbg8p.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-BBwS9mzK.js",
      "chunk-lMBNtRYt.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R7DKN2tL.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-DmYfqrq7.js",
      "chunk-DICdyyJF.js",
      "chunk-BBwS9mzK.js"
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
      "chunk-Bw8nrRqC.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'e2f7224861063f2da639eac985fef9d78b85cc4abee5b86125ae9c234bcc1302', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'c12de65a471860503b41640978b86b67ef7760162bea31c96aea876cdb5733ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 110810, hash: '5ef3aed34c46259ffc3f84106745fea93d4cc4cfdbb4bbe9aa25ac816e605790', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 79670, hash: 'f689612ec46e36d8fa0d45f764dad624b39c260b1af788823522603229ad60b1', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 90021, hash: 'a375c7d94a55627684a226f51e7cabdfa5f15e2e4906e47a8ba57d5978d3bf8b', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 66953, hash: 'dd6a7fc11aa83fab70d57123eb1c8588fc92c797dcbae4411327c52cc691b381', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 66923, hash: '3887665c51a1211c1423d2582e1a754456024eb4bbe6be3d0a620d21480a2ca1', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80032, hash: '0a6b13d5dbe5d4a696703f6c2f7cae4ea845fe8b94fa24edc3db62c39615f865', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 79233, hash: 'fd72ffd2cb8ed1caa0826fdae8954df9595618f64c72d2b50d8f36c3e00369d5', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81277, hash: 'e4c8774e2e5cdf8da1c1556fc9041fca7c6c4d51e949a86fc67c9c503555016b', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81042, hash: '38a32c7904019ea4ec1ea2bd2ce912dc138c2f9edb55b47db02d2ac22a5a56bc', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76827, hash: '30f755690403c8360f31a79591fb97d8bcd56dc762a4acfd9d093e1ca5778c66', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76058, hash: '96fa7ab02bfc4bd40ee1ca25d5bcce223152154b1df3d09d6e9861875808398d', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74168, hash: '2d63d331792b31fd3ac3838018e841fcad45ae8f02a8ecbfe80633294ef2646c', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113378, hash: '7fdd9ec4afd80c9f2d67f238ce9bd6da474c34be8d832a105b9259235cb65927', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120008, hash: '7e9a6025070f4437d739bd6d8b91d6ed5079ecfbdeff6fea0d21e068a0d96172', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118420, hash: '0f883e93d2491730d16da55ab433541c9da9c5150c18d8a532e04853f9da037f', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 117614, hash: 'd4903665c9ff77810b73fb99d8b0165814b55e8a4cd4b92f1461e960c5309889', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 100709, hash: '9f57f01ca74c0e194ba22d1d97a90c94defedf534e579892b6e25e8e24f0de18', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 108765, hash: '0afe91989cc412b2b5fd8a7f27c5061e6a802d9b32628aacd1a898f29f5a4c39', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67753, hash: 'a8ba35411a18aad1656572e4debb37bd7edbd0dcdad1dabe5854670d12d2b370', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 66937, hash: 'ae12d06bfb8a5a3e4d1c3233c0176e270f110030a7c3b4b7677bb7631aaecf44', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117317, hash: 'b5bb36042b3bb6f7245fdafb9a99d3dc71ce95b55f2bae7e477f4dcb261cdbbb', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92159, hash: '3b98d425cee62a4757275be00681e4181bbf22fba687cb4ea0fa042df783ddbf', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104333, hash: '64224688f934dc267e66ec06d20c0c27bea71495584a27657868d26c78650c0c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92229, hash: '7405eb49c36febdd29d609228d8e00594ae8392611ebb37dd2ec13bea6fffbd1', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85022, hash: '2e3f71995624274ab85e52be4915537ba1e55ec6b685ca8d87b21b98734f841b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 81030, hash: '7e36a725aa19776f3c54d2076a38367970448384b33d72363499407ad26c9bf0', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 88602, hash: 'bb56ab587cae0e884a1f18c9a233e0b3b581ada8ce7c387996ac4867464c3de6', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86624, hash: 'dcf02523bdc1edce93b645128692213f66c85ff88645e40d6341eb94ed502093', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87097, hash: '00389f97a4ad718e85ffc4e799de64f5bb88828470672158c9fe0585d468616c', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70190, hash: '66d359953240f88f730e0f92013dafb043c3f262b87b5c1ae2cea1679aa422b8', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 91984, hash: '9b02f532b185eea6f000f536ce1afb3c8b1a253e12a0887f4165a42e12df5b44', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69777, hash: 'f0aa95a525afe9fadea184e0acfe1287f33c4c6e3ead7627eabbd0ed74662d4b', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91432, hash: '75d8e099085ee07400bf8577b4cb551a93813c64f66163abfbef481de7564d95', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110363, hash: '03acf812cdd97fee0cf03479cd3ec7a17a77a2182412b456bd5cdef14a386ff2', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101089, hash: 'd2a8573c9a1b440e648fee24a6503f894500cbb17ea194662e91189a0a963b8f', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104015, hash: '0b88dd9417a5f11623e4049eecf974929f2317ba0e903519909b8e9255c604c9', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 101306, hash: 'd39c74629aacba58abab28e653ef2fd10e0fceb943678997327104ba9291ea3c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 93868, hash: '01acf4d77521ec8c46cd205d9058bb35a60c896cd8b2e0319ed5aa3604f9217d', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 90441, hash: '547986518b4967e0637445309685fa27420392c3c92829352e500350ac05049f', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87333, hash: '4ac21c7a29af7c8f8ac2a3383b5964187684d7c7bb2f873d7c22101b23ccf14a', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 76900, hash: 'f6c16debfe81db54e71761b5956470bdc639cc6e397e8ae0b61f3cae3285d071', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75779, hash: 'a3e3a832192d61988b5c5afa80cf01a7827612450008d106c0beb3e402dc4abe', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 81886, hash: 'd686ef5c3a0d2b379b6c4e691de37266274d6d4101fd6f072242c413fbf35a8b', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123337, hash: '73ae4944f90e2460507c678ee71af9c9c8699c067e384f705a7ec804317f216d', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 123576, hash: '90d0ee48709fc03084df440acd6c7c66af2baaedffbf1840a6dcea199f23eeaa', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123218, hash: '9f3c7b0d27c50a633b648663cbbc20c3e21c00b29b19e67c701316304c2bd7e6', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120526, hash: '857edc03999bcc894c16fac82f9e412dbc55eca0c8b015662c14946b63b269be', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
