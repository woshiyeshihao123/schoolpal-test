// // 作为配置文件，直接导出配置对象即可
// module.exports = {
//   devServer: {
//     // 设置主机地址
//     host: 'localhost',
//     // 设置默认端口
//     port: 8080,
//     // 设置代理
//     proxy: {
//       '/api/v1/**': {
//         // 目标 API 地址
//         target: 'https://cnodejs.org',
//         // 如果要代理 websockets
//         ws: true,
//         // 将主机标头的原点更改为目标URL
//         changeOrigin: false
//       }
//     }
//   }
// }
// vue.config.js
module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api/v1': {
        target: 'https://cnodejs.org',
        changeOrigin: true,
        ws: true
      }
    }, // 设置代理
    before: app => {}
  }
}
