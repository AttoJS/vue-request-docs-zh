"use strict";(self.webpackChunkzh=self.webpackChunkzh||[]).push([[161],{36516:(n,a,s)=>{s.r(a),s.d(a,{default:()=>i});var t=s(27875);const o=(0,t._)("h1",{id:"分页扩展",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#分页扩展","aria-hidden":"true"},"#"),(0,t.Uk)(" 分页扩展")],-1),p=(0,t._)("code",null,"changeCurrent()",-1),e=(0,t._)("code",null,"changePageSize()",-1),c=(0,t._)("code",null,"params",-1),k=(0,t.uE)('<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2>',3),l=(0,t._)("div",{class:"language-vue ext-vue"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("pagination-container"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpin")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("pagination-container__list"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":show"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("loading"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NList")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"bordered"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NListItem")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-for"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("item in list"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":key"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("item.id"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"#prefix"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NAvatar")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("{{ item.name[0] }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NAvatar")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"#suffix"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("span")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("pagination-container__list-suffix"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("{{ item.job }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("span")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          {{ item.name }}\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NListItem")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NList")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpin")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("pagination-container__page"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NPagination")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token attr-name"},[(0,t._)("span",{class:"token namespace"},"v-model:"),(0,t.Uk)("page")]),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("current"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token attr-name"},[(0,t._)("span",{class:"token namespace"},"v-model:"),(0,t.Uk)("page-size")]),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("pageSize"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token attr-name"},":page-count"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("totalPage"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token attr-name"},":page-slot"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("5"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token attr-name"},":page-sizes"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("[5, 10, 20]"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token attr-name"},"show-size-picker"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("ts"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" axios "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'axios'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" NAvatar"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NListItem"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NPagination"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpin "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'naive-ui'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" computed"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" defineComponent "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" usePagination "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue-request'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\ntype Data "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"data"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token literal-property property"},"id"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" number"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token literal-property property"},"name"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token literal-property property"},"avatar"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token literal-property property"},"job"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"total"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" number"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"testService"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t._)("span",{class:"token literal-property property"},"params"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" page"),(0,t._)("span",{class:"token operator"},"?"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" number"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(" limit"),(0,t._)("span",{class:"token operator"},"?"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" number "),(0,t._)("span",{class:"token punctuation"},"}")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(" axios"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("get"),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)("Data"),(0,t._)("span",{class:"token operator"},">"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'https://61273138c2e8920017bc0b3c.mockapi.io/api/users'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    params"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"defineComponent"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"name"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'App'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"components"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    NPagination"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpin"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NListItem"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NAvatar"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setup"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" current"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" totalPage"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" loading"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" pageSize "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"usePagination"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("testService"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token literal-property property"},"defaultParams"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token literal-property property"},"limit"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"5"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token literal-property property"},"pagination"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token literal-property property"},"currentKey"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'page'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token literal-property property"},"pageSizeKey"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'limit'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token literal-property property"},"totalKey"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'data.total'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" list "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"computed"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(" data"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value"),(0,t._)("span",{class:"token operator"},"?."),(0,t.Uk)("data"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("data "),(0,t._)("span",{class:"token operator"},"||"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      list"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      loading"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      current"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      totalPage"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      pageSize"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("style")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("scss"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token style"},[(0,t._)("span",{class:"token language-css"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token selector"},".pagination-container"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"height"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 420px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"display"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" flex"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"flex-direction"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" column"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"justify-content"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" space-between"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token selector"},"&__list"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token property"},"height"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 370px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token property"},"overflow"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" auto"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token selector"},"&-suffix"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token property"},"margin-right"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 20px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("style")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])])],-1),u={},i=(0,s(94407).Z)(u,[["render",function(n,a){const s=(0,t.up)("RouterLink"),u=(0,t.up)("Demo");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("p",null,[(0,t.Uk)("我们会自动帮你管理分页信息，如：当前页数、每页条数、总条数等。你只需要使用我们提供的 "),(0,t.Wm)(s,{to:"/api/pagination.html#changecurrent"},{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Uk)(" 和 "),(0,t.Wm)(s,{to:"/api/pagination.html#changepagesize"},{default:(0,t.w5)((()=>[e])),_:1}),(0,t.Uk)(" 即可轻松管理分页的数据。")]),(0,t._)("p",null,[(0,t._)("strong",null,[(0,t.Uk)("注意：我们会在 "),(0,t.Wm)(s,{to:"/api/#params"},{default:(0,t.w5)((()=>[c])),_:1}),(0,t.Uk)(" 数组第一位注入分页所需的参数。")])]),(0,t._)("p",null,[(0,t.Uk)("更多可用配置请查看 "),(0,t.Wm)(s,{to:"/api/pagination.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("分页扩展 API")])),_:1})]),k,(0,t.Wm)(u,{name:"PaginationDemo",title:"分页示例"},{default:(0,t.w5)((()=>[l])),_:1})],64)}]])},45120:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-7bceba84",path:"/guide/documentation/pagination.html",title:"分页扩展",lang:"zh-CN",frontmatter:{title:"分页扩展",head:[["meta",{name:"og:title",content:"分页扩展 - VueRequest"}]]},excerpt:"",headers:[{level:2,title:"用法",slug:"用法",children:[]},{level:2,title:"例子",slug:"例子",children:[]}],filePathRelative:"guide/documentation/pagination.md",git:{updatedTime:1686124925e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);