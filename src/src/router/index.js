import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Showcase from '@/components/showcase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: Showcase
    }
  ]
})
