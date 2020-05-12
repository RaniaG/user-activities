import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Dashboard from './components/dashboard.vue'
import teams from './components/teams.vue'
import users from './components/users.vue'
import VueResource from 'vue-resource'

import { routes } from './routes'
library.add(
  faUsers,
  faUserAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('app-dashboard', Dashboard)
Vue.component('app-teams', teams)
Vue.component('app-users', users)

Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
