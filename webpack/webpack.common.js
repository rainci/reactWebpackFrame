const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '../src/index.js'),  // 入口文件
  output: {  // 出口文件(编译后)
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // babel-loader将根据.babelrc去处理文件
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/, loader: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      { test: /\.(eot|svg|ttf|woff|woff2|png)\w*/, use: 'file-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      filename: 'index.html'
    })
  ],
};