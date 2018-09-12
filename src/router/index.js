import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '@/components/LoginView'
import ChatView from '@/components/ChatView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/',
      name: 'ChatView',
      component: ChatView
    }
  ]
})
