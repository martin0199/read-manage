import { app } from '@/main'
export function evenBus (val: Function) {
  app.config.globalProperties.$val = val
}
export default app
