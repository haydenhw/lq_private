import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'demo',
      component: () => import('@/views/Demo'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login'),
    },
    {
      path: '/controls',
      name: 'reactorControls',
      component: () => import('@/views/ReactorControls'),
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/ReactorIndex'),
    },
    {
      path: '/runs',
      name: 'runs',
      component: () => import('@/views/Runs'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/History'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/Test'),
    },
    {
      path: '*',
      name: 'reroute',
      component: () => import('@/views/Login'),
    },
  ],
});
