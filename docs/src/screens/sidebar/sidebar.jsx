/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PanelList from '../../../../src/panelList'
import LinkMatch from '../../components/linkMatch'
import './sidebar.css'

class Sidebar extends Component {
  state = {
    visiblePages: this.props.pages,
  }

  handleSearch = (e) => {
    const search = e.target.value
    this.setState(() => ({
      visiblePages: this.props.pages.filter(page => page.label.includes(search)),
    }))
  }

  render() {
    const { visiblePages } = this.state
    const hasPages = visiblePages.length > 0
    return (
      <div className={this.props.className}>
        <PanelList title="🐦  cuicui">
          <LinkMatch to="/" label="Getting started" />
        </PanelList>
        <PanelList title="Components">
          <input type="search" placeholder="Search..." onChange={this.handleSearch} />
          {visiblePages.map(({ name, label }) =>
            <LinkMatch key={name} to={`/${name}`} label={label} />,
          )}
          { !hasPages && <div className="ccd-sidebar-noresult">👻 Nothing...</div> }
        </PanelList>
      </div>
    )
  }
}

Sidebar.propTypes = {
  pages: PropTypes.array,
  className: PropTypes.string,
}

Sidebar.defaultProps = {
  pages: [],
  className: undefined,
}

export default Sidebar
