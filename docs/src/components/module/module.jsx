import React from 'react'
import PropTypes from 'prop-types'
import Markdown from '../markdown'

const Module = ({ label, markdown, samples, className }) => {
  return (
    <div className={className}>
      <h1>
        {label}
      </h1>
      <Markdown source={markdown} />
      {samples.map(Sample => <Sample key={Sample.name} />)}
    </div>
  )
}

Module.propTypes = {
  label: PropTypes.string,
  markdown: PropTypes.string,
  samples: PropTypes.array,
  className: PropTypes.string,
}

Module.defaultProps = {
  label: undefined,
  markdown: undefined,
  samples: [],
  className: undefined,
}

export default Module
