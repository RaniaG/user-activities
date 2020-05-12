import teams from './components/teams.vue';
import users from './components/users.vue';
import dash from './components/dashboard.vue';

export const routes = [
    { path: '/', component: dash },
    { path: '/dashboard', component: dash },
    { path: '/users', component: users },
    { path: '/teams', component: teams },

]