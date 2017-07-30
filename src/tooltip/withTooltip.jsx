import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

import Tooltip from './Tooltip'

const DEFAULT_OPTIONS = {
  display: 'block',
  placement: 'auto',
}

const withTooltip = (Wrapped, options) => {
  const opts = { ...DEFAULT_OPTIONS, ...options }

  const TooltipWrapper = class extends Component {
    state = {
      opened: false,
      popperStyle: {},
      arrowStyle: {},
      placement: '',
    }

    handleHover = type => () => {
      this.setState(() => ({ opened: type === 'enter' }))
      this.popperInstance.update()
    }

    updatePositions = (data) => {
      this.setState(() => ({
        popperStyle: data.styles,
        arrowStyle: data.offsets.arrow,
        placement: data.attributes['x-placement'],
      }))
      return data
    }

    componentDidMount() {
      this.popperInstance = new Popper(this.targetRef, this.tooltip.popperRef, {
        placement: opts.placement,
        modifiers: {
          preventOverflow: { boundariesElement: 'viewport' },
          applyStyle: { enabled: false },
          updateState: {
            fn: this.updatePositions,
            enabled: true,
            order: 900,
          },
          arrow: { element: this.tooltip.arrowRef },
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
          <Tooltip ref={t => (this.tooltip = t)} content={tooltip} {...this.state} />
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
