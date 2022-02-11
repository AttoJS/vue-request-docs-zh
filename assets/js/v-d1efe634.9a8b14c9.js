"use strict";(self.webpackChunkzh=self.webpackChunkzh||[]).push([[803],{73638:(n,s,a)=>{a.r(s),a.d(s,{default:()=>y});var t=a(27875);const p=(0,t.uE)('<h1 id="数据请求" tabindex="-1"><a class="header-anchor" href="#数据请求" aria-hidden="true">#</a> 数据请求</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>service<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>这是 VueRequest 最基本的 API。这里的 <code>service</code> 可以表示为一个请求接口，它可以是一个 <a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串</a>、一个 <a href="#%E5%AF%B9%E8%B1%A1">对象</a> 或者是一个 <a href="#%E5%87%BD%E6%95%B0">函数</a>。当请求完成后，则将会根据请求结果来修改 <code>data</code> 和 <code>error</code>。</p>',3),e={id:"函数",tabindex:"-1"},o=(0,t._)("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#",-1),c=(0,t.Uk)(" 函数 "),u=(0,t.Uk)("查询函数实际上可以是任意一个返回 "),l=(0,t._)("strong",null,"Promise",-1),i=(0,t.Uk)(" 的函数，返回的 promise 将决定是传递 "),r=(0,t._)("code",null,"data",-1),k=(0,t.Uk)(" 亦或者是抛出错误，错误将会被 "),d=(0,t._)("code",null,"error",-1),g=(0,t.Uk)(" 捕获。函数的入参将会被当做 "),h=(0,t._)("code",null,"params",-1),m=(0,t.Uk)(" 传递给 API 接口"),f=(0,t.uE)('<p>换句话说，你可以使用 <strong>第三方的请求库（如 <code>axios</code> ）</strong> 来获取数据，然后将该请求传给 VueRequest 来进行管理。</p><p>我们来举个例子 🌰</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> userName <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    params<span class="token operator">:</span> <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> userName<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  defaultParams<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;马冬梅&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n<span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>顺带一提，你也可以通过函数返回一个 字符串 或者是一个 对象，我们将会使用 <code>fetch</code> 来处理这些数据请求。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>name <span class="token operator">=&gt;</span> <span class="token string">&#39;api/user?name=&#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>当然，如果你的接口足够简单，你也可以通过传入一个接口的链接</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/simple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><p>当然，如果你的接口足够简单，你也可以通过传入一个包含 <code>url</code> 属性的对象</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> objectService <span class="token operator">=</span> <span class="token punctuation">{</span>\n  url<span class="token operator">:</span> <span class="token string">&#39;api/simple&#39;</span><span class="token punctuation">,</span>\n  method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>\n  headers<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>objectService<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><hr><p>恭喜你，你已经入门了 VueRequest 了。</p><p>什么？还不够用？来来来，后面的章节我们来了解一下一些常用的配置与用法。</p>',14),y={render:function(n,s){const a=(0,t.up)("Badge"),y=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("h2",e,[o,c,(0,t.Wm)(a,{type:"tip",text:"推荐",vertical:"top"})]),(0,t._)("p",null,[u,l,i,r,k,d,g,(0,t.Wm)(y,{to:"/api/index.html#params"},{default:(0,t.w5)((()=>[h])),_:1}),m]),f],64)}}},20290:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-d1efe634",path:"/guide/documentation/dataFetching.html",title:"数据请求",lang:"zh-CN",frontmatter:{head:[["meta",{name:"og:title",content:"数据请求 - VueRequest"}]]},excerpt:"",headers:[{level:2,title:"函数",slug:"函数",children:[]},{level:2,title:"字符串",slug:"字符串",children:[]},{level:2,title:"对象",slug:"对象",children:[]}],filePathRelative:"guide/documentation/dataFetching.md",git:{updatedTime:1644568285e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);