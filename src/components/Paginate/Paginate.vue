<template>
  <el-row
    class="paginate-wrapper"
    type="flex"
    align="middle"
    justify="center"
  >
    <el-pagination
      background
      :total="totalCount"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
      layout="total, prev, pager, next, jumper"
    ></el-pagination>
    <span
      class="desc page-set-wrapper"
      v-if="showPaginate"
    >
      <span>设置一页：</span>
      <el-input
        type="number"
        size="mini"
        class="desc-input"
        v-model="defPageSize"
        :disabled="isDisabled"
        @keydown.native.enter="handleSizeChange"
      ></el-input>
      <span>个</span>
    </span>
  </el-row>
</template>

<script>
export default {
  name: 'paginate-component',
  props: {
    page: {
      type: Number,
      default: 1
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    totalCount: {
      type: Number,
      default: 1
    },
    maxSize: {
      type: Number,
      default: 25
    },
    pageSize: {
      type: Number,
      default: 10
    },
    showPaginate: {
      type: Boolean,
      default: true
    },
    noForm: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage: 1,
      defPageSize: 10
    }
  },
  watch: {
    page: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.currentPage = val
          })
        }
      }
    },
    pageSize:{
      immediate: true,
      handler(val) {
        if (val) {
          this.defPageSize = val
        }
      }
    }
  },
  methods: {
    handleSizeChange(e) {
      const maxSize = this.maxSize
      let val = Number(e.target.value || 10)

      if (val > maxSize) {
        this.$toast.showMsg(`最大只能设置${maxSize}`, 'w')
        return false
      }
      this.$emit('update:page', 1)
      this.$emit('update:page-size', val)
      this.$emit('pageChange')
    },
    handleCurrentChange(v) {
      this.$emit('update:page', v)
      this.$emit('pageChange')
    }
  }
}
</script>

<style lang="stylus" scoped>
.paginate-wrapper
  padding-top 22px
  padding-bottom 22px

  .page-set-wrapper
    margin-left 15px

  .desc
    font-size 13px
    color #606266
    font-weight normal

  .desc-input
    width 50px
</style>
