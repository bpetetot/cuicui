/* eslint-disable react/jsx-filename-extension */
/* eslint-env jest */
import snap from 'snap'

import Panel from './panel'

const snapshot = props => snap(Panel)({ ...props })

describe('panel', () => {
  it('should add title', snapshot({ title: 'hello world' }))
  it('should add children', snapshot({ children: 'hello world' }))
  it('should add custom className', snapshot({ className: 'custom' }))
  it('should add custom style', snapshot({ style: { color: 'red' } }))
})
