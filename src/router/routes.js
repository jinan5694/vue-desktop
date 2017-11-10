/**
 * 异步组件定义
 */

const routes = []

routes.push({
  path: '/error',
  component: getAsyncComp('ErrorComp')
})

routes.push({
  path: '/loading',
  component: getAsyncComp('LoadingComp')
})

function getAsyncComp (path) {
  return () => import('@/page/' + path + '.vue')
}

export default routes
