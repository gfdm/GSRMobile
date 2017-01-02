import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home'
import Dashboard from './Dashboard'
import Record from './Record'
import List from './List'
import Settings from './Settings'

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
    },
    {
      name: 'Record',
      path: '/record',
      component: Record
    },
    {
      name: 'List',
      path: '/list',
      component: List
    },
    {
      name: 'Settings',
      path: '/settings',
      component: Settings
    }
  ]
})
