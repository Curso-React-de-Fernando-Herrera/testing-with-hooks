import { renderHook } from '@testing-library/react-hooks'
import { useCounter } from "hooks/useCounter"

describe('useCaunter hook', () => {
  test('should return initial value and three functions', () => {
    const { result } = renderHook( () => useCounter() )
    
    expect( result.current.counter ).toBe(10)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
    expect(typeof result.current.reset).toBe('function')
  })
})