import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import analisis from '@/components/analisis'
import testMysql from '@/components/testMysql'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'analisis',
      component: analisis
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testMysql',
      name: 'testMysql',
      component: testMysql
    }
  ]
})
