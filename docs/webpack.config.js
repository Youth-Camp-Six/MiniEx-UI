const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MkdirPlugin = require('../plugins/mkdir-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './docs/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'less', 'css'],
    fallback: {
      path: require.resolve('path-browserify'),
      fs: false,
    },
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['file-loader?name=assets/[name].[ext]'],
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {},
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    static: {
      directory: path.resolve(__dirname, 'docs'),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/index.html',
    }),
    new CleanWebpackPlugin(),
    // 创建docs/views/dev文件夹, 用于开发组件时测试
    new MkdirPlugin(),
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    concatenateModules: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
};
