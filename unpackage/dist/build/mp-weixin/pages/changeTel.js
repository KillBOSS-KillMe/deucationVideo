(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/changeTel"],{"1abd":function(t,e,n){"use strict";n.r(e);var o=n("787d"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"65b6":function(t,e,n){},"787d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),o={data:function(){return{disabled:!1,currentTime:60,time:"获取验证码",mobile:"",verification_key:""}},methods:{inputVal:function(t){this.mobile=t.detail.value,console.log(t)},inputCode:function(t){this.code=t.detail.value,console.log(t)},getCode:function(){var e=this;return!this.disabled&&(""==this.mobile?(t.showToast({title:"请输入手机号",icon:"none",duration:2e3}),!1):11!=this.mobile.length?(t.showToast({title:"请输入正确的手机号",icon:"none",duration:2e3}),!1):(this.disabled=!0,void t.request({url:"".concat(this.$helper.requestUrl,"user/send_sms"),header:{authorization:n.globalData.token},method:"POST",data:{mobile:this.mobile},success:function(n){console.log(n),n=e.$helper.null2str(n.data),console.log(n,"****************"),"ok"==n.status_code?(t.showToast({title:n.message,icon:"none"}),e.verification_key=n.data.verification_key,e.countdown()):t.showToast({title:n.message,icon:"none"})}})))},countdown:function(){var t=this;console.log("---------------");var e=this.currentTime;this.time="倒计时".concat(e,"秒");var n=setInterval((function(){t.time="倒计时"+(e-1)+"秒",e--,e<=0&&(clearInterval(n),t.time="重新获取",t.currentTime=60,t.disabled=!1)}),1e3)},bind:function(){var e=this;if(""==this.code)return t.showToast({title:"请输入验证码",icon:"none",duration:2e3}),!1;t.request({url:"".concat(this.$helper.requestUrl,"user/bindMobile"),method:"POST",header:{authorization:n.globalData.token},data:{verification_key:this.verification_key,mobile:this.mobile,code:this.code},success:function(n){n=e.$helper.null2str(n.data),console.log(n,"-------------------"),"ok"==n.status_code?(t.showToast({title:n.message,icon:"none",duration:2e3}),setTimeout((function(e){t.navigateBack({data:1})}),2e3)):t.showToast({title:n.message,icon:"none"})}})}}};e.default=o}).call(this,n("543d")["default"])},bc69:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},bd65:function(t,e,n){"use strict";(function(t){n("95ab"),n("921b");o(n("66fd"));var e=o(n("c3cf"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c3cf:function(t,e,n){"use strict";n.r(e);var o=n("bc69"),i=n("1abd");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("dd30");var s,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports},dd30:function(t,e,n){"use strict";var o=n("65b6"),i=n.n(o);i.a}},[["bd65","common/runtime","common/vendor"]]]);