(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{314:function(e,t,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("011b35a0",content,!0,{sourceMap:!1})},320:function(e,t,n){"use strict";n(314)},321:function(e,t,n){var r=n(71)(!1);r.push([e.i,'.primary{color:#df920b}body,html{font-family:"Montserrat",sans-serif}a,p{color:#4f4f4f;font-size:19px;line-height:36px}a{transition:all .3s}a:hover{color:#e47404}h1{font-size:72px}h1,h2{font-weight:300}h2{font-size:45px;line-height:55px}h3{font-size:22px;line-height:30px}h4,h5,h6{font-size:20px;line-height:35px}.btn{background-color:#e47404;color:#fff;padding:15px;max-width:300px;width:100%}.btn.small{max-width:none;width:auto;padding:10px 15px;line-height:20px}.btn.large{max-width:455px;width:100%}.btn.xlarge{max-width:515px;width:100%}.btn:hover{background-color:#df920b;color:#fff}@media screen and (max-width:991px){h1{font-size:48px;line-height:60px}h2{font-size:32px;line-height:48px}h3{font-size:22px;line-height:30px}h4,h5,h6{font-size:20px;line-height:35px}}.blue{background:#4a69bd}.red{background:#e55039}.yellow{background:#f6b93b}#slider{width:100%;height:30vh;overflow:hidden;position:relative}#slider .fade-enter-active{transition:opacity 1s}#slider .fade-enter{opacity:0}#slider .slide-next-enter-active,#slider .slide-next-leave-active{transition:transform .5s ease-in-out}#slider .slide-next-enter{transform:translate(100%)}#slider .slide-next-leave-to{transform:translate(-100%)}#slider .slide-prev-enter-active,#slider .slide-prev-leave-active{transition:transform .5s ease-in-out}#slider .slide-prev-enter{transform:translate(-100%)}#slider .slide-prev-leave-to{transform:translate(100%)}#slider .slide{width:100%;height:100%;position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center}#slider .box{max-width:725px;margin:0 auto;font-style:italic;z-index:99}#slider .box .cinco_estrelas{margin:0 auto 15px}#slider .box .autor{font-style:normal}#slider .btn{z-index:1000;cursor:pointer;display:flex;justify-content:center;align-items:center;width:70px;height:70px;position:absolute;top:calc(50% - 35px);left:0;transition:transform .3s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0;background-color:transparent}#slider .btn-next{left:auto;right:0}@media screen and (max-width:992px){#slider{height:70vh}#slider .btn{top:auto;bottom:0}}',""]),e.exports=r},354:function(e,t,n){"use strict";n.r(t);n(1),n(42),n(46);var r=n(315),o={name:"TestimonialCarousel",components:{ArrowLeft:function(){return n.e(20).then(n.bind(null,368))},ArrowRight:function(){return n.e(21).then(n.bind(null,369))}},data:function(){return{depoimentos:r.depoimentos,current:0,direction:1,transitionName:"fade",show:!1,slides:[{className:"blue"},{className:"red"},{className:"yellow"}]}},mounted:function(){this.show=!0},methods:{slide:function(e){this.direction=e,this.transitionName=1===e?"slide-next":"slide-prev";var t=this.slides.length;this.current=(this.current+e%t+t)%t}}},l=(n(320),n(50)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"slider"}},[n("transition-group",{staticClass:"slides-group",attrs:{tag:"div",name:e.transitionName}},[e.show?n("div",{key:e.current,staticClass:"slide",class:e.depoimentos[e.current].id},[n("div",{staticClass:"box text-center"},[n("div",{staticClass:"cinco_estrelas"}),e._v(" "),n("p",[e._v(e._s(e.depoimentos[e.current].description))]),e._v(" "),n("p",{staticClass:"autor"},[e._v(e._s(e.depoimentos[e.current].autor))])])]):e._e()]),e._v(" "),n("div",{staticClass:"btn btn-prev",attrs:{"aria-label":"Previous slide"},on:{click:function(t){return e.slide(-1)}}},[n("ArrowLeft")],1),e._v(" "),n("div",{staticClass:"btn btn-next",attrs:{"aria-label":"Next slide"},on:{click:function(t){return e.slide(1)}}},[n("ArrowRight")],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);