// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    mode: 'history',
    base: '/',
    routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(t, f, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    },
    fallback: true
  })
}
