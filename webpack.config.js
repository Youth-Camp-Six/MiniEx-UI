const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const tsImportPluginFactory = require('ts-import-plugin');
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'miniex-ui.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|ts|tsx)$/,
      //   loader: 'ts-loader',
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.(js|ts|tsx)$/,
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      //   },
      // },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
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
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        // use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  // plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin('index.css')],
  plugins: [
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style/index.less',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
      }),
    ],
  },
  externals: ['react', 'react-dom', nodeExternals()],
};
