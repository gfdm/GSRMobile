'use strict'

module.exports = {
  port: '3001',
  title: 'GITADORA SKILL RECORDER',
  vendor: [
    'axios',
    'vue',
    'vue-router'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
