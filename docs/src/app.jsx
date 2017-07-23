import React from 'react'

import Blockquote from '../../src/blockquote'
import Panel from '../../src/panel'

import './app.css'

const App = () => {
  return (
    <div>
      <Blockquote text="Hello man" />
      <Panel title="My title">
        Yeah !
      </Panel>
    </div>
  )
}

export default App
