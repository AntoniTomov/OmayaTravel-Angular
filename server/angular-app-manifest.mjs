
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
      "chunk-I2tPM4wN.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DHPmP5rp.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHPmP5rp.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CqYIOCXN.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdbW_Ahq.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hgkYry06.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcRdF-O3.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CYvYzXMB.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DCcADBOQ.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DzIZY8RH.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CobnvvjZ.js",
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
      "chunk-DWGf-g8Z.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWGf-g8Z.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWGf-g8Z.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWGf-g8Z.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWGf-g8Z.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWGf-g8Z.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWGf-g8Z.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3mXgtPo.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3mXgtPo.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3mXgtPo.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3mXgtPo.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3mXgtPo.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LjnDIV8l.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3mXgtPo.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LjnDIV8l.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BDkDv7Ds.js",
      "chunk-Bet96H-y.js",
      "chunk-pMQDf-Hu.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Il2wS3dV.js",
      "chunk-Bet96H-y.js",
      "chunk-pXGkC0z-.js",
      "chunk-Dhz7fMY9.js",
      "chunk-CsoKsewg.js"
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
    'index.csr.html': {size: 16193, hash: '54ebcd5b534266c4213dad0caec0c026adc4fe8731d0300cbf3b311c8b4eddad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '50dfeb6c3796d937027577a6b84021a662e2771bc2792d4f1a23687c681b9b13', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '139c23d80a76e857d8de2bcf840d0563ab03dbd1e3f92d5ce9716e882c2c2c40', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: '84b60e5c60d0406fbf6b53f0f1e416d624a8ae47adef90a6aff13bfc7edb0665', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: '5dacae3c1da729f2ccd40e97754e34e87f4e7245d92bf8e1fee1e4cfc85804b4', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: '2ec8044f7b2f085728b37bf93e51790f5607602a2ffb65547fd322d3aaa11f38', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'efe540bbd43a5420b2d1315b07ad1ea5141073c3f50b08482dfb89d81f608369', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '0dd9bcd9697d48f6ce626e2a8049a665268ca9249a0b82d1365c90c4b83f8747', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: '6c0501eb60247feca72661acd0874fb766ac95a507b2c956383df8497f8edc35', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: 'b0c52b3dbdd32c4898e7d7e969e7bed012274f7c61402bb26876da4ffb5e3b0d', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'f1ecf9091aa45c3b1595f0a73840a14e463ac5ff035fcb9e7c39acbd434ee2ba', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '782338356460b795957a77ac11bc33c432f0e25c4866bfbf15bc17d016fcb075', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: '1c4e3af1dd720f177b49b0946ecff8161a087e6455991162b8e577fb3cb12f88', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '3857cba9f1f91e91804364a3a4ebef94a4c016ef6d2465890fa05883b10ad244', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: 'f2260367abc4455ff355cb3560bbe313bb820d0731b5400f636cd3de2830bd6b', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '41d23506eaf56d2b428a5fcfb545ef2c5d5bda4af965a8262ce7405ee34c5735', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: 'abdddea8cc541046ef5b0a84d71d9baccdaf8e2ec2d7867182889a0cd0c6f11e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: 'b58f7046ecff0072ede501fa87cfddae240ff496455bc44ba1396ce55bd1d0fd', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: '6b1693c64f297faef4b1fe6bc9767b18ec2d05b1f5b5e81fb0685ef42b161806', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: '863c4dea8fa1e4ed17e43c99e64c7e2978e23028d0c858c13aa0ac7ee8045191', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: 'ef59504b7b24b2bf664fcd3605088a4252955a9ee30f5144c486f97394223e5e', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: '78673b29fdbec5e06f35c50aee1079c61a3d8a7e51b4bd62a95750d94535c681', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: '0172e3d5a0d5c027ca5d721f14ca1d342f637609c22ecbaf047f41cc75c14b1c', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124272, hash: 'd5bb1bcc31841d9a8aa0353346c2c2727a3fae1f5deff117ccdc51e1a51316ae', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123914, hash: '8dc02fa8c573e92540114ea012eea614f88d48399b3f0686cf675eb420dec1c7', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121222, hash: 'f6e59f9fb58eb3d1d2e62f5618b7099dc6dc3f532d9a7c1eb9dff8385db9b206', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122775, hash: '18068ad6fd798952946256929781787bfd9a365ea6e1069e172af2be10ddcd3d', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118013, hash: '512ab79fc27fb4e1c1471bb655701edbdd2f44219c251b205dc4e9e202d9761e', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '183516601f6dae43c988f71e9c4e4fccc623ad62ea8fec268b5130173da6e165', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '5ebd621cdd2b4b9e03375e0b31251b967a978e384616c8c9a58f4bb9322db573', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '47763965a148e8f68e04e8103353635829bc822707ad0b42adc36b652b2496dd', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: '28fdf979e4d9a10b2a1d73c6c435fa3fd22052bc4f3fc3bb7b3075926ecd5bca', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: '56f464a2f9082880613915aa47dc6343cab85a3e2fcaa63d493f3d03fff1bc4b', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117720, hash: '6f8ed6badf98d12e0694ec7dee80a2a8fc25509265e87096bc9cf9ad1d0d566f', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92588, hash: '332854b8bc004d778138fb94afa43b3695a571596aa83cbe3b1654f76d01ca70', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105051, hash: 'c1db4fe4581911ea4bef03fc0782aa053dd4fe7e79542b0fb1e385f65ff521ca', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92949, hash: 'c023ca14df820e0e8f57345922cbb1d7d095deda891e4c80ea6729e96254f39a', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92154, hash: '78741b1d0852f396865a4ebd6ee5bd2d3ac5fe57fac9d6ed9fb45364e3495f8d', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109509, hash: '4fc4abb526d29ddde952b648b816e52b695d5cb4dc591091473a2a2edc77c9be', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: '32c6f7e7b4c062c2b4d72e421d1c177a4c64fda3577476240a622ea63cd68979', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67387, hash: 'ba64baf94ba8e98474e54bead320be48297aab1b059f2c58562ee342b56acf7a', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: 'bc47b7144f546a7b5b9a79b38022186d8ed96e4575ec4509dd2e5cb834079a1f', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: 'f1b1759616c89a101b426397bf03acce61f604ffe1ff05b51a7472e43bf92231', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '8e3d80f02a1d3f1a2b41966856d7b1f9d563ea8bdf22782fc2ec5b97ef7942ef', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '64e7326b0a3196fdb74c9544a07d6c0a9ee55147b3a679f41b90404febdabc69', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104486, hash: 'ea9376304fbf4704d90bd9ab5311d91dea7895295dc16a6d37c59a0b6c5df5e6', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94525, hash: 'd6ff8c311c4ca9827ab6631cced2b88f12aaec4f493945c9b31d8495af27b0e7', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94446, hash: 'bbc2c2c6a718e2c80927d7573fea74d4fd5cc02b08ae98bffc265b66eb02726b', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118037, hash: '1cb4eb937534e852a23a8d922ddab1e562517e1974eb73c59ecc5b6f840e411a', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120723, hash: '59aded3b1ab1a6246e69f65129416d2557d431a30c11382ca8fba8d17649d263', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119129, hash: '0adb5703333e7414cbe7f6bebfb6cc382358c38c8a4e43b6d5c770ebcaef7d57', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118623, hash: '19c7c25a3450e64b61fd871e3e9275b9cbf4857d2da0065d9f398d4605a659c5', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124341, hash: 'f4eef86d276fa8f5067ffda3216934efa6828b4eb060c1cd2c43d71277644800', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
