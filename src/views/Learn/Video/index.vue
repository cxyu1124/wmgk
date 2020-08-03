<template>
  <div class="videopage">
    <div class="banner"></div>
    <div class="content">
      <div class="crumbs flex-wrapper">当前位置：<span>学习提升</span><i class="el-icon-arrow-right"></i><span class="current">名师课堂</span> </div>
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb> -->
      <div class="tablenavbox">
        <div class="title flex-wrapper">内容说明（人教版）</div>
        <div class="tablenavitem flex-wrapper">
          <div class="navtype flex-wrapper"><span>阶段</span></div>
          <div class="navdetail flex-wrapper">
            <span :class="filters.grade === item.id ? 'active' : ''" v-for="item in gradeList" :key="item.id">{{item.name}}</span>
          </div>
        </div>
        <div class="tablenavitem flex-wrapper">
          <div class="navtype flex-wrapper"><span>学科</span></div>
          <div class="navdetail flex-wrapper">
            <span :class="filters.subject === item.id ? 'active' : ''" v-for="item in subjectList" :key="item.id">{{item.name}}</span>
          </div>
        </div>
        <div class="tablenavitem flex-wrapper">
          <div class="navtype flex-wrapper"><span>类型</span></div>
          <div class="navdetail flex-wrapper">
            <span :class="filters.type === item.id ? 'active' : ''" v-for="item in typeList" :key="item.id">{{item.name}}</span>
          </div>
        </div>
        <div class="tablenavitem flex-wrapper">
          <div class="navtype flex-wrapper"><span>搜索</span></div>
          <div class="navdetail searchbox flex-wrapper">
            <div class="navinput">
              <el-input
                placeholder="请输入关键词"
                v-model="filters.keywords"
                clearable>
              </el-input>
            </div>
            <span class="navsearchbtn">搜索</span>
          </div>
        </div>
      </div>
      <div class="videobox flex-wrapper">
        <div class="videoitem" v-for="item in videoList" :key="item.id">
          <div class="videoposter"><img :src="item.poster" ></div>
          <div class="videoinfrom flex-wrapper">
            <p class="title ellipsis ellipsis-1">{{item.title}}</p>
            <div class="other flex-wrapper">
              <div class="teacher">主讲老师：{{item.teacher}}</div>
              <div class="playnum flex-wrapper"><i class="icon icon-videoeye"></i>{{item.visitednum}}</div>
            </div>
          </div>
        </div>
      </div>
      <Paginate
        :page.sync="pageData.current_page"
        :totalCount="pageData.total"
        :pageSize.sync="pageData.per_page"
        :showPaginate="false"
        @pageChange="handleFilter('page')"
      ></Paginate>
    </div>
  </div>
</template>
<script>
export default {
  name: 'video-components',
  data () {
    return {
      gradeList: [
        {
          id: 0,
          name: '不限'
        },
        {
          id: 1,
          name: '高一'
        },
        {
          id: 2,
          name: '高二'
        },
        {
          id: 3,
          name: '高三'
        },
        {
          id: 4,
          name: '初升高衔接'
        }
      ],
      subjectList: [
        {
          id: 0,
          name: '不限'
        },
        {
          id: 1,
          name: '语文'
        },
        {
          id: 2,
          name: '数学'
        },
        {
          id: 3,
          name: '英语'
        },
        {
          id: 4,
          name: '物理'
        },
        {
          id: 5,
          name: '化学'
        },
        {
          id: 6,
          name: '生物'
        },
        {
          id: 7,
          name: '地理'
        },
        {
          id: 8,
          name: '历史'
        },
        {
          id: 9,
          name: '政治'
        }
      ],
      typeList: [
        {
          id: 0,
          name: '不限'
        },
        {
          id: 1,
          name: '知识点讲解'
        },
        {
          id: 2,
          name: '难点提升'
        }
      ],
      filters: {
        grade: 0,
        subject: 0,
        type: 0,
        keywords: ''
      },
      pageData: {
        total: 20,
        per_page: 10,
        current_page: 1
      },
      videoList: [
        {
          id: 1,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter1.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 2,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter1.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 3,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter1.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 4,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter1.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 5,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter2.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 6,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter2.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 7,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter2.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 8,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter3.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 9,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter3.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 10,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter4.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        },
        {
          id: 11,
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/videoposter4.png',
          title: '一元二次方程式',
          teacher: '程老师',
          visitednum: 27777
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.videopage
  background #FAF7FA
  position relative
  .banner
    width 100%
    height 400px
    background red
    position relative
  .content
    margin 0 auto
    width 1200px
    position relative
.crumbs
  height 42px
  align-items center
  font-size 12px
  color #666
  .current
    color #333
  i
    margin-top 1px
.tablenavbox
  background #ffffff
  border 1px solid #EEEEEE
  font-size 14px
  box-shadow 0px 0px 16px 0px rgba(190,189,189,0.15)
  position relative
  .title
    padding 0 32px
    width 100%
    align-items center
    height 56px
    color #333333
    box-sizing border-box
    border-bottom 1px solid #EEEEEE
  .tablenavitem
    font-size 14px
    align-items center
    background #F8F8F8
    box-sizing border-box
    .navtype
      width 118px
      height 100%
      justify-content center
      align-items center
      color #333333
    .navdetail
      padding 13px 20px
      width 1082px
      align-items center
      background #fff
      box-sizing border-box
      border-bottom 1px solid #F3F3F3
      span
        display block
        margin-right 18px
        padding 7px 12px
        line-height 16px
        border-radius 5px
        background #ffffff
        color #666
        cursor pointer
        &.active
          background #8081DD
          color #fff
        &:last-child
          margin-right 0
    .searchbox
      padding 0 20px
      height 56px
      .navinput
        width 317px
      .navsearchbtn
        margin-left 20px
        padding 0 0
        width 78px
        height 37px
        line-height 37px
        text-align center
        font-size 16px
        color #fff
        background #8081DD
        border-radius 5px
.videobox
  justify-content flex-start
  align-items center
  flex-wrap wrap
  .videoitem
    margin-top 40px
    margin-right 42px
    width 268px
    border-radius 5px
    overflow hidden
    border 1px solid rgba(238,238,238,1)
    box-shadow 0px 0px 22px 0px rgba(2,4,167,0.2)
    &:nth-child(4n)
      margin-right 0
    .videoposter
      width 268px
      height 159px
      img
        display block
        width 100%
        height 100%
    .videoinfrom
      padding 0 20px
      height 90px
      -ms-flex-direction column
      flex-direction column
      justify-content center
      .title
        padding 0 0
        margin 0 0
        font-size 16px
        color #333
        line-height 20px
      .other
        margin-top 15px
        justify-content space-between
        align-items center
        font-size 14px
        line-height 18px
        color #666
        .playnum
          align-items center
          color #999
          i
            margin-right 10px
</style>