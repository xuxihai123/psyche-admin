import Post from './posts';
import Tag from './tags';
import User from './users';

export default {
  'POST /api/v1/login': User.login,
  'POST /api/v1/authtoken': User.login,

  // post
  'POST /api/v1/posts': Post.createPost,
  'PUT /api/v1/posts/:id': Post.updatePost,
  'DELETE /api/v1/posts/:id': Post.updatePost,
  'GET /api/v1/posts/:id': Post.getPost,
  'GET /api/v1/posts': Post.findPosts,

  // tag
  'POST /api/v1/tags': Tag.createTag,
  'PUT /api/v1/tags/:id': Tag.updateTag,
  'DELETE /api/v1/tags/:id': Tag.updateTag,
  'GET /api/v1/tags/:id': Tag.getTag,
  'GET /api/v1/tags': Tag.findTags,
};
