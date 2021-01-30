import RouterTransition from '@/components/transition'
import { markRaw, h } from 'vue'
export default {
  path: '/limit',
  name: 'limit',
  redirect: '/limit/info',
  component: () => h(markRaw(RouterTransition), { notNeedKey: true }),
  meta: {
    title: '权限管理',
    icon: 'el-icon-coordinate',
    keepAlive: 1,
    sort: 13,
    parentId: -1,
    index: '5'
  },
  children: [
    {
      path: '/limit/info',
      name: 'limtInfo',
      meta: {
        title: '权限管理',
        icon: 'el-icon-view',
        keepAlive: 1,
        sort: 14,
        parentId: 1,
        index: '5-1'
      },
      component: () => import('@/views/limits/info.vue')
    }
  ]
}
