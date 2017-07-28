import React from 'react'

import source from 'raw-loader!./basic.sample.jsx'
import css from 'raw-loader!./basic.sample.css'
import BasicSample from 'babel-loader!./basic.sample.jsx'
import 'style-loader!css-loader!./basic.sample.css'

import Sample from '../../../components/sample'

const Basic = () => {
  return (
    <div>
      <h2>Simple Search field</h2>
      <p>A simple search field.</p>
      <Sample
        code={source}
        css={css}
        githubLink="https://github.com/bpetetot/cuicui/blob/master/docs/src/samples/search/basic/basic.sample.jsx"
      >
        <BasicSample />
      </Sample>
    </div>
  )
}

export default Basic
