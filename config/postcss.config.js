const postcssImport = require('postcss-import')
const postcssNext = require('postcss-cssnext')
const cssnano = require('cssnano')

/* eslint-disable global-require */
module.exports = {
  plugins: [postcssImport(), postcssNext({ warnForDuplicates: false }), cssnano()],
}
