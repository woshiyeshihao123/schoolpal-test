import Vue from 'vue'
import Router from 'vue-router'
import Xbindex from '@/views/xb-index'
import Allcourses from '@/views/all-courses'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Xbindex',
      component: Xbindex
    },
    {
      path: '/allcourses',
      name: 'Allcourses',
      component: Allcourses
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
