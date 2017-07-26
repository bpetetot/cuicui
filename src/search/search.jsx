import React from 'react'
import PropTypes from 'prop-types'

import Input from '../common/input'
import SearchIcon from '../icons/search'
import './search.css'

const Search = ({ className, style, ...rest }) => {
  return (
    <div className="cc-search">
      <SearchIcon className="cc-search-icon" />
      <Input className={className} style={style} placeholder="Search" {...rest} type="search" />
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
