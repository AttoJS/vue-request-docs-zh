if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const o=e=>i(e,r),u={module:{uri:r},exports:a,require:o};s[r]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-c2f7a30e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"bc938a56a09cd1df2af572f458b9fcbe"},{url:"api/global-options.html",revision:"4333dd80ce8b8c8cb7af821bc3666c9a"},{url:"api/index.html",revision:"ca3784fc1ee427b42a81763612e031fd"},{url:"api/loadMore.html",revision:"dccf67b0332554ed093fe302624bddc2"},{url:"api/pagination.html",revision:"9835aef632aed400b7bab360c135d4ca"},{url:"assets/css/styles.e687a4a1.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/387.51f95e0e.js",revision:null},{url:"assets/js/43.4b816124.js",revision:null},{url:"assets/js/626.e6c6c68a.js",revision:null},{url:"assets/js/app.0b7c350e.js",revision:null},{url:"assets/js/runtime~app.30926408.js",revision:null},{url:"assets/js/v-0b36a592.59b59bcf.js",revision:null},{url:"assets/js/v-1324f911.9507b4c5.js",revision:null},{url:"assets/js/v-141987ca.e827b933.js",revision:null},{url:"assets/js/v-1c7b2593.2ff8fb72.js",revision:null},{url:"assets/js/v-36c665f0.648b95e3.js",revision:null},{url:"assets/js/v-3706649a.ca299791.js",revision:null},{url:"assets/js/v-4b535f1b.f4d3cc0f.js",revision:null},{url:"assets/js/v-4bd15160.97662f6c.js",revision:null},{url:"assets/js/v-57ea1ccf.03cd2724.js",revision:null},{url:"assets/js/v-5d1e647b.fdad5eb8.js",revision:null},{url:"assets/js/v-62cf96d0.6cd9590f.js",revision:null},{url:"assets/js/v-6937fa4e.0f046ab7.js",revision:null},{url:"assets/js/v-6fa8152f.5bb3324c.js",revision:null},{url:"assets/js/v-73517d5d.fb0ec931.js",revision:null},{url:"assets/js/v-744497ce.56e049fc.js",revision:null},{url:"assets/js/v-74534cee.1cdfb6f3.js",revision:null},{url:"assets/js/v-7bceba84.fa750f32.js",revision:null},{url:"assets/js/v-7f1d6617.4a98e409.js",revision:null},{url:"assets/js/v-8daa1a0e.2b06dcd2.js",revision:null},{url:"assets/js/v-964bff12.55bc9cd6.js",revision:null},{url:"assets/js/v-aa9f2af0.9838b231.js",revision:null},{url:"assets/js/v-b06bec6e.b247f004.js",revision:null},{url:"assets/js/v-bb9fcf52.4ebbf334.js",revision:null},{url:"assets/js/v-d0112c92.6c3be90c.js",revision:null},{url:"assets/js/v-d1efe634.9d24c67d.js",revision:null},{url:"assets/js/v-e260681e.77580787.js",revision:null},{url:"assets/js/v-e7e57ac2.6a9be22c.js",revision:null},{url:"demo/polling.html",revision:"4569e5c0e9a67efe0308e439d5c97249"},{url:"demo/refreshOnFocus.html",revision:"4569e5c0e9a67efe0308e439d5c97249"},{url:"donation/Alipay.jpeg",revision:"f21a87a24b6a61fe94079e29e0766df8"},{url:"donation/WeChat.jpeg",revision:"b65a2596ce49069f7bedc7b5659646dc"},{url:"guide/documentation/cacheKey.html",revision:"d90055046221a9935ca514972f19ebf1"},{url:"guide/documentation/dataFetching.html",revision:"9e19064c453050c465b3472aefc11134"},{url:"guide/documentation/debounce.html",revision:"2d6c33e488bf4cc6117aeacbaffa75fa"},{url:"guide/documentation/errorRetry.html",revision:"3dd26de28f062acaf94483409eed99ca"},{url:"guide/documentation/globalOptions.html",revision:"f34ede090e0d7d27e211327abd19c94a"},{url:"guide/documentation/loadingDelay.html",revision:"6d88a252314c65eba22f097b69ad60ac"},{url:"guide/documentation/loadMore.html",revision:"78035f1c1b992f711cd51c615ee8503b"},{url:"guide/documentation/manual.html",revision:"3e1d0147a87c6762f2ff0d22182d138f"},{url:"guide/documentation/mutation.html",revision:"7692f1035a8206f047ae5eba022c28eb"},{url:"guide/documentation/pagination.html",revision:"8af88d75b1ec99e147780ed4c81610c1"},{url:"guide/documentation/polling.html",revision:"c406c844de9590d2e997db4dc0ab2f07"},{url:"guide/documentation/ready.html",revision:"cda9995c119d633474251ed1745d8346"},{url:"guide/documentation/refreshDeps.html",revision:"77dcf95218b09337768f200229f1100a"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"070cc0f01a8e5cd73f9a3dcdb96dcf8b"},{url:"guide/documentation/throttle.html",revision:"c0f554bcfb15f7c29a849a870a05f3da"},{url:"guide/gettingStarted.html",revision:"5821bfe9e4031833cf877d68bcb70071"},{url:"guide/introduction.html",revision:"2268b7d73aa9e28d39651dac4046d264"},{url:"guide/migration.html",revision:"c1e41e52bc64f56cf4e5e19f5668ef32"},{url:"index.html",revision:"04a786b60dbcfe9e2993cbd677aa5dc0"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"},{url:"sponsor/index.html",revision:"c3829f7f91650196578eebc989bbe1a7"}],{})}));
