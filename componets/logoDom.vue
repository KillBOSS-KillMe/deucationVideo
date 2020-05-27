<template>
  <view class="logoMe">
    <image src="@/static/logo.png" />
    <text>西安贝肯伟提供技术支持</text>
  </view>
</template>

<script>
export default {
  name: 'logoDom'
};
</script>

<style lang="scss">
.logoMe {
  font-size: 20rpx;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50rpx 0;
  margin-bottom: 120rpx;
  image {
    width: 100rpx;
    height: 50rpx;
  }
}
</style>
