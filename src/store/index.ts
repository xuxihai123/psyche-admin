import Vue from 'vue';

const state = {
  app: {
    activePanel: false,
  },
};

const scope = new Vue({data: state});

export default scope;
