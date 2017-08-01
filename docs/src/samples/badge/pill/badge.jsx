import React from 'react'

import source from 'raw-loader!./badge.sample.jsx'
import BadgeSample from 'babel-loader!./badge.sample.jsx'
import 'style-loader!css-loader!./badge.sample.css'

import Sample from '../../../components/sample'

const SamplePage = () => {
  return (
    <div>
      <h2>Pill</h2>
      <p>Badge can be displayed like a pill, with `pill` property</p>
      <Sample
        code={source}
        githubLink="https://github.com/bpetetot/cuicui/blob/master/docs/src/samples/badge/pill/badge.sample.jsx"
      >
        <BadgeSample />
      </Sample>
    </div>
  )
}

export default SamplePage
