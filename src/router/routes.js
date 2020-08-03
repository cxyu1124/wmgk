import Home from '../views/Home'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => {
      import(/* webpackChunkName: 'login-view' */ '../views/Login/index.vue')
    }
  },
  {
    path: '/web',
    name: 'web',
    component: () => {
      import(/* webpackChunkName: 'web' */ '../views/Web/index.vue')
    }
  },
  {
    path: '',
    meta: {
      title: '完美高考 - 专属高中生的平台'
    },
    redirect: '/home',
    component: () => import(/* webpackChunkName: 'main-view'  */ '../views/Main.vue'),
    children: [
      {
        path: '/home',
        meta: {
          title: '完美高考 - 完美高考'
        },
        component: Home
      },
      {
        path: '/ucenter/:type',
        meta: {
          title: '完美高考 - 完美高考'
        },
        component: () => import(/* webpackChunkName: 'ucenter-view'  */ '../views/Ucenter'),
      },
      {
        path: '/learn/knowledge',
        meta: {
          title: '完美高考 - 完美高考'
        },
        component: () => import(/* webpackChunkName: 'knowledge-view'  */ '../views/Learn/Knowledge'),
      },
      {
        path: '/learn/test',
        meta: {
          title: '完美高考 - 完美高考'
        },
        component: () => import(/* webpackChunkName: 'test-view'  */ '../views/Learn/Test'),
      },
      {
        path: '/learn/video',
        meta: {
          title: '完美高考 - 完美高考'
        },
        component: () => import(/* webpackChunkName: 'video-view'  */ '../views/Learn/Video'),
      }
    ]
  }
]