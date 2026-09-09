
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
    'private-tours-your-trip-your-rules/describe/index.html': {size: 82333, hash: '969b33db31c45c302a0d04f2043acf8f8c89973719deb6d52d7c0a290c31657d', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 77116, hash: '19ebb81b828c723cad4b75b4785376b0474d5f0001866c4f7aadc8f17c09c13c', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 79982, hash: '587be3caaeecfe9e79035531fb6e8b12f08d068e5d99ba866f969abce317cc4f', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 82547, hash: 'b80edd4d55019f206df56f52d583742619763a3b6829cb03281217fd3e4f5922', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103533, hash: '6b9dfb532dd8109f26cac546e2522e4dd3d2e5039ca337ba06aa1e0753182369', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82834, hash: 'c654b497ecfe4af14014f5752faecf73942cf3a8a6ce7307a849f5c18842e839', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 69142, hash: 'f971d0197a768ce065a01538a2cdc3da7ec002797a4cc1e56e615a9a983b7f38', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 83033, hash: '72707b416c7328dac2491656f169a61ae2857f92bfab80af328ed5a9a188b700', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 76293, hash: '6553530823b251d176c0de0a82f4daff80a730be01e19ae5c8dd2838ed6066b4', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 74873, hash: 'cbc7f1b5fe854f05a1e32dfc8a658d0b1313c191893bc93b79c5e9f613f5c633', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 76538, hash: 'e39c3e70f0dadf756c77d4745218011fe9b480e06ea45d76fb5bb30b2cab8996', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 68884, hash: 'f9b3d9a0c6095a0597a39cf4b364b3f3bc62934cfc7e32c7d425007006a2aa54', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 78439, hash: '1af7774249008407577df285e0a341d6b2c42ae1fb4c15b6a52d68854d059ad4', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 75790, hash: '1ce2a539d5334560e689e8344a78c1d93fe125d040a17daf7814abbc2a85e682', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 84176, hash: '76a4f06412a4b2d9da8aa7d609020137f3e8f7f0b6816109a19c121c88168f98', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 107389, hash: 'b18a15e4abf54dd8863dcfb0e41c19d37c6f52b29979bd1de9a7b9a1fbee98dc', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 117731, hash: 'cdbe6c6b1c6737ae7d27afe551938a6439ca8c3b77cb3c802db3c40e841621a9', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 117915, hash: '7566f89454d90f7f13f343a3a21c5b49b9b8761120c4105bc6d8c4bbbb977ea6', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 117774, hash: '14469c7a93a9b4b5f0ce49c0109222321e8dca895aa57599c63772cb7d2f2e50', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88006, hash: '572b064a7004bba0f750fff78dbd7267ac202cbe2ca9c24236b24bbe70d2d2c6', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87785, hash: 'fcdc18a14cc7963a7ed534fe19caa9fc1c36cf6f4447409a179c430f63042b98', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 104601, hash: '0855cf0d3d3fe340f98013bcaaebd34c511e61ffcaf0dc99b75a87c58434851e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 94419, hash: '787615c8f06e48a65066521019a196210ab286b7430fbf59110cca817f676a86', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 89285, hash: 'a29f9f3a9277a04a2715683a429d0da0709a5a035343e5d669ea71ab767fd0ac', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 86179, hash: '50501ca61a770aefc6215c05249d9ce75231ab38506aaffea7625aecb9ceab4b', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 85956, hash: '2ee14b224e124aa82c9ca62994d1a252994d252b6e58631450039a15e4220335', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 72495, hash: 'd82f0bb262bcc25e5cdb524954d9cfa582c2b52609d5f0be605ee74db7863080', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 114061, hash: '9a2975456bfd6ec5e5153aba1730475b8786327efae1f01af6736804dfc4dfad', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108083, hash: '08e998e54b0d5f942f81cbef2d0ff6f8f122e7d682716b18a95bd55bd5b2e449', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87894, hash: '135f13dc67c0d2794f49da7a583b1945834908b399e05b1e64a86775944f81c7', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 86721, hash: '207e8cf0b062b53e94dcf0a6744ad3ad02a6d3af465c1001dca6c7815fb74d47', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 82544, hash: '72343e4d73de40ef611f3af15d7fd43353d30d2054990d552d1ae739237c626b', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 83931, hash: 'fdd6068b7affab1ea906885db396bf5e8162f1c9c7bfbaee872a4ca0aa4d1085', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 98846, hash: '24bd97cb5114f20fdfce4cdaea5c15ce3bac89a77bac9144131085806879414f', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 91013, hash: 'fe188c5e8812a33fa5ceb50d8775e438b90651448b72e7bc24f1c469c284aa16', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99154, hash: '1126d9b1757858526dc298883c5c727e0f37e217b3a084a1791562284eee7b3e', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 103983, hash: 'bd648389f04eb558d6ea3adc9df189d16a3b632fdab6cbd9c6aa46ab41715e7a', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 67185, hash: 'c49f7784aa057805e7a4b438e86d908b513233fe1a1473b195447d5bd8bccd5f', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 69197, hash: '280eb7ffd57c209e4d5c3fa9f42d01dd20aeb3d682ca6d280ea4959fb8147dbf', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 90658, hash: 'cac0cb164f50b4f3a01c23869f78301be1a9d6637f36fb2b5fb648f02c255fbc', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 72072, hash: '0e155a555b0729ac5da1584a9c0ff70515ae52c448bdc6eba9dba8c6b53b1669', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 106829, hash: 'd9608f53a11bdab2f783166df0938496daf32ce779b78bd5d6ab1142fe360923', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 113546, hash: '63b7191e1bd5520fa04185b1e7f691ff5dbdc2a9981612e3bbd20dc358c7aa74', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-7YCQRSU6.css': {size: 6523, hash: 'FeML6i+pYaw', text: () => import('./assets-chunks/styles-7YCQRSU6_css.mjs').then(m => m.default)}
  },
};
