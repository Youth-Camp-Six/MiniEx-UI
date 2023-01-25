const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.export = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'miniex-ui.js',
    path: path.resolve(__dirname, 'packages'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'less'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
