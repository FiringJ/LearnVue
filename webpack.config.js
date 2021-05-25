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
        use: ["style-loader", "css-loader"],
      },
    ],
  }
}
