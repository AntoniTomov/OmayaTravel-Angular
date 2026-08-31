
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
    "status": 404,
    "preload": [
      "chunk-FXUpgdtu.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DlqKgKoX.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DlqKgKoX.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtFDq_0R.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C0AqYcDd.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxCgrDDO.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH9gmLqM.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DDKVALCD.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CtgId52X.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DV2VGyz0.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWne5l0t.js",
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
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Knb8Nz5q.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Knb8Nz5q.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Knb8Nz5q.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Knb8Nz5q.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Knb8Nz5q.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Knb8Nz5q.js"
    ],
    "route": "/private-tour-planning"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Knb8Nz5q.js"
    ],
    "route": "/september-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkxakpEM.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Knb8Nz5q.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkxakpEM.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-By9yTSWj.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-By9yTSWj.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-By9yTSWj.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-By9yTSWj.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-By9yTSWj.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-By9yTSWj.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-By9yTSWj.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-By9yTSWj.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DepJvnzt.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DepJvnzt.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DepJvnzt.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DepJvnzt.js",
      "chunk-LRKqUKK_.js"
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
      "chunk-Djl6BSTu.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24167, hash: '60747ac3dc24d673223b17fb3ac4eebf89b35d300e757c8f184c40fd29b5784c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23194, hash: '80b7ce072c844eae647dc106a07be1ed58d7a4ed025eb7317c9ef196ba48e2af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 79280, hash: 'c574fb80b980aa8afab642c5f0af58249f5e23e4996669e12356302be5ae3d33', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 62527, hash: '27acd5f71f3e0775a6360b10cb013ea60023be0db28e23d21b989532d1e2676d', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 62541, hash: '2c11aae9549c0cdc5479666f8f1f8b40c805aab08881176838ad30b931474088', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 62542, hash: 'f4522f1cea0af7a653b1ae4f5a6b3af0b68356cad4059a2278ef9b4a076812b4', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73425, hash: 'fcfa437b16c78bcb1284e74ff8afe4e5ba32a704d350a6f1fedd79c24c1d24ba', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 71314, hash: '71edb44eeeaa6debdc2bf31432b86e81d2251d96de274632f1970122c5631164', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 73594, hash: 'fff5377bb3347eea4402bb3c14ac8a80740f28f24d71b331fc0740b54221f1c6', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 65818, hash: '1aff4780a02a4bf71fd93520b1e21458cad44b90984e3127f10a31033dc98552', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100459, hash: '8a201aa96f256011a44e354f2cb33ce86701bd6e52b8e9e0981b9b482217d8dd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 74885, hash: 'e4f4b9336e7bda28472a25470aaa7a473f29034d8ebc10cc3f31fc99e6297cf3', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 66317, hash: 'd73159dfc6983c043bb22c7c30949d0a70e419bdac793730eb852372a5705c6d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 80095, hash: '95303745bc93b7069e3570ba19f2578516923c138495adb40bdbbea434babccc', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 81302, hash: '1ff9cc7e5f0d9091a7244dba52cadcca3a9fc652d8538e9d25c092c85aa1ae9f', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 95768, hash: '5847706fc6171f00134996d09e8f2661688c19f190ad0e0238b71817f3a3c4dc', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 96825, hash: '824cf1e8f16ad74fa44a57b93e37592b380274ac7033d5b9dbaa5671dbf6cbcd', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 96473, hash: 'bc19dbbb92e855ad5172bde82f3575594d5cdaa11a1c0a7f91aeabd032211534', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 98767, hash: '3229fce9a35604efa8d4509e434506269a1061183dd2aa748e235515a29ccfb9', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 98029, hash: '8e875bbd8ba1818595f0845345c0cfcd6d4260d5e18639ff5ddf33e4230933cb', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 87363, hash: 'afd60dbbebcd50a1027e656852f544ede220d1ee77ab4baba8952984a635756c', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 92635, hash: 'f479706c9bd96d061af3e7fdfd022c84b965f64381887547ed986772ab5fdde6', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 96655, hash: 'a282c833604fdbee64fc1e406bbfef137e637dc4019191b536bb43c7fc2d7aff', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 84958, hash: '7e233ede7ce4d1d0ba1340ac5b07c4ef06b8f9bf1aac142a6c5b64dc9f5d95e5', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82174, hash: 'c2fe695037a050af4ce98a7aab9aa8d00cf7f5fc698670ff5b9c9a076e36c397', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82025, hash: '031519b0af647c583e53cca4d178ea6f9ee7d79f8a2d64368dbc8ee94e292288', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'private-tour-planning/index.html': {size: 86230, hash: '5d557c908f2e5a1d43b58ef596805c47f956b0fddabd0f562eb10d5f8b6f8e53', text: () => import('./assets-chunks/private-tour-planning_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 98818, hash: '33229eaa21911760dd6a07289439063b01e558b2d9f64bfc6929b1189f9f8bfa', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 98809, hash: '35cf7d0caab3e3299dc18f05b3d9c5d2d70fad95b9812db858ff556e7269031d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 96938, hash: '00db04690634ac8d3f6bb77c1b629fb524cda46050101ea7d0bde4209eebbfa1', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 96985, hash: '9ffcee71ffe3d96d9c63e0fca86b44e2cf3eab40cb6a6cdc91992d9005ccdb45', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64453, hash: '921b80f0c19b9bbf4b8d2449b40524240868c400404beb9ff59819dab0ed8fa5', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 66279, hash: '77f3c34f907d1519183c2ef8793eb92b15792b244a34949be06d94af3fe4b06e', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 75649, hash: 'c14d189831462942ec8089d0d065f450b75948922525ce8ec1a91d6df40a35fc', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73004, hash: 'bff0cb3340d90ed3a9d4a9ec4c39f00d922218c78bb3efb5e1c691ec17c56a5d', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 62542, hash: 'e48044bef72814ddafdf4b010d0c3dc6edbb605aa1ba14e72a9c2609ca2b5477', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 62539, hash: '5b7115ebccd3357716406e9916c0f6c0f86cf5d0f156e59bdd914cfa9081b416', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 93365, hash: '6e363f166c49a228c0007d8a27e2a4b7eb6ab124591499cbc8c290c36f231f36', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 86230, hash: '0a6ad093e99e70d75a9d096101e551c7e2702287bd4a83b7293d3ed2bb8fd0f1', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'september-2027/index.html': {size: 86121, hash: '40f82396c53da6235188dcbf5d8d2346aa7fedee5728fca0b345f91283d52ae3', text: () => import('./assets-chunks/september-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 69675, hash: '4cd95b9cdb2f91074a5b058e9ea5bee922b688d05c8e5e81df1d1935c27884b7', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86121, hash: '40f82396c53da6235188dcbf5d8d2346aa7fedee5728fca0b345f91283d52ae3', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69339, hash: 'eb4de87d1c6d21bf437ea8ef6baaa33a74e638448fee767453335ece9980e600', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-RGJZKMT3.css': {size: 6006, hash: 'XLETGTWqs54', text: () => import('./assets-chunks/styles-RGJZKMT3_css.mjs').then(m => m.default)}
  },
};
