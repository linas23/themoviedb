(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{323:function(t,e,r){"use strict";r(28);var n={props:{data:{type:Object}},computed:{imgUrl:function(){return"https://image.tmdb.org/t/p/original"+this.data.poster_path}},filters:{snip:function(t){return t.slice(0,150)+"..."}},methods:{getDetails:function(){this.$store.commit("setImage",this.imgUrl),this.data.name?this.$router.push({path:"/details/TVshow/".concat(this.data.id)}):this.$router.push({path:"/details/movie/".concat(this.data.id)})}}},o=r(58),c=r(88),l=r.n(c),v=r(304),d=r(303),h=r(112),m=r(130),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{height:"500"},on:{click:t.getDetails}},[r("v-img",{attrs:{src:t.imgUrl,contain:"",height:"250"}}),t._v(" "),t.data.title?r("v-card-title",[t._v(t._s(t.data.title))]):r("v-card-title",[t._v(t._s(t.data.original_name))]),t._v(" "),r("v-card-text",[r("div",[t._v("\n      Vote :\n      "),r("v-progress-circular",{attrs:{value:10*t.data.vote_average,color:"red"}})],1),t._v("\n    Released date : "+t._s(t.data.release_date)+"\n    "),r("br"),t._v("\n    Overview : "+t._s(t._f("snip")(t.data.overview))+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCard:v.a,VCardText:d.a,VCardTitle:d.b,VImg:h.a,VProgressCircular:m.a})},349:function(t,e,r){"use strict";r.r(e);r(10),r(7),r(5),r(4),r(9);var n=r(2),o=r(129),c=r(323);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={components:{movieCard:c.a},data:function(){return{page:2}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({movies:"movieList"})),mounted:function(){this.$store.dispatch("getList","movie")},methods:{getMore:function(){this.$store.dispatch("getMore",{type:"movie",page:this.page}),this.page++}}},d=r(58),h=r(88),m=r.n(h),f=r(138),O=r(314),_=r(337),y=r(336),component=Object(d.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",[e("div",{staticClass:"display-1 my-5"},[this._v("Featured Movies")]),this._v(" "),e("v-row",this._l(this.movies,(function(t,r){return e("v-col",{key:r,attrs:{cols:"12",md:"4"}},[e("movieCard",{attrs:{data:t}})],1)})),1),this._v(" "),e("div",{staticClass:"text-center"},[e("v-btn",{staticClass:"red white--text",attrs:{"x-large":""},on:{click:this.getMore}},[this._v("See More")])],1)],1)],1)}),[],!1,null,null,null),w=component.exports;m()(component,{VBtn:f.a,VCol:O.a,VContainer:_.a,VRow:y.a});function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var V={components:{movieCard:c.a},data:function(){return{page:2}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({lists:"tvList"})),mounted:function(){this.$store.dispatch("getList","tv")},methods:{getMore:function(){this.$store.dispatch("getMore",{type:"tv",page:this.page}),this.page++}}},C=Object(d.a)(V,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",[e("div",{staticClass:"display-1 my-5"},[this._v("Featured TV shows")]),this._v(" "),e("v-row",this._l(this.lists,(function(t,r){return e("v-col",{key:r,attrs:{cols:"12",md:"4"}},[e("movieCard",{attrs:{data:t}})],1)})),1),this._v(" "),e("div",{staticClass:"text-center"},[e("v-btn",{staticClass:"red white--text",attrs:{"x-large":""},on:{click:this.getMore}},[this._v("See More")])],1)],1)],1)}),[],!1,null,null,null),P=C.exports;m()(C,{VBtn:f.a,VCol:O.a,VContainer:_.a,VRow:y.a});var x={components:{movieList:w,tvList:P},head:function(){return{title:"Home"}},data:function(){return{tab:null,tabs:[{title:"MOVIES",icon:"mdi-movie"},{title:"TV",icon:"mdi-television-classic"}],items:["hello","hi","bye"]}}},k=r(304),$=r(131),D=r(347),M=r(348),E=r(353),L=r(345),S=Object(d.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("v-container",{attrs:{height:"100vh"}},[r("v-row",{attrs:{align:"center"}},[r("v-col",[r("lottie-player",{staticStyle:{width:"320px"},attrs:{autoplay:"",loop:"",mode:"normal",src:"https://assets3.lottiefiles.com/datafiles/397tkqLfSbPbfm9/data.json",speed:"0.5"}})],1),t._v(" "),r("v-col",[r("div",{staticClass:"display-4 font-weight-bold"},[t._v("lets review the movies")])])],1),t._v(" "),r("v-card",[r("v-tabs",{attrs:{grow:"","icons-and-text":"",centered:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,(function(e,n){return r("v-tab",{key:n},[t._v("\n            "+t._s(e.title)+"\n            "),r("v-icon",[t._v(t._s(e.icon))])],1)})),1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(2,(function(i){return r("v-tab-item",{key:i},[r("v-card",{attrs:{flat:"",elevation:"24"}},[0==t.tab?r("div",[r("movieList")],1):r("div",[r("tvList")],1)])],1)})),1)],1)],1)],1)])}),[],!1,null,null,null);e.default=S.exports;m()(S,{VCard:k.a,VCol:O.a,VContainer:_.a,VIcon:$.a,VRow:y.a,VTab:D.a,VTabItem:M.a,VTabs:E.a,VTabsItems:L.a})}}]);