import RouterTransition from '@/components/transition'
import { markRaw, h } from 'vue'
export default {
  path: '/home',
  name: 'home',
  redirect: '/home/welcome',
  component: () => h(markRaw(RouterTransition), { notNeedKey: true }),
  meta: {
    title: '后台界面',
    icon: 'el-icon-data-board',
    keepAlive: 1,
    sort: 2,
    parentId: -1,
    index: '1'
  },
  children: [
    {
      path: '/home/welcome',
      name: 'homeWelcome',
      meta: {
        title: '首页',
        icon: 'el-icon-house',
        keepAlive: 1,
        sort: 3,
        parentId: 1,
        index: '1-1'
      },
      component: () => import('@/views/welcome.vue')
    },
    {
      path: '/home/message',
      name: 'homeMessage',
      meta: {
        title: '信息',
        icon: 'el-icon-message',
        keepAlive: 1,
        sort: 4,
        parentId: 1,
        index: '1-2'
      },
      component: () => import('@/views/message.vue')
    }
  ]
}
