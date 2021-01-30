import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from './store'
import { setupElement } from '@/plugins/element'
import { setupMethods } from '@/plugins/GlobalMothends'
import { setupDirectives } from '@/plugins/directives'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/style/reset.css'
export const app = createApp(App)
setupRouter(app)
setupStore(app)
setupElement(app)
//注册全局指令
setupDirectives(app)
//注册全局方法
setupMethods(app)
router.isReady().then(() => { app.mount('#app') })
