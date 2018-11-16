import Vue from 'vue'
import VueRouter from 'vue-router'

import Admin from './pages/Admin'
import Welcome from './components/Welcome'
import Login from './pages/Login'

Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: 'welcome',
          component: Welcome
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
