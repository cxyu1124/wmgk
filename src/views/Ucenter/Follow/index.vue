<template>
  <div class="followpage">
    <div class="centertitle flex-wrapper">
      <div
        class="titleitem"
        :class="activeId === item.id ? 'active' : ''"
        v-for="item in titleList"
        :key="item.id"
        @click="tabsChange(item)">{{item.name}}<span v-if="activeId === item.id"></span></div>
    </div>
    <div class="followcontent">
      <div v-if="activeId === 1">
        <div v-if="college && college.length">
          <div class="collegeitem" v-for="item in college" :key="item.id">
            <div class="college flex-wrapper">
              <div class="flex-wrapper">
                <div class="logo"><img :src="item.logo" ></div>
                <div class="collegeinform flex-wrapper">
                  <p class="name">{{item.name}}</p>
                  <div class="inform flex-wrapper">
                    <p>所在地：{{item.add}}</p>
                    <p>类别：{{item.type}}</p>
                  </div>
                  <div class="tips flex-wrapper">
                    <p>重点学科：{{item.point}}</p>
                    <div class="flex-wrapper">
                      <span></span>
                      <div>硕士点数：{{item.mastor}}</div>
                    </div>
                    <div class="flex-wrapper">
                      <span></span>
                      <div>博士点数：{{item.doctor}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btnbox flex-wrapper">
                <div class="btn btn1">测录取风险</div>
                <div class="btn">取消关注</div>
              </div>
            </div>
          </div>
        </div>
        <div class="nodata flex-wrapper" v-else>
          <p>还没有关注的大学，</p>
          <router-link class="link" to="/">点我立即去找喜欢的大学</router-link>
        </div>
      </div>
      <div class="majorbox" v-if="activeId === 2">
        <div v-if="major && major.length">
          <div class="majoritem flex-wrapper" v-for="item in major" :key="item.id">
            <div class="major">
              <p class="name">{{item.name}}</p>
              <div class="tips flex-wrapper">
                <p>专业代码：{{item.code}}</p>
                <div class="flex-wrapper"><span></span>修学年限：{{item.during}}</div>
                <div class="flex-wrapper"><span></span>授予学位：{{item.site}}</div>
              </div>
            </div>
            <div class="btn">取消关注</div>
          </div>
        </div>
        <div class="nodata flex-wrapper" v-else>
          <p>还没有关注的专业，</p>
          <router-link class="link" to="/">点我立即去找喜欢的专业</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'follow-component',
  data () {
    return {
      titleList: [
        {
          id: 1,
          name: '关注院校'
        },
        {
          id: 2,
          name: '关注专业'
        }
      ],
      activeId: 1,
      college: [
        {
          id: 1,
          name: '北京大学',
          logo: '',
          add: '北京',
          type:'综合类',
          point: '123',
          mastor: '13',
          doctor: '333'
        },
        {
          id: 2,
          name: '北京大学',
          logo: '',
          add: '北京',
          type:'综合类',
          point: '123',
          mastor: '13',
          doctor: '333'
        },
        {
          id: 3,
          name: '北京大学',
          logo: '',
          add: '北京',
          type:'综合类',
          point: '123',
          mastor: '13',
          doctor: '333'
        },
        {
          id: 4,
          name: '北京大学',
          logo: '',
          add: '北京',
          type:'综合类',
          point: '123',
          mastor: '13',
          doctor: '333'
        }
      ],
      major: [
        {
          id: 1,
          name: '计算机系',
          code: '0809777',
          during: '4',
          site: '工学学士'
        },
        {
          id: 2,
          name: '计算机系2',
          code: '0809777',
          during: '4',
          site: '工学学士'
        },
        {
          id: 3,
          name: '计算机系3',
          code: '0809777',
          during: '4',
          site: '工学学士'
        },
        {
          id: 4,
          name: '计算机系4',
          code: '0809777',
          during: '4',
          site: '工学学士'
        },
        {
          id: 5,
          name: '计算机系5',
          code: '0809777',
          during: '4',
          site: '工学学士'
        },
        {
          id: 6,
          name: '计算机系6',
          code: '0809777',
          during: '4',
          site: '工学学士'
        }
      ]
    }
  },
  methods: {
    tabsChange (item) {
      let id = item.id
      this.activeId = id
    }
  }
}
</script>
<style lang="stylus" scoped>
.centertitle
  padding-left 0
.followcontent
  padding-bottom 50px
  width 100%
  text-align left
  position relative
  .majoritem
    padding 18px 47px 18px 24px
    justify-content space-between
    align-items center
    border-bottom 1px solid #D8D8D8
    position relative
    .name
      margin 0 0
      margin-bottom 6px
      font-size 14px
      color #000
      libne-height 20px
    .tips
      justify-content space-between
      align-items center
      font-size 12px
      height 17px
      color rgba(0, 0, 0, 0.5)
      p
        margin 0 0
        margin-right 20px
      .flex-wrapper
        margin-right 20px
        align-items center
        span
          display block
          margin-right 5px
          width 0
          height 12px
          border-left 1px solid rgba(0, 0, 0, 0.5)

    .btn
      width 80px
      height 36px
      line-height 36px
      font-size 12px
      color #8065DE
      text-align center
      border 1px solid #8065DE
      border-radius 4px
      cursor pointer
  .collegeitem
    padding 12px 47px 12px 30px
    justify-content space-between
    align-items center
    border-bottom 1px solid #D8D8D8
    font-size 12px
    position relative
    .college
      justify-content space-between
      align-items center
      .logo
        margin-right 44px
        width 96px
        height 96px
        border-radius 50%
        overflow hidden
        background #D8D8D8
        position relative
        img
          display block
          width 100%
          height 100%
      .collegeinform
        flex-direction column
        justify-content center
        font-size 12px
        color rgba(0, 0, 0, 0.5)
        p
          margin 0 0
        .name
          font-size 14px
          color #000
          line-height 20px
        .inform
          margin-top 6px
          line-height 17px
          p
            margin-right 50px
        .tips
          margin-top 6px
          p
            margin-right 20px
            position relative
          .flex-wrapper
            margin-right 20px
            align-items center
            span
              display block
              margin-right 5px
              width 0
              height 12px
              border-left 1px solid rgba(0, 0, 0, 0.5)
      .btnbox
        flex-direction column
        justify-content center
        .btn
          margin 5px 0
          width 80px
          height 36px
          line-height 36px
          text-align center
          font-size 12px
          color #8065DE
          border 1px solid #8065DE
          border-radius 4px
          &.btn1
            color #ffffff
            background #8065DE



      
    
</style>