
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
    'destinations/index.html': {size: 81618, hash: '3ca13993f29da2f54947a000010d251ecfdafd8c3f808efbc8da6d303f3e8775', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82243, hash: '3de63d57919833732514c5f94e30c85a8f03ebdd7b035ba84196b6500948a7df', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85548, hash: '5f2e54dbb518fb49b191f9c82036d97469b8910294d1af81f8541b8f55810068', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84054, hash: 'a8f94c06588c7b64ddd58fabee2b69010ca8aff07651980fbc508b7d59190462', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 90108, hash: 'e8bab3c990858fc764ec470fe0d73b92d39a2ba7716298a6a2e0d649d9aa3c08', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
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
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125117, hash: 'b063010fd4b3a2a15a18908354a85fb48c8aca41a2f5cbd60f74c178dbd258ea', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124460, hash: '245e9de3d7fa58d9d66f45892e43f27a510f1220266c0fee920c7678bba63006', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121582, hash: '527ac38e67ba88c2a1beac87089a81637a455a8ba589c69f2cee01c17968452d', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123135, hash: 'a938b8d200e154740c7dbebeaea6b49a770b5e98c0f4d7204304f46a0fabb7aa', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118556, hash: '209e79da6f511ee928611c123c63e744f5da9735b47f635a9d1101e6f081a893', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113483, hash: '96fb0856495c7593d60c419c048f1cf58b9b5c6afad3a6246d35d41bf27f77d8', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104225, hash: 'bf810a40b3d10c6e2832ef2159be21c2fa2aedf1ebb4edce0d7266c84093a6b6', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 107012, hash: 'f1a9218b62f3d4d5ff042cb7f189c540b7bafad2906d0ecb4195124037f63620', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115839, hash: '7d5bff8d94d3dca13d58718cab980b443a6593664c7e10f18cf42170a1a8ac59', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115622, hash: 'f17fe394691b2f5583536cb3211aa8943b6e31013d710fd401bea6e49a1292bb', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68183, hash: '7ea8878bac6e3a4a5dd116c96a60cb605ec3fa9bdde581b02ffeded6ff54b5a3', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67405, hash: '9ff62a7e8d73c7bc8154eb518702cd2d35a5625a8bbfd7da8acbc8bd2e4254ed', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77330, hash: '1be1f282b2a26958543071da44ae3398f8b721abcea5eca336bfcaaf24d80a67', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76209, hash: '72713e515ac6f9b37283a0bb6439e6d600111a51c773f29a3f5ff8c4c0b4c161', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82475, hash: '91ae47866985af2c3073cbb181f101df8edea2662035e7b2c23d1526ba525d78', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87942, hash: 'c8ebc335c7dec5fc6aba86a5557c49578dcb8aa87fd781500f64f7e63afa4f2d', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87719, hash: '9e368416ffc581eb4e3eb43820ecacd26097665a6fa6b130862cec2dd3bda3f4', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70514, hash: '742aaf0f5c446c7e5345f98186846bf716053d4123dbef05ac0dbddbf33a7863', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96502, hash: '0940e684fdb96d415d07a4efec03bc19fb2351020c1be364fb1a1ea559d41e0e', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69997, hash: '0d579db8a2300934749b32386cfc5bab2b40b655e3aa837846479907fcb47e4c', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118304, hash: '7fbe04efc77b2a4b4213cf6bc53282004089ac95d9fe7ca0fe70971eaf6aea45', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 95005, hash: '39e5b685846c5a099c3f45919da089d356f70300f46353e1bb71747464ebdae0', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107714, hash: '0957543c063e8a77feb9f52f59da2d5b22ca54529333c67ef2d2a50ec703bd5c', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95218, hash: 'cc61e6f39e6605c06615b2ebe69686de6fe63a5fadb0f338c63d432c6fcaad1c', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94392, hash: 'f5851c7625835e49436300d7656ba33a76367050e0fdc361dfb5f480a6cbb8a3', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'best-time-to-visit-kyrgyzstan/index.html': {size: 119374, hash: '24f4eed4fda48f6b275482eba248203e2907a676b1eeb04c06a8a01198852be5', text: () => import('./assets-chunks/best-time-to-visit-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103757, hash: '69262caf7e05d6aae05696cb2e3ef6a6c4e9d0262bc26fda55075af0dbbc3be7', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107795, hash: '64be90101689136e3cd8e6b9582bb9b36a63b84c197587edcf4746ea4dbc0039', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118609, hash: '77e175c47445670d0b52d3c6056d2572bbc8ba17a6e57d32b7213365d11ffcc4', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112262, hash: 'a74770b0a2d5419d9caf725bc55a88edf61234b255a29877540851cd1aa4e9b9', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88097, hash: 'c6a21bc78c95b1c1ee07fc5f76bbefa0c88e7b7e8165d9a183ebc2c114d36238', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82503, hash: '96844f990445ec3c6f08de2f56bca7d0bafee00f2b0e091232c75373b0e7fd66', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104438, hash: '6d8e3ea1e46e3d65f8a8823aed03de89be050af617c1d49fd27c7576538ee559', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94477, hash: '1ec14e261d207d9c9d134798767f03a0241e2a502052261a72cc549da582058a', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94398, hash: 'ed801dc6620938ffb65b9574badc7c484b852aa5445fb063c39fd44ca216cca4', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118648, hash: '7782fd4d1829bf3a4e60108cf0e10b6a1b1519fa9c3ba3078ce351888781e036', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121138, hash: '9351daaa509ca22489629c2324d8d783467a6e1572a45b9bd328fd06f66b6786', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119529, hash: 'f0fac85fccf2481e1eb9e7802a198c0f1628981365cae06f37aff9f22a4454f8', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118920, hash: 'e68277d6caa1e3ab7b78ab0986a7bf97bbaa744352047e0e894b0e534aff51af', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124647, hash: 'ada7e9f039e8c303ca63244fd60566dfe69ba235370b9e738e01185ab6ec9754', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
