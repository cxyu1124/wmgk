<template>
  <div class="accountpage">
    <div class="centertitle">我的账户</div>
    <div class="accountcontent">
      <div class="safe-wrapper">
        <div class="accounttitle">账户安全：</div>
        <div class="safebox">
          <div class="safeitem flex-wrapper">
            <div class="safename flex-wrapper">
              <div>登录密码</div>
              <span>（登录完美高考时需要输入的密码）</span>
            </div>
            <div class="safeopera">
              <span class="btn">修改密码</span>
            </div>
          </div>
          <div class="safeitem flex-wrapper">
            <div class="safename flex-wrapper">
              <div>绑定手机</div>
              <span>（18210619551）</span>
            </div>
            <div class="safeopera">
              <span class="btn">换绑手机</span>
            </div>
          </div>
          <div class="safeitem flex-wrapper">
            <div class="safename flex-wrapper">
              <span class="icon icon-wechat"></span>
              <div class="name">微信</div>
              <span>已绑定</span>
            </div>
            <div class="safeopera">
              <span class="btn">取消绑定</span>
            </div>
          </div>
          <div class="safeitem flex-wrapper">
            <div class="safename flex-wrapper">
              <span class="icon icon-loginqq"></span>
              <div class="name">QQ</div>
              <span>未绑定</span>
            </div>
            <div class="safeopera">
              <span class="btn">点击绑定</span>
            </div>
          </div>
        </div>
      </div>
      <div class="coupon-wrapper">
        <div class="couponbox">
          <div class="accounttitle">优惠券：</div>
          <div class="nodata">暂无可用优惠券</div>
        </div>
      </div>
      <div class="order-wrapper">
        <div class="orderbox">
          <div class="accounttitle">我的订单：</div>
          <div class="tablebox" v-if="tableData && tableData.length">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="order_code"
                label="订单号"
                width="200">
              </el-table-column>
              <el-table-column
                prop="type"
                label="订单类型"
                width="200">
              </el-table-column>
              <el-table-column
                prop="price"
                label="价格"
                width="140">
              </el-table-column>
              <el-table-column
                prop="status_text"
                label="状态"
                width="140">
              </el-table-column>
              <el-table-column
                prop="load_time"
                label="操作">
                <template slot-scope="{ row }">
                  <div class="flex-wrapper">
                    <router-link to="/" class="link" @click="handleCancel(row)">订单详情</router-link>
                    <router-link to="/" class="link" @click="handleCancel(row)">查看服务</router-link>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="nodata" v-else>暂无订单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'account-component',
  data () {
    return {
      tableData: [
        {
          id: 1,
          order_code: 'D9999999999',
          type: '【服务】志愿VIP卡',
          price: '298.00',
          status: 2,
          status_text: '已关闭'
        },
        {
          id: 2,
          order_code: 'D9999999999',
          type: '【服务】志愿VIP卡',
          price: '298.00',
          status: 2,
          status_text: '已关闭'
        },
        {
          id: 3,
          order_code: 'D9999999999',
          type: '【服务】志愿VIP卡',
          price: '298.00',
          status: 2,
          status_text: '已关闭'
        },
        {
          id: 4,
          order_code: 'D9999999999',
          type: '【服务】志愿VIP卡',
          price: '298.00',
          status: 2,
          status_text: '已关闭'
        },
        {
          id: 5,
          order_code: 'D9999999999',
          type: '【服务】志愿VIP卡',
          price: '298.00',
          status: 2,
          status_text: '已关闭'
        }
      ]
      
    }
  }
}
</script>
<style lang="stylus" scoped>
.accountcontent
  padding 30px 38px
  position relative
  .accounttitle
    font-size 12px
    color rgba(0, 0, 0, 0.5)
    line-height 17px
    text-align left
  .safe-wrapper
    .safebox
      margin-top 20px
      width 100%
      font-size 12px
      line-height 17px
      position relative
      .safeitem
        padding 7px 0
        align-items center
        color #000
        border-bottom 1px solid #EBEEF5
        .safename
          padding-left 13px
          width 614px
          align-items center
          span
          color rgba(0, 0, 0, .5)
          .icon
            display block
            margin-right 10px
          .name
            margin-right 10px
        .safeopera
          padding-left 13px
          .btn
            color #6236FF 
  .coupon-wrapper
    margin-top 50px
    .couponbox
      font-size 12px
  .order-wrapper
    margin-top 50px
    .tablebox
      margin-top 12px
      .link
        display block
        color #6236FF
        &:first-child
          margin-right 50px
.nodata
  margin-top 10px
  padding 17px 0
  font-size 12px
  color rgba(0, 0, 0, .5)
  border-bottom 1px solid #EBEEF5
</style>