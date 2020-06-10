const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./../example/index.html"),
  filename: "./index.html",
});

const prodConfig = {
  mode: "production",
  entry: path.join(__dirname, "./../src/create-form/index.js"),
  output: {
    path: path.join(__dirname, "./../example/dist"),
    filename: "bundle.js",
    libraryTarget: "umd", // 采用通用模块定义
    libraryExport: "default", // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  externals: {
    // 定义外部依赖，避免把react和react-dom打包进去
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },
};

module.exports = merge(prodConfig, baseConfig); // 将baseConfig和prodConfig合并为一个配置
