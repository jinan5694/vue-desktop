import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/page/Login'
import Index from '@/page/Index'
import NotFound from '@/page/NotFound'

import routes from '@/router/routes'

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { ignoreAuth: true },
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    ...routes,
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to.path)
  if (to.matched.some(record => record.meta.ignoreAuth)) {
    // 不需要权限验证，直接可以访问。
    next()
  } else {
    // this route requires auth, check if logged in
    if (sessionStorage.token) {
      next()
    } else {
      next('/login') // 确保一定要调用 next()
    }
  }
})

router.afterEach(route => {
  if (route.meta.ignoreAuth) {
    sessionStorage.path = route.path
  }
})

export default router
