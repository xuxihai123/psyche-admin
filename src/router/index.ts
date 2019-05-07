import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout/index.vue';

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
    path: '/tag/manager',
    name: 'tagsManager',
    component: () => import('@/views/tag/index.vue'),
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
    path: '/system/bash',
    name: 'systemBash',
    component: () => import('@/views/system/bash.vue'),
  },
  {
    path: '/system/explorer',
    name: 'systemExplorer',
    component: () => import('@/views/system/explorer.vue'),
  },
  {
    path: '/system/caidao',
    name: 'systemCaidao',
    component: () => import('@/views/system/caidao.vue'),
  },
  {
    path: '/setting/blog',
    name: 'settingBlog',
    component: () => import('@/views/setting/blog.vue'),
  },
  {
    path: '/setting/mail',
    name: 'settingMail',
    component: () => import('@/views/setting/mail.vue'),
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
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
