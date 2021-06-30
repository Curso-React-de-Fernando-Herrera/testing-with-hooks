import { useState, useEffect, useRef } from 'react';


export const useFetch = ( url ) => {
    console.log(url)
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect( () => {

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if ( isMounted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }

            })
            .catch( () => {
                return {
                    data: null,
                    loading: false,
                    error: 'No hay acceso'
                }
            })

        return () => setState({ data: null, loading: true, error: null });

    },[url])

    return state;
}
