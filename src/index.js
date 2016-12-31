import Vue from 'vue'
import App from './App'
import router from './router'

import './themes'

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')

export { app }
