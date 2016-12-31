import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home'
import Dashboard from './Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: Dashboard
    }
  ]
})
