import {Scope} from 'vue-gscope';
/**
 * 替代vuex的方案，简单直接，哪有那么多状态要管理。。
 */

const scope: any = new Scope({
  app: {
    activePanel: false,
    test: 123,
  },
  user: null,
});

export default scope;
