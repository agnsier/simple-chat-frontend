import Vue from 'vue'
import Router from 'vue-router'
import Client from '../components/clientComponent'
import Host from '../components/hostComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Client
    },
    {
      path: '/host',
      component: Host
    },

  ]
})
