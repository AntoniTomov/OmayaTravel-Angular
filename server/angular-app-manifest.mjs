
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
      "chunk-CLq6a4Y-.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CrjcMQCa.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CrjcMQCa.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-2kXQGN.js",
      "chunk-C_Uaqda_.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CJD9hJBM.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dhwivisq.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSsSGR7q.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DCj_38E9.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cgcPYRmi.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8-_FK7ik.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ci9P09KG.js",
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
      "chunk-B6SdX4BU.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6SdX4BU.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6SdX4BU.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6SdX4BU.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6SdX4BU.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6SdX4BU.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6SdX4BU.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OuzwONLu.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OuzwONLu.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OuzwONLu.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OuzwONLu.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OuzwONLu.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_cq6jzSl.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OuzwONLu.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_cq6jzSl.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EbV2AW6o.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-IwDiBMQl.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C1hYw9Yh.js",
      "chunk-Bet96H-y.js",
      "chunk-Gy5W9MiM.js",
      "chunk-C_Uaqda_.js",
      "chunk-S42WwdvX.js"
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
      "chunk-CICCbPyc.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '439c3743f8361e803311ece0ce6cf5cf833a2c167889f9a9138c932564a85518', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'cd379460549f8732f95424653378ccdb7e02dd54a1c9750766b86822bf454d59', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '131b975ab7f5305506be09c0ab2fc0083f55c820c86f144bb750b234226d0ca1', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: 'c4a3321502462b8bd169f070203b74abd7fba14bf4b8df825ab15361dbc285ff', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: 'e836a35c694cc2a5d9b55146179ced54e6b0dd99b94e3a117b1108e8c4007c82', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'b1808b2801f0e9782e4e0a9f47fb91fe68cb97d493f66278121637d1840c94a6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '65a19f0155b770f723667f048373c81cf4220a67255b0f4c164d7197d3eb6417', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '1518881e41d7a4432325ca7ede4b9d860798e8ae8dd716a4684ccd278bc3d7d8', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: '500dece631af50813ded83ad5332ac895c4088d09602142970b3855e3991dca6', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: 'bbe001745805c54d6043736a9edd0c274118841a159d4a46e0140ee8590cef36', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: '3f6f0fd242b2eb3496008a927243a583c1f025915e281dde839069c76addc19b', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: '741ebd764089817a71d2dd42a24f795a18b32d9c56e6a0e84e13005a00a65d91', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: '858a850aa6512ef3d7b3a03bb8f045495adfd2d5280beae147412a9b5ef52361', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '5194e1daac826789b8b5dbd439a16ed23745a4369790345be3de8c7a06b4245c', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: 'a54d2b210b582fef4b235bc0c02c891d76b90fb4138a1042752aba7546c37b81', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '63e20c43ceaef33cbb55b47f3f3b955fad856864b38e9eabeea45fd8473f9804', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: 'db9f65e60792ff40484ed2008e34123c84a3242b20caceeb412768f0fcd03b41', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '2d4deb425c9c92b76b86dcbf613eb2f22bd79a78b85b98df595efe2b7a6b1d7f', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: '555325eb1f0b9dacdd631ce6c58d62d6425c77f68e9ba43f852fe9bd01125f4c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: 'd4144870ed2475f8832397860401e824a11774fb6398480c1c28ec58360d63f1', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: '02e56adde9e9a3bb9dcb43abfa41ab511ff45dd17e9581aa57817a1d2479af82', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: '80275a59f7d0b63250abe3d58c18cc46cb3f5c69cde12d48d4a658eb70180352', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: 'c52fefe9692447202bd94d20d01af07fe98c8156af5c4b7098f3b64f907b7228', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124272, hash: 'e33dffd58f648528600065f41a30dfd681be2c2fabe3ec8d42fe26b9349ec22d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123914, hash: '594f485e9b707b76c22661a35a1f99fb3c701bcc748dea1d2fcd454abe294cff', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121222, hash: '1d6cfcef6c6b285839dd5e00624e3af2f2c9ef7669793c4ece2f88ff76f38809', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122775, hash: '1d6772aae81abf507191d1efb278c3daaf37ab2734dac151a7a29bb237bfebd2', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118013, hash: 'c4ebf2ba5a009c7f4361a47e176cf3868ee7c5c645af22ba36645c352406078d', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '1297fd66a4742cbb1020e6764a2150d04da897f7521a846a8d9e63e8a28a668f', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: 'cc5bb2e9c1e7342dd400ee4692c6ed4a157367832cc237c74598475e36d2d922', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '353cd11d84027f9d8398ffc5cb15346c468fb292c7e76bcd3f5bf69191547b82', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: '43a6b7d361ac2528b1dc552e42a7f79ea6bc57218fb0107182d9e3b4be33bfe8', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: '60756e534dd525b8178f20972434e9d1d4d05bb9d3b1b769ce5756912ac4c835', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117709, hash: '76fd12af4716707adb4b50bd5111223207ba5779a31da00465274bd2eb5c00fa', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92588, hash: 'ff829d28fc2f4189f6d78669a3e2a131dbc89c3f58d28610b26d88c88c244a5f', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105051, hash: '0bd55b27d1fe729463c00c6580192207f306751e0c645503a8eea83d7a035c93', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92949, hash: '3412ded3af42331fe240475075093849563935a7a8a7fdb56054dc9ee26e0e75', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92154, hash: '00284335467db8f9ab232dcc6c6f5d1f4a82bec61c32dae995fe7314f841898c', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: 'aba7b142b7deae62d35798ba2e81e0ff807b00b5294acced511c77721429e596', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '2b41e8c0f44e9f1ea56d517f92d2e513eb0645054fe11b2462666cc2da4bfd0f', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104502, hash: '178a699a428f1debbb96ce78c78921aa34efcebbae4a631ea1ff5a25eaad8bc7', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94534, hash: '5bb99f43acb7699a2c7a2f2c5f726002e944cac877e9ca87c6729f35d6074f48', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94455, hash: 'c9bada81242aa41556ba504fd89c84b4804675bb2e85b8b1bf4a2022d4965cfc', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109509, hash: 'c15aabeded57c26d4de8016190872a71765fde4494484660c2ad50c22e6a08fe', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: '8f3e299a57c84b5ead129379b146a9d4c5c05b14515066ec46b72dd8af6fe139', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67387, hash: '419f258cf3d42311a8ac3d116ef324ee910e674d606245dfa73d0d0975d4866e', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '283f3b833241a5ccdbf58d72006bb23db20bda86e4e2f898312e8bc49bf93e4d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '47d5c989442f61b8334ad5a684b1efa99a2c87b416b22ca551b901505b8458cc', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118026, hash: 'eabef5a0b56dede6a006829348115c02415c65bca5fc333e08e7c89c3accfbff', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120712, hash: '0b294f58427125f873cbc5a8dd0e48d46c32c05c7c4332261be0d289d91e57f4', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119118, hash: '86b314adeca5ebfc6cad4f01b07921d16f87f2cfa328b2afbe950ce1161b9292', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118607, hash: 'f62da70ad5de1a7ef6733320363b494683c035ad85071edf2f4534b3277995d2', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124330, hash: '38fa7ba6d2a295b8decac69f9abc108dae6064ceaf8cc1aebe31535b0a4c52e0', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
