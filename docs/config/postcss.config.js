/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('postcss-import')({ /* ...options */ }),
    require('postcss-cssnext')({ warnForDuplicates: false }),
    require('cssnano')({ /* ...options */ }),
  ],
}
