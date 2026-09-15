
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
      "chunk-B4I6bvZQ.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-FtNhiPmF.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-FtNhiPmF.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DqwtdJLj.js",
      "chunk-DCbGyJAR.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DGx1ovJH.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CR7aifGB.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cdu7NOxX.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CWT5mGmE.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CINRFA_h.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DckVG83P.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CBRBDP3_.js",
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
      "chunk-BQ3xkQta.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQ3xkQta.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQ3xkQta.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQ3xkQta.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQ3xkQta.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cbmj3gpL.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cbmj3gpL.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cbmj3gpL.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cbmj3gpL.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cbmj3gpL.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGuegOui.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cbmj3gpL.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGuegOui.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8Hu_iSBF.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8Hu_iSBF.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8Hu_iSBF.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8Hu_iSBF.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8Hu_iSBF.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8Hu_iSBF.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8Hu_iSBF.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8Hu_iSBF.js",
      "chunk-BP1a_zYZ.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSDClraN.js",
      "chunk-DCbGyJAR.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSDClraN.js",
      "chunk-DCbGyJAR.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSDClraN.js",
      "chunk-DCbGyJAR.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSDClraN.js",
      "chunk-DCbGyJAR.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSDClraN.js",
      "chunk-DCbGyJAR.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSDClraN.js",
      "chunk-DCbGyJAR.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSDClraN.js",
      "chunk-DCbGyJAR.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-hSDClraN.js",
      "chunk-DCbGyJAR.js"
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
      "chunk-fezymhxc.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16185, hash: 'ce797bda63ba66942a98632145af049f1b5073572db830d641e0c500ee5edf3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '69d62732019657a2a8fbf71610c64fd06f966bbb646f4ec19b9d666eed6781cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 69197, hash: '6220cb993f5a58ef6a821530ec1eedcaede87b5ecea0b2eb4ada18eee4024606', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 71339, hash: '48615f4e3402d47fbcb1ea613feb707f92cbcd9d24bbb9f8ed520f2c9f99043c', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 69413, hash: 'b24c5f85b1c062c22943e2e425fcf7d5de534b97977c50f85c833b7d83335ce5', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 62258, hash: 'be41c68bcdf97b4ccb6cbbe9a09377a2e20e50949ed99061ae40c6fb692100c8', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 75237, hash: '1517a6a4259c23e0f0a6926fe7527c963e08c17b2aac839f6959938ead24330f', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 72795, hash: '0becda196fcbcf46ad7f07bd98d2593471723d4b41cf9eb7b1a7eb933184feee', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 74270, hash: '232f9dcdb961da745425646280e95b536534f3ca1af074f1950cc1e2ebdd0d78', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 78077, hash: 'bbbc9cf1d095310cc42a027454989bff3cfea21967fe816edafe9dc0bf16c920', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103403, hash: 'a0a85c07d07bff6f827bb63d7d833302b54d32da311c60301260b2ce6433b02d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 82401, hash: 'c2df86dc46bdb24a1d2f72f1e2adbf212252d829f6c90a8fca265a3adcc08130', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 62046, hash: '3e7f6f4f6f50473694825382721a7bb61ef39f6cd88e2cb411b4eb8628013ed2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 75755, hash: '2b5884cd4b8916b30b245db96f3cef52d0c7a0648c1f25be4a4856c8a506a5c3', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 105384, hash: '801c427a48f32e1628c1ff76fa22fc4f6cef03667194aa5b2e4871a6dfca5720', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 115229, hash: '42ccf7399ccea6b655bb6b7e19170c7eb411566f481835a792c2d65113e74227', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 115468, hash: 'e0646c1a5b3160600480c8329338c45f48996369e8593244868c36ded58d676e', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 115274, hash: 'e4d32540f50ba94fead8112d42ea4d71afb0203502530c7020dd6adfeb13ea83', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 71315, hash: 'c74d86bac6da917c98f4616eddbd896906314097fc11523e33ad97efc46ab173', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 68666, hash: 'bde4789946db86a3e5299635185f7851d5555cf6777d3d5646bd6d9031286d7f', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 77052, hash: '72800e95eacd5f50d33560375fb4227a46621358b11d798639d00e30758aa92a', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 84408, hash: 'd8db43b95f07ae4d94951f59ba0f75c20fce433484ef6d87b84373806e2aaa57', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 84188, hash: 'b5097bf30590fa40495ca64488d68b25019182aaa466cfbb8178665d0250f9c1', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 101002, hash: '3a4bd426cc442bb4a2f51e13f3002f49f0a5d3ba94abfba70a804db7f9df9800', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 90821, hash: '56a2cdde22d3f0ca70c09d18091ab6b901673e22997b76dac045c45f2e857631', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 85806, hash: '1a72eac8302057b854e02b29c323c8cca65e203f0d7193c14ba280f4c428071a', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 82698, hash: 'abb865be87bc01f746e5b13e1b0dac751956efe70a857791bf53767659d4923e', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 82475, hash: '2a075a9155b75d6dc0775caf35ed3af55a0bc99215a586b79c0c802695147977', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 65456, hash: '027c5e6fa593a059031e87a6d698038acda880ce342c2c5d04599c068760e7bb', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 78609, hash: 'b13b757ee80942061098b7730a274c4c7495be323941136dd31003de6f76d0ab', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 79673, hash: 'a68c1585355174d887d5adcf4cc2b2ef605f376cbdbdb9ffcb4e3f655e5fa1a6', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 95581, hash: '52f98e8b77467e9976da43a227136cf9e49c50400308d842432e7305e2ad6342', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 87743, hash: '957bd503bb1deeaeaf7153869db0eb5d9f951b0a1c59bfc03aa22f74b2f4ff54', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 112420, hash: 'a9559644545e3c99b53a8869a7ce6a62f9c626ace3b8f49f6c2088a963b64b5e', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 106094, hash: 'd07dca87e4f39063b9f540197a881703844cf522dd58292b194e4b68f4a7cfdc', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 84296, hash: 'cc16c3de12845848193a853a3675fe72da9d4fd8198b250e98e824504a8022be', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 83124, hash: '933d0fc37319ded1f1ff4fb165147cf7ff45db42436a3b27c194a759cf5960e1', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 95556, hash: 'aa0b516c54efc7d1bbfb6615332c96594e276ff218c11886bd008be9942941f2', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 100385, hash: 'e87786565971f7548620e83b0741cad23e663ed00cb22cf803a771553dc6ba52', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 60018, hash: '7850da4d8d584696f1887e47f6c7a8cff141a83b98d30fa17ea318e2e757cfea', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 62101, hash: '5052bd6531d080fb676edddbd99aaf60c5fe4a4652b04ed02718d1d7f65315ec', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 87235, hash: '4c844186de86ba67cb5295ee706537acd7fecc158a878471f7ca842947409bd6', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 65028, hash: 'd9aa071cf3fda250e6676b7ace75b315d2323b2ef9abbea6a4f7c2234d7c4a00', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 104249, hash: 'cf633299bc3fec3b42ba77a3c049cfe1c6b596b456a831bb751084b98f340c00', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 111909, hash: 'fa07be01b339bd8aa69e77cbf997ec8185b6d277817f009b54a09c1a0788abe9', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'styles-JPQCLZVL.css': {size: 10112, hash: 'RE14Mils4z8', text: () => import('./assets-chunks/styles-JPQCLZVL_css.mjs').then(m => m.default)}
  },
};
