import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../codeBlock'

import './markdown.css'

const Markdown = ({ source, className }) => {
  return (
    <ReactMarkdown
      className={c('ccd-markdown', className)}
      source={source}
      renderers={{ CodeBlock }}
    />
  )
}

Markdown.propTypes = {
  source: PropTypes.string,
  className: PropTypes.string,
}

Markdown.defaultProps = {
  source: '',
  className: undefined,
}

export default Markdown
