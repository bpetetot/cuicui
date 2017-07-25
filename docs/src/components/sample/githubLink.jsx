import React from 'react'
import PropTypes from 'prop-types'

import IconLabel from '../iconLabel'

const GithubLink = ({ link }) => {
  return (
    <IconLabel icon="github-alt">
      <a href={link} target="_NEW">
        sources on Github
      </a>
    </IconLabel>
  )
}

GithubLink.propTypes = {
  link: PropTypes.string.isRequired,
}

export default GithubLink
