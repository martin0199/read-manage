import RouterTransition from '@/components/transition'
import { markRaw, h } from 'vue'
export default {
  path: '/book',
  name: 'book',
  redirect: '/book/design',
  component: () => h(markRaw(RouterTransition), { notNeedKey: true }),
  meta: {
    title: '小说模块',
    icon: 'el-icon-reading',
    keepAlive: 1,
    sort: 5,
    parentId: -1,
    index: '2'
  },
  children: [
    {
      path: '/book/design',
      name: 'bookDesign',
      meta: {
        title: '参数设置',
        icon: 'el-icon-tickets',
        keepAlive: 1,
        sort: 6,
        parentId: 1,
        index: '2-1'
      },
      component: () => import('@/views/book/design.vue')
    },
    {
      path: '/book/info',
      name: 'bookInfo',
      meta: {
        title: '小说连载',
        icon: 'el-icon-tickets',
        keepAlive: 1,
        sort: 7,
        parentId: 1,
        index: '2-2'
      },
      component: () => import('@/views/book/info.vue')
    },
    {
      path: '/book/collect',
      name: 'bookCollect',
      meta: {
        title: '小说采集',
        icon: 'el-icon-document-checked',
        keepAlive: 1,
        sort: 8,
        parentId: 1,
        index: '2-3'
      },
      component: () => import('@/views/book/collect.vue')
    }
  ]
}
