import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'

/**
 * icon by Artyom Khamitov
 * https://www.iconfinder.com/iconsets/glyphs
 * License: Creative Commons (Attribution 3.0 Unported)
 */
const FavoriteIcon = ({ className, width, height, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      aria-labelledby="title"
      {...rest}
    >
      <title id="title">Favorite</title>
      <path
        d="M22.2,4.1c2.7,2.7,2.4,6.9-0.4,9.5l-8.4,7.9c-0.8,0.7-2.1,0.7-2.9,0l-8.4-7.9c-2.7-2.6-3-6.8-0.4-9.5   C4.6,1.4,9.2,1.3,12,4C14.8,1.3,19.4,1.4,22.2,4.1z"
        id="favorite"
      />
    </svg>
  )
}

FavoriteIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

FavoriteIcon.defaultProps = {
  className: undefined,
  width: 24,
  height: 24,
}

export default pure(FavoriteIcon)
