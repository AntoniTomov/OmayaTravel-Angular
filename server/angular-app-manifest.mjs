
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
      "chunk-Bn0cjzM8.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DHpxiQRs.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHpxiQRs.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTmyrq-m.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bb9zN_Dv.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C3Tx7XxF.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yhUM60EM.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CvTHRVdE.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bq4fqYqJ.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Czm3uIc-.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BbfYhSnu.js",
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
      "chunk-DlJo2orj.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlJo2orj.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlJo2orj.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlJo2orj.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlJo2orj.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlJo2orj.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlJo2orj.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BulvVspT.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BulvVspT.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BulvVspT.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BulvVspT.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BulvVspT.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0UogZH_L.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BulvVspT.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0UogZH_L.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B-jHOQc9.js",
      "chunk-Cc5rem_u.js",
      "chunk-DMGp4ibz.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/armeniya-kratko-patuvane"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/best-time-to-visit-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEkCQ-r7.js",
      "chunk-Cc5rem_u.js",
      "chunk-BE_jgIoF.js",
      "chunk-4I0k7EmK.js",
      "chunk-BlMiKgFP.js"
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
    'index.csr.html': {size: 16193, hash: '3e9ba08ad5ea7b4807cad54d5b309fd6034cf80a37c50badb145eb04c045d115', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '2b2af308505bd091a125f5c002058ebce8cca4cea618fd8ca32a3953098772a8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111552, hash: '34be81ec835b5a5f2e5b0c1fa146882ba4d944efa1b337aa0839c5583111ac3c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80100, hash: '71aac93cc46f678613f91f79a001ec32201b1443f89f071971b7196f38fa64ae', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 99539, hash: '57c52ef99ab4461eca87a4106d556820512e1e85006243af53bc3930e775b6f5', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67383, hash: 'a852dcacf16dd3918d78b5c84bc66743947c60a0561eeb7d3108a63a0fe50a09', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81558, hash: '509d3a333122004570564195e8a780323bbbe7046e95dcbeef82900b0e49d858', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77257, hash: 'cd87074ba2c62153716b7298ba2c425805f6c2fdd62d84294b44d64a938c3a58', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76680, hash: 'fb62491db8e306550dc29a37dd2ebc9c44332b4af8017cf3fef1b41736422632', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74598, hash: 'caaec662603af5fc336358fe182db6fc17e22f1d5b594ea9c06e9280abb7c081', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67353, hash: '04bb4b89ea4b37be22355416ace53b67d7fd677fec8e216824e8a81bb4bcf57d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80462, hash: '7547689c6d837cdb74fe77091a04c551839e81aaba52240726367738666c09a9', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81618, hash: '6267179d569eeeea5a72ddfe30fab256eecb831f852ee3d94a1ce4fed27af886', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82243, hash: 'a9e95d63818b32d805bb755a492a29e85114619d3cd5b4da1ed28c7178b3dc6d', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85548, hash: '29c9d821cdc24d6749e9f1c79a6e29e00d82839ab864b1cbfc8a40f0421ce986', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84054, hash: '1f9beef1a2e2b11265fdcb9b70b2175744cd22d1cb71e8180160700fe439da60', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 90108, hash: '603a2ad5e5988da3656d841d242af3b75f1210ba0c72c552fea37905eba492fd', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125117, hash: 'c592b7ee450b063069e650b2d86b2f1bd9b6bfbb277c908260ab9e5eb07bf7d4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124460, hash: '8e126c719ca7d2a932a2d7a1ceea9328ca35437f19e650f07225a87533557550', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121582, hash: '1fe4272e3fa9e61bccd71933108a2d95df07655fe492b885e70ed575c31b406a', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123135, hash: '7760b3443dec385c746261abae0b5253952e797296bf09411812333a95d41bd2', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118556, hash: '2759a129d290eb575c4a1ea8ac37e73e1416529949a437460cc8ac251ce1162a', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68183, hash: '51cf073c78fbd2d2c54373fdde56ad4b4aeb8c0d2819e7dff03194d11f8bfe3c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67405, hash: 'd70e0271e82be11909ca46ce38c4e4a2bc4e26517de697c530af4d18384fae82', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77330, hash: 'f887aa2dd8699ed34815360b015a9da37c19fb185b673dea02b6b3a9ac7d934b', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76209, hash: 'e07971e9cf4ae4ca518b9b04136a3d9e8d66a05806f31850a99eeba0ea620172', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82475, hash: '53889575bf02db86d5496551662400acaafffdc2f64466442f7ef7669426d193', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113483, hash: '0ae1404d6a6099e8cd0146d5e9f1b3bd7bcb71a05616dea6ce8abd34dd37f62c', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104225, hash: 'd74233fa12300ff58b177a3da8c5b7acfdb55f08ff61ea5d6f5c9d2a438b3819', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 107012, hash: 'bb7539c21b84b2e4d418c8e2af41a5fc34ee4eaad71fe5faaf216342405cdd84', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115839, hash: '3861c603c8fe546f518f6b88b3ca520aace37f12d079b19a18af9d0c924ebff4', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115622, hash: 'ca2437eef1db8680cd276ce6b2bd4d5a5e07bc706b5d31b9a2a9ada53c1caa78', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87953, hash: '41b53a89bfd7254c8760d68d0a3d2c754269aa24ebacd8e795c396378d3f9719', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87730, hash: '090887460737f5ef7eb5ac6386d8fbcc8df3f9c17b07eb0ddcf60da13e884bf5', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70522, hash: '3634164ea4adbd4fc1d0c2886740d376b9bf936758ced2d70948df0cea42bf4e', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '794d98da860d01699e854da0ab4b31506d4dd7f53ac5c2e5264a17d44ef33fbd', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70000, hash: 'c7bbc57bb963bb50a54d64ea6c43493ae9628f467dcdb83bbdedc1651f037a42', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118250, hash: '79f5f40b905a9360f7cc7546f7b8db11e6d186c4006c38f430bcfad768ac0d68', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 95034, hash: 'c9e2ce403c97f7ed867acc1c726d484fbb58250e59fba5ec093805fc30ec4aae', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107771, hash: '06c0f3600c6b46274db6a829336c995fc2cad2463d92fbf1994bdebb22a689b7', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95252, hash: '7b23570592d6de206e7ebc241ea0ebdf91ddabb63891d08a869a238736ff5c15', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94421, hash: 'a58bbfe8cdc63b0f244a1fe799a0fb4632c250e3ca7bce76bbd177d729872d4b', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88097, hash: '2ce3d57fb23def53a0953f75ab1ef40a549e562d249d3e9fb0b453253ffc6b5d', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82503, hash: '377cb4696e033601a93caf1872941285e27b3b8f9275b7a349b2ff4b2e02feb0', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104455, hash: '3310faad4010857dd09da0136cee0eb6301a1ff375871c992a0e72761aaafd62', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94487, hash: '9c8f454fe9f6efab3334f4e25fd26572548b62f95407ee1d473c0d39fd4397cb', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94408, hash: '9508f910626173d88b2bc284b09d814b1c6695cf70b7f3bddba220ef8a901367', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'best-time-to-visit-kyrgyzstan/index.html': {size: 119494, hash: '9c6b91909a0650de5089cb905bd4d3ab628a45f224dc70d382aacea7ef98f979', text: () => import('./assets-chunks/best-time-to-visit-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103829, hash: '46e72e659c1281f1239e4d48fe2643a6659aa45e81abc1c7be86847bf3a19a57', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107891, hash: '3a2bf09906373692413519b517bd54f6bb3296cbc4e294c26e7b90fd715e13d6', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118725, hash: '6f4e00d67810f689da51005968616abb052699505a783203a7e02b6b4f102d11', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112353, hash: '41633eb022a7f62afa49302ddb6fa0fc4002f9b9a99cfd847d9837bba61c2dcc', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118591, hash: 'd4a0f3ebe5e1571f82ca56869086649dfcc925eb1d97b203493a8ea59b3cdecc', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121070, hash: '38dae8447eacb0222ef5eb6663199cef4c9611c310ea6f578074dedb2aeadba5', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119476, hash: '886293e91d8ef295c383559b8c6c5503b1ff5810b0ef45bf243d192e3f82c59e', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118856, hash: 'c368fd0d8d108f7c7e655382867c5cf0bfed1ff0465678fb3333ea834f97fe70', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124582, hash: '33b0e7741f017f90feb0e59e83a2b5895b1ba8a35722239cdec9d0c1cc3d7350', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
