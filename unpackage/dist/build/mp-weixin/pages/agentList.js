(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/agentList"],{"0117":function(t,n,e){"use strict";var u=e("fc62"),a=e.n(u);a.a},3995:function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}))},ae3a:function(t,n,e){"use strict";e.r(n);var u=e("ebd4"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a},d0cf:function(t,n,e){"use strict";(function(t){e("95ab"),e("921b");u(e("66fd"));var n=u(e("fd51"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},ebd4:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=getApp(),u={data:function(){return{list:[]}},onLoad:function(){this.getList()},methods:{getList:function(){var n=this;t.showLoading({title:"加载中..."}),t.request({url:"".concat(this.$helper.requestUrl,"user/myAgentList"),method:"POST",header:{authorization:e.globalData.token},success:function(e){t.hideLoading(),e=n.$helper.null2str(e.data),console.log(e),"ok"==e.status_code?n.list=e.data:n.list=[]}})}}};n.default=u}).call(this,e("543d")["default"])},fc62:function(t,n,e){},fd51:function(t,n,e){"use strict";e.r(n);var u=e("3995"),a=e("ae3a");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("0117");var c,i=e("f0c5"),r=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=r.exports}},[["d0cf","common/runtime","common/vendor"]]]);