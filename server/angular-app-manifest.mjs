
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
      "chunk-DGA3Oey7.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CDwvvAiq.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDwvvAiq.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPr1kmKH.js",
      "chunk-_nySjDKn.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BpdSp3-K.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpmVH6xs.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CR5bSx-W.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lcqOfywW.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSBs0T6_.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ldl0pgPr.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4HrKgwL_.js",
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
      "chunk-a2fisStU.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-a2fisStU.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-a2fisStU.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-a2fisStU.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-a2fisStU.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-a2fisStU.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-a2fisStU.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHxGYLLA.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHxGYLLA.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHxGYLLA.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHxGYLLA.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHxGYLLA.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vEgLnQPI.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHxGYLLA.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vEgLnQPI.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C5_fqUmi.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-CTFo34jZ.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jS3tAshG.js",
      "chunk-COscVnWl.js",
      "chunk--wQxRZil.js",
      "chunk-_nySjDKn.js",
      "chunk-ngBSl3J6.js"
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
    'index.csr.html': {size: 16193, hash: '6dd4a166ee1e4eafc7cb121077897d0511e2e5f43a17c70238b71a84a2305d5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '752dc59acfab04fc37abd192da7c990c96f161a319eba52e225bc1f2a217102f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111633, hash: '0104357beaed3d5108c9e3f5c838e72e44ed10b3ba33abc6181d82fda27baff4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: '69e408b4f644bd187eeb2c116ace0e54eacc655b4179e5d9ec387b29354aa290', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 94707, hash: 'e38b3353464ac37f9a62bf9326c9cb82f6f0e736bfd05d2e0de6cd1818e3df07', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: 'd507fe22891027c05ac67abec9b8484e70acbe56a070e0c8709f2fad94528a73', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: '6f7f6d3a272db9d708a0c923f95c203b5ce11765e20a4130b15f84d75d36273e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77298, hash: 'ae7f32800ebcdcef6fbe1efccb3db363d6e468e4e0d540de79a7f31f00fdc125', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76721, hash: '1a584e8a5d64fa0b6d99502f4a5f6aae016db7d79a4f1a50ac780c8743f6f5d3', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74639, hash: '2ade4129e72d3989f3990c1415ebc201afe3fca832f59f43b61522cb0c64e251', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67394, hash: 'fd9cd7a82bef9a079e9b26dc896929db58b7d8689bbc49cec56e2b452d4bc9d0', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80503, hash: 'a36ea04bf0602f4a108a14930ad822fecbd4b02d28264d3cd310c9bef674afa6', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81659, hash: 'b7e963629011b343b907927ecf47e3e72f1fd69b1796f96525bba8aa5780453a', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: 'a23700e9332ad60a7b24d9fcd7c445ba451e32da3fafccffa58a7e0a2db32f49', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: 'd0c295291791d893c3cfb659a210b17129184115ed76c2e8ec9c5176931b4c0b', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: '12dd685f449b94ac1b63464e071f8810866dce1634a0b812db4107c00ca03789', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: '89c3352723b607dfa28f95c8df75795b924b5cb90d5dbb8c7aa1cd981c679352', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: '006ee703c695dff7f1d0a983129779523ae27b8917c1d68a7001a0d9f287ebb9', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: '21d17c407910c85d480509b5ffeb08e46276feb280b8fa17adfc5cb547aaac02', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: '67935ad7b9754656e5d5383cf06c1e3121bad7f54ace21229fc4e0467fdb2cde', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124586, hash: '3ab41b5e841ac3af9fbfe29c4381cb2327e880a2a619024ec763fe5c6bf24e5c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124228, hash: 'c53b644f95741b525e1915bac8072d542936fc814ed24a05acd73a7e20b684fa', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: 'fb199acba2fdbf36d1522e9f9cfe0a891e211d764b687d014a19daa3c8cb2707', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: 'a6a326982e4c86db9e208766ec7d827b4ad3fe10411df8d29766cc2e89339150', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: '52b14f88c2633876233d5e2fa5ce2820ce72e376916fb880c96a6a9655cd243c', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: '972502b7c20cc8426b85409eb161867ec1c2a58dc2da0469f098b700d4ea3028', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103220, hash: '133bce5b222f63edbffa63063cef5a576901b324222f4a80458346b613fa19de', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105670, hash: '08866b043bdebd57d2d44842544800c209068b4a14a31bf89f1668e57f135844', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114491, hash: '81bd2e62f959de04f0addaaec8de6d7e22943472b0af69dbd91c45495ff8673f', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102329, hash: 'a4b8c65127115e00696a8ec98a78572362895cb7f6f2f84b8b35e947ab3076c4', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: 'e3be66658c47c3acc426575bf795ab608197e03265ca6b6398773524f99d152c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: 'c7f734f08aec38577b994c54250e035f4f163e7c4f008750396ae7106388cae7', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: 'dda536cb588989a8ff28a9cad075f3c81104a8cb2f9a9e86b0c10dd544e9d1ef', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 97871, hash: 'c620215e5a214bcdf55a7a2800f5e4db5f4257902f2f7eeab42e4edc954fe38e', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70038, hash: '9dfcb4ebbe50fa5b0bb032ed644eb1bc2daa0cf45e7b31e94aa8d0b19d7c2ba6', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118201, hash: '7bef113bdf3710f0b1943baf0105859b262c94becfec48c3001d20d87388a195', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93730, hash: '4d851eedc53c2533d7c43881f3d88002e4753cde042fd8fcb7c72e28521cf352', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106860, hash: 'f0db128c59c6fc046638b1c7546385299d70a60a7b71eb3a8556f24f4d9a576e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94282, hash: '020021cca131a35c55ce761a29211419502664b6174d283a3efb295f7f2fa8e4', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93439, hash: 'c2bc685206ff27ccdf8840540bfc709293544890eb2b6b2c5e60eda1a0eed75a', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87194, hash: 'd1dae05953f2f2aee3f3cfde699a6cfc3d94d3b7cf004e0738da8355b131e26d', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82544, hash: '2af19ab2ff8adb3d4cadbd36cc04c2f00b286892c2bd7b52068171bedfad80ca', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104495, hash: '72ec6345dc2f5ddc96088d32a2611f4b36077c804797f86253e92608adf18ab7', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94527, hash: '9ae423544603a29b4fd91d5f1f3255018eaf7f48e0101730f4f6ec18772946a4', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94448, hash: '564685558cd36a548bfd28b1b9f9f2f2f8334a29e30949ed3d13715606677f30', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106237, hash: '2aec120ed64763d68c2a5b5a5fc9fa23997747558d7d991b23c11231d88f29c7', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 116997, hash: '1c861a3c75098df5a333e21b547c90fbe229c7036b125507b848b59e91cb5c4c', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111124, hash: '79bf194107f5ec68ad74a807cb65003655804c64a039bca7c43d97fe136c34b8', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68228, hash: '3cba5440c51dd7baba95e1f5e584e3181923fc3000ca79ded9b3d640a1f1edce', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: 'dd4c24f30c08e76a89a87c83ae17dce1518cc1e1f701ea45defcd68efc42b988', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118544, hash: 'f35a1a2eab22d2f148c8a73bc06d9ef0c728fee1a65b5d50bcb5b1f7a2855f0c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121015, hash: 'b826f6f33d85bce3954287e6eae34fd74f498f664f4a4036f9d087eb40dfded5', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119427, hash: '7b407612effc6e0a343227e0f63f3c787569ac78c79d6aca14282c31d0a4118d', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118621, hash: '1230f29b5d677ae7fde317f435659bf12754dcf9a0dad7e0a81ef812c2c7e8f9', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124347, hash: 'ab6e8c86d237242cad36d217fcaadf05140c913a33836e84687ec16c7ccac7ee', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
