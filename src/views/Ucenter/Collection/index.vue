<template>
  <div class="collectpage">
    <div class="centertitle flex-wrapper">
      <div
        class="titleitem"
        :class="activeId === item.id ? 'active' : ''"
        v-for="item in titleList"
        :key="item.id"
        @click="tabsChange(item)">{{item.name}}<span v-if="activeId === item.id"></span></div>
    </div>
    <div class="collectcontent">
      <div class="coursewrapper flex-wrapper" v-if="activeId === 1">
        <div class="item" v-for="item in videoList" :key="item.id">
          <div class="videobox">
            <video src=""></video>
            <div class="videotips">
              <div class="flex-wrapper">
                <div>主讲教师：{{item.teacher}}</div>
                <div class="playernum flex-wrapper"><i class="el-icon-view" style="font-size: 15px"></i>{{item.palyernum}}</div>
              </div>
            </div>
          </div>
          <p class="ellipsis ellipsis-1">{{item.title}}</p>
        </div>
      </div>
      <div class="tablebox" v-if="activeId === 2">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="title"
            label="试卷名称"
            width="570">
            <template slot-scope="{ row }">
              <router-link to="/" class="link ellipsis ellipsis-1">{{row.title}}</router-link>
            </template>
          </el-table-column>
          <el-table-column
            prop="load_time"
            label="收藏时间">
          </el-table-column>
          <el-table-column
            prop="load_time"
            label="操作">
            <template slot-scope="{ row }">
              <div class="btn" @click="handleCancel(row)">取消收藏</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ucenter-component',
  data () {
    return {
      titleList: [
        {
          id: 1,
          name: '收藏的课程'
        },
        {
          id: 2,
          name: '收藏的试卷'
        }
      ],
      activeId: 2,
      tableData: [
        {
          id: 1,
          title: '【2014高考状元笔记】河北省衡水中学高三英语复习（上学期）必备考点：期末复习讲解2 （扫描版）',
          load_time: '202-01-01 14:23:23'
        },
        {
          id: 2,
          title: '【2014高考状元笔记】河北省衡水中学高三英语复习（上学期）必备考点：期末复习讲解2 （扫描版）',
          load_time: '202-01-01 14:23:23'
        },
        {
          id: 3,
          title: '【2014高考状元笔记】河北省衡水中学高三英语复习（上学期）必备考点：期末复习讲解2 （扫描版）',
          load_time: '202-01-01 14:23:23'
        },
        {
          id: 4,
          title: '【2014高考状元笔记】河北省衡水中学高三英语复习（上学期）必备考点：期末复习讲解2 （扫描版）',
          load_time: '202-01-01 14:23:23'
        }
      ],
      videoList: [
        {
          id: 1,
          url: '',
          teacher: '汪洋',
          palyernum: '1999',
          title:'如何学习科学'
        },
        {
          id: 2,
          url: '',
          teacher: '汪洋',
          palyernum: '1999',
          title:'如何学习科学如何学习科学如何学习科学如何学习科学如何学习科学'
        },
        {
          id: 3,
          url: '',
          teacher: '汪洋',
          palyernum: '1999',
          title:'如何学习科学'
        },
        {
          id: 4,
          url: '',
          teacher: '汪洋',
          palyernum: '1999',
          title:'如何学习科学'
        }
      ]
    }
  },
  methods: {
    tabsChange (item) {
      let id = item.id
      this.activeId = id
    },
    handleCancel (row) {
      console.log(row)
    }
  }
}
</script>
<style lang="stylus" scoped>
.collectpage
  .centertitle
    padding-left 0
.tablebox
  padding 30px 10px 20px 30px
  font-size 12px
  .link
    text-decoration underline
    color #000
  .btn
    color #6236FF
.coursewrapper
    padding 30px 70px 0 30px
    justify-content space-between
    flex-wrap wrap
    .item
      margin-bottom 40px
      width 280px
      .videobox
        width 280px
        height 158px
        background #2A422C
        position relative
        .videotips
          position absolute
          padding 0 10px
          bottom 0
          left 0
          width 100%
          height 36px
          font-size 12px
          color #ffffff
          background rgba(0, 0, 0, 0.25)
          box-sizing border-box
          .flex-wrapper
            height 36px
            justify-content space-between
            align-items center
            .playernum
              i
                margin-right 10px
      p
        margin 0 0
        margin-top 10px
        line-height 20px
        font-size 14px
        color #000000
        text-align left
</style>