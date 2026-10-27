
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
    'index.html': {size: 111468, hash: '9f8b8b1ca174505a0bc747fd33cb1a8a49d091c2bc99e47fa9f0a077cdaaf4a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: 'fd787b3d75edb2e016d8f2b575ff67f0f14e75d43c78874669fd82f00a9f7cf1', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '414a5518262210c5cf94c72ce5822ba3d6ebaa0b42db38c594901b953c0ae106', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: 'dd28501919d3678187a2acb911e7f915a9f51375f4fd33e4a4ab754391e47801', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '4b2a6805b00a6b0b53cf8784531504f4cfeff7777d45b6162f90efbe8e23f8d7', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
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
    'termsconditions/index.html': {size: 82336, hash: '55b8fceacf6f9d0f3d66a9d04842d8964fdb3654faff522fe0a51340784e64f0', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: '5dd27d59c0a1ab5539eadc8ba738950098973e8d1975876be64f1ae7da477681', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: '15de7404f05bbf0c78e23185a14096be65fe253a7ae0e0a09f15505b138c81a1', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: '9823f29491266218976f6550180a7bd94686fa978aab8f90379c9455214fce2d', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: 'b366490baeaa6902b656edbd775065e28bee310a74c6551edb2421cb736478b7', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: '78beac565b59d339fa51b4908fd4531d87dac989d18663959d4bf894376dd567', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 111079, hash: 'a5a26cc427089502780c64eb1634227f7af677f20e916d986ec75d9f49feedfe', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101820, hash: '5318c242240c0edf56a0056702ef117f3d7671bb7cff5ffa0d3c731163f7724b', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104414, hash: 'd0c8380602a4df9ffc57fb18cb4b9e7d2207c756e47993f0081ad8e8a124476c', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101386, hash: '058d6a2d05bbdb50b00897ec1a88c71a104e80a5b90f89db5f442c327cd8e7fa', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 105059, hash: '24e6c64dc8c6400f109260665ddc485787c774acc681aa861238ae992971f864', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '19d60563aa94cc68f5fb9a3ff662c6af3ad4b9311337f4d8fbd5a3363fa025d9', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '93111b1c1320e88acbb27d7cf90fa84b54b6ab304651b372fd645ca80b029f56', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: 'c876f87083f7aace2c029f11a18e97d4d4e36c0ecac6062245d36be5b48d510f', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: 'aeaa6c713b564b2315450d670113744f8793fa6cebada722bfc5ceab4fb2f9a5', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'e43ad7d7391e9b73c5e1de00836b545c0470084b45d008f8d602e89a4ef3cb8a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117999, hash: '1e14f39cdd9f175c4ee6d0bc789ed1983ea96e429f64d7bc272c220860e29acd', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92640, hash: 'ae70d71e1720be19d0f0b4f9e065a752c05d3e698d1948e675381a7dd4982fcd', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 105189, hash: '5b2903a25b01ae4f771b8e913103fdc8890f5a6db638647b4f628b073b7bd795', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 93015, hash: 'a75c83795cbfaedc84edc646e13dd2ec423d6048b3523a599ecbc57f14b8a812', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 92206, hash: '168458edfde519d231d932a053609042b663f313f48b4c6aa4bf9603100525fb', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: 'f115ddd57b44c95768a8e45a6c31bb3a615cf89f1074ed927c44b7cf32364afe', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '7c1390330802aee5ea017cc17301ba0318d83e47ae8b2a4d11bb072b8ceef752', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104486, hash: '2ea215e22f9c4a49b3704802eb330298742fb8fe6478d7dab2c141deeaa99dd8', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94525, hash: 'e4ba90fdc370deb947ee3e7f812e6a7394255e823054e02d32a5766e0744a86d', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94446, hash: 'f27abf8effd0cc86965f7eb0825068afe4be7c16b443b87be1371bb694bcb987', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109496, hash: '72f05dcb0b696d55efbcd9cba78095dfd1614476dd7085ddf8613ae5e3fdc66b', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68203, hash: '313ff4d935e5a8af6e7448cb892ffce8419cb11e2524e7328ebf14aadfbf5de1', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67387, hash: 'abcf01ba0d2341013eea897619b6d4caf4f595b8b3d6ac3623d5c32629bb37b6', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: '31d50d55868cc12854ab9e371fe9a43bbfa8ddf74174e483542d9b53947b7060', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '4d370d8714614252709efddd843197b3ba622c70857aff47aa7754b32bce3e72', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '6fd93b8fa6057234d05b683ef3fe29369a5cde60dbe3c538a53c140e506896ef', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: '3acc129c8a9643becacaf4d2c7ebdd9b3d64ce977cdd9b916d0051364e63afce', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: '93decf1b502c8f4eacb62f78b1b9da3e1c66f045239fdc8ef1266efc049f3d21', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: 'e93e9c0da996ae51296a414a7fbbcf1709e0a84ef145325150ac92a1810fb1b9', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: '1dd2c62eed26e380cb9fe06e5c7758bf6ce822222299dab4e12763fce81569ec', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
