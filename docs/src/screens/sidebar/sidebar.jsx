import React from 'react'
import PropTypes from 'prop-types'
import PanelList from '../../../../src/panelList'
import LinkMatch from '../../components/linkMatch'
import './sidebar.css'

const Sidebar = ({ pages, className }) => {
  return (
    <div className={className}>
      <PanelList title="🐦  cuicui">
        <LinkMatch to="/" label="Getting started" />
      </PanelList>
      <PanelList title="Components">
        {pages.map(({ name, label }) => <LinkMatch key={name} to={`/${name}`} label={label} />)}
      </PanelList>
    </div>
  )
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
