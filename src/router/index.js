import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/account/login/Login'
import IndexHome from '../views/IndexHome'
import ProductList from '../views/home/productList/ProductList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/IndexHome',
      name: 'IndexHome',
      component: IndexHome
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
      name: 'ProductList',
      component: ProductList
    }
  ],
  mode: 'history'
})
