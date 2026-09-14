
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
      "chunk-CWU6QgDu.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CIUTPdd4.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CIUTPdd4.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DcbqKHhC.js",
      "chunk-BN-6EqL_.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFvT-Tu1.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BgdyqtZI.js"
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
      "chunk-SakIF20v.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-l_xDZZxY.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CPbrvNN7.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UHYMOSfz.js",
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
      "chunk-D3RACrqA.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D3RACrqA.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D3RACrqA.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D3RACrqA.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D3RACrqA.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIT6wJ_l.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIT6wJ_l.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIT6wJ_l.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIT6wJ_l.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIT6wJ_l.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DX0zVNLJ.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BIT6wJ_l.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DX0zVNLJ.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cdw5RP63.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cdw5RP63.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cdw5RP63.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cdw5RP63.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cdw5RP63.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cdw5RP63.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cdw5RP63.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-cdw5RP63.js",
      "chunk-8DkVz_l_.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db-CfTGG.js",
      "chunk-BN-6EqL_.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db-CfTGG.js",
      "chunk-BN-6EqL_.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db-CfTGG.js",
      "chunk-BN-6EqL_.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db-CfTGG.js",
      "chunk-BN-6EqL_.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db-CfTGG.js",
      "chunk-BN-6EqL_.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db-CfTGG.js",
      "chunk-BN-6EqL_.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db-CfTGG.js",
      "chunk-BN-6EqL_.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Db-CfTGG.js",
      "chunk-BN-6EqL_.js"
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
    'index.csr.html': {size: 16185, hash: '8f759f265114dc8ef992af16717af0587953fe81fb22937ca982fb5c15820610', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'a555ce5bf9f60b1b79497504eb87a83a8809784939e1d0893c5763468e295d36', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 68840, hash: '8f5541256c068e4536cedc44f1d838dc59f466fad1f212ab257a7ebd7a85b2bc', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 70981, hash: '221b0861a4837c4171f59ffed8bd6fb2569da82d0993f2f3af816556138d2236', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 69085, hash: 'bf8dfe17e192c004a6b4bbfd4296e480d7689d8bfece56f770e2b22e62c2102b', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 61902, hash: '2ac29ce36c7530bad9b9ec172136ab3603692816bc680c50a5752a966947d882', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102550, hash: '6ca0f0346eef555be5851e0aa5520747e51f0ad8d649f0ac45f552aa169096f1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82026, hash: 'f841ddf7d357da3c199f19b9171bfa5580aa4c664f769e6143319837ebf91592', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 61689, hash: '03098d4d964723aac67e55a11265e12790a332adb1d5789b8577f440d7ec7241', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 75428, hash: '6d20bf6760dbd552c63f31bde8ed6f9cfe1fa4470c9e171dafa20b279fa88846', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 74880, hash: '438435449099161046b190e07dc5a7fb73d5d57de88e77c15ac06f596bb75d98', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 72435, hash: 'c3d56c65beaa23aaa386dd7c715913230e7a550264c954b76151a6dfa2bb50f6', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 73905, hash: 'af2ac060cea155ffd16ed09d80bd9034865d55d9373f52e328cf3eaec7ae9571', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 77707, hash: 'c3d0f0423422f7ef7247c4c69108a7e7877cb1a82b9e543ef518652526dfbc14', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 105021, hash: '3d5ed1eef7c863d720424e11833f75a9284a3234a42583b35201ff08e84e4549', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 114869, hash: '6b0a9422013a5ea5b5fb60c402748b87d5769d76d45505dbe372e82266dc929c', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 115108, hash: '00d7100e8c561f9f1aa5319f4eaf6b948930909d34e2cf3b5106343961a4c43e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 114914, hash: '3032a391d9212de7cd9c2275f98fcc2a45641e7f104baa5ce9d6c20c682e0825', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 70988, hash: 'b9355bf272c5b3b00cba1c87491506867ea4e506b46772abd5c7786dd1a6ebae', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 68339, hash: '6423c48257ec78bc1864203b365a84823ba08e03ede480b346839f442e78857a', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 76725, hash: 'e9d4ab2426017a4872470a9a01df4ae58a74415a6c08d0585e89089ffd269622', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 84072, hash: 'dd803b692abefccccbc9b4b3b9fe575c8aab0e352e88d55de720e2cdeded0b6c', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 83851, hash: '348a3793f4fdd2a06ebe70671c1f98609189d547be80f2bf4922fba87b7cbd54', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 100667, hash: '9e6b3c27bb83baa430abfed926905fb85d79b499175afba25cbfaf1c7f90c6e5', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 90485, hash: '8ee7d463f18f04559af468104a013709690fcd35baec7505f3ba64890ab9858e', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85448, hash: 'a249331a52c5e2612c8839c589ed30323bf315bbc1008fc1102404e43ccb0e3a', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82342, hash: 'cb24bd25db32cc4b90ad7688200d3064b81fe6dddfe0ca233b85eeb96ec02391', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82119, hash: 'fe8382f9f466ba0e09b5c8e82cd0f1b5fa4c83094098113eb9d9c4a19bbad97e', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 65129, hash: 'd67a87f7e7606ee934b00799b780033ce91305538fb648550f1e486edf49d05a', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 112057, hash: '9fba49f59728be2fbff5430aaad89a0b5caf68c630edbf080a4dd1a6b6b8ff2b', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 105731, hash: '91f5e8c62206d0575fcba40db1f6902b7a7b58bd075f31fdf372711927fe2f4d', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 83960, hash: '57eb841a24edc65d46cb155f7cdb6edd6549f99eda3a25046a81cb36c6d192fa', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 82787, hash: '28e53dd163b9918d9ad731d13fd7223cbf29f5680c2ef7aa7b3dbb7dfccbf711', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 78239, hash: 'f84bd85446982493b1d9ee44bc4463ea3cb7c56f2a4fa7e9774857f19e7eaf3d', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 79302, hash: '6ea52ffd76695b560f416e016d68cd6e53c3b48e219886e505d05bc561dbe7ab', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 95217, hash: '0cae7699145f6fd296114020a0a592675f62c02c67b9af2bb4f298f874f37b32', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 87384, hash: '250a70b1123815c99c8f6e41d2ef15ed2d2af2605d00eb5db7e3207754e3e7cd', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 95220, hash: '2e1dccde7cec035d27158e757e15dcd2f2fc358994dc899b955ca02e5f222ed0', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 100049, hash: '3092d73684a7814e9475dc7dc51fe6be6030ae51b8c1a8f6d7fac278f3ed99f9', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 59690, hash: 'e5c8b846634c437297053c7f0c6ac9b9dd0be998401b1ab381ee28da1e4ef7b3', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 61744, hash: 'd37f1aa8e84ac48ce1293b8421331d98d465b3eaee6e1c6157d9a7ceebc243b4', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 86857, hash: '17aa578ca3a1166ec09d11961a2a3b7e0475f31d3ac1447c1fcb1ac0586e87f5', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 64709, hash: 'ae147dddeec4fea5e589a1162ce22de2e5f0c0be0fdebdaa6dbc4973a376703b', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 103888, hash: 'd132c92daf0d8c5e7197d23e2bfddc38dd38eab19846978b3eb18e99be85ec21', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 111539, hash: 'e1890bbdbda8425a0e6c504418b7c893c2be36b3164fcae16e26c9a0acb678c4', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-6WSFE2RE.css': {size: 10084, hash: 'xKIvCOIztl4', text: () => import('./assets-chunks/styles-6WSFE2RE_css.mjs').then(m => m.default)}
  },
};
