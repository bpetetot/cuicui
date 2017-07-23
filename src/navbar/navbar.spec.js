/* eslint-disable react/jsx-filename-extension */
/* eslint-env jest */
import snap from 'snap'

import Navbar from './navbar'

const snapshot = props => snap(Navbar)({ ...props })

describe('navbar', () => {
  it('should add logo', snapshot({ logo: 'hello world' }))
  it('should add menu', snapshot({ children: 'hello world' }))
  it('should add custom className', snapshot({ className: 'custom' }))
  it('should add custom style', snapshot({ style: { color: 'red' } }))
})
