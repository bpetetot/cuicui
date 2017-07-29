import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes'
import c from 'classnames'

import './tabsHeader.css'

class TabsHeader extends Component {
  handleSelectedTab = tabKey => () => {
    this.props.onSelectTab(tabKey)
  }

  render() {
    const { headers, selectedTab, className } = this.props
    return (
      <ul className={c('cc-tabs-header', className)}>
        {headers.map(({ tabKey, title }) =>
          (<li
            key={tabKey}
            className={c({
              'cc-tabs--selected': selectedTab === tabKey,
            })}
            aria-expanded={selectedTab === tabKey}
          >
            <button type="button" onClick={this.handleSelectedTab(tabKey)}>
              {title}
            </button>
          </li>),
        )}
      </ul>
    )
  }
}

TabsHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  onSelectTab: PropTypes.func.isRequired,
  className: PropTypes.string,
}

TabsHeader.defaultProps = {
  className: undefined,
}

export default onlyUpdateForPropTypes(TabsHeader)
