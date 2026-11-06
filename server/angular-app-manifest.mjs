
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
      "chunk-BHvSl8IC.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-Cs_lC501.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cs_lC501.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRxfH_Lg.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lUxm6VYW.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bt2KyPBU.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ut8blY8H.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dyagt-Nr.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CXgWvAhH.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C55yY2D2.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJ30CvJ0.js",
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
      "chunk-SyJWBiMt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SyJWBiMt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SyJWBiMt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SyJWBiMt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SyJWBiMt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SyJWBiMt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SyJWBiMt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4OiBjdKJ.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4OiBjdKJ.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4OiBjdKJ.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4OiBjdKJ.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4OiBjdKJ.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CrUszqJK.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4OiBjdKJ.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CrUszqJK.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-8RbGbXxt.js",
      "chunk-CMGWxVxz.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Cvz-z5Ji.js",
      "chunk-COscVnWl.js",
      "chunk-B7gfjcyB.js",
      "chunk-ChIcZBpE.js",
      "chunk-Cnc5Gc93.js"
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
    'index.csr.html': {size: 16193, hash: '3544462b7ea825c036850429c7503a3fe8fbd5b4df773bd3cfefb4bf3e94f6ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '62d502f878ff78882a4cf8dc2bcc7fe8330c13194a177e220366969aea93e3eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81659, hash: '5dc0c271ab14188dbff887d65cffa113e839f4d90232e3897d024396093b2403', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82284, hash: 'ec77b14371d75244b3e8cb54e96267b4308af6e6aeaa3cad43ef7d28d9c26dc8', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85589, hash: '75acdec652646566ea74b3467700e5c7900f4e8292eceae89ad0c3d3abd00cc5', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84095, hash: 'a62e0189bb88e654e58efd3442b0b87b003529a9c6090664993d77b17628dcaa', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89169, hash: '2f2382da9f6641a2209ec442b5304fa0c0779e87188699d7d3090684855695f7', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111633, hash: '41850100f50dcb48a186970554056cbe61227b34c342a6f80776978f602d7a34', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80141, hash: '27f859e11023a32e07bf5ebfbea5a6463f927081035cb56931d0006a53ba7beb', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 94707, hash: '97d07286fdcef83179a065567c87dd1c6c3e4037ea0640b5a65d4fe1e2d8971a', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67424, hash: '3f20518a5df1509c331d0be74b8cbbce53bbf950b7917e51ccf0def88c9a0232', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81513, hash: '79751a39ad6383f99aef07097c6271823555613d4c2d45903c3bd31a4c6fe7c6', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77298, hash: 'a9c4e77e5635678401697257f8486651a933258d8226f205689e387c14f2d1ce', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76721, hash: '2845f7db05f375a56878d94f1ee65b783378deff02db7e20ade9cbd17ee4eb52', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74639, hash: '74e3c47f32731c682d7622a89f4f4ca9e7967b1d032fc56f1de3a301e372855f', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67394, hash: '95dd6c8009fdb626326776e9605df9ef7ed02d570574c66cf14c96be6b59f048', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80503, hash: '6ce1c10ca4c4b7201755a4f4a66859996bacafa2ce8cd03f94eee3be8fa1a320', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77371, hash: '431bee67e87747a3f5a6c7d5f7c1c1ed9b54fcb5cc4bff99f951acfc33447202', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76250, hash: 'fa980306c888dcb858a6b0c693103fb49096aef8e1e0693e9e6faad53b08e3fe', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82357, hash: '5caa6552a7bfd03a75eac78d392c0ea2c7225d41085d24a24a71797f3521ac75', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 124586, hash: '763ce61c00ea0cbf71c44ae951838e2c9eb360a31014003ed2f403816ae60363', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124228, hash: '01ac7877baa12f7fe40addc73341e1695e2e3855b4a9acfee0930ed18220bd9b', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121533, hash: '5e99b310369a038fe8c9d7047bc537f3cc4c630e346ee8094e6d39c61348d6b4', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123086, hash: '4e51c1eb0aabe89bb3de8f5d35a20bca811d91cf560fd6f8344e96032ed17522', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118324, hash: '52400a91ef0bcef5ed4c23b2e588975f9d30e9dc30cbb53b92ec9d13cd059101', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 112461, hash: '4720e85201e9bf3334592dfeb5ea0dac5187f61138bf5b84113769434dad5cc8', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 103220, hash: '4a1857ea7d4ed043f0532c8d05fc849d61d336a2516b3c949be5937c547b1258', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 105670, hash: '78e0e8a206b9ee9b338871b170d6207d3241abc4a1de64f5506c62cf7bdc5c7b', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 114491, hash: 'b15b00a9478d98056c7c1a74aa60056b9bb15f5f3f7680ddf37f902c434820e1', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 102329, hash: 'b35e7ca73fa5663e20cc2713f6d775404f5b5fabd08444967a7b4f747ab41353', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87983, hash: 'c632c95eeba5b1b9277594386c95eca10b76e34a6ee29781345a247e46fd1243', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87760, hash: 'f8afc39cb9cdade3069cf01445189af125220387c80ae1f1ce59bf0419496796', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70565, hash: '0038355e72e6592d8a32866298e6f3b3964ed1a20650eecfc57b5f0216396b7b', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 97871, hash: '4d060bf6be124163339aea0d5777a18c7fbe2fea39fbfac195ceb396f71add16', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70038, hash: 'fc934efb78abbef84212a30596894df7a522630eeb7c9e7188f1c9292cba0e08', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118201, hash: 'bb9c90399319ed1f553d51ac734cb76c1dbe98284f5d4ec8529fd021d1af98ab', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 93673, hash: '9aeffee59e0da26fc06a5cc8365053c8e2a904f522f7c30146ec8c34ab8c9531', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 106698, hash: '52daa82757c00ff235c6bdfe67eac8198c577b4cb7d8fad5ef590147e8d21bf2', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 94210, hash: 'ba43f7f07e56501e582329036f355841dd85615260a1c1edf08e8e9525bb52a1', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 93382, hash: 'eb302c9a99eed920cb49696e24413d18a3d95987811d6a15b7ce9108e03fccee', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 87210, hash: 'bc9c0a073bd3d1f4db1387ef33caf331b317d5c4b195475d2eb1214a3aa33080', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82557, hash: '845bea975b320ed0b2301ec150b1a10d8ab927880d76e833cd380697010eed25', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104500, hash: 'fd770dd68b525bfac54960a881bf458d8a836e736e1490b3a911aa4681c83f26', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94531, hash: '8147c3ca612212140db9f7d81d7a295699d6b95d7acb735fd2631391ad8533f4', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94452, hash: 'b7718f32d44e137cbd60815fb760a0e361ccb4d2e387faeae9979a5ea322b388', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 106237, hash: '0f88a6ab96f79bc6b2770c20043a4cd9907162c5e76ea031c0e3562bddecc0cc', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 117023, hash: '0228952e096c4c0b3dccc651dde92a691a2081e4350d62e4e4abf9cf9f1213a4', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 111124, hash: '5a3a962875e996fe00c4d3805dc972ceec1836dcc71686a4dd9721a3f00709e7', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68228, hash: '9f2ec3aa61992489eaef3e0cc52cd2b8df062bc4bf9c701c6c7cafe57fa8ef29', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67446, hash: '00f756c6ef9b7c220ca469dde51e40d44b90b4f0aabfea270d9a9f77937eaead', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118542, hash: 'ec57e4f48de1facdf5ce56193c1ec726162d7bedfd6dfed3dcf37ed2dd86259c', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121015, hash: '6f74861dd4ccd2f1b0ab95896754a619d5eb7caf8d2480048b3a81d10d71d22c', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119427, hash: 'dd577a8a1a8f48c7ba7dcd4da09cc93fc458facb95493b4a8e343ddb38dde3d0', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118621, hash: '95263b87f6a0deb5552f7cabc57bdd01936c82ff5398b6c2ac681c1d947e21f2', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124347, hash: '827323adc87e9eac0e171add37291045d221e7af30142eb97f297ff9262f5574', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
