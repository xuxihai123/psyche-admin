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
        name: 'ttsManager',
      },
      {
        title: '草稿列表',
        name: 'ttsManager',
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
  // {
  //   title: '标签',
  //   name: 'tagsManager',
  //   icon: 'fa fa-tags fa-lg',
  // },
  {
    title: '系统',
    name: 'system',
    icon: 'el-icon-s-platform',
    children: [
      {
        title: '在线终端',
        name: 'systemBash',
      },
      {
        title: '文件浏览',
        name: 'systemExplorer',
      },
      {
        title: '中国菜刀',
        name: 'systemCaidao',
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
      {
        title: '皮肤管理',
        name: 'ttsManager',
      },

      {
        title: '导航管理',
        name: 'settingNavigation',
      },
      {
        title: '链接管理',
        name: 'settingBlog',
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
