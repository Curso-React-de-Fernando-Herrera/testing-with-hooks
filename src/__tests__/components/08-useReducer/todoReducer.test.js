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

  test('should be delete task for ID', () => {
    const newTask = {
      id: 3,
      desc: 'Nueva task desde testing',
      done: true
    }

    todoReducer( demoTodo, {
      type: 'add',
      payload: newTask
    })

    const state = todoReducer( demoTodo, {
      type: 'delete',
      payload: 3
    })

    expect( state.length ).toBe( demoTodo.length )
    expect( state ).toEqual( demoTodo )
    expect(
      state.filter(({ id }) => id === 3)
    ).toEqual([])
  })

  test('should be toggle done value on one task for ID', () => {
    const state = todoReducer( demoTodo, {
      type: 'toggle',
      payload: 2
    })

    const [{ done }] = state.filter(({ id }) => id === 2)
    
    expect(done).toBe(true)
  })

})