// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  devServer: {
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/api/v1': {
        target: `http://127.0.0.1:3000`,
        changeOrigin: true,
      },
      '/shell': {
        target: 'ws://127.0.0.1:3000',
        ws: true,
      },
      '/upload': {
        target: 'ws://127.0.0.1:3000',
      },
    },
  },
  configureWebpack: {
    resolve: {symlinks: false},
  },
};
