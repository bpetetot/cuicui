import React from 'react'
import PropTypes from 'prop-types'
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes'
import c from 'classnames'

import './tab.css'

const Tab = ({ tabKey, title, className, children }) => { //eslint-disable-line
  return (
    <div className={c('cc-tabs-tab', className)} aria-hidden={tabKey}>
      {children}
    </div>
  )
}

Tab.propTypes = {
  tabKey: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
}

Tab.defaultProps = {
  children: '',
  className: undefined,
}

export default onlyUpdateForPropTypes(Tab)
