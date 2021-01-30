import { App } from 'vue'
import permission from '@/until/dirctives'
export function setupDirectives (app: App) {
  app.directive('permission', permission)
}
