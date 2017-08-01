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
      <div>
        <Badge
          className={classnames('ccd-badge-action', { 'ccd-badge-clicked': this.state.clicked })}
          onClick={this.handleClick}
        >
          {!this.state.clicked ? 'You can click it' : '🚀 whaouuu ! 🚀'}
        </Badge>
      </div>
    )
  }
}

export default Action
