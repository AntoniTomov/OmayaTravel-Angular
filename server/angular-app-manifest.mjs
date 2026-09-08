
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
      "chunk-DL-tGkaI.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-C-T45qjl.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-C-T45qjl.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B5ss0iyw.js",
      "chunk-DB8lpB6k.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-uKh6GmwP.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BzGG-ucG.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CqZZzl5f.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B9K548Bu.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-COwYi3lm.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUX1o1c_.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSPpJzIV.js",
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
      "chunk-D7efLUW2.js",
      "chunk-BSnJdTkM.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7efLUW2.js",
      "chunk-BSnJdTkM.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7efLUW2.js",
      "chunk-BSnJdTkM.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7efLUW2.js",
      "chunk-BSnJdTkM.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7efLUW2.js",
      "chunk-BSnJdTkM.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DY9nDVwL.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DY9nDVwL.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DY9nDVwL.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DY9nDVwL.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DY9nDVwL.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DK0VbvyZ.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DY9nDVwL.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DK0VbvyZ.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AT3r63xi.js",
      "chunk-BSnJdTkM.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AT3r63xi.js",
      "chunk-BSnJdTkM.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AT3r63xi.js",
      "chunk-BSnJdTkM.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AT3r63xi.js",
      "chunk-BSnJdTkM.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AT3r63xi.js",
      "chunk-BSnJdTkM.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AT3r63xi.js",
      "chunk-BSnJdTkM.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AT3r63xi.js",
      "chunk-BSnJdTkM.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AT3r63xi.js",
      "chunk-BSnJdTkM.js",
      "chunk-BAxVj4eK.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRVcqMRI.js",
      "chunk-DB8lpB6k.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRVcqMRI.js",
      "chunk-DB8lpB6k.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRVcqMRI.js",
      "chunk-DB8lpB6k.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRVcqMRI.js",
      "chunk-DB8lpB6k.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRVcqMRI.js",
      "chunk-DB8lpB6k.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRVcqMRI.js",
      "chunk-DB8lpB6k.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRVcqMRI.js",
      "chunk-DB8lpB6k.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DRVcqMRI.js",
      "chunk-DB8lpB6k.js"
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
    'index.csr.html': {size: 23699, hash: '49514bdb9e08a01912e6650a6f61a1f221ad9be2e08f4d36edfccc55901517d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22724, hash: '5248c84a72cfbe028c7928b85e46afd58adec273fd3a2ec38369aeb18389ccde', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76293, hash: '6553530823b251d176c0de0a82f4daff80a730be01e19ae5c8dd2838ed6066b4', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 74873, hash: 'cbc7f1b5fe854f05a1e32dfc8a658d0b1313c191893bc93b79c5e9f613f5c633', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76538, hash: 'e39c3e70f0dadf756c77d4745218011fe9b480e06ea45d76fb5bb30b2cab8996', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 68884, hash: 'f9b3d9a0c6095a0597a39cf4b364b3f3bc62934cfc7e32c7d425007006a2aa54', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103533, hash: '6b9dfb532dd8109f26cac546e2522e4dd3d2e5039ca337ba06aa1e0753182369', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82834, hash: 'c654b497ecfe4af14014f5752faecf73942cf3a8a6ce7307a849f5c18842e839', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69142, hash: 'f971d0197a768ce065a01538a2cdc3da7ec002797a4cc1e56e615a9a983b7f38', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83033, hash: '72707b416c7328dac2491656f169a61ae2857f92bfab80af328ed5a9a188b700', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107387, hash: '3fef820fb05c8b3348890573d667b5b742134ec1d6dd9075a9057960fb647078', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117729, hash: 'ce33c1a31dcd92a7f5a538b4725c8d3c6a9222850f0c5e8fa993473bc697dd07', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117913, hash: '8a7039cad65d249da1cb0740d1ed7f31adb77fd49ed713948f1078de54e47379', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117772, hash: 'dd7e00278e9c8c1e77ce10368faf47737f894d935a13853eabbd5c1bcba97a12', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82333, hash: '969b33db31c45c302a0d04f2043acf8f8c89973719deb6d52d7c0a290c31657d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 77116, hash: '19ebb81b828c723cad4b75b4785376b0474d5f0001866c4f7aadc8f17c09c13c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 79982, hash: '587be3caaeecfe9e79035531fb6e8b12f08d068e5d99ba866f969abce317cc4f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82547, hash: 'b80edd4d55019f206df56f52d583742619763a3b6829cb03281217fd3e4f5922', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88006, hash: '572b064a7004bba0f750fff78dbd7267ac202cbe2ca9c24236b24bbe70d2d2c6', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87785, hash: 'fcdc18a14cc7963a7ed534fe19caa9fc1c36cf6f4447409a179c430f63042b98', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 104601, hash: '0855cf0d3d3fe340f98013bcaaebd34c511e61ffcaf0dc99b75a87c58434851e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 94419, hash: '787615c8f06e48a65066521019a196210ab286b7430fbf59110cca817f676a86', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78439, hash: '8bd856b660ed2fefec2ee9950771fc8c095d250fb1fca7ce599a849362f8b713', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75790, hash: '93169f32a9c7df8686b3fa6633b671b9d29bf07ca0b3418d93e14ecd0bc53b8c', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84176, hash: '5043be2c48c99afa23e77610e4e8af1a9828c8f48ddd33341cb3f48f277c7d52', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 89287, hash: '805042f161b0e2082a6d29f1cab326e08fedda16c0a6d0d63a30bf210821ff49', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 86181, hash: '0e1b831aac149e85f2359e1077e1b945097d36abdb6ea16ebe8179b110cae69f', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 85958, hash: '86b5da021f34950c4d29e32a64d70b9596362d824337159a1758b77b0fee84e9', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72497, hash: 'ca797e3c556640f378a4437b9a9fdb273c7be7cf5d0ebc032ef3f35da70abe04', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114061, hash: '6ad6f99b216dc213e5dc7201d6d858f9a143af009d2a723da3008ccf3f8e0654', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108083, hash: '6d8e29d4a18e09a42076d8901326b27bff2960b4e8f33a4b95fecbcf3bdd006f', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87894, hash: '20f5442b44a22010e3343d2257cac2e9ee597a60929c88ed784fdd5121f71340', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 86721, hash: '7cd7203b8806df90110949ea600d83bf7c4bd18e1f35ee40afa6b60609c20828', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 82542, hash: '143526d8a95c98fad7e9d7a04ba3640475f72bf50c2e06ff7fdfd444a711078f', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83929, hash: '2c7f68eae15e308fa299ba00427cd4cb3a9cd5715f820fbce491666876a94f1c', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98844, hash: 'e88d50d35a87cf09f486e9b8a5f67f86a6032ea1e6048c852f12c358fa2a4c62', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91011, hash: 'e733d69c3503d245eafd3fe53c8d615c28e9754a334a4aebf1de085ab2b432a5', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99156, hash: '5cc046f1ebe7db84d6ebcbf6fed863f031cbd26ee76cee5e0dfabb391cd566f8', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 103985, hash: '73f51e08717abcde1ac49b5d541cb6a2c06410d5c342709e4e646e9eeb6fda42', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67187, hash: '890521a736c8ae4ce380e1cae7ef603476f1ca2aae4b2f7eaa3e9abb71716b93', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69199, hash: '1efdcac76747c60fa134e3d6ef74c55e5dbbedcc6a8e151d010f90d65a65c4b6', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 90661, hash: '6bbfa3ce462572a178fd3c2e4c23c619d76cfb9df4eed8db71b051b747db47a6', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72080, hash: '098b72f852f54be168b09b7040f6cd691fd6c857cf30ae58925bcfa17b2c9508', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106829, hash: 'e35d4ec809321b290e996a15f4d58824679e91f73b9ec9357dbac18788af6d24', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113546, hash: 'db77e9e3f44b43b9ddce14a7c321491a59d3e8124f9754a71b6078739ce40819', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-7YCQRSU6.css': {size: 6523, hash: 'FeML6i+pYaw', text: () => import('./assets-chunks/styles-7YCQRSU6_css.mjs').then(m => m.default)}
  },
};
