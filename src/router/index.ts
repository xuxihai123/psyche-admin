import Vue from 'vue';
import Router from 'vue-router';
import {MainLayout, LoginLayout} from '@/layout/index';

Vue.use(Router);

const buildCrumb = (list: any) => {
  return {
    breadcrumb: list,
  };
};

const routes: any = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/post/new',
    name: 'postsAdd',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
      {
        name: '添加文章',
      },
    ]),
    component: () => import('@/views/post/add.vue'),
  },
  {
    path: '/post/edit',
    name: 'postsEdit',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
      {
        name: '编辑文章',
      },
    ]),
    component: () => import('@/views/post/edit.vue'),
  },
  {
    path: '/post/list',
    name: 'postsList',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
    ]),
    component: () => import('@/views/post/list.vue'),
  },
  {
    path: '/tag/manager',
    name: 'tagsManager',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
      {
        name: '标签管理',
      },
    ]),
    component: () => import('@/views/tag/index.vue'),
  },
  {
    path: '/category/manager',
    name: 'CategoryManager',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
      {
        name: '分类管理',
      },
    ]),
    component: () => import('@/views/category/index.vue'),
  },
  {
    path: '/page/new',
    name: 'pagesAdd',
    meta: buildCrumb([
      {
        name: '管理页面',
      },
      {
        name: '创建页面',
      },
    ]),
    component: () => import('@/views/page/add.vue'),
  },
  {
    path: '/page/edit',
    name: 'pagesEdit',
    meta: buildCrumb([
      {
        name: '管理页面',
      },
      {
        name: '编辑页面',
      },
    ]),
    component: () => import('@/views/page/edit.vue'),
  },
  {
    path: '/page/list',
    name: 'pagesList',
    meta: buildCrumb([
      {
        name: '管理页面',
      },
    ]),
    component: () => import('@/views/page/list.vue'),
  },

  {
    path: '/system/bash',
    name: 'systemBash',
    meta: buildCrumb([
      {
        name: '系统',
      },
      {
        name: '终端',
      },
    ]),
    component: () => import('@/views/system/bash.vue'),
  },
  {
    path: '/system/explorer',
    name: 'systemExplorer',
    meta: buildCrumb([
      {
        name: '系统',
      },
      {
        name: '文件浏览',
      },
    ]),
    component: () => import('@/views/system/explorer.vue'),
  },
  {
    path: '/system/caidao',
    name: 'systemCaidao',
    meta: buildCrumb([
      {
        name: '系统',
      },
      {
        name: '菜刀',
      },
    ]),
    component: () => import('@/views/system/caidao/index.vue'),
  },
  {
    path: '/setting/base',
    name: 'baseSetting',
    component: () => import('@/views/setting/base.vue'),
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
  {
    path: '/setting/navigation',
    name: 'settingNavigation',
    component: () => import('@/views/navigation/index.vue'),
  },
  {
    path: '/setting/user',
    name: 'userManager',
    component: () => import('@/views/user/index.vue'),
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: routes,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginLayout,
      children: [
        {
          path: '',
          redirect: '/login/step1',
        },
        {
          path: '/login/step1',
          name: 'loginStep1',
          component: () => import('@/views/login/step1.vue'),
        },
        {
          path: '/login/step2',
          name: 'loginStep2',
          component: () => import('@/views/login/step2.vue'),
        },
      ],
    },
  ],
});
