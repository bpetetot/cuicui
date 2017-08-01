import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import './badge.css'

const Badge = ({ children, pill, className, style, ...rest }) => {
  const classes = c('cc-badge', 'cc-badge-default', { 'cc-badge-pill': pill }, className)
  return (
    <span className={classes} style={style} {...rest}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  pill: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

Badge.defaultProps = {
  className: undefined,
  pill: false,
  style: {},
}

export default Badge
