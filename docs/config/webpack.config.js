const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const BUILD_DOCS = path.join(__dirname, '..', 'build')
const SRC_DOCS = path.join(__dirname, '..', 'src')
const SRC_CUICUI = path.join(__dirname, '..', '..', 'src')

const getLoaders = (loaders) => {
  if (dev) {
    loaders.push('react-hot-loader/webpack')
  }
  loaders.push('babel-loader')
  return loaders
}

module.exports = {
  devtool: dev ? 'eval' : '',
  devServer: {
    stats: 'errors-only',
  },
  entry: {
    bundle: ['./src/index.jsx'],
  },
  output: {
    path: BUILD_DOCS,
    filename: 'bundle.js',
    publicPath: '/build',
  },
  resolve: {
    modules: [SRC_DOCS, SRC_CUICUI, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /^((?!\.sample).)*\.js[x]*$/,
        use: getLoaders([]),
        include: [SRC_DOCS, SRC_CUICUI],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|gif|jpg|html)$/,
        use: ['file-loader'],
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
}
