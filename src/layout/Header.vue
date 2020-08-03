<template>
  <div class="headerbox">
    <div class="headercontent">
      <div class="contact flex-wrapper">
        <div class="item flex-wrapper"><i class="icon icon-qq"></i>QQ：332290908</div>
        <div class="item flex-wrapper"><i class="icon icon-phone"></i>联系电话：010-83778888</div>
      </div>
      <!-- <div class="headernav flex-wrapper">
        <div class="navbox">
          <div class="logobox"><img src="https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/logo-nav.png"></div>
          <router-link
            class="navitem" 
            :class="val.url.indexOf(currentRoute) > -1 ? 'active' : ''"
            v-for="val in routers"
            :key="val.id"
            :to="val.url">
            {{val.name}}</router-link>
        </div>
        <router-link class="toucernter flex-wrapper" to="/ucenter"><i class="icon icon-ucenter"></i>个人中心</router-link>
      </div> -->

      <div class="headernav flex-wrapper">
        <div class="navbox">
          <div class="logobox"><img src="https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/logo-nav.png"></div>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#7F56D6"
            text-color="#fff"
            active-text-color="#ffffff"
            :router="true">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">学习提升</template>
              <el-menu-item index="/learn/video">名师课堂</el-menu-item>
              <el-menu-item index="/learn/test">名师题库</el-menu-item>
              <el-menu-item index="/learn/knowledge">知识点精讲</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">生涯规划</el-menu-item>
            <el-menu-item index="4">志愿规划</el-menu-item>
          </el-menu>
        </div>
        <router-link class="toucernter flex-wrapper" to="/ucenter/mine"><i class="icon icon-ucenter"></i>个人中心</router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  data () {
    return {
      currentRoute: '',
      routers: [
        {
          id: '1',
          name: '首页',
          url: '/home'
        },
        {
          id: '2',
          name: '学习提升',
          url: '/login',
          children: [
            {
              id: '2-1',
              name: '名师课堂',
              url: '/video'
            },
            {
              id: '2-2',
              name: '名师题库',
              url: '/test'
            },
            {
              id: '2-3',
              name: '知识点精讲',
              url: '/knowledge'
            }
          ]
        },
        {
          id: '3',
          name: '生涯规划',
          url: '/login'
        },
        {
          id: '4',
          name: '志愿规划',
          url: '/login'
        }
      ],
      activeIndex: '/home'
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(n) {
        this.currentRoute = this.currentPath(n.path)
      }
    }
  },
  methods: {
    currentPath(path) {
      let pa = path
      return pa
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus" scoped>
.headerbox
  width 100%
  height 110px
  background #7F57D6
  position relative
  .headercontent
    margin 0 auto
    width 1200px
    height 110px
    position relative
    .contact
      margin 0 auto
      width 1200px
      height 40px
      justify-content flex-start
      align-items center
      font-size 13px
      color #FCFCFD
      .item
        margin-right 75px
        .icon
          display block
          margin-right 15px
    .headernav
      margin-top 6px
      width 100%
      height 64px
      font-size 16px
      color #ffffff
      justify-content space-between
      align-items center
      .navbox
        display flex
        justify-content flex-start
        align-items center
        .logobox
          margin-right 40px
          width 153px
          height 34px
          img
            display block
            width 100%
            height 100%
        .navitem
          margin 0 12px
          width 110px
          height 64px
          text-align center
          line-height 64px
          font-size 16px
          color #ffffff
          position relative
          &.active
            background #774AD7
      .toucernter
        justify-content center
        align-items center
        color #fff
        .icon
          margin-right 10px

</style>