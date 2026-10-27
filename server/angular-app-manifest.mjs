
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
      "chunk-Afn-RGNH.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-8NHV89l8.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8NHV89l8.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4o8UAXxq.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZK0_btQ.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ChsMMfrO.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGm6HSNa.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJUTEgsx.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D4wFwrzb.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWz07pMX.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bhiifr6a.js",
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
      "chunk-F1ZnIuuS.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F1ZnIuuS.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F1ZnIuuS.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F1ZnIuuS.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F1ZnIuuS.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F1ZnIuuS.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F1ZnIuuS.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bm1HMfgl.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bm1HMfgl.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bm1HMfgl.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bm1HMfgl.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bm1HMfgl.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFqKl-SA.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bm1HMfgl.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFqKl-SA.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QAAFK7ja.js",
      "chunk-Bet96H-y.js",
      "chunk-BTaURHZq.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bxe_3qDe.js",
      "chunk-Bet96H-y.js",
      "chunk-CC80mM-G.js",
      "chunk-DdqEbfS0.js",
      "chunk-Dc_bUUN9.js"
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
      "chunk-BG-RQz5Q.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'aa1a4cfb5f7815b0fb7c5d08fe2881f1be82832bcf220c7c5dfb893320ccddc3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '02546e5aeb4b2bc829ffa1c547737297952461b1b5e3147ef2ad302623372480', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '9df1f11657d36f94361e02e3c1fe2af836170086c22c81105a1b942151fd14f5', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: 'c85f2eeaeae28a79452e8cb72ca63e99d78950d8b3bb1d3f4461e05dbb033c5c', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: 'e06f1fe0326d7f9203dd73281cc525ca3cc122e17d8a8afb851eba62e200ee1c', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: 'bbbe942a9ab6522dcf69cadb81cfd695f5a68ca995196a934987596adc56f832', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: '68b63397d710c39cbafeadcd1b82b33d159f0521670178a96a6219c4c3589c00', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: 'd739efb85a5ce6987590ac3c148f1b80ed17ccddacb1c1b52412e16ba4dd363b', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: 'd37609c5bd58d66df8b62ffd9b9f25d60e889b6ed4452a8fbb0bc9714b802d2c', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '9176a957638e2cfe3b6425884805b082387f5daaf0208d0689cd511775a43917', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'b5a51cc2c56b6d3914f2073d736f869b42c34fa7312b5761e41246283cfbbb36', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '241d88459a6fd6f593c4ca895dfabb5dd47dd84c46d26e576e2adeb2a974827b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: '9f8b8b1ca174505a0bc747fd33cb1a8a49d091c2bc99e47fa9f0a077cdaaf4a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: 'fd787b3d75edb2e016d8f2b575ff67f0f14e75d43c78874669fd82f00a9f7cf1', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '414a5518262210c5cf94c72ce5822ba3d6ebaa0b42db38c594901b953c0ae106', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: 'dd28501919d3678187a2acb911e7f915a9f51375f4fd33e4a4ab754391e47801', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '4b2a6805b00a6b0b53cf8784531504f4cfeff7777d45b6162f90efbe8e23f8d7', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '6ec9a6b881ca1247a6287419eb3025b748754c775c31502e569e52564a1f63f0', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: '027466ac4d426ece7dd3a0ff3b0f817555ba8726a26a4c71d2418c3b8c975b6b', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: '81525cddac8007a6d5c2615899e975e915ec454074fef2e90ec522fab8be0e73', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: '7cc6fe9df0991cae0843fe15156c70ecefb194e3cc4a5f0c538ab78dd14e8d79', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: '07471ab7016b0f06abb486dcdcb565248582372c1bed91f16344c1afae5bbc99', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: 'b43164d323c121932479b5db275de9111330ebac204d16b8f68169c9ea0258f5', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: '762167e698524573227e9455e89095c3e5bb1365f5529f3b90be94a92fe9e5f4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: '92456dbb7eeda26a3eba20acef7be978075197a780902db3cddb84a86adac984', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: 'aba40fd5be0392f299ca7d46da17685abcd84a34f512a3fc4102371c101e9918', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: '0089a3671ab1d4dd0c1b60a96e1b54302f6dae432be1d8c7592ab354f6c9e32e', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: '0cdb539df39fb27bbb9538787cc79c268e27c768498bd0313beab9bf566da02a', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: 'bac97fa9009ed98845c812dff3f73892dbfb74ddb70de6a8c275037280d6d369', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '55b6b9139d79d79bda72bbe913788193eb261cecb23d59215b2e37ff7529954c', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '798e4262d74a19d2a6cabfa149baac087bec58d6c9cd6a72b9174e4c530a3498', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: '4ffa6cdc87086f6a8ac5600924cecb8c6477e12304be49ce6ebb492da363d273', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: '58c47642fde99ce4682f50e43c900634196966945fa4a1b92b22950b4b030277', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: 'f115ddd57b44c95768a8e45a6c31bb3a615cf89f1074ed927c44b7cf32364afe', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '7c1390330802aee5ea017cc17301ba0318d83e47ae8b2a4d11bb072b8ceef752', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104486, hash: 'b024c2cca344ce273bc04b92169b954fd17f70d98deba85eb69fc28a70df511c', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94525, hash: '10c898e41125f66b4f241cadb1ec02feec43e84465393b36d80730ef4230c18a', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94446, hash: 'a116dcabdef582659926457952b522a660155ed1a6de7e6790661cc06c9c7c7c', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118012, hash: 'ec9b10083efd9b8ee659e12e56327161cec0786186e4d4d8e91ac577e62921d8', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92588, hash: 'b74aa52f699bdef835a0eab7f81042c77b2340668d82bc9d69ea2a2562580340', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105051, hash: '41bb9ee1ba46718f621be49b5c10fa47dc04086dee7762563591cdcebbdd0730', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92949, hash: '677a4ed908be8b884cc185c34cb0903e4002e8c1668594b168d6d4e3690fe1a5', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92154, hash: '297bb5e57dac0da47505e03ccf8e4765c0143fc92a783b01c0580d1007f6245f', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109509, hash: 'dbbd3038ad2286949bb020492d871f01d4a43f91aab031f6ebd339a5c2a461cd', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: '7a28772b6e1372d2b0b150d3f743afe9d06bf8d11cc0c94d741424f71614c346', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67387, hash: 'fbf87890c4cc280515364db9c1e9b04732a4f5db7b1f91a4a18366ddeb6a94f7', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: 'dd7f3f0bc3a0713e42ef6c9d6c37c42431ed257e8ee624435538b4eec9e74b19', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '86d2775cc409448f15ac3f5d719318daf1c8bd83fe41143a9d04ff2f71e9f48c', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '059ff6028ca4e93b106b8bcc8d41256dcf059ba0ab698b23829978259871eedd', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: 'a2ab3c5aa5172049ac17f8eb5f054e3eb9282b345b9cd11fc2af35d681a225c0', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: '65d7e429c8106f17fff682f1bbdf5c8aac5f25b05956279343b989dbe9c9e500', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: '115a13c55c22442a7b18a7417cfb859bed6e6b4e33e3219c30e071bebc55de7b', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: '74576820371cbab55052af01d8dbaaff0fcb564a8b16ede0bd84677a5bdca713', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
