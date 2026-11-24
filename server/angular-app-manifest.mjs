
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
      "chunk-CzODf3ad.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DB8bHtwn.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DB8bHtwn.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BS8CaIr9.js",
      "chunk-NhvQ9F0b.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C0s9afas.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMEi6yFA.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9UW5f-h.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DjNV8ShT.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-r3V-t9ol.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CbFig1us.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GKjLW5Yz.js",
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
      "chunk-Bdw_9qiT.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bdw_9qiT.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bdw_9qiT.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bdw_9qiT.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bdw_9qiT.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bdw_9qiT.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bdw_9qiT.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsqI1sgL.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsqI1sgL.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsqI1sgL.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsqI1sgL.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsqI1sgL.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzXTeawe.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BsqI1sgL.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzXTeawe.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BmrTS-Ta.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-DIq8Tvmd.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/armeniya-kratko-patuvane"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/best-time-to-visit-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q_rcT2f7.js",
      "chunk-NhvQ9F0b.js",
      "chunk-CCcKQUL0.js",
      "chunk-YwjobybB.js",
      "chunk-Ch1ZtltS.js"
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
    'index.csr.html': {size: 16193, hash: 'e9ca055c6182652b512eb4b0a46335854c08911d146f911f41a9f29004214f1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '03ebd5fc37d30481f79a38e27c8fce8f1ea8a4c5f75f6c9c51ced9541bbb6ef3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77257, hash: '42040dec2d8c1020c7c203c93cfd145d970b0d63bcb2bbd117a87cfbacd6f42c', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76680, hash: '76c2575e43d08de48ab65b2dab3d8d2c13beca952a897d1178e877eed15c4c09', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74598, hash: '829a460ac91345e31736c626c480fbb54d26b675e432d430d23ebc8c9b591d83', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67353, hash: '92488d5956d2b9ec63a76f7e2f6630b1f06f436ea0d8778587857621f73fd9bf', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80462, hash: '1d8cacfcc523e82f68f3afc66dd89f53cdf340b8d05b1c52d428ff740e8fb20c', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81618, hash: '20fd4456209a073752b68d0baace6924673892ada7c437dc8934badde8c72bf6', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82243, hash: '953013ec7309b27e91d51c7b7b5b6107ea8355868ea58a7d012db7e6af12d75e', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85548, hash: '2599dc349aa8c4678598defddb1ef5c2bbb85de305374428d69d5783768a8c23', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84054, hash: 'f68e615f6dfe76f7c1885d91c48ddf17852725e846c09a508a14292a0b69e5c4', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 90108, hash: '1d4d1dfd2cf4bc7c8f14abdb27c73f911f8a957114a24af2e2cc5a3afc333d86', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111552, hash: 'da24323022758836489c60304c2aeaa370157bd26f9ed24c73d95b544cd3c8e3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80100, hash: 'a384259c15610586fba5c8d16d9231805521cc9f77056e40d6f03660e503b5d8', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 99539, hash: '3a4320bb745abd3f69506240437cd4b64aa3a4ae786f8d31e96d33fce4dd95e3', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67383, hash: 'cf2f930238473cfe314a73f9ef936b22586bd5a73b0c9fb86d84e7828a86c9b4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81558, hash: 'e498c09d613e3852d52c62e3c90fd429a4d4346a0d8558efa10374185a55240e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113483, hash: '8bd9be56b2c9cacbdb6efe9be4e4ebbff190f5d2876a41b6713a1e22cf3b9804', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104225, hash: '3ff3810069857fd2a89129b3184fa5eeece7cf10a629f4506502408cff65c918', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 107012, hash: '66c908b565805ccc7ad81d5e45febbad85edd9bf5637043514bb9547955315bd', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115839, hash: '46a56c51bd8a839e69cec7e7befe38417b306cba39f6e3beb731301b20a3b123', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115622, hash: 'fb37e4fb35575dd8150093221acdc5e75a2954a09c8bdf042dbba1e928835825', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68183, hash: '17cf84342f8e201d96b94e625fa43f6a6bb14dd0413d650bb0628ce90f6f5560', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67405, hash: 'e94197d2887acb652d833ba0c7cc5f14150c22eaa2cadcd03efb363ae66ca323', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77330, hash: '9844b6501d01b0c34aa5d7a1bdce866291790dc9093c017131059517b209f9a7', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76209, hash: '48496ae3254d2908214f2fee750609fac67382fb899924e20df4b82391a1538c', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82475, hash: '7a6d9e84682a44c0b2dcd85afcca978f428ab19d1ac330eae5273dce780e3a8b', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125143, hash: '4a94fb4d5ae218648daa34ea33240b4c30c479b355b4528448b11297b3cf3328', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124486, hash: '76b74ca99fcdf196f170e98393fcfb80ac5d7fb50e86d6f0031f357960726eb9', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121608, hash: '951bb9468f499d30aeb54dd4958a5c7c9095f493f9f6b3c3329c68e6c47d239c', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123161, hash: 'b06441aca1383bd3ea380a01dbab2060cd3619ff2a77917a3cff505430cbb5ac', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118582, hash: '26b983280b0827220a5852cff659bfe7066807885cbc3032428ef025c2edbfcd', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87942, hash: 'b2ec7141b30fb7f0db8c5f6dc586037d7e20c60fd598396b2b9619c5451af7e0', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87719, hash: '2abd661ebbef3aa760dc2c8ba806944e6c585117395d98dd8479df1d1911e4a9', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70514, hash: '0ce4044fb5c4cb12d81dfcb5e500c0c2a066ecca6d5d94a89cd341b8cfeadefe', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96502, hash: 'fcc3fea2c5d33cc830ac2f09127f536071a614ba3faaea3241375839be4a5ef5', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 69997, hash: '49c399d8d1612790d8e99e86435ed027ddf13803ba77502c1287d0c63a436598', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118285, hash: 'f103c05da6e3dca98566dabac4db73b11059c13f7c980ab1fefd98870c2e4c76', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 95080, hash: 'e71ce8a57b2fb99d9ae02175a27588c398b1eae5943e6eaaacd9f335cd57f272', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107910, hash: '2740ca492daf8d885d2d687053cda54652267828c85c2715dc5d9a3cb3c46fef', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95312, hash: '88bee8b37c5e028b5c5f22ba7c920edb38ca2afa14bec3c1f4a8130f40284197', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94467, hash: '98a92edd532ef99b4431b46f816ea8256ae8f597bef7d416a433c25afeed4428', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88097, hash: 'c1f4d9887de3d467d5473ffd05a46e1c4b48587d4b44b531f82f3d47402dc44a', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82503, hash: '9090607cd36f70f0a5e2487ea521e8bc17e75db184003371467d3af84373e1e9', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104457, hash: 'ce14d00e70341dfb0050f5c288c53f5c069d326d81de52a456e6b824b6b7be73', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94488, hash: '81187034a9febc29f3a6cf96ead34bd40b6c3088849a43187631bec153a03694', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94409, hash: 'df2101291e14f75eb291b42488b52afb2d37d8567a9252f9c6ce2b81d0d118ea', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'best-time-to-visit-kyrgyzstan/index.html': {size: 119192, hash: '6af3c9f76164f2780d93d65f5238f7bcdb8ab4b90d6846ab51dd766281f4fe73', text: () => import('./assets-chunks/best-time-to-visit-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103669, hash: 'fbacb5d37a4792839614fda7b0f7958c8a48a48cc166548830aa0f07ad3d5db7', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107679, hash: 'dc4a24c0a12b7f9b41020b2071833d318e803ed62f06a40f505c7aca2249b6d3', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118439, hash: 'a7d3a56ac363ca1392f4acbe6432ff4cd0076022342dad599f3f59c96efb6bd7', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112152, hash: '70860c2632afd2701441c5e540a7b75a6138b40fe16f525950c52ef324af4d48', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118626, hash: '7f7759e01f1087508b9503e6ae1f7a91f1a49b4e050a0a3da0b1cd0c507e07ee', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121105, hash: '0db28e8f1266866120f15221222ceb23b92a0728a2262f2923567d1532617490', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119511, hash: '775a926190dc0778fe25663d63fadca4047a407881d85deaa1374c4b37be25c4', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118895, hash: 'da81bca81a1fde263f0d1cf755e68c497a3a096380bdb92fbb1f775d3cece7cc', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124617, hash: '0daef6f4d8a3e62fa02c516d79c2b294a864633eb7f7fa69dd592385cfac6edc', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
