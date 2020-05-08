module.exports = {
  // baseUrl 3.4版本已废弃  refs:https://cli.vuejs.org/zh/config/#baseurl
  // publicPath 等价于 webpack 的 output.publicPath
  publicPath: '/',
  devServer: {
    host:'localhost',
    disableHostCheck: true, //禁用主机检查
    port: "8080",
    proxy: {
      "/api": {
        // target: process.env.VUE_APP_API,
        target: "http://localhost:8084/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  lintOnSave: false,   //关闭语法检查
  // disable source map in production
  productionSourceMap: false,

};
