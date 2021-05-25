const path = require('path');

module.exports = {
  entry: './5.Webpack详解/02.Webpack配置/src/main.js',
  output: {
    path: path.resolve(__dirname, '5.Webpack详解/02.Webpack配置/dist'),
    filename: "bundle.js"
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
    ],
  }
}
