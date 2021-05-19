(self.webpackChunkzh=self.webpackChunkzh||[]).push([[183],{8005:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>p});const t=(0,a(7875).uE)('<h1 id="默认请求"><a class="header-anchor" href="#默认请求">#</a> 默认请求</h1><p>我们内置了 Fetch 来处理你的请求，你可以将 <a href="#%E4%BC%A0%E5%85%A5%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串</a>、<a href="#%E4%BC%A0%E5%85%A5%E5%AF%B9%E8%B1%A1">对象</a>或者<a href="#%E4%BC%A0%E5%85%A5%E8%AF%B7%E6%B1%82%E5%87%BD%E6%95%B0">请求函数</a> 作为第一个参数传入</p><h2 id="传入请求函数"><a class="header-anchor" href="#传入请求函数">#</a> 传入请求函数</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>我们推荐你使用这种方式</p></div><p>可以通过传入一个返回值为 <code>Promise</code> 类型的函数。</p><p>换句话说，你可以使用 <strong>第三方的请求库（如 <code>axios</code> ）</strong> 来获取数据，然后将该请求传给 VueRequest 来进行管理。具体可参考以下例子</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div></div></div><h2 id="传入字符串"><a class="header-anchor" href="#传入字符串">#</a> 传入字符串</h2><p>你可以通过传入一个接口的链接</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/user?name=John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div></div></div><h2 id="传入对象"><a class="header-anchor" href="#传入对象">#</a> 传入对象</h2><p>你可以通过传入一个包含 <code>url</code> 属性的对象</p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> objectService <span class="token operator">=</span> <span class="token punctuation">{</span>\n  url<span class="token operator">:</span> <span class="token string">&#39;api/user&#39;</span><span class="token punctuation">,</span>\n  method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>\n  body<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Benny&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  headers<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>objectService<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br></div></div><hr><p>现在，你应该已经拥有了一个 VueRequest 的最小示例了。接下来，我们来了解一下其他的一些配置。</p>',15),p={render:function(s,n){return t}}},7239:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>t});const t={key:"v-3d6dd5d7",path:"/guide/documentation/default-request.html",title:"默认请求",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"传入请求函数",slug:"传入请求函数",children:[]},{level:2,title:"传入字符串",slug:"传入字符串",children:[]},{level:2,title:"传入对象",slug:"传入对象",children:[]}],filePathRelative:"guide/documentation/default-request.md",git:{updatedTime:1621417083e3,contributors:[]}}}}]);