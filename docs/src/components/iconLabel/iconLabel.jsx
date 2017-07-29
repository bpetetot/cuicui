import React from 'react'
import PropTypes from 'prop-types'
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes'

import './iconLabel.css'

const IconLabel = ({ icon, children }) => {
  return (
    <span className="ccd-icon-label">
      <i className={`fa fa-${icon}`} />
      <span>{children}</span>
    </span>
  )
}

IconLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default onlyUpdateForPropTypes(IconLabel)
