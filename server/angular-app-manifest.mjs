
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
      "chunk-DRnk2hxG.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CAFOL-e7.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CAFOL-e7.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BlJDC6vU.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ah6MR1.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CNSi7J99.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LSA3nbWS.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D8XKj7gz.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0_IwYYq.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BWqTggzN.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ccw8YzoR.js",
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
      "chunk-B9so6Cy4.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9so6Cy4.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9so6Cy4.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9so6Cy4.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9so6Cy4.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9so6Cy4.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9so6Cy4.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVGbGnbU.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVGbGnbU.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVGbGnbU.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVGbGnbU.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVGbGnbU.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoIwotnL.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVGbGnbU.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DoIwotnL.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CdFmbOmc.js",
      "chunk-BTvEFo4R.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_ouSBHM.js",
      "chunk-C_8QSwij.js",
      "chunk-Q-Glxb8T.js",
      "chunk-KuA_vHp2.js",
      "chunk-DeVH-shO.js"
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
    'index.csr.html': {size: 16193, hash: '53d5d787d606fa279960e4e6929332f6f19bbde4464bc81db3395b4de9bba067', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '11c4f569f8836396c04452f00c084675ff2fdbc092a9f6cea1be3beba19f6dab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: 'bb748fa2964c37bb5a3157165bbadda0c2079b9802f1992ecbfdd2cc7387430d', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: 'e763e468d8ba27e22582ff5b2587e3752903fbb4246aaf7610a89cf1657f0507', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: 'a348c728b97e5096a37e11636d958adea7f2054043da6afb9e4ee793e88d3743', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '1a8fea41ec1b844141e3e8930b4751238d4d3145799476027ce319f0a7212275', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '0afdb0dcb2eec130e86c41f091a7a4ed181721b8d0f3a509058e4ee482f12dc0', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '17d4d10dba8a6b7417dfce8df46215eaa899cec4c9fce89accbe2fe196abc37b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '62d57c6fabeb96ec8eec7a9c271df57e83c298235332aba3cbfa60ea8e06a32b', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: '092785cd1cb7728b96132c633df704bbcbfa3ff4781d4a0a22a98071bda62779', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: '2c18ceab07b457efbf9a57f01826e693e561b90e3ab53117d676c3de920d68ed', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81532, hash: 'd6e0a5774f18d0ca94acadf3ec91c42a53fac49b9dc5bf50f3d858f4beb07c9b', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: '19b42b949d4677326eb87320637ddb4c234e7b860a87e74947655b40c07a9d10', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: '7ff03a76aaa23e848cfab379e096d70c343de4b8cdcf0d8fdc258dffc297b086', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '4ea15c706380c6ed5844b646c9d6638527a6d0d3bfc2a14700e4203d70da2ae6', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '98e941aa2b5cee081a35a6ccf1747901f992a596d40a4be6c9c2ea93b37a74e2', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '012824eb482ce11a129fac57039d3b091812812b3742e6419efb14a27a2ecd3b', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '50c8f7ed2beac83d5d841afcfdfdcc6fd0527fbef07fd68b4518c28d06afbf3b', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '361bc58559887e963cd222cd9fc9e8916490f19ad456cf512afe082048c33618', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '4531245a63cf1983e0a099dae4cc71c831abebbb7d0b08b963d426e94cdb3c65', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82360, hash: '5249e040e57df8558abb0480f43042b078d2bc77545aebecf06288de458d856a', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125085, hash: '185b6e539be9a7e4382ae834333fff56e7546ed54109b901df1bee359ff8a551', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124428, hash: 'd68bb9fe77f3f9fd09eea97b96c82e56deea5fc72167475043f7af29991dac23', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121550, hash: '31a963f8f56b0f6f2c3aaafc1303108b95e7e610b687d7d2acfbf498e416cc68', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123103, hash: 'f51dd77289e8bc6b34879b65523a05affe598feaa0682d33dd4e154328e7e972', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118341, hash: '4b95075379e3003d9832bc55cc466c6a55895114d8e913cf5062c950c448c2a3', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: '885ce1e1e43b07f72df0fea9c169fd43580af6895525a241c442d726629859c2', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '10c74c54f5ffc30964c55409d5563b0be3be6eacb14874221119a713156eb375', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: 'cc73ba1f27b675ad2b15c2a5ffb8582f26d5ca9b4a9409cc9bd155c03971bc52', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: 'cd331b38405ebf2514b805882942db596838520361bf7b960791646f0e7544a9', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: '076d7d960a37cf1b9161ff3c33ac8267899f10e4c4b1bdf9297bf8a5e1765e0d', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: '6f50a9b764650703b0969e382b18111aa8c95be4ae7b49f36e7e0579a66d82fd', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '5b6d236949d76b0bd5a0f4021ac7f25888a92957ab94b0de67a3d82e2f97f5f5', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: 'a27876293300468f04fb2f482cbec88cf1812e293a990834c8662469f3147a3c', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '75705b5896374162a56f5b4008ce09ff80dbd9ac1f575df785e07f267dc8faad', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '1335a31c74530863c365270bee6404967c80d2ecda18e9d1d0850038c3132932', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118218, hash: 'cfb91c10578088447bf8653408464cd9020c41de72cafb57f4f9c87fa25eadf6', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94652, hash: '760266f4d14bfe0d5540fb528936954bf586e29f4f623455ae4eb22cae92ba6d', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107750, hash: '076004d138098396fbb904f0a0c1c3d77c6569333db02a65156391baa21825ca', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95225, hash: 'b314d7a6f333542fe0fc179c15a1b3a3c184e1c0f1d9aa7fb364c51fdb64875c', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94393, hash: '1908d7b8c5e34d4de5e3ae90c1391598116e4b072aa5e7725cb5115ec8ddf36b', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88137, hash: 'c40fb898229df0db464a45564e71a9c1b25de3e806fc371d6a3e5875657db340', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82540, hash: '25512c50302f6aa77dfdf795af3b6af7627ce80190eedda198bf152c6e20de7e', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104478, hash: '33ee6857f2842c26c14a84c55176ff2c6b20998fb178e308ca49d734be989dd8', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94509, hash: 'e5eeb7d205122678e9e219b032a475fd751bd3da9271ca403e9dff6259ee0086', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94430, hash: '82e72606386b6bbc016787048b879cf9345d00d3a60e5922765dba073693657b', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: 'b1bf006387ee75bf3cf9ceef5e9256fd93a5d32a15e21f18dc7efff3d9522645', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107324, hash: '5d87e3cfdd943c52cce17a549aff724ed20743e3580130d76d842bd309caf9d3', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118096, hash: 'c15024628a9012a56a02c224dd53ae37a342bc84b329a86ab8a2ace77a7ff8b0', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112125, hash: '408899322fcc6cbba8f4aa2506c0ce56ced192966507fb5840f1908c0cbe0a75', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '911aef68a356002c7db6ec71075757514b8be38ee26cf562be0f5ea73cb8e972', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118559, hash: '07e121b8c77e1c0e85fe14d6b4eb504bcf1c73448c231d6cfcd4c87becea0457', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121032, hash: 'a8fd62efa7a01f8a5f02514ba8b9e06a5d885a37c1acc85d3ea4b6422ee8c034', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119444, hash: '5353e577df932e7c63e581fb50c49bceb37563c59d79f5b877bf528e58dfef6e', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118638, hash: '70656c0bede792f52482a98b0876230e70cdfe4fdbba51f3e260b9dd8ad79c66', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124547, hash: '555e59c6a686fd44850674d7222c01676f903904cfdfeb22d639b47821804a84', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
