(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-8913cb7e":"b2491aa1","chunk-95c945a8":"509783b2","chunk-9d1016f2":"386976a7"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-8913cb7e":1,"chunk-9d1016f2":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-8913cb7e":"9b149ed2","chunk-95c945a8":"31d6cfe0","chunk-9d1016f2":"9f282930"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],m.parentNode.removeChild(m),n(c)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2d9a":function(e,t,n){"use strict";n("5d3e")},"3c25":function(e,t,n){"use strict";n("959b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Tanggal"),n("div",{staticClass:"monaco",attrs:{id:"nav"}},[n("router-link",{staticClass:"text-white",attrs:{to:"/"}},[e._v("hello")]),e._v(" / "),n("router-link",{staticClass:"text-white",attrs:{to:"/challenge"}},[e._v("challenge")]),e._v(" / "),n("router-link",{staticClass:"text-white",attrs:{to:"/score"}},[e._v("score")])],1),n("router-view"),n("Footer")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("footer",{staticClass:"text-muted monaco"},[e._v(" Copyright © "+e._s(e.now)+". All rights reserved. PBO. ")])])])])},i=[],s={data:function(){return{now:(new Date).getFullYear()}}},u=s,l=(n("2d9a"),n("2877")),d=Object(l["a"])(u,c,i,!1,null,"a133bc98",null),m=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"tanggal mt-3 text-right monaco"},[""==e.waktu?n("em",{staticClass:"text-muted"},[e._v("memuat waktu")]):n("span",[e._v(e._s(e.waktu)+" "+e._s(e.tanggal))])])])])])},h=[],p={data:function(){return{tanggal:"",waktu:""}},mounted:function(){var e=this;setInterval((function(){e.getDate()}),1e3)},methods:{getDate:function(){var e=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],t=new Date;this.tanggal=t.getDate()+" "+e[t.getMonth()]+" "+t.getFullYear(),this.waktu=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+" / "}}},v=p,b=(n("3c25"),Object(l["a"])(v,f,h,!1,null,"4c78eef3",null)),g=b.exports,w={components:{Footer:m,Tanggal:g}},y=w,k=(n("034f"),Object(l["a"])(y,r,o,!1,null,null,null)),C=k.exports,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("7db0"),n("fb6a"),n("d81d"),n("a630"),n("159b"),n("b64b"),n("8c4f")),j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("header",{staticClass:"mt-4 mb-4"},[n("h1",[n("strong",{staticClass:"courier"},[e._v("codejam()")])]),n("em",{staticClass:"monaco"},[e._v("have a nice coding~")])]),n("div",[n("iframe",{attrs:{width:"100%",height:"540",src:"https://www.youtube.com/embed/mBN1vdwq-mc?start=1",frameborder:"0",allow:"autoplay"}})])])])])}],x={name:"Home"},I=x,T=(n("5941"),Object(l["a"])(I,j,O,!1,null,"b95a0352",null)),E=T.exports;a["default"].use(_["a"]);var S=[{path:"/",name:"Home",component:E,meta:{title:"codejam(2023).",metaTags:[{name:"description",content:"have a nice coding~"}]}},{path:"/challenge",name:"Challenge",component:function(){return n.e("chunk-8913cb7e").then(n.bind(null,"98ed"))},meta:{title:"challenge / codejam(2023).",metaTags:[{name:"description",content:"code fast. break cases."}]}},{path:"/score",name:"Scoreboard",component:function(){return n.e("chunk-9d1016f2").then(n.bind(null,"15e3"))},meta:{title:"scoreboard / codejam(2023).",metaTags:[{name:"description",content:"code fast. break cases."}]}},{path:"/signin",name:"SignIn",component:function(){return n.e("chunk-95c945a8").then(n.bind(null,"4a33"))},meta:{title:"Sign In / codejam(2023).",metaTags:[{name:"description",content:"ssSSttt."}]}}],M=new _["a"]({routes:S});M.beforeEach((function(e,t,n){window.scroll({top:e,left:0,behavior:"smooth"});var a=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),r=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags})),o=t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(a?document.title=a.meta.title:o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!r)return n();r.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),n()}));var A=M,J=(n("ab8b"),n("6672"),n("5ad0"));a["default"].use(J["a"],{supabaseUrl:"https://kongqlubxitgitfibcnj.supabase.co",supabaseKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvbmdxbHVieGl0Z2l0ZmliY25qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcwMjA3MTMsImV4cCI6MTk3MjU5NjcxM30.4D4ioA8riXCJnIMd6gaRxKFJxwclr6jYOP4b--4gK1k",supabaseOptions:{}}),a["default"].config.productionTip=!1,new a["default"]({router:A,render:function(e){return e(C)}}).$mount("#app")},5941:function(e,t,n){"use strict";n("b45c")},"5d3e":function(e,t,n){},6672:function(e,t,n){},"85ec":function(e,t,n){},"959b":function(e,t,n){},b45c:function(e,t,n){}});
//# sourceMappingURL=app.508d5cf4.js.map