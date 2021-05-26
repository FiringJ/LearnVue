const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './5.Webpack详解/02.Webpack配置/src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "bundle.js",
    // publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // style-loader: 解析css样式
        // css-loader: 加载css文件
        // loader从右向左读
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时，使用url-loader将图片编码为base64格式
              // 当加载的图片大于limit时，使用file-loader加载图片
              limit: 20000,
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归FiringJ所有'),
    new HtmlWebpackPlugin({
      template: '5.Webpack详解/02.Webpack配置/index.html'
    })
  ]
}
