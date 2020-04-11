const path = require('path')

module.exports = {
  configureWebpack: {
    // here will go any webpack settings
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/scss/index.scss'),
      ]
    }
  },
  css: {
    // doc: https://cli.vuejs.org/config/#css-sourcemap
    sourceMap: true
  }
}
