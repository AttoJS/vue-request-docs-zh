if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-cd8a034b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"d6d668df9414a79561470f6cb2bfa72f"},{url:"api/global-options.html",revision:"8f0f0709db6746c8b0c8f87d1925d505"},{url:"api/index.html",revision:"20d13ef5ec3f814b0e19a80dd9d3900e"},{url:"api/loadMore.html",revision:"5411815149d424fc0e8dc2b41d76cb67"},{url:"api/pagination.html",revision:"405b4d8682092660f91805c9585fa484"},{url:"assets/css/styles.63359938.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/35.2bb443fe.js",revision:null},{url:"assets/js/43.408f4e33.js",revision:null},{url:"assets/js/626.1da52ba0.js",revision:null},{url:"assets/js/app.87c8706d.js",revision:null},{url:"assets/js/runtime~app.8c6725de.js",revision:null},{url:"assets/js/v-0825d054.39f3f237.js",revision:null},{url:"assets/js/v-0b36a592.47ce6241.js",revision:null},{url:"assets/js/v-1324f911.4331ce6f.js",revision:null},{url:"assets/js/v-141987ca.9a08db6b.js",revision:null},{url:"assets/js/v-1c7b2593.fa60cc99.js",revision:null},{url:"assets/js/v-36c665f0.f454cb8c.js",revision:null},{url:"assets/js/v-3706649a.756f0df3.js",revision:null},{url:"assets/js/v-4b535f1b.c1326de6.js",revision:null},{url:"assets/js/v-4bd15160.b06d6736.js",revision:null},{url:"assets/js/v-57ea1ccf.dce6cde4.js",revision:null},{url:"assets/js/v-5d1e647b.2868e22e.js",revision:null},{url:"assets/js/v-62cf96d0.719954f6.js",revision:null},{url:"assets/js/v-6fa8152f.22d955b6.js",revision:null},{url:"assets/js/v-73517d5d.5f74eb88.js",revision:null},{url:"assets/js/v-744497ce.4722d7cb.js",revision:null},{url:"assets/js/v-74534cee.1bcbbfac.js",revision:null},{url:"assets/js/v-7bceba84.5477daae.js",revision:null},{url:"assets/js/v-7f1d6617.3b9938d8.js",revision:null},{url:"assets/js/v-8daa1a0e.134a34de.js",revision:null},{url:"assets/js/v-964bff12.ece6dbff.js",revision:null},{url:"assets/js/v-aa9f2af0.db81eec3.js",revision:null},{url:"assets/js/v-b06bec6e.4eaec56a.js",revision:null},{url:"assets/js/v-bb9fcf52.fbcf33f7.js",revision:null},{url:"assets/js/v-d1efe634.6079dc27.js",revision:null},{url:"assets/js/v-e260681e.895b1dfb.js",revision:null},{url:"assets/js/v-e7e57ac2.1fab1fa0.js",revision:null},{url:"demo/polling.html",revision:"3124059ad9980256c41b0fe0d0e8604b"},{url:"demo/refreshOnFocus.html",revision:"3124059ad9980256c41b0fe0d0e8604b"},{url:"guide/documentation/cacheKey.html",revision:"9ca3e446e3ee83dd485feeb9e7c73b1d"},{url:"guide/documentation/dataFetching.html",revision:"6787ec498d7bbfcfb398bfabeb093941"},{url:"guide/documentation/debounce.html",revision:"b189677eda3e6f1a5a25d2ba903c0fb0"},{url:"guide/documentation/errorRetry.html",revision:"448a5e88d97d61c96c9f49e26c926d30"},{url:"guide/documentation/globalOptions.html",revision:"955d3c94da9b4353a6a6069cb87f1cce"},{url:"guide/documentation/loadingDelay.html",revision:"810f5f90cb791a41725c1583d57195dc"},{url:"guide/documentation/loadMore.html",revision:"f0e6d5939f2dbd61dd5a9cc1bd3e53e3"},{url:"guide/documentation/manual.html",revision:"f4235c87aecb5b97f6c17369cd0aadbd"},{url:"guide/documentation/mutation.html",revision:"158e9ce46a5b077e5e0dea4ef51344fb"},{url:"guide/documentation/pagination.html",revision:"189aba34d6c90e8c11a800fecdc7da40"},{url:"guide/documentation/polling.html",revision:"c80873259e7dd35b9da55c13a341db10"},{url:"guide/documentation/queries.html",revision:"743a6b941646f246911b4981ac231688"},{url:"guide/documentation/ready.html",revision:"35e5e283b88ff4b99ea7b080610e90c4"},{url:"guide/documentation/refreshDeps.html",revision:"3e75b949e654caf0d4d77b824b4b16a9"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"7e7dae1fc58a5e53138d227eca96209b"},{url:"guide/documentation/throttle.html",revision:"011ec2a26a7b0cde0d64afce7fbec55b"},{url:"guide/gettingStarted.html",revision:"aa7ad8cea0a11c808ad608f459483500"},{url:"guide/introduction.html",revision:"762052abb4dd5fca463fb3e03ef444c0"},{url:"index.html",revision:"f1528e19a7a42162307ab5c179a25cbd"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"}],{})}));
