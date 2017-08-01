import React from 'react'

import source from 'raw-loader!./badge.sample.jsx'
import css from 'raw-loader!./badge.sample.css'
import BadgeSample from 'babel-loader!./badge.sample.jsx'
import 'style-loader!css-loader!./badge.sample.css'

import Sample from '../../../components/sample'

const SamplePage = () => {
  return (
    <div>
      <h2>Actions</h2>
      <p>You can use all available React callback events on badges</p>
      <Sample
        code={source}
        css={css}
        githubLink="https://github.com/bpetetot/cuicui/blob/master/docs/src/samples/badge/actions/badge.sample.jsx"
      >
        <BadgeSample />
      </Sample>
    </div>
  )
}

export default SamplePage
