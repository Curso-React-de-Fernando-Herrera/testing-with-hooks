const { renderHook } = require("@testing-library/react-hooks")
const { useFetch } = require("hooks/useFetch")

describe('useFetch hook', () => {
  test('should be rendered with initial values', () => {
    const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') )
    const { data, loading, error } = result.current

    expect({ data, loading, error }).toEqual({ data: null, loading: true, error: null })
  })

  test('should be render with values', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') )

    await waitForNextUpdate()

    const { data, loading, error } = result.current

    expect(data.length).toBe(1)
    expect(loading).toBe(false)
    expect(error).toBe(null)
  })

  test('should be render with error', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apiaa/users?page=2') )

    await waitForNextUpdate()

    const { data, loading, error } = result.current

    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe('No hay acceso')
  })
})