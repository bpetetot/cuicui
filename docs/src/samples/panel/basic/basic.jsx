import React from 'react'

import source from 'raw-loader!./basic.sample.jsx'
import TabSample from 'babel-loader!./basic.sample.jsx'

import Sample from '../../../components/sample'

const Basic = () => {
  return (
    <div>
      <h2>Simple Panel</h2>
      <p>A simple panel.</p>
      <Sample code={source} githubLink="https://github.com/bpetetot/cuicui/blob/master/docs/src/samples/panel/basic/basic.sample.jsx">
        <TabSample />
      </Sample>
    </div>
  )
}

export default Basic
