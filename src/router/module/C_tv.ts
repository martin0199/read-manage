import RouterTransition from '@/components/transition'
import { markRaw, h } from 'vue'
export default {
  path: '/tv',
  name: 'tv',
  redirect: '/tv/info',
  component: () => h(markRaw(RouterTransition), { notNeedKey: true }),
  meta: {
    title: '视频模块',
    icon: 'el-icon-monitor',
    keepAlive: 1,
    sort: 8,
    parentId: -1,
    index: '3'
  },
  children: [
    {
      path: '/tv/info',
      name: 'tvInfo',
      meta: {
        title: '视频管理',
        icon: 'el-icon-video-play',
        keepAlive: 1,
        sort: 9,
        parentId: 1,
        index: '3-1'
      },
      component: () => import('@/views/tv/info.vue')
    },
    {
      path: '/tv/collect',
      name: 'tvCollect',
      meta: {
        title: '视频采集',
        icon: 'el-icon-film',
        keepAlive: 1,
        sort: 10,
        parentId: 1,
        index: '3-2'
      },
      component: () => import('@/views/tv/collect.vue')
    }
  ]
}
