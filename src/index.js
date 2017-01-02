import Vue from 'vue'
import App from './App'
import router from './router'

import './themes'

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})

export { app }
