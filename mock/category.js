const tagList = [
  {
    id: '1',
    name: 'tag1',
    slug: 'tag1',
  },
  {
    id: '2',
    name: 'tag2',
    slug: 'tag2',
  },
  {
    id: '3',
    name: 'tag3',
    slug: 'tag3',
  },
];
const findAll = (req, res) => {
  res.json({
    code: '0000',
    data: {
      total: 55,
      items: [
        {
          id: '1',
          name: '操作系统',
          slug: 'os',
          description: 'operate system',
          tags: tagList,
        },
        {
          id: '2',
          name: '编译原理',
          slug: 'compiler',
          description: 'compiler',
          tags: tagList,
        },
        {
          id: '3',
          name: '计算机网络',
          slug: 'network',
          description: 'network',
          tags: tagList,
        },
        {
          id: '4',
          name: '设计模式',
          slug: 'design-mode',
          description: 'designMode',
          tags: tagList,
        },
        {
          id: '5',
          name: '数据结构和算法',
          slug: 'data-gaa',
          description: '数据结构和算法',
          tags: tagList,
        },
        {
          id: '6',
          name: 'Web前端',
          slug: 'webfe',
          description: 'webfe',
          tags: tagList,
        },
        {
          id: '7',
          name: 'Web后端',
          slug: 'webee',
          description: 'webee',
          tags: tagList,
        },
        {
          id: '8',
          name: '前端框架',
          slug: 'feframework',
          description: '前端框架',
          tags: tagList,
        },
        {
          id: '9',
          name: '后端框架',
          slug: 'eeframework',
          description: '后端框架',
          tags: tagList,
        },
        {
          id: '10',
          name: '高级语言',
          slug: 'python',
          description: 'python',
          tags: tagList,
        },
      ],
    },
  });
};

const create = (req, res) => {
  res.json({
    code: '0000',
  });
};

const update = (req, res) => {
  res.json({
    code: '0000',
  });
};

const deleteItem = (req, res) => {
  res.json({
    code: '0000',
  });
};

export default {
  findAll,
  create,
  update,
  deleteItem,
};
