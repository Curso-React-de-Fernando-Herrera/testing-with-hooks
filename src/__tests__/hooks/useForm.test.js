const { renderHook, act } = require("@testing-library/react-hooks")
const { useForm } = require("hooks/useForm")

describe('useForm hook', () => {
  const initialValue = {
    name: 'Madeval',
    email: 'pepito@gmail.com'
  }

  test('should return initial value', () => {
    const { result } = renderHook( () => useForm() )
    expect( result.current[0]).toEqual({})
  })

  test('should return send value', () => {
    const { result } = renderHook( () => useForm(initialValue) )

    expect( result.current[0] ).toEqual(initialValue)
  })

  test('should change value', () => {
    const { result } = renderHook( () => useForm(initialValue) )
    const handleInputChange = result.current[1]
    
    act(
      () => handleInputChange({
        target: {
          name: 'name',
          value: 'Mateo'
        }
      })
    )

    expect( result.current[0] ).toEqual({
      name: 'Mateo',
      email: initialValue.email
    })
  })

  test('should return reset values', () => {
    const { result } = renderHook( () => useForm(initialValue) )
    const [, handleInputChange, reset] = result.current
    
    act(
      () => {
        handleInputChange({
          target: {
            name: 'name',
            value: 'Mateo'
          }
        })

        reset()
      }
    )

    expect( result.current[0] ).toEqual(initialValue)
  })
})