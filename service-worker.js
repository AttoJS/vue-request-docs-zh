if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-fa316fc2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"3e3a8f9e67a2598b7e32ae904c8a877c"},{url:"api/global-options.html",revision:"3cd30def61dfe9910435c39dc4d5cbfd"},{url:"api/index.html",revision:"a3de14f35b625b1b7a7f409962fce163"},{url:"api/loadMore.html",revision:"71d1698367e8e364dc767730efa5333f"},{url:"api/pagination.html",revision:"d5c3a24e2f8392bfc9bb24dfb9c9285f"},{url:"assets/css/styles.22a7061f.css",revision:null},{url:"assets/js/154.efa48c60.js",revision:null},{url:"assets/js/197.74d74241.js",revision:null},{url:"assets/js/626.f15e928d.js",revision:null},{url:"assets/js/887.181ab2d5.js",revision:null},{url:"assets/js/app.0a0d07d7.js",revision:null},{url:"assets/js/runtime~app.861c2279.js",revision:null},{url:"assets/js/v-041f880a.253cb3fc.js",revision:null},{url:"assets/js/v-0825d054.66ddc50e.js",revision:null},{url:"assets/js/v-0b36a592.94b326f1.js",revision:null},{url:"assets/js/v-1324f911.3c33eafa.js",revision:null},{url:"assets/js/v-141987ca.515426e5.js",revision:null},{url:"assets/js/v-1c7b2593.a5d84563.js",revision:null},{url:"assets/js/v-3706649a.b66128a5.js",revision:null},{url:"assets/js/v-3d6dd5d7.1fa87c59.js",revision:null},{url:"assets/js/v-4b535f1b.6bfde970.js",revision:null},{url:"assets/js/v-4bd15160.baf5afad.js",revision:null},{url:"assets/js/v-5d1e647b.1cbb74a5.js",revision:null},{url:"assets/js/v-5e1b0e12.e0dd3ee3.js",revision:null},{url:"assets/js/v-62cf96d0.c4af1556.js",revision:null},{url:"assets/js/v-6fa8152f.ddce7085.js",revision:null},{url:"assets/js/v-744497ce.260b1202.js",revision:null},{url:"assets/js/v-74534cee.d197db47.js",revision:null},{url:"assets/js/v-77327eb8.6402171d.js",revision:null},{url:"assets/js/v-7f1d6617.879560c7.js",revision:null},{url:"assets/js/v-8daa1a0e.acfa4ba0.js",revision:null},{url:"assets/js/v-964bff12.41e076de.js",revision:null},{url:"assets/js/v-bb9fcf52.738a2919.js",revision:null},{url:"assets/js/v-e260681e.be647570.js",revision:null},{url:"assets/js/v-fb0f0066.528488bc.js",revision:null},{url:"guide/documentation/advancedUsage.html",revision:"0801ca44465dcb9a886cdeeb7766cade"},{url:"guide/documentation/cacheKey.html",revision:"c5b825119cd933ec39d2bbf5e9d79e9c"},{url:"guide/documentation/debounce.html",revision:"7d61ab5e42fb55aa66a52239c65b63f4"},{url:"guide/documentation/default-request.html",revision:"b30abaaf7267442de6eaf1f35a9c0109"},{url:"guide/documentation/errorRetry.html",revision:"6226f556eed67d4ffb52acec5b5fcdc8"},{url:"guide/documentation/global-options.html",revision:"cf32b4b56e12ac3feb1defba0304ba9c"},{url:"guide/documentation/loadingDelay.html",revision:"fc1aebfb169f8e725de82be97c438b2b"},{url:"guide/documentation/manual.html",revision:"db8554705f46b13c474c0ef037ce142a"},{url:"guide/documentation/mutate.html",revision:"764e57bb83c9e2cd673305892f0e8829"},{url:"guide/documentation/polling.html",revision:"2cc5bcf1bbcac9a1d6ac95c8865bebf1"},{url:"guide/documentation/queries.html",revision:"1a1b67f8d3d4549846cb7a22c5a871fd"},{url:"guide/documentation/ready.html",revision:"1a3e537a6be4e0e0ce8714d16027b4a3"},{url:"guide/documentation/refreshDeps.html",revision:"bfbd694367fe76e1468e13ffca00f684"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"050b5883d04b96055b6d23a6ad3b13d8"},{url:"guide/documentation/throttle.html",revision:"e5fe043ec16a91138ec6291b7a1cb1d4"},{url:"guide/getting-started.html",revision:"69227cba13dcaa52caedc29debcf82f5"},{url:"guide/introduction.html",revision:"89b4b82177101d6059c29933d64e3889"},{url:"index.html",revision:"5598d8da45c9227a12cff16cc26b62fb"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"}],{})}));
