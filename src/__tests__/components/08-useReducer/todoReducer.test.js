const { todoReducer } = require("components/08-useReducer/todoReducer")
const { demoTodo } = require("__tests__/fixture/demoTodo")

describe('todoReducer component', () => {

  test('should be return initial state', () => {
    const state = todoReducer( demoTodo, {} )
    expect( state ).toEqual( demoTodo )
  })

  test('should be return state with add action', () => {
    const newTask = {
      id: 3,
      desc: 'Nueva task desde testing',
      done: true
    }

    const state = todoReducer( demoTodo, {
      type: 'add',
      payload: newTask
    })

    expect( state ).toEqual( [...demoTodo, newTask] )
    expect( state.length ).toBe( demoTodo.length + 1 )
  })

})