<template>
  <div class="coursepage">
    <div class="centertitle">课程学习</div>
    <div class="coursecontent">
      <div class="centerheader flex-wrapper">
        <div class="font">观看历史：</div>
        <router-link to="/" class="btn">更多课程</router-link>
      </div>
      <div class="coursewrapper flex-wrapper">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'course-component',
  data () {
    return {
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
  }
}
</script>
<style lang="stylus" scoped>
.coursecontent
  padding 0 65px 0 35px
  background #ffffff
  box-sizing border-box
  position relative
  .coursewrapper
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