(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b61b4f9e"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,c={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==c.call(t)?s(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),c=r("17c2"),o=r("9112");for(var s in i){var a=n[s],f=a&&a.prototype;if(f&&f.forEach!==c)try{o(f,"forEach",c)}catch(u){f.forEach=c}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),c=r("ae40"),o=i("forEach"),s=c("forEach");t.exports=o&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),c=r("2d00"),o=i("species");t.exports=function(t){return c>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},4890:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"services",attrs:{id:"services"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"services__inner"},[r("h3",{staticClass:"section-title services__title"},[t._v("Услуги")]),t._m(0),r("div",{staticClass:"services__content"},t._l(t.servicesItems,(function(t){return r("ServicesItem",{key:t.id,attrs:{items_data:t}})})),1)])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"services__prev rounded-grey"},[r("div",{staticClass:"services__prev__title"},[t._v("Наши услуги подойдут тебе, если:")]),r("div",{staticClass:"services__prev__description"},[t._v(" Ты "),r("span",{staticClass:"services__prev__description-accent"},[t._v("эксперт")]),t._v(" в какой-то области и не знаешь, как продвигать свои услуги в инстаграм ")]),r("div",{staticClass:"services__prev__description"},[t._v(" Ты "),r("span",{staticClass:"services__prev__description-accent"},[t._v("блогер")]),t._v(", либо только на старте карьеры, либо уже начал, но достиг «потолка» ")]),r("div",{staticClass:"services__prev__description"},[t._v(" Ты "),r("span",{staticClass:"services__prev__description-accent"},[t._v("предприниматель")]),t._v(", у тебя малый бизнес, всё в аккаунте делаешь сам и не знаешь, как продавать товар через инстаграм ")])])}],c=(r("d3b7"),r("5530")),o=r("2f62"),s={data:function(){return{}},components:{ServicesItem:function(){return r.e("chunk-2d0d7c65").then(r.bind(null,"77f5"))}},methods:{},computed:Object(c["a"])({},Object(o["c"])(["servicesItems"]))},a=s,f=r("2877"),u=Object(f["a"])(a,n,i,!1,null,null,null);e["default"]=u.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,c=r("1dde"),o=r("ae40"),s=c("filter"),a=o("filter");n({target:"Array",proto:!0,forced:!s||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),c=r("b622"),o=c("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),c=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:c.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?i.f(t,o,c(0,r)):t[o]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),c=r("d066"),o=r("c430"),s=r("83ab"),a=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),v=r("e8b5"),d=r("861d"),b=r("825a"),p=r("7b0b"),h=r("fc6a"),y=r("c04e"),g=r("5c6c"),_=r("7c73"),m=r("df75"),O=r("241c"),S=r("057f"),w=r("7418"),j=r("06cf"),L=r("9bf2"),P=r("d1e7"),C=r("9112"),E=r("6eeb"),x=r("5692"),T=r("f772"),k=r("d012"),A=r("90e3"),D=r("b622"),M=r("e538"),N=r("746f"),I=r("d44e"),V=r("69f3"),G=r("b727").forEach,R=T("hidden"),F="Symbol",H="prototype",J=D("toPrimitive"),B=V.set,$=V.getterFor(F),q=Object[H],Q=i.Symbol,W=c("JSON","stringify"),z=j.f,K=L.f,U=S.f,X=P.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=i.QObject,it=!nt||!nt[H]||!nt[H].findChild,ct=s&&u((function(){return 7!=_(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(q,e);n&&delete q[e],K(t,e,r),n&&t!==q&&K(q,e,n)}:K,ot=function(t,e){var r=Y[t]=_(Q[H]);return B(r,{type:F,tag:t,description:e}),s||(r.description=e),r},st=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},at=function(t,e,r){t===q&&at(Z,e,r),b(t);var n=y(e,!0);return b(r),l(Y,n)?(r.enumerable?(l(t,R)&&t[R][n]&&(t[R][n]=!1),r=_(r,{enumerable:g(0,!1)})):(l(t,R)||K(t,R,g(1,{})),t[R][n]=!0),ct(t,n,r)):K(t,n,r)},ft=function(t,e){b(t);var r=h(e),n=m(r).concat(bt(r));return G(n,(function(e){s&&!lt.call(r,e)||at(t,e,r[e])})),t},ut=function(t,e){return void 0===e?_(t):ft(_(t),e)},lt=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,R)&&this[R][e])||r)},vt=function(t,e){var r=h(t),n=y(e,!0);if(r!==q||!l(Y,n)||l(Z,n)){var i=z(r,n);return!i||!l(Y,n)||l(r,R)&&r[R][n]||(i.enumerable=!0),i}},dt=function(t){var e=U(h(t)),r=[];return G(e,(function(t){l(Y,t)||l(k,t)||r.push(t)})),r},bt=function(t){var e=t===q,r=U(e?Z:h(t)),n=[];return G(r,(function(t){!l(Y,t)||e&&!l(q,t)||n.push(Y[t])})),n};if(a||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===q&&r.call(Z,t),l(this,R)&&l(this[R],e)&&(this[R][e]=!1),ct(this,e,g(1,t))};return s&&it&&ct(q,e,{configurable:!0,set:r}),ot(e,t)},E(Q[H],"toString",(function(){return $(this).tag})),E(Q,"withoutSetter",(function(t){return ot(A(t),t)})),P.f=lt,L.f=at,j.f=vt,O.f=S.f=dt,w.f=bt,M.f=function(t){return ot(D(t),t)},s&&(K(Q[H],"description",{configurable:!0,get:function(){return $(this).description}}),o||E(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:Q}),G(m(rt),(function(t){N(t)})),n({target:F,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!s},{create:ut,defineProperty:at,defineProperties:ft,getOwnPropertyDescriptor:vt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(p(t))}}),W){var pt=!a||u((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,i=[t],c=1;while(arguments.length>c)i.push(arguments[c++]);if(n=e,(d(e)||void 0!==t)&&!st(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,W.apply(null,i)}})}Q[H][J]||C(Q[H],J,Q[H].valueOf),I(Q,F),k[R]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),c=r("5135"),o=Object.defineProperty,s={},a=function(t){throw t};t.exports=function(t,e){if(c(s,t))return s[t];e||(e={});var r=[][t],f=!!c(e,"ACCESSORS")&&e.ACCESSORS,u=c(e,0)?e[0]:a,l=c(e,1)?e[1]:void 0;return s[t]=!!r&&!i((function(){if(f&&!n)return!0;var t={length:-1};f?o(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,u,l)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),c=r("df75"),o=r("d039"),s=o((function(){c(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return c(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),c=r("7b0b"),o=r("50c4"),s=r("65f0"),a=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,u=4==t,l=6==t,v=5==t||l;return function(d,b,p,h){for(var y,g,_=c(d),m=i(_),O=n(b,p,3),S=o(m.length),w=0,j=h||s,L=e?j(d,S):r?j(d,0):void 0;S>w;w++)if((v||w in m)&&(y=m[w],g=O(y,w,_),t))if(e)L[w]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return w;case 2:a.call(L,y)}else if(u)return!1;return l?-1:f||u?u:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),c=r("56ef"),o=r("fc6a"),s=r("06cf"),a=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),i=s.f,f=c(n),u={},l=0;while(f.length>l)r=i(n,e=f[l++]),void 0!==r&&a(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),c=r("fc6a"),o=r("06cf").f,s=r("83ab"),a=i((function(){o(1)})),f=!s||a;n({target:"Object",stat:!0,forced:f,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(c(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-b61b4f9e.0d5f7181.js.map