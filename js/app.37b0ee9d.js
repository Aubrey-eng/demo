(function(t){function e(e){for(var r,u,s=e[0],i=e[1],c=e[2],f=0,d=[];f<s.length;f++)u=s[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"3da3":function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/hot"}},[t._v("Hot")]),t._v(" | "),n("router-link",{attrs:{to:"/Center"}},[t._v("center")])],1),n("router-view")],1)},a=[],u=(n("034f"),n("2877")),s={},i=Object(u["a"])(s,o,a,!1,null,null,null),c=i.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("首页")]),n("p",[t._v(t._s(t.username))]),n("button",{on:{click:function(e){return t.changeUsername()}}},[t._v("更改")])])},d=[],p={name:"Home",computed:{username:function(){return this.$store.state.user.username}},methods:{changeUsername:function(){this.$store.dispatch("changeUsername",{username:"zhangsan"})}}},h=p,m=Object(u["a"])(h,f,d,!1,null,null,null),v=m.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot"},[n("h1",[t._v("热门新闻")]),n("div",{staticClass:"newlists"},[n("ul",t._l(t.newlists,(function(e,r){return n("li",{key:r},[n("router-link",{attrs:{to:{path:"/detail/"+e.id}}},[t._v(t._s(e.title))])],1)})),0)])])},g=[],b={data:function(){return{newlists:[{id:1,title:"sssssasdasdawdasd"},{id:2,title:"xzczvxcvzcxz"}]}}},w=b,O=Object(u["a"])(w,_,g,!1,null,null,null),y=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("h1",[t._v("个人中心")]),t._v(" 欢迎您"+t._s(t.username)+" "),n("button",{on:{click:function(e){return t.logout()}}},[t._v("退出")])])},j=[],x={computed:{username:function(){return this.$store.getters.username}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/login")}}},k=x,S=Object(u["a"])(k,$,j,!1,null,null,null),E=S.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("h1",[t._v("新闻详情--"+t._s(t.detail_id))])])},P=[],I={data:function(){return{detail_id:null}},mounted:function(){console.log(this.$route),this.detail_id=this.$route.params.id}},z=I,T=Object(u["a"])(z,C,P,!1,null,null,null),U=T.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h1",[t._v("用户登录")]),n("button",{on:{click:function(e){return t.login()}}},[t._v("登录")])])},H=[],L={methods:{login:function(){var t=this,e={username:"201740533129",password:"123456"};this.$http.post(this.$host+"/user/login",e).then((function(e){var n=e.data;200==n.status?(t.$store.dispatch("login",{username:n.data.realname}),t.$router.push("/center")):alert(n.data.status)})).catch((function(t){console.log(t)}))}}},M=L,A=Object(u["a"])(M,G,H,!1,null,null,null),J=A.exports,N=n("c8db"),F=n("2f62"),q={state:{username:window.sessionStorage.getItem("username")?window.sessionStorage.getItem("username"):null},getters:{username:function(t){return t.username}},mutations:{LOGIN:function(t,e){t.username=e.username,window.sessionStorage.setItem("username",e.username)},LOGOUT:function(t){t.username=null,window.sessionStorage.removeItem("username")}},actions:{login:function(t,e){t.commit("LOGIN",e)},logout:function(t){t.commit("LOGOUT")}}};r["a"].use(F["a"]);var B=new F["a"].Store({modules:{user:q}});r["a"].use(l["a"]);var D=[{path:"/",name:"Home",component:v},{path:"/hot",component:y},{path:"/center",component:E,meta:{isAuth:!0}},{path:"/detail/:id",name:"detail",component:U},{path:"/login",name:"login",component:J},{path:"/*",name:"notFind",component:N["default"]}],K=new l["a"]({mode:"history",routes:D});K.beforeEach((function(t,e,n){t.meta.isAuth?B.getters.username?n():n("/login"):n()}));var Q=K,R=n("bc3a"),V=n.n(R);r["a"].prototype.$http=V.a,r["a"].prototype.$host="http://teach.yiibook.top/api/v1",r["a"].config.productionTip=!1,new r["a"]({router:Q,store:B,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,n){},"94f8":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("404")])},o=[]},c8db:function(t,e,n){"use strict";var r=n("94f8"),o=n("fcdc"),a=n("2877"),u=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},fcdc:function(t,e,n){"use strict";var r=n("3da3"),o=n.n(r);e["default"]=o.a}});
//# sourceMappingURL=app.37b0ee9d.js.map