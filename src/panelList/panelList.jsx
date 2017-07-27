/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'

import DefaultPanel from '../common/components/panel'
import './panelList.css'

const Panel = ({ title, children, className, style }) => {
  const childArray = React.Children.toArray(children)
  return (
    <DefaultPanel title={title} className={className} style={style}>
      <ul className="cc-panel-list--content">
        {childArray.map((child, i) => <li key={i}>{child}</li>)}
      </ul>
    </DefaultPanel>
  )
}

Panel.propTypes = {
  title: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  style: PropTypes.object,
}

Panel.defaultProps = {
  title: undefined,
  children: undefined,
  className: undefined,
  style: undefined,
}

export default Panel
