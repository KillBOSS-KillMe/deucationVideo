(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/articleDetail"],{1035:function(t,e,n){},4184:function(t,e,n){"use strict";(function(t){n("95ab"),n("921b");a(n("66fd"));var e=a(n("4496"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},4496:function(t,e,n){"use strict";n.r(e);var a=n("8914"),o=n("c14b");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("c87e");var u,r=n("f0c5"),i=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=i.exports},8914:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}))},c14b:function(t,e,n){"use strict";n.r(e);var a=n("cc87"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=o.a},c87e:function(t,e,n){"use strict";var a=n("1035"),o=n.n(a);o.a},cc87:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){Promise.all([n.e("common/vendor"),n.e("componets/jyf-parser")]).then(function(){return resolve(n("108a"))}.bind(null,n)).catch(n.oe)},o=getApp(),c={components:{"jyf-parser":a},data:function(){return{detail:{}}},onLoad:function(t){console.log(t.id),this.getDetail(t.id)},methods:{getDetail:function(e){var n=this;t.showLoading({title:"加载中..."}),t.request({url:"".concat(this.$helper.requestUrl,"system/getSystemMessageDetails"),method:"POST",header:{authorization:o.globalData.token},data:{id:e},success:function(e){t.hideLoading(),e=n.$helper.null2str(e.data),"ok"==e.status_code&&(n.detail=e.data)}})}}};e.default=c}).call(this,n("543d")["default"])}},[["4184","common/runtime","common/vendor"]]]);