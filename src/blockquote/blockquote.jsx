import React from 'react'
import PropTypes from 'prop-types'
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes'
import c from 'classnames'

import './blockquote.css'

const Blockquote = ({ text, className, style }) => {
  return (
    <blockquote className={c('cc-blockquote', className)} style={style}>
      <p>
        {text}
      </p>
    </blockquote>
  )
}

Blockquote.propTypes = {
  text: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

Blockquote.defaultProps = {
  text: '',
  className: undefined,
  style: undefined,
}

export default onlyUpdateForPropTypes(Blockquote)
