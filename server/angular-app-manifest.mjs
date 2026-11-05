
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
      "chunk-B81zsmT-.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DCi97cwP.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DCi97cwP.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSDihn2v.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIoe6GNX.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-bhy84tdJ.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CUZ6zZg6.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUT8mzrs.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2ySQqCU.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CuFqMwOG.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDgLkUt0.js",
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
      "chunk-1tClWO5w.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1tClWO5w.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1tClWO5w.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1tClWO5w.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1tClWO5w.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1tClWO5w.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1tClWO5w.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNKccyLJ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNKccyLJ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNKccyLJ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNKccyLJ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNKccyLJ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQD46_T.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DNKccyLJ.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQD46_T.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DbVDtIvV.js",
      "chunk-Cogm4aH4.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BCQbWoKH.js",
      "chunk-DyzSqWdQ.js",
      "chunk-DQWfX1Pt.js",
      "chunk-BEsBDVv6.js",
      "chunk-BfrLb_Sv.js"
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
    'index.csr.html': {size: 16193, hash: '4780932aeffb11790d57d2463791675b69499e22e084339e2f2336447f63b594', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'd62ec2b90b48a09f295ebc6beb6e7e2bf464e8b6936122276171e121ce4f1134', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77298, hash: '8b94cb845cd2d11b30a6db8713ab9bd6bbd4a62860527c0279a65858f0013d93', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76721, hash: '12681391cfc49d6c735f47a8225c61455a24f34a3504e9e4b93be29599ccb564', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74639, hash: 'b2882173d17581497078e82d23cfec48e10c76ac6cf29109c1d36c0cca0097f0', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67394, hash: '0f4bd19ed6897aeb6c39121c0427ef61f46339b90625133d5bce2bd735eda9b5', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80503, hash: 'eb935df0cf94563b64aeb5243e072c4be9c975b840931e404ee18ef9bbf04317', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111633, hash: 'b0de4d8186c61f91d28496adae0730dfcdca8a19479b39bf734d73e4902177e7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: 'c92396e55b4cfb375eb50cf13ff5e5b4ac93eaa2a29ac2661f0f359813b70907', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 94707, hash: '299b418a435b3a8b0a3e10658cdc4d803346ad0f9f30b21bfd74f478c27a4a2c', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: 'b16b705fbdeabfb0877eda0cebf5f937b0ce803f84c0c376e98c3e0f123ef302', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: 'ed3018842fec8905c0a63f7ac0c2f35bf8a32e64db51f519856d5a697c963efe', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81659, hash: 'cb23e890caf27ce8604b3fcf38eabb60077307835acfbda0ab33eef9baa78d48', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: '61100fed47c748213a8771f2a06817544a5290396ff2c150aec2ca17701280fb', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: '20678adf18ed00a42a815b26fc4e59cf28b7b09dfedad6a867ac397f3b9124f2', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: 'fc5779e2acfc437f2953696751ad452afc457defb47b7a37c24d7c0bffaa875e', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: 'edb9d41d024ab634310709b51ba6ba8072884641ab23ca3fc242acf1467b0549', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: '43e6915d57afad26f4af05bbae651d0c61defa123c374ad38873a58890ad1b78', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: '6b97c408ca0a02a3632596f2e831e6aef9540d8323308994c015538efbf9762d', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: '2394fadd5d6d854929ac9a1897b6908a3b39aa603322bbfcf68fca4a0eb2f963', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124583, hash: '164d6c82deddbfc5be7ab146c414f2f70802ec1243422bac654f0e75da4e9460', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124225, hash: '5d5fef55b95090e23114fc67435c50b506c5120ae250ad94f7cb561966e0a4f7', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: '9d4ac121fb445631af008bc6fcb00d936889f88cf49e928798c138052cf094ca', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: '4f1f78eb983ac074306a4058b076174b93bccf680b74b1e7565b984ac27770e3', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: '0ff9d9845035c305acacbda35f366b17b27d57f795e4ea932ae2295783be851f', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: 'e4a3b02b74dc5118668842f4067feb6bc40bc210453894ae9e2c582fdbe855c8', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103220, hash: 'f2d9c82dc5d17e561f87b5057dcca53a7411a008cbca6761725d21eaab903b85', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105670, hash: '63a5a92847cfebba5257f690c4985af24139f2d34cc2137438cfa97d00206680', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114491, hash: '7cb625e3575da6ca508cc833aab9a771a566f6f3c65b828bf86e9eb0e5af0d85', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102329, hash: '0b95d41c89bd604dcfae45ff6d681f05adaebbc797643612e014f94f98fa57c5', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: 'e7c8c70caacd0860ee869ed40f2796325d563a0fa0e103bc00db3d11522014a4', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: '834047c561100ca6419f4cf5841be303d93b7edb4b33b2b4544aed6160a07212', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: 'e4622eb0a064d39575fdfe773c57ccb30f51313b798bf2612a44a94360211681', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94065, hash: 'f826cdcd9ff2788db62c83491f72c421db43a2a90b1f4e03a8189d607b197254', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70196, hash: 'b5be2863c57cd25545d4248e1c81b530eea6d997cbe44366db7d6aa701fc88ce', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87207, hash: '7d57b8b40562e92ba71779db560672db92792e293e88cd3aff8c33ab59b93cec', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82557, hash: '221800088985f60c5ec5cfc2251446e68b3839dd6e1044373c21bb42615e4a56', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104500, hash: '4ab541839d701d5fc7c00f75bc2dc2af75b516f56dd9b885dc95b61d424b7dc6', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94531, hash: '4b52ef922fc14e0b1739194c221a36165a77b2c567498b37d578d7356304b751', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94452, hash: 'e9679fc16efd6a46e88c2886b7b5dabe752637f3f694d0926aa9668250db7eb1', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118201, hash: 'ec2fe937297a0a7bebd93c538079fa5c12dcb25489aac08b3c9624dbc268e3c1', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93697, hash: '6d1c97c37d3aff757945b682f396e74ca9e011a5006fc9ea9770c9c3d098f955', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106755, hash: 'e1ca1cb0e947fcdb25a611fb26c98ed3605666a7fb559d7d46836c353eb40dc7', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94238, hash: 'd12639fd712ac2354326bb868d900b864dfb5ab2f698b3cf3f5e328712651ca9', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93406, hash: '368007146c8c4cabb6e8a7860704a47ea489122bf108ac470bf94e8c9756c225', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106237, hash: '14c7e35ba93e78e126bd5d6b640dc74e3946e6c381b00eda5a9f333354ebd2bc', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 116997, hash: '7217a2e704de12ae742ef935bc8ed3005419d1b8d5b8b9ea40346e90871d4936', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111124, hash: '6cffa21738577784c66ef09cd34d992a54f267337c8a4fccec678f08b596104a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68228, hash: 'b909eb548a822e1ab64f541467abc57eedb0a2fe59d5da70e82735a4a3601c2c', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: 'c1d9cb5d83b13012705d5f9c0be77f35d1092752ff35a1ecbd3e7f5e0988a8a1', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118600, hash: 'cb815ee5ab2f4159edeff11a2264dc7815c9e7193a527b7527288cf5095a9fd7', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121087, hash: '9b2de62c25d6e614d5de0e6115613e990027ceee4cee94b4552b08ddacbacbac', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119478, hash: 'ca07f856c2ad1b85fd1d87fde5408fd7429eef2f500d05f967be0871332619e5', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118686, hash: '5bd9cc2415aa323d47ce8df55031f3292a1a09c13a2aa71c60be1eb6141eaba1', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124410, hash: 'a9597d8dd8ffd23a769bad708d31b8a8f82c82727c9cf387cbd59a43ca14cbbc', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
