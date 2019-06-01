import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import scope from './store/index';
import './registerServiceWorker';
import 'normalize.css/normalize.css';
import vClickOutside from 'v-click-outside';
import MainPanel from '@/layout/main/MainPanel.vue';
import dialogsvc from 'ele-dialogsvc';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import './styles/index.scss';
import './filters/index';

import UserSvc from './services/user';

Vue.config.productionTip = false;

Vue.prototype.$scope = scope;

Vue.component('main-panel', MainPanel);
Vue.use(vClickOutside);
Vue.use(mavonEditor);
Vue.use(dialogsvc);
Vue.use(Element, {
  size: 'small', // set element-ui default size
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
// UserSvc.session()
//   .then((user) => {
//     if (user) {
//       new Vue({
//         router,
//         store,
//         render: (h) => h(App),
//       }).$mount('#app');
//     } else {
//       throw Error('未认证!');
//     }
//   })
//   .catch((err) => {
//     window.location.href = 'http://localhost:3000/start';
//   });
