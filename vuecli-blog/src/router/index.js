import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogsJS from '@/components/blogs/js'
import BlogsES6 from '@/components/blogs/es6'
import BlogsVue from '@/components/blogs/vue'
import BlogsWebpack from '@/components/blogs/webpack'
import BlogsNPM from '@/components/blogs/npm'
import BlogsService from '@/components/blogs/service'
import BlogsOthers from '@/components/blogs/others'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blogs/js',
      name: 'BlogsJS',
      component: BlogsJS
    },
    {
      path: '/blogs/es6',
      name: 'BlogsES6',
      component: BlogsES6
    },
    {
      path: '/blogs/vue',
      name: 'BlogsVue',
      component: BlogsVue
    },
    {
      path: '/blogs/webpack',
      name: 'BlogsWebpack',
      component: BlogsWebpack
    },
    {
      path: '/blogs/npm',
      name: 'BlogsNPM',
      component: BlogsNPM
    },
    {
      path: '/blogs/service',
      name: 'BlogsService',
      component: BlogsService
    },
    {
      path: '/blogs/others',
      name: 'BlogsOthers',
      component: BlogsOthers
    }
  ]
})
