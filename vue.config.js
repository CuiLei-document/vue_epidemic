module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/': {
        target: 'https://interface.sina.cn',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://apis.juhe.cn',
        changeOrigin: true,
        pathRewrite: { // pathRewrite 重写路径
          "^/api": ""
        }
      }
    }

  }
}
