import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

import Tooltip from './Tooltip'

const DEFAULT_OPTIONS = {
  display: 'block',
}

// https://gist.github.com/FezVrasta/6533adf4358a6927b48f7478706a5f23
// https://pusher.com/sessions/meetup/react-vienna/popperjs-positioning-libraries-integration-in-react

const withTooltip = (Wrapped, options) => {
  const opts = { ...DEFAULT_OPTIONS, ...options }

  const TooltipWrapper = class extends Component {
    state = {
      offsets: {},
    }

    handleHover = () => {
      // TODO
    }

    updatePositions = (data) => {
      // console.log(data)
      this.setState(() => ({ offsets: data.offsets.popper }))
      return data
    }

    componentDidMount() {
      this.popperInstance = new Popper(this.targetRef, this.popperRef, {
        placement: 'right',
        modifiers: {
          applyStyle: { enabled: false },
          onCreate: this.updatePositions,
          updateState: {
            fn: this.updatePositions,
            enabled: true,
            order: 900,
          },
        },
      })
    }

    componentWillUnmount() {
      this.popperInstance.destroy()
    }

    render() {
      const { tooltip } = this.props
      const { offsets } = this.state
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
          <div
            ref={r => (this.targetRef = r)}
            style={{ width: '200px', height: '200px', backgroundColor: 'blue' }}
          >
            Target
          </div>
          <div
            ref={r => (this.popperRef = r)}
            style={{ width: '200px', height: '16px', backgroundColor: 'red', ...offsets }}
            className="tooltip"
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
