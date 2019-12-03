// vue.config.js
module.exports = {
  // 选项...
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true, // 在保存时校验格式

  //在浏览器中显示错误和警告
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },

  devServer: {
    host: 'localhost', 
    port: 8080,
    open: true, //配置自动启动浏览器
    //proxy:{'/api':{}},代理器中设置/api,项目中请求路径为/api的替换为target
    proxy: {
      '/api': {
        target: 'http://192.168.1.30:8085', //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        //ws: true, // proxy websockets
        //pathRewrite方法重写url
        pathRewrite: {
          '^/api': '/'
            //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
            //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        }
      }
    }
  }

}