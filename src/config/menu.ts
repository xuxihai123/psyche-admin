export default [
  {
    title: '首页',
    name: 'home',
    icon: 'fa fa-tachometer lg',
  },
  {
    title: '文章',
    name: 'posts',
    icon: 'el-icon-edit-outline',
    children: [
      {
        title: '添加文章',
        name: 'postsAdd',
      },
      {
        title: '管理文章',
        name: 'postsList',
      },
    ],
  },
  {
    title: '页面',
    name: 'pages',
    icon: 'el-icon-document-add',
    children: [
      {
        title: '添加页面',
        name: 'pagesAdd',
      },
      {
        title: '管理页面',
        name: 'pagesList',
      },
    ],
  },
  {
    title: '标签',
    name: 'tags',
    icon: 'fa fa-tags fa-lg',
  },
  {
    title: '系统',
    name: 'system',
    icon: 'el-icon-s-platform',
    children: [
      {
        title: '终端',
        name: 'systemBash',
      },
      {
        title: '信息',
        name: 'systemInfo',
      },
    ],
  },
  {
    title: '设置',
    name: 'setting',
    icon: 'fa fa-wrench fa-lg',
    children: [
      {
        title: '博客',
        name: 'settingBlog',
      },
      {
        title: '邮件',
        name: 'settingMail',
      },
    ],
  },
];
