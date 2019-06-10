import Vue from 'vue';
/**
 * 替代vuex的方案，简单直接，哪有那么多状态要管理。。
 */
const state = {
  app: {
    activePanel: false,
    test: 123,
  },
  user: null,
};

const storeInstance = new Vue({data: state});
const scope = storeInstance.$data;

(window as any).rootScope = scope;
export default scope;
