import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import './registerServiceWorker';
import 'normalize.css/normalize.css';
import vClickOutside from 'v-click-outside';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import './styles/index.scss';
import './filters/index';

Vue.config.productionTip = false;
Vue.use(vClickOutside);
Vue.use(mavonEditor);
Vue.use(Element, {
  size: 'small', // set element-ui default size
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
