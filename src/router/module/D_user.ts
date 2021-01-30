import RouterTransition from '@/components/transition'
import { markRaw, h } from 'vue'
export default {
  path: '/uer',
  name: 'user',
  redirect: '/user/info',
  component: () => h(markRaw(RouterTransition), { notNeedKey: true }),
  meta: {
    title: '用户管理',
    icon: 'el-icon-user',
    keepAlive: 1,
    sort: 11,
    parentId: -1,
    index: '4'
  },
  children: [
    {
      path: '/user/info',
      name: 'userInfo',
      meta: {
        title: '用户详情',
        icon: 'el-icon-files',
        keepAlive: 1,
        sort: 12,
        parentId: 1,
        index: '4-1'
      },
      component: () => import('@/views/user/info.vue')
    }
  ]
}
