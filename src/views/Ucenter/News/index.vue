<template>
  <div class="newspage">
    <div class="centertitle">我的消息</div>
    <div class="newscontent">
      <div class="newsbox" v-if="newsList && newsList.length">
        <div class="newsitem" v-for="item in newsList" :key="item.id">
          <p class="time">{{item.create_time}}</p>
          <div class="font">{{item.content}}</div>
        </div>
      </div>
      <div class="nodata" v-else>暂无消息</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-component',
  data () {
    return {
      newsList: [
        {
          id: 1,
          create_time: '2020-02-1916:23',
          content: '我是一条消息我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息'
        },
        {
          id: 2,
          create_time: '2020-02-1916:23',
          content: '我是一条消息我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息'
        },
        {
          id: 3,
          create_time: '2020-02-1916:23',
          content: '我是一条消息我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息'
        },
        {
          id: 4,
          crea4e_time: '2020-02-1916:23',
          content: '我是一条消息我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息'
        },
        {
          id: 5,
          create_time: '2020-02-1916:23',
          content: '我是一条消息我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息，我是一条消息我是一条消息我是一条消息'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.newscontent
  padding 30px 210px 30px 40px
  position relative
  .newsitem
    padding 4px 13px 10px
    font-size 12px
    line-height 17px
    color rgba(0, 0, 0, .85)
    border-bottom 1px solid #ebeef5
    position relative
    .time
      margin 0 0
      color rgba(0, 0, 0, .5)
</style>