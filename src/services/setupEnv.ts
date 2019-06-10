import Vue from 'vue';
import UserSvc from '../services/user';
import store from '../store';

const isProd = process.env.NODE_ENV !== 'development';
Vue.config.productionTip = false;

const setupEnv = async () => {
  let userinfo;
  if (isProd) {
    userinfo = await UserSvc.session();
    if (userinfo && userinfo.role !== 'Admin') {
      throw Error('非管理员用户！');
    }
  } else {
    userinfo = {
      id: 1,
      name: 'xuxihai123',
      role: 'Admin',
      avatar: 'https://avatars1.githubusercontent.com/u/14149166?s=40&v=4',
      githubId: 'x12313',
      githubUrl: 'https://github.com/xuxihai123',
    };
  }
  store.user = userinfo;
};

export default setupEnv;
