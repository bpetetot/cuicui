import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import Input from '../common/components/input'
import SearchIcon from '../common/icons/search'
import './search.css'

const Search = ({ className, style, ...rest }) => {
  return (
    <div className={c('cc-search', className)} style={style}>
      <SearchIcon className="cc-search-icon" />
      <Input placeholder="Search" {...rest} type="search" />
    </div>
  )
}

Search.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Search.defaultProps = {
  className: undefined,
  style: undefined,
}

export default Search
