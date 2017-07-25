import React from 'react'

import { Tabs, Tab } from '../../../../../src/tabs'

const Basic = () => {
  return (
    <Tabs>
      <Tab tabKey="tab1" title="Tab 1">
        Content tab 1
      </Tab>
      <Tab tabKey="tab2" title="Tab 2">
        Content tab 2
      </Tab>
      <Tab tabKey="tab3" title="Tab 3">
        Content tab 3
      </Tab>
    </Tabs>
  )
}

export default Basic
