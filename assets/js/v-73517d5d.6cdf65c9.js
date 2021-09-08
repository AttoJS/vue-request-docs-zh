"use strict";(self.webpackChunkzh=self.webpackChunkzh||[]).push([[497],{1759:(n,a,s)=>{s.r(a),s.d(a,{default:()=>K});var t=s(27875);const o=(0,t._)("h1",{id:"加载更多扩展",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#加载更多扩展","aria-hidden":"true"},"#"),(0,t.Uk)(" 加载更多扩展")],-1),e={class:"custom-container warning"},p=(0,t._)("p",{class:"custom-container-title"},"注意",-1),c=(0,t.Uk)("LoadMore 模式下，仅支持 "),k=(0,t._)("strong",null,"请求函数",-1),l=(0,t.Uk)(" 形式的 "),u=(0,t._)("strong",null,"Service",-1),_=(0,t.Uk)("我们会自动帮你管理列表数据。"),i=(0,t._)("code",null,"Service",-1),r=(0,t.Uk)(" 返回的数据结构必须包含 "),U=(0,t._)("code",null,"{list: LR[]}",-1),d=(0,t.Uk)(" ，如果不满足，可以通过 "),m=(0,t._)("code",null,"listKey",-1),g=(0,t.Uk)(" 指定别的键名 或者 "),h=(0,t._)("code",null,"formatResult()",-1),v=(0,t.Uk)(" 转换一次。接着通过我们返回的 "),f=(0,t._)("code",null,"dataList",-1),w=(0,t.Uk)(" 变量，即可获取到请求的"),y=(0,t._)("strong",null,"数据列表集合",-1),L=(0,t.Uk)("，然后使用 "),M=(0,t._)("code",null,"loadMore()",-1),N=(0,t.Uk)(" 触发加载更多"),q=(0,t.Uk)("此外，我们会在 "),b=(0,t._)("code",null,"Service",-1),S=(0,t.Uk)(" 函数的第一个参数传入 "),x=(0,t._)("code",null,"{data: R, dataList: LR}",-1),W=(0,t.Uk)(" 你可以根据这些参数决定下一次 "),B=(0,t._)("code",null,"Service",-1),D=(0,t.Uk)("的请求参数。"),R=(0,t.Uk)("更多可用配置请查看 "),A=(0,t.Uk)("LoadMore 扩展 API"),C=(0,t.uE)('<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLoadMore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2>',3),E=(0,t.Uk)("你也可以配合 "),I=(0,t._)("code",null,"ant-design-vue",-1),j=(0,t.Uk)(" 使用。这里我们提供了一个 demo，"),P={href:"https://2x.antdv.com/components/list-cn#components-list-demo-loadmore",target:"_blank",rel:"noopener noreferrer"},z=(0,t.Uk)("点击查看"),J=(0,t._)("div",{class:"language-vue ext-vue"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("load-more-container"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpin")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("load-more-container__list"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":show"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("refreshing"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NList")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"bordered"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NListItem")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-for"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("item in dataList"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":key"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("item.id"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"#prefix"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NAvatar")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("{{ item.name[0] }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NAvatar")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"#suffix"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("span")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("load-more-container__list-suffix"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("{{ item.job }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("span")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          {{ item.name }}\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NListItem")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NList")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpin")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpace")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("load-more-container__page"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"justify"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("center"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NButton")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"type"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("primary"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":disabled"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("noMore"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":loading"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("loadingMore"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("loadMore"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        {{ noMore ? 'No more data' : 'Load more' }}\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NButton")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NButton")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":loading"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("refreshing"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("refresh"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(" Refresh "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NButton")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpace")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("ts"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" NAvatar"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NListItem"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpace"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpin "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'naive-ui'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" computed"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" defineComponent "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useLoadMore "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue-request'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\ntype Data "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  data"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    id"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" number"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    name"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    avatar"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    job"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  total"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" number"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"testService"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("params"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" data"),(0,t._)("span",{class:"token operator"},"?"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" Data"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(" dataList"),(0,t._)("span",{class:"token operator"},"?"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" Data"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'data'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" p "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" limit"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"10"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("params"),(0,t._)("span",{class:"token operator"},"?."),(0,t.Uk)("dataList"),(0,t._)("span",{class:"token operator"},"?."),(0,t.Uk)("length "),(0,t._)("span",{class:"token operator"},"!=="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"undefined"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    p"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'page'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" params"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("dataList"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("length "),(0,t._)("span",{class:"token operator"},"/"),(0,t.Uk)(" p"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("limit "),(0,t._)("span",{class:"token operator"},"+"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    p"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'page'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    url"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token template-string"},[(0,t._)("span",{class:"token template-punctuation string"},"`"),(0,t._)("span",{class:"token string"},"https://61273138c2e8920017bc0b3c.mockapi.io/api/users?"),(0,t._)("span",{class:"token interpolation"},[(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"${"),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"URLSearchParams"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("p "),(0,t._)("span",{class:"token keyword"},"as"),(0,t.Uk)(" any"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"}")]),(0,t._)("span",{class:"token template-punctuation string"},"`")]),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"defineComponent"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  name"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'LoadMore'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  components"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    NList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NListItem"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpin"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NAvatar"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpace"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setup"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" loadingMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" dataList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" refreshing"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" loadMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" refresh "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" useLoadMore"),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)("\n      Data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      Parameters"),(0,t._)("span",{class:"token operator"},"<"),(0,t._)("span",{class:"token keyword"},"typeof"),(0,t.Uk)(" testService"),(0,t._)("span",{class:"token operator"},">"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      Data"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'data'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token operator"},">"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("testService"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      listKey"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'data'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" noMore "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"computed"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(" dataList"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("length "),(0,t._)("span",{class:"token operator"},"==="),(0,t.Uk)(" data"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value"),(0,t._)("span",{class:"token operator"},"?."),(0,t.Uk)("total"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      dataList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      loadingMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      loadMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      noMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      refreshing"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      refresh"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("style")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"scoped"),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("scss"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token style"}),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("style")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])])],-1),K={render:function(n,a){const s=(0,t.up)("RouterLink"),K=(0,t.up)("OutboundLink"),F=(0,t.up)("Demo");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("div",e,[p,(0,t._)("p",null,[c,(0,t.Wm)(s,{to:"/api/loadMore.html#%E8%AF%B7%E6%B1%82%E5%87%BD%E6%95%B0"},{default:(0,t.w5)((()=>[k])),_:1}),l,(0,t.Wm)(s,{to:"/api/loadMore.html#service"},{default:(0,t.w5)((()=>[u])),_:1})])]),(0,t._)("p",null,[_,(0,t.Wm)(s,{to:"/api/loadMore.html#service"},{default:(0,t.w5)((()=>[i])),_:1}),r,U,d,(0,t.Wm)(s,{to:"/api/loadMore.html#listkey"},{default:(0,t.w5)((()=>[m])),_:1}),g,(0,t.Wm)(s,{to:"/api/index.html#formatresult"},{default:(0,t.w5)((()=>[h])),_:1}),v,(0,t.Wm)(s,{to:"/api/loadMore.html#datalist"},{default:(0,t.w5)((()=>[f])),_:1}),w,y,L,(0,t.Wm)(s,{to:"/api/loadMore.html#loadmore"},{default:(0,t.w5)((()=>[M])),_:1}),N]),(0,t._)("p",null,[q,(0,t.Wm)(s,{to:"/api/loadMore.html#service"},{default:(0,t.w5)((()=>[b])),_:1}),S,x,W,(0,t.Wm)(s,{to:"/api/index.html#service"},{default:(0,t.w5)((()=>[B])),_:1}),D]),(0,t._)("p",null,[R,(0,t.Wm)(s,{to:"/api/loadMore.html"},{default:(0,t.w5)((()=>[A])),_:1})]),C,(0,t._)("blockquote",null,[(0,t._)("p",null,[E,I,j,(0,t._)("a",P,[z,(0,t.Wm)(K)])])]),(0,t.Wm)(F,{name:"LoadMoreDemo",title:"加载更多示例"},{default:(0,t.w5)((()=>[J])),_:1})],64)}}},12220:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-73517d5d",path:"/guide/documentation/loadMore.html",title:"加载更多扩展",lang:"zh-CN",frontmatter:{title:"加载更多扩展",head:[["meta",{name:"og:title",content:"加载更多扩展 - VueRequest"}]]},excerpt:"",headers:[{level:2,title:"用法",slug:"用法",children:[]},{level:2,title:"例子",slug:"例子",children:[]}],filePathRelative:"guide/documentation/loadMore.md",git:{updatedTime:1631066351e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);