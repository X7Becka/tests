import {createApp, h} from 'vue'
import App from '@/main-layout.vue'
import router from '@/router'
import store from '@/store'

createApp({render: () => h(App)})
  .use(store)
  .use(router)
  .mount('#app')
