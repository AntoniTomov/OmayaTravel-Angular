
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
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82333, hash: '969b33db31c45c302a0d04f2043acf8f8c89973719deb6d52d7c0a290c31657d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 77116, hash: '19ebb81b828c723cad4b75b4785376b0474d5f0001866c4f7aadc8f17c09c13c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 79982, hash: '587be3caaeecfe9e79035531fb6e8b12f08d068e5d99ba866f969abce317cc4f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82547, hash: 'b80edd4d55019f206df56f52d583742619763a3b6829cb03281217fd3e4f5922', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103533, hash: '6b9dfb532dd8109f26cac546e2522e4dd3d2e5039ca337ba06aa1e0753182369', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82834, hash: 'c654b497ecfe4af14014f5752faecf73942cf3a8a6ce7307a849f5c18842e839', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69142, hash: 'f971d0197a768ce065a01538a2cdc3da7ec002797a4cc1e56e615a9a983b7f38', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83033, hash: '72707b416c7328dac2491656f169a61ae2857f92bfab80af328ed5a9a188b700', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107387, hash: '3fef820fb05c8b3348890573d667b5b742134ec1d6dd9075a9057960fb647078', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117729, hash: 'ce33c1a31dcd92a7f5a538b4725c8d3c6a9222850f0c5e8fa993473bc697dd07', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117913, hash: '8a7039cad65d249da1cb0740d1ed7f31adb77fd49ed713948f1078de54e47379', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117772, hash: 'dd7e00278e9c8c1e77ce10368faf47737f894d935a13853eabbd5c1bcba97a12', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78441, hash: '5e5465889381f8029fbb6d39c7e735936416b98cd7a5b18520f457653a9c75c8', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75792, hash: '48e59e638e7552da67f754bb49478592cf20fae502d685c1152db4ef179f392e', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84178, hash: '1ea49f80683ed39de7cebda0686cc7acc077611cc19ee5c95b9269a4b0eafdf4', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88006, hash: 'bf0ef14dfacd649bddf7c36b47d38fb09e8decdf5f7d02156199b3d381deab07', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87785, hash: '1b78d03803e6b08469a9fd661a2b6e638bce4339c45e7a296a461ca436bf732d', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 104601, hash: 'fd68ec2ba8cff0e34a399b0ea33afeee9fdf873dc87cfd5c2ec0aad90a50a585', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 94419, hash: '995e13731357ee4b2e0043893d6533dafa81ed1a235f87108048d320b3a95973', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 89285, hash: 'b76fa64ab5c17b48feb4f66a38e6dc34937fb2103d77bd33b0ddc30a3aeabf70', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 86179, hash: 'bd7c13f0a3698acd936e683088e0c01ce0b597ec612da3280c57d6723dbe106f', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 85956, hash: '8f28060b261b4813ca1db1f6f69637a37a4d3f3410ca23be411b3ec76821f17a', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72495, hash: '48509af7c690f9e34fcaea26f8ee09513dde39f0d082ed38dfc46a97de74c972', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114061, hash: '5e7e7c453a9818c64f2ed5e252231efffb49b80564fd15ff0d35ee25a3024ac9', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108083, hash: '89403d8982b8c1a7834d5fd1e1f8ac203f5b5f3d23f05861e1d762ecafe367cd', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87894, hash: '0734769405cf39cf48c60af5e9dac6abc7525d9e750fc8a37d5c4646ab09fb71', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 86721, hash: '6d0c6da541a974ab14d10570a8d2d97ac8aac348d8cb99181ad777d24059db69', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 82544, hash: 'd71143b58513fe0d440903129409b4b9042c2328e888f37412b9ace3864235be', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83931, hash: '76f8ddc8a93f50796392ab945bc96b803eb06d68fbe3bffed39cdb96fe800316', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98846, hash: 'c6aa0756a23769b8e5b600ef30f4515db8af5f2269a8adbcda6bd9369206c2eb', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91013, hash: 'e2518a0db482f9dbc10fd4ec6b56be6ca885bc40a1b79e5559f9ef2b98b4d0ae', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99154, hash: 'f8977ca8eba5f5ce79dca348704cb2bbca18110e379c30d5ff552c8af18a8547', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 103983, hash: '883f43f17f3b95d22b38d38310b6cb09da5a9fef05b9746b3b94f3e0d9ba8b7b', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67185, hash: 'c49f7784aa057805e7a4b438e86d908b513233fe1a1473b195447d5bd8bccd5f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69197, hash: '0a40ce7335f9e23bea698af58ba75129affeaa5d9192196896a1f42e22b1ccac', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 90671, hash: '26808f231e231821a109c64a1870dcad27595cf837cfa574c81f5de913305762', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72080, hash: '0b97c1974e7e964d1e9fbba1bba7a9a9c2c1ab14ca860bae223e4ec2e1094e89', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106829, hash: 'efe73e79f9892bc6caa9b302bbabafe7d8a4c4f09740a7699c8a4dc8c0bc6d93', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113546, hash: '36fb5a1b506eeae6d765d076264bea3092efb98e7333fd8c1604d8042e831272', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-7YCQRSU6.css': {size: 6523, hash: 'FeML6i+pYaw', text: () => import('./assets-chunks/styles-7YCQRSU6_css.mjs').then(m => m.default)}
  },
};
