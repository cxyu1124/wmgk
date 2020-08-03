import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import createRouter from './router'
import createStore from './store/index'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'
import elementUI from 'element-ui'
import VueWechatTitle from 'vue-wechat-title'

import './styles/index.styl'

import Paginate from '@/components/Paginate'


Vue.use(Vuex)
  .use(Vuex)
  .use(VueRouter)
  .use(elementUI)
  .use(VueWechatTitle)
  .use(Paginate)

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    data: {
      keywords: '完美高考',
      description: '完美高考',
      title: "完美高考",
      viewId: 1,
      baseUrl: 'https://wanmei-static.oss-cn-beijing.aliyuncs.com'
    },
    store,
    router,
    render: h => h(App)
  })

  return { app, router, store }
}