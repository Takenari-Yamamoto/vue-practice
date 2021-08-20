import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home';
import Users from './pages/Users';
import UsersPosts from './pages/UsersPosts';
import UsersProfile from './pages/UsersProfile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    {
      path: '/users/:id',
      component: Users,
      props: true,
      children: [
        { path: "posts", component: UsersPosts },
        { path: "profile", component: UsersProfile },
      ]
    },
  ]
})
