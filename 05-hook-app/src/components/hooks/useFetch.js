import { useState , useEffect, useRef } from 'react';

export const useFetch = ( url ) => {

    const [state, setState] = useState({data:null, loading:true, error:null});

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);


    useEffect(() => {
        setState({data:null, loading:true, error:null});

        fetch( url )
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                if(isMounted.current){
                    setState({data, loading:false, error:null});
                }
            },4000);
        }
        )
        .catch(error => {
            setState({data:null, loading:false, error:error});
        }
        )
    }, [url]);

    return state;

}
