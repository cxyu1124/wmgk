<template>
  <el-container class="main-container">
    <el-header class="sidmenu_wrapper" style="padding: 0 0">
      <Header/>
    </el-header>
    <el-main style="padding: 0">
      <transition
        mode="out-in"
        name="dialog-fade"
      >
        <router-view />
      </transition>
    </el-main>
    <el-footer style="padding: 0 0"><Footer/></el-footer>
  </el-container>
</template>

<script>
import bus from '@/utils/bus'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default {
  name: 'main-component',
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.main-container
  padding 104px 0 0 0
  height 100%
  min-width 1200px
  background #ffffff

.sidmenu_wrapper
  position fixed
  top 0
  left 0
  padding 0 0 !import
  background #7F57D6
  min-width 100vw
  z-index 100

</style>
