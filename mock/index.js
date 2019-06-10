import User from './users';
import Tag from './tags';
import Post from './posts';
import Navigation from './navigations';
import Setting from './setting';
import Category from './category';

export default {
  'GET /api/v1/users': User.findAll,
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

  // navigations
  'POST /api/v1/navigations': Navigation.createNav,
  'PUT /api/v1/navigations/:id': Navigation.updateNav,
  'DELETE /api/v1/navigations/:id': Navigation.deleteNav,
  'GET /api/v1/navigations/:id': Navigation.getNav,
  'GET /api/v1/navigations': Navigation.findNavs,
  // Setting
  'GET /api/v1/setting/base': Setting.getBaseSetting,
  'POST /api/v1/setting/base': Setting.updateBaseSetting,
  'GET /api/v1/setting/email': Setting.getEmailSetting,
  'POST /api/v1/setting/email': Setting.updateEmailSetting,

  // category
  'POST /api/v1/categorys': Category.create,
  'PUT /api/v1/categorys/:id': Category.update,
  'DELETE /api/v1/categorys/:id': Category.deleteItem,
  'GET /api/v1/categorys': Category.findAll,
};
