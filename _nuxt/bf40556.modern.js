(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{281:function(t,e,n){},289:function(t,e,n){"use strict";n(281)},300:function(t,e,n){"use strict";n.r(e);var o={name:"Banner",components:{LazyYoutube:n(288).LazyYoutube},props:{dados:{type:Object,required:!0}},data:()=>({banner:{title:"",subtitle:"",button:{text:{mobile:"",desktop:""}},url:{button:"",youtube:""}}}),computed:{textInscricao(){return this.isMobile?this.banner.button.text.mobile:this.banner.button.text.desktop}},watch:{dados(){this.banner=this.dados}},mounted(){this.banner=this.dados,this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onResize(){this.isMobile=window.innerWidth<992}}},r=(n(289),n(29)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.banner?n("section",{staticClass:"banner"},[t._t("default"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 text-center content"},[n("nuxt-picture",{staticClass:"banner-logo d-block",attrs:{alt:"Do Início ao Sim Logo",width:"357",height:"102",loading:"lazy",src:"/elements/do-inicio-ao-sim.png"}}),t._v(" "),n("h1",{staticClass:"mb-3"},[t._v(t._s(t.banner.title))]),t._v(" "),n("p",[t._v(t._s(t.banner.subtitle))]),t._v(" "),n("n-link",{staticClass:"btn large mt-2 mb-5",attrs:{to:t.banner.url.button}},[t._v(t._s(t.textInscricao))])],1),t._v(" "),n("div",{staticClass:"col-12 text-center content"},[n("div",{staticClass:"video"},[n("LazyYoutube",{ref:"vimeoLazyVideo",staticClass:"video-player",attrs:{"max-width":"900px","show-title":!1,src:t.banner.url.youtube}})],1)])])])],2):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);