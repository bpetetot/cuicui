import React from 'react'

import source from 'raw-loader!./basic.sample.jsx'
import BasicSample from 'babel-loader!./basic.sample.jsx'

import Sample from '../../../components/sample'

const Basic = () => {
  return (
    <div>
      <h2>Simple Blockquote</h2>
      <p>A simple blockquote component to display quotes.</p>
      <Sample code={source} githubLink="https://github.com/bpetetot/cuicui/blob/master/docs/src/samples/blockquote/basic/basic.sample.jsx">
        <BasicSample />
      </Sample>
    </div>
  )
}

export default Basic
