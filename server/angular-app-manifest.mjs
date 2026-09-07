
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
    "status": 404,
    "preload": [
      "chunk-BMhFvcxZ.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CTlCmVQ2.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CTlCmVQ2.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CApj-g1-.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0S3i-vx9.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vJuPpEuN.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DnIYIgQz.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T7n_99gw.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D56WKgIW.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbXeiCyy.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cr-L6uMK.js",
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
      "chunk-1ZCXo5tg.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1ZCXo5tg.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1ZCXo5tg.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1ZCXo5tg.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1ZCXo5tg.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwIkVlC7.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwIkVlC7.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwIkVlC7.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwIkVlC7.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwIkVlC7.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiX-hVHE.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwIkVlC7.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiX-hVHE.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIjgGyix.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIjgGyix.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIjgGyix.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIjgGyix.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIjgGyix.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIjgGyix.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIjgGyix.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIjgGyix.js",
      "chunk-D_E5dpPx.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DX4U0Lx4.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DX4U0Lx4.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DX4U0Lx4.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DX4U0Lx4.js"
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
    "status": 404,
    "preload": [
      "chunk-PUXTBsVo.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24223, hash: 'b365c2fe97b755c431f1278007739f3e9062abda47138aade93c027612c273c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23250, hash: '30f641ca8269e2825c5b775520c689dc0e31072c1c24ba648ef59a7d9c791ba1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82896, hash: '311fb2182456c64bc53e8e49d4e1ee01c0a236c7c2bd22494202d728551c8c84', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 77679, hash: '238cdc551ffd986698427d17c08a04283833f607ba5cd113d604f2cab7a831fd', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 80545, hash: '4c41ac8406390c6b30d5c1260875f407ec91781d66f8c39bf4a054eb08d2161f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82757, hash: 'f161abdc0c291af24178b452856f8b1fcb8146d664aba6bccca3daae9c17f791', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76856, hash: 'b9079aada7fda7213f34708b0c3ba5b6ba02b3d44e91d6ecc3d0e5a0e46ff4cd', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 74982, hash: '67f51cf1c53911eaa5f946b34945e4cce4bfb2473ca6fda3d29bc8345010daaf', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 77101, hash: '2fae6ab2fba17a8762560344deb05593475e1259b47a28f4b8ffa811691fa0d2', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 69399, hash: 'f10aef435f97d399f7a13e052f1c0603963c782f0e5b1846388d29a2b47b1194', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103709, hash: '107691766cd4cacb9fc2153002de059bff3be9f050180497baa22038e8d036d7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 78373, hash: 'a716de4e1018e69b87fea77a5d3889ef40b95e8a8dff064e9f80915e83fe32df', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69705, hash: 'dfb9c04f475cbd557d566ac1d45b6ba18085e85de4b09a40ea897d40172bb36b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83596, hash: '6c834973d341cc84cdc6d9049e5f24e4304c15e7016638c9e609db4067e171ac', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 104398, hash: '82ca54e52b569da1b4f99caecdf0dc629be84f1a7bf5ed20d2748d86e66e2de8', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 115511, hash: '5ac798ce496bffd20dbc84ce7a111beed3b828fc21ada1831f95c5fa449239d6', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 115750, hash: 'f24216a3d13a9b24ff6f9f7e62ffdf5a58d57235db59b53cc2a20ee862960305', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 115609, hash: '1e51e74423927f2833c026a55701c2093a226f0f163681ffc2dae328466ab84e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 97600, hash: '7170dcad71179f262523d4c52d4f821ca16a8ac9c479f6046bf2ea386e76bcdc', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101438, hash: '7c9ca4b5927dfd3e437bce05c054be9025a65382d26c95992eb630223f205aed', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67748, hash: 'c0deb0ece131a995619df354fc9bd2e3de6324be39255d7d2fc3fd5b4045c471', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69760, hash: 'c69e747408fb9e7217a4ef0a6bf032acc6de4dfa3d8432d5ef11de1a03defc96', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 82382, hash: '6d24f788ffefab8d160995ab6581edcc0985edc830d4eb493ee4773062b36442', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83792, hash: 'cc8e044ab4939d65b4b1d2275c51070c32986d4247ae83f99fc675c23ba5dc0c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96976, hash: '31a2325538948abfafbc3ec1b64cca76c00858c532a67a8cf65a8cacff86fa5b', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89869, hash: '658510a1588436be55ddbe386226f5977e9aa44c0e19d9d03f0eb491f70fa062', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 90293, hash: 'd9d3cd8904561f72af419715540ed7cfc2a08a5ab235d2ed5cb3ac4b8d8e986c', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72635, hash: 'c1e0383caf0996fdc6ed53c906ea6d951a4dcc1c822f89724a1f8144d5d55c35', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 104187, hash: '4367b4bfce60ae84d37361fa86d8f59d1d2b6346eb370acca9ca5babd0a90793', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 110708, hash: '888350732055c83d9274889c5a475bf20d8901818f7ea23016fc7a7c0471fd49', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 79002, hash: '9c4d128df05d5fda3cb8965532683ab88d2b9840388a147227d1cfeed533dab7', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76353, hash: 'bc109647b143fd0d0f0813d68ce129969741d0c23b2f159e2a30c9c449d4d0ec', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84739, hash: '2b863e7b6cc2850fee2460951e83e3016bf04780fd0384d6755efdfb7a63e6cf', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 111278, hash: '5a594f953c9842bfc7d8ed51b02fd8757b50a444dc7742a4a8c72ece8ca961e2', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 105037, hash: 'c49019dfcf5c9c1af793c35f4d4fb9fab302a7fb342b8cd77cb76ac9157fce3b', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 102985, hash: '4ccd2067c0615c13c74d486b683185345c986898dfc5653319950b63b60c38d4', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 92135, hash: '4df0cab0614dcb210ce123073a1e1c9b75431cd2e2dfeb071c33eb17a3768075', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 88643, hash: '03889a2d41b221c5c25a599c78e0e380b86964d7da7153365167b2dc066b17f4', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 85894, hash: '24f07cbe82624d7db714b8648fa42f188d0579cec3e427fe7a85c27c270d298c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 85617, hash: '2658f1379ce228f7f2d8bf08c362401e8ebdb3514f86b4955cfd8b582ada452c', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 73060, hash: '9a8e16b4cad403b79913ba47317cd7b2d2e5263faff01c296a7151223e98ee5a', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'styles-RGJZKMT3.css': {size: 6006, hash: 'XLETGTWqs54', text: () => import('./assets-chunks/styles-RGJZKMT3_css.mjs').then(m => m.default)}
  },
};
