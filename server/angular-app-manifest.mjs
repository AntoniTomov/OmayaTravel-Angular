
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
      "chunk-_kyuKIuH.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DLCrjL0s.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLCrjL0s.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q4mILkKx.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJ5jq5m6.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CHYbMVIW.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDPMUAzG.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PKeeEDyV.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DMyZKY08.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-0j1jrL56.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CU9l0OyJ.js",
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
      "chunk-BQZMON4c.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQZMON4c.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQZMON4c.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQZMON4c.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQZMON4c.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQZMON4c.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dr-uLRqI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dr-uLRqI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dr-uLRqI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dr-uLRqI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dr-uLRqI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5DKwgXZ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dr-uLRqI.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5DKwgXZ.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CGpXMiQy.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-DelAvN3t.js",
      "chunk-IT7Jnk4T.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSSCgzfK.js",
      "chunk-CGnNJ2Lz.js",
      "chunk-BO7_ad5Z.js",
      "chunk-IT7Jnk4T.js",
      "chunk-hc-yyIvw.js"
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
      "chunk-Dz61_mDz.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'e36552eb81100331ddb8c60501b4de21ddfeaf7fa4da737dd9feceb312e4f885', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '48eeba047ded34d67ae63a0f6987b13026af5a7ca5c06bda1dfa63a2d5f51587', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108286, hash: '84fbafc6d3ded25a45ddfb99689ca92c483b186cbc73d487a0b5397aa72afb6b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77146, hash: '91188d4b81964aa2cd1f76bbb30b8c313c7854c420f11d960b1ce3e735441150', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87497, hash: 'f7dec2095f209d6f09e57390a470de410085f9e343a710bf76164989026c46f4', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64429, hash: 'a13ca6eee4eebdc332bf6fa48a76eb7d6bc3396a167981a3941185857db4fb31', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78518, hash: '6bdff2cf52453955282f070abd32a85c023e70a25289eb9d78229fd1366359de', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74303, hash: '3e0496c806b5ad68d1e211a7a52c01da1c1675ed6bdcd737fb8ec3e200daac06', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73534, hash: '1126f9575a522da94f9f4fa5780d29437bb96e1fbf3aba4dfa0b9010e4ab357d', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71644, hash: '151a6db31040296eb970f5c0652b698ddc8ed82dfba30fd5fa4508f1ba43cca5', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64399, hash: '5ffcb18b1054011f3a23d0ca791ce2a16af6834eb9c6852d8030756ecbedf916', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77508, hash: '3336d2bf2726172f27ed5321e0aaeb2d2bb7648addc1084c9208b42a2d346b36', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76709, hash: 'ebb908e26cc89ea583f07bbb3d79c09fd37268c83230311bd5bc434bad9ce5e1', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78753, hash: '24300a1a1e25c04b1059730d8df8b2b030aa296a1d838d9cb22a1f3d121da47b', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114779, hash: 'b7ee66ada1f7a3f8f1a8483abc28c2d70d3767f4dbf6a6d8f785111af498918b', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 89636, hash: 'f62ab66e16e93f3a0679dc5f0412e9dd11d10089ad51e07e877084c89d666f0c', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 101811, hash: 'cc0afc84cbc558b9e97d2e300db96f953d8e73da075e221286e2f855fdac8eea', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 89706, hash: '2191955d6d48d91bfb7f4cb0b5269bfdec4c59593e63c23fb1514e6454453a3c', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 98185, hash: '69388814c2d851e4759acad2a39dbc33ad6d9325da93114713b902e261119d20', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 106241, hash: 'f8a38274242511b2b49d0e40e5f792c96acb57360735ef52a8bd0d46aa7edd03', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65229, hash: 'ecf89feb77356cc3cfd58eb2d08d8088023113c04f74459edfa8ca743de41d05', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64413, hash: 'f14f9f0a1261abdef5ab68badde4edcdf196b363ce3961d6ee86975635fdb420', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110840, hash: '88a6dafb43e09b01f5739ac5e2082e7ffb3a3eb96d31fcd4d92613755fdc81b0', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117470, hash: '5fef5ef4ea3e96ce35c9cd2003228d41ae526604825dfa197ead6449e9fedf32', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115882, hash: '6a7977ba2fff6526625a94c55783caf6db5672e7519a5397f71621e100b3b471', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 115076, hash: '40b12c08c0053cbdf9b128e14b30575923cc68878f6c1826291de8f68e83a61e', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82517, hash: '2a38e6ba88b8169b1744d8d05468e6e505b0171e9ba72cb5b8b2902555b38476', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78525, hash: '9bacf540979c6edb0a0c85c3f5c7e570fd00d910dfcc14726473ba1a0eeaea77', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86105, hash: '8a9b3181e11a9c7db21dc479e7deb1a4c0005c19601a23e11dfb8360c2799dcb', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84122, hash: '39401c29af1d72a6a207ba8669c1e10b59e2bac345222d709aef78ba765447a6', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84573, hash: '4cc9119752bd201a31752043fcfe4a00486199a5f523e2b62722dc24a60e8849', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67666, hash: '50f74ed1d09b86aa79d6bd35b32ead2b1415928d7f31d41a10ffaef27b9972e2', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89460, hash: 'ac5b5ac836ac22c7746dccc820268881862ef50bf0fa50182aac4127d9a219c2', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67253, hash: '7306d9cfcbc70e4fd7cb64963a4f99e5b2df69c4dd3b773013dae05acef9d782', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98782, hash: '0a3e695b0bbe5bfc046c256bf7829fbccad1b967882b1f314b38dc956c26c0ad', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91344, hash: 'a7c84e7b11e483bc654eb68df2b3fb6598ec06499842216f6c8688237d6f7268', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87917, hash: 'a0f9a0a588667dd74064d00e31c501aa23335f9a16bffe773c37f9bc61997295', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84809, hash: 'a252f5e2a6b061038b7052e1f16bc56f135ac40f71a42af797802709047af69c', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 88924, hash: '15de615abadf97d6c49865a664950ad60a7774d03d0d933a675794a4323839b0', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 107861, hash: '680c891f292efa8c397317520612ef84054a146e252e87b7eb622b50c07dfc3a', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98595, hash: 'f68502db99c1f02c712e7529839bbb546f0bf8b79b9c973720583189e3df1412', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 101519, hash: '2ff65d721d457a1d6beb174e9da5a455d8ff10e79f91d5109105d28dd11d2a84', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74376, hash: '47c873543a02cd0e4e3414822bfc18332391e0bd908dfc341792e66ff0802f25', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73255, hash: 'b7d66d21875bc4fb54224a8b408d89beac9da27053ae1e0a3e07e8175c1ff311', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79362, hash: 'e83238ee8508b87d69bd91412defb902b48f3016273032579c35f4d6dfa49790', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120799, hash: '1161ccc26158b3e603b8ac463790b7404ce19b1f3af4b44e8a12b87e627f9c5b', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121038, hash: '61ffa79e8af797982c47964af3a35b262baf33a70200dc7262dd4f10dc905f5c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120680, hash: 'd42bce1e078fe7f461404bdbbc3daf3bf1a1e16478ecb9901a3c66461460227f', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117988, hash: 'c62075af3d9dd400309e34cfba3d5f44b4f11d8cecb93a715cd3b2c91deb21af', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
