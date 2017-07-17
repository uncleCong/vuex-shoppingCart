import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import cart from '@/views/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
