/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import Markdown from '../markdown'

const Page = ({ markdown, samples, className }) => {
  return (
    <div className={className}>
      <Markdown source={markdown} />
      {samples.map((Sample, i) => <Sample key={i} />)}
    </div>
  )
}

Page.propTypes = {
  markdown: PropTypes.string,
  samples: PropTypes.array,
  className: PropTypes.string,
}

Page.defaultProps = {
  markdown: undefined,
  samples: [],
  className: undefined,
}

export default Page
