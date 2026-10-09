
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
    'index.html': {size: 106253, hash: '53fab550fd3d45699f6fadcfc81180233a08696ab86f0ff683d97dab135e3b52', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 77037, hash: '59870ca5c3f06a59ddfcd456c10417426294d6ff1734a3d640b7fd085c2b547e', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 86366, hash: '1e0a81c52e3ebb08da2dd334882acdc887f1a73c1c44b7e0706c3cac5a193d60', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 64320, hash: 'ab25618970630fdf59d8ba22150da95ab330f2050e47f747138d28b79053b3a5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 78409, hash: 'da08ff6b4705a2905526bf946062065c94e0762cf8461a4b62ceb01873cfbba7', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 74194, hash: 'c8fcfa4ae7e0d62664db7f1bb93c0e02fb6053a0d7abafb3dd00001d2dc2586d', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 73425, hash: '6a1eaa869dc5a128e276a665b656be06456e21e0fe45909bcca65056e039afdd', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71535, hash: '07691f61ebdad88af8e2e333f0bb7d823da1f016e8968a426dbf4d9cd62b0ee9', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 64290, hash: '3b41dfcecdb86aa841e20f0baf91172442fa6d55c763988b79d14d25db6895ad', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 77399, hash: '5f9851cbfc31522c4a95a8ef125277902748f6d9e6fee3da00190694413fa3f0', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 75100, hash: 'a6a324a9e4bf3ef2efdae5f22a0c8326c8de254753ca87c1ff5554a54c435fb4', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 78488, hash: '4364f4b2d3ab21b85562bdbc089308dd7690cbcf4716a9d350301982172b74d0', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 117338, hash: 'aac5ad95fa9ecf4bba06c5511bd265cb110b6cad92b27bfd9cfb4beea7ef98b3', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 113947, hash: 'd9976344915d08faae91ea69cce5fc133678bb22938749a80b13068c03542141', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 120667, hash: '7da886701734cdf9a39f9ed83b6a1626add58f2e968cfce6f903cf79412b7966', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 120906, hash: 'fc596d7f6a0d6dc2aae3e94d0c9e0642d4650288f17022882eea3a6e2c6a0364', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 64304, hash: 'd0458773384ccfa8ae6f8bea916f30edc7c5a439e11ef705ee2cb50dc79608c1', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 74267, hash: '9f2f485ad66383d980fc0358b2658e650c578ad0c56c0c1bc3c3a6c78705eb35', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 73146, hash: '7dcdb7ddda0e03a00d731d81dbe0d1378401ea3dbed05ce2b6e954e7ba338211', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 79253, hash: '2aee47b9fe4a18c9d64ff72bb6bb61181fb33dd602f849d892192f51a7eeda51', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 100585, hash: 'f423abef75ae007df55a2028de1e7dea46808436accaddd7174c934eef1a0481', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88639, hash: '4e77d3d383e3d34e9334a10f0c14ac5548ff19bb3f7669c4b78052dff9d56d20', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87863, hash: '0834adcfa6a30964258416242a68a4796fdfcc6ad1dc8230834a34c2a2b04d6d', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106720, hash: '4079433114effb304cc121a32b70a8c016951d648e31df96867c70ba51991695', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89730, hash: '7135db11ab2f3aeaa5b2bfdc9dbe31b00e1bb9afb7321cbaabe6b743002f2458', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87795, hash: '5e2d740af8093e5bac0a1962b41f7d1683d696f44eeae2e30601d711f3665c93', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84687, hash: 'c5e2866c841df5e2496cb36e1ae64a69030cefa3d53ff6e8dce6ab8fda2a4451', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 84464, hash: '42c810e2c73c33db7b4f8f790557d6dd81cc37c55db97edb71b6bd92a025951a', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 120548, hash: '007d1df4a647959bf1e7e32026bfaf2b0954a0331b5e1134d16a5b4685e309f2', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 117856, hash: '58cd9fcdf535145c707a58f2d7ef572d8c4f6231d65402c3552ae50e1773d578', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 114647, hash: '179a769a6d227dd7ecc22802f08abf7687413c21aadddce8599dc814958a5822', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 88586, hash: '856619cc6ae63537fe58088e497cdd103cd5b2fb8eac405b9c17125cafbb687f', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82297, hash: 'fe71e39d2e496558f8f6d84f62b554572ac513ecd99399d34a1ab7ac0399f556', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 85877, hash: 'a691687a7f46fd0dcac71213e7574c66d5bbaa6b9ccce62fbf588aad43de5767', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83893, hash: 'fef31a6c97663e81477c12ece16a9a5c6123da16fa346d2d8460dd5e58c75d50', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 97568, hash: 'fb2605d67c4292d8d92d792e1e58b42182c1510c4915b6de4b6ea02f3bd27b29', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 97551, hash: 'd28ae9faf883da8dac377d775949414f5bb0c82d8b21426aa5195564a0d1cd07', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 100307, hash: '332b58eb9d7f29eba34d13549f1a7f994ee55e09e8fc74b24281c3170ecd54a1', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 105181, hash: 'e5a032466283752c9937c76c957922e51ee9c1cdb29e373f6f2b3641f695914f', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 65124, hash: '93a93eb99da1d1b79ec2ed61dd00b45ccc095fddd7e1521c160a7893bba8756b', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67592, hash: 'fb98a4ce714d445871fb80a9759575586ceed2b2bcd4a19d9d4d1dbc1bbe283a', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 89371, hash: '3cd3e1a6cf773ab38f753654256b321d356e9d6f85daaa792cf458547311380a', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 67152, hash: 'e72da19c226ad0bc1cb197f8cfa2abf9779bcc6d316f56e4c183fc80c71e49fe', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 109714, hash: '14ff4f704c106e6beb117749784f9103aa2257530303e82402401a4ebbba072f', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
