<template>
  <div class="homepage">{{content}}</div>
</template>

<script>
export default {
  name: 'home-component',
  data () {
    return {
      content: '欢迎登录'
    }
  }
}
</script>

<style lang="stylus" scoped>
.homepage
  font-size 50px
</style>