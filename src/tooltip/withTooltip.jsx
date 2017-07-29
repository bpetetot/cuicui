import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

import './Tooltip.css'

const DEFAULT_OPTIONS = {
  display: 'block',
}

// https://github.com/FezVrasta/popper.js/blob/master/packages/tooltip/src/index.js
// https://pusher.com/sessions/meetup/react-vienna/popperjs-positioning-libraries-integration-in-react

const withTooltip = (Wrapped, options) => {
  const opts = { ...DEFAULT_OPTIONS, ...options }

  const TooltipWrapper = class extends Component {
    state = {
      opened: false,
      offsets: {},
      styles: {},
    }

    handleHover = type => () => {
      if (type === 'enter') {
        this.setState(state => ({ ...state, opened: true }))
      } else {
        this.setState(state => ({ ...state, opened: false }))
      }
      this.popperInstance.update()
    }

    updatePositions = (data) => {
      this.setState(state => ({ ...state, offsets: data.offsets.popper, styles: data.styles }))
      return data
    }

    componentDidMount() {
      this.popperInstance = new Popper(this.targetRef, this.popperRef, {
        placement: 'right',
        modifiers: {
          applyStyle: { enabled: false },
          updateState: {
            fn: this.updatePositions,
            enabled: true,
            order: 900,
          },
        },
      })

      this.popperInstance.update()
    }

    componentWillUnmount() {
      this.popperInstance.destroy()
    }

    render() {
      const { tooltip, ...rest } = this.props
      const { opened, offsets, styles } = this.state
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
          }}
        >
          <div
            ref={r => (this.targetRef = r)}
            onMouseEnter={this.handleHover('enter')}
            onMouseLeave={this.handleHover('leave')}
            style={{ width: '300px' }}
          >
            <Wrapped {...rest} />
          </div>
          <div
            ref={r => (this.popperRef = r)}
            style={{
              display: opened ? 'block' : 'none',
              position: 'absolute',
              ...styles,
            }}
            className="cc-tooltip"
            role="tooltip"
          >
            <div ref={r => (this.arrowRef = r)} className="cc-tooltip-arrow" />
            <div className="tooltip-inner">
              {tooltip}
            </div>
          </div>
        </div>
      )
    }
  }

  TooltipWrapper.propTypes = {
    tooltip: PropTypes.node.isRequired,
  }

  return TooltipWrapper
}

export default withTooltip
