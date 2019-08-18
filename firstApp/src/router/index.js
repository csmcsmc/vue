import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/A'
import Login from '@/components/Login'
import Personal from '@/components/Personal'
import Product from '@/components/Product'
import collection from '@/components/collection'
import Ads from '@/components/Ads'
import Order from '@/components/Order'
import Buycar from '@/components/Buycar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/A',
      name: 'A',
      component: A,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/Personal',
      name: 'Personal',
      component: Personal,
    },

    {
      path: '/Product',
      name: 'Product',
      component: Product,
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection,
    },
    {
      path: '/Ads',
      name: 'Ads',
      component: Ads,
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/Buycar',
      name: 'Buycar',
      component: Buycar,
    },

  ]

})
