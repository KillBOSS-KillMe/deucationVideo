(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/systemNotice"],{7543:function(t,e,n){"use strict";(function(t){n("95ab"),n("921b");a(n("66fd"));var e=a(n("9919"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"75f6":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},8511:function(t,e,n){"use strict";n.r(e);var a=n("cf0b"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"8cd3":function(t,e,n){},9919:function(t,e,n){"use strict";n.r(e);var a=n("75f6"),i=n("8511");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("dff2");var u,l=n("f0c5"),c=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},cf0b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f5fd"));function i(t){return t&&t.__esModule?t:{default:t}}var o=getApp(),u={mixins:[a.default],data:function(){return{list:[],imgUrl:"",downOption:{auto:!0},upOption:{page:{num:0,size:20},noMoreSize:5,empty:{tip:"暂无相关数据"},textNoMore:"没有更多数据了"}}},onLoad:function(){this.imgUrl=this.$helper.imgUrl},methods:{goDetail:function(e){t.navigateTo({url:"/pages/articleDetail?id=".concat(e)})},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(t){this.getList(t)},getList:function(e){var n=this;t.showLoading({title:"加载中..."}),t.request({url:"".concat(this.$helper.requestUrl,"system/getSystemMessageList"),method:"POST",header:{authorization:o.globalData.token},data:{page_size:e.size,page:e.num},success:function(a){a=n.$helper.null2str(a.data),t.hideLoading(),"ok"==a.status_code&&("暂无信息"==a.message?(n.list=[],n.mescroll.endByPage(0,0)):(1==e.num&&(n.list=[]),n.list=n.list.concat(a.data.data),n.mescroll.endByPage(a.data.data.length,a.data.total)))}})}}};e.default=u}).call(this,n("543d")["default"])},dff2:function(t,e,n){"use strict";var a=n("8cd3"),i=n.n(a);i.a}},[["7543","common/runtime","common/vendor"]]]);