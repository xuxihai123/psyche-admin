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
      name: '@csentence(5,8)',
      link: 'http://www.xuxihai.top',
      icon: 'http://www.xuxihai.top',
      order_id: 12,
    },
  });
};

const findNavs = (req, res) => {
  let {pageSize, currentPage} = req.query;
  const mockData = mockjs.mock({
    'list|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        id: '@integer',
        name: '@csentence(5,8)',
        link: 'http://www.xuxihai.top',
        icon: 'http://www.xuxihai.top',
        orderNo: 12,
      },
    ],
  });
  res.json({
    status: 'ok',
    data: {
      items: mockData.list,
      total: 55,
      currentPage: currentPage,
      pageSize: pageSize,
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
