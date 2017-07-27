import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import './panel.css'

const Panel = ({ title, children, className, style }) => {
  return (
    <div className={c('cc-panel', className)} style={style}>
      <div className="cc-panel--title">
        {title}
      </div>
      {children}
    </div>
  )
}

Panel.propTypes = {
  title: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  style: PropTypes.object,
}

Panel.defaultProps = {
  title: undefined,
  children: undefined,
  className: undefined,
  style: undefined,
}

export default Panel
