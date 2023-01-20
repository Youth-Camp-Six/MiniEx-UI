const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// env环境 argv运行参数
module.exports = function(env, argv) {
  return {
    /* 入口 */
    entry: './src/index.tsx',
    /* 最终输出 */
    output: {
      // 解析路径到build
      path: path.resolve(__dirname, 'build'),
      // 输出文件
      filename: 'main.js'
    },
    /* 模块 */
    module: {
      rules: [
        /* babel-loader转换tsx为js */
        {
          test: /\.(js|ts|tsx)$/,
          loader: 'babel-loader',
          options: {
            // 插件组进行转译
            // preset-typescript转译ts preset-env转译为ES5 preset-react转译react
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        },
        {
          test: /\.css$/,
          // css-loader加载css style-loader注入style
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        }
      ]
    },
    /* 本地开发服务器 */
    devServer: {
      static: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000
    },
    /* 开发者工具: 原始代码映射, 展示源码位置 */
    devtool: 'source-map',
    /* 插件 */
    plugins: [
      new HtmlWebpackPlugin({		//----2----在这里配置使用模块
        template: './public/index.html',    //需要放打包文件的html模板路径
        filename: 'index.html'   //打包完成后的这个模板叫什么名字
      })
    ],
    /* 解析导入的文件 */
    resolve: {
      // 支持的扩展名 "import .../index.tsx" 可写 "import .../index"
      extensions: [".ts", ".tsx", ".js", ".json"],
      // 解析目录 "import .../componentName/index.ts" 可替换为 "import .../componentName"
      mainFiles: ["index"]
    },
  }
}
