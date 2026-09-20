
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
      "chunk-CbfnxHIa.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-wuAAyTSa.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-wuAAyTSa.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BT9EH13f.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-WGZAAv.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db2UkLq1.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DDgleISJ.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlYE7vuR.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-aSivhFuW.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BTUMCJpD.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BY-ZzKpn.js",
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
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SY5-aWMz.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DzylKmEL.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ydS4bw.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DzylKmEL.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DoDW5GVx.js",
      "chunk-DybPEqrv.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CmE_npHo.js",
      "chunk-B_GvIEOs.js"
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
    'index.csr.html': {size: 16185, hash: '9a3525b69c451fd5e7b7f8b35ca0f8d13815ef6b4c863db123d2c0b01747ee7b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '25f9cb54c82b187791d612e7cc81bf1f0f622b5d80325c68eb99df512fd119e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105395, hash: '6fb44d90ac3039e28738f5b64b87deec4845434e66f77d35e5ef646f1f203fd5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 83314, hash: '74d9e0d827c0393a24642802ebc86feef917ffc27c08c2067cff7e9693ab60a2', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63438, hash: '10bd7ecfd5fdee5f7dbfb8aa5b0c1a6812fe084ffc889ed92fe571291912dcde', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77476, hash: '2773a02ba408bea986ee85a77f5124b1256811ee92ddb667a1af1cc51e84b4d8', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 71645, hash: '2770211fccf49944d767879ee522d1651daca24820a59199e89a1e992fc60003', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72543, hash: '034549e2f1bd44b1d231821ead63eed1e2a55cddd33729e4ad155e659f27283e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 70653, hash: '452e07434d216c737cd266bfff0ae0b793aae9edd7435fdbf168884f54fa101a', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63408, hash: 'ac569da44f443858c68af2997bc797c25429ab72beb26ff63fcba4c1f008df5b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76517, hash: 'f03b077d02d30d4809a470afd238b194ed16fb57c07e7c263beccc533c988a1f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74062, hash: 'e3d9d81724098539227fb29395fba134c69febb738eb28bfc42b7e9ce167083f', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75537, hash: '69e7fd82ea7e3870de42214472381942a8cc0a998df9fd1ce1a11cf630448d78', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79344, hash: 'f9935e9f8b630f764795b1f14450ff0ce32a21f1e57d2c1f9f4e7ed87599b777', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107216, hash: '19edf29c51c8373c908db22afeec2ded04201826609d47637bf4707033b55c74', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117069, hash: '2bd836ab1b978022f74ff387d1f473fc6724f93f871339189bb14fada85d1778', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117308, hash: '6d31d7719b73f20eb687afe7828962bf5853ecd29ef1a891894f4afffbb597d9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117114, hash: '30f78fa7f41e17fe729c6b32302e08f04970c230f575d33bc0145f016c3e011e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 72634, hash: '125142ddc9fab1bbae7bcb23dba630985288cc91da47fae56000efbcf488d6fd', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 69985, hash: '44fbbdf3ffca16f24e7398954fcd73b7d77d5a53e5c18a29b421892367be0092', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78371, hash: '33ef384fd474679f3262e0e1e5eebd800eb3f7a8d5c0cdbf2d22f9d860638791', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 85634, hash: '290b9af08248e403d4f7bdc823b09225593efb5a43341520e01062128de13e3f', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 85400, hash: 'd8a2386b99b8d89314bfe555baf8dd85fd2ba3280b3d773b3c406b060b0582f7', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 102214, hash: '4c72e680e78b2d4f7853d6422d045cc31023c9c5da553fbef2d5d20e501a6f28', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 92047, hash: '0ca2bdbd0a5beb6fd08ecffe75aea97f8a10b78df349303698774cc46b21f4a3', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 86809, hash: '8b4fd1358e726ce70f622a41f0d2621fd790b0c7c9bc79a9a3efa804738fecfb', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 83701, hash: '1a1a5c300e49ffbbcf60e9a3e4e75665bbfbd31e0e8e1fa90f37e1c2e2bed340', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83478, hash: 'f09365f1d0b7d7a70ab227e93fec55d3e80ec86c1e764d8daf658f065394c75b', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66588, hash: 'e4136559493625028eaadd2f179036ee613b2fac53f222091b00bd3c5707eb79', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114258, hash: 'b34b1b9fec76942f98def61479f2b3b058f449e1e0b45cec34a86b7c875f060b', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 107916, hash: '7ff30aba4581834286ad81b5bf9e71d3b4ea810d1a476dae5b7905b6287a1acf', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 85525, hash: '623851c8e5477af9a4f5b60f1c666ad738ad864df82782fd0d0d4e437764ab97', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 97449, hash: 'd7ffb70151d1430aaff6f270e2459d3ba1f50cabef67d79cb336ed3c6d92d975', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 96885, hash: 'd7b44be79d3ae24633bf888c6e4ad7c7625e3ab555320939c7572a90a2dce384', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101766, hash: '7763b0764776301fcf1a2ad3124aadd9ae5db28b82c0f8d4d972588d12e5e1a9', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 63686, hash: '67fdec05bb6fa2f71137da958d608c8fbe370d4c096d488928ed6b0487c65c26', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63444, hash: '0027018aa961c2f8478da76fe8ea1b2e553844af5a2491704a92e77a1a1fe342', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 79524, hash: '6c35b0a89ec04d16323fa00ff6af773625061e2525af6ec9b73862157a594697', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 80940, hash: 'b0635216352aa6db13453505dc273e41f751d2f90aaf39e13c583ba4582390ff', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96582, hash: '673faa74d32911887581e79996d91fe8e401ee6319fc4236325381d5afcc364f', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 88744, hash: '4c33dffdefb3032231a81e96adf686ce8d5977b57a4e113a795d1bb30726e325', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88385, hash: '5f644d559fd98cb3fc9c769ce99f6ec8497d1b0821ae68f956c6e7b337555cde', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66166, hash: 'd44d2df1573433b0baf806edbb8d3d5e23d3c0549b36ef9ab9ef7cc8ebfa1a60', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106116, hash: '990a78deec9dda2010f18460496e568412ae6721740ee3503e47fe62965dd82b', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113740, hash: 'b1aec78ed527e06eadc9469830d5a418e70f824b6b81bd8630481bb7da0e91fb', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-XYMMR4NM.css': {size: 11956, hash: 'nkSLHVLnJFQ', text: () => import('./assets-chunks/styles-XYMMR4NM_css.mjs').then(m => m.default)}
  },
};
