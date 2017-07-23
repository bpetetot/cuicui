const fs = require('fs')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const cssnano = require('cssnano')
const uglify = require('rollup-plugin-uglify')

const pkg = JSON.parse(fs.readFileSync('./package.json'))

module.exports = {
  entry: pkg['jsnext:main'] || 'src/index.js',
  dest: pkg.main,
  moduleName: pkg.name,
  format: 'umd',
  external: [...Object.keys(pkg.peerDependencies)],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes',
  },
  plugins: [
    postcss({
      extensions: ['.css'],
      extract: true,
      plugins: [cssnano()],
    }),
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
}
