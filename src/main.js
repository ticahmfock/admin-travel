import { createApp } from 'vue'
import App from './App.vue'
//状态存储
import store from './store'
//路由
import router from './router'
createApp(App).use(router).use(store).mount('#app')
