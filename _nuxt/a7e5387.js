(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{321:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("34f6ec6a",content,!0,{sourceMap:!1})},340:function(t,e,n){(function(t,n){var r="__lodash_hash_undefined__",o=9007199254740991,l="[object Arguments]",c="[object Array]",d="[object Boolean]",h="[object Date]",f="[object Error]",v="[object Function]",y="[object Map]",_="[object Number]",m="[object Object]",w="[object Promise]",S="[object RegExp]",j="[object Set]",A="[object String]",x="[object Symbol]",T="[object WeakMap]",k="[object ArrayBuffer]",O="[object DataView]",C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M=/^\w*$/,P=/^\./,$=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,D=/\\(\\)?/g,B=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,N={};N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N[l]=N[c]=N[k]=N[d]=N[O]=N[h]=N[f]=N[v]=N[y]=N[_]=N[m]=N[S]=N[j]=N[A]=N[T]=!1;var L="object"==typeof t&&t&&t.Object===Object&&t,W="object"==typeof self&&self&&self.Object===Object&&self,F=L||W||Function("return this")(),X=e&&!e.nodeType&&e,I=X&&"object"==typeof n&&n&&!n.nodeType&&n,U=I&&I.exports===X&&L.process,z=function(){try{return U&&U.binding("util")}catch(t){}}(),G=z&&z.isTypedArray;function R(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function Y(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function H(t){return function(e){return t(e)}}function J(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function V(map){var t=-1,e=Array(map.size);return map.forEach((function(n,r){e[++t]=[r,n]})),e}function K(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var Q,Z,tt,et=Array.prototype,nt=Function.prototype,it=Object.prototype,st=F["__core-js_shared__"],ot=(Q=/[^.]+$/.exec(st&&st.keys&&st.keys.IE_PROTO||""))?"Symbol(src)_1."+Q:"",at=nt.toString,lt=it.hasOwnProperty,ut=it.toString,ct=RegExp("^"+at.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ht=F.Symbol,ft=F.Uint8Array,pt=it.propertyIsEnumerable,gt=et.splice,vt=(Z=Object.keys,tt=Object,function(t){return Z(tt(t))}),yt=Zt(F,"DataView"),_t=Zt(F,"Map"),bt=Zt(F,"Promise"),mt=Zt(F,"Set"),wt=Zt(F,"WeakMap"),St=Zt(Object,"create"),jt=ae(yt),At=ae(_t),xt=ae(bt),Tt=ae(mt),kt=ae(wt),Ot=ht?ht.prototype:void 0,Ct=Ot?Ot.valueOf:void 0,Mt=Ot?Ot.toString:void 0;function Pt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function $t(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Dt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Bt(t){var e=-1,n=t?t.length:0;for(this.__data__=new Dt;++e<n;)this.add(t[e])}function Et(t){this.__data__=new $t(t)}function Nt(t,e){var n=de(t)||ce(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var l in t)!e&&!lt.call(t,l)||o&&("length"==l||ee(l,r))||n.push(l);return n}function Lt(t,e){for(var n=t.length;n--;)if(ue(t[n][0],e))return n;return-1}Pt.prototype.clear=function(){this.__data__=St?St(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var data=this.__data__;if(St){var e=data[t];return e===r?void 0:e}return lt.call(data,t)?data[t]:void 0},Pt.prototype.has=function(t){var data=this.__data__;return St?void 0!==data[t]:lt.call(data,t)},Pt.prototype.set=function(t,e){return this.__data__[t]=St&&void 0===e?r:e,this},$t.prototype.clear=function(){this.__data__=[]},$t.prototype.delete=function(t){var data=this.__data__,e=Lt(data,t);return!(e<0)&&(e==data.length-1?data.pop():gt.call(data,e,1),!0)},$t.prototype.get=function(t){var data=this.__data__,e=Lt(data,t);return e<0?void 0:data[e][1]},$t.prototype.has=function(t){return Lt(this.__data__,t)>-1},$t.prototype.set=function(t,e){var data=this.__data__,n=Lt(data,t);return n<0?data.push([t,e]):data[n][1]=e,this},Dt.prototype.clear=function(){this.__data__={hash:new Pt,map:new(_t||$t),string:new Pt}},Dt.prototype.delete=function(t){return Qt(this,t).delete(t)},Dt.prototype.get=function(t){return Qt(this,t).get(t)},Dt.prototype.has=function(t){return Qt(this,t).has(t)},Dt.prototype.set=function(t,e){return Qt(this,t).set(t,e),this},Bt.prototype.add=Bt.prototype.push=function(t){return this.__data__.set(t,r),this},Bt.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.clear=function(){this.__data__=new $t},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var n=this.__data__;if(n instanceof $t){var r=n.__data__;if(!_t||r.length<199)return r.push([t,e]),this;n=this.__data__=new Dt(r)}return n.set(t,e),this};var Wt,Ft,Xt=(Wt=function(object,t){return object&&It(object,t,be)},function(t,e){if(null==t)return t;if(!he(t))return Wt(t,e);for(var n=t.length,r=Ft?n:-1,o=Object(t);(Ft?r--:++r<n)&&!1!==e(o[r],r,o););return t}),It=function(t){return function(object,e,n){for(var r=-1,o=Object(object),l=n(object),c=l.length;c--;){var d=l[t?c:++r];if(!1===e(o[d],d,o))break}return object}}();function Ut(object,path){for(var t=0,e=(path=ne(path,object)?[path]:Vt(path)).length;null!=object&&t<e;)object=object[oe(path[t++])];return t&&t==e?object:void 0}function zt(object,t){return null!=object&&t in Object(object)}function Gt(t,e,n,r,o){return t===e||(null==t||null==e||!ge(t)&&!ve(e)?t!=t&&e!=e:function(object,t,e,n,r,o){var v=de(object),w=de(t),T=c,C=c;v||(T=(T=te(object))==l?m:T);w||(C=(C=te(t))==l?m:C);var M=T==m&&!J(object),P=C==m&&!J(t),$=T==C;if($&&!M)return o||(o=new Et),v||_e(object)?Kt(object,t,e,n,r,o):function(object,t,e,n,r,o,l){switch(e){case O:if(object.byteLength!=t.byteLength||object.byteOffset!=t.byteOffset)return!1;object=object.buffer,t=t.buffer;case k:return!(object.byteLength!=t.byteLength||!n(new ft(object),new ft(t)));case d:case h:case _:return ue(+object,+t);case f:return object.name==t.name&&object.message==t.message;case S:case A:return object==t+"";case y:var c=V;case j:var v=2&o;if(c||(c=K),object.size!=t.size&&!v)return!1;var m=l.get(object);if(m)return m==t;o|=1,l.set(object,t);var w=Kt(c(object),c(t),n,r,o,l);return l.delete(object),w;case x:if(Ct)return Ct.call(object)==Ct.call(t)}return!1}(object,t,T,e,n,r,o);if(!(2&r)){var D=M&&lt.call(object,"__wrapped__"),B=P&&lt.call(t,"__wrapped__");if(D||B){var E=D?object.value():object,N=B?t.value():t;return o||(o=new Et),e(E,N,n,r,o)}}if(!$)return!1;return o||(o=new Et),function(object,t,e,n,r,o){var l=2&r,c=be(object),d=c.length,h=be(t).length;if(d!=h&&!l)return!1;var f=d;for(;f--;){var v=c[f];if(!(l?v in t:lt.call(t,v)))return!1}var y=o.get(object);if(y&&o.get(t))return y==t;var _=!0;o.set(object,t),o.set(t,object);var m=l;for(;++f<d;){var w=object[v=c[f]],S=t[v];if(n)var j=l?n(S,w,v,t,object,o):n(w,S,v,object,t,o);if(!(void 0===j?w===S||e(w,S,n,r,o):j)){_=!1;break}m||(m="constructor"==v)}if(_&&!m){var A=object.constructor,x=t.constructor;A==x||!("constructor"in object)||!("constructor"in t)||"function"==typeof A&&A instanceof A&&"function"==typeof x&&x instanceof x||(_=!1)}return o.delete(object),o.delete(t),_}(object,t,e,n,r,o)}(t,e,Gt,n,r,o))}function Rt(t){return!(!ge(t)||function(t){return!!ot&&ot in t}(t))&&(fe(t)||J(t)?ct:B).test(ae(t))}function Yt(t){return"function"==typeof t?t:null==t?me:"object"==typeof t?de(t)?function(path,t){if(ne(path)&&ie(t))return re(oe(path),t);return function(object){var e=function(object,path,t){var e=null==object?void 0:Ut(object,path);return void 0===e?t:e}(object,path);return void 0===e&&e===t?function(object,path){return null!=object&&function(object,path,t){path=ne(path,object)?[path]:Vt(path);var e,n=-1,r=path.length;for(;++n<r;){var o=oe(path[n]);if(!(e=null!=object&&t(object,o)))break;object=object[o]}if(e)return e;return!!(r=object?object.length:0)&&pe(r)&&ee(o,r)&&(de(object)||ce(object))}(object,path,zt)}(object,path):Gt(t,e,void 0,3)}}(t[0],t[1]):function(source){var t=function(object){var t=be(object),e=t.length;for(;e--;){var n=t[e],r=object[n];t[e]=[n,r,ie(r)]}return t}(source);if(1==t.length&&t[0][2])return re(t[0][0],t[0][1]);return function(object){return object===source||function(object,source,t,e){var n=t.length,r=n,o=!e;if(null==object)return!r;for(object=Object(object);n--;){var data=t[n];if(o&&data[2]?data[1]!==object[data[0]]:!(data[0]in object))return!1}for(;++n<r;){var l=(data=t[n])[0],c=object[l],d=data[1];if(o&&data[2]){if(void 0===c&&!(l in object))return!1}else{var h=new Et;if(e)var f=e(c,d,l,object,source,h);if(!(void 0===f?Gt(d,c,e,3,h):f))return!1}}return!0}(object,source,t)}}(t):ne(path=t)?(e=oe(path),function(object){return null==object?void 0:object[e]}):function(path){return function(object){return Ut(object,path)}}(path);var path,e}function Ht(object){if(e=(t=object)&&t.constructor,n="function"==typeof e&&e.prototype||it,t!==n)return vt(object);var t,e,n,r=[];for(var o in Object(object))lt.call(object,o)&&"constructor"!=o&&r.push(o);return r}function Jt(t,e,n){var r=-1;e=R(e.length?e:[me],H(Yt));var o=function(t,e){var n=-1,r=he(t)?Array(t.length):[];return Xt(t,(function(t,o,l){r[++n]=e(t,o,l)})),r}(t,(function(t,n,o){return{criteria:R(e,(function(e){return e(t)})),index:++r,value:t}}));return function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}(o,(function(object,t){return function(object,t,e){var n=-1,r=object.criteria,o=t.criteria,l=r.length,c=e.length;for(;++n<l;){var d=qt(r[n],o[n]);if(d)return n>=c?d:d*("desc"==e[n]?-1:1)}return object.index-t.index}(object,t,n)}))}function Vt(t){return de(t)?t:se(t)}function qt(t,e){if(t!==e){var n=void 0!==t,r=null===t,o=t==t,l=ye(t),c=void 0!==e,d=null===e,h=e==e,f=ye(e);if(!d&&!f&&!l&&t>e||l&&c&&h&&!d&&!f||r&&c&&h||!n&&h||!o)return 1;if(!r&&!l&&!f&&t<e||f&&n&&o&&!r&&!l||d&&n&&o||!c&&o||!h)return-1}return 0}function Kt(t,e,n,r,o,l){var c=2&o,d=t.length,h=e.length;if(d!=h&&!(c&&h>d))return!1;var f=l.get(t);if(f&&l.get(e))return f==e;var v=-1,y=!0,_=1&o?new Bt:void 0;for(l.set(t,e),l.set(e,t);++v<d;){var m=t[v],w=e[v];if(r)var S=c?r(w,m,v,e,t,l):r(m,w,v,t,e,l);if(void 0!==S){if(S)continue;y=!1;break}if(_){if(!Y(e,(function(t,e){if(!_.has(e)&&(m===t||n(m,t,r,o,l)))return _.add(e)}))){y=!1;break}}else if(m!==w&&!n(m,w,r,o,l)){y=!1;break}}return l.delete(t),l.delete(e),y}function Qt(map,t){var e,n,data=map.__data__;return("string"==(n=typeof(e=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?data["string"==typeof t?"string":"hash"]:data.map}function Zt(object,t){var e=function(object,t){return null==object?void 0:object[t]}(object,t);return Rt(e)?e:void 0}var te=function(t){return ut.call(t)};function ee(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function ne(t,object){if(de(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!ye(t))||(M.test(t)||!C.test(t)||null!=object&&t in Object(object))}function ie(t){return t==t&&!ge(t)}function re(t,e){return function(object){return null!=object&&(object[t]===e&&(void 0!==e||t in Object(object)))}}(yt&&te(new yt(new ArrayBuffer(1)))!=O||_t&&te(new _t)!=y||bt&&te(bt.resolve())!=w||mt&&te(new mt)!=j||wt&&te(new wt)!=T)&&(te=function(t){var e=ut.call(t),n=e==m?t.constructor:void 0,r=n?ae(n):void 0;if(r)switch(r){case jt:return O;case At:return y;case xt:return w;case Tt:return j;case kt:return T}return e});var se=le((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(ye(t))return Mt?Mt.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var n=[];return P.test(t)&&n.push(""),t.replace($,(function(t,e,r,o){n.push(r?o.replace(D,"$1"):e||t)})),n}));function oe(t){if("string"==typeof t||ye(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function ae(t){if(null!=t){try{return at.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function le(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],l=n.cache;if(l.has(o))return l.get(o);var c=t.apply(this,r);return n.cache=l.set(o,c),c};return n.cache=new(le.Cache||Dt),n}function ue(t,e){return t===e||t!=t&&e!=e}function ce(t){return function(t){return ve(t)&&he(t)}(t)&&lt.call(t,"callee")&&(!pt.call(t,"callee")||ut.call(t)==l)}le.Cache=Dt;var de=Array.isArray;function he(t){return null!=t&&pe(t.length)&&!fe(t)}function fe(t){var e=ge(t)?ut.call(t):"";return e==v||"[object GeneratorFunction]"==e}function pe(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}function ge(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ve(t){return!!t&&"object"==typeof t}function ye(t){return"symbol"==typeof t||ve(t)&&ut.call(t)==x}var _e=G?H(G):function(t){return ve(t)&&pe(t.length)&&!!N[ut.call(t)]};function be(object){return he(object)?Nt(object):Ht(object)}function me(t){return t}n.exports=function(t,e,n,r){return null==t?[]:(de(e)||(e=null==e?[]:[e]),de(n=r?void 0:n)||(n=null==n?[]:[n]),Jt(t,e,n))}}).call(this,n(60),n(341)(t))},341:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},342:function(t,e,n){(function(e){var n="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,h="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,v=h||f||Function("return this")(),y=Object.prototype.toString,_=Math.max,m=Math.min,w=function(){return v.Date.now()};function S(t,e,r){var o,l,c,d,h,f,v=0,y=!1,S=!1,x=!0;if("function"!=typeof t)throw new TypeError(n);function T(time){var e=o,n=l;return o=l=void 0,v=time,d=t.apply(n,e)}function k(time){return v=time,h=setTimeout(C,e),y?T(time):d}function O(time){var t=time-f;return void 0===f||t>=e||t<0||S&&time-v>=c}function C(){var time=w();if(O(time))return M(time);h=setTimeout(C,function(time){var t=e-(time-f);return S?m(t,c-(time-v)):t}(time))}function M(time){return h=void 0,x&&o?T(time):(o=l=void 0,d)}function P(){var time=w(),t=O(time);if(o=arguments,l=this,f=time,t){if(void 0===h)return k(f);if(S)return h=setTimeout(C,e),T(f)}return void 0===h&&(h=setTimeout(C,e)),d}return e=A(e)||0,j(r)&&(y=!!r.leading,c=(S="maxWait"in r)?_(A(r.maxWait)||0,e):c,x="trailing"in r?!!r.trailing:x),P.cancel=function(){void 0!==h&&clearTimeout(h),v=0,o=f=l=h=void 0},P.flush=function(){return void 0===h?d:M(w())},P}function j(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(j(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=j(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=l.test(t);return n||c.test(t)?d(t.slice(2),n?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,r){var o=!0,l=!0;if("function"!=typeof t)throw new TypeError(n);return j(r)&&(o="leading"in r?!!r.leading:o,l="trailing"in r?!!r.trailing:l),S(t,e,{leading:o,maxWait:e,trailing:l})}}).call(this,n(60))},343:function(t,e,n){"use strict";n(321)},344:function(t,e,n){var r=n(69)(!1);r.push([t.i,".agile{position:relative}.agile--ssr .agile__slides--cloned{display:none}.agile--ssr .agile__slides>*{overflow:hidden;width:0}.agile--ssr .agile__slides>:first-child{width:100%}.agile--rtl .agile__actions,.agile--rtl .agile__dots,.agile--rtl .agile__slides,.agile--rtl .agile__track{flex-direction:row-reverse}.agile:active,.agile :active,.agile:focus,.agile :focus{outline:none}.agile__list{display:block;overflow:hidden;position:relative;width:100%}.agile__track{display:flex;flex-direction:row;flex-wrap:nowrap}.agile__actions{display:flex;justify-content:space-between}.agile--no-nav-buttons .agile__actions{justify-content:center}.agile__slides{align-items:center;display:flex;flex-direction:row;flex-grow:1;flex-shrink:unset;flex-wrap:nowrap;justify-content:flex-start}.agile--disabled .agile__slides{display:block;width:100%}.agile__slide{display:block;flex-grow:1;flex-shrink:0}.agile__slide,.agile__slide *{-webkit-user-drag:none}.agile--fade .agile__slide{opacity:0;position:relative;z-index:0}.agile--fade .agile__slide--active{opacity:1;z-index:2}.agile--fade .agile__slide--expiring{opacity:1;transition-duration:0s;z-index:1}.agile__nav-button[disabled]{cursor:default}.agile__dots{align-items:center;display:flex;list-style:none;padding:0;white-space:nowrap}.agile__dot button{cursor:pointer;display:block;font-size:0;line-height:0}",""]),t.exports=r},350:function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));var r=n(29);n(16),n(126),n(1),n(14),n(3),n(36);var o={methods:{handleMouseDown(t){this.isMouseDown=!0,-1!==t.type.indexOf("touch")&&(this.dragStartX=t.touches[0].clientX,this.dragStartY=t.touches[0].clientY),-1!==t.type.indexOf("mouse")&&(this.dragStartX=t.clientX,this.dragStartY=t.clientY)},handleMouseMove(t){let e,n;-1!==t.type.indexOf("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),-1!==t.type.indexOf("mouse")&&(e=t.clientX,n=t.clientY),Math.abs(e-this.dragStartX)>3*Math.abs(n-this.dragStartY)&&(this.disableScroll(),this.dragDistance=e-this.dragStartX)},handleMouseUp(){this.isMouseDown=!1,this.enableScroll()},handleMouseOver(element){this.settings.autoplay&&("dot"===element&&this.settings.pauseOnDotsHover||"track"===element&&this.settings.pauseOnHover)&&(this.isAutoplayPaused=!0)},handleMouseOut(element){this.settings.autoplay&&("dot"===element&&this.settings.pauseOnDotsHover||"track"===element&&this.settings.pauseOnHover)&&(this.isAutoplayPaused=!1)}}};var l={methods:{getWidth(){if(this.isSSR)return!1;this.widthWindow=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.widthContainer=this.$refs.list.clientWidth},htmlCollectionToArray:t=>Array.prototype.slice.call(t,0)}};var c={methods:{clearAutoPlayPause(){clearTimeout(this.autoplayTimeout),this.autoplayRemaining=null},disableAutoPlay(){clearInterval(this.autoplayInterval),this.autoplayInterval=null},disableScroll(){document.ontouchmove=t=>t.preventDefault()},enableScroll(){document.ontouchmove=()=>!0},restartAutoPlay(){this.disableAutoPlay(),this.toggleAutoPlay()},toggleAutoPlay(){let t=!this.settings.unagile&&this.settings.autoplay;!this.autoplayInterval&&t?this.autoplayInterval=setInterval((()=>{document.hidden||(this.canGoToNext?this.goToNext():this.disableAutoPlay())}),this.settings.autoplaySpeed):this.disableAutoPlay()},toggleFade(){let t=!this.settings.unagile&&this.settings.fade;for(let i=0;i<this.countSlides;i++)this.slides[i].style.transition=t?"opacity "+this.settings.timing+" "+this.settings.speed+"ms":"none",this.slides[i].style.transform=t?`translate(-${i*this.widthSlide}px)`:"none"}}};var d={methods:{prepareSlides(){this.slides=this.htmlCollectionToArray(this.$refs.slides.children),this.slidesCloned&&(this.slidesClonedBefore=this.htmlCollectionToArray(this.$refs.slidesClonedBefore.children),this.slidesClonedAfter=this.htmlCollectionToArray(this.$refs.slidesClonedAfter.children));for(let t of this.slidesAll)t.classList.add("agile__slide")},prepareSlidesClasses(){if(null===this.currentSlide)return!1;for(let i=0;i<this.countSlides;i++)this.slides[i].classList.remove("agile__slide--active"),this.slides[i].classList.remove("agile__slide--current");setTimeout((()=>this.slides[this.currentSlide].classList.add("agile__slide--active")),this.changeDelay);let t=this.slidesCloned?this.countSlides+this.currentSlide:this.currentSlide;this.centerMode&&(t-=Math.floor(this.settings.slidesToShow/2)-+(this.settings.slidesToShow%2==0));for(let i=Math.max(t,0);i<Math.min(t+this.settings.slidesToShow,this.countSlides);i++)this.slidesAll[i].classList.add("agile__slide--current")},prepareCarousel(){this.settings.unagile?this.translateX=0:(null===this.currentSlide&&this.countSlides&&(this.currentSlide=this.settings.initialSlide),this.currentSlide>this.countSlides&&(this.currentSlide=this.countSlides-1),this.goTo(this.currentSlide,!1,!1))}}},h=n(340),f=n.n(h);const v={props:{asNavFor:{type:Array,default:function(){return[]}},autoplay:{type:Boolean,default:!1},autoplaySpeed:{type:Number,default:3e3},centerMode:{type:Boolean,default:!1},centerPadding:{type:String,default:"15%"},changeDelay:{type:Number,default:0},dots:{type:Boolean,default:!0},fade:{type:Boolean,default:!1},infinite:{type:Boolean,default:!0},initialSlide:{type:Number,default:0},mobileFirst:{type:Boolean,default:!0},navButtons:{type:Boolean,default:!0},options:{type:Object,default:()=>null},pauseOnDotsHover:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},responsive:{type:Array,default:()=>null},rtl:{type:Boolean,default:!1},slidesToScroll:{type:Number,default:1},slidesToShow:{type:Number,default:1},speed:{type:Number,default:300},swipeDistance:{type:Number,default:50},throttleDelay:{type:Number,default:500},timing:{type:String,default:"ease",validator:t=>-1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(t)},unagile:{type:Boolean,default:!1}},computed:{initialSettings:function(){let{options:t,...e}=this.$props;return t&&(e={...e,...t}),e.responsive&&(e.responsive=f()(e.responsive,"breakpoint")),e},settings:function(){const{responsive:t,...e}=this.initialSettings;return t&&t.forEach((option=>{if(e.mobileFirst?option.breakpoint<this.widthWindow:option.breakpoint>this.widthWindow)for(let t in option.settings)e[t]=option.settings[t]})),e}}};var y=v,_=n(342),m=n.n(_);var w={name:"Agile",mixins:[o,l,c,d,y,{created(){this.goTo=m()(this.goTo,this.throttleDelay),this.getWidth=m()(this.getWidth,500)}},{watch:{currentBreakpoint(){this.$emit("breakpoint",{breakpoint:this.currentBreakpoint})},currentSlide(){this.prepareSlidesClasses(),this.autoplayStartTimestamp=this.settings.autoplay?+new Date:null,this.$emit("after-change",{currentSlide:this.currentSlide})},dragDistance(){if(this.isMouseDown){const{rtl:t}=this.settings,e=this.dragDistance*(t?-1:1);e>this.swipeDistance&&this.canGoToPrev&&(this.goToPrev(),this.handleMouseUp()),e<-1*this.swipeDistance&&this.canGoToNext&&(this.goToNext(),this.handleMouseUp())}},isAutoplayPaused(t){t?(this.remaining=this.settings.autoplaySpeed-(+new Date-this.autoplayStartTimestamp),this.disableAutoPlay(),this.clearAutoPlayPause()):this.autoplayTimeout=setTimeout((()=>{this.clearAutoPlayPause(),this.goToNext(),this.toggleAutoPlay()}),this.remaining)},"settings.autoplay"(){this.toggleAutoPlay()},"settings.fade"(){this.toggleFade()},"settings.unagile"(){},widthSlide(){for(let i=0;i<this.countSlidesAll;i++)this.slidesAll[i].style.width=`${this.widthSlide}${"auto"!==this.widthSlide?"px":""}`},widthWindow(t,e){e&&(this.prepareCarousel(),this.toggleFade())}}}],data:function(){return{autoplayInterval:null,autoplayRemaining:null,autoplayStartTimestamp:null,autoplayTimeout:null,currentSlide:null,dragDistance:0,dragStartX:0,dragStartY:0,isAutoplayPaused:!1,isMouseDown:!1,slides:[],slidesClonedAfter:[],slidesClonedBefore:[],isSSR:"undefined"==typeof window,transitionDelay:0,translateX:0,widthWindow:0,widthContainer:0}},computed:{breakpoints:function(){return this.initialSettings.responsive?this.initialSettings.responsive.map((function(t){return t.breakpoint})):[]},canGoToPrev:function(){return this.settings.infinite||this.currentSlide>0},canGoToNext:function(){return this.settings.infinite||this.currentSlide<this.countSlides-1},countSlides:function(){return this.isSSR?this.htmlCollectionToArray(this.$slots.default).length:this.slides.length},countSlidesAll:function(){return this.slidesAll.length},currentBreakpoint:function(){var t=this,e=this.breakpoints.map((function(t){return t})).reverse();return this.initialSettings.mobileFirst?e.find((function(e){return e<t.widthWindow}))||0:e.find((function(e){return e>t.widthWindow}))||null},marginX:function(){if(this.settings.unagile)return 0;var t=this.slidesCloned?this.countSlides*this.widthSlide:0;return this.settings.centerMode&&(t-=(Math.floor(this.settings.slidesToShow/2)-+(this.settings.slidesToShow%2==0))*this.widthSlide),this.settings.rtl?t:-1*t},slidesCloned:function(){return!this.settings.unagile&&!this.settings.fade&&this.settings.infinite},slidesAll:function(){return this.slidesCloned?[].concat(Object(r.a)(this.slidesClonedBefore),Object(r.a)(this.slides),Object(r.a)(this.slidesClonedAfter)):this.slides},widthSlide:function(){return this.settings.unagile?"auto":this.widthContainer/this.settings.slidesToShow}},mounted:function(){window.addEventListener("resize",this.getWidth),this.$refs.track.addEventListener("touchstart",this.handleMouseDown),this.$refs.track.addEventListener("touchend",this.handleMouseUp),this.$refs.track.addEventListener("touchmove",this.handleMouseMove),this.$refs.track.addEventListener("mousedown",this.handleMouseDown),this.$refs.track.addEventListener("mouseup",this.handleMouseUp),this.$refs.track.addEventListener("mousemove",this.handleMouseMove),this.isSSR=!1,this.reload()},beforeDestroy:function(){window.removeEventListener("resize",this.getWidth),this.$refs.track.removeEventListener("touchstart",this.handleMouseDown),this.$refs.track.removeEventListener("touchend",this.handleMouseUp),this.$refs.track.removeEventListener("touchmove",this.handleMouseMove),this.$refs.track.removeEventListener("mousedown",this.handleMouseDown),this.$refs.track.removeEventListener("mouseup",this.handleMouseUp),this.$refs.track.removeEventListener("mousemove",this.handleMouseMove),this.disableAutoPlay()},methods:{getCurrentBreakpoint:function(){return this.currentBreakpoint},getCurrentSettings:function(){return this.settings},getCurrentSlide:function(){return this.currentSlide},getInitialSettings:function(){return this.initialSettings},goTo:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.settings.unagile)return!1;r||this.settings.asNavFor.forEach((function(e){e&&e.goTo(t,n,!0)}));var o=t;n&&(this.settings.infinite&&t<0?o=this.countSlides-1:t>=this.countSlides&&(o=0),this.$emit("before-change",{currentSlide:this.currentSlide,nextSlide:o}),this.currentSlide=o,t!==o&&setTimeout((function(){e.goTo(o,!1)}),this.settings.speed));var l=this.settings.fade?0:t*this.widthSlide*this.settings.slidesToScroll;this.transitionDelay=n?this.speed:0,(this.infinite||this.currentSlide+this.slidesToShow<=this.countSlides)&&(this.translateX=this.settings.rtl?l:-1*l)},goToNext:function(){this.canGoToNext&&this.goTo(this.currentSlide+1)},goToPrev:function(){this.canGoToPrev&&this.goTo(this.currentSlide-1)},reload:function(){this.getWidth(),this.prepareSlides(),this.prepareCarousel(),this.toggleFade(),this.toggleAutoPlay()}}},S=w,j=(n(343),n(68)),A=Object(j.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agile",class:{"agile--ssr":t.isSSR,"agile--auto-play":t.settings.autoplay,"agile--disabled":t.settings.unagile,"agile--fade":t.settings.fade&&!t.settings.unagile,"agile--rtl":t.settings.rtl,"agile--no-nav-buttons":!t.settings.navButtons},on:{touchstart:function(){}}},[n("div",{ref:"list",staticClass:"agile__list"},[n("div",{ref:"track",staticClass:"agile__track",style:{transform:"translate("+(t.translateX+t.marginX)+"px)",transition:"transform "+t.settings.timing+" "+t.transitionDelay+"ms"},on:{mouseover:function(e){return t.handleMouseOver("track")},mouseout:function(e){return t.handleMouseOut("track")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.slidesCloned,expression:"slidesCloned"}],ref:"slidesClonedBefore",staticClass:"agile__slides agile__slides--cloned"},[t._t("default")],2),t._v(" "),n("div",{ref:"slides",staticClass:"agile__slides agile__slides--regular"},[t._t("default")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.slidesCloned,expression:"slidesCloned"}],ref:"slidesClonedAfter",staticClass:"agile__slides agile__slides--cloned"},[t._t("default")],2)])]),t._v(" "),t.$slots.caption?n("div",{staticClass:"agile__caption"},[t._t("caption")],2):t._e(),t._v(" "),t.settings.unagile||!t.settings.navButtons&&!t.settings.dots?t._e():n("div",{staticClass:"agile__actions"},[t.settings.navButtons&&!t.settings.unagile?n("button",{ref:"prevButton",staticClass:"agile__nav-button agile__nav-button--prev",attrs:{disabled:!t.canGoToPrev,type:"button"},on:{click:function(e){t.goToPrev(),t.restartAutoPlay()}}},[t._t("prevButton",(function(){return[t._v("\n\t\t\t\t←\n\t\t\t")]}))],2):t._e(),t._v(" "),t.settings.dots&&!t.settings.unagile?n("ul",{ref:"dots",staticClass:"agile__dots"},t._l(t.countSlides,(function(e){return n("li",{key:e,staticClass:"agile__dot",class:{"agile__dot--current":e-1===t.currentSlide},on:{mouseover:function(e){return t.handleMouseOver("dot")},mouseout:function(e){return t.handleMouseOut("dot")}}},[n("button",{attrs:{type:"button"},on:{click:function(n){t.goTo(e-1),t.restartAutoPlay()}}},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])])})),0):t._e(),t._v(" "),t.settings.navButtons&&!t.settings.unagile?n("button",{ref:"nextButton",staticClass:"agile__nav-button agile__nav-button--next",attrs:{disabled:!t.canGoToNext,type:"button"},on:{click:function(e){t.goToNext(),t.restartAutoPlay()}}},[t._t("nextButton",(function(){return[t._v("\n\t\t\t\t→\n\t\t\t")]}))],2):t._e()])])}),[],!1,null,null,null).exports}}]);