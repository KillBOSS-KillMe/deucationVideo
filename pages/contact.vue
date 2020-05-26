<template>
  <view class="contact">
    <image src="../static/img14.png" :style="{ width: autoW + 'px', height: autoH + 'px' }" @load='autoImage' mode=""></image>
    <text>联系上级代理获取兑换码</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      autoW: 0,
      autoH: 0
    };
  },
  methods: {
    // 控制图大小
    autoImage(e) {
      // 获取图片的狂傲
      var imgW = e.detail.width;
      var imgH = e.detail.height;
      // 计算图片比例
      var imgScale = imgW / imgH;
      // 声明自适应宽高变量
      var autoW = '';
      var autoH = '';
      // 获取屏幕宽度，并将图片设置为屏幕等宽
      wx.getSystemInfo({
        success: res => {
          autoW = res.windowWidth;
          autoH = autoW / imgScale;
          this.autoW = autoW
          this.autoH = autoH
        }
      });
    }
  }
};
</script>

<style lang="scss">
.contact {
  width: 750rpx;
  image {
    // width: 750rpx !important;
    // height: 312rpx;
  }
  text {
    display: block;
    margin: 20rpx auto;
    color: #343434;
    font-size: 30rpx;
    text-align: center;
  }
}
</style>
