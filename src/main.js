import createApp from './create-main'
import bus from '@/utils/bus'
// import toast from './utils/toast'

const { router, app } = createApp()

let hasLogin = false
bus.$on('auth', () => {
  if (!hasLogin) {
    // toast.showMsg('请先登录', 'w')
    router.replace('/web')
    hasLogin = true
  }
})

router.onReady(() => {
  app.$mount('#app')
})

export default app
