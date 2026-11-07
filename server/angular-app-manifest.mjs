
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
      "chunk-5k3MFbQH.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BAbJ1sGV.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAbJ1sGV.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CbdAmTNs.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BfHgxhq6.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COq6RE_A.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CkcKz0Q8.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DgRi8_5H.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DPbuneOq.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-uuCdBPBO.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5hE0ksv.js",
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
      "chunk-BFvqdVRU.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFvqdVRU.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFvqdVRU.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFvqdVRU.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFvqdVRU.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFvqdVRU.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFvqdVRU.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpMiGSyd.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpMiGSyd.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpMiGSyd.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpMiGSyd.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpMiGSyd.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDcK4oJr.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CpMiGSyd.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDcK4oJr.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-lYKsfbu_.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-CsFJd7g-.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CemD7cQc.js",
      "chunk-C_8QSwij.js",
      "chunk-Dk7N2ZLj.js",
      "chunk-DKxGMA1L.js",
      "chunk-Cx7bcWUg.js"
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
    'index.csr.html': {size: 16193, hash: '2a5995eea7005fbdfe7919a41dd4c02b830c8679c0e511bff7d1e31b97a9ae38', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '1ddce0b8b50f995619a4410d0fd19c20c2b43be5a2f86da4c220b0d3c8f04b6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: '5eff13d76fddaa2998224a09837cf7eb4b7664e820724ba2d5f06d40742cfbf7', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: '731cfddfdab0b47f6c411edd6147503791c16738ce846f95b0b2766718137f69', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '4ec68355736ec6863ea74d4cffbe791ac524a5f33ce5a43f70b263c28bbbc1ef', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '7bbe22c60b063fa1f902e52970e4d6a638b9a2932b34420a8a8e45b2938deb37', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '3e4c5fcfc0271ff9ae91f053df765dca4d4133c10604ebae43555ea52cb69456', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: '308028167b109c8b1c6c877295f8014ddcf3caec15cb6b74169d2e35254587e8', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '6e5efe4c9ee4eccbadc242cb0e723f80fcb75d2dc328d001ccc8713eb72e2055', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '2afdfd13372dff93f5fe73dbce7814f3f9ad7e3b192a2a115df4e29abb801989', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: 'eb9ffdc03fef53b9cc4342156ede124ae2fe99a5710c1eb7ef7e17c9f24abce4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '948345a073f4801cb7efe3001546a417096474ae6361e99ade7e00f89a899005', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: 'e9a683492fd7b7f32e54c47b9d0c74834e6f68dbbd942beb0c20776353bad736', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '4c8cf893438ae62c3442c287671003b0fdd84801108c1bdcaaf42b4bf88330c4', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 96881, hash: '2448d4c91b149da214db031f6606fbb4d5817a7f4c1bf546a257c4a2d5babbfa', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'f43d5dfc53ad1cbe82c29c80bc1d645d760ccb2f114725d61db85d2201083eff', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: '4368dd8c2ca371b74da75b776c35b7f5ab6bbcd3751696bf2911ac15d648873b', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: 'bf6644dfc5d65ef17683737848da1e26e9a40b1322a8c8aa910ac03078711927', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: 'ea339372bb5842b6edabcc598f0bd190b9688b4ac1e47c956dc977048e895e60', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '57bcfea55716810af93ebf53432391753fd36514437dcbffb26c029f85bec8d7', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '690fe21871362a538cea65608bdb40ab262f15f8e5f60b43644bc21bfbb2bb45', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: 'cd2252ce1ae107e7c06ab600c77e973ac1ce039bc3da02925c92b1e7f7301473', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: '25378c486ac4d6bb5848181129a4a12c86082d45d5bcfcc0916de67b3d85cc9d', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: '7ac0c3bb32c6ebf6107245d843e57ccfc0361204f094e73d49b129305a4b533a', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: '17748da64727e70d8003412c9db26f5ab74e23085965f81beadacf1fb23a6f92', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '76b5da0a9b4b8ca09d178333948a1b9b4b02cf030b3b9799fcf9d753bf6b1827', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112928, hash: 'fc8ec5871f1fc262010b6003fd4c638899a0fa417441f24ba170421709822bf4', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103661, hash: '36958ffc5b345178d77d0af0c3e66da4348384e5dfb7b1e1c37c3177469c4b2d', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106102, hash: '2c15345f26e991770d9924691fe7508ef8d5310927e7f050fe78ea2320eaba99', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114923, hash: '8f5d399e51f43fe1d9de28554b77d4b04280fb360dac46f94ff6afbfc2ced187', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 114704, hash: '21ae010134b67826ce304be02d7c6e3a0234faa7095effe2e0cef3e3893b4c85', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '20827f9d4ea2355f47e0c7e68336deaf24082c3be54b3b04e97db9372e55cb51', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: 'f57a39b0f72a0ed925fcd1e715d9d909a8d59e58b1de9b1097b8f821b6d369d3', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '0adf8cc8584eb1b2ddc3dcabfcbdc1e5d0169ff59f357646f016ab0a69862ba1', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: 'e4dd660a038bbf4793ef1fb2a1b39ceb81cf9c4f780d9dfd32aeaea3eb6fb2ef', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '0aa3d1b8c898405e56d48ecaafc220afe3a6c437a4838cbab37101adec5d9c67', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118179, hash: '9c8f9c920269ea3981a0c4c0beb0ee4168d1512d190d89b7875e2f57ceda92bf', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94105, hash: '95cd17b132d37e4b42b1017977dc84fecddf57fdd4ab08c3b9dbc79d680ad846', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107165, hash: 'e2273f2483ebfc74ddda7d053d63202c993d5035b450da9b2de6f9fb843eae6b', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94677, hash: '80e19f76c4c6d8e2375a9d4af363f66cfe25768472ade46e1313195814836896', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93849, hash: '8d197220666f2bc8bea866abb01604df386d9b9fc9d85141aa2f53b2d2ae33dc', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: 'd047406585be37a568d63f91f5113b83567181f8c8c675bf542723e8f62b793d', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: '947b1fa62c5fe56d20746bd1eee636879f81750f9be2669175de4a645acbeb6a', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104472, hash: 'c07700f7bef1d96e2ed8ed539be30fe3ca2ef04a00980c568aced1be04c56355', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94504, hash: 'dd4c6ed61ecacb61ca6b5d1464deda0db3d5957994cfccf2278b409877e80b84', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94425, hash: 'da642f586ef97b56375de520df5b9a827f0c48e818d79fdb6d59788ee84be239', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102774, hash: 'be4f0e82b725843b47f292bfd2aa2e14c94239daaf0824febd91586b1f395856', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106812, hash: '1784497cf867fe55957a503e2c30c5f7086e6f1625f304b14b50df51e2c31e92', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 117598, hash: 'f9ceb2046da7c73484423ec4d38e7149b7af10518506ea83d5de178d200d78bb', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111608, hash: 'c430423d2ecac4e4ec30dc391c85f11976e7485703af40993367452eb3c6f39c', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: 'c7e9123c249e68ac0b63731cf36cef04785bf0f8483c642f5d54340655c5660d', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118520, hash: 'a43ad78d27601bb7a0f14274e67f5a9ed94b86637fafbdafc056c7b17c3f8477', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120993, hash: '98a3b642ff22f649f17f321e400576b3624b1e9cbffc71c1ac08b745a9577401', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119405, hash: '673b108203d88e37ce2c9c9b73b77f7d0c71ff389ad1fc1d4bade18a22d9738c', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118599, hash: '0f64fdac1e9349c93ecadf414f6e21c9106592c138b8325dc0e023e4d7835fb6', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124508, hash: '4654e33b0844d47249e83621bd3f83f621b7fb2d7e84b2b8c2f98998d4b70fe3', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
