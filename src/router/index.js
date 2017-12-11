import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/account/login/Login'

import ProductList from '../views/home/productList/ProductList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, 
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    }
  ],
  mode: 'history'
})
