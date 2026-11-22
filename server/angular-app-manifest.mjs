
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
      "chunk-bnkSHHqr.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DwgBSaDP.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DwgBSaDP.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4tgaLdD.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D_rZrcBP.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Qqb0Da6b.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8GgNrTlW.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DdEgjrGJ.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CxE5l3Tx.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WrgcIAtl.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CCSF_kLO.js",
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
      "chunk-CAjoeWkg.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAjoeWkg.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAjoeWkg.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAjoeWkg.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAjoeWkg.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAjoeWkg.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAjoeWkg.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gXVPdUPF.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gXVPdUPF.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gXVPdUPF.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gXVPdUPF.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gXVPdUPF.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLk0cPpw.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gXVPdUPF.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CLk0cPpw.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BNrOHlm4.js",
      "chunk-Cc5rem_u.js",
      "chunk-hMzRMIKZ.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/armeniya-kratko-patuvane"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/best-time-to-visit-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlgTjE5D.js",
      "chunk-Cc5rem_u.js",
      "chunk-Bd86pIVl.js",
      "chunk-PjkT-T7l.js",
      "chunk-B_gJMBo_.js"
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
    'index.csr.html': {size: 16193, hash: '88b823f3e61d93d09b3ecff1c685237e3fdd91636f2bbadd5336900de18ba698', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '7bcc952fd7d0b5018f2b2a848b264f1f221406a8ee3b19f1a28c4df8c995c16a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111552, hash: 'cdf2c2d0c5bc1f0f0510aea5b65683ee72087533f31547d4d5b35f180216045a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80100, hash: '5d95fd31ca1b2e61eabecbcd1aa825bfafaaca30e1e2f567ced056d2dd84f729', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 99539, hash: 'b87516746a051399eaff143412551ecfacb2f12940cd4ce376427343727cb4fb', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67383, hash: '1eded7c572d489382405bf80d032e093366703cf497746465e531cfda2125a29', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81558, hash: 'e584ec00c2859268e36c88b0a3422de4f52cb92b341a2956f5c29a808b83ef17', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77257, hash: 'fd298554923a69c9366d6bb8514c2124ab18db80d2d6de4b97a7b54b958e7c53', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76680, hash: 'dd25254cb03c7da88abfc47b7903860466f34a0f81d51ae029d2fca052739e19', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74598, hash: '22a702251d5e0c8cd9686622f644d2959e0d5588cc23b07588a6683435811821', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67353, hash: '733547a72e97249137f9c92ceb22ea5f8568566e1e30d5474ad0caae81b9cb26', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80462, hash: '555735a33ba367fc5eb0f79d402a94e5e1dffa4f0e4c7444e8c8e47e336719f0', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81618, hash: '3ca13993f29da2f54947a000010d251ecfdafd8c3f808efbc8da6d303f3e8775', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82243, hash: '3de63d57919833732514c5f94e30c85a8f03ebdd7b035ba84196b6500948a7df', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85548, hash: '5f2e54dbb518fb49b191f9c82036d97469b8910294d1af81f8541b8f55810068', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84054, hash: 'a8f94c06588c7b64ddd58fabee2b69010ca8aff07651980fbc508b7d59190462', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 90108, hash: 'e8bab3c990858fc764ec470fe0d73b92d39a2ba7716298a6a2e0d649d9aa3c08', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125117, hash: '986e8790bb502ec456cea6d8eb29ac92409759273057896096377151b86443c4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124460, hash: 'cebceca87d28f9920b75f62f2320ac1d3de7991dc59e2a631b7165b269386e70', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121582, hash: 'a48abed75cb5242af6eae2f44ff48a488438766702fe724ce3f7eee318294dab', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123135, hash: '583496b0e6645f2698e8a649673dcb874ca81c4ce1632e3379e47adcbf233e4a', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118556, hash: 'cb448769b8d2b7e56ea1ddef16c5f63ace926c69b59d17d7003b8fc4f7aa8b15', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68183, hash: '556faebd73c324500c4c23492be3aaead28b4a6c0f9241cfd9da4e4a0ace5b0e', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67405, hash: 'a9738c3d304b8c335b3c51d204ce313c13a194c6ce1b06e1d6ac3fabc6de15fc', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77330, hash: '16eab3e881dc3b70fcd1f637921d5d1fd4c6f843ca3e9d76af59a96d18761061', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76209, hash: 'db474070b2640188b1a900c777d1f78ea5a721787a20d93ffd82360b096e7b32', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82475, hash: 'af50ed50dc7d215f65242ac7fdb04dc0b68a8031e2f05644fb2fe2d1e8a9f0de', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113483, hash: '81ee1ea279629b275634701187b484a621275deedcc3ac0ce153a8e451641b54', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104225, hash: 'e3a04d4c43b2156e0abb64ebaf36d5fb46b6ed2f1bd0cec7ebe43dcc8726abaf', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 107012, hash: '0f60a8187f5bb70a3f06c1706d5f5379c7487021bd5e70715fcfe679e458debd', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115839, hash: '0dbcdaedf532c1284c073ab26f8f93c3ea16fa5e3111712126275d17992f3e0e', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115622, hash: '8b1eb0b15a84ef7bb53dcee81d3f8aa0843e0a8c115d701425f2372c6c3cd6e7', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87953, hash: 'baaf363677148ec966e7eb88fabfedb97674c4bbbfd858228ab89832cfabef13', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87730, hash: '96f2824d83e02b43269a50a13425367e8f7f75ecf3972327d721ea59198b4120', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70522, hash: '9a5a3946c50b6c1e812f2cc2d9953d796db2e5565f33e514c34838c59cb69f74', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: 'e566f96742591e022d316207d7d1d43f7ffab94288b5077d28bab9c9f3a02c60', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70000, hash: '60773a1b248a4df38fab1257400601e1fa6a41f255378a5e141d5d3f08df002e', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118250, hash: '97471af1a0fec14a58b6e8be1c9b864007ea3889890d797128b37c7af84bb860', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 95034, hash: '6ed31c88c6bde9cead1032272dc830c3a4171ba27b5e117016dfb292c801d3c4', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107771, hash: 'd9166b2e0a622d5b5a608b8efc8285f7267f511a1825d7c2041fa3da8a89edfc', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95252, hash: 'f90bc5fa2a37ac6d954f83ae9cec9229ec5bdf021048644a934720123a40c07a', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94421, hash: 'e974c0e23015c33bb0e417b09865237172d3c7e5275bd923afcf10002726b096', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88097, hash: '2f2633dd4bec544a1d6bcbfca1a825a2aedd46d96fee1e655ad34e0b90440e61', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82503, hash: '0855e056fc583a944ed507a6b185def0d0ce7dd08efddc5175e96d7e3c999452', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104455, hash: 'c908f108823bb51a20c12ff7da8ca333c2f4f1bfd45043fe6ca857b66fdd4ecf', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94487, hash: 'd0c45d4db5d7574d508c2123933f6012133e19740ac5adb424ba2443b0b66407', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94408, hash: '3255510b84d748ab1fd1fa0de6a5801788f7bddf418a33bb27d6589b1cc3b497', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'best-time-to-visit-kyrgyzstan/index.html': {size: 119494, hash: '2a674b1f61ac45918fe795bbd4a19f6f5ce0c22c62a7b941c2b2eae11fffec16', text: () => import('./assets-chunks/best-time-to-visit-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103829, hash: '252b17540075a6ae983a90263ffc72a00cdf67f445e86178af229e67cfb55a2d', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107891, hash: '2d787bb1e0932ccb6d3b03adb90cdb23f971faa98fa2dfa50e1f6d936d4030c4', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118725, hash: 'cf878c00fb83dc4bf7c8f24e66c6be15db04091346f433cef10e05a855161f6f', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112353, hash: '5152a992fa22b2f3bb3acb20bcba7a260b006f0a40349434d01d2dc1177db8ef', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118591, hash: 'c9ce810455b0adc555c0bcf8a92848359094189ac9788be0d9e4a6d5e690d4d7', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121070, hash: 'f8307970a961f2d57ca8f65dd71632551ba179f46960bf6d91532abdd6161a9b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119476, hash: 'a74797f374d16b8bbf1dc12a48ca5861dd5cf9a21ad48b4106378fee002aca34', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118856, hash: '254f950cb6cee6d8afb4429f07a421bf027b90787e0013fc79edb398d7b33233', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124582, hash: '0ac369eb9e7fa6805aa0d704022fcaf9968c25b37ffc256b3d4ee1adfe515d31', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
