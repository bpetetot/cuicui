import React, { Component } from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import TabsHeader from './tabsHeader'
import TabsAction from './tabsActions'

import './tabs.css'

class Tabs extends Component {
  state = {
    selected: this.props.defaultKey,
  }

  handleSelectedTab = (key) => {
    this.setState(() => ({ selected: key }))
  }

  render() {
    const { children, actions, className, actionsClassName, headersClassName } = this.props

    const childArray = React.Children.toArray(children)
    const headers = childArray.map(({ props }) => ({ tabKey: props.tabKey, title: props.title }))
    const selected = this.state.selected || headers[0].tabKey
    const tab = childArray.find(t => t.props.tabKey === selected)

    return (
      <div className={c('cc-tabs', className)}>
        <TabsHeader
          headers={headers}
          selectedTab={selected}
          onSelectTab={this.handleSelectedTab}
          className={headersClassName}
        />
        <TabsAction actions={actions} className={actionsClassName} />
        <div className="cc-tabs-content">
          {tab}
        </div>
      </div>
    )
  }
}

Tabs.propTypes = {
  defaultKey: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  className: PropTypes.string,
  actionsClassName: PropTypes.string,
  headersClassName: PropTypes.string,
}

Tabs.defaultProps = {
  defaultKey: undefined,
  actions: undefined,
  className: undefined,
  actionsClassName: undefined,
  headersClassName: undefined,
}

export default Tabs
