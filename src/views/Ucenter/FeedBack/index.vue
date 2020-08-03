<template>
  <div class="feedbackpage">
    <div class="centertitle">意见反馈</div>
    <div class="feedbackcontent">
      <div class="frombox">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="意见反馈">
            <el-input
              type="textarea"
              v-model="form.desc"
              rows="8"
              maxlength="300"
              show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="您的名称">
            <el-input v-model="form.name" placeholder="未填写"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.phone" placeholder="QQ或手机号"></el-input>
          </el-form-item>
          <el-form-item label="">
            <div class="btn" @click="onSubmit">我要反馈</div>
          </el-form-item>
        </el-form>
      </div>
      <div class="historybox">
        <div class="history" v-if="tableData && tableData.length">
          <p>历史反馈：</p>
          <div class="tablebox">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="create_time"
                label="反馈时间"
                width="200">
              </el-table-column>
              <el-table-column
                prop="title"
                label="内容"
                width="414">
                <template slot-scope="{ row }">
                  <div class="ellipsis ellipsis-1">{{row.title}}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="create_time"
                label="操作">
                <template slot-scope="{ row }">
                  <router-link class="link" to="/">查看详情{{row.id}}</router-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="nodata" v-else>暂无反馈</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feedback-component',
  data () {
    return {
      form: {
        desc: '',
        name: '',
        phone: ''
      },
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
  },
  methods: {
    onSubmit () {
      console.log(123)
    }
  }
}
</script>
<style lang="stylus" scoped>
.feedbackcontent
  padding 30px 0 30px 75px
  position relative
  .frombox
    padding-right 245px
    padding-bottom 10px
    width 100%
    box-sizing border-box
    border-bottom 1px solid #ebeef5
    border
    .btn
      width 80px
      height 30px
      line-height 30px
      font-size 12px
      color rgba(255, 255, 255, .85)
      text-align center
      border-radius 4px
      background #8065DE
  .historybox
    margin-top 24px
    .history
      p
        font-size 12px
        color rgba(0, 0, 0, .5)
      .tablebox
        width 100%
        .link
          color #6236FF
</style>