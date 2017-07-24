import React from 'react'
import PropTypes from 'prop-types'

import NavbarComp from '../../../../src/navbar'

const Navbar = ({ className }) => {
  return (
    <NavbarComp logo="🐦  cuicui" className={className}>
      <a href="https://github.com/bpetetot/cuicui" target="_new">source on github</a>
    </NavbarComp>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
}

Navbar.defaultProps = {
  className: undefined,
}

export default Navbar
