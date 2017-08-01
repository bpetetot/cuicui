/* eslint-disable react/jsx-filename-extension */
/* eslint-env jest */
import snap from 'snap'

import Badge from './badge'

const snapshot = props => snap(Badge)({ ...props })

describe('badge', () => {
  it('should add children', snapshot({ children: 'hello world' }))
  it('should add custom className', snapshot({ children: 'hello world', className: 'custom' }))
  it('should add custom style', snapshot({ children: 'hello world', style: { color: 'red' } }))
  it('should display like a pill', snapshot({ children: 'hello world', pill: true }))
  it('should take react callback', snapshot({ children: 'hello world', onClick: () => ({}) }))
})
