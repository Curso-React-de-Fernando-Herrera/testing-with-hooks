import React from 'react'
import { RealExampleRef } from "components/04-useRef/RealExampleRef"
import { shallow } from "enzyme"

describe('RealexampleRef component', () => {
  test('should be render', () => {
    const wrapper = shallow( <RealExampleRef />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show MulticustomHooks', () => {
    const wrapper = shallow( <RealExampleRef /> )

    const button = wrapper.find('button')
    button.simulate('click')

    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true )
  })
})