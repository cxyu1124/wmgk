<template>
  <div class="reportpage">
    <div class="centertitle">我的报告</div>
    <div class="reportcontent">
      <div class="screenbox flex-wrapper">
        <div class="screenitem flex-wrapper">
          <div class="screenlabel">测试类型</div>
          <el-select v-model="filters.type" placeholder="请选择">
            <el-option value="0" label="全部"></el-option>
            <el-option
              v-for="item in testType"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="tablebox">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="测试"
            width="300">
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="时间">
          </el-table-column>
          <el-table-column
            prop="load_time"
            label="操作">
            <template slot-scope="{ row }">
              <router-link to="/" class="link" @click="handleCancel(row)">查看报告</router-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'report-component',
  data () {
    return {
      testType: [
        {
          id: 1,
          name: '智能选学校',
          value: 1
        },
        {
          id: 2,
          name: '录取风险评估',
          value: 2
        },
        {
          id: 3,
          name: '职业性格测试',
          value: 3
        },
        {
          id: 4,
          name: '同为此考生去向',
          value: 4
        }
      ],
      filters: {
        type: '0'
      },
      tableData: [
        {
          id: 1,
          name: '智能选学校',
          create_time: '202-01-01 14:23:23'
        },
        {
          id: 2,
          name: '同位次考生去向',
          create_time: '202-01-01 14:23:23'
        },
        {
          id: 3,
          name: '录取风向评估',
          create_time: '202-01-01 14:23:23'
        },
        {
          id: 4,
          name: '升学途径分析报告',
          create_time: '202-01-01 14:23:23'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.reportcontent
  padding 6px 20px 20px 40px
  .tablebox
    font-size 12px
    .link
      color #6236FF
.screenbox
  padding 20px 0
  justify-content flex-start
  align-items center
  font-size 12px
  color rgba(0, 0, 0, .85)
  .screenitem
    justify-content flex-start
    align-items center
    .screenlabel
      margin-right 20px
      width 80px
      text-align left

</style>