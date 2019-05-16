import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

import demolist from '@/components/demos/demolist'
import weixinOnline from '@/components/demos/weixinOnline'
import hammerDemo from '@/components/demos/hammerDemo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/demolist',
      name: 'demolist',
      component: demolist
    },
    {
      path: '/demo/weixinOnline',
      name: 'weixinOnline',
      component: weixinOnline
    },
    {
      path: '/demo/hammerDemo',
      name: 'hammerDemo',
      component: hammerDemo
    }
  ]
})
