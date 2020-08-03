<template>
  <div class="footerbox">
    <div class="content">
      <img class="wechat" :src="wechat">
      <div class="codefont">
        <p>使用微信“扫一扫”上面的小程序码即可在</p>
        <p>手机上使用完美高考功能</p>                 
      </div>
      <div class="regbox flex-wrapper">
        <p>版权所有@清华大学</p>
        <p>京ICP备2004409号</p>
        <p>京公网安备XXXXXXXXXXXX号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  data () {
    return {
      wechat: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/wechatcode.png',
    }
  }
}
</script>

<style lang="stylus" scoped>
.footerbox
  width 100%
  height 310px
  background -webkit-linear-gradient(#9667EB, #7E82D9)
  background -o-linear-gradient(#9667EB, #7E82D9);
  background -moz-linear-gradient(#9667EB, #7E82D9)
  background linear-gradient(#9667EB, #7E82D9)
  position relative
  .content
    padding 40px 0 32px
    margin 0 auto
    width 1200px
    .wechat
      display block
      margin 0 auto
      width 124px
      height 128px
    .codefont
      margin-top 20px
      font-size 12px
      color #ffffff
      text-align center
      line-height 20px
    .regbox
      margin-top 28px
      justify-content center
      font-size 12px
      line-height 20px
      color #ffffff
      p
        margin 0 10px
p
  margin 0 0
</style>