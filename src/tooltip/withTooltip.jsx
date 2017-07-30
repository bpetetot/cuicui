import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from './Tooltip'

const DEFAULT_OPTIONS = {
  placement: 'auto',
}

const withTooltip = options => (Wrapped) => {
  const opts = { ...DEFAULT_OPTIONS, ...options }

  const TooltipWrapper = ({ tooltip, ...rest }) => {
    return (
      <Tooltip tooltip={tooltip} {...opts}>
        <Wrapped {...rest} />
      </Tooltip>
    )
  }

  TooltipWrapper.propTypes = {
    tooltip: PropTypes.string.isRequired,
  }

  return TooltipWrapper
}

export default withTooltip
