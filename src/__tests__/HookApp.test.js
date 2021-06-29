import React from 'react'
import { shallow } from 'enzyme'
import { HookApp } from 'HookApp'

describe('HookApp', () => {
  test('should be rendered', () => {
    const wraper = shallow(<HookApp />)
    
    expect(wraper).toMatchSnapshot()
  })
})