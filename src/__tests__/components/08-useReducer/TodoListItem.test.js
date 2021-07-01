import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from 'components/08-useReducer/TodoListItem'
import { demoTodo } from '__tests__/fixture/demoTodo'

// todo, index, handleDelete, handleToggle
describe('TodoListItem component', () => {

    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(
      <TodoListItem
        todo= { demoTodo[0] }
        index= {1}
        handleDelete={handleDelete}
        handleToggle= {handleToggle}
      />
    )

  test('should be render', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('should be call handleToggle', () => {
    wrapper.find('p').simulate('click')

    expect( handleToggle ).toHaveBeenCalledWith(1)
  })

  test('should be call handleDelete', () => {
    wrapper.find('button').simulate('click')

    expect( handleDelete ).toHaveBeenCalledWith(1)
  })

  test('should be call correct text', () => {
    const text = wrapper
      .find('p')
      .text()
      .trim()

    expect( text ).toBe(`${2}. ${demoTodo[0].desc}`)
  })

  test('should be have class complete if it TODO.done = true', () => {
    const newTodo = demoTodo[0]
    newTodo.done = true

    const wrapper = shallow(
      <TodoListItem
        todo= { newTodo }
      />
    )

    expect( wrapper.find('p').hasClass('complete') ).toBe( true )
    expect( wrapper.find('p').hasClass('complete') ).not.toBe( false )
  })
})