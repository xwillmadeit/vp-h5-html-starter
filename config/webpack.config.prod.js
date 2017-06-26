const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const paths = require('./paths')

module.exports = {
  entry: {
    app: paths.appIndexJs,
    vendor: [paths.flexibleJs, 'jquery']
  },
  output: {
    path: paths.appBuild,
    filename: 'js/[name].[chunkhash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: paths.appNodeModules,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: paths.appNodeModules,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9'
                    ]
                  })
                ]
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: 'url-loader?limit=10000&name=images/[name].[hash:6].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
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
    }),
    new ExtractTextPlugin('css/style.[contenthash:6].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ],
  devtool: 'hidden-source-map'
}
