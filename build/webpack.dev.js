'use strict'

const webpack = require('webpack')

const pkg = require('../package')
const base = require('./webpack.base')
const config = require('./config')

base.devtool = 'eval-source-map'
base.output.publicPath = '/assets/'
base.performance.hints = false

// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'APP_VERSION': JSON.stringify(pkg.version)
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: config.postcss,
      vue: {
        loaders: {
          css: 'style-loader!css-loader!postcss-loader'
        },
        postcss: config.postcss
      }
    }
  })
)

base.module.rules.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader'
})

module.exports = base
