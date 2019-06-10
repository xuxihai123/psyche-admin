import mockjs from 'mockjs';

const login = (req, res) => {
  res.json({
    status: 'ok',
  });
};

const findAll = (req, res) => {
  let {pageSize, currentPage} = req.query;
  const mockData = mockjs.mock({
    'list|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        id: '@integer',
        uuid: '@string("lower", 5)ee2-a758-48a1-880f-008bc76fdd3a',
        name: '@string("lower",5,8)',
        role: 'Admin',
        avatar: 'logourl',
        githubId: 'xxxxx',
        githubUrl: 'https//github.com/xuxihai123',
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
  login,
  findAll,
};
