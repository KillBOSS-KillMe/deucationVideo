(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/service"],{"201a":function(t,e,n){"use strict";n.r(e);var a=n("9d9f"),u=n("7f3d");for(var s in u)"default"!==s&&function(t){n.d(e,t,(function(){return u[t]}))}(s);n("d7cb");var i,o=n("f0c5"),l=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=l.exports},"7f3d":function(t,e,n){"use strict";n.r(e);var a=n("9611"),u=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=u.a},9611:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),a={data:function(){return{messageList:[{title:"请输入编号获取链接",status:"0"}],userImg:"",inputValue:""}},onLoad:function(){this.userImg=n.globalData.userInfo.avatar},methods:{getSetData:function(t){console.log(t),this.inputVal=t.detail.value,this.inputValue=this.inputVal},send:function(){var e=this;if(console.log(this.inputVal),""==this.inputValue)return t.showToast({title:"请输入内容",icon:"none"}),!1;this.item={title:this.inputVal,status:"1"},this.messageList.push(this.item),this.inputValue="",setTimeout((function(a){t.request({url:"".concat(e.$helper.requestUrl,"customer/getDataUrl"),method:"POST",header:{authorization:n.globalData.token},data:{ordernum:e.inputVal},success:function(t){t=e.$helper.null2str(t.data),console.log(t,"-------------------"),"ok"==t.status_code?(e.list={title:t.data,status:"0"},e.messageList.push(e.list)):(e.list={title:t.message,status:"0"},e.messageList.push(e.list))}})}),1e3)},copy:function(e){t.setClipboardData({data:e,success:function(e){t.showToast({title:"复制成功",icon:"none"})}})}}};e.default=a}).call(this,n("543d")["default"])},"9d9f":function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}))},"9e32":function(t,e,n){},bcfb:function(t,e,n){"use strict";(function(t){n("95ab"),n("921b");a(n("66fd"));var e=a(n("201a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d7cb:function(t,e,n){"use strict";var a=n("9e32"),u=n.n(a);u.a}},[["bcfb","common/runtime","common/vendor"]]]);