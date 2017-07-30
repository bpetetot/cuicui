import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Tooltip.css'

class Tooltip extends Component {
  render() {
    const { content, opened, placement, popperStyle, arrowStyle } = this.props
    const display = !opened ? { display: 'none' } : {}
    return (
      <div
        ref={r => (this.popperRef = r)}
        style={{ ...display, ...popperStyle }}
        data-placement={placement}
        className="cc-tooltip"
        role="tooltip"
      >
        <div
          ref={r => (this.arrowRef = r)}
          style={{ ...arrowStyle }}
          className="cc-tooltip-arrow"
        />
        <div className="cc-tooltip-inner">
          {content}
        </div>
      </div>
    )
  }
}

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  opened: PropTypes.bool,
  placement: PropTypes.string,
  popperStyle: PropTypes.object,
  arrowStyle: PropTypes.object,
}

Tooltip.defaultProps = {
  opened: false,
  placement: 'top',
  popperStyle: {},
  arrowStyle: {},
}

export default Tooltip
