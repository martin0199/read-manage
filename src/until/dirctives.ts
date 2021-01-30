import { ObjectDirective } from 'vue'
//import hasPermission from '@/until/permission'
const permission: ObjectDirective = {
  mounted (el: HTMLButtonElement, binding, vnode) {
    console.log(1)
  }
}
export default permission
