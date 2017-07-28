import React from 'react'

import PanelList from '../../../../../src/panelList'

const Basic = () => {
  return (
    <PanelList title="My panel title" className="sample-panel">
      <a href="#panelList">Item 1</a>
      <a href="#panelList">Item 2</a>
      <a href="#panelList">Item 3</a>
      <a href="#panelList">Item 4</a>
      <a href="#panelList">Item 5</a>
    </PanelList>
  )
}

export default Basic
