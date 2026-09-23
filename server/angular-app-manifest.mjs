
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
      "chunk-Dc2qbRsE.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CPe-6gds.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPe-6gds.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSDxpgou.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Di478NcS.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-r08CTMne.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLTo89FF.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jZdxom-Y.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-rHc2-bt7.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Fp8cQNOb.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BcVM4xVJ.js",
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
      "chunk-DSPlcuj1.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSPlcuj1.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSPlcuj1.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSPlcuj1.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DSPlcuj1.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C72wEUip.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C72wEUip.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C72wEUip.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C72wEUip.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C72wEUip.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDVH_Ne9.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C72wEUip.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDVH_Ne9.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDUS9yKb.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDUS9yKb.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDUS9yKb.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDUS9yKb.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDUS9yKb.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDUS9yKb.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDUS9yKb.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDUS9yKb.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CDUS9yKb.js",
      "chunk-BZM1VhOE.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjgirXTf.js",
      "chunk-BsJjpuu4.js"
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
      "chunk-oM0jm2oO.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '7679530ebe3bfb8792fe54b111649b218ec45d845747fd2f72cb0e3798f2ad22', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'cdb0c576ce3466123bc160046b955928ee736d28afc2c737b30275692d88002c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: '591a9ff62378e90965e1a5c37f9a59941b29fb649c8a4803bfaa7e9cccb6571d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: '7209c1767d338e49d5f833d2eeb2e35887852c27bd14f318ca937ecad1d2135b', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '583fd7fc214d39e32ae5e86cb6a80f57f2f028435c1ce6bb19f44216d76510bf', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '3052b97f564fd863589da78a97521f5df289882acab540b870c2bd5e29d6efbb', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: '45ce41009d3da51cd7718072725108b510a437e34f5a45af4fa838c14718c842', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '069e657ce09fc2b3d608cd2e89dac45c7c03e7b59ee5daa37f6aeccdb57517f7', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '186199999ea9efe1cdb1b68e0ab2514fb69f6542ec7419062304b7e5710f3b88', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: 'f1909663af23fb6e3dbdab1982c0b1f06fbd438a778511fadee2fb74e65876c8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: 'ee9d69ef64f071c92e96cc3043305bb98cb5231d9e04d1dd82e1687fd9abc56b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: 'a1c6730d36aa4de63cadf73db6e6c1fbcd8d7625c3244e930f96640bf6fbebfd', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: 'c0416371c090fad2087a3e095e2658813e0066dbbed949387dd02d1f82547f35', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75969, hash: '7fc164185e830f7419e68d26dd6950537d9e40d4e52c72f171b3339dd2f50a38', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114775, hash: '37c9900f7714dcf1ba0deef2f6193d429ddd2dea126dc82d4a18bac7a1c20fb4', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108251, hash: '0f384a3c89189da15b4fa19d4dd1bb9fedd79018b493e07add852fbd03e69b68', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118104, hash: '30b6c0514c26c77fb7f7f8ecce18b46cdf671f338c84adc02caa3d73a4bc3af4', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118343, hash: '47fee855b65e4993c377285b6239874bf7598e31e2031b91d1ee87f4151a9f80', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '31aa7a8938ead0504398600253651209e384acef0efb487e0e88ab14f6855f6e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: '9239a7377b5fe60c6ee89a049d5f512a6575ec481ba944c39e658fe73f18c7b7', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: '98864d9329e5a12ba0c549e9ca8a9eaff8802dc4a460d8313c4aa83112621dff', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: 'd19d1fecf86a25a31300b49df37324a914f439fee89743b25b3d84ce1cf2e075', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: 'bc242b580eed5f35386409a66d3cffb4b1f6aa73b333e154340f76ae8d28cb47', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: 'dba1956307438e366ec3b345c7dd42c2b5f1893278b142065d42cade7071ffeb', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '45ab963630ff55be4e9f2d420fa83e57cabfd51cb8d00a0f692a58fb9d722b39', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: 'f2043d9ff18681f19cff0e635e1e0e0c5d544dec54b1fefd1c553ce64886c801', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '87eabcc3c0fb69c336027485adba1db6929de4a7107cff167854aefa9b665e88', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '12c685e6d3b2d9e2e15c690550fa40aad8adac1ebac2b155d8235a8d17a960a4', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: '70cebf00493bc0ca16ecc26c6cd3e18be1576df35ac3588aea298562c296b36c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '157e784016d9848120b4fab9c2eab20184f1c96998cd438102e4ed179ffde055', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79778, hash: 'fb02053fc4b361d6e145697dedea94e6ef9010c068f8a712336ce1a6b6866c79', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80225, hash: '4ea245919e119ce03aaa509ce2d13f13f50e2121763da65ec0902ae563207810', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81374, hash: '56c3afaf4d19c48c593c3b58b6a9995d73e19d73e39949843e637097a8822032', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: '5932ffd730184091d12d758b9437b9120a748a0cf9fa3f46a68b8937ec8cff6d', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118163, hash: 'ebd62373aa6c470caa94fcf590885653eee4d2bd1dd2c091a9a20529f82360f1', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115307, hash: 'f7e757a2c6da93eb1590533fb220c9985d63e1226800f90777833ae4b038daeb', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108965, hash: 'f0ddc9d15f08bb0d83089ccad2c2294fe289005ee2c32b60e498c357cead6f37', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87931, hash: '5b4ecd94cf10cfe3acf36ae413a50ecc66998c9d33179da7814cbb8939419e51', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96845, hash: '3016d728b5f34fdc1be6958e9a566cff3474b4996cf7a49665218e4719614662', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99604, hash: '3147b8b3f0addc78867d6768b47a0be2faeb3faa48f528e063efe1370edea3bd', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104428, hash: '1686325c287331d4401ff3cd3ab117fa2c3a1f9cf3b6439a3636012da69ff994', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64650, hash: 'e4d2e1961d4cbca312f376e99e8baf409f872a6c4a89e83d523fa1c6ec98ae75', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66996, hash: '47359c7ef8ff6e2b380b56a5bb574eaeecb168963820020403036ece3a96a16d', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88773, hash: '99d2b8c039648874c7ccecdc65c25f91f6a8c72ee61caf5729c38750e70aec58', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66566, hash: '41587b2ccd46077876a3ed681a9b8c0425fb7f7785fd0c71070f86ce187e2bb2', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107151, hash: 'c359cae3b9efac34304a0645d71967281f1a5788dc738c43262850d7228d87db', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
