/* eslint-disable global-require */
import React from 'react'

import modules from './modules'

import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Module from './components/module'
// import Markdown from './components/markdown'
// <Markdown className="main" source={require('../../README.md')} />
import './app.css'

const App = () => {
  return (
    <div className="app">
      <Navbar className="header" />
      <Sidebar className="sidebar" modules={modules} />
      {
        modules.map(module => <Module key={module.name} className="main" {...module} />)
      }
    </div>
  )
}

export default App
