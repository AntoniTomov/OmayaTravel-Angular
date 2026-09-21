
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
      "chunk-BRrQ4S9N.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-D1XWmQwz.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D1XWmQwz.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DN3IVE5G.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bx0Dk0e0.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bjzu7TC1.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DslsjSk-.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZuVaiGR.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TWs0w6Gi.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwM6i24T.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH4M7bYA.js",
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
      "chunk-CfYJeAmH.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfYJeAmH.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfYJeAmH.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfYJeAmH.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfYJeAmH.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIjZ8atq.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIjZ8atq.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIjZ8atq.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIjZ8atq.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIjZ8atq.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BiZI7GeT.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CIjZ8atq.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BiZI7GeT.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CibGPvu5.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CibGPvu5.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CibGPvu5.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CibGPvu5.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CibGPvu5.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CibGPvu5.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CibGPvu5.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CibGPvu5.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CibGPvu5.js",
      "chunk-CL9-jvH4.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-k9i-dLt_.js",
      "chunk-D6zDHFNm.js"
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
    'index.csr.html': {size: 16193, hash: 'c1e296ecc46f3da719d5eb76287a8f5112a84403c2fd75989c9e45be583fc57c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '260d7301ac2e2909791532ab0a16dbff808c993ad90ad8c8f113cb2564f9c13c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '16d54e8676d5f1189644a2cc9adff0907569b60bc5f325db88b71ade738f2e3a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '176158ebb458d42b6342f7cac31d4428ed55335a131be7cc7334c73d99f71434', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '1e6243b82ff9fd1ef259f6d18031dd8e04ef7a28e76fa02765c0b71012569ca6', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '4ccc8a62d55d1cc8ae3db79ba2b22e1b35355356eb2f67771cbd1eb4498cf41a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: 'dd3719f87405630253505ef46d855162f769dacdef3df2c98ec40d0c7098951d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '4581ce30295d28682cc5b6688cd445cf09248e4c2dcede27d9cd230082143aae', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '95f9f00d77427168990f24bff282b2861109f6461fa09020eae53defde8a4c04', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: 'ee39005fbe7ccb283487a116a33e4d34b60771aeb463d968b0af4128d5f4db48', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: 'c87a24991b074be85170475163b4fa48890a1e56fc33944b2486bad998140241', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: 'f3174ceb6e646305c698db0a040425a55658d716ba3d7ae2bf192ac173700399', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: 'b5a80faf75bae8c57479b262bd36029027f286e26fbe5387ecb4319adca78a9f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75945, hash: '6c43eb536dd27c5c010d8bc266a9ba6ab65f4c26b7449f7da412b5c0051b6587', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '3315676eb4fe490fbcb7d3253738372764f577d99a805ed5ae93fbae6ff5744c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: 'b056784e0ab107a561e98ed5974bd87cfbad18e2d336ed302f23aa436b9c041b', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: '8cda6445aeb553b68df9133eea010fd31635fe6c29c3d3a98bc8fac0e6f50d73', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '54dd6a60aa726ba83f3565ab56cffd5390f74260dbddbcce1bb18d9acd005fae', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'b7a88a6329b6a438fbfbb9595b1006b801561153585547d162ec7df7e3b8da71', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: 'f7899451ce708dd67b380bdfce2fee9d70ac3a3d5837f4252f99c345cd6273c2', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: 'f5884466a53b493b65b5b85ba9f3e681017e7972444380ab4f0423b9cd32f9ae', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: '9439cfbacae6c7a9cc501fc7a1f4f1f691cd538b15ff3c14d9bddab2981c6664', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114705, hash: 'fd106a2f47d3551799f8ae455010063fe7b1ccc509a6d096af0cf06351f82b37', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108181, hash: '68cca66f0c9574a9fd3d1968ab05b9540554652a719e8c090a65270c2645ff3c', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118034, hash: '30f6986f49a3db4770ad6cb8326a88c1d50766f8be3cd82582806ad441ac7387', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118273, hash: '82b5ad90130c52fcc5300c464371664b91782eda91d2188da41be22afa9def87', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '8a9479c6fa29a0f7f9a45f6eade4547293bf45fcbd4bb788097a3d23b4c7e0c1', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '1469c2fb0e6b4a16d57d0bba31b1db3d09a4b9867008a914d24da9258a5b5fd9', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: 'adb9e50770c93d629d578b8d1af1040a53cdf53054e70c33605a1e72c05dd3e9', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '13414e2f5f53f2ffbe9f6cdfcecce1fb4697860c1879288e8c528dc9fc0fe64a', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118079, hash: '2bf5da4fa62346aee0ee809a19b4760de832734eeccc11328bad1e8ac685a00c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115223, hash: 'c0d8bc5ffaf22838c6bb3c6d113485c3e6c9e611d0dfa06b652ea0c47b9d304c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108881, hash: 'a2a64ae406f8c85a4c98af61a9596dcdf57285fbcb4615845b34b060c27440b8', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87942, hash: 'dd40ea2cc3c2699e20fc12da32698140c7721d90a52ec8c0b806f8d048216363', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79752, hash: '2e0d8925ee5e25f472f24e050a5aae9df85236fec11e4a8181f48baf06e2ef57', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80200, hash: '1e734dfcd424f361ef108415ba4cabf654fc5d0b35c6a99e394749da1f658918', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81348, hash: '2731bd2747d5ca5202404540c8791430c3ee6eb2caf723aef3b1e04043942c11', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97001, hash: 'ed800ea93d1ee19a7f2b53e6c0c5330ca1be6e32bb31cef06437617bd62755b3', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96811, hash: '7c1442f5a8c718f2adb2bf000771b44725ca2752a93866a318f0d64d638fa1e0', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99578, hash: 'aa50e6b00f9aff7eedb3ba502622997867b5db8d841f8c9000c37e616e7b65e2', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104386, hash: 'd307e579c424552bc95c4264fba4493439b805638f33cf4faf06ce78f07e0e9f', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64646, hash: '6ec52fe6cb99fe7da51d018c7cede3698975f9e9069f9a0c3a63f829f8c43642', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67014, hash: 'b7a46fe5754736f600ac6f0e189096cee70ecca81c348e556d4969a6e07ab2fa', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88793, hash: 'd93c483abc0cc595df229a2a7fd87741bb942738e909ee10d628209c7133a424', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66574, hash: 'cd2d4a970f0325711cd2ff76de8e64b8eab0f46b7b2227dfad16f3c110736bf4', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107081, hash: '850470de803616345dbc0d658393bb239b194946dbfb3ec4e5630e450ff99f83', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
