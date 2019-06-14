import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { register } from 'register-service-worker';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'jklogin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/jklogin.vue'),

    },
    {
      path: '/register',
      name: 'Register',
      // component:Register,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue'),
    },
    {
      path: '/cart',
      name: 'jkcart',
      component: () => import(/* webpackChunkName: "about" */ './views/jkcart.vue'),
    },
  ],
});
