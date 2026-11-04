
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
    'index.html': {size: 111440, hash: '358b1e629fe24f4bbadcd2e82ca73792833e05f0adc4192b8be758b45922cdc2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '3c48abe9fd38cbb042a77b25a5203a032d5ccca91cc8a30b29d61fc951c1c9fc', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91685, hash: 'ed24a7e1cb78e91958688fae1ee8b3c65cdcc427847f4011ebbe9113977daa56', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '63989470db9fd811027bf0d1d850de71183ef58f4625011266ff6f24c7d16763', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '9451393e7c6a6e8e9dbed00a7ffa79a7bbe9f18c7b392fdf9c4237c0d299d965', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
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
    'termsconditions/index.html': {size: 82336, hash: 'df251c5d7d67bb8f702f4c88bd70b8a0f6c526cabec99bc45d09362942f642d8', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124562, hash: 'b14438068c88979a6d93341f541d91c2166c5d08f520977b3e857767068f2d10', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124204, hash: '47e684b5c50aef379e75d50ba8df1b981fb016ce932a6ef48788493c19e1ea2b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121512, hash: 'ced47d53da68636c4a54f7d0177c0c250638eac911f420a8d06f194daaa2b7d9', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123065, hash: '844def901640a075b8d36ffa879fbea59054593a896d194500d2a96c28866c57', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118303, hash: '76653d49bad45d8574b4fa58b4d0ca3eed8f717f4e67434c60d371b0d86b02ba', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87962, hash: '85d862943ba6ba91d0ce25ac84acfbb4f6b06c53baec73a512fa0d8eb433a9ae', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87739, hash: 'b37eebe43be83e5fbc905abb01831aa07b5a14b411042775a7426d46dd7c1948', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '0009ae34c9841f03cb0d8d04f97e03a2f6e504bd69010d30dfc780e65610422d', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94044, hash: 'd56a1d3248c2c6f3fb4e035a06777efe828c6054fcb449a5db7e2c89519ece75', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'db495881e0f5e68bd1d9eae304ff11fd5d2c5be36b3024ee5bf7b0724b276447', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112410, hash: '2e7a4949a6b4c294dc48a85cc5465e801d61449bf6b8f3778db43ae91a8bc91c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103129, hash: 'dd5bf93dc8c8bcc6142efc30c019b7825c1aa799145dbe49b5f4bb986d286549', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105807, hash: 'feb2c9a96445fa87e0f196bc22e05b231e93816bd7cfbfe6caf8633d3ce85dee', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102789, hash: '8201862659f71f995715109592abf854ba3a804574777b2336b29eebbc32ef4c', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106702, hash: 'e26521ac365b9a863d6f8b5cbb1bbb80c4809b06b450e113a91357819de0dbf6', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '8ab0feb70169a96fb1b53d648867395637713f87b70d183f15ade565b6d61084', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '523f457651f911d6360849415658bf04165d34495558a02377727b94a55a7d27', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104458, hash: '6bae1e09150c153360d6fa2641fcc2bc07308a0f54e16fc6d06a5464c06218a1', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94497, hash: '3f9051a73aa88fb0c79f4718428a027f351162441caf6076293b102b12b97ba2', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94418, hash: '4bf47b7d8007fbb6d0a3c769845eae5e46c556510317e41b2dc15737ce78b6f0', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117997, hash: '7ef000cfc7285f5025ef6c9e0dea6820841c02b804590f9b9385294afa9035fa', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93778, hash: '0f096045c0758a61575b087b24d706237961edc1afa7c1344dd19af91e7d522c', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106698, hash: '0bce12c0cd8e87574d04130884b4e143d0adabe91f4a6f09dbd21a73cbd893d1', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94194, hash: '73e938d32a53d02267860c12f7c8c556591102bdaa2fbf8e43fb25478a88c212', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93344, hash: '1760d9350cef8e8f534ab3ecd322909cb51dc23b1d376ee4191eaff3b1cacecb', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111033, hash: 'da82a6a5cd1d0d8a47353a9b329bf6a7d215865816e077f56bd4b4318ff76638', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: '6f34a8f5acc3f3bc9adcadfe7015808cb405338303d621272452d3fdfa2a3d1f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: 'fc4d772d386ffe97b146b771083698b3a42a72f934191dd076e739d859062ac6', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '71f0500fdc3b55a0b21a76df994d724d186bef5c1ec61d250c18a9731887eced', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '9b1f023b0f9b35bff42fb5fad5602d61c44dec5869c57c501da0faa0d044224f', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118314, hash: '3e292dfe58f683dcb887c31d1146ad577bcc285b89667109b19e4760c42ea123', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120997, hash: '6b1648815df5ad1ce689502cdde0ccbb5115f3a5a3b596c0fc356ffdbc67a108', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119406, hash: '9fe16aefd21b99713f16062862d67d61898727fb7df7af52bab3c1628115cc85', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: '4f1ba139ed0aacc80110e2f697014bec6e3e2af7b48b4806a8acd4ea14a5f6af', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124324, hash: '159617de5cfb7480d329c4c88415bff318b2227458f6e6d853254a8bca9c7a09', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
