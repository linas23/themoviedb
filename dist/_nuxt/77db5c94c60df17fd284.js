(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{303:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return v}));var r=n(304),o=n(0),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),v=Object(o.g)("v-card__title");r.a},323:function(t,e,n){"use strict";n(28);var r={props:{data:{type:Object}},computed:{imgUrl:function(){return"https://image.tmdb.org/t/p/original"+this.data.poster_path}},filters:{snip:function(t){return t.slice(0,150)+"..."}},methods:{getDetails:function(){this.$store.commit("setImage",this.imgUrl),this.data.name?this.$router.push({path:"/details/TVshow/".concat(this.data.id)}):this.$router.push({path:"/details/movie/".concat(this.data.id)})}}},o=n(58),c=n(88),l=n.n(c),d=n(304),v=n(303),f=n(112),m=n(130),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"500"},on:{click:t.getDetails}},[n("v-img",{attrs:{src:t.imgUrl,contain:"",height:"250"}}),t._v(" "),t.data.title?n("v-card-title",[t._v(t._s(t.data.title))]):n("v-card-title",[t._v(t._s(t.data.original_name))]),t._v(" "),n("v-card-text",[n("div",[t._v("\n      Vote :\n      "),n("v-progress-circular",{attrs:{value:10*t.data.vote_average,color:"red"}})],1),t._v("\n    Released date : "+t._s(t.data.release_date)+"\n    "),n("br"),t._v("\n    Overview : "+t._s(t._f("snip")(t.data.overview))+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCard:d.a,VCardText:v.a,VCardTitle:v.b,VImg:f.a,VProgressCircular:m.a})},336:function(t,e,n){"use strict";n(10),n(7);var r=n(2),o=(n(38),n(187),n(40),n(5),n(4),n(9),n(34),n(35),n(186),n(1)),c=n(72),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],m=["start","end","center"];function y(t,e){return f.reduce((function(n,r){return n[t+Object(l.q)(r)]=e(),n}),{})}var h=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:h}})),O=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},_=y("justify",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},C=y("alignContent",(function(){return{type:String,default:null,validator:w}})),P={align:Object.keys(j),justify:Object.keys(_),alignContent:Object.keys(C)},S={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},j),{},{justify:{type:String,default:null,validator:O}},_),{},{alignContent:{type:String,default:null,validator:w}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var v=x.get(l);return v||function(){var t,e;for(e in v=[],P)P[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&v.push(o)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(l,v)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},337:function(t,e,n){"use strict";n(60),n(5),n(4),n(9),n(188),n(186);var r=n(1);var o,c=n(72);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},350:function(t,e,n){"use strict";n.r(e);n(59);var r=n(13),o={components:{movieCard:n(323).a},data:function(){return{}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("getTrending","movie");case 3:return r=e.sent,e.next=6,n.dispatch("getTrending","tv");case 6:return o=e.sent,e.abrupt("return",{movies:r,tvs:o});case 8:case"end":return e.stop()}}),e)})))()}},c=n(58),l=n(88),d=n.n(l),v=n(314),f=n(337),m=n(336),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticClass:"display-1 my-5"},[t._v("Trending movies")]),t._v(" "),n("v-row",t._l(t.movies,(function(t,e){return n("v-col",{key:e,attrs:{cols:"6",md:"4"}},[n("movieCard",{attrs:{data:t}})],1)})),1),t._v(" "),n("div",{staticClass:"display-1 my-5"},[t._v("Trending TV shows")]),t._v(" "),n("v-row",t._l(t.tvs,(function(t,e){return n("v-col",{key:e,attrs:{cols:"6",md:"4"}},[n("movieCard",{attrs:{data:t}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:v.a,VContainer:f.a,VRow:m.a})}}]);