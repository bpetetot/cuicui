import React from 'react'
import PropTypes from 'prop-types'
import PanelList from '../../../../src/panelList'

import './sidebar.css'

const Sidebar = ({ modules, className }) => {
  return (
    <div className={className}>
      <PanelList title="🐦  cuicui">
        <a href="#getting-started">Getting started</a>
      </PanelList>
      <PanelList title="Components">
        {modules.map(({ name, label }) =>
          (<a key={name} href={`#${name}`}>
            {label}
          </a>),
        )}
      </PanelList>
    </div>
  )
}

Sidebar.propTypes = {
  modules: PropTypes.array,
  className: PropTypes.string,
}

Sidebar.defaultProps = {
  modules: [],
  className: undefined,
}

export default Sidebar
