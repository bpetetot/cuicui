/* eslint-disable react/jsx-filename-extension */
/* eslint-env jest */

import snap from 'snap'

import Blockquote from './blockquote'

const snapshot = props => snap(Blockquote)({ ...props })

describe('blockquote', () => {
  it('should add custom className', snapshot({ className: 'custom' }))
})
