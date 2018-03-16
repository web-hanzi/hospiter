import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main.vue'
import OrderList from '../components/OrderList.vue'
import OrderInfo from '../components/OrderInfo.vue'
import Register from '../components/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Main'
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/OrderList',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/OrderInfo',
      name: 'OrderInfo',
      component: OrderInfo
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
