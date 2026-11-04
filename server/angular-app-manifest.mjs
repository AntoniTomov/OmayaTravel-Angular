
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
      "chunk-CT5YNukL.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BcwBGfdW.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BcwBGfdW.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dt1ol2yA.js",
      "chunk-DyF50Yjd.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJS7mLf9.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRgxMBMB.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWXJp5uO.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BgWOQY0W.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CiYcJ7nm.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--sBqD7Zs.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CULuYhM6.js",
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
      "chunk-Dg09EgRQ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dg09EgRQ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dg09EgRQ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dg09EgRQ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dg09EgRQ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dg09EgRQ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dg09EgRQ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CZqQJDBy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CZqQJDBy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CZqQJDBy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CZqQJDBy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CZqQJDBy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dm0sY1f9.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CZqQJDBy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dm0sY1f9.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YCmEaN9b.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js",
      "chunk-RbnAs-2s.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfdXtW5r.js",
      "chunk-DyF50Yjd.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DqJKyaYv.js",
      "chunk-CNuF2u7C.js"
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
      "chunk-BG-RQz5Q.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'c6486bc1bffcac3c81c0293ec94f93458ec1b0405743f80fdb7b15ee43ca9d3e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'b7cf695d245dc20e9e4aafb2bd46d7dba89d08acacfe724700fe2eb79c8a26ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '3a0fe2074ee7b7c0c30f8a9c4f87f81409ef964568dd20b39eaa09acec1e4f48', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76700, hash: 'a9ba5a96a316951d7f869c100b7e5973ff9a6c7e7d75a74860d494e71f9e857c', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '1ceb611a7ed91e31415dbfca5ff72a6cdd8325b181e5defe518b098ce932f0c7', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'fd106bd799107d595373deef55aab9b80457497ead6821108682689dcb394c52', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '8f587cbbef1143d5c6739bf5769c97aa54b2774ac9dc635ccc53f18b9c85b8e7', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '224a08847a094fe6c23f05dd57e2c93c0f1da2d1ed26e5283b916025d1252dd3', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: 'eac5ff2266173330f5ee588342e61c937f414e5c727426642058c007eef77991', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: '64ecb0459083d0328dc503fb38d3d5c80d3b440840a1975ac01e239050dff49f', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'b2403fc31ae929fb29dca8ea094bdde6a167184eae8fb9c005503bb9ac31f47a', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: '32e9b553e61beab411e524b72f7e41997bf69419f36f281d0a564cd5c124a81a', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111440, hash: '358b1e629fe24f4bbadcd2e82ca73792833e05f0adc4192b8be758b45922cdc2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '3c48abe9fd38cbb042a77b25a5203a032d5ccca91cc8a30b29d61fc951c1c9fc', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91685, hash: 'ed24a7e1cb78e91958688fae1ee8b3c65cdcc427847f4011ebbe9113977daa56', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '63989470db9fd811027bf0d1d850de71183ef58f4625011266ff6f24c7d16763', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '9451393e7c6a6e8e9dbed00a7ffa79a7bbe9f18c7b392fdf9c4237c0d299d965', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: 'fb84018a3196efa1d9f6042141f51ebb8416e12a4302012fc969ec3145af71b1', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124562, hash: 'bcf2c2aab5815345d28d088a2a08415b627d3d6119cc573297be0263218b0782', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124204, hash: '1a3f228226850c64403a727517899881cbab265e6c0cffe8888c5d5a9264bfbd', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121512, hash: '791c601d39e66f75fba4fc7abfa05763fe934977cdd55a74272a8a1e68f81f99', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123065, hash: '2b333c49be4f45c10a67e0c0dff3b9357f57b8d821253205c00a579c24d342da', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118303, hash: 'a59c881ca0da2d206724bef0e63aefb785ad4dba01d692c9b70bd72d0bbd84a2', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112410, hash: '76578c19c67f755a14ba63812f62d66b91ab9a7690391ca7de283ff9e34ac902', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103129, hash: 'a059f18cc8ac5846f64793432cf229caf63aace347d34910013edb40120d9c17', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105807, hash: '722623674f1dbac4a0e9282f46be6926ef06edb05d65df7cabda817f9c9f8668', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102789, hash: 'df370fb6c8505c1386af77eb082883de9f99a2b369ed3b9b345ec695ece67013', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106702, hash: '6f671864d3de77bda994c8b701d2d1050fa54f62c456535b9e780883032012a6', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87962, hash: '24b7773c656527fc2702bef777a0e0f7fa89400607db534b61e21ea404a2cad4', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87739, hash: '92ad97d9220a108a7b6a17cf78b48bb8a438ff06f221c92e36b418aebaf0e923', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'de9b366042fa3b5c9c7444a817bf8ba09adbb86898e273b6e50360e5b91833e6', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94044, hash: '9650f4d610f6bdcf1aa386110287104689ebdde2ba7ba9d3dcc030148c0b6b5a', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'd6393850564c0966535f89ac619f6e886f2a7cc6c117ee0c3c1dd3ab5d1d4f8f', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117997, hash: '6b6720f5a9d7fd2cfa68c36c83bbfc29642ed08ad076cbb41c8d8fe28dcb81e7', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93745, hash: 'a640101f880cda2927b151e4da7dbf40ed2cfe3f4d3d5f339b119aecbabab34a', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106593, hash: '1a5a849188cb7ab983dd735e75467336c6c244cdd444d523efb2494c7a00dc8c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94150, hash: '62aef509e1674621cc664052d6fcb34657ec9cfa56bf4b0304117c9ec218faed', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93311, hash: 'd567b8bdfb103136f9bd3df0c57a792e6de7cf369580137e567ee1ac189ba3eb', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111050, hash: '1c783cfdd44921027889553097246fc5649a781d0d461c1aee11d0210571ea0c', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: '8cbe492a22347afc251ce6228d92b19b20ebb4c2c3aff296feae3fc1f4d1ccfa', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: 'e3e92aa3e1c6c85327d1973b1edf7d8b872e10fc875f1d9f154963ac5f9b3216', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: 'b94d8ab040a414de5054c28bade3d4da6b2307cf682ca6183a23acb516e10949', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: 'cdc108708fa73790a557330115871ba850535fd81f4fdd7fb373a5416cb95632', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '8ab0feb70169a96fb1b53d648867395637713f87b70d183f15ade565b6d61084', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '523f457651f911d6360849415658bf04165d34495558a02377727b94a55a7d27', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104458, hash: '89f2528c320e8ce6d4327eb252cbb9bc4ec09545490356e243efa57ae3a85174', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94497, hash: '2dd7380715f02168e4a072cea40c064c7aab31a4fd5ce68b487a700839ca8153', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94418, hash: '9b769c8e907066095d221dab07ad6a9e668ac0af7e093b5891b703a89e0f2953', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118314, hash: '207c76299982501c5dd2ff4b2c0a85710c7276822f497f0a75024701cd65608b', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120994, hash: 'd537e477a6ca0e294f7ea0443a6686bcdddcc2ffa8d8422ec9e3fd57a00171ff', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119406, hash: '1473b8c722076709b484e44c2a14b5bdafe41128e7b0fd4c80a9a2d724c104f0', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118600, hash: '602440eeb0af83cb6952f3a0e422767b91ce98fc8e85a13810fd6ef3fcce2ee9', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124323, hash: '8901563f9ddd015a071808a2c5d45dabccf126831c4f1fcc47ba7550b868abb1', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
