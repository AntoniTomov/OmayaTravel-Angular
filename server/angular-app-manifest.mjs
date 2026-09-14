
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
      "chunk-r7ktGuz1.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CDP_PVTZ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CDP_PVTZ.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CnDUpYl0.js",
      "chunk-k_ywlh_5.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DkeVj5qZ.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWhpKrVk.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BF0ZUjzw.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BW9It3oO.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-24t46kWz.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRnEsqZ9.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LMhU6fZ_.js",
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
      "chunk-QpJrbFq7.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QpJrbFq7.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QpJrbFq7.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QpJrbFq7.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QpJrbFq7.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_iktIqHs.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_iktIqHs.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_iktIqHs.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_iktIqHs.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_iktIqHs.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtZ-D-X5.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-_iktIqHs.js",
      "chunk-PfukwCsJ.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtZ-D-X5.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C70Rn4pN.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C70Rn4pN.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C70Rn4pN.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C70Rn4pN.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C70Rn4pN.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C70Rn4pN.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C70Rn4pN.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C70Rn4pN.js",
      "chunk-PfukwCsJ.js",
      "chunk-DFLBwZCy.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsRhvLBY.js",
      "chunk-k_ywlh_5.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsRhvLBY.js",
      "chunk-k_ywlh_5.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsRhvLBY.js",
      "chunk-k_ywlh_5.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsRhvLBY.js",
      "chunk-k_ywlh_5.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsRhvLBY.js",
      "chunk-k_ywlh_5.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsRhvLBY.js",
      "chunk-k_ywlh_5.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsRhvLBY.js",
      "chunk-k_ywlh_5.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CsRhvLBY.js",
      "chunk-k_ywlh_5.js"
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
    "status": 404,
    "preload": [
      "chunk-DIE0-hN6.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16185, hash: 'f5cd6a3b6d4b3e0b7e8b1a0ecb70b0259355ccb3ded4b032f72fb2f46e03cec3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'f372ebe22bf3d7e2788fd247d70c04c86a80338d7cf5b0e46535a55c9b05682a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 99378, hash: '5b9194b354218487a3839875fb93d5eacfda95088830f5cf78fd06fca8e86d7b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 78942, hash: 'd11c4bed657579ee55d81ff2f80406c284979210c02f0a6aec543ea2c3ad099e', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 61689, hash: '795f00c1fe345163e92130f978d5ab9d27a5d97624d914a856fad8abb57e8280', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 75580, hash: 'c53446b52e98fad3b00e169abc69e84a06d9360d0891378c0d4d2007c85316f6', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 74880, hash: '0984f7e3da328732652a134f1005bfc57a11c3f6677d9ac797af186d46575d8b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 72486, hash: '5a457b0e8a875cb0de76ac016469d2bd28c38a84ff9b47e37258d73469470f03', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 73957, hash: '0d887f62ac23270cdb5ef49b9ecbad9f05dd0264d6dc220b22f5e339e811d70d', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 77759, hash: '936c8da69989a4d8869cc96cc2093b35a2427c8faf9c5bdda9ed9e52179c66ef', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 68840, hash: '8994782dc03ed9e0e0119d5418b5b1e563a33cc144685d1ebdbd030748cbdca8', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 70981, hash: 'b6478ecb45941b0afddfde655da9fc1e9428608b3e626423f016a03210c42bc1', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 69085, hash: 'e490c9bcb603752ab84fa5329c312103f62bddcdeb4e5a61cb0bf9c5e4dac622', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 61389, hash: 'a41113245aa25f16060652e13f6a4c737db25c73f197706d10d98c619ba4e0c9', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 70986, hash: 'd4f51d86209fc00c58b771b8cf076b30ee26c4ba2b28b981ed4bc026d71538a6', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 68337, hash: 'b0c70252a6a940fd4857ab07b30fd4c54e356158cbaf4e22eb1f69bd561cf934', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 76723, hash: 'fa6ed57dda29ca4f6c844100494795fa52ba6657da24d8bf3311c46f6bb74e46', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 105075, hash: 'b45ea8a4e9ea5a87e1405d39bd0b01789e0aacff970e92a1ced595917c5b1942', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 114923, hash: 'ae959ccb905d1332f316e6607ce602321972e69917c76fbfb413d4483ff8855a', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 115162, hash: '1f1ee4f1aa53bb99d0ec8344a2eb58dc11b999b8fb3a482a05db3f7a6571fe04', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 114968, hash: '999b1017e26c75e1b706da25337af983f41b8d90329c05c2cd0de72d4ce8a491', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 84072, hash: '493cd8e8c67cac85cf55193ea346734088f71482199a88082808d59599b6d5da', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 83851, hash: '742a3bc38874618efb96033f61ac0297c5ce4649ea76fa1e7a8a413e79c8e488', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 100667, hash: '23d5c3e8ab7a7a8d9582aa2f307e508d0c0fefcdbc74df9fec12f5ae976a5aff', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 90485, hash: 'a3e21ceb1b539e58e169c0ae055d23e1af76b277063001aed92fd304705ffabd', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85249, hash: 'f6ed3ad69b55a24f09de0d4463e569f2e9511e9bc468fe97f4583b3d910c6e35', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82173, hash: 'bd6d921ed793e289da5d43453a957ef6058a935880842c8b7d9e15181c93ba25', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 81950, hash: '970fe7625d4333709d5fc15eebfe79f925f22f213d6962c16da94b88f2b1c328', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 65042, hash: 'f476a526d0512d781696b25abfc7e249289315a5461df3338c30f4cbd43899e4', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 112109, hash: 'dfe1fb484901b6b2799a530843a76cd988d1eab2f5dd121ef70a4b2e02d94a01', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 105783, hash: '3fd6dfefb15df6eb0ef1a163a6087aeac016ab5311ee077fb60afbff996acdfa', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 83960, hash: 'dd5b43f6ee62d10db2b812e6dd820c0ebda43485c86a3e66035305b313557c89', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 82787, hash: '3adf50e28d4d9969ddfc774c78b4a9c99d6aa7ec7f9dcd23b21d9f0bfcf97adc', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 78291, hash: '387aed440082d1f7c8eebd5ff61caaef9a9dfc62738b785c08ee35872565b988', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 79354, hash: 'e87ee11e5c36e158d525235aac9543e4312952fa2ae9adcf6dfdf1184d60bde7', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 94935, hash: '78c5f083d029953b81ae3dcbc9d4ee9dfa75ae6242175eed9a21e9768a62cfb0', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 87170, hash: 'd92469c70de8933645d5de78354d1eeb7a9b51f52c6398801432ae5f069a0a27', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 95220, hash: 'cf9638b9de30fb605693a40326a3231228e410e108572cb9cbcc4cfe6593a868', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 100049, hash: '013510d7848da84332127a55ffee7a6b2ead23c2b1fd0f5fb442ffbdffb83ab6', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 59690, hash: '4eefcef033c1ffa5fade2b69d5484ee1a1491192463032945d744cd340f5bcbf', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 61744, hash: '2e806719ad237bd7a2ff057d31e42f0487c357cc689b06d9bb0912cd9c2b8389', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86633, hash: 'ce28461deb2e15edb39a8090a0a1a65370bde51cc845e757892c90aa7c19c317', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 64623, hash: 'ae4d5d671579bd927dbc4fbd74128ebfe647d54ce1981d0523ffa08cb6216bda', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 103940, hash: 'f14dcf4a437777b9f1cbeaa3f52770ef9abfcee694653a28d06ec8e6317dab9c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 111591, hash: '5d17729097177800a7fda918d0b25f3d30a4394ed022adfe58aca8f98052ab5b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
