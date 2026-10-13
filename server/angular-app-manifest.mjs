
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
      "chunk-GL8enu8w.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CEVp6cuv.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEVp6cuv.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D1EfiA_S.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bj2BQLGH.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEqcCmhX.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cmqmsin0.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O0rnE43Z.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-j00s1gsz.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Du-8RkR2.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-rDU50KgE.js",
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
      "chunk-CGxcN7P5.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGxcN7P5.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGxcN7P5.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGxcN7P5.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGxcN7P5.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGxcN7P5.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuOg18qZ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuOg18qZ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuOg18qZ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuOg18qZ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuOg18qZ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6IE0dceB.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuOg18qZ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6IE0dceB.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CtLMb8AN.js",
      "chunk-BOD2By4A.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BxtwkjTj.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-B3o7osd0.js",
      "chunk-CPGm-0uG.js",
      "chunk-6rIPJukH.js"
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
    'index.csr.html': {size: 16193, hash: '206547875881535293de3134bf57c5a237bf9df8bd92f12b6fb87c2287904ece', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'cf017b397a4e7e32a4d1509e50a052187a9418be4aced3332dcbec9a44a1c648', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108286, hash: '25cb2854854a0a8517221bd818701b33eda8399d0e937d114926d1fd7034b3b2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77146, hash: '579555f9c03335c237155968535f879b847d59ccb56709afeffe38bfe4d71058', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87497, hash: 'eb8bb760f66226e95bcace73db2222335152d10b2ad34b00539505cda21351a1', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64429, hash: '263b9884c3a86832b2718354af19fedb378444170715a076319d8e5b3adef477', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64399, hash: '4b5f476ec653775533f15a62b27cc41e4bccf4a9dcd904790fd70ccf1c70e7f6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77508, hash: '2107fdc441cacc9912b28d9a421020042c4f072babae1c2c649aaefea68d14fd', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76709, hash: 'db739889e95f11c9215d2e24943f54586d3fe7f407c2ea5ebaa2117362987a74', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78753, hash: 'c7e371638d3864b22a9b9043df1850fec25c415844da31731baba782ddbbdafe', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78518, hash: 'c49938e2227f620b9a05ceae45cb597fbeac65ecf79c1fdd496a6d35e4129c9f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74303, hash: '66b5fdf3cae6d6d3a7786934de1f15136863c91c512d5fa4131c8739128d898c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73534, hash: 'c5cf5661cb284ce2cea415176befd02a4e5eea00db4cce6f6b110f4e99cdc509', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71644, hash: '869bffdd40b00383b9cad0cfc9b1ced942456d72ae222b1e642f8bf04744fa45', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110817, hash: '59736460cb69680582ece66e776fa660e2e1395e34328d25bbb944b58d1498b1', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117447, hash: 'ed806f1c21808a7ec93569c06942e15b56026c63c223e9f550d084ac0c8299e5', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115859, hash: '6c67c590bda84ea8c561e608dffe919db1932f0c553faba035e0d8ed8ef27f0f', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 115053, hash: '668309702fba0a30197cbb383871890cdaa049215ce13050373a5cc2b94380ac', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 98185, hash: 'c90ab84b5f3028552016aad028bbb3509dd60eaf3bc4964605c13be497650635', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 106241, hash: '414a07eb08e23ce108e8032cc51509447940ba0762880698832f119f1c03976a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65229, hash: 'e66c7603b7a0d432ca86bd8008464a86b57c95ede0cab8000e3dd7d66d45fb2f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64413, hash: 'f530d4aa704f24bbaebca40ce4bcde7e38ce443f7104619af43480367864a1b3', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114756, hash: 'df74257ce658d4589a1c917055d72e541933aa122623c778cb638d78183cc179', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 89633, hash: '0a6b49a1c7cb948f8ece7b54bd54f66f6cca85c2bd5ca850faea5f905a275b0a', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 101807, hash: '7953b6198b8bcde3a871ce1944cdfdda9e618cdf152c7c9fb4600af401e3afd0', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 89703, hash: '36f73641b6a0ef4ae0a7a9096881a074681742f3de63bdfa58c1d768437a4dc0', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82498, hash: 'c75982a98cbd3d0dc230131f00cbcca72efb7853a5af4d7d082893a32fbfa5df', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78506, hash: 'c700e469b5ae3f8a827de7ee9c2ff1068701ac367cad1718e9d8d70ab05e0d88', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86078, hash: 'b9758eadd683fe84f6ffa07d1c5aceb7a95352d6725a1bef6b1959b5753e7393', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84100, hash: '2b370dfd982e8b1ea7c69f4477cd135ef13d91f69f09015572af60735585f814', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84573, hash: '660b5e20d8a973b97d492393c0e1fba61a87c271b5231fb1c1ea18a9388b85e0', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67666, hash: '7fd7e68152b71bd49ae3f78a9b1c180fe30783d008c68827df7650f65ae23cb2', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89460, hash: '065335aac8be9b942fefaedd2ffd72dbdb89b4f285153a7d6f98721562fdba83', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67253, hash: 'bd380c20178eae819244d33c659b04a5ff2d1af6e8f7130b5ee124882662f122', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 88906, hash: 'a56f73325a9f800448534d2df470296e3d970b7b6f54a175502e3e017f6f37dd', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 107837, hash: '7a6c10029c003545a6a6358d9cb20983d7ef3f133c5bcc62534a1dd5fc843109', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98563, hash: 'c8aa1edccdaf9c48ec5138f341b5ea6c1c75e6138b8d320dac91c4e71ba5da89', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 101489, hash: '796822d18c55753303a772c0c1e1b3b8a2f15cc8a1c4d2680c6640331bc056c9', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74376, hash: 'f8ed5c6e5080f2873d0d443089c840929fac32f1b6c6055c6f56e92606619d9d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73255, hash: 'a8caae3d8b935f5195dd770a06c073ac47b9a0fb8ee6bb0e87165c3d43429426', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79362, hash: '718e4040e1ec1a070a1ce6c82beb659b0c0bb78eeb4958f3d98d14cf9a5d989a', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98780, hash: '0a382cbf68028cfbbc262beebfb16e59f4325e5cecdc91ce92a46318a7f9918b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91342, hash: '7c99906787d34b110eb8970ab7ce65617f4fcce7553ccceba290c52bf0955331', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87915, hash: 'adc463a6d50ed59f0a41fd1d5d9ace137160d0f68397b76b565a983335fb29a5', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84807, hash: '0e4a428d91e9c3e274697778dfe2977fc24c590e5c2ad0a60b1032e5b88e14f4', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120776, hash: '0c24afb11927b82b016b379ae6f1518912646f2addfc41ba2f55a956aeb1d117', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121015, hash: 'b7334785aefdb8d48ca1a0644e4a60823161eba2c1d9a275768cb5178dc0a70e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120657, hash: '17dccb5c5ffe7c4bb50a2c52554cdd411ecefe0fc2088aca9e54ebd981b54c8d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117965, hash: '8a5c5e67c9157dc463fa16011427f5c62077167b79ab38f8472a1d02ea139aa4', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
