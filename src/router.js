import Vue from 'vue'
import Router from 'vue-router'
import Xbindex from '@/views/xb-index'
const Allcourses = () => import('@/views/all-courses')
const Login = () => import('@/views/login')
const Membercenter = () => import('@/views/member-center')

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
    },
    {
      path: '/member-center',
      name: 'Membercenter',
      component: Membercenter
    }
  ]
})
