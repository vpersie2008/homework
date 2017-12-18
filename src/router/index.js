import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/account/login/Login'
import Register from '../views/account/register/Register'
import ProductList from '../views/home/productList/ProductList'
import Goods from '../views/home/goods/Goods'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    }, 
    {
      path: '/login',
      name: 'login',
      component: Login
    }, 
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/',
      name: 'goods',
      component: Goods
    }
  ],
  mode: 'history'
})
