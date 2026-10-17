
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
    'private-tours-your-trip-your-rules/index.html': {size: 64399, hash: '5ffcb18b1054011f3a23d0ca791ce2a16af6834eb9c6852d8030756ecbedf916', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77508, hash: '3336d2bf2726172f27ed5321e0aaeb2d2bb7648addc1084c9208b42a2d346b36', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76709, hash: 'ebb908e26cc89ea583f07bbb3d79c09fd37268c83230311bd5bc434bad9ce5e1', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78753, hash: '24300a1a1e25c04b1059730d8df8b2b030aa296a1d838d9cb22a1f3d121da47b', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78518, hash: '6bdff2cf52453955282f070abd32a85c023e70a25289eb9d78229fd1366359de', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74303, hash: '3e0496c806b5ad68d1e211a7a52c01da1c1675ed6bdcd737fb8ec3e200daac06', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73534, hash: '1126f9575a522da94f9f4fa5780d29437bb96e1fbf3aba4dfa0b9010e4ab357d', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71644, hash: '151a6db31040296eb970f5c0652b698ddc8ed82dfba30fd5fa4508f1ba43cca5', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108286, hash: '84fbafc6d3ded25a45ddfb99689ca92c483b186cbc73d487a0b5397aa72afb6b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77146, hash: '91188d4b81964aa2cd1f76bbb30b8c313c7854c420f11d960b1ce3e735441150', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87497, hash: 'f7dec2095f209d6f09e57390a470de410085f9e343a710bf76164989026c46f4', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64429, hash: 'a13ca6eee4eebdc332bf6fa48a76eb7d6bc3396a167981a3941185857db4fb31', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 110840, hash: '32b94e11ed3c178a5433b903762cb3430766eaf61e18680251b9f18970979e28', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117470, hash: '15109cef8bc30e0557778c2cb55100e79cc41bdec943b1420f6dd070c907728b', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115882, hash: '7fa200c2448d73be8f254db7cd08503d0868bfaefb920d97a8497137041185dc', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 115076, hash: '43ede781ce9dbfe8b927d45b3238ef6643d968f6d50539a14725d899ec1e5334', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114779, hash: 'b7ee66ada1f7a3f8f1a8483abc28c2d70d3767f4dbf6a6d8f785111af498918b', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 89636, hash: 'f62ab66e16e93f3a0679dc5f0412e9dd11d10089ad51e07e877084c89d666f0c', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 101811, hash: 'cc0afc84cbc558b9e97d2e300db96f953d8e73da075e221286e2f855fdac8eea', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 89706, hash: '2191955d6d48d91bfb7f4cb0b5269bfdec4c59593e63c23fb1514e6454453a3c', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 98185, hash: '23b7ca3f4195740e5a416deddd2134959f13f12a2f93c5c2a27126511ab3a5a6', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 106241, hash: 'cdc682c7decaedc30b546917250956de0c0917cfac47e1d31f0a7bef6390d767', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65229, hash: '120046726847225b40a7066ef14eb0a096ff4fe85614302d389fdda1c3f1540b', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64413, hash: 'a175ebc6a397742cd6be21f650bdb3d0703ed2cfeca065c3133a7d01df77579d', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82498, hash: '160e833e713967ad78987035406c39dcd98b6ff45e030c37e14227dfd246cab2', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78506, hash: 'd1f964a545fca94dd00984644e43a4e6799109e17535c17fcb131cba4f5c4fa2', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86078, hash: 'd7c1b23803b3ff2a49aad520e60a1cc4e0ddd2f2c0d01753489477b0ea292819', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84100, hash: '26074b4526c2091a93eff03fcd4c1a494d58e1d81043b4cc40eb6e0820df1dcf', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84586, hash: '0d8cd652214bc1ae9b03312cc1bbf216bc537467ff9fa58b221fbfe0b6b112bb', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67679, hash: 'e0cdf3c5ce05f9236742460756b6d2cb9cfdce0081711b87f3915684d13408e6', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89480, hash: '6af37d76fc881c221a26245916bfff6e61bdfbbe6a85c35f3e61eadb09ca09d8', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67261, hash: '46e467d6f64b163226513e6ccd9abea3734127f7152d43102c72a3ae4474a8fb', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74517, hash: 'd3e48d48f99d403d90ddda7b91b5898f9709b31c60eb3d4d936a950fd9a2ae6b', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73370, hash: 'e04cbb030f3ae77d7a639e34e1ab48cb96c015fe658fe79e167a7fcb39535439', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79454, hash: 'cc4c58d799999aeb4d59f7733367a1a1869aaf62b3219a4d9af61f30b183c744', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98761, hash: '8bb597a1fb3500d1f5d91421840bd2c5d4eaf04fdf5ed5b135aebc67aca57224', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91331, hash: '945391973451ccb15969c1d76f82fe47428606c466e55327d2324f59813bc80f', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87904, hash: '1a97c87b0b28eab4d2c242c2d3cb52cbe83e2705ae7d3414d40f752742a34fc4', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84796, hash: '52e4a3cc3d571cd00b4556fe8361c6e6d1c9d64b32ee6a8e8ff840dc3e92f558', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 88899, hash: 'fe6ec0cbf8c7c342d49b434eaa4fc6e6544b16d490b8fbb1f454f7d8ae9c9c32', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 107824, hash: 'b3e2a9f338bd0ea4cafd65119898bb51adcef00fb83096149407c5fe6435e06b', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 98548, hash: 'ec66e31eddd9c3139f2fc107ef9e776d8bcb29f16549f338b49a15c9b2f4cfe7', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 101482, hash: 'fa21fad9e0731573b0ccfddea90617b93487707dbf122d18731436138861d72e', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120799, hash: '1161ccc26158b3e603b8ac463790b7404ce19b1f3af4b44e8a12b87e627f9c5b', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121038, hash: '61ffa79e8af797982c47964af3a35b262baf33a70200dc7262dd4f10dc905f5c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120680, hash: 'd42bce1e078fe7f461404bdbbc3daf3bf1a1e16478ecb9901a3c66461460227f', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117988, hash: 'c62075af3d9dd400309e34cfba3d5f44b4f11d8cecb93a715cd3b2c91deb21af', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
