import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children:[
        {
          path:'/stars',
          name:"stars",
          component:require('@/components/demo/stars-in-the-sky.vue').default
        },
        {
          path:'/login',
          name:"login",
          component:require('@/components/demo/login.vue').default
        }
      ]
    },
  ]
})
