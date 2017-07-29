import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

import './Tooltip.css'

const DEFAULT_OPTIONS = {
  display: 'block',
}

// https://gist.github.com/FezVrasta/6533adf4358a6927b48f7478706a5f23
// https://pusher.com/sessions/meetup/react-vienna/popperjs-positioning-libraries-integration-in-react

const withTooltip = (Wrapped, options) => {
  const opts = { ...DEFAULT_OPTIONS, ...options }

  const TooltipWrapper = class extends Component {
    state = {
      opened: false,
      offsets: {},
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
      this.setState(state => ({ ...state, offsets: data.offsets.popper }))
      return data
    }

    componentDidMount() {
      this.popperInstance = new Popper(this.targetRef, this.popperRef, {
        placement: 'top',
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
      const { opened, offsets } = this.state
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
          >
            <Wrapped {...rest} />
          </div>
          <div
            ref={r => (this.popperRef = r)}
            style={{
              display: opened ? 'block' : 'none',
              top: offsets.top,
              left: offsets.left,
              position: 'absolute',
            }}
            className="cc-tooltip"
            role="tooltip"
          >
            <div className="tooltip-arrow" />
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
