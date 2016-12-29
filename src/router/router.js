
const index = resolve => require(['../components/index.vue'], resolve)

const routes = [
  {
    path: '/index',
    component: index
  },
  {
    path: '/rank',
    component: index
  },
  {
    path: '/ringtone',
    component: index
  },
  {
    path:'*', redirect:'/index'
  }]

export default routes
