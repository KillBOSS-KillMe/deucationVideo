(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/buyConvert"],{"1ca8":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=getApp(),s={data:function(){return{object:[],index:0,classIndex:0,num:1,minusStatus:"disabled",classify:[],price:"",countPrice:""}},onLoad:function(){this.getObject(),this.submintOrder=this.$helper.debounce(this.confirmPay,1500)},methods:{bindPickerChange:function(t){console.log(t.currentTarget.dataset.id),this.index=t.target.value,this.classify_id=t.currentTarget.dataset.id,this.price=this.object[this.index].curriculum[this.classIndex].price,this.countPrice=this.object[this.index].curriculum[this.classIndex].price,this.id=this.object[this.index].curriculum[this.classIndex].id,this.num=1},bindChange:function(t){console.log(t),this.classIndex=t.target.value,this.price=this.object[this.index].curriculum[this.classIndex].price,this.countPrice=this.object[this.index].curriculum[this.classIndex].price,this.id=this.object[this.index].curriculum[this.classIndex].id,this.num=1},getObject:function(){var e=this;t.request({url:"".concat(this.$helper.requestUrl,"pay/classify"),method:"POST",header:{authorization:i.globalData.token},success:function(i){t.hideLoading(),i=e.$helper.null2str(i.data),console.log(i),"ok"==i.status_code&&(e.object=i.data,e.price=e.object[0].curriculum[0].price,e.countPrice=e.object[0].curriculum[0].price,e.id=e.object[0].curriculum[0].id,console.log(e.id),e.classify_id=i.data[0].id)}})},getClassify:function(){var e=this;t.request({url:"".concat(this.$helper.requestUrl,"pay/curricula"),method:"POST",header:{authorization:i.globalData.token},data:{classify_id:this.classify_id},success:function(t){t=e.$helper.null2str(t.data),console.log(t),"ok"==t.status_code&&(e.classify=t.data,e.price=e.classify[0].price,e.countPrice=e.classify[0].price,e.id=e.classify[0].id)}})},bindMinus:function(){var t=this.num;t>1&&t--;var e=t<=1?"disabled":"normal";this.num=t,this.countPrice=(t*this.price).toFixed(2),this.minusStatus=e},bindPlus:function(){var t=this.num;t++;var e=t<1?"disabled":"normal";this.num=t,this.countPrice=(t*this.price).toFixed(2),this.minusStatus=e},bindManual:function(t){var e=t.detail.value;e.replace(/\s+/g,""),console.log(e);var i=/^[1-9]\d*$/;i.test(e)||(e="1"),this.num=e,console.log(this.num,"*")},confirmPay:function(){var e=this;t.request({url:"".concat(this.$helper.requestUrl,"pay/exchangeCodePlaceOrder"),method:"POST",header:{authorization:i.globalData.token},data:{classify_id:this.classify_id,curricula_id:this.id,num:this.num},success:function(i){i=e.$helper.null2str(i.data),console.log(i,"下单信息"),"ok"==i.status_code?e.goBuy(i.data):t.showToast({title:i.message,icon:"none"})}})},goBuy:function(e){var s=this;t.request({url:"".concat(this.$helper.requestUrl,"pay/pay"),method:"POST",header:{authorization:i.globalData.token},data:{type:"exchangeCode",ordernum:e},success:function(e){e=s.$helper.null2str(e.data),console.log(e,"-------------------"),t.hideToast(),"ok"==e.status_code?s.getPay(e.data):t.showToast({title:e.message,icon:"none"})}})},getPay:function(e){var i=this;t.showToast({title:"支付加载中...",icon:"loading",duration:2e3}),t.requestPayment({provider:"wxpay",timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,success:function(e){t.hideToast(),e=i.$helper.null2str(e),console.log(e),t.showToast({title:"支付成功",icon:"success",duration:2e3}),setTimeout((function(e){t.navigateBack({data:1})}),2e3)},fail:function(e){t.showToast({title:"支付失败",icon:"none",duration:2e3})}})}}};e.default=s}).call(this,i("543d")["default"])},"221a":function(t,e,i){"use strict";i.r(e);var s=i("31f2"),n=i("c945");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("f5ad");var c,o=i("f0c5"),u=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],c);e["default"]=u.exports},"31f2":function(t,e,i){"use strict";var s,n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}))},"56be":function(t,e,i){"use strict";(function(t){i("95ab"),i("921b");s(i("66fd"));var e=s(i("221a"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},ba57:function(t,e,i){},c945:function(t,e,i){"use strict";i.r(e);var s=i("1ca8"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},f5ad:function(t,e,i){"use strict";var s=i("ba57"),n=i.n(s);n.a}},[["56be","common/runtime","common/vendor"]]]);