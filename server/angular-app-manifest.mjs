
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
      "chunk-CoicnGi2.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BJrXsunU.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJrXsunU.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DaXsguWl.js",
      "chunk-DtonUTkl.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CrnuMS6X.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtQmO_kd.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtnsYKnS.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C5o6X-yw.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7wlkMb9.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JEALHSZ6.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D3TGC83U.js",
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
      "chunk-CaLdshHS.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CaLdshHS.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CaLdshHS.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CaLdshHS.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CaLdshHS.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CaLdshHS.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CaLdshHS.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvEo4Q6F.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvEo4Q6F.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvEo4Q6F.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvEo4Q6F.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvEo4Q6F.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B89reeZJ.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DvEo4Q6F.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B89reeZJ.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-1O4kFqg5.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-CIRfAeHh.js",
      "chunk-BOa_0rEa.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIkUC1r4.js",
      "chunk-PH6AsuML.js",
      "chunk-BcsdTzLW.js",
      "chunk-DtonUTkl.js",
      "chunk-CIRfAeHh.js"
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
      "chunk-Bw8nrRqC.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'e0964165849d279c06c64b1fd22c3cef7f0dbcb8798f2c560146fdcaaf63b255', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '25e6894f7cbde4ba0700aa348ee9b3f17419e31b786074ff92f8c78fc7cc28ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77277, hash: '808cc1374114d50802e69711b14d553b3c630828ed521616e9e2f078349ed71f', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76508, hash: '80a12a0de752db546ac68cf996b06e0ae1e36fa7b198122ff5add54df83cd58e', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74618, hash: '21e75fb101af81f46987d2c38a1e5e4b0f494d2f14713c910e9396dff97df400', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67373, hash: '6fdde76015113e1fbe7c1632750488bd3ebb285d6c9a7326c98ca8b4f53d0c8b', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80482, hash: '99265e68262aa92ffb39c9d876e1386004bc5aa231964d9e43596146b04b5f67', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111248, hash: '7b3bfe755ab9260fd0a950452c356f3e76f851890936d07b94091cf18902a45d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80120, hash: '930703fdefbc023c143e20d4f1578d6bb66ad6abc354dea2cb8a037ef195a4c6', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 91493, hash: '257f1efd71b245dd45d5e827652e6c1503c75c7a9c2f5facda414ba18948117c', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67403, hash: '7eb9b1e71ca8a96edc1db094290eecd2fcf805f6d670239e192302fcb19fd921', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81492, hash: '0a89b2c5544d93758b06f6daaaf5b3b09b59260963123e43473af368814a28f9', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81638, hash: '439c147ef685f0cad30c0028517a124444a9ad021b441d52521ae06f3ba9a746', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 81669, hash: '98297114207ab1809740d02e582028148cc9b767e1c1472c2f0e92331bd5bea5', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85568, hash: 'f7316871d89df9fe6c56831376ad3bd843d1aed01e46ad2d26dcf9eb8a181860', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84074, hash: '78a4f3476fa7e7876a5432b7a5a6fea122e86ac7e0a1a867d56084f113cca821', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89148, hash: 'c7dd7f8d5e1eb7be6c31fe413478c300a312d85391b439175dc2155d2c4ad9ae', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82336, hash: '0ae92022f036e7ccc56418fe6570498d4549c6c6342d4652fb87e663a82ee534', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 110859, hash: 'f6bb9c8354ab9cecda3fb4f073bf79644277a21634cd243931ef1745166dca66', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 101600, hash: 'f9eed1d52810dc335b6b7947b801583e492874704ceba5d9bd21c1fa5fbdc982', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 104194, hash: 'c59528bd730ec4cbe8d67ec0808c172f3f3ae25b36ff301f7a81aa84652abc6f', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 101166, hash: 'af777d23b4425114fe9bada695923e757405f66fa4721d24f5bbf9ed11b5d6b2', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 104839, hash: '7d1f1ba6e44eff78f6b8823d9d69d870b6366c2d035123f22deef7bcde131351', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87770, hash: 'a1ff77395b3f7dde587320acc6e3e14918ec83ba5552515048b5d1e0889f72eb', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87547, hash: '3cc1fd498aa4711b4e06ce3f3b845dda366a342da230dafd1f6d7c4575011dea', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70544, hash: '48582ad126d9061e9d2d0dfea7339653ebceacc3d6171ec458d3bbc6423e1465', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 93852, hash: '57bfea89292dd579dd8b362e23905d8fbc39172b650e4bbc572ac62821f07e90', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70175, hash: 'c51f3354b480e931effb6a6708b954b5159deadbbb25fb8727a387647ec38e09', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124026, hash: '969a7c58389ee8c7691ec82e045027cdfdf282ece7867d1de51f752ea235a111', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 123668, hash: '52d994bb8d40eb2b86167138ab9191e8c84c0a652551a063083a91500e329bb5', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 120976, hash: '8c3887a2cf717da16a785e8a490974c1d135a4f306874e4d3527ebe926a38e05', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 122529, hash: '0d87ea4ab84e829ec68b3f7573f513486d71cd95c087535ba3c11e4334b825b0', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 117767, hash: '9b3786e04ce0cf1c9948514fbdf1e8be508debd0241a3055fe649cf46b3ff7a3', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 117490, hash: '216ed36554224a0329f5744c8026f06c18078cec0d149e6839e755af3d198e92', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 92368, hash: '2a37d383b7cf1fb5b5cd582065162c61d9c5b1ec4a44ca6bb2aef3f20227cb2a', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 104831, hash: '8b4dd5cc4ecf643535ed9cf41be6e72ea5f3282c4739ff57fd40ca1f03b3208a', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 92729, hash: 'd815c9419fdf4c6a453b6c72cbcbc9795a5c87158f232cd4429d1c26483062ac', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 91934, hash: 'b03d825b77fa037e45c08a8f46f7a26ae603d48ff39228c95552c5ec5d82da5b', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87170, hash: '2beb7c293281f63bf5ba0d5c5956eb8f4da6d43b53f15794b36dd78f82671bf9', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 81868, hash: 'a99c244f2d56be3555174cf903d390ba375f330ea4c91d6ddf5895777680bcb4', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104266, hash: '57c90e2168a295f66c93f7336b0e3c15142981f1808fea13a6b3f7286d8e18fd', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94305, hash: '0d06ebf89461396d50d7d2af7d604d7ac105d1f1552e7e1d29ef5f62a19cd8d3', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94226, hash: '8a16f986886b9e29a9dcdbb2402818f371c4652faa257338aa604d4957199956', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 109301, hash: '85a1652b260fd48a093debb26d12084ad3e8d0a8c9d5988f73a19c12d6fe76ba', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68207, hash: '2abb5f32dfa74ab72300474a4025990de85833cfbbc2e0e4106f73b24e984d29', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67409, hash: '610b01fb6d958be585ce7f007872089b0c6f51f430c493c4d50e7175cee9106d', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77491, hash: '45bc777994cd5c8ef8ef5fc08ee80d6fad10fdb869e6fbd3428b2c8863a83615', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76344, hash: '154f490824ab9b7c4d2e6adcf359c03d8d5c73e4a1a8b8d7d4aa4fcf983e41c8', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 117804, hash: '56ca4e8fe10c6ab68a15f72cd391bd0d08505d13e50e69f32f64cf27bd71310e', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 120507, hash: '85881bbb0e97884655708e9750b71146f134eff4d5c367d1bf1c56031496b9a7', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 118898, hash: 'e02b6284380f42da3a9a8df0b094d83d2d5454341dcc895c143219baf2db3f35', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118106, hash: '1874cf1e2813776365fcb9564aab31c809abe55cee792d408be4763da446eff9', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 123826, hash: 'f862a36ec2d410205c648f85de3f5d339ce32aff2f7cc1354d36003a655124a5', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
