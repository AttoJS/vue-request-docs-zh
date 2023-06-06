"use strict";(self.webpackChunkzh=self.webpackChunkzh||[]).push([[276],{13756:(n,s,a)=>{a.r(s),a.d(s,{default:()=>y});var t=a(27875);const o=(0,t._)("h1",{id:"聚焦时重新请求",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#聚焦时重新请求","aria-hidden":"true"},"#"),(0,t.Uk)(" 聚焦时重新请求")],-1),e=(0,t.Uk)("有些时候，你要确保多个浏览器窗口之间数据的一致性；又或者是当用户电脑在休眠状态重新激活后，页面的数据需要同步到最新状态时。"),p=(0,t._)("code",null,"refreshOnWindowFocus",-1),c=(0,t.Uk)(" 可能会为你节省很多逻辑代码。"),k=(0,t._)("p",null,[(0,t.Uk)("在下面的例子 🌰  中，我们使用 "),(0,t._)("strong",null,"iframe"),(0,t.Uk)(" 来模拟浏览器的多个选项卡。当你在任意一个选项卡中修改登录状态，然后切换到另一个选项卡，此时数据将会被同步。")],-1),u=(0,t._)("blockquote",null,[(0,t._)("p",null,"你也可以复制示例上方地址栏的链接，然后在浏览器中尝试这个功能。")],-1),l=(0,t._)("div",{class:"language-vue ext-vue"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("refresh-on-focus-demo__container"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-if"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("data && !error"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpace")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"vertical"),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"align"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("center"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NAvatar")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":src"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("data.avatar"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":size"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("100"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"round"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("refresh-on-focus-demo__slogen"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("Hey! {{ data.name }}!"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NButton")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("handleLogout"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("Logout"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NButton")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpace")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NResult")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-else"),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"status"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("403"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"title"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("403"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"description"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("Not authorized!"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"#footer"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NButton")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("handleLogin"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("Login"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NButton")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NResult")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("ts"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" NAvatar"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NResult"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpace "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'naive-ui'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" defineComponent "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useRequest "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue-request'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\ntype UserInfo "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"name"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"avatar"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" storeKey "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue-request-token'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"getStore"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(" localStorage"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getItem"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("storeKey"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"setStore"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  window"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("localStorage"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"setItem"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("storeKey"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue-request'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"clearStore"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  window"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("localStorage"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"removeItem"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("storeKey"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"getToken"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Promise"),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)("string"),(0,t._)("span",{class:"token operator"},">"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"resolve"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"setTimeout"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"setStore"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"resolve"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'token'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"300"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"getUserInfo"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Promise"),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)("UserInfo"),(0,t._)("span",{class:"token operator"},">"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("resolve"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" reject")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"setTimeout"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token function"},"getStore"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"resolve"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token literal-property property"},"name"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'John60676'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token literal-property property"},"avatar"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token string"},"'https://portrait.gitee.com/uploads/avatars/user/1838/5516429_john60676_1608255970.png!avatar200'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token function"},"reject"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'Not authorized!'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"300"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"defineComponent"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"components"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    NResult"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpace"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NAvatar"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setup"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" error"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" run "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"useRequest"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("getUserInfo"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token literal-property property"},"refreshOnWindowFocus"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token literal-property property"},"refocusTimespan"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1000"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token literal-property property"},"run"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" login "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"useRequest"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("getToken"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token literal-property property"},"manual"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"handleLogin"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"login"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"run"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"handleLogout"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"clearStore"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"run"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      error"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      handleLogin"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      handleLogout"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("style")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"scoped"),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("scss"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token style"},[(0,t._)("span",{class:"token language-css"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token selector"},".refresh-on-focus-demo"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token selector"},"&__slogen"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token property"},"font-weight"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 600"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token property"},"font-size"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 20px"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("style")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])])],-1),_=(0,t._)("h2",{id:"重新聚焦间隔时间",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#重新聚焦间隔时间","aria-hidden":"true"},"#"),(0,t.Uk)(" 重新聚焦间隔时间")],-1),i=(0,t.Uk)("如果你不希望用户在短时间内频繁触发 "),r=(0,t._)("code",null,"refreshOnWindowFocus",-1),U=(0,t.Uk)(" 导致频繁请求的话，你可以修改 "),d=(0,t._)("code",null,"refocusTimespan",-1),g=(0,t.Uk)(" 的值，从而延长触发的间隔。"),m=(0,t.uE)('<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  refreshOnWindowFocus<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  refocusTimespan<span class="token operator">:</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 2s</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br></div></div>',1),f={},y=(0,a(94407).Z)(f,[["render",function(n,s){const a=(0,t.up)("RouterLink"),f=(0,t.up)("Demo");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("p",null,[e,(0,t.Wm)(a,{to:"/api/index.html#refreshonwindowfocus"},{default:(0,t.w5)((()=>[p])),_:1}),c]),k,u,(0,t.Wm)(f,{name:"refreshOnWindowFocusPage",title:"聚焦时重新请求示例"},{default:(0,t.w5)((()=>[l])),_:1}),_,(0,t._)("p",null,[i,(0,t.Wm)(a,{to:"/api/index.html#refreshonwindowfocus"},{default:(0,t.w5)((()=>[r])),_:1}),U,(0,t.Wm)(a,{to:"/api/index.html#refocustimespan"},{default:(0,t.w5)((()=>[d])),_:1}),g]),m],64)}]])},42548:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-141987ca",path:"/guide/documentation/refreshOnWindowFocus.html",title:"聚焦时重新请求",lang:"zh-CN",frontmatter:{head:[["meta",{name:"og:title",content:"聚焦时重新请求 - VueRequest"}]]},excerpt:"",headers:[{level:2,title:"重新聚焦间隔时间",slug:"重新聚焦间隔时间",children:[]}],filePathRelative:"guide/documentation/refreshOnWindowFocus.md",git:{updatedTime:1686025655e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);