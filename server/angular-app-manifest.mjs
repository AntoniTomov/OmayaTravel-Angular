
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
      "chunk-CXDb2hW9.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BLibFOG1.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BLibFOG1.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PMx9QuIp.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-jJDMmSmy.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUs4Z1z0.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bz3o_mAy.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BBzMJ20z.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bh2CEAo8.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DsDTvK3Q.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D9NPrwa4.js",
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
      "chunk-CROMDWIO.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CROMDWIO.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CROMDWIO.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CROMDWIO.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CROMDWIO.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CROMDWIO.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CROMDWIO.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeOqBAjT.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeOqBAjT.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeOqBAjT.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeOqBAjT.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeOqBAjT.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BbQ_H91L.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeOqBAjT.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BbQ_H91L.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CgiNuwQY.js",
      "chunk-JP9AN-Y5.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ClSyJjbf.js",
      "chunk-CvfAxlmc.js",
      "chunk-JAAAa7fu.js",
      "chunk-CWZ9ARgV.js",
      "chunk-DH1xTlVt.js"
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
    'index.csr.html': {size: 16193, hash: '32d2cc92c717cb1e423a73fef52717ba032edb57475241c810f78f6ffe7ea2fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '6430cb02557dfc37ebb99a9e261cf00246fde29a2c7a831ae0a52ff59078fa56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 111633, hash: '32bc51dc8b328eb988189410d7d468a9011e1de08a4e8184757a0fcf5b53d110', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: '4d7a6c318f25e01ca36690f06895428a97a7661916a694658cc6b58ecda5ee12', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 94707, hash: 'd7385378e7d8f3ec782cb13c3675cd435e46b6008e3c81b049514a73054e5634', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: '36aa75560f3f429555400b7127199c37c4172c38a3fe1d9887cec0e57dbe567f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: '3b6e74f0c81016b0533b80587b7507298c6a822a1e9d329f56497722afb552e0', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77298, hash: 'aee428d88d8cfcd331bec28214081586d854aadf29cb99672a98f30a44198b85', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76721, hash: 'a397c701e084a11af970d64546fa59ed1eca8aee4c9b5870e3d671f63eedb479', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74639, hash: 'ca563a2fe4c373e1c50c72fffb5e08664f47f8810485f9a4a0135587f9faf40e', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67394, hash: '2da2604093322bf59afa1f81815cccd750d7c9511498fd3bcfdb504032fba117', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80503, hash: '982e3db45934d34cb1d38e8a1b81b3bc249099d7add6149d74d003f2ed03a4cf', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81659, hash: '1903818116fbbc7e73c096bae63a19f8c06e9f7cab158ef2c8963358a8e53858', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: '73b6732a1ac236fa478f05a23fe5b4c3362ed7fdcad7898c28b542b625a0664d', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: 'fb742ea8d8470cf69a63bb3516519d5075fdd5068bfb20a8ccbec00fab9a9725', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: '2411235db9d608620315d93afbcfeb1576e26e8e8eb44e9f4fa2dd6acdd1c8d8', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: '66e317f28c36e788055d1c14c650540c62e17a3e2eb83c158f9021010bbea873', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: 'a666111de8fb83ffa2ec568861e38400317353532098492b78343050a6efe2ec', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: '9deb508dfacb3832fcebeb0746a90d203b84c047d8ecde9b93f6ce1b60031a53', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: '238c50726386980d98de5ba9f81945a7ccf1c903702ee05a8f4466522de94f7b', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124508, hash: 'd4701976876c226cf70d00080aaa1ec91baee98a1f07a95a7a7ebd6de1ca4703', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124150, hash: '43e0cec0dc4e68e5011c47203963e1e492bd5614c32ff051136b63e6e2d74950', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: 'b9d5396e9b605742b7e1b480d603444beb003b5adccddb007a755cd0b91d8f2f', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: '37b1ef121192a1e450179e6053bab7ab0d32f3c3b326de451c9f9ab2783037e8', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: 'f3600dc246a2f101489196a64f28103659721e7e5496ba2217a368d402cc2ef2', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: '62c9a1661b0f38b67338a4548a01ab36fb13dc517d37f9e4dfe32f96983df237', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103220, hash: 'f18dbf437f5b8961ddcf44dac55bd31cc220d778a90631506fe8f3089a113369', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105670, hash: 'a1068d7e58750019761e27e6c52a2d5be8e064e77d0da978ec527b2b30b35db8', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114491, hash: '13a1b5e9628a092caad00adbd4f0f2e7f167d1ef143b90b7fed7c56d31eaf5ce', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102329, hash: 'b9d3a042efed0c2003526638a3910da9827e84f67287d86da123be668473f848', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: '65a0d93ad1340b5558f84e0c84bb17f2a100e3bd4c517d835b42b13f55ca0d55', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: '403c78d383b54a4e8835cb4e51c99b45e5336afad653d9e6c47b6e1f55fbd273', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: 'bfb0221f6cbc967005433fb2433592b0d96d9b1961a23cc9114dde2311078221', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 94065, hash: '1375aad8bef47e6858a62f602be7d6db8fc10d7c6d780f8aedc4b4b3361a23a7', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70038, hash: 'b2f08e0accf6a38046ebe4b9d6ef52e255cb02679afe58d303e35bbf343e30a7', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118201, hash: 'd3fa65a7e890eea9297e842995bec72d747b0260eab98e6a228b2060f5efb8bb', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93730, hash: 'cf4c357d006db6a33015759f075943950563d015a8b221014fbe2eeb52a0fca7', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106860, hash: '09958a31224216767cf6e25b6e23711c86d1e71992870460076734f0d7aba126', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94282, hash: '334ff6987f9ab639e18a16e73cb3cd0061aa463d6b09b51faf2693681f7944e4', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93439, hash: '069ea37b099b6b51ddb77e57129b68352d00070d139088b5c3c1358f591c20a2', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 86846, hash: '7ec3ffacf0cacc8158bef119427062d18eb3853ab380ae909d787eddedd904fc', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82544, hash: '5312db949019a54d112958310bae03c66b3fe41015dbd8349a2d4de516e3d4be', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104495, hash: '3a93b37571a793bd57a54fdc6a45950f777f03ed64e3d4078aac94d0f8b63f5a', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94527, hash: 'f1397dd5c108880b12e80f96bb73a81013a59d9c9bf9a3e9e7f57f0b5aa9338e', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94448, hash: '5537679ffc87f5e27e6dc4be2417d04480f29e8200c118f43fbde854274481f1', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106237, hash: '0a98a45e0000543b16d6b0f6b9d9857ac0ebb65a05908d6f879359fbe9dd6f80', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 116997, hash: 'e05981340a26c197ac4c1251d1cb04feefb8a18c51db95a9f6f91c7444539724', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111124, hash: '0ac0adc6ee4c9f121dfbd722dde519413cfb0e6e3bad9a5141b7941687894cc9', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68228, hash: '2da74aabc6855798a3a14a0256f82aee8c0da7c155ad43810661da9fa1b5fe23', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: '1502ff70be481e9d48a3b2ef30d344c4bdb6bdf08615607967e5cacb804c0ca7', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118544, hash: 'f2b92b3aee25b31dd1ee204e7aa316bab072e5e8fe99438b572e30874533b95c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121015, hash: 'e6838467b47957bbc65acff6e91ef14f0583fcee2e85e1918eb85314705d2144', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119427, hash: 'e3744910f2ab8ab2b1b57481b007cf44960fec9f14345906ee1621565ea97f7a', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118621, hash: 'ddfb14bf84ad6281d149deda3f2a37f5df2d7f272cee7ab2e341712b357b4d97', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124269, hash: '991335356ecc65791cb7da82e91df98fa72a0d0c525e2a635aaa37307e0e0ae0', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
