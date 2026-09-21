
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
      "chunk-BBn7esWQ.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Dmxek6Vo.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Dmxek6Vo.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLYbnxW7.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ba50wwZx.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0ozL0MmO.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZBVpftb.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bs72wWGS.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IG9JhWkY.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B-_U7dDz.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BwYByxqK.js",
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
      "chunk-DFK7Pa2g.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFK7Pa2g.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFK7Pa2g.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFK7Pa2g.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DFK7Pa2g.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C63cB5Gi.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C63cB5Gi.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C63cB5Gi.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C63cB5Gi.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C63cB5Gi.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAo98fW4.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C63cB5Gi.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BAo98fW4.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsE7F1-9.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsE7F1-9.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsE7F1-9.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsE7F1-9.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsE7F1-9.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsE7F1-9.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsE7F1-9.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsE7F1-9.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DsE7F1-9.js",
      "chunk-BDq_zEot.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DH1wqqJX.js",
      "chunk-CwjW0VPV.js"
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
    'index.csr.html': {size: 16185, hash: '11ef0127475b76ab5390ca277bc928bf9e0e09702f0323397929bbdfe5873071', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'a9169efbe5f9adb5fc8914540cbd98d26baa75e532bfc704eb36fdc1f6343710', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105368, hash: '14d12be62d371502c9fb3ed0a0b8f89dbffdf42652941496d924d53be72fd0cb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 83314, hash: 'ff838a145ae2daf5abfea292d7a49a2a63d2c42408639284a9616b8c60c46005', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63438, hash: 'e78e3572e86af37d085b1ac777b73c1c8659b0b42ddc9953e747a9a6f0c2003a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77476, hash: '10d73b93b8f028094779b2d8d5da6e4aad5a1e4d3c4e18c2c83f1c30b2188514', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 71645, hash: '59a6782dd8c153677a32a996eafbe024288cff03faaa459f90cc8f015e5f9c9c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72543, hash: 'b7078b8d32c1ea984af3ae0a17ad6a8883891c3eee793d0aebfe7aa66f15c695', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 70653, hash: '75d9ade25d633370535e0de90c9b4c5893c3805ef4f5634470055bd5174917b1', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63408, hash: 'e407440828ee34c0d93c7fdc9edf3d59ae132b51ee4f57a15af540c17fee17f5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76517, hash: '9aa03c511a05ece2f6b3521910e4e068622343169d5afbc4ace5808348be8277', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74062, hash: 'b42c813d8e53ccf69de1f9c651a0436e32e6cd7932a3351ad979ef449c0773d0', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75537, hash: '991f5ca348f789f304dc0ec0c763092ed9381bd6675b4e5a6d85f734befa974e', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79344, hash: '77b3695c6b77a63c29aa97e01d2392e95803638e3b87d51f3e6817af713b0b26', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107216, hash: '235411fff5c718e04d6a7415e6b107fc41f1f21f9205326979cb72dc9476aa83', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117069, hash: 'c7165e327912d262a80cc02c263b90f2226ea210dc3d0cd7f1961da5e19fa944', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117308, hash: 'edf913775aaf60fba07b5af76e9829ffb11849b80bafc935ecd1920d26029c7c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117114, hash: 'dfaeb4c7da330b8991006061e484e708b515457666cd71b771fa3e279a949789', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 72634, hash: 'cb19c58cfe30f359ff94861cd00d12dd70e1d84b72e27a26cdae099b7dbb63b1', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 69985, hash: '99140586af8d47336090223f45d141e790fafe44c640ee237533c2260dc41872', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78371, hash: '3d8e575bcfa89340980d14f48391eb5f894caa4630200eefe1d4a4e528b8bfd8', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 85634, hash: 'ddcfd2b72268dce865e29ec786bf10e320de858e2a1f06c69e18db9a02dc960a', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 85400, hash: '034475d90b84298cf8e7cdb2437de9891725c4781788d7cd526f45353e710a9a', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 102214, hash: '4951dae78bfcacb15c3eacd0bfad6ec4c6d00da2a540f8877a540e10fba014c1', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 92047, hash: '7f9549d7fcd0c5adf7b64a59554f104f3898c14c0bee0d59dcdadd94d52305e4', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 86809, hash: '29840805a32f6a33faaadd3da5c3c5dda538a55a13730f98f9c46b15421a6aa2', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 83701, hash: 'b46fb3eaad97a6f4b1faba8592d3e09129f20823483b2adea01757ef92fd105b', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83478, hash: 'a2d49b0838777b98130c81163d9bc052fe9700ec4a11e4f1233267f2fdeee44d', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 66588, hash: '91fe6fb32a15e78c1fae3e33e6c3a5b51a3b3ddd480da4d905dd769167a5a227', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 79524, hash: 'b6dc8eeac505ed627b19e81046419b7d0a6506fa3d779c01e6b9192ec4f35400', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 80940, hash: '9866fe89d769cd2b9a570fb156355e10a42e643897bf9d5e53f590859b91cffc', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96582, hash: 'bca7fddc4b15c03d7b57f6375dbaccb7acb8835e2873d27298edfaa2228adff9', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 88744, hash: 'f5a91a1f4b28f021b7a3d2c292380931c245f6c817ca0efb85ecf9f9112f0046', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114258, hash: '2539db4040efd431eb2d02754f65fa277c10c46756a1aadeae321c24cf3632cc', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 107916, hash: '22c49219aea3ca53905bbd24b043906f7c383208428280ad7c6d3315e7aab633', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 85525, hash: '3aab4951f99c421e8b097f00a52bf1e2c924bc329ebea14d52bfc53ab23b9c97', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 97449, hash: '1c61bcd5a7529400aebb78944c168d653fba6a68fcc1886cc0b60f56c59b0b62', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 96885, hash: '30ed006e961b93679c6dc7e7f95ba464f10cfb6391f4246ea3c9de27711101fc', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 101766, hash: 'b95ce92f2b2b6fc1185cdc1361e9ac2184c555f87737e649b5b961dc18b3ef70', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 63686, hash: '2ea16513ce159ca4ff58fe8b54f4ec3def6dcacfe06729ddc05a7c0a1465eea8', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63444, hash: '02745bba386d33d5b49f98209196b4a9ec6e5268e8f859b87a685553243ba351', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88365, hash: 'e25c8f53dae6904202c4a0faac53499f218bf5dbb6515a3b8ff2bfd0e2d5032c', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66158, hash: 'e6f7cbbf585e2c1e622a152ce7177d5d631b6bea56290d0b911f78c5b7ccdc02', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106147, hash: '942b3845d8ff97256dd399c3db62788c3360d1645bd3a78aa6ceeb7b4e6d66e2', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113792, hash: 'f9dbe0a40df3412004b3e7f35f44ed3cd1c5838c9fc166719d77fb80416fff61', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-EGC5IPZH.css': {size: 12446, hash: 'ajG/Kqdn8Xg', text: () => import('./assets-chunks/styles-EGC5IPZH_css.mjs').then(m => m.default)}
  },
};
