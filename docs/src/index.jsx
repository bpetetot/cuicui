import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'
import './styles/global.css'

window.Perf = require('react-addons-perf') // eslint-disable-line global-require

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./app', () => { render(App) })
}
