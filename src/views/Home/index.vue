<template>
  <div class="homepage">
    <div class="swiperbox">
      <el-carousel trigger="click" height="400px">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item.img">
        </el-carousel-item>
      </el-carousel>
      <div class="content">
        <div class="loginbox">
          <div class="titlebox flex-wrapper">
            <div class="logintitle">手机号登录<span></span></div>
          </div>
          <div class="loginfrom">
            <el-form ref="form" :model="login" label-width="0">
              <el-form-item class="fromlabel">
                <el-input v-model="login.phone" placeholder="请输入手机号" ></el-input>
                <span class="iconbox">
                  <i class="icon icon-phonenum"></i>
                </span>
              </el-form-item>
              <el-form-item class="fromlabel">
                <el-input v-model="login.psd" placeholder="请输入密码" show-password></el-input>
                <span class="iconbox">
                  <i class="icon icon-lock"></i>
                </span>
              </el-form-item>
              <div class="submitbtn">登录</div>
            </el-form>
            <div class="operabox flex-wrapper">
              <el-checkbox v-model="login.auto">下次自动登录</el-checkbox>
              <div class="loginlink flex-wrapper">
                <router-link class="link" to="/">忘记密码</router-link>
                <router-link class="link" to="/">注册</router-link>
              </div>
            </div>
          </div>
          <div class="loginother">
            <div class="font">用以下账号重新登录</div>
            <div class="login-way flex-wrapper">
              <i class="icon icon-loginqq"></i>
              <i class="icon icon-wechat"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bodybox">
      <div class="wrapper-one">
        <div class="titlebox flex-wrapper">
          <div class="title">
            完美高考提供
            <span class="bar"></span>
          </div>
        </div>
        <div class="content flex-wrapper">
          <div class="item flex-wrapper" v-for="(item, index) in supplyList" :key="index">
            <i class="iconbox icon icon-indexright"></i>
            <div class="font-wrapper">
              <div class="itemname">{{item.name}}</div>
              <div class="itemcontent">
                <p class="itemfont" v-for="(val, jdex) in item.content" :key="jdex">{{val}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-two">
        <div class="content flex-wrapper">
          <div class="item">
            <div class="titlebox flex-wrapper">
              <div class="title">
                学生个人专属
                <span class="bar"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-three">
        <div class="titlebox flex-wrapper">
          <div class="title">
            九大学科视频讲解
            <span class="bar"></span>
          </div>
        </div>
        <div class="content flex-wrapper">
          <div class="item" v-for="item in videoList" :key="item.id">
            <div class="itembg"><img :src="item.poster" alt=""></div>
            <div class="btn">观看课程视频</div>
          </div>
        </div>
      </div>
      <div class="wrapper-four">
        <div class="titlebox flex-wrapper">
          <div class="title">六大阶段考试<span class="bar"></span></div>
        </div>
        <div class="content">
          <div class="items flex-wrapper">
            <div class="item flex-wrapper" v-for="(val,index) in testList.slice(0, 2)" :key="val.id">
              <div class="iconbox"><i class="icon icon-paper" v-if="index == 0"></i></div>
              <div class="testbox">
                <div class="test-title flex-wrapper">
                  <div>{{index == 0 ? val.type : ''}}</div>
                  <router-link class="link" to="/">查看更多<i class="el-icon-arrow-right"></i></router-link>
                </div>
                <div class="testitem flex-wrapper" v-for="item in val.list" :key="item.id">
                  <div class="word">{{item.name}}</div>
                  <div class="time">{{item.time}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="items flex-wrapper">
            <div class="item flex-wrapper" v-for="val in testList.slice(2, 4)" :key="val.id">
              <div class="iconbox"><i class="icon icon-paper"></i></div>
              <div class="testbox">
                <div class="test-title flex-wrapper">
                  <div>{{val.type}}</div>
                  <router-link class="link" to="/">查看更多<i class="el-icon-arrow-right"></i></router-link>
                </div>
                <div class="testitem flex-wrapper" v-for="item in val.list" :key="item.id">
                  <div class="word">{{item.name}}</div>
                  <div class="time">{{item.time}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="items flex-wrapper">
            <div class="item flex-wrapper" v-for="val in testList.slice(4, 6)" :key="val.id">
              <div class="iconbox"><i class="icon icon-paper"></i></div>
              <div class="testbox">
                <div class="test-title flex-wrapper">
                  <div>{{val.type}}</div>
                  <router-link class="link" to="/">查看更多<i class="el-icon-arrow-right"></i></router-link>
                </div>
                <div class="testitem flex-wrapper" v-for="item in val.list" :key="item.id">
                  <div class="word">{{item.name}}</div>
                  <div class="time">{{item.time}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-five">
        <div class="titlebox flex-wrapper">
          <div class="title">我们的专家团队<span class="bar"></span></div>
        </div>
        <div class="content">
          内容
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-component',
  data () {
    return {
      login: {
        phone: '',
        psd: '',
        auto: false
      },
      bannerList: [
        {
          url: '',
          img: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-banner.png'
        },
        {
          url: '',
          img: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-banner.png'
        },
        {
          url: '',
          img: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-banner.png'
        }
      ],
      supplyList: [
        {
          name: '名师课堂',
          content: ['上万节名师高考精品课程，高一至高三全学科课程精讲，随堂课程精准辅助，难点、考点分析解读等你来看！']
        },
        {
          name: '名校题库',
          content: ['收录了2015-2019年全国各省市期中/期末考试题、高中联赛试题、模考试卷、高考真题一级强基计划小测真题，为广大师生朋友提供一个资源共享平台。']
        },
        {
          name: '自我认知',
          content: ['要想了解自己，最好问问别人；', '想要深入了解自己，那你可以问问我们。']
        },
        {
          name: '新高考选科',
          content: ['“3+1+2”的选科模式，一共有12种选科组合；“3+3”选科模式，一共有20种选科组合；浙江“7选3”模式，一共有35种选科组合。该如何选择？']
        },
        {
          name: '升学路径',
          content: ['千军万马独木桥已是过去式，20余种升学路径让你选择，一套多元录取、立交桥式的人才选拔通道已经开启，等你来探索！']
        },
        {
          name: '志愿填报',
          content: ['选科只是开始，高考结束后近百个志愿选择还在等你填写，你准备好了吗？完美高考已准备好！']
        }
      ],
      videoList: [
        {
          id: 1,
          name: 'chinese',
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-chinese.png'
        },
        {
          id: 2,
          name: 'maths',
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-maths.png'
        },
        {
          id: 3,
          name: 'english',
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-english.png'
        },
        {
          id: 4,
          name: 'chemistry',
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-chemistry.png'
        },
        {
          id: 5,
          name: 'physics',
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-physics.png'
        },
        {
          id: 6,
          name: 'bios',
          poster: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-bios.png'
        }
      ],
      testList: [
        {
          id: 1,
          type: '期中考试1',
          list: [
            {
              id: 11,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 12,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 13,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            }
          ]
        },
        {
          id: 2,
          type: '期中考试2',
          list: [
            {
              id: 11,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 12,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 13,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            }
          ]
        },
        {
          id: 3,
          type: '期中考试3',
          list: [
            {
              id: 11,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 12,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 13,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            }
          ]
        },
        {
          id: 4,
          type: '期中考试4',
          list: [
            {
              id: 11,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 12,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 13,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            }
          ]
        },
        {
          id: 5,
          type: '期中考试5',
          list: [
            {
              id: 11,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 12,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 13,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            }
          ]
        },
        {
          id: 6,
          type: '期中考试6',
          list: [
            {
              id: 11,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 12,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            },
            {
              id: 13,
              name: '江苏省东海县第二中2019-2020学年高10月月考物理2020学年高10月月考物理',
              time: '01-23'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.homepage
  font-size 20px
  background #ffffff
  position relative
.swiperbox
  width 100%
  height 400px
  background red
  position relative
  .content
    position absolute
    top 0
    left 50%
    margin-left -600px
    width 1200px
    height 400px
    z-index 8
    .loginbox
      position absolute
      padding 16px 20px 12px
      top 14px
      right 0
      width 345px
      height 354px
      background #ffffff
      z-index 10
      box-shadow 0px 0px 16px 0px rgba(29,29,29,0.45)
      border-radius 6px
      box-sizing border-box
      .titlebox
        width 100%
        height 42px
        justify-content flex-start
        align-items center
        font-size 14px
        border-bottom 2px solid rgba(187, 128, 178, 0.2)
      .logintitle
        width 102px
        color #955299
        font-weight bold
        line-height 42px
        position relative
        span 
          display block
          position absolute
          bottom -1px
          left 0
          width 102px
          height 2px
          background #BB80B2
          border-radius 2px
      .loginfrom
        padding-top 3px
        width 100%
        position relative
        .fromlabel
          margin-top 12px
          position relative
          .el-input--prefix
            .el-input__inner
              padding-left 42px !import
          .iconbox
            position absolute
            left 0
            top 0
            width 42px
            height 40px
            padding 10px 13.5px
            .icon
              display block
        .submitbtn
          margin-top 18px
          width 100%
          height 36px
          line-height 36px
          font-size 14px
          color #A4A6A3
          text-align center
          background #E3E3E3
          border-radius 2px
        .operabox
          margin-top 12px
          width 100%
          justify-content space-between
          align-items center
          .loginlink
            font-size 12px
            color #955299
            .link
              margin-left 20px
      .loginother
        margin-top 30px
        .font
          font-size 12px
          color #9AAD60
          text-align center
        .login-way
          margin-top 14px
          justify-content center
          align-items center
          .icon
            display block
            margin 0 21px
.bodybox
  padding-bottom 96px
  width 100%
  background -webkit-linear-gradient(#ffffff, #DEDEEC)
  background -o-linear-gradient(#ffffff, #DEDEEC);
  background -moz-linear-gradient(#ffffff, #DEDEEC)
  background linear-gradient(#ffffff, #DEDEEC)
  position relative
.wrapper-one
  padding 30px 0 0
  margin 0 auto
  width 1200px
  box-sizing border-box
  position relative
  .content
    margin-top 25px
    justify-content flex-start
    width 100%
    flex-wrap wrap
    .item
      padding 0 40px
      justify-content center
      align-items center
      width 400px
      height 152px
      box-sizing border-box
      flex-shrink 0
      &:hover
        box-shadow: 0 0 10px 0 #B4B0C1;
        border-radius: 10px;
      .iconbox
        display block
        margin-right 22px
        width 44px
        height 44px
      .font-wrapper
        width 250px
        height 122px
        font-size 12px
        text-align left
        color #686868
        line-height 17px
        .itemname
          margin-top 28px
          font-size 24px
          color #4A4A4A 
          line-height 28px
        .itemcontent
          margin-top 6px
          p
            margin 0 auto
.wrapper-two
  padding 87px 0 20px
  margin 0 auto
  width 1200px
  box-sizing border-box
  position relative
  .content
    justify-content flex-end
    width 100%
    height 270px
    background url(https://wanmei-static.oss-cn-beijing.aliyuncs.com/web/images/index-bg.png) center center norepeat
    background-size 100% 100%
    .item
      width 690px
      height 271px
      position relative
.wrapper-three
  margin 0 auto
  padding-top 30px
  width 1200px
  position relative
  .titlebox
    .title
      border 0
  .content
    padding 37px 44px 0
    justify-content space-between
    flex-wrap wrap
    width 1200px
    height 626px
    box-sizing border-box
    border 2px solid #E8E9EF
    position relative
    .item
      width 360px
      .itembg
        padding 10px 10px 20px
        width 360px
        height 200px
        box-sizing box-sizing
        background -webkit-linear-gradient(#E9E8E6, #D7D7E0)
        background -o-linear-gradient(#E9E8E6, #D7D7E0);
        background -moz-linear-gradient(#E9E8E6, #D7D7E0)
        background linear-gradient(#E9E8E6, #D7D7E0)
        box-shadow 0px 3px 9px 0px rgba(127,134,212,0.3)
        border-radius 10px
      .btn
        margin 0 auto
        margin-top 20px
        width 140px
        height 32px
        line-height 32px
        font-size 14px
        color #ffffff
        text-align center
        border-radius 32px
        background #8081DD
        box-shadow 0px 5px 13px 0px rgba(0,2,173,0.24)
.wrapper-four
  margin 0 auto
  padding-top 23px
  width 1200px
  position relative
  .content
    margin-top 25px
    width 100%
    position relative
    .items
      margin-top 12px
      justify-content space-between
      align-items center
      width 100%
      height 152px
      border-radius 10px
      &:first-child
        margin-top 0
        background #ffffff
      .item
        width 594px
        height 152px
        justify-content space-between
        align-items center
        border-radius 10px
        background #ffffff
        font-size 12px
        color #666666
        .iconbox
          padding 0 35px 0 28px
          width 111px
          box-sizing border-box
        .testbox
          width 466px
          position relative
          .test-title
            padding-right 17px
            font-size 24px
            height 34px
            justify-content space-between
            align-items center
            color #333333
            .link
              display block
              font-size 14px
              color #7F75FF
          .testitem
            padding-right 17px
            justify-content space-between
            align-items center
            line-height 24px
.wrapper-five
  margin 0 auto
  padding-top 66px
  width 1200px
  position relative
  .titlebox
    .title
      border 0
  .content
    width 100%
    height 340px
    background #ffffff
    position relative




.titlebox
  width 100%
  justify-content center
  align-items center
  .title
    height 36px
    width 240px
    text-align center
    font-size 20px
    color #000000
    border-bottom 2px solid #E7E7E7
    box-sizing border-box
    position relative
    span
      display block
      position absolute
      bottom -3px
      left 70px
      width 100px
      height 4px
      background #8081DD
      border-radius 2px
      z-index 10

</style>