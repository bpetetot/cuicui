import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import './navbar.css'

const Navbar = ({ title, children, className, style }) => {
  return (
    <header className={c('cc-navbar', className)} style={style}>
      <div className="cc-navbar--title">
        {title}
      </div>
      <nav className="cc-navbar--menu">
        {children}
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  style: PropTypes.object,
}

Navbar.defaultProps = {
  title: undefined,
  children: undefined,
  className: undefined,
  style: undefined,
}

export default Navbar
