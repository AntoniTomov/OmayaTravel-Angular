
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
      "chunk-DjvrpOil.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CvFqbvAp.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CvFqbvAp.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDwS2Wmx.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnW5sAhs.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRO-mNZ4.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSRuUS2m.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMH7NzHD.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DM7cY1M6.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-vL1gNi_J.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DzKuW2C6.js",
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
      "chunk-BzPM3QZy.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzPM3QZy.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzPM3QZy.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzPM3QZy.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzPM3QZy.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzPM3QZy.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzPM3QZy.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yxk1GjQY.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yxk1GjQY.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yxk1GjQY.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yxk1GjQY.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yxk1GjQY.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g2-6kN7z.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-yxk1GjQY.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-g2-6kN7z.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-B30t7q8r.js",
      "chunk-4XTYVKw3.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WmcSou-.js",
      "chunk-Cn0Zln8-.js",
      "chunk-dMGWn9Fj.js",
      "chunk-DHkSe6_t.js",
      "chunk-CPiFY3S3.js"
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
      "chunk-Bw8nrRqC.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: '8e75e42001ab98855d235203185b408cf96423e12ffbba39768eacdb2960e82f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '657a958c4f1e7863de2f16f208ab723300689db5b1c193b60c2d023111badeb8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: 'ce5e0f0a0bc95415488b8805797f06306193677225d437123a3abda0ae02946f', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76508, hash: '67a76872821e60761e804247b7d9085c918128245f3c3d6c3745c4f622edee41', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '2e9e87bde445d3a051c594af7bf8a9bcb5536d48665a2799d385a8ecc24b0707', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: '4f4b6279ac666ea75a4f961519db7ced4bcd99acdc90b5bdcdcf093abab01695', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '7359b486edbc3fabfdd70140d4df67848cdaaee2c18c87e2b12b63f63f675316', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111248, hash: 'dd916463be94ced9eb263d4d27276e8bf93b4d10df3999ad033e05cec580b621', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: 'a5717155285a27df735ca053ecc63e2348c833d6a345437ff03be455478e65b7', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91493, hash: '338e420d09014bb3245a32101b501d6b3062aca56b7206415ab4282863c5abbf', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '68d285c1f48bf4b3ef42b4a7d5a858d00c7fe41bae2270fb775b4529a3874843', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '6946998b343ef51bc0790affe31b7e96b80bdde1405de60fd6c6f76aa51b871b', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: 'dc198fbea14ff3ba5aa4753daac95e07924f3150cb4b3182b22c966dc332c6aa', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81829, hash: '3284bb6a61e8ca4e06f38be90182edc67cc47cbfa5e9c9aa03e58134e255c924', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: '3460f513a9a89b4b20fc3a5d5d85491844868aeb50a635b775fa7a32168aadc6', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'c1bbe8a1d8c66d5b754246fa79cf53ca1069d51648dd756a5d727f9efff098fc', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'd1273783c25353a1fee16aefc0e55493f4b564760a900031aec68853e6173a1c', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '2fc1b7ca31c643d62006f7c7fd857c26dcda8e6ca0ecce7ac595db105642a790', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124026, hash: '43bf58005dccd82f65767a688c3d4e9ce9d28398fcc7b2096d46db8e561145ec', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123668, hash: 'bda1d8b98eac3c8ecb18d33e589909808466bf2de05d872773522dcf80740cc4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120976, hash: 'c8ffa8fc67389aa6fdca34aba17061d2014d3f3a051ef8c38a1730058a4341f8', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122529, hash: '761adb2ccf403774b9563d3247f489060c017a85685d8bafeb30f4704b74f5cb', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117767, hash: '407362711cc08b738bcba1e422ad12107f356a7f2c90b9148aa52a68fb9b0e62', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110859, hash: '01a9bb75ef03a4c2b526274e844ebc0e45ab4d14e514c1f940e5cd933e41e43e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101600, hash: 'f9489c2d96a97c07d0858d014f475cd78b40308d4493aacf4c94bb7b24a0e04e', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104194, hash: 'e95e46ddde90651ec45fc0da735243564fe5cebe304db6e81076a27602668b20', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101166, hash: '533dccc9796ec1e4c463bc9132c978e8eef1d8b02671a991ee97583c94682b1d', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 104839, hash: '6f222b49e81b8717d3777e7ad31b15f09c76e3a75f62e6afca27568402788dff', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87770, hash: '393072fd7f275e4a931231173b7f64904c69d9dfdbda6f54e1ba3e22b9af3f67', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87547, hash: 'e075e8174ff4786c3380d2d98abc8bfed3c17d0f980117d969269b4a6c3d6765', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '2d07ff3cb9f769cee65e1ca91e79eaf82e78c53397d9e11c05b6a7723f6bd4be', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 93852, hash: '4614a69f1117d86a9e4a0d3d2860acadd4906f134894834d473dc6b164aa28a3', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70227, hash: '5f66fe4c46b78d00901059d41c819e32b05eecb1eba5a0b929fdb1c5174f7346', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117461, hash: '270976008871114787fa108f50f55667e68a1034db233ef2d2724d64a269e06b', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92383, hash: '85a139214e380fe1abe1c0e522d32b173c66bccbd8ca1922e50537a2e2fcc908', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104851, hash: '37555b24c2e96ff516f6419cb2b7b20ba61bda96bf582f27cc0007f181c0c141', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92746, hash: 'e0edd6eb8e658b0657fabc9b6374eeb8b2c4b979e325f09236c18880beb91fa7', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91949, hash: '90cc539359f8f52063b04f00f4caa5158ceb94159a66828fa807008e9e4e6605', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '3feb5572913ed18f2ddf5bd720ecfac228ff2e8b5488cb14cac18ded150c084c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: 'd191a98efe99490385bc62ef93b7b5bb25a0ef6febb5dfada41f422bf1700a75', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104283, hash: '90a68eb4ddf2de18907e04f0908c485010a2ecd955b4426b9656890218b3d12f', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94315, hash: '40d9c0bc580e145fd1c0ff7f637be4321776f3fac9a1b7f1074c6c59e2b2c4da', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94236, hash: '15984593bf8f29d430d7eb4ebc322d30b1caf0291cbb53816f6216ecda9c48ed', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109276, hash: 'e706ed24010bc4efb3565ae77833e54c86a7f55e87e0c2e4421d4b41ac2aa3fc', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: 'ae4bd5543db5f03361b35ac859be54bf7e77040907e630fe52e7308647b27df8', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67387, hash: '86f69dc17fb27834a7fe0e7b93adc3421a6e4b5a0bc3772f9d6fde0c1e33f1a9', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '040ce5c93abcee3beba231f9ec0636aa2de1d8c844af007c8a8508a331b1f0e0', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '3e2de27854d3b6269ebfeec68c12a165014becac8c4e297f4c744c3c84b394c5', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 113828, hash: 'df1a51c480d82b0bbf78672f8e802eba3555bc516962420c00529234185066a8', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120458, hash: '8faa83b7b164443b86a34e0387e270be80085d4dc98bd7b3ff520caf253e57a7', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118870, hash: '4152bf289aa7e7bd8557163f343b6d84c8121ae662eb891dea35dad4a02ab8db', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118064, hash: '9f0ff4ea875e5dfbd5e52e523f90a828a7d5bc5ea83afb95a1e1032264357a4e', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123787, hash: '9bd39d0bb55b8ae013baa03fb40f349d6c52c2011e6ed76e729bb56fa1df9236', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
