import mockjs from 'mockjs';

const createNav = (req, res) => {
  res.json({
    status: 'ok',
  });
};

const updateNav = (req, res) => {
  res.json({
    status: 'ok',
  });
};

const deleteNav = (req, res) => {
  res.json({
    status: 'ok',
  });
};

const getNav = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      id: '@integer',
      name: '导航标题',
      link: 'http://www.xuxihai.top',
      icon: 'http://www.xuxihai.top',
      order_id: 12,
    },
  });
};

const findNavs = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      items: [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          id: '1',
          name: '首页',
          link: '/',
          icon: 'http://www.xuxihai.top',
          orderNo: 1,
        },
        {
          id: '2',
          name: '标签',
          link: '/tags',
          icon: 'http://www.xuxihai.top',
          orderNo: 2,
        },
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          id: '3',
          name: '关于',
          link: '/about',
          icon: 'http://www.xuxihai.top',
          orderNo: 3,
        },
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          id: '4',
          name: '工具',
          link: '/tools',
          icon: 'http://www.xuxihai.top',
          orderNo: 4,
        },
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          id: '5',
          name: '搜索',
          link: '/search',
          icon: 'http://www.xuxihai.top',
          orderNo: 5,
        },
      ],
    },
  });
};

export default {
  createNav,
  updateNav,
  deleteNav,
  getNav,
  findNavs,
};
