const webpack = require("webpack");
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode:'development',
  // devtool: 'inline-source-map',//source-map
  devServer: {//简单的 web 服务器,修改内容自动更新
    port: 8000,
    hot: true,//增加热更新
    contentBase: './dist',//将 dist 目录下的文件，作为可访问文件
  },
  plugins: [
    new webpack.DefinePlugin({//定义变量
      'process.env.NODE_ENV' : JSON.stringify('development')
    })
  ]
})