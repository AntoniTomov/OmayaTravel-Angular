
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
      "chunk-uUtO7m6x.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-DVux2KUV.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DVux2KUV.js",
      "chunk-DW2LmWkC.js"
    ],
    "route": "/enquire-now"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-gQNzyPjV.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/blog-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Q9UKJsTu.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C9hcrKkU.js"
    ],
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BhAw54mA.js"
    ],
    "route": "/our-story"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DtAZ86pr.js"
    ],
    "route": "/your-dmc-partner-in-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Bo4LlKEB.js"
    ],
    "route": "/why-book-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-lIdn7oB2.js"
    ],
    "route": "/private-tours-your-trip-your-rules"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Dcr-k9em.js",
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
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CdclUqKO.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/destinations/namibia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/tours-list"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/classic-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/women-only-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/solo-travellers-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/all-ages-tours"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7RT60j3.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/calendar-2027"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D0a9kXC0.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/calendar-2027/september"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B7RT60j3.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/algeria-desert-expedition-tadrart-rouge"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/bulgaria-beyond-the-ordinary"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/india-mumbai-ajanta-ellora-kanha-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/kyrgyzstan-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/morocco-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/tour-item-morocco-solo-travellers-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/tour-item-morocco-women-only-tour"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/women-only-tour-bulgaria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/women-only-tour-india"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/women-only-tour-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/women-only-tour-namibia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DfpEW7ck.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-B8Fj9V4R.js"
    ],
    "route": "/tour-item/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/morocco-casablanca-marrakech-route-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/women-only-kyrgyzstan-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/song-kul-yurt-stay-packing-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/bulgaria-classic-women-only-tour-comparison"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/10-unmissable-places-to-visit-on-your-bulgaria-trip"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/maroko-za-zheni-pateshestvenichki"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/ezeroto-song-kul-kirgistan"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/india-otblizo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/sauditska-arabiya-za-zheni"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/turoperator-indiya-kak-da-izberesh"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/patuvane-do-namibiya"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/how-to-visit-song-kul-lake-in-kyrgyzstan"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/tassili-najjer-national-park-algeria-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/how-to-choose-small-group-sahara-tour-algeria"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/solo-group-tour-morocco"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/dharavi-mumbai-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/cape-town-to-windhoek-namibia-guide"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
    ],
    "route": "/women-only-tour-namibia-what-to-expect"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DEpoms4D.js",
      "chunk-B_LgsdfB.js",
      "chunk-BVBAKxjn.js",
      "chunk-CYkeHv9h.js",
      "chunk-EZwvVFbI.js"
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
    'index.csr.html': {size: 16193, hash: 'c0b442ec2385e1c81177eb81d0ab1dde3fe70abc038b85986b98683d0fbb4547', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15210, hash: '7aecd9c8a2cf7001c53a18cd9290b4f2ba35348d563d64b9b3dd4eb4f977af90', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'destinations/index.html': {size: 81637, hash: '6400d558bb2bb4c61b382979cbbba7dd322c1acdace8308054ac62e3bed99758', text: () => import('./assets-chunks/destinations_index_html.mjs').then(m => m.default)},
    'destinations/algeria/index.html': {size: 82262, hash: 'c6a9e6d240e24fc523e7901088d3189e972b60b4605bddc2bcef967471901eff', text: () => import('./assets-chunks/destinations_algeria_index_html.mjs').then(m => m.default)},
    'destinations/bulgaria/index.html': {size: 85567, hash: '0adf545b3963f3100f8138acbcb2000ff29f6d5cf37a309d7786dc6a9eab727a', text: () => import('./assets-chunks/destinations_bulgaria_index_html.mjs').then(m => m.default)},
    'destinations/india/index.html': {size: 84073, hash: '4d7a1f74c79c200c5daf8b5c741577f837a3a6db3ba2ba66669c89561ab67e06', text: () => import('./assets-chunks/destinations_india_index_html.mjs').then(m => m.default)},
    'destinations/kyrgyzstan/index.html': {size: 89147, hash: '3b28b1e498b48c8ebc73f4984fdafbed26a4cce89f0d63d541ed115d3632fe6c', text: () => import('./assets-chunks/destinations_kyrgyzstan_index_html.mjs').then(m => m.default)},
    'index.html': {size: 111526, hash: '925effcb457226a6f97f9c8b0e3fe99e9b56a4655905b8312d08ac97c2021dd4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'enquire-now/index.html': {size: 80119, hash: 'f0047a17940ea58a26dc15328f6a063705cb9002c0a3838a2efa34e278b908d7', text: () => import('./assets-chunks/enquire-now_index_html.mjs').then(m => m.default)},
    'blog-list/index.html': {size: 97264, hash: 'e3d88d886bee6567d1ef19fc8250f8b89918e42e6f0799d2face37554f7c3205', text: () => import('./assets-chunks/blog-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 67402, hash: 'aab5a9c0cec669cd98265059e61fc10a73e3009fc240419300c1e19733c3f383', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 81577, hash: 'c98a6dfe80781bc91bf6b5f3faa3d4a90fe094676b5784bfdacd8bd3fa79477d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'our-story/index.html': {size: 77276, hash: 'c83769897d216ffccefcc9e9f57f5ead3a715ef33b141b7a1bf051e13e92bd9b', text: () => import('./assets-chunks/our-story_index_html.mjs').then(m => m.default)},
    'your-dmc-partner-in-bulgaria/index.html': {size: 76699, hash: '9066df04916e0f71161959b719fe77d4572028fb6057dbcebfb210eea844b9f9', text: () => import('./assets-chunks/your-dmc-partner-in-bulgaria_index_html.mjs').then(m => m.default)},
    'why-book-with-us/index.html': {size: 74617, hash: '35da05d275405f3c2e0429bd16ca919e8b2cb6d337986a008f86b3c0f664db1d', text: () => import('./assets-chunks/why-book-with-us_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/index.html': {size: 67372, hash: '3c3d6975b8b2b80d638ecaba5be46ec196cd6e4bfbce9174f0fd64ac20fc1cc4', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_index_html.mjs').then(m => m.default)},
    'private-tours-your-trip-your-rules/describe/index.html': {size: 80481, hash: 'c63a18214f1a944753d6e0af7b6fa3059628ad2376e1a3aaede05bc7f209d3fd', text: () => import('./assets-chunks/private-tours-your-trip-your-rules_describe_index_html.mjs').then(m => m.default)},
    'omaya-travel-license/index.html': {size: 67424, hash: '009b0c1e48129000e83c87387a18098a00d2c4a2301a4d173b91fc1575c1a523', text: () => import('./assets-chunks/omaya-travel-license_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 77349, hash: '6285e208c7fbe0ccafa531214a2888c83bf89405be54542b817a4962b69066a4', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'cookie-policy/index.html': {size: 76228, hash: '82ffa1e18a372687c7ff9366a13c65331169051af9c2cf2074c613b70e502991', text: () => import('./assets-chunks/cookie-policy_index_html.mjs').then(m => m.default)},
    'termsconditions/index.html': {size: 82494, hash: 'c6d51967ebb8f40ac6b5c0d6fa89c99acd14940971d2d0efe97f9b936fc198b4', text: () => import('./assets-chunks/termsconditions_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-solo-travellers-tour/index.html': {size: 125136, hash: '0c32d0ff015efefd916939fdf3a7b57dc9adf3472e20f157c62272602eae61a4', text: () => import('./assets-chunks/tour-item_tour-item-morocco-solo-travellers-tour_index_html.mjs').then(m => m.default)},
    'tour-item/tour-item-morocco-women-only-tour/index.html': {size: 124479, hash: '726e3abf2f80cb1559773248688cc5c545d92649f1c9e6b9a83049ef04b97b30', text: () => import('./assets-chunks/tour-item_tour-item-morocco-women-only-tour_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-bulgaria/index.html': {size: 121601, hash: '3a9fcdcaf6166700698c00954a27b0c1717f76e53859ecff8b344210d6a372f0', text: () => import('./assets-chunks/tour-item_women-only-tour-bulgaria_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-india/index.html': {size: 123154, hash: 'a34509a66c4867562323c8fe30ccd3ea0bdf4fd8a1c6849641375a5c580fc05d', text: () => import('./assets-chunks/tour-item_women-only-tour-india_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-kyrgyzstan/index.html': {size: 118392, hash: '00a2ea782c2acab5a78ccc3088b0033664f6bfce151217eec4794cca378adf5a', text: () => import('./assets-chunks/tour-item_women-only-tour-kyrgyzstan_index_html.mjs').then(m => m.default)},
    '10-unmissable-places-to-visit-on-your-bulgaria-trip/index.html': {size: 113452, hash: 'fe51c2ff912eaa16ba2c9fca2a5c127fe43ffba602d332a15b0066b7e4a7be90', text: () => import('./assets-chunks/10-unmissable-places-to-visit-on-your-bulgaria-trip_index_html.mjs').then(m => m.default)},
    'how-to-visit-song-kul-lake-in-kyrgyzstan/index.html': {size: 104188, hash: '5d3e6e70bda703c7a1b6fb92be76dc3f9ea789a492075fb44df40e82091a4234', text: () => import('./assets-chunks/how-to-visit-song-kul-lake-in-kyrgyzstan_index_html.mjs').then(m => m.default)},
    'tassili-najjer-national-park-algeria-guide/index.html': {size: 106627, hash: '7357c1f7ab46086accfb58a92238cca3303aa3e11cea625e649bd58cf15c49f2', text: () => import('./assets-chunks/tassili-najjer-national-park-algeria-guide_index_html.mjs').then(m => m.default)},
    'how-to-choose-small-group-sahara-tour-algeria/index.html': {size: 115454, hash: '81fbab4f5ed4ab41be60603d5a2bed201a7a2d7262a2263815e547e8d20f49b5', text: () => import('./assets-chunks/how-to-choose-small-group-sahara-tour-algeria_index_html.mjs').then(m => m.default)},
    'solo-group-tour-morocco/index.html': {size: 115237, hash: '943e4857cf64fa6632c4f4d762b6148fbfd3641ba7f817c3c3a5bbe7b0eceefa', text: () => import('./assets-chunks/solo-group-tour-morocco_index_html.mjs').then(m => m.default)},
    'solo-travellers-tours/index.html': {size: 87961, hash: 'e1aa43a346755864dd1db03a33082bd0a2d17c7187d045627ab83530246406d8', text: () => import('./assets-chunks/solo-travellers-tours_index_html.mjs').then(m => m.default)},
    'all-ages-tours/index.html': {size: 87738, hash: '8b88b5565d8ca86bb8b0a1377c5fbb4c556266fcfbae07b7267cf391085a35e4', text: () => import('./assets-chunks/all-ages-tours_index_html.mjs').then(m => m.default)},
    'calendar-2027/index.html': {size: 70533, hash: '67265260c741c1099a4752d999ab1fbc8fa27cb3221f139c945a0defcec4e207', text: () => import('./assets-chunks/calendar-2027_index_html.mjs').then(m => m.default)},
    'calendar-2027/september/index.html': {size: 96521, hash: 'a63e6404c2837440244b136c8002fae988e9cfc5985d2d06050fbda7c78eca71', text: () => import('./assets-chunks/calendar-2027_september_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 70016, hash: '66f8c5d56961c298162bd3eb80644a0182c598b5a8aad365b5f80a15db4bfc7b', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'tour-item/women-only-tour-namibia/index.html': {size: 118269, hash: '1a045810aeb25a195b4b28bbbac34ec5b2528f474f0a10eff3d085a583dfee28', text: () => import('./assets-chunks/tour-item_women-only-tour-namibia_index_html.mjs').then(m => m.default)},
    'morocco-casablanca-marrakech-route-guide/index.html': {size: 94628, hash: '294e8942e0483a83d1d5e232420dd0733a891daf03c8bcecc35cfbd75a0be20e', text: () => import('./assets-chunks/morocco-casablanca-marrakech-route-guide_index_html.mjs').then(m => m.default)},
    'women-only-kyrgyzstan-what-to-expect/index.html': {size: 107693, hash: '5e85defc102a8dd7143aee45bdf1c7c87d6599e6a7b7aadac536b0c5211b3457', text: () => import('./assets-chunks/women-only-kyrgyzstan-what-to-expect_index_html.mjs').then(m => m.default)},
    'song-kul-yurt-stay-packing-guide/index.html': {size: 95197, hash: '49f63afab4b1cdabfbd8deae7386df76164dd0382d30f76d0c88acdf7f077ee1', text: () => import('./assets-chunks/song-kul-yurt-stay-packing-guide_index_html.mjs').then(m => m.default)},
    'bulgaria-classic-women-only-tour-comparison/index.html': {size: 94369, hash: '99358acda9ee53124d70d8fdd81c59f70e81ff73f00f10b878996e21ad782f5f', text: () => import('./assets-chunks/bulgaria-classic-women-only-tour-comparison_index_html.mjs').then(m => m.default)},
    'destinations/morocco/index.html': {size: 88137, hash: 'f291c5e66d8828449238372b20ede8aa1f1816f41408298a46b6e492551294a1', text: () => import('./assets-chunks/destinations_morocco_index_html.mjs').then(m => m.default)},
    'destinations/namibia/index.html': {size: 82540, hash: '20437ccffacaa3c61408c3fdf39a9f846299bc10874511711ff5fa42c3b51fce', text: () => import('./assets-chunks/destinations_namibia_index_html.mjs').then(m => m.default)},
    'tours-list/index.html': {size: 104478, hash: '2c42fa341f4d4fd7705aeab77d069a2a3dea5286330e7047e8261e04c98f5d9a', text: () => import('./assets-chunks/tours-list_index_html.mjs').then(m => m.default)},
    'classic-tours/index.html': {size: 94509, hash: 'bf215be735fd37d8cbb2e0f04267365784c8098174d0872dac9e266025afd59a', text: () => import('./assets-chunks/classic-tours_index_html.mjs').then(m => m.default)},
    'women-only-tours/index.html': {size: 94430, hash: '67dd198720c2336bce6dfb6166e14e71cdce5be0745daf50df2ce5c4932cdb1f', text: () => import('./assets-chunks/women-only-tours_index_html.mjs').then(m => m.default)},
    'tour-item/algeria-desert-expedition-tadrart-rouge/index.html': {size: 118610, hash: '7406a13ca7ec94bd23b0d43cd75d76fccd8171f866510d30f7949492eda0fae9', text: () => import('./assets-chunks/tour-item_algeria-desert-expedition-tadrart-rouge_index_html.mjs').then(m => m.default)},
    'tour-item/bulgaria-beyond-the-ordinary/index.html': {size: 121083, hash: 'cfee46d8aefb254efc2d09bfd6eee8be1c4170cccf7b4ab8f5c31ee3e9bf4a4a', text: () => import('./assets-chunks/tour-item_bulgaria-beyond-the-ordinary_index_html.mjs').then(m => m.default)},
    'tour-item/india-mumbai-ajanta-ellora-kanha-tour/index.html': {size: 119495, hash: '95f78001358c4017d4d8015d5f60725d154a62fbac490538539bcb16aba5fc52', text: () => import('./assets-chunks/tour-item_india-mumbai-ajanta-ellora-kanha-tour_index_html.mjs').then(m => m.default)},
    'tour-item/kyrgyzstan-tour/index.html': {size: 118689, hash: '30fbb9665599bec91452f97fa12f513f7940c9ea4cd7959d4d50eddfb8ba8c89', text: () => import('./assets-chunks/tour-item_kyrgyzstan-tour_index_html.mjs').then(m => m.default)},
    'tour-item/morocco-tour/index.html': {size: 124598, hash: '99a8d66012196fec636fbe158d6ea35ca80c3201cee1a65bc429dc3885ab432a', text: () => import('./assets-chunks/tour-item_morocco-tour_index_html.mjs').then(m => m.default)},
    'dharavi-mumbai-guide/index.html': {size: 103284, hash: '8c053b2ce88bd4cfc8946affcb65140eeee3b8dad78b37b97c90fb18a12ebecc', text: () => import('./assets-chunks/dharavi-mumbai-guide_index_html.mjs').then(m => m.default)},
    'cape-town-to-windhoek-namibia-guide/index.html': {size: 107328, hash: 'fe3204f6eeda4b57733d8b500ee8365dc9d82d9487c110536fc8eb97e9939c45', text: () => import('./assets-chunks/cape-town-to-windhoek-namibia-guide_index_html.mjs').then(m => m.default)},
    'women-only-tour-namibia-what-to-expect/index.html': {size: 118114, hash: '78ca94af7623b661843f8bbd4085eb26cdfd5c55450ed888992c0bcbff046fcc', text: () => import('./assets-chunks/women-only-tour-namibia-what-to-expect_index_html.mjs').then(m => m.default)},
    'the-complete-visitor-guide-to-rila-monastery/index.html': {size: 112127, hash: 'f7a59bb22987b86b979f6f9d0193c078064935ff44f79163266eb56dcca0b1b4', text: () => import('./assets-chunks/the-complete-visitor-guide-to-rila-monastery_index_html.mjs').then(m => m.default)},
    'not-yet-but-soon/index.html': {size: 68206, hash: '0c8ee591f8e8d9b52fb615ef3eafdd627b82c9cf8b32ea0aad9d58074c96ef35', text: () => import('./assets-chunks/not-yet-but-soon_index_html.mjs').then(m => m.default)},
    'styles-FGDQIAWH.css': {size: 14325, hash: 'FcXrRoz6ZUA', text: () => import('./assets-chunks/styles-FGDQIAWH_css.mjs').then(m => m.default)},
    'maplibre.css': {size: 69325, hash: 'UU8TY17XM04', text: () => import('./assets-chunks/maplibre_css.mjs').then(m => m.default)}
  },
};
