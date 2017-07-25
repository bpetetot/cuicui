import React from 'react'
import PropTypes from 'prop-types'

import { Tabs, Tab } from '../../../../src/tabs'
import CodeBlock from '../codeBlock'
import IconLabel from '../iconLabel'
import GithubLink from './githubLink'

import './sample.css'

const Sample = ({ children, code, githubLink }) => {
  return (
    <div>
      <Tabs actions={<GithubLink link={githubLink} />}>
        <Tab tabKey="preview" title={<IconLabel icon="eye">Preview</IconLabel>}>
          {children}
        </Tab>
        <Tab tabKey="code" title={<IconLabel icon="code">Code</IconLabel>}>
          <CodeBlock language="es6" literal={code} />
        </Tab>
      </Tabs>
    </div>
  )
}

Sample.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
}

export default Sample
