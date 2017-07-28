import React from 'react'

import source from 'raw-loader!./basic.sample.jsx'
import css from 'raw-loader!./basic.sample.css'
import BasicSample from 'babel-loader!./basic.sample.jsx'
import 'style-loader!css-loader!./basic.sample.css'

import Sample from '../../../components/sample'

const Basic = () => {
  return (
    <div>
      <h2>Simple Panel</h2>
      <p>A simple panel.</p>
      <Sample
        code={source}
        css={css}
        githubLink="https://github.com/bpetetot/cuicui/blob/master/docs/src/samples/panel/basic/basic.sample.jsx">
        <BasicSample />
      </Sample>
    </div>
  )
}

export default Basic
