import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

const routes: any = [
  {
    path: '/post/new',
    name: 'postsAdd',
    component: () => import('@/views/post/add.vue'),
  },
  {
    path: '/post/edit',
    name: 'postsEdit',
    component: () => import('@/views/post/edit.vue'),
  },
  {
    path: '/post/list',
    name: 'postsList',
    component: () => import('@/views/post/list.vue'),
  },
  {
    path: '/page/new',
    name: 'pagesAdd',
    component: () => import('@/views/page/add.vue'),
  },
  {
    path: '/page/edit',
    name: 'pagesEdit',
    component: () => import('@/views/page/edit.vue'),
  },
  {
    path: '/page/list',
    name: 'pagesList',
    component: () => import('@/views/page/list.vue'),
  },
  {
    path: '/usr/bin/bash',
    name: 'systemBash',
    component: () => import('@/views/system/bash.vue'),
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: routes,
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Login.vue'),
    },
  ],
});
