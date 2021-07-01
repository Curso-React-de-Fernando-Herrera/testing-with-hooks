
import React from 'react'
import { TodoAdd } from "components/08-useReducer/TodoAdd"
import { shallow } from "enzyme"


describe('TodoAdd', () => {

  const handleAddTodo = jest.fn()

  const wrapper = shallow(
    <TodoAdd
      handleAddTodo={handleAddTodo}
    />
  )

  test('should be render', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('should not eject handleAddTodo with empty values', () => {
    const handleSubmit = wrapper.find('form').prop('onSubmit')

    handleSubmit({ preventDefault(){} })
    expect( handleAddTodo ).toHaveBeenCalledTimes(0)
  })

  test('should be eject handleAddTodo whit value', () => {

    const values = {
      value: 'hola',
      name: 'description'
    }

    wrapper
      .find('input')
      .simulate('change', { target: values })

      const handleSubmit = wrapper.find('form').prop('onSubmit')

      handleSubmit({ preventDefault(){} })

      const inputState = wrapper.find('input').text()
      
      expect( handleAddTodo ).toHaveBeenCalledTimes(1)
      expect( handleAddTodo ).toHaveBeenCalledWith({
        id: expect.any(Number),
        desc: values.value,
        done: false
      })

      expect( inputState ).toBe("")
  })

})
