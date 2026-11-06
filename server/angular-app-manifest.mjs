
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
    'index.html': {size: 111526, hash: 'b7182c23286810630ba1f371b0fcdb169c499124fb776dee40eed2d8f5698487', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: '7ec6144b7e57f61a8bed195f853a2e2eda510fe5642f2ed1edc8506e41d3ba73', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 96881, hash: '6e90da78959f2eccca7eb006eabd9890447802d6cfd934f01ad27c1a72435a8b', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: '2dbf69907ad23865be6144744e654d5cf0fe206856dcfd328f299b2421f323ec', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81491, hash: '6ba466543afcd31619c28d681be49b74848e935a215c8375bc65408af5383a8a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: '672fa8fd4e0b382810268e0770896a750eadbddf84567e046ad0a6cdc58e331c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '6ed30d55ea7eb3786e5847dceebf7ba377fb8b3432bbc91ce00c73f514c0ece8', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: 'fb4e4d15b80fa033a031bf8a16781e6c55fea344c4fbc451541eb4b49ff12938', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '41cb8ca6c79ea61086e83289b6f0b7dcfbed8fae75987920c94a4e52232d4972', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: '1a6906eedc4359671fc299459c8872746f24ea25b67bd0f8463859fd931e7651', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: 'e7480118db7b94b704d6cd8fd212b73304d302cfb2e539cb0277d14ad867c175', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: '77543ca5b3e849e1eb445a5f9e1fe3448843d9676c88cda10533cad8b47c0fe3', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '5e44dd217ad180e2af4057ffb1d2093423deecd291f4a55065dc3c7a19c48b3f', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '945469ed8e2a634524f768ffbae3153c5da68aca1b5106fa3eefdaa0a8597e52', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: 'c94a8a3208ef318919253f421fa02a9599af2fcb6a4a5e19cbad28f6c27546c3', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125046, hash: 'fba2898057b6880407ddbd798d8d32d0fb2a1e827d6b88f604fb180babec09b6', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124389, hash: '690ad03f00eed951f61973110d2a9c9b5fe1bd63d85a76d13e511101e502e2d8', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121511, hash: '485a5bb5fb3d3a7d34ddcc1ba574be93dd6f2adb569c6dcef4a5561151571037', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123064, hash: '7dfa320b9e528037fd054895d4b5cb7bbac945c8cfc4525ea6e195b90a07be1a', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118302, hash: '88e251f29f5cfeb8b2d43f4426307339b22aa94f3ef0d293e04394cf5eefc7f2', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112763, hash: '93e3d931133e336a51ca1987d123c16ad891c242d0096ccdb382688189b5f2bb', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103496, hash: '92a3c3e8321a358d8c0a778392d99ea72a0bcf4faa06b3aaad9f2fdfdb8da3d8', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105937, hash: 'cc475bb3137819ed688309506a9b8033dcdd5d567c223a17d5124583d2ed7083', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114758, hash: 'ed7514512be83c7bf08090155ff21d632660b37c0823dba403d0090f83d0fefb', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 114539, hash: '64d68ab620af041a51e89cebfecd642b39989d61b0c312aa7e5cc8c0abccd07a', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '0eee941e56637b8db920d700327c42e031dd8e578d1be70bb424763a828ba246', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '6ad7bca1a8a9d7c1f71e6827323635c20a9b623b34b2eb7dbf2dfa3d653a234f', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '97f719278573b540010d477f3aceab45a257c069f853d59ef74000f67c6534e3', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82335, hash: '5fd659bc36d5c1d4538346572baae69f9858c4c030f6a2277a7ac4277ea5d47f', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87970, hash: '216a850fa132ae9d90e6fdd35ff7dfb9f369c00f8404487e86a97b4300132b75', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87747, hash: '1980e6319bc0468547caa159d5fc0d27387ca9c09b667cc8e5f16cd0fe0e0a89', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70541, hash: '5ae77036481c455bb8a6272366199ed34d6917797a4761e6aae8ebaa4b80b56a', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96538, hash: '33b95e08511ca4edc36208c8b752070bd88aa005e3c99dab975cceadcb1f3e71', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70019, hash: '5d895e17c3c6ca87a01cd65f553ad8eafb8e0d0ef80607d3ba927d892748dece', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118208, hash: '31c9e5cd78bcc86102138318323b3b8d2ce2b2930f0fb286003377bcd11e2a35', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93935, hash: '6423e6e631af5b362b212878160b8e24905b124efb9a252f27e69b86a3875cf9', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106993, hash: '0c1353179ebd5a260381318383ff8574f98629ed6dd342f14d28881ada46d497', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94505, hash: '82ddfc4128de316c4fdfcd9554dbd71b0c2de595c10c20cff8fc7b180f54c7d1', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93679, hash: 'ba00fcac89ee5c3fda46d07c311c92dc157d9b74555b3a72aa87e18577f7ef11', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88116, hash: 'a486efc9889d7f266e9503d3951825d438d428e4bf8c5076577c525940f4f327', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82522, hash: '88a50abb7a1225dfb3a76f0c5a59624f6ff84f2e0eafe52c8748c239c2816395', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104457, hash: '122838b3b570097e2305a705c6b82e7de0a1b8077ebf56ddf649bbef52fc14f0', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94496, hash: 'e4b86aba443e947b006081f8712d2c8ef9da2c730511ef988463387306bb8347', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94417, hash: '10ce52226fa4c06f029da8bbd1c142d8ea375cdc9f035c55b8cdc8222f5afd31', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102753, hash: '801d91d8667e7e6667c6101725de64b52bb9c3262b854c727498400f32494193', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106839, hash: '5206a2281be91621b45581241a1d7a1adbe3cf5999e785e3fc659484034cd038', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 117673, hash: 'd0bd8fc9b4eacb847dca966066bccf12a7a293e61e9fdfd71efae80d15459e08', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111620, hash: 'a0efb25d76f110ed0f093652fb0cd6eb31295f4d7f6e78e440158c484b07d7bd', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '856046068fb8a80a6dfaf1e3b055a2107f350e05f1afe9494b02ef21ec21234f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118548, hash: 'a2705c63f8b5fd540754c4af213506b3fb7f5742ce8301a82135ca39ea259ab5', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121036, hash: '54df32f3f090693043938a10cb7fe3dbce4551c1a437bc7e3a37bb7ec05a4168', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119433, hash: '6c77fa30979f898c28370d4397ff147c9d95517f4de5f3e547863072c6d13fa2', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118639, hash: '272118a5a71fdddd82c32d51ff59fad4015d3c507d39591e210b42088b701d12', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124543, hash: '5b1144cd5615ee348571c2fe995e24983f60db773413d7f9629b4f28e42baf1a', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
