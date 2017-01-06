import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home'
import Dashboard from './Dashboard'
import Record from './Record'
import RecordDisplay from './Record/display'
import RecordMusic from './Record/music'
import RecordEdit from './Record/edit'
import List from './List'
import Settings from './Settings'

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
      name: 'RecordDisplay',
      path: '/record/:version',
      component: RecordDisplay
    },
    {
      name: 'RecordMusic',
      path: '/record/:version/edit',
      component: RecordMusic
    },
    {
      name: 'RecordEdit',
      path: '/record/:version/edit/:id',
      component: RecordEdit
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
