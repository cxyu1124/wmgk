<template>
  <div class="ucenterpage">
    <div class="content flex-wrapper">
      <div class="navbox">
        <div class="navwrapper">
          <div v-for="(val, index) in navList" :key="val.id">
            <router-link
              :to="val.type ? '/ucenter/' + val.type : ''"
              class="navtitle flex-wrapper"
              :class="val.type === activeType ? 'active' : ''">
              <div class="flex-wrapper">
                <i class="icon icon-ucenternav1"></i>
                <div>{{val.navName}}</div>
              </div>
              <div :class="index === 0 ? 'el-icon-arrow-right' : 'el-icon-arrow-down'"></div>
            </router-link>
            <div v-if="val.list && val.list.length" class="navcontent">
              <router-link
                :to="'/ucenter/' + item.type"
                class="navitem"
                :class="item.type === activeType ? 'active' : ''"
                v-for="item in val.list"
                :key="item.id">{{item.navName}}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="pagebox">
        <MyCenter v-if="activeType === 'mine'"/>
        <Course v-else-if="activeType === 'course'"/>
        <TestLoad v-else-if="activeType === 'testload'"/>
        <Follow v-else-if="activeType === 'follow'"/>
        <Collection v-else-if="activeType === 'collection'"/>
        <Report v-else-if="activeType === 'report'"/>
        <Myinfo v-else-if="activeType === 'myinfo'"/>
        <Account v-else-if="activeType === 'account'"/>
        <News v-else-if="activeType === 'news'"/>
        <FeedBack v-else-if="activeType === 'feedback'"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyCenter from './MyCenter'
import Course from './Course'
import TestLoad from './TestLoad'
import Follow from './Follow'
import Collection from './Collection'
import Report from './Report'
import Myinfo from './Myinfo'
import Account from './Account'
import News from './News'
import FeedBack from './FeedBack'
export default {
  name: 'ucenter-component',
  components: {
    MyCenter,
    Course,
    TestLoad,
    Follow,
    Collection,
    Report,
    Myinfo,
    Account,
    News,
    FeedBack
  },
  data () {
    return {
      activeType: 'mine',
      navList: [
        {
          id: 1,
          navName: '个人资料',
          icon: 'icon-ucenternav1',
          type: 'mine'
        },
        {
          id: 2,
          navName: '学习记录',
          icon: 'icon-ucenternav2',
          list: [
            {
              id: 11,
              navName: '课程学习',
              type: 'course'
            },
            {
              id: 12,
              navName: '试卷下载',
              type: 'testload'
            },
            {
              id: 13,
              navName: '我的关注',
              type: 'follow'
            },
            {
              id: 14,
              navName: '我的收藏',
              type: 'collection'
            },
            {
              id: 15,
              navName: '我的报告',
              type: 'report'
            }
          ]
        },
        {
          id: 3,
          navName: '中心管理',
          icon: 'icon-ucenternav3',
          list: [
            {
              id: 21,
              navName: '个人资料',
              type: 'myinfo'
            },
            {
              id: 22,
              navName: '我的账户',
              type: 'account'
            },
            {
              id: 23,
              navName: '我的消息',
              type: 'news'
            },
            {
              id: 24,
              navName: '意见反馈',
              type: 'feedback'
            }
          ]
        }
      ]
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler (n) {
        let type = n.fullPath.split('/').slice(-1).toString()
        console.log(type, "type====")
        if (type) {
          this.activeType = type
        } else {
          this.activeType = 'mine'
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.ucenterpage
  width 100%
  background #ffffff
  position relative
  .content
    padding-top 10px
    margin 0 auto
    width 1200px
    justify-content space-between
    position relative
    .navbox
      width 240px
      height auto
      font-size 14px
      color #000
      .navwrapper
        width 240px
        height auto
        border 1px solid #e2e2e2
        border-top 0
        position relative
        .navtitle
          padding 0 10px 0 18px
          height 40px
          line-height 40px
          justify-content space-between
          align-items center
          cursor pointer
          border-top 1px solid #e2e2e2
          &.active
            color #fff
            background #9270E8
            i
              color #fff
          .flex-wrapper
            justify-content flex-start
            align-items center
          .icon
            margin-right 10px
        .navcontent
          width 100%
          box-sizing box-sizing
          .navitem
            display block
            padding 0 16px 0 52px
            line-height 40px
            text-align left
            border-top 1px solid #e2e2e2
            cursor pointer
            &.active
              color #fff
              background #9270E8
              i
                color #fff
    .pagebox
      width 960px
      height auto
      position relative

.centerheader
  height 58px
  justify-content space-between
  align-items center
  .font
    font-size 12px
    color rgbs(0, 0, 0, 0.5)
  .btn
    width 90px
    height 36px
    line-height 36px
    font-size 12px
    color rgba(255, 255, 255, 0.85)
    text-align center
    background #8065DE
    border-radius 4px
.centertitle
  padding-left 24px
  width 100%
  justify-content flex-wrapper
  align-items center
  font-size 20px
  line-height 34px
  text-align left
  color rgba(0, 0, 0, 0.85)
  border-bottom 6px solid #F1F1F1
  box-sizing border-box
  .titleitem
    width 120px
    height 40px
    line-height 40px
    font-size 16px
    text-align center
    color rgba(0, 0, 0, 0.5)
    cursor pointer
    position relative
    &.active
      color #000
    span
      display block
      position absolute
      bottom -6px
      width 120px
      height 6px
      background #9270E8



.nodata
  padding 100px 0
  justify-content center
  align-items center
  font-size 16px
  color rgbs(0, 0, 0, 0.5)
  .link
    color #8065DE
</style>