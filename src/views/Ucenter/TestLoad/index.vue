<template>
  <div class="testloadpage">
    <div class="centertitle">试卷下载</div>
    <div class="testcontent">
      <div class="centerheader flex-wrapper">
        <div class="font">下载历史：</div>
        <router-link to="/" class="btn">更多试卷</router-link>
      </div>
      <div class="tablebox">
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
            prop="create_time"
            label="下载时间">
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
      tableData: [
        {
          id: 1,
          title: '【2014高考状元笔记】河北省衡水中学高三英语复习（上学期）必备考点：期末复习讲解2 （扫描版）',
          create_time: '202-01-01 14:23:23'
        },
        {
          id: 2,
          title: '【2014高考状元笔记】河北省衡水中学高三英语复习（上学期）必备考点：期末复习讲解2 （扫描版）',
          create_time: '202-01-01 14:23:23'
        },
        {
          id: 3,
          title: '【2014高考状元笔记】河北省衡水中学高三英语复习（上学期）必备考点：期末复习讲解2 （扫描版）',
          create_time: '202-01-01 14:23:23'
        },
        {
          id: 4,
          title: '【2014高考状元笔记】河北省衡水中学高三英语复习（上学期）必备考点：期末复习讲解2 （扫描版）',
          create_time: '202-01-01 14:23:23'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.testcontent
  padding 0 10px 0 35px
  background #ffffff
  box-sizing border-box
  position relative
  .tablebox
    font-size 12px
    .link
      text-decoration underline
      color #000
</style>