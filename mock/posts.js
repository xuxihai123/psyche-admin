import mockjs from 'mockjs';

const createPost = (req, res) => {
  res.json({
    code: '0000',
  });
};

const updatePost = (req, res) => {
  res.json({
    code: '0000',
  });
};

const deletePost = (req, res) => {
  res.json({
    code: '5000',
    message: '这是错误信息！',
  });
};

const getPost = (req, res) => {
  res.json({
    code: '0000',
    data: mockjs.mock({
      id: '@integer',
      uuid: '@string("lower", 5)ee2-a758-48a1-880f-008bc76fdd3a',
      title: '@csentence(5,8)',
      slug: '@word(5, 10)',
      markdown: '@csentence(5,300)',
      html: null,
      image: null,
      featured: 0,
      page: 0,
      'status|1': ['draft', 'publish'],
      language: 'en_US',
      meta_title: '@word(5, 10)',
      meta_description: '@csentence(5,16)',
      author_id: 1,
      created_at: '@datetime',
      created_by: 1,
      updated_at: '@datetime',
      updated_by: 1,
      published_at: '@datetime',
      published_by: null,
    }),
  });
};

const findPosts = (req, res) => {
  let {pageSize, currentPage} = req.query;
  const mockData = mockjs.mock({
    'list|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        id: '@integer',
        uuid: '@string("lower", 5)ee2-a758-48a1-880f-008bc76fdd3a',
        title: '@csentence(5,8)',
        slug: '@word(5, 10)',
        markdown: '@csentence(5,100)',
        html: null,
        image: null,
        featured: 0,
        page: 0,
        'status|1': ['draft', 'publish'],
        language: 'en_US',
        meta_title: '@word(5, 10)',
        meta_description: '@csentence(5,16)',
        author_id: 1,
        created_at: '@datetime',
        created_by: 1,
        updated_at: '@datetime',
        updated_by: 1,
        published_at: '@datetime',
        published_by: null,
      },
    ],
  });
  res.json({
    code: '0000',
    data: {
      items: mockData.list,
      total: 55,
      currentPage: currentPage,
      pageSize: pageSize,
    },
  });
};

export default {
  createPost,
  updatePost,
  deletePost,
  getPost,
  findPosts,
};
