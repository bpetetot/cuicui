import React from 'react'

import Navbar from '../../src/navbar'
import Panel from '../../src/panel'
import PanelList from '../../src/panelList'

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
        <PanelList title="Components">
          <a href="#blockquote">Blockquote</a>
          <a href="#navbar">Navbar</a>
          <a href="#panel">Panel</a>
        </PanelList>
      </div>
      <div className="main">
        <h1>Getting started</h1>
      </div>
    </div>
  )
}

export default App
