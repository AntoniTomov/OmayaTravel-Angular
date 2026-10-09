
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
      "chunk-CmI3yVar.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-RxwZ_8_F.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RxwZ_8_F.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGiHxaKa.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H1x54LiO.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BeNjK6dv.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-txyvDrqc.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HGOA-Q8s.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAYVv4YN.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CyI86Yrv.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSFZOKs7.js",
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
      "chunk-BHW9MwbE.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHW9MwbE.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHW9MwbE.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHW9MwbE.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHW9MwbE.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTzrAcBK.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTzrAcBK.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTzrAcBK.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTzrAcBK.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTzrAcBK.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BViN4FjC.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DTzrAcBK.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BViN4FjC.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-lZoXZz.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-lZoXZz.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-lZoXZz.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-lZoXZz.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-lZoXZz.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-lZoXZz.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-lZoXZz.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D-lZoXZz.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-D-lZoXZz.js",
      "chunk-BxlJ5OiA.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYhKXDNp.js",
      "chunk-BrgrEaL9.js",
      "chunk-FD6xujWo.js",
      "chunk-EC4YuN-l.js",
      "chunk-QPGtI2tl.js"
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
    'index.csr.html': {size: 16193, hash: 'e995b5cea633c8daf77e4789c2e53c46e688c6a21ba71276ba298d6e7e10483f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'e896407c2434c3ac8a4083fcaba770744370f1e46fab3a89661be28c140e8222', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78409, hash: 'da08ff6b4705a2905526bf946062065c94e0762cf8461a4b62ceb01873cfbba7', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74194, hash: 'c8fcfa4ae7e0d62664db7f1bb93c0e02fb6053a0d7abafb3dd00001d2dc2586d', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73425, hash: '6a1eaa869dc5a128e276a665b656be06456e21e0fe45909bcca65056e039afdd', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71535, hash: '07691f61ebdad88af8e2e333f0bb7d823da1f016e8968a426dbf4d9cd62b0ee9', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64290, hash: '3b41dfcecdb86aa841e20f0baf91172442fa6d55c763988b79d14d25db6895ad', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77399, hash: '5f9851cbfc31522c4a95a8ef125277902748f6d9e6fee3da00190694413fa3f0', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 75100, hash: 'a6a324a9e4bf3ef2efdae5f22a0c8326c8de254753ca87c1ff5554a54c435fb4', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78488, hash: '4364f4b2d3ab21b85562bdbc089308dd7690cbcf4716a9d350301982172b74d0', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 106253, hash: '53fab550fd3d45699f6fadcfc81180233a08696ab86f0ff683d97dab135e3b52', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77037, hash: '59870ca5c3f06a59ddfcd456c10417426294d6ff1734a3d640b7fd085c2b547e', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86366, hash: '1e0a81c52e3ebb08da2dd334882acdc887f1a73c1c44b7e0706c3cac5a193d60', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64320, hash: 'ab25618970630fdf59d8ba22150da95ab330f2050e47f747138d28b79053b3a5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117338, hash: '87f69e2c5d469acabd348b625f246036b7e637f090120a94a43fda46b66a6917', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113947, hash: '795b31d75f7d4e5d97328be76738cbeb263b3d250739733b16fa8302bafc5ced', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120667, hash: '37ddc816303e301632bd3763d53459ff60811e0e217a41d4cd39a1e0337128d8', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120906, hash: 'c8e7475c4037f6460735972c03dc1b8350ad891a989d8019e784870331ca781c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100585, hash: '895553db2faa58e31f5e3af645205b32afa89c5d081d19161b855b9164ba3264', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88639, hash: '3cf6b7ba706e6ea361c052338d9c1d6cebb0023b474f742d089157fd04f6f895', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87863, hash: '0ddb63e8a6274404cfd32ddc9f865d3b88e67f2d9027ce4128610c7cf3e0922a', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106720, hash: 'ab66354de4bd0eb2695fb532690c43e4f21fbb4fd9b97d57e95b34f22e4f4d33', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64304, hash: 'c61b703f38ce38f6ad52691e1fb1bf3ecb91da36da44841ef400506f111d0b9b', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74267, hash: '9412abb9396d9284199662986cbb64cb5f3b81ca02c32cd5ab50821ee0f2a204', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73146, hash: '3cc4b7c39577f63643e8c68b557a4c0ba5e46eac0d48c12b288e8e80fee24aba', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79253, hash: '3c07cdb666bc9de14f58e87e209b2a506b425300605d65f354e364ca8bb635f9', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89730, hash: '61699248a3d71deff032cc7a58c8f96a43a5ba6591bb1f613fe6d30a02da9c60', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87795, hash: 'bcc4e5bd0a9a127f4b9db0722ff134da85bae01df3a4a6980093b3e5606b4794', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84687, hash: '05c27cf25d7d268f49f0ada1aff5cdca3f70fff5d09da0f91cf1c207b9f15759', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84464, hash: '4b3c3c8c93deb9efc3320ffc4e79e654f0ec00030543c35d4aeea4bf43beab62', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120553, hash: '6f69654e27fefddbe65775d0500122c0d4d088b94d3769fbff74ca8b51a4305a', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117861, hash: '289109093b16bd3750fb7bcd958eaa6a6512f90a025b08690aa965a169e28631', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114656, hash: 'f3c60efc5eae1a78c5c9259ad31657866061f34abbd807fd75b15efea25679c4', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88561, hash: '98e59a69fa371331228eea0ac496fcc92d82a9151e011b5876f6f7195296b095', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82297, hash: '120ae216df3e898c4ba1bf92689756184d8ed8e051150f3bb982deb652238d75', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85877, hash: '720cd245e28398b0bb16e5dc26ebc63996c0fe71b276906d40507368cac7b603', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83893, hash: '2bf610dfdee7eb9d6651e2e7493551b861af196cb5025d0aedb191a674858ea5', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97568, hash: 'a22d85907743149bed88ad0b24a8501cc8499c8692f96b109c46fdede5aa755e', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97500, hash: '2666d78a0213b08443bf32d6e4a33f39f7bd19d4e4de378ddfd91d0f7387db6d', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100260, hash: '65354b3feaddac91c17ec8d5add780dbbf466faf8273854c2351762236da3fa6', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105102, hash: '3c0603c2db160b689190c27c2dac358f2bd3faf04f96386723d422a3fc32c5a4', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65124, hash: '732d503f53b78fd3ad00e412b4cc3fdd3e5134dd6346daab15cdb73f7eff5f7f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67592, hash: 'c06c8a058ef727bb274f6a7d5b4dff8c5b2d18069059f4f81721c70d27bcde15', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89371, hash: '3845514127ae76aff3464b2f1cd650676db98b0b0bfaf8c3969d47b6e4641fa6', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67152, hash: '7edc6b466a42f3d5e8623bf34feb345ebcb0368f32d3d20c5b09fcfed578161a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109719, hash: '9d3b2afb47da1e1109c8b5fe69e812daa717a261803356d4c1b7d813081bd72b', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
