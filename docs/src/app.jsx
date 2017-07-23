import React from 'react'

import Navbar from '../../src/navbar'
import Panel from '../../src/panel'

import './app.css'

const App = () => {
  return (
    <div className="app">
      <Navbar logo="🐦  cuicui" className="header">
        <a href="https://github.com/bpetetot/cuicui" target="_new">source on github</a>
      </Navbar>
      <div className="sidebar">
        <Panel title="🐦  cuicui">
          <div><a href="#getting-started">Getting started</a></div>
        </Panel>
        <Panel title="Components">
          <div><a href="#blockquote">Blockquote</a></div>
          <div><a href="#navbar">Navbar</a></div>
          <div><a href="#panel">Panel</a></div>
        </Panel>
      </div>
      <div className="main">
        <h1>Getting started</h1>
      </div>
    </div>
  )
}

export default App
