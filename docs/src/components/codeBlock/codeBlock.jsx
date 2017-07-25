import React from 'react'
import PropTypes from 'prop-types'

import hljs from 'highlight.js'

class CodeBlock extends React.Component {
  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    hljs.highlightBlock(this.code)
  }

  render() {
    return (
      <pre>
        <code ref={e => (this.code = e)} className={this.props.language}>
          {this.props.literal}
        </code>
      </pre>
    )
  }
}

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string,
}

CodeBlock.defaultProps = {
  literal: undefined,
  language: undefined,
}

export default CodeBlock
