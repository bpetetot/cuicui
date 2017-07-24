import React from 'react'

import Navbar from '../../src/navbar'
import PanelList from '../../src/panelList'
import Blockquote from '../../src/blockquote'

import './app.css'

const App = () => {
  return (
    <div className="app">
      <Navbar logo="🐦  cuicui" className="header">
        <a href="https://github.com/bpetetot/cuicui" target="_new">source on github</a>
      </Navbar>
      <div className="sidebar">
        <PanelList title="🐦  cuicui">
          <a href="#getting-started">Getting started</a>
        </PanelList>
        <PanelList title="Components">
          <a href="#blockquote">Blockquote</a>
          <a href="#navbar">Navbar</a>
          <a href="#panel">Panel</a>
        </PanelList>
      </div>
      <div className="main">
        <h1>Getting started</h1>
        <Blockquote text="🐦 · My React UI components" />
      </div>
    </div>
  )
}

export default App
