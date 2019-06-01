import Post from './posts';
import Tag from './tags';
import Navigation from './navigations';
import User from './users';
import System from './system';

export default {
  'POST /api/v1/login': User.login,
  'POST /api/v1/authtoken': User.login,

  // post
  // 'POST /api/v1/posts': Post.createPost,
  // 'PUT /api/v1/posts/:id': Post.updatePost,
  // 'DELETE /api/v1/posts/:id': Post.updatePost,
  // 'GET /api/v1/posts/:id': Post.getPost,
  // 'GET /api/v1/posts': Post.findPosts,

  // tag
  // 'POST /api/v1/tags': Tag.createTag,
  // 'PUT /api/v1/tags/:id': Tag.updateTag,
  // 'DELETE /api/v1/tags/:id': Tag.updateTag,
  // 'GET /api/v1/tags/:id': Tag.getTag,
  // 'GET /api/v1/tags': Tag.findTags,

  // navigations
  // 'POST /api/v1/navigations': Navigation.createNav,
  // 'PUT /api/v1/navigations/:id': Navigation.updateNav,
  // 'DELETE /api/v1/navigations/:id': Navigation.deleteNav,
  // 'GET /api/v1/navigations/:id': Navigation.getNav,
  // 'GET /api/v1/navigations': Navigation.findNavs,
  // system
  // 'POST /api/v1/caidao': System.caidao,
  // 'POST /api/v1/explorer': System.explorer,
};
