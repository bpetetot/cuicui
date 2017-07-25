import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import './tab.css'

const Tab = ({ tabKey, title, className, children }) => {
  return (
    <div className={c('cc-tabs-tab', className)} aria-hidden={tabKey} aria-label={title}>
      {children}
    </div>
  )
}

Tab.propTypes = {
  tabKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
}

Tab.defaultProps = {
  children: '',
  className: undefined,
}

export default Tab
