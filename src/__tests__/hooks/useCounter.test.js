import { act, renderHook } from '@testing-library/react-hooks'
import { useCounter } from "hooks/useCounter"

describe('useCaunter hook', () => {
  test('should return initial value and three functions', () => {
    const { result } = renderHook( () => useCounter() )

    expect( result.current.counter ).toBe(10)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
    expect(typeof result.current.reset).toBe('function')
  })

  test('should be return typed number', () => {
    const counterValue = 100
    const { result } = renderHook( () => useCounter(counterValue) )

    expect( result.current.counter ).toBe(counterValue)
  })

  test('should be increment', () => {
    const initialCounter = 100
    const { result } = renderHook( () => useCounter(initialCounter) )
    const { increment } = result.current

    act(
      () => increment()
    )

    expect( result.current.counter ).toBe( initialCounter + 1 )
  })

  test('should be decrement', () => {
    const initialCounter = 100
    const { result } = renderHook( () => useCounter(initialCounter) )
    const { decrement } = result.current

    act(
      () => decrement()
    )

    expect( result.current.counter ).toBe( initialCounter - 1 )
  })

  test('should be reset', () => {
    const initialCounter = 100
    const { result } = renderHook( () => useCounter(initialCounter) )
    const { reset, increment } = result.current

    act(
      () => {
        increment()
        reset()
      }
    )

    expect( result.current.counter ).toBe( initialCounter )
  })
})