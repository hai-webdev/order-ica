const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除 dist 目录
const CopyPlugin = require("copy-webpack-plugin"); // 处理静态资源
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 处理模板页面
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包css文件
const pages = require("./pages"); // 加载多页配置
const webpack = require("webpack");
const jquery = require("jquery");
// 获取入口配置
function getEntry() {
  const entry = {};
  for (const key in pages) {
    entry[key] = pages[key].js;
  }
  return entry;
}

// 获取针对多页的 HtmlWebpackPlugin 配置
function getHtmlPlugins() {
  const plugins = [];
  for (const key in pages) {
    plugins.push(
      new HtmlWebpackPlugin({
        chunks: [key], // 使用的chunk
        template: path.resolve(__dirname, pages[key].html),
        filename: pages[key].out,
        minify: {
          removeRedundantAttributes: false,
        },
      })
    );
  }
  return plugins;
}

// webpack的基本配置
module.exports = {
  entry: getEntry(), // 获取入口配置
  output: {
    filename: "src/js/[name].js", // js 输出到 dist/js/xxx
    publicPath: "", // 公用的公共路径 /
    path: path.resolve(__dirname, "dist"), // 输出目录为 dist
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 别名 @ = src目录
      _: __dirname, // 别名 _ = 工程根目录
    },
  },
  stats: {
    colors: true, // 打包时使用不同的颜色区分信息
    modules: false, // 打包时不显示具体模块信息
    entrypoints: false, // 打包时不显示入口模块信息
    children: false, // 打包时不显示子模块信息
  },
  module: {
    rules: [
      {
        // 各种图片、字体文件，均交给 url-loader 处理
        test: /\.(png)|(gif)|(jpg)|(jpeg)|(svg)|(bmp)|(eot)|(woff)|(ttf)|(woff2)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024, //只要文件不超过 100*1024 字节，则使用base64编码，否则，交给file-loader进行处理
              name: "static/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
  
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("postcss-cssnext")(), require("cssnano")()],
            },
          },
          {
            loader: "less-loader",
          },
     
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("postcss-cssnext")(), require("cssnano")()],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        exclude: "/node_modules/",
        use: ["cache-loader", "thread-loader", "babel-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 应用 清除输出目录 插件
    new CopyPlugin({
      // 应用 复制文件 插件
      patterns: [
        {
          from: path.resolve(__dirname, "public"), // 将public目录中的所有文件
          to: "./public/", // 复制到 输出目录 的根目录
        },
      ],
    }),
    ...getHtmlPlugins(), // 应用所有页面模板，输出到指定的目录
    new MiniCssExtractPlugin({
      // 打包 css 代码 到文件中
      filename: "src/css/[name].css",
      chunkFilename: "src/css/common.css", // 针对公共样式的文件名
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};
