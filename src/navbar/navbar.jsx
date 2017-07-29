import React from 'react'
import PropTypes from 'prop-types'
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes'
import c from 'classnames'

import './navbar.css'

const Navbar = ({ logo, children, className, style }) => {
  return (
    <header className={c('cc-navbar', className)} style={style}>
      <div className="cc-navbar--container">
        <div className="cc-navbar--logo">
          {logo}
        </div>
        <nav className="cc-navbar--menu">
          {children}
        </nav>
      </div>
    </header>
  )
}

Navbar.propTypes = {
  logo: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  style: PropTypes.object,
}

Navbar.defaultProps = {
  logo: undefined,
  children: undefined,
  className: undefined,
  style: undefined,
}

export default onlyUpdateForPropTypes(Navbar)
