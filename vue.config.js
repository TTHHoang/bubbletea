module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('vue-svg-loader')
  },
  publicPath: process.env.NODE_ENV === 'production'
  //change to path on website server, it's now on the localhost path
    ? '/websitedemo/bubbletea/'  // This is whatever your path from the root is
    //path when working on localdev
    : '/'
}