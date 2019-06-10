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
        title: '文章管理',
        name: 'postsList',
      },
      {
        title: '标签管理',
        name: 'tagsManager',
      },
      {
        title: '分类管理',
        name: 'CategoryManager',
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
    title: '设置',
    name: 'setting',
    icon: 'fa fa-wrench fa-lg',
    children: [
      {
        title: '基本设置',
        name: 'baseSetting',
      },
      // {
      //   title: '皮肤设置',
      //   name: 'skinsSetting',
      // },
      {
        title: '导航管理',
        name: 'settingNavigation',
      },
      {
        title: '用户管理',
        name: 'userManager',
      },
      {
        title: '邮件设置',
        name: 'settingMail',
      },
    ],
  },
];
