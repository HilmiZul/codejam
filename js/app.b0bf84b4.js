(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0a1d7cda":"4e655a6e","chunk-55180376":"c9b1c59d","chunk-95c945a8":"509783b2"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-0a1d7cda":1,"chunk-55180376":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-0a1d7cda":"9b149ed2","chunk-55180376":"9f282930","chunk-95c945a8":"31d6cfe0"}[t]+".css",i=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],m.parentNode.removeChild(m),a(s)},m.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(m)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"2d9a":function(t,e,a){"use strict";a("5d3e")},"3c25":function(t,e,a){"use strict";a("959b")},4774:function(t,e,a){"use strict";a("aba9")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Tanggal"),a("div",{staticClass:"monaco",attrs:{id:"nav"}},[a("router-link",{staticClass:"text-white",attrs:{to:"/"}},[t._v("hello")]),t._v(" / "),a("router-link",{staticClass:"text-white",attrs:{to:"/challenge"}},[t._v("challenge")]),t._v(" / "),a("router-link",{staticClass:"text-white",attrs:{to:"/score"}},[t._v("score")])],1),a("router-view"),a("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("footer",{staticClass:"text-muted monaco"},[t._v(" Copyright © "+t._s(t.now)+". All rights reserved. PBO. ")])])])])},o=[],c={data:function(){return{now:(new Date).getFullYear()}}},l=c,u=(a("2d9a"),a("2877")),d=Object(u["a"])(l,s,o,!1,null,"a133bc98",null),m=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"tanggal mt-3 text-right monaco"},[""==t.waktu?a("em",{staticClass:"text-muted"},[t._v("memuat waktu")]):a("span",[t._v(t._s(t.waktu)+" "+t._s(t.tanggal))])])])])])},f=[],h={data:function(){return{tanggal:"",waktu:""}},mounted:function(){var t=this;setInterval((function(){t.getDate()}),1e3)},methods:{getDate:function(){var t=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=new Date;this.tanggal=e.getDate()+" "+t[e.getMonth()]+" "+e.getFullYear(),this.waktu=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" / "}}},p=h,g=(a("3c25"),Object(u["a"])(p,v,f,!1,null,"4c78eef3",null)),b=g.exports,_={components:{Footer:m,Tanggal:b}},k=_,C=(a("034f"),Object(u["a"])(k,r,i,!1,null,null,null)),w=C.exports,y=(a("d3b7"),a("3ca3"),a("ddb0"),a("7db0"),a("fb6a"),a("d81d"),a("a630"),a("159b"),a("b64b"),a("8c4f")),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[t._m(0),t._m(1),a("div",{staticClass:"mb-5 card text-white text-left"},[t._m(2),a("div",{staticClass:"card-body monaco"},[a("div",{staticClass:"mt-3"},[t._v("There are 5 Chapters")]),t._m(3),t._m(4),t._m(5),a("div",{staticClass:"text-center mt-5"},[a("router-link",{staticClass:"btn btn-green text-white",attrs:{to:"/challenge"}},[t._v(" Go to challenge(👨🏻‍💻) ")])],1)])]),t._m(6)])])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"mt-4 mb-4"},[a("h1",[a("strong",{staticClass:"courier"},[t._v("codejam()")])]),a("em",{staticClass:"monaco"},[t._v("have a nice coding~")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5 card text-white text-left"},[n("div",{staticClass:"maskot"},[n("img",{staticClass:"maskot-img",attrs:{src:a("9c42"),alt:"maskot"}})]),n("div",{staticClass:"card-body table-responsive monaco"},[n("div",{staticClass:"mt-3 mb-3"},[t._v("Rundown")]),n("table",{staticClass:"table table-bordered monaco text-white"},[n("thead",{staticClass:"text-center"},[n("tr",[n("th",[t._v("Kegiatan")]),n("th",[t._v("Waktu")]),n("th",[t._v("Lokasi")])])]),n("tbody",[n("tr",[n("td",[t._v("Round 1")]),n("td",[t._v("13 - 18 Peb. 2023 / 10.00 Pagi")]),n("td",[t._v("Online")])]),n("tr",[n("td",[t._v("Rekap Hasil")]),n("td",[t._v("19 Peb. 2023")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("Pengumuman Lolos Final")]),n("td",[t._v("20 Peb. 2023")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("Final")]),n("td",[t._v("4 Maret 2023 / 09:00 Pagi s.d. Selesai")]),n("td",[t._v("RPS")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"maskot"},[n("img",{staticClass:"maskot-img",attrs:{src:a("9c42"),alt:"maskot"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("Chapter 1: Data Type and Variable")]),a("li",[t._v("Chapter 2: Input Keyboard")]),a("li",[t._v("Chapter 3: if-else if-else Condition")]),a("li",[t._v("Chapter 4: Loops")]),a("li",[t._v("Chapter 5: Data Structure: List")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("✅ "),a("em",[t._v("Event")]),t._v(" ini diadakan untuk menyelesaikan sub-materi PBO (ganjil).")]),a("li",[t._v("✅ Peserta masing-masing kelas akan mendapatkan "),a("em",[t._v("Challenge")]),t._v(".")]),a("li",[t._v(" ✅ Setiap "),a("em",[t._v("Challenge")]),t._v(" terdiri dari "),a("strong",[t._v("2 kasus")]),t._v(". ")]),a("li",[t._v("✅ Carilah solusi dan lengkapi potongan kode disetiap kasus.")]),a("li",[t._v("✅ Selesaikan semua kasus dan dapatkan hadiahnya!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("✅ Review materi terakhir ("),a("code",[t._v("if")]),t._v(" dan "),a("code",[t._v("else")]),t._v(")")]),a("li",[t._v("✅ Tes logika kamu disini")]),a("li",[t._v("✅ Kerjakan Challenge-nya dan Menangkan hadiahnya!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("iframe",{attrs:{width:"100%",height:"540",src:"https://www.youtube.com/embed/mBN1vdwq-mc?start=1",frameborder:"0",allow:"autoplay"}})])}],E={name:"Home"},O=E,S=(a("4774"),Object(u["a"])(O,x,j,!1,null,"d6c6d486",null)),T=S.exports;n["default"].use(y["a"]);var I=[{path:"/",name:"Home",component:T,meta:{title:"codejam(2023).",metaTags:[{name:"description",content:"have a nice coding~"}]}},{path:"/challenge",name:"Challenge",component:function(){return a.e("chunk-0a1d7cda").then(a.bind(null,"98ed"))},meta:{title:"challenge / codejam(2023).",metaTags:[{name:"description",content:"code fast. break cases."}]}},{path:"/score",name:"Scoreboard",component:function(){return a.e("chunk-55180376").then(a.bind(null,"15e3"))},meta:{title:"scoreboard / codejam(2023).",metaTags:[{name:"description",content:"code fast. break cases."}]}},{path:"/signin",name:"SignIn",component:function(){return a.e("chunk-95c945a8").then(a.bind(null,"4a33"))},meta:{title:"Sign In / codejam(2023).",metaTags:[{name:"description",content:"ssSSttt."}]}}],P=new y["a"]({routes:I});P.beforeEach((function(t,e,a){window.scroll({top:t,left:0,behavior:"smooth"});var n=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),r=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags})),i=e.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(n?document.title=n.meta.title:i&&(document.title=i.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!r)return a();r.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(a){e.setAttribute(a,t[a])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),a()}));var M=P,A=(a("ab8b"),a("6672"),a("5ad0"));n["default"].use(A["a"],{supabaseUrl:"https://kongqlubxitgitfibcnj.supabase.co",supabaseKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvbmdxbHVieGl0Z2l0ZmliY25qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcwMjA3MTMsImV4cCI6MTk3MjU5NjcxM30.4D4ioA8riXCJnIMd6gaRxKFJxwclr6jYOP4b--4gK1k",supabaseOptions:{}}),n["default"].config.productionTip=!1,new n["default"]({router:M,render:function(t){return t(w)}}).$mount("#app")},"5d3e":function(t,e,a){},6672:function(t,e,a){},"85ec":function(t,e,a){},"959b":function(t,e,a){},"9c42":function(t,e,a){t.exports=a.p+"img/maskot.372af86e.png"},aba9:function(t,e,a){}});
//# sourceMappingURL=app.b0bf84b4.js.map