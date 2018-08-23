module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api/coulson': {
        target: 'https://xueyuan.xiaobao100.com',
        changeOrigin: true,
        ws: true
      },
      '/goods': {
        target: 'http://47.107.41.254:3000',
        // target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      }
    }, // 设置代理
    before: app => {}
  }

  // configureWebpack: {
  //   test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
  //   loader: 'file-loader'
  // }

}
