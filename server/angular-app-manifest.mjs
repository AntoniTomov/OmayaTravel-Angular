
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
      "chunk-CqNDYxh5.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CdLL0lb-.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdLL0lb-.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Sk8ye4ha.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DqSGCJJK.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-bltF-s92.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DlRKJnkH.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BdQhBtmb.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D3DVsGW1.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BP_dJ1Zy.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZKjPDz3.js",
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
      "chunk-BHJZAG1h.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHJZAG1h.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHJZAG1h.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHJZAG1h.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHJZAG1h.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHJZAG1h.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHJZAG1h.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiEJnnyp.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiEJnnyp.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiEJnnyp.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiEJnnyp.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiEJnnyp.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTVUkJmG.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiEJnnyp.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTVUkJmG.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QseiDToe.js",
      "chunk-BvU9XxVK.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGVtlSxn.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DnXqBDLf.js",
      "chunk-CdoO4Xw7.js",
      "chunk-mJEQK94T.js"
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
    'index.csr.html': {size: 16193, hash: '6c34feab0fc90cc54d9ffb02f283ebc00a272b4fb9ff658f0cba34f84ef77402', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '918398e107cc1a301061908d33c593a08e1149a38c0549add4fc69755546baaf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '15008f25184fb9759a52c67c3ad3f855ff107f94a49d275ad814496f6d436b61', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: '77b461cec7d3e459c3fc0d29c2d2432c4b323ab0b23ad97996f7eed991ed4c36', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: '09cb45ba90a3255c8bc26077241336915067cd96c98f83f04a6de6684d511d69', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: '33f3b5ab404ff134282eeb47fc849b79aba397a1bbcbb8509182a2ee2f6ced26', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'abcc0c3c8c46fa2722b3220ae5e68c6368d8e8800ee527d08b0fb487a36a8577', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111468, hash: 'a3f0ac8e36065b3fd59cb08e5b58217e33f36a1ce6110461663c9f287072eb7a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '8c6cf598a31c1d3f38dc109ae20ea6fb01f1436c7d762e3fb7ca8921fc9c8900', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91713, hash: '54146a405035d259e8c5e730d01f4040c114288f5a5c949316b672a858508ca4', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '1577cb0c4fae68bf61c423c62727abed7283a9025da351d755da942979549100', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '11ac3c477ec1e535de8fa2dc556866705c4a696af76b73da317c8b5b226f566f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '2a1ab3664ab508a1d04cc48f50a7f8e9aa9f2aad6e5f39efcc8581afc2baac3c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76728, hash: '6916d6d6e1f5bbda50f4e0066facddee2c743254c43d8fd74cf1b048c15eae71', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '4b7710a5414a9c4944d0927c7d5212486373a25e6cccf41ef4bf8d09899d6df2', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: 'd200294c3461f7288d8fb9f510afc1aa9f5639b0e96cb0348947bb28747afea5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: 'f3de891df51b50c8ef373ef073449f194c29dd2ec3b587e8fad1619fcb083144', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: 'd24b303828306e3e676ea24b90285b90d40b72fc8b539dc31868b642c8009f3c', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124564, hash: '37189b44bc35b078f19a52e785f477a6f1151e221fee61beede5370ced2b7b3f', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124206, hash: 'fc62673e8143a26a39ed2b03080cfbac06526be07a3b2b27d60fcb0124aac3ab', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121514, hash: '1aeee5e4394e6dea628e7b5e2823557acf8203b039306df8aae21802dd357b77', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123067, hash: 'a4a92b20ecfe22e010da9a06805d105f0bf05e822d9b3def90df915fd215f812', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118305, hash: 'f32e9575895c9b0fea13318983947e6757afdbaac9a2f9fdd05543cb38de653a', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112438, hash: '4d597d3b2b037adc9561b2b00a04bd85abab0456432578a50191d26d0eff1ec0', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103157, hash: '82467f9befe8cdd396ae5f1d5ce73619f99846ced746735ddbd217297e0e3da2', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105835, hash: '3b2397a6b69cfafc5fa7ba9d9d4fd3902402a0fda9ab9c194e131dd0a2456dfe', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102817, hash: 'ecd09034fd57317b0feabb5849c7a2e054ee7a6e6aa25ba6fdf1f64e786cec05', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106730, hash: 'f46f95dcf4345f80bf34a4846321545d6146d5c171f67651b9139bd65ecb8f23', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87990, hash: '42d44d80f53807b1929c81cf424fceea7b7569222fbd5a535d9d203b6fb5cbde', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87767, hash: '8d14015d2141350652d6a95fb8bcf8f9434423b31c1934434bc1895b0455e9cb', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '030b04ec8e5fdd6643b4d9f8198ded19260f76eee605604e91ba9aa41e4e93b6', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94072, hash: 'ca1426acdceae4b0005534dbdb80da14c9eb6650eb8f30d46f9247a2add66fc9', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'c69cd6d2a827d3633c3d762514a02ce22bc7464529a62aaa9011d1b9bb41c897', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117999, hash: '50c4ff47ab3ae1081f065f020fc2681e4059beedbcff764cb0510e2e9769cbed', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93746, hash: '81e1e32316ef06c334caffa9f22b228f5808b140321624546767bc11d42c9599', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106563, hash: 'a4c96057e14e02a61eca6f078c636b6559c8ef5d67c2446ae4ae7d354e9b90b9', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94147, hash: 'c063a9510954c662671f7621c10d953a314c50f41870c020c5a21fd7e7d617e5', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93312, hash: '50813800c3d78141b7b5db3fa0230df7721b5685a28ce691da58ca62e4ba02f7', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111061, hash: 'd2fec42cedc81a2bd765e6c1e9cd27aa5ddc3832df67b610e99f3165450ff0ef', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: 'b191b2af4636cbfde680a4b09353ca28c7e66ca6cf775b210fce27389f2d4237', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67425, hash: '560a94c388c9c6e3f7713f28d0757dc2e23b7642407416bdca740ba3f3ec9d74', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77350, hash: 'c822dd62e26438838939471fb952322ffffa4f7b37800a35937f344085b0abd8', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76229, hash: '4ff3923b7c891ac17d5fd0b00fb6b283057b990d28a10b54cac384f9eb3ab639', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: 'b7cd57bc1ea8794cc9af7ddc9355f26aa3677b8e281e2d482811585c2dfb0c92', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: '1fb5586f3b3dab2a5386594c1672c9605a77079565d4361397b859ab145a4103', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104507, hash: '6f59dc97f80c721ed25156e6ad1543d7739175ea85e6a7bda932fdabb64c48f6', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94538, hash: '29d83e7a4f02ac2b0727eaa1cd57680b4521acfad03dd22e05ffeed0ad8158cd', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94459, hash: '2521fb66c9f967b3e0d7865385bcf49eacc81d42ed25e157f38328f97928e117', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118316, hash: '7b111181e47390e7b215bf9a9e528bd47e888a8d93473c0219530d68413856d7', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120996, hash: '3bc35d19e0c6b6dde897c63e7dfa0ed041fb77d0ba271d41d904ab201aa5f614', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119408, hash: 'd1778ff326261ee611a412f771120c2bea2e80cd9541d8d548c4fb9c7562fa0f', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118602, hash: '0b6e8ee6202296d86b559b68f484309737f656b389f4f889d4124511b8ebf5d9', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124325, hash: '3cae5dc74cb3b9cecfd693dabd8f07e93875c1c39f18cb5bdaff560f6a1a8318', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-NHFT5GHF.css': {size: 14353, hash: 'REESbOXJ/Wg', text: () => import('./assets-chunks/styles-NHFT5GHF_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
