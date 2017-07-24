import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import pages from './pages'

import Navbar from './screens/navbar'
import Sidebar from './screens/sidebar'
import Main from './screens/main'

import './app.css'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar className="header" />
        <Sidebar className="sidebar" pages={pages} />
        <Main className="main" pages={pages} />
      </div>
    </Router>
  )
}

export default App
