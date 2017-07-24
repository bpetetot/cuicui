import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'

const LinkMatch = ({ to, label, ...rest }) => {
  return (
    <Route exact path={to}>
      {({ match }) => <Link to={to} {...rest} className={match ? 'active' : ''}>{label}</Link>}
    </Route>
  )
}

LinkMatch.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
}

LinkMatch.defaultProps = {
  to: undefined,
  label: undefined,
}

export default LinkMatch
