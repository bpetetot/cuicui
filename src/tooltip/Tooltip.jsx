import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ content }) => {
  return (
    <div>
      {content}
    </div>
  )
}

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
}

export default Tooltip
