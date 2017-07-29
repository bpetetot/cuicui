import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import c from 'classnames'

import './input.css'

const Input = ({ className, ...rest }) => {
  return <input className={c('cc-input', className)} {...rest} />
}

Input.propTypes = {
  className: PropTypes.string,
}

Input.defaultProps = {
  className: undefined,
}

export default pure(Input)
