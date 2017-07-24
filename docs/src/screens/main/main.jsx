/* eslint-disable global-require */
import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Page from '../../components/page'

const Main = ({ pages, className }) => {
  return (
    <div className={className}>
      <Route
        exact
        path="/"
        render={props => <Page markdown={require('../../../../README.md')} {...props} />}
      />
      {pages.map(page =>
        (<Route
          key={page.name}
          path={`/${page.name}`}
          render={props => <Page {...page} {...props} />}
        />),
      )}
    </div>
  )
}

Main.propTypes = {
  pages: PropTypes.array,
  className: PropTypes.string,
}

Main.defaultProps = {
  pages: [],
  className: undefined,
}

export default Main
