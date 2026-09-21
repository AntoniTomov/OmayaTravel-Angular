
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
      "chunk-yLGYBub3.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-BKL7XqqO.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKL7XqqO.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DIVZbZKn.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B8wn7Zso.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6TJSkboN.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2oHB3sD.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C4tST1-5.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CDWRvLNj.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B0sOIanJ.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ByWUGyp2.js",
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
      "chunk-Ci6PIibT.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ci6PIibT.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ci6PIibT.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ci6PIibT.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Ci6PIibT.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUI6infK.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUI6infK.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUI6infK.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUI6infK.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUI6infK.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CvtCpDeH.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUI6infK.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CvtCpDeH.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BnMaORCB.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BnMaORCB.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BnMaORCB.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BnMaORCB.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BnMaORCB.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BnMaORCB.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BnMaORCB.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BnMaORCB.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BnMaORCB.js",
      "chunk-BDfNOBLe.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BEb5GFjB.js",
      "chunk-rKRs8zbK.js"
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
      "chunk-oM0jm2oO.js"
    ],
    "route": "/404"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16193, hash: 'bc19af9aa4b636ecd1d03315566694bd8b250f6048a3e61efcdfa82fd390bf5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: 'e5318e9ba541b4253517c5075efc8cf24800de172cc57ed54b19c915700a62bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105776, hash: 'd5cd753678642dcd3ade015093d3a3709ca0027e328fadae7dcdfc99b2b51acb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 76563, hash: '9f04352653eaca7c766a783e96bf3efefcc6940894eaa141e08f097901694409', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 85892, hash: '2f227aa2ea2142342f93b444857551a838be65c608e30f920f71277b7e13f8c1', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 63846, hash: '32e68e52f72d6e83e072d1e5e49b8cff9a45875558bdfeb0e30a0ff5fe52a20f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 77884, hash: '43642626bda4236c9d194f369b36fe17f00a034239bf5a2f5f4615e579fee85a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 73437, hash: 'f3611768ade50c010d6225be4c7039138d7d96ed1a1b754f1bff5be196b29381', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 72951, hash: '01a909b0225e1e784a3162e9f8f288aec7f7d889cca6f2ab953c8ff5243a3890', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 71061, hash: '0961fe0bc9063702a4c6eda271ec4e3db0046f0cb8aba205881085ad877473b9', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 63816, hash: '86baaab8d76b08da4c01f6423fcb8cafdfeefbf553c6b59fe2dd46c0d3c716f7', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 76925, hash: '7b149d45c0e9000593b1b7097de0ae09814382a054f7c32be6829b9ba0fe8497', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 74470, hash: '0c6d4905a504a31b817d1e2df607b93b3a9e6b7f9cde841f2854db5ea85f3ab2', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 75945, hash: 'e19f50f83cac91e1ea996d730eee589b2b652f6b039feb6b7b2299ab0089f239', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 63830, hash: '8c0598cc31b74a2a84b6ff4632289f8caf0bffa35b4522afb6c62498ae10f1da', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 73042, hash: '75737642a172374a69fcd9c3a45a5808d2c7ec155fced272e5dc3d5cde88f329', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 70393, hash: '52bef1ac239ac081a4dbe6b2e87d3804851e98587a9ea515cac4538b1ec61bf9', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 78779, hash: 'c02a4930496484263125f6e8cdb891b5d10fb6db868aee1c2862e6d4623aea80', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 114732, hash: '3c94b6023d95eb153407b6ae1f01c386c9774899c8688294fd12cfd948df2d74', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 108208, hash: '587866781f76e30200fd04761762abbe86a668a84248d20cd4aaee970badedee', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 118061, hash: '7861c808145c002bd9e163b466db23ac92ea7216c2c9ab6dae9e79aaa82e32ab', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 118300, hash: 'c7cda12d47b2f5ab8fdc1c8f50560eaee40cb5881d54a69d21b0633b33cd0a61', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 99955, hash: '836c1642c6504ba9518e8c9cd6ef4b5b0f3bca223452f65f3e7462c9ea351733', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 88009, hash: '80edf27c8209b8d5136a36c5564d7209ffaab88fea50c9be38d6ca32776c1b5a', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 87233, hash: '26cf82c14e5da2076da757db2d492ac916c95c7b9597257d57ec63a2daeba0d0', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 106090, hash: '2f2e2ec76766c3b73e7b4609dc23f6152e87f2426b1c8bf9c63ce93a12365a8e', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 89152, hash: '9060b9d1b4027430d53aea43771b326c5822768d18b251da469ba90b0ed595e2', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 87217, hash: '2bc278dd52d50c7a51cb47281d64ec321c2970263f1a12252fcf298cd9eb6f85', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 84109, hash: 'c73817e0cbd217828fef53711fbd1e3c6ee1d31b16155acb42fa15830ffa4526', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 83886, hash: '50f78fba1a1648427a1ce18ec8743b3846e77a8236d81502eb8373b751be6ead', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 118106, hash: '6bf1957b652561bfc84344c690b07002118d3ba06043caa4bddae1fab40a353c', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 115250, hash: '1f3d5cdc999ee6632da8d261b3a1bb5b798c89818d5057ae5b3e01629f1abbd5', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 108908, hash: '2b19e735314c1e68242daf9d333945a36a2a600f9f673192d8c5a0e0cbab20a0', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 87941, hash: 'b0b794b34bb1e10eb9db2c0e91b7bdab37a45adfa2a3b40fa45bb2b26ef0c4c4', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 79752, hash: 'dcd3737088b778728e66393fce2792fe8daaaaa84951ba07e9bdfa0128608104', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 80200, hash: '3da1b7397bc9fa9d039a0913ccfd5de3fbd651db5298dce7e55fb9cc47b3fcdb', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 81348, hash: '9e61519afa36ce360874363fac532f530d9ff6efe6088e938adbdd69ef52c5cc', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 96990, hash: '0a507bd54e6f5054da8ac56080c6c46463a4b10605777c65b4ef668bdfeabe19', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 96811, hash: 'ef761ba6db6945f9c857358b131076f84bbd6369a77a14fc1d23dc1f66826d93', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 99578, hash: '4cfc7103ef90bbc63626ba9317591d7825f335dd1027aad027702d7ae1b916de', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 104386, hash: '2ebdd225159ea124cd4fc9f13c21b7fbb4a0851adb377d053c6530c14322a55f', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 64646, hash: '44bace62ad782ed83997ab2597d0cc51466d6169050e3143d0888750d4f94504', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 67014, hash: '1610208683e8c96a2d042d4a6ad2026d5824c7ff8f66e76d4678c7a4976d36da', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 88793, hash: 'a3f1f8edc7c0a1b774a86db76acf276180f157e2882a268fd8809a31fd5c98ef', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 66574, hash: '18b4e772c4d75679e7ec81a9d784cdea3c7a17e53a64f2174a305134b678b875', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 107108, hash: 'f6958c8122014a5be752203540824c7e0468ba498674c148bb975763ca9167cd', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'styles-SJXF7BOE.css': {size: 14133, hash: 'RNxJHEF3Jbk', text: () => import('./assets-chunks/styles-SJXF7BOE_css.mjs').then(m => m.default)}
  },
};
