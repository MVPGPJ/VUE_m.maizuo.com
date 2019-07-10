module.exports = {
  devServer: {
    // proxy: {
    //   '/gateway': {
    //     target: 'https://m.maizuo.com',
    //     changeOrigin: true
    //   }
    // },



    
    proxy: {
      '/json': {
        target: 'http://localhost:9999',
        changeOrigin: true,
        pathRewrite: {
          '^/json': ''
        }
      }
    }
  }
}