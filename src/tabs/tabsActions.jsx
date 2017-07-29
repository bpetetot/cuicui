import React from 'react'
import PropTypes from 'prop-types'
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes'
import c from 'classnames'

import './tabsActions.css'

const TabsActions = ({ actions, className }) => {
  if (!actions) {
    return null
  }
  return (
    <div className={c('cc-tabs-actions', className)}>
      {actions}
    </div>
  )
}

TabsActions.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  className: PropTypes.string,
}

TabsActions.defaultProps = {
  actions: undefined,
  className: undefined,
}

export default onlyUpdateForPropTypes(TabsActions)
