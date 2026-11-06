
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
      "chunk-CVPVx2Q5.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-B1qBOjRo.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B1qBOjRo.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B3MsjYhL.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZe-YbFZ.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk--8vF_msS.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtJWu-0d.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEY96gCz.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtT7JJFx.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJvB7A6-.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CMCQGUmQ.js",
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
      "chunk-CjZCjgTn.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjZCjgTn.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjZCjgTn.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjZCjgTn.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjZCjgTn.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjZCjgTn.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CjZCjgTn.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUZ8hLkU.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUZ8hLkU.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUZ8hLkU.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUZ8hLkU.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUZ8hLkU.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfcDHBMX.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUZ8hLkU.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CfcDHBMX.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Vy_6Umdk.js",
      "chunk-Sc01hRqT.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-iHU_-AAz.js",
      "chunk-CSKOlTLe.js",
      "chunk-BhQkoyuR.js",
      "chunk-CjCncyPd.js",
      "chunk-AOZ0JxX7.js"
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
    'index.csr.html': {size: 16193, hash: 'c3074fd1ed4d8dbe27be15892c2189f78208cfee44eadbbe6b15f7049d54e797', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '491d3d48a51316cd7d9eaec10423e5228da1befd66dd52d1e1f27e6a062252b1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: '672fa8fd4e0b382810268e0770896a750eadbddf84567e046ad0a6cdc58e331c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '6ed30d55ea7eb3786e5847dceebf7ba377fb8b3432bbc91ce00c73f514c0ece8', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: 'fb4e4d15b80fa033a031bf8a16781e6c55fea344c4fbc451541eb4b49ff12938', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '41cb8ca6c79ea61086e83289b6f0b7dcfbed8fae75987920c94a4e52232d4972', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '1a6906eedc4359671fc299459c8872746f24ea25b67bd0f8463859fd931e7651', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: 'b7182c23286810630ba1f371b0fcdb169c499124fb776dee40eed2d8f5698487', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '7ec6144b7e57f61a8bed195f853a2e2eda510fe5642f2ed1edc8506e41d3ba73', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 96881, hash: '6e90da78959f2eccca7eb006eabd9890447802d6cfd934f01ad27c1a72435a8b', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: '2dbf69907ad23865be6144744e654d5cf0fe206856dcfd328f299b2421f323ec', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: '6ba466543afcd31619c28d681be49b74848e935a215c8375bc65408af5383a8a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: 'e7480118db7b94b704d6cd8fd212b73304d302cfb2e539cb0277d14ad867c175', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: '77543ca5b3e849e1eb445a5f9e1fe3448843d9676c88cda10533cad8b47c0fe3', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '5e44dd217ad180e2af4057ffb1d2093423deecd291f4a55065dc3c7a19c48b3f', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '945469ed8e2a634524f768ffbae3153c5da68aca1b5106fa3eefdaa0a8597e52', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: 'c94a8a3208ef318919253f421fa02a9599af2fcb6a4a5e19cbad28f6c27546c3', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '0eee941e56637b8db920d700327c42e031dd8e578d1be70bb424763a828ba246', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '6ad7bca1a8a9d7c1f71e6827323635c20a9b623b34b2eb7dbf2dfa3d653a234f', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '97f719278573b540010d477f3aceab45a257c069f853d59ef74000f67c6534e3', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '5fd659bc36d5c1d4538346572baae69f9858c4c030f6a2277a7ac4277ea5d47f', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112763, hash: '0e39682cc39306305b5281e55d0c0da97d7fa79873270abe36668ee0cadd8f96', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103496, hash: '666665a75eb8a9c09b7a39c9879b0a2967fe477a5b31063d2cc4ad5ffff19d72', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105937, hash: 'a087200bf73b495c30d31cf936f15b300c1020bffd86a13993599b0bcc5f7437', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114758, hash: 'aaae7dfeaf424a0e020e458ac85020960ab68d66792565368cd57607b4549e06', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 114539, hash: '741339727a22bbc893df621fe790af8a059e795c466a28a7a6b98723ba1cd062', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: 'f96dab0a610b9b912d419b307042c1a508f7bd7aa8193fe9b3e1a9658bfe8c8a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: 'e7ca234d1ab35a5e2737a169448676fc2714e7be3cdc4a7095cbeff986749b28', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: '2e74ae05b51ce20ed355658643793879c1d961baf436a5660f7f30b19e0622de', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: 'e671b9a56adc06144aaabbdb8e10329567c5bb02f80c063511f07ba81ead3384', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: 'cfcafb8c45beb0954ab7a20040722404cf2c312d3b261338f1fbd868eecda738', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: 'ed223da6ebf1e17e33725eb25cdab5b79e1f780d6d7edcb03ca2e6a6b4476893', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: 'aa42ffbad1c98bba32accc8d9cda78b98ef71e38aafb5eb5413ef67e74da0ddb', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '8d4b08beb2be32b0dd92ec871b4deec2f51c165a73c3021dd84133438616da35', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: '8824eeb283e429933159688d69cf06d940a9cd1bab548f66f17ad85cc4c1f0d7', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: 'a582a7f9283f32b27771f72d1ab2a44e37c48cc3ed895ceaa46b7254d353107a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: '5c5ff2a03738378223b36f83ae6cf354b3d3a489518b6329ab0d2547ef6c50c2', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: 'd94f46a04b3c19371ab7e745ea061fa01997769f5ad2bf5b2f7800cf868d9fe8', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104474, hash: 'd41b02c15c0d9af606e38d9f4445776cd64b344715974bd924539d750ad3caa9', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94506, hash: '0c8ff48fc93462afb6f3ea4ab2db8ab66b1291f6b796659eeb94798332949749', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94427, hash: 'e4e4ff0887bb31c067ce2ec096b1d95aba32f7fbbe4ca542e5d54956016af246', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118222, hash: 'e9b3845fee777ce5fa1b5cdae6cec0e8a25c9a796ee046f87bb8980cb7fb9dee', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93935, hash: 'c63c96ff2faae92a38e0ea6f755f5146c4becc2a0a952380d30f723c43cdb18b', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106993, hash: '3060bdb473750bcce9e53d2f2898ac78754bc1cd3bccb842a4df9f98878eb5be', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94505, hash: '9802bb5e8f9ee0497e4003717c078816d814b045699ac3d73252e67037f1222a', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93679, hash: 'ac311ce018aad06708e66c1b4240ab9da945b3f60beb70048ce47e5c9efb91af', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102596, hash: 'c010aa7a2db814879b20691e7ea652cfb8cae57a4aa7fee68cafc49d5d126c41', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106630, hash: 'bf2b53e285662cb4bfd0e815f6d345b5c18960fea15df02301dfc2ddafb7c0e9', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 117390, hash: '77c8fa47f0bf18b27dfc4b344f06893fa33b5d1e272c01a007a39d6a9cd51ce9', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111426, hash: 'b6c78dfe02ab994ba820a520087ed76ee56ccafe2ecf0c11d9e79514c9a25602', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '1ef666f55c3189cce04341242055c522f18cc3092231ecf912108090b9077bc8', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118520, hash: '5cdc08215d0f9351243769bac708c83820d25b9eae86ad796a75555e5b8dc0fc', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120993, hash: '4dfa6c9592b08ec338b70d83b06e8eb14e68d9e2dc6ebd5b22859fe3ef88b14c', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119405, hash: 'cca8139cfa55cf0593106555a42256bf8cbc32940aa576314c9c4215d6fd71a1', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118599, hash: '206ee5ce95b20ac420b0a2502b4cc3006f27545a5f40bc64d4a76626a739883a', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124508, hash: '7d0b51e2c2be99f38133731a2957b88a5d6b6cbfc69aa2e1d5080eb0beb9b249', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
