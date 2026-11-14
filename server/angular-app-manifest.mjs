
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
      "chunk-Ctn-9Nn2.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DiRkyNvs.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiRkyNvs.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BF1TOThh.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DawuDsW-.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1j1esp6.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CE8o0fGE.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-o_bW5eJB.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BU7NH5-7.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGs1hLO_.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQ1qn7Vm.js",
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
      "chunk-DE5Mp4e2.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DE5Mp4e2.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DE5Mp4e2.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DE5Mp4e2.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DE5Mp4e2.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DE5Mp4e2.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DE5Mp4e2.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdGA9cnM.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdGA9cnM.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdGA9cnM.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdGA9cnM.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdGA9cnM.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfmVFJki.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdGA9cnM.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfmVFJki.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CyzS2UDR.js",
      "chunk-CTKeXBs4.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BukKPAnw.js",
      "chunk-B_QKOXwy.js",
      "chunk-h4XfF4Pk.js",
      "chunk-Bfk4qEnV.js",
      "chunk-m4_YRF8g.js"
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
    'index.csr.html': {size: 16193, hash: 'd161e49304499e827533aa74a80a8dcc9d396b9a067ca2985d5203866ec85d4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '01735eafd6a1e6484736a68f20a39bcf334b094297d0dbcc0cc778a54333d78b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: 'a353640a4eb9981aad989268b797ecddce6847426affd11eb32cee2d46b4d083', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: 'dc037067ea0bfe5e3210ddf72bbcadd30da29e6464d6008ca85f2d0f9a9bfcd2', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '46cfc880203812458d187fdffd6e5015fd04d53e2a9e3963f3f95266aa0e08b5', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: 'a9a2f4f0391de38e4f37a3599376344ad4bcd64a5b4b7765c053e2a233ed03b8', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'bfd5758865bd9276a0a0f0c7e3056ccfba4b038973993411fe41ef81ae2aac9f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: 'fffb7a4f7f0494e077d5a3e079bdb7df3ec3bfb6a03ea3f30c106284906566d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: 'a73bbd3a1e757c6fe41a19ffe77773bf365337a262ccc252c79df37993c5e8ec', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: 'acd20ef06dd533244b57342f7f3dd00bafeb1ee88545afb3d9e4b403cf4d7e5b', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: '8e7dad5374c4d77418f15ece347264bc176c02ddbcd8f6b2fc1a8e19bab626c1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81577, hash: '462c15a3726472db5cfa4c20919bf2a811c0b7c2e8f6f0f197c75df41466f591', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: 'e98ddcdc732f74c3f162a02cd4a35d934b7017ecc2ba0543c9f64c9a63ab8e8d', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'fc094749a543b1a060be0e6460188044eac8915c47da1103728d00488573c6f7', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '74ab70b0ece20f5386d74ae4fcb8315dbc42e35a0a7c9fdd738051f77b917587', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '2754fad9fadd1af2b3292eaf2ff5e46e814246547d98fb2346434b6d1bbb859b', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '2db3bc313d63f4fcd55346ab0091827fe262a8ca737745be2bda6ccadabf3024', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: 'ae43a73dd956197fe0c54e870a07e25e461823facd1049d777786e09f23e5790', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '8a635b076f06d35be53633c177f4822f8bbdf8cba98be7bbc9d87b46f17f4b9c', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '63c9a42e4a58ef372d4327dc131bc8412df37946a3b3deca63eb440dbf30a309', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82494, hash: 'd619c6a9f1424f8fa4a47bbe2e01db27573f62c5036f17971e4140271f9e87db', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125136, hash: '7b9c7f9db4aea7290a2dc5836f143ecbe5c37d0434dcb50f2907fb7e79b3ac6c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124479, hash: 'ec79caf954dc840ab89a88f0726bdc1fc265f62a26136e2227d9187e4a25ba12', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121601, hash: '278e3ffb8243586fba223e33720fb6140475cd34be52122e53eb1587180e20df', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123154, hash: 'ee37ced24a30a0467b605d72e83e9993e5de2adcf8080de28581df72ce2ecf81', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118392, hash: '83448b7f8b5634061fecd6a0914337750a87994556d58f3dc4053672e5cdbe33', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: 'e64dafa6d66b6ebd32caedc53f2092cbe42afbdd1cfb62d5e158d3bb99a390f8', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '6ede3fc0a8476e5de6d3b9dc4f46358d2202e0fa71cedd216086bc446efa30b5', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: 'a98e6a43fa4cdbadc483f1dc130883869dad702ca909eb7390a98ef0ce76f498', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: '09a4fac94bdecc5c9a6d7016758f84e20f88670da03d6883190010fefd1fd12d', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: '9af08f9c36d7890280080e7b9b356dde58bbb3de4f05ab9f04bec2a840b2bc58', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '8e304741cff809a96e22add3fb5ee206d4a7db0e619ac94fe9471d694090c688', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '778e330528de8b5da63b299b28c7abc995efc16fe24735ec2a41110234a078f8', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '51e4c088e44c98b88bb3d9288355500755014973638ba72e48f26d68c69c09c4', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '86e639b20eb2bd8b836f7e8b9348abe3f5da3293bf84c4095b6b761eee83e883', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '19bb3e88711a14c1620ea3a8b37a1feef0caf1f1c7f3d3e784fbae1d249fd6d9', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118269, hash: 'bbbafaaaf64ea7af8b1d37a2d747649e9df9b8c283281f64a19478210599244d', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94652, hash: '84c08476c878e135ba098385e0d2227d65e4c8508fdff6cd070ed49e5741c7d0', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107750, hash: 'c7d15b5af00f86c5988e8a58a0977ffc4918059de757140b5abede20803bdfec', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95225, hash: '051992f1cca3d2b767dfa1221e86cecc77fd4825b4ba1f4fe1e28a826dadc16e', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94393, hash: '3b9c9e26c5fc265408b0f3a763ba2e3f5223dc0bb1bf184f0f1ee56c11a8f343', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88137, hash: '5121b5c69cfaa469b5c58d4362d675f3be6d73faae4971cc86bfd546d2a636d0', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82540, hash: '31e1974e699249d43a9b8b7dc554d497496f56e536179d17c3e237ebefd00c14', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104478, hash: 'bdcd5a986629372c4e367751efd580db6d849c380cf036ea266bcfe228cef9a0', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94509, hash: 'b45e9b4c65aafaf9622544afaf162d3b26f2a05ae9498c86cb418a54b75eeb1b', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94430, hash: '9a4bbe84aa74b56aa9f759f7108e4d6cfd9c882421b1dfb81bb158fae18ccb17', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: '7955b09fe07f33d52e6b9a2a985fd396d029228add5caeec3373f0b5572b8542', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107324, hash: 'a58cf10ef046410c4462286f508f2bcd7cdddb2bf90d4afb98b8579483363e19', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118096, hash: '532e3d1f7a08fda89a54a340915c7a727b5dbbc531fae9b7ed81aecfb5b03841', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112125, hash: '466b2a3554dfe10c7b24cf7dbbbc4d9ec0b92c361024baafa825217065bbdd06', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '8fa3cd74fa2d1e636ed1fbc095bf921a9b62122bcf53e17be7786aa41a545c0c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118610, hash: 'ca359d4f13f379931e81f6ef2fb4834c96fcc244e8838478bef999c69c9a7b1f', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121083, hash: '32f0af068f3b5f1f7c5a57e7d2aefda57e83ab6bc0da864f88f87984167bbe8e', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119495, hash: '3baece02e09404ac827f404d324759509702a65324995a8e953220867f18bebf', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118689, hash: '9d37277c48e6e21948c6735c010c1d6a8f375d5213b751c64d1b3a8f7bbfdb92', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124598, hash: 'b2c173e409f093932240252464a51ca46781ca155eac049d0568afb54144bf1c', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
