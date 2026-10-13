
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
    'faq/index.html': {size: 78518, hash: 'c49938e2227f620b9a05ceae45cb597fbeac65ecf79c1fdd496a6d35e4129c9f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74303, hash: '66b5fdf3cae6d6d3a7786934de1f15136863c91c512d5fa4131c8739128d898c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73534, hash: 'c5cf5661cb284ce2cea415176befd02a4e5eea00db4cce6f6b110f4e99cdc509', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71644, hash: '869bffdd40b00383b9cad0cfc9b1ced942456d72ae222b1e642f8bf04744fa45', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108286, hash: '25cb2854854a0a8517221bd818701b33eda8399d0e937d114926d1fd7034b3b2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77146, hash: '579555f9c03335c237155968535f879b847d59ccb56709afeffe38bfe4d71058', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87497, hash: 'eb8bb760f66226e95bcace73db2222335152d10b2ad34b00539505cda21351a1', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64429, hash: '263b9884c3a86832b2718354af19fedb378444170715a076319d8e5b3adef477', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64399, hash: '4b5f476ec653775533f15a62b27cc41e4bccf4a9dcd904790fd70ccf1c70e7f6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77508, hash: '2107fdc441cacc9912b28d9a421020042c4f072babae1c2c649aaefea68d14fd', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76709, hash: 'db739889e95f11c9215d2e24943f54586d3fe7f407c2ea5ebaa2117362987a74', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78753, hash: 'c7e371638d3864b22a9b9043df1850fec25c415844da31731baba782ddbbdafe', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110817, hash: '93d3d093e59f42e954a5eafc40556f174252f69a35715ea0ef98156aaa3ea9d5', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117447, hash: 'e77003927a88860b4e850c1e83702d4af638b9a362d77f13531dcb4000dc8491', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115859, hash: '550eb8395695c583d1a62fb39a01db2fe3b04076f7e68b912ddebc2f7eee867b', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 115053, hash: '33a85ed7025e5402d731f44640783962f079088fcc971435510533faedab7089', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114756, hash: '676bb3d036d6c86555baa2e31e4151611241563a09fc2eff2b23cddbae7f77b1', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 89651, hash: '97dcf64bd55fdb24ff62b6fa53a21598ffbd8880f61376f55749c3f4b3d3d679', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 101849, hash: '799076e3c89098b02c868ae58d5d4f29d22171b77fd89ef770f06a4c62dcf605', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 89724, hash: 'b2a8032c8c646192c1c5b9d263a656313ba963431e859ce9b07cd257783a87ef', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84586, hash: '91525197e647ab43566f0503e5a8ba4c80cb10d587d8d3ffc7789117d570a105', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67679, hash: '64c5e06aa992909cdaf7114c2d6360b37362e091f8a7931ed8aae3b04f54d1c3', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89480, hash: '52146eceec9af31f1094219b531e0adf826150fe957321eaba3cc9e3dcee8739', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67261, hash: '39fac6050a7ea2445c3aa4648d391e46b402c8c4ac7eb7b718bc38e4a6be1ac5', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 98185, hash: 'ef8f342a11b350cf7b63311836bbaa0d701bc946eb3ee4446f5bae446e433aae', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 106241, hash: '664d8e94e620abb32f8766b3faab7b3b0ae236a8b3f7ba8b6fc8e8e9f7e62a6e', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65229, hash: '52745df68efb2a16b5e5c79166f5dfa7a3bf314a10ae2e5a90988e438ddf499d', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64413, hash: '24d3fdbad173e10ef0ccc18fbdc21e252421f717b49c71f0b0925489aa1ebd7e', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82498, hash: '67188154d27029bfeafbf75c5032d7e7bef728a14b460e29236c75aa2150e16a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78506, hash: '21f33ed5eb44242dd203cea73850fc36499b40046738148fba387e572dc5a435', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86078, hash: '1cf8e6e432aa81d041ab43c940478b5fb4e3ef5f99060975efe56ce10d4dcc78', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84100, hash: '2afa4e13a8b49ddc5a1c02bbd8276af0312c8a12982b42ab65b5255aa7e06ee3', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 88924, hash: 'ce1f96eecb96919428d345a0fa3d977169b8c2d21efdada3becc89df0a7b62a5', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 107861, hash: 'ea0bb57b596a3e19e2666065716956438ce64ac1807a007a16ced03be6b6dee5', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98595, hash: 'e118b76d7633e27831438adb21452f9cf7073ee6557dbada0e669478d670e9bb', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 101519, hash: '72d04f4f26a483cadff302d5082c5af32238b18038df24e0b2f85b42e806ef74', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98761, hash: 'e42d26ba764a9b57ab96631ba074ed0b4cba22b8caaf457a67cd38a494914a9c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91331, hash: '90fe6185879a844145db79580a066fa3b4b94395a72040429a9d9d35c0475761', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87904, hash: '5ff95910afdb48f9f8c7cc0b2607062d97e65bfd7a21e40a8f322bf93f1e2fa6', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84796, hash: '13c87ad84b47260c7bb61a1b650a895fb1f335a18fcced0b60db5689abd44bf6', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74407, hash: 'fe0a07d83c7a589b65a023005f55fdfea9be9bb5b6a3cd30d019956f336dd44f', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73282, hash: '3c85f4e28725451666604a2d95652d6143aea527260ff5f867bc78c608b00271', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79376, hash: '1aa290405351dedf117b66a3529f11bb9d0691221c629ab1848fb006bb5c1330', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120776, hash: '01344237aa46d0e635434359c65891105cbdde81f5162376107e3404d9e5f100', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121015, hash: 'c4c846b94e1e5cba66dbb91866bc378c960fd9ea139048495f15ba67d4a66739', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120657, hash: 'd5ca9a53cc3161179ec2a818c881b8d57a2aad18920ed10afba804e8a9d2cdec', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117965, hash: 'fa717f7f64c90117543bf5fe99242e8231069faae47e6e0a2129aefa0d56cece', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
