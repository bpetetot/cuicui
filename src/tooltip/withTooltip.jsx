import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

import Tooltip from './Tooltip'

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
      popperStyle: {},
      arrowStyle: {},
      placement: 'bottom',
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
      this.setState(state => ({
        ...state,
        popperStyle: data.styles,
        arrowStyle: data.offsets.arrow,
        placement: data.attributes['x-placement'],
      }))
      return data
    }

    componentDidMount() {
      this.popperInstance = new Popper(this.targetRef, this.tooltip.popperRef, {
        placement: 'bottom',
        modifiers: {
          preventOverflow: { boundariesElement: 'viewport' },
          applyStyle: { enabled: false },
          updateState: {
            fn: this.updatePositions,
            enabled: true,
            order: 900,
          },
          arrow: {
            element: this.tooltip.arrowRef,
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
      return (
        <div
          ref={r => (this.targetRef = r)}
          onMouseEnter={this.handleHover('enter')}
          onMouseLeave={this.handleHover('leave')}
        >
          <Wrapped {...rest} />
          <Tooltip
            ref={t => (this.tooltip = t)}
            content={tooltip}
            {...this.state}
          />
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
