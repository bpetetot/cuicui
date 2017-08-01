import React, { Component } from 'react'
import classnames from 'classnames'
import Badge from '../../../../../src/badge'

class Action extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState(state => ({ clicked: !state.clicked }))
  }

  render() {
    return (
      <div className="ccd-badge-sample">
        <Badge
          className={classnames('ccd-badge-action', { 'ccd-badge-clicked': this.state.clicked })}
          onClick={this.handleClick}
        >
          You can click it
        </Badge>
      </div>
    )
  }
}

export default Action
