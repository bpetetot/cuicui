import React from 'react'
import PropTypes from 'prop-types'

import { Tabs, Tab } from '../../../../src/tabs'
import CodeBlock from '../codeBlock'
import IconLabel from '../iconLabel'
import GithubLink from './githubLink'

import './sample.css'

const Sample = ({ children, code, css, githubLink }) => {
  return (
    <div>
      <Tabs actions={<GithubLink link={githubLink} />}>
        <Tab tabKey="preview" title={<IconLabel icon="eye">Preview</IconLabel>}>
          {children}
        </Tab>
        <Tab tabKey="code" title={<IconLabel icon="code">Javascript</IconLabel>}>
          <CodeBlock language="es6" literal={code} />
        </Tab>
        {
          css && (
            <Tab tabKey="css" title={<IconLabel icon="css3">CSS</IconLabel>}>
              <CodeBlock language="css" literal={css} />
            </Tab>
          )
        }
      </Tabs>
    </div>
  )
}

Sample.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.string.isRequired,
  css: PropTypes.string,
  githubLink: PropTypes.string.isRequired,
}


Sample.defaultProps = {
  css: undefined,
}

export default Sample
