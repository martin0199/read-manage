import store from '@/store'
export const hasPermission = () => {
  switch (store.getters.loginGroupid) {
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
export default hasPermission
