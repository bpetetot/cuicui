/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const uglify = require('rollup-plugin-uglify')

const SRC_DIR = path.resolve(__dirname, '..', 'src')
const LIB_DIR = path.resolve(__dirname, '..', 'lib')
const pkg = JSON.parse(fs.readFileSync('./package.json'))

const getConfig = moduleName => ({
  entry: path.join(SRC_DIR, moduleName, 'index.js'),
  dest: path.join(LIB_DIR, moduleName, 'index.js'),
  moduleName,
  format: 'umd',
  external: [...Object.keys(pkg.peerDependencies)],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes',
  },
  plugins: [
    postcss({
      extensions: ['.css'],
      extract: path.join(LIB_DIR, moduleName, `${moduleName}.css`),
      plugins: [autoprefixer(), cssnano()],
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
})

const listModules = () => {
  return fs
    .readdirSync(SRC_DIR)
    .filter(file => fs.lstatSync(path.join(SRC_DIR, file)).isDirectory())
    .filter(filename => filename !== 'common')
}

const build = () => {
  listModules().forEach(async (module) => {
    console.log(`📦  Build module '${module}'`)
    const config = getConfig(module)
    const bundle = await rollup.rollup(config)
    await bundle.write(config)
  })
}

build()
