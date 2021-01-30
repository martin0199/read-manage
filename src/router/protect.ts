import { getStorage } from '@/until/localStorage'
import { ACCESS_TOKEN } from '@/until/define'
import 'nprogress/nprogress.css'
import Nprocess from 'nprogress'
import { Router, isNavigationFailure } from 'vue-router'
const allowRouter = ['login']
Nprocess.start()
const hasPermission = (token: string) => {
  const groupid = Number(token.split('_')[0])
  switch (groupid) {
    case 0 :
      return false
      break
    case 1 :
      return true
      break
    default :
      return false
  }
}
export function routerProtect (router: Router) {
  router.beforeEach((to, from, next) => {
    const token = getStorage(ACCESS_TOKEN)
    const HasAllowRouter = allowRouter.includes(to.name as string)
    if (token) {
      next()
    } else {
      HasAllowRouter ? next() : next({ path: '/login', query: { redirect: from.fullPath }, replace: true })
    }
    Nprocess.done()
  })
  router.afterEach(failure => {
    isNavigationFailure(failure) && console.log(failure)
    Nprocess.done()
  })
  router.onError(error => { console.log(error, '路由错误') })
}
