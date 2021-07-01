import React from 'react'
import { TodoList } from 'components/08-useReducer/TodoList'
import { shallow } from 'enzyme'
import { demoTodo } from '__tests__/fixture/demoTodo'


describe('TodoList component', () => {

  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow(
    <TodoList
    todos={demoTodo}
    handleDelete={handleDelete}
    handleToggle={handleToggle}
    />
  )

  test('should be render', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('should show demoTodo.length TodoListItem component', () => {
    const todoListItemReturned = wrapper.find('TodoListItem')

    expect(todoListItemReturned.length).toBe( demoTodo.length)
    expect(
      todoListItemReturned
        .at(0)
        .prop('handleToggle')
    ).toEqual(
      expect.any(Function)
    )
  })
})