import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { routerProtect } from '@/router/protect'
import { App } from 'vue'
const module: any = []
const file = require.context('./module', true, /\.ts/)
file.keys().forEach((key) => {
  module.push(file(key).default || file(key))
})
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'A',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '系统管理',
      sort: 1
    },
    children: [
      ...module
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      icon: 'el-icon-coordinate'
    },
    component: () => import('@/views/share/login.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function setupRouter (app: App) {
  app.use(router)
  routerProtect(router)
}
export default router
