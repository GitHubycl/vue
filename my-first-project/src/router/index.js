import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Newslist from '@/components/Newslist'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
      {
        path: '/',
        name: 'Newslist',
        component: Newslist
      }
  ]
})
