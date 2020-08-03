<template>
  <div class="mycenterpage">
    <div class="headerbox flex-wrapper">
      <div class="user-avatar">
        <div class="avatarbox"><img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKFdHD1Wiaic1Yo5oWAicBGULib8k6Hkz9HOepD1ib2hB2tZ3qEUib50KjicShz6OtuzdHLfRw7fCbyKnM1w/132?1594550831"></div>
        <p>更改头像</p>
      </div>
      <div class="user-infrom">
        <el-form ref="form" :model="userInform" label-width="50px">
          <el-form-item label="昵称">
            <div class="flex-wrapper">
              <el-input v-model="userInform.name"></el-input>
              <div class="submitbtn">保存</div>
            </div>
          </el-form-item>
          <el-form-item label="ID">
            <div class="itemfont">{{userInform.user_id}}</div>
          </el-form-item>
          <el-form-item label="身份">
            <div class="itemfont">{{userInform.identity}}</div>
          </el-form-item>
          <el-form-item label="">
            <router-link to="/" class="bindcard flex-wrapper">
              <i class="icon icon-centerard"></i>
              <div>绑定系统卡</div>
            </router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="systembox">
      <div class="banner">
        <img src="https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/ucenterbanner.png">
      </div>
      <div class="problembox">
        <p class="title">常见问题</p>
        <div class="box">
          <div class="item flex-wrapper" v-for="item in problemList" :key="item.id">
            <div class="title">{{item.title}}</div>
            <router-link class="link" to="/">{{item.type}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycenter-component',
  data () {
    return {
      userInform: {
        name: '星',
        user_id: '18895240',
        identity: '高端定制VIP'
      },
      problemList: [
        {
          id: 1,
          title: '我是新高考学生，不知道如何选科。',
          type: '新高考选科'
        },
        {
          id: 2,
          title: '我是高一高二学生，我很迷茫。',
          type: '升学规则'
        },
        {
          id: 3,
          title: '我希望能快速提高学习成绩。',
          type: '升学规则'
        },
        {
          id: 4,
          title: '我不知道怎么选大学、专业以及填志愿。',
          type: '升学规则'
        },
        {
          id: 5,
          title: '我希望获得更专业、便捷的服务。',
          type: '升学规则'
        },
        {
          id: 6,
          title: '我希望了解更多高考方面的知识。',
          type: '升学规则'
        },
        {
          id: 7,
          title: '我要绑定VIP卡。',
          type: '升学规则'
        },
        {
          id: 8,
          title: '以上都没有我想要的。',
          type: '升学规则'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.headerbox
  padding 30px 30px
  width 100%
  justify-content flex-start
  background #ffffff
  box-sizing border-box
  position relative
  .user-avatar
    margin-right 40px
    .avatarbox
      width 80px
      height 80px
      border-radius 50%
      overflow hidden
      position relative
      img
        display block
        width 100%
        height 100%
    p
      margin 0 0
      margin-top 14px
      font-size 12px
      color #6236FF
      text-decoration underline
  .user-infrom
    position relative
    .flex-wrapper
      align-items center
      .submitbtn
        margin-left 14px
        width 80px
        height 30px
        line-height 30px
        font-size 12px
        color #ffffff
        text-align center
        background #8065DE
        border-radius 4px
    .itemfont
      text-align left
      font-size 12px
      color #000
      line-height 30px
    .bindcard
      width 140px
      height 36px
      justify-content  center
      font-size 12px
      text-align center
      border 1px solid #8065DE
      border-radius 4px
      .icon
        margin-right 8px
.systembox
  width 100%
  background #EFEFEF
  position relative
  .banner
    width 100%
    height 150px
    position relative
    img
      display block
      width 100%
      height 100%
  .problembox
    padding 0 80px 15px
    background #EFEFEF
    position relative
    .title
      margin 0 0
      font-size 12px
      line-height 21px
      color #000
      text-align left
    .box
      padding 0 18px
      margin-top 18px
      background #ffffff
      position relative
      .item
        height 36px
        justify-content space-between
        align-items center
        font-size 12px
        .title
          color #000
        .link
          color #6236FF
          text-decoration underline

    
</style>