import React from 'react'
import PropTypes from 'prop-types'
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes'

import DefaultPanel from '../common/components/panel'
import './panel.css'

const Panel = ({ title, children, className, style }) => {
  return (
    <DefaultPanel title={title} className={className} style={style}>
      <p className="cc-panel--content">
        {children}
      </p>
    </DefaultPanel>
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

export default onlyUpdateForPropTypes(Panel)
