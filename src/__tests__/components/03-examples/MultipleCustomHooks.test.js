import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from 'components/03-examples/MultipleCustomHooks'
import { useCounter } from 'hooks/useCounter'
import { useFetch } from 'hooks/useFetch'
jest.mock('hooks/useCounter')
jest.mock('hooks/useFetch')

describe('MultipleCustomHooks component', () => {

  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: () => {}
    })
  })

  

  test('should be render', () => {
    const wrapper = shallow(<MultipleCustomHooks />)
    
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })
    expect( wrapper ).toMatchSnapshot()
  })

  test('should be rendered with initial values of states and hooks', () => {
    const wrapper = shallow(<MultipleCustomHooks />)

    useFetch.mockReturnValue({
      date: [{
        author: 'Madeval',
        quote: 'Hola Mundo!!'
      }],
      loading: false,
      error: null
    })

    expect( wrapper.find('.alert').exists() ).toBe( false )
  })
})