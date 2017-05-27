import Vue from 'vue'
import VueScroller from 'vue-scroller'
import App from './App'
import router from './router'

import './themes'

Vue.use(VueScroller)

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})

export { app }
