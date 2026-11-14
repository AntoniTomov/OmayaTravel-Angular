
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
    'destinations/index.html': {size: 81637, hash: 'e98ddcdc732f74c3f162a02cd4a35d934b7017ecc2ba0543c9f64c9a63ab8e8d', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'fc094749a543b1a060be0e6460188044eac8915c47da1103728d00488573c6f7', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '74ab70b0ece20f5386d74ae4fcb8315dbc42e35a0a7c9fdd738051f77b917587', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '2754fad9fadd1af2b3292eaf2ff5e46e814246547d98fb2346434b6d1bbb859b', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '2db3bc313d63f4fcd55346ab0091827fe262a8ca737745be2bda6ccadabf3024', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
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
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125136, hash: '31c9b71d5dadfc18f6808c5edce6922009e74f0b746fab5a15682fd6a26ec135', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124479, hash: 'a81af4f291561e5ce845ee9b6611e566042863e7829f54114f459f6a93c9b925', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121601, hash: '128046fe32d66ecae22cbc2979a829a172c85ebd7eec3c1477e6f0066232bb35', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123154, hash: '20ea0adcb5e69089fc07e63172681ca41a7bac33d7628951ef79f5ca0d91f3b4', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118392, hash: 'ed3dfcd3e9d37be2d6e20030060ec8ce91b0b24bc64fe1dcba42e9f443c0bf13', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: 'd9c115eaff47d7d30e9ef49fce9126f4f8d2cf1a48fb8bbd24f035d57209ffc2', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '48d98cfa309a17e6f4e25efcc8da7b4bdf840dbbbae6782f27b3fc4240e1e5cb', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: 'c0bf160f8a7b2dd9a9522f029517c5c8661920326f94f14a5f8c8525a05c5cf6', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: '152738d4423c39e4b2b0d441cf4eaa6200871459e932d1c37955b3678a04567f', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: 'de53f938fbe109fbbacca5aa9fbbc9b922cd6a25bcc7b2886094f9336a69fe25', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '1090d0ad78716a17cc6bf6860995f2227751246d75345171b8cf2160995ce061', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '8c51e41e67f3ea5c158d3e6fe714a260d855766f22271fb32c15bb7f3ed7b423', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: 'f0a7938d07481e568b1ec85c5c1a329158bc33b9ee23e063388077a0e4fe7ef8', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82494, hash: '312db594c061bb1e595f5eeca1a3ff741cc03289f7acc1f0bac2d3fbb448f4db', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118301, hash: '8332163e1921d538df581c6043b4b4ec6ced28e1e9ed8c2ef36d84042e7e6761', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94620, hash: 'bd0dae826b2d59e6c58ce1c3bee255de042782024912e1c6d1060fb193d53818', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107683, hash: '2e8cbddbc675444065afdce95633a6a137ae5cde541835065b37a7dcd1f54ebe', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95187, hash: '941425c6945546a0712292c126b3fccea24d929d516898dc65aa9dc0026b684e', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94361, hash: '073fe4089a88463b35dd32700392d370fff5647644e0049a81e935a267070fd5', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: 'bbdb655b0714ade9b72b40be4151ee75e760e722e690d16cfddc85e5fd4e42d7', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '73ba39cbf730e513ef704bd5e0437c88353b74ce5dd792e2860ff79081be9be9', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: 'be33e835b43d7a13ff95147888b5c204cca371b546e9f6b5ea58a74c32cdd41e', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '8e1bc0df16155d09bb6038bf7275a37e25e8bb44ac017e4d2f7d1128d8231e9d', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: 'ef42a8b9c3bef194cb0940d3d2fd0d8c0994265cbee6316b2df96b9e5d629062', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: '2c0070d0dc8ef4d0112e3a7ced2ee0fb125e5288c07c720412134999f3aef8c6', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: 'b104a847c21f98519397915714fda03bb29433bc25c1f13f358571d005d0acf4', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104457, hash: '2388c44ada76a19067dc0d22954e84f562083aad742809f281fee5200582256c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94496, hash: '76c845a231a50b462f1b10ccb1904e15f8d0dc51d95ef876d64479d671524570', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94417, hash: '394050f4f977a14dfe07468ed4beb200a15fa926b5d09a32fdeeb4ab8713ab3d', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103286, hash: '6dad2bb0d55b3f53beae895281676218b28304a31820b7daaa8e6654c8c25d90', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107326, hash: 'ae5a155008af7f66d3fc366a340d06bd4694d9cd9049fe6ca24692a5234e5c8e', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118084, hash: 'b38b1b52d63a7f203b61e79ede6cbf8672af480bfaf2623c4176300874d51bdc', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112125, hash: 'ee9085ee2851191aa11846a404dcfbba2c0a12452c016d7a87c8921c0330ef4d', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: 'd804e20b5ebd9fff1d934f2c0c2cedad1e1dc4dff6d338146b1d56f70d870f09', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118610, hash: '9fbc9b081f9de738f60b58590af9793090e31eb0702f821948bce4f219b3fb95', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121083, hash: '4db65d5a0c36112a399ca56bb06187c036a5b6c856230c4b61f9e8bee5aa4103', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119495, hash: '3ac3c770d4e0cc5b2cad216a050f7df777eb2af3cc8122a49cf932c9c9d53d14', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118689, hash: '869af9f3185a9d53fa1221b5e6e03d23519ee479e4f0b491c22214c46b40bf9c', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124598, hash: '40be5437fae080ac20b3dbb2dd34536829cf2af4dae03f7a388979b6f73bb494', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
