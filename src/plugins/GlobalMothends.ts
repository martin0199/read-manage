import { App } from 'vue'
import hasPromission from '@/until/permission'
export function setupMethods (app: App) {
  app.provide('hasPermission', hasPromission)
}
