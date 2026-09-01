
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
      "chunk-BnjjN8Dx.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BTDDb252.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BTDDb252.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-zcdjss-I.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPfbrv0b.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I_OS-v6Z.js"
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
      "chunk-HeTO9xOb.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BndkOy2s.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPVLljK4.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H7t_vvm0.js",
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
      "chunk-BJ2GDbus.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJ2GDbus.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJ2GDbus.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJ2GDbus.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJ2GDbus.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJ2GDbus.js"
    ],
    "route": "/private-tour-planning"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJ2GDbus.js"
    ],
    "route": "/september-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7vEpYdNP.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJ2GDbus.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7vEpYdNP.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsOJipiv.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsOJipiv.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsOJipiv.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsOJipiv.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsOJipiv.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsOJipiv.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsOJipiv.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsOJipiv.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKlkOoC4.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKlkOoC4.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKlkOoC4.js",
      "chunk-LRKqUKK_.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKlkOoC4.js",
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
    'index.csr.html': {size: 24167, hash: '320cab4044764443096d404e9ac4525cf986e933c04f613e021423b5640908e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23194, hash: 'acc00d44e3a10c818c1f3bbfed4476b1106531e13075d6ccc5ea36f4be3f64b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73425, hash: '847c192435909bd96c72850225e9597de6123a8bb1d3687a73419b0ac05480e8', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 71314, hash: 'c6e0a22735bc9e27db9b1d4cea3e6f1cd1ff219f8bf268e3ef08cca9a899771f', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 73594, hash: '480ba20b2ddcde1f3b6517ed6872e2e11551d704f0af19913c2fe59505b6242a', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 65818, hash: '06acc6505efbb7f981e7c05998e48e23b55f346799bef3ee2a4f72d7ffd27279', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 79280, hash: '007fca34f38d63bfb36473e3450db4373ca85094e9299c0ba9c09bbbcdfec06c', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 62527, hash: '504244639fb51b4979d167fca510cd81d46056f8758f4f14c217242701161ce1', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 62541, hash: 'ef2bebafc32196d8a23d2d7e8ecb044d2a5d73e789f61218cb15dbd8d54aa681', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 62542, hash: 'e101e2942296fb1abd8facbc31834706e8cb79f75063104fb466a10c1350b02b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100459, hash: 'a1a887b326d51e1c9f01f9e5d09bf299d6c6335641ed0e7e75ad3da99734f7c4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 74885, hash: 'e993913f8d9956455c242b02a6675229e1fd68ebcc5ce8a891982d6459591741', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 66317, hash: 'b9c95eb4cd7359db8f820840a05711825400836bd2d4e4dbebf0ca7ed8ac7987', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 80095, hash: '388fa540414e0940bea5d9f56ba61383fc53188ff64f7164eca05f0690cdf806', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 81302, hash: 'cf0fbc0398c28148ff0da55dfabe7d7b3baa956223c0bfdca8cd6fd6d9229f12', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 95766, hash: 'e208853384e6d5ae235e09456d5f270ead6be3d1f8d14e4c05ee9516f6c188cc', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 96823, hash: 'a658072bc751a7a0ceac373edf9ac15c1be3562efe8828cceeb75cb7c0c77202', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 96471, hash: '5a606728679e590f9224c4c7c765f308da036b1dd5211a92e4cce6864b0c3c60', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 98765, hash: '92131571d1e8467de044507437f0c39dfd97fb27b6a57034c8d4833852b03750', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 98031, hash: 'e0cb5c240c497a796fb12bbb54c193fb35f6f101ac61c6ffde1ddd8157f9fdd2', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 87365, hash: 'e33ae29588f9cef7bc184e5b0cdcebf1112366203d3a8af66792a263c74a4f9f', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 92637, hash: '913fb26dbe64ec3700590fa9cedd19e64dd391fd2980e11b07094f262dd8210f', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 96657, hash: 'fce857787c5e246108321c6291bffdf086b4d48cf64c5b70396517ff7da2fbb3', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 84958, hash: '467ab5cdad817b129b7681343bb0a4510504ecc334bf8dac01ae96765679b3a0', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82174, hash: 'fe5316fc60f2f601c69882840bc95955499faaafcfb487adbdf2fc15a6983887', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82025, hash: 'ff49e8e46ca40fb9cd6a2df725d9bb1e4cf1b3cb8c9cf9f4fee2f2cd90d5c3c8', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'private-tour-planning/index.html': {size: 86230, hash: '9ad3ae1474c6c942b322a30db4697f8bc810ab091bd8e37d8248e95f549cc614', text: () => import('./assets-chunks/private-tour-planning_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 62544, hash: '86f3506260892d4c9cf731e1e0e5416f3923200ef1f2d0ebacd5ec72e4b07587', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 62541, hash: 'c70eda92e57025eeaf4cdf21824b8edffbbfae6ee726791cf78bcb4f73dce284', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 93367, hash: '20bca02bf49392fb568bf4fbec5a3fd948ac9032badd6f4916884f0a230bf6be', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 86232, hash: '32c8fabedbfbc47345244f6e5367999c49039dae299c9104565773f9707bdbf5', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 98816, hash: '8440977f0ccfed6021cc1a1f516ce5d7ac74b18c0c1bcdf9aa7ab6de9269f9b4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 98807, hash: 'b4abf4d06b42f6e16e8c7e091e4837aaaeeab05917bbe0ab89476484cbf9a334', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 96936, hash: 'a1151f3a8f20a767d7f8885a5c4b7b13af72d8e53937ad645d71b78e8a3bb6fb', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 96983, hash: '45f6cb94d917545a8f5ef7c54247be6d3ef4a027baf9673a99c5832448f3d1be', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64453, hash: 'f38e6aabd5d19a7162915ee0a46025a05844087b8df0dd8a2bc8b8a4ed56af9c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 66279, hash: '3dcf06eef2b1a0ad94f91d916bb1382596e9d8e48e92722839980829776d701c', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 75649, hash: 'b506b7cfa7d097411e893560648bc0286557374d0a010370d18caa85bcdfd00a', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73004, hash: '6317f5951707c298395bde79a9f911a76089ab855faecc7ebd083172fe2378e7', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'september-2027/index.html': {size: 86121, hash: '524e62a5b580ebecc127c67ce4d726d8041909a5dbd88c85ae4886de39b683f6', text: () => import('./assets-chunks/september-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 69675, hash: 'fb885bb8a3dffdadef7b669e1474fc50d8ae4cfb7b2cae14c1eacc56362e8190', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86121, hash: '524e62a5b580ebecc127c67ce4d726d8041909a5dbd88c85ae4886de39b683f6', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69339, hash: '4254908497188b332394106e86298a389fc46b0f426f17ba8afab34215800668', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-RGJZKMT3.css': {size: 6006, hash: 'XLETGTWqs54', text: () => import('./assets-chunks/styles-RGJZKMT3_css.mjs').then(m => m.default)}
  },
};
