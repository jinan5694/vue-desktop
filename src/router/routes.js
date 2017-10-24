/**
 * 异步组件定义
 */
const routes = []

routes.push({
  label: 'index',
  name: 'index',
  path: '/index',
  component: getComponent('Index')
})

routes.push({
  label: 'login',
  name: 'login',
  path: '/login',
  component: getComponent('Login')
})

function getComponent (path) {
  return () => import('../page/' + path + '.vue')
}
