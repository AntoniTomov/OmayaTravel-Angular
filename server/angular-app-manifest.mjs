
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
      "chunk-k7yNg00O.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-CEvPw4q0.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEvPw4q0.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Biop62r8.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BgvlkqNl.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ojj60bPl.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZ3mN94Y.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7SyRCC5o.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-oiqh3ILU.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DHsakHVH.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DiaiqTOS.js",
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
      "chunk-CFnZcq-Y.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFnZcq-Y.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFnZcq-Y.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFnZcq-Y.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFnZcq-Y.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CFnZcq-Y.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DD7CxoKW.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DD7CxoKW.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DD7CxoKW.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DD7CxoKW.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DD7CxoKW.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFvDLmac.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DD7CxoKW.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFvDLmac.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BRSnXYMv.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-D9te6nuL.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXXTEhiE.js",
      "chunk-B0t_DMVZ.js",
      "chunk-DHOh3fMh.js",
      "chunk-C-JKeGuC.js",
      "chunk-IiRxHm3f.js"
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
    'index.csr.html': {size: 16193, hash: '1bcf8f67ed1e958bf1b70cc7ab60f1ba1ac18616ab2a9225b2fe398e65624c91', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'f80d904b85e8e3002c9fd52a7f7ca1f0cabb4e8b5e554d57fe5ef09babe5a9e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78517, hash: '499cf81ef3d85180520c86dc3173a7e00deee8891806015bcc3012d170168e80', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74302, hash: '0b427c719dfd2a987de1b69ea51f80e54e2c0632eff7ee83135d1b5aa9249eca', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73533, hash: '5d6dc8925f193e7047833e9f449cee18af596f2c040d38934961536aeb594a99', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71643, hash: 'cd9d773622ef84a6986c5dcd0a48609b449443a1e73728278a3d60a14931839c', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108277, hash: '684bf204eea841ad69870b106ef4d87edfbeed00f14f30f267c3f64ac301dcc3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77145, hash: '386131dbed16b5e93519a96671815a21992c580dc9cf1b6fabab8cf630d9f8c2', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 87864, hash: 'ff6cd13801cc814e451577db5d063200387754afcf4870d24b4b9ec1be205617', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64428, hash: 'd40e8d9f100e0607954240df56a896de8c482510af47f134050cc0bc1ee4d5e7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64398, hash: '80aba03dc6d4af24b553d83a4d9f4c0e2f28d7ee98fc6cf13f4ba3a6098b0e5e', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77507, hash: '1c50500d13b80e23bc2ffcd5394973c2a90bbe62cdfc23fce3555d0d78f8ffb3', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 76708, hash: '295cee3c96f9060c739bfcfc76bd64a38ea80493d251e0b9b968e983bb4526d6', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78752, hash: '84f7cadbcd4dd0c1a018a7a9e34219e213be0c58a9d5b842edd62f9f2bedc3fb', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109822, hash: '50e8c0e60b5cac2acc65422ca09ef408ce2f4fd4ca8544f3a761e83cdb61d830', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117446, hash: '444064cbb87278e1dc6bc1bd10b606eb97a8ceaae6b21b8649ec7992fdef49ec', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 115195, hash: '8c8f8ad4635808419f383e48f76d076d731a382b915469f90ec6cfb91a32f9cf', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 114055, hash: 'd61e04ca7f1d1e14eb7a5a4eda39ff8363273ffd500a4c8594f1f486d2854881', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114755, hash: '51730a45ca56eefc75f6ee9a3dca1f03f045f780adecef1d84faf5381e486b04', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88691, hash: '8107db284f1d54217c119e9ed1a4046e94e231e07e852094f76399655a471305', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100736, hash: '9de85f8064ce4214bef11f7477b1de37720bde22b8219b6eb1a8dcabec473d9e', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88773, hash: '6651a1db86c8024c8e24f1e47d1608fb5fa0933ca918abd62c64c019382dcb17', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 97072, hash: '88374f26f0d421550dedc37bdebc17495a72817f81e5e27a54f1be01db1b3ed2', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105124, hash: 'd47cb39974b45c83a9a5ec1b1e8999aa9c0c05c95fa043efb9b5fc9bbc86f638', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65228, hash: 'afbb963b95b99d861c2f862e3c2f8af732415e1cab8f91ac153a4f5898062107', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64412, hash: '3650bee8fd5f89dad04c2e04e35e5de29520100c9c3c6433bdcafe31c49638e7', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82497, hash: '9c4879e3bd6de7f8c7b2dff4cf594c7b013bf1c7aed27cb421cb96ff37ec84cc', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 78505, hash: '07aa8153fcb8d83a6431c28cabf3c6356a4c326e67f64a780bd7bc00da798c83', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 86077, hash: '337200da525a220082e2cc13f4ff3acdea2c0e5e13c91f940c63839375805114', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 84099, hash: '71903f43a0d6b667f3d3185818a36a3e6e6dae37300e0712b53af2b78cc590d0', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84585, hash: '99348aedd3d45eeac0711aeb7b93fbbf64464776a17b7309bc04cc4265d26bcf', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67678, hash: '78625821241b0dedc2a53bff93cbd55e6d8d564eb3215bb4af0ae957283db02f', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89479, hash: 'a0b8af6ee4bae375eb55a3d780bd1ddfaaf146ae29e86deb60a88fe2916b6283', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67260, hash: '0dcb635c3c1c4b2887d3db4e6b0a529928790a18ff0d4d46824331e789ab2da4', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87971, hash: '117816baa88db1c7cd6db60cf74d5535df93e1b7cbcfa097081e1d9160b7f2b8', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106828, hash: '20808e01a9a3d1718aa5e174f65f57f41798a7ff4550fac2f1ff917724f9c381', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97549, hash: '6788a8979345698a6009c310be5fe96dc54b6ef72307f7de2cfbc2f08e2c99e1', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100297, hash: 'ded4876a05014c509caab9970669af475288a82cc7e2e3a70e6708a9b4d5ebac', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98770, hash: '7329513fb11b3de7ccf6c0054b268ec86189c035ef9796e8c6cfb0c9a3c137e4', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91336, hash: '0a71d08ac0a037fb07bf92774534fbf8ce5b2f346788e4f328b36c84ab16c932', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87909, hash: 'ef931ba695e6b42ddef8b922f058ccbef845f61d543e528af3af932613376d2b', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84801, hash: 'a7a127dcb848cf9279443442b1534b3b03f911d15c727931620d57b60f73e819', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74516, hash: '16e138c6b4602a7bd9856f623592354760423c643e9449209b997af423dd006d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73369, hash: '0809ba0f997dd739718c11cc960a2d9a1862a1a28159d26795912c552e920624', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79453, hash: '5584b2aa3ddebbf6462b8b0567c8b08d1dd7edba9a32c98c52213eda4a7b21cf', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120803, hash: '177d917ce876c868f487c9fe829cd87193905668842cc1697598efb2526d9106', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 121042, hash: 'd6fdf85fcff67d2a8dc00cac7c047d83be0d2581a271d3a5f971f665519c4533', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120684, hash: '13414ed22d7697915a9b96b3bc790534e34ec22222a1ceefacb902e450bb7463', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117994, hash: '45a9c2d8425a62f29ecfd32e2889e38469bd3defaefb288660e1da878b1f93ba', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
