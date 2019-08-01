import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import Lnterface from '@/Lnterface/Lnterface'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lnterface',
      component: Lnterface
    }, {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
