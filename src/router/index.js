import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Abc from '@/components/abc'
import Rert from '@/components/rert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/abc',
          component: Abc
        },
        {
          path: '/rert',
          component: Rert
        }
      ]
    }
  ]
})
