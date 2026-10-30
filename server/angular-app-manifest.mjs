
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
      "chunk-6ellDLf2.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CVXRezZ9.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CVXRezZ9.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmOYTHHA.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CycPitxz.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dy0DNUdw.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5QBoAhH.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cdk9V_In.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B0UJR_H4.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8uPMOhQA.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFTsiTkV.js",
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
      "chunk-1-MljZTj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1-MljZTj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1-MljZTj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1-MljZTj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1-MljZTj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1-MljZTj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1-MljZTj.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2IQ1Pz4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2IQ1Pz4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2IQ1Pz4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2IQ1Pz4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2IQ1Pz4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZdwCRkL.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D2IQ1Pz4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZdwCRkL.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BFjq1dNb.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-C34qNANr.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WNA6Rqqy.js",
      "chunk-DyzSqWdQ.js",
      "chunk-CljFWKyG.js",
      "chunk-DQUXrRDU.js",
      "chunk-Dc4BTjVo.js"
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
    'index.csr.html': {size: 16193, hash: 'acb428917a7599650ae658f4203cc72aee77b58a2a7a04294154295730eac9d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '4186b4e0f1002d114e3bffa11ee9e0cc522d239a11fa6ea3ab1964023a45a167', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '4f9380cf22a24bd6cc37d8139365b840471cb0f56c9c5e613eb0cc237166bcdf', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: '26290e51f06bd0624c3c71adccc69ed1f6b4ee894140ce620dd8b7956ecbb32c', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: 'd12ad609665c452b1e75bdb43b7e79db8aa838acd521f3d41c85b36db44cce2a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'a83e6a979e83ee1eeb9dd11938aa6d80b3255a5f0a7d0bf452f790ae69748728', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: '09eddf15c8f054090fa7dac440082d6ea21c7d6fddfde7e422d6d3888a2f0dec', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: 'f47824ae4dbb627024fe329f143c54321b792f2adb08048c58a145593b0a65a9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '9690d49dc03d2b0b9ec9b26f7bf07f0f69190813b0e7890af09a87828216e0de', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '184ec795bcf290be5bea01dac187460c5472b156a6047f7594b704f16eacb77a', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '3139e9500b1260ec4eec76ac741956f1480cd0fd7e283bda8956196edb5f1877', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '6b24ebc75133d9ab5be22b10446b0671fa1e65726e463ae7a9a1d91adcb9b50d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '7b6432a599923451440187046ef623a62c5d112a97aab38c651d18bcfe295f94', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: 'fb8a97ca6d662676ace80a2b7c221087a3eeef97fcb4f364ce4add64f212dc5f', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '364ae4ed1afcb534c0d17c4a8c50c6fbe1f9a16e1204b2dae8c00734ef796cc9', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'd82c30c2eea7c5b6ac2e225af2f77d8481ebf1650526a8431f0ee1311c185f5b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '01564a27dd0754d6e5acfbe2e9c25e65cc85842398caf468e4e951c134416541', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '33fdc0fda4be8c9a6bf819a5b785a4202486893c5e9658a6680cb97f489049a0', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: 'beb8374bdc8cde4a120b2a9afb554cab727ac5af0c1255f0d0554b7d5cabbb84', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: '569d8c4bd832ead4df357626dd1199d700e69fc2cde945f69ccfd9c03c788242', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: '8974cd56784f11310eb0edafb961eb282d7f6c75086dd9f598e9d1687bea445e', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: '42dd9d3dedd8e268c88ff1a13ae918eac0d96f24b62a2dfd6d6260b13e32a4bd', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: '46408aeba7e5f8eb9e6e623405df9a53db1edd9d34ff07ba219a156842dfd5fa', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: 'e8cba244d1546a7bda6f377a389819cd13f84765dc04ecef182daf37be6ed0db', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: '9e6207f0ef20e671bffe70e0d63f180a659baa06c873ef23fe9fa239236e4e01', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: '5e8a9416c2ee67b720316cc434610dd36dae86f5253242639261815f5122014c', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: 'd59a9ed506e7fbf843a498b0be3f59cd3fdc27b235fb73e09b6d9a04aa7554a3', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: 'd2f37a5d12df438bdf8644feccf271eb7b7324e71eabf47a35e9afb939f4a850', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '1e30af42f19ef24ae924dbcae5529b32eaba8cbfbdf5a07da800b7b6686eded8', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '26f43bf0c9149716e47b316113875666b5d494ad797fddda32625cea1877b092', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '09c71420cccbfb091f6f5e8b40d1306b1a7c6737adc18b55c7fa7d0ed87a4dc8', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: 'f58f1ae4fa851c858de181ccb68842f917cf3816fc4fe9eb29ead200c5b7c0e1', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'afd0af62401c45ac0493d58342c20ed09f9699aca4da3cb176e85c1e0276868f', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117999, hash: 'a25f0f4836e3b937026c259d8ca9665b134878b80e341917fc16ffd3387ee693', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92588, hash: 'eff2ff49739e432b8b8afdb0d7cd7c16c1ee2a13e4e53ca1dcf14ce8613c5098', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105053, hash: '5725ba92cb856db1dbe9b04b380040096c905f8df7dcd07e88ebdbcf90cbdb1f', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92949, hash: 'c175e4f77be9fd9759ec2eea35e69da7919d3418ea261514c1e1c17ee7eacae1', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92154, hash: '9eca3981be893a5bb55f3ebf7e7b7e352a01379db8b845bf90556baafe46bd2d', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: 'b133b8ecb160551ccc2fcf93279ea0851ad6bf29df7c8f543b3ca5dc36611d48', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '35452e417f00d6ca1beacf0d52f665072d2fe12d3c4bab097c1dc30fcdadfe16', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104503, hash: '645591dc763536505993d82e0f3abe975255f1b18b918371fface7eb18ce61a5', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94535, hash: 'b62b9c510c39fe8a19a77b9d173cb72b0ca386b48d34ab369c049664ec64df7c', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94456, hash: '467d03c30490e126189fbe60a7d52865297f3b5193a78605984236a1f108f43a', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109496, hash: 'b05c3542b866b3f584c3ffbf2c95c419f639b829e14c32621b6b858487f5c251', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: 'a3b5b4294b00d11f74cd0702cf66e968bbeb822d741b1fc83fa132262be3a8a3', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: 'a915234e481b90cedd88fcd402d027fcca808bb95296ba709df6ed79e3e302d9', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '40af8a699c395f47b013f671531d51126acc58083de39d39a13b4aa7010cfc20', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: 'f4a68ff1eb23b8d5db2c6c5ad9d5f11040813c779f58c1b8d75a8f1f8e29cdd0', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '8e4a1fe486a6058c340b5a172afb967dd7c6f21b59d6634d35d6fcc988a0516c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: 'f50f7190eb1436abfb10edb478e20f3dd9dce8e7612c8d08b48db7c75b026ab3', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: 'c76aa07e8997ecddc0c795e3b29ab64365679c5a6f123b20e2c48f96ea90b3eb', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: 'd34ed11f7293bed5a8d9b01d8ba0e148e13f294bcac102936c3fd168cabecc4f', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: 'bf566e93b3153a5a09755fa56d9e3321ec64bbdf354c6117ec7a13d4106f402d', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
