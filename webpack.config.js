const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: './css/style.css',
  // chunkFilename: '[id].css',
});

const NewTabHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: path.join(__dirname, '/build/index.html'),
  inject: 'body',
  chunks: ['main'],
  minify: {
    collapseWhitespace: true,
    removeComments: true,
  },
});


const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: path.join(__dirname, '/app/manifest.json'), to: path.join(__dirname, '/build/manifest.json'),
  },
]);

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, './build'),
    compress: true,
    hot: true,
    port: 9000,
  },
  node: {
    fs: 'empty',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: './app/main.jsx',
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: './postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],

  },
  plugins: [
    MiniCssExtractPluginConfig, NewTabHtmlWebpackPluginConfig,
    CopyWebpackPluginConfig,
  ],
};
