import mockjs from 'mockjs';

const createTag = (req, res) => {
  res.json({
    status: 'ok',
  });
};

const updateTag = (req, res) => {
  res.json({
    status: 'ok',
  });
};

const deleteTag = (req, res) => {
  res.json({
    status: 'ok',
  });
};

const getTag = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      id: '@integer',
      uuid: '@string("lower", 5)ee2-a758-48a1-880f-008bc76fdd3a',
      name: '@csentence(5,8)',
      slug: '@word(5, 10)',
      description: '@word(20, 50)',
      parent_id: null,
      meta_title: '@word(5, 10)',
      meta_description: '@csentence(5,16)',
      created_at: '@datetime',
      created_by: 1,
      updated_at: '@datetime',
      updated_by: 1,
    },
  });
};

const findTags = (req, res) => {
  let {pageSize, currentPage} = req.query;
  const mockData = mockjs.mock({
    'list|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        id: '@integer',
        uuid: '@string("lower", 5)ee2-a758-48a1-880f-008bc76fdd3a',
        name: '@csentence(5,8)',
        slug: '@word(5, 10)',
        description: '@csentence(5,16)',
        parent_id: null,
        meta_title: '@word(5, 10)',
        meta_description: '@csentence(5,16)',
        created_at: '@datetime',
        created_by: 1,
        updated_at: '@datetime',
        updated_by: 1,
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
  createTag,
  updateTag,
  deleteTag,
  getTag,
  findTags,
};
