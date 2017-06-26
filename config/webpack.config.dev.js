const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const paths = require('./paths')

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: paths.appBuild,
    filename: 'js/[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: paths.appNodeModules,
        use: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      favicon: paths.appFavicon,
      title: '网页标题'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'none',
    compress: true
  },
  performance: {
    hints: false
  }
}
