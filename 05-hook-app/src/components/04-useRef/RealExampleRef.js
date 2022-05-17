import { useRef, useState } from 'react';
import '../02-useEffectt/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {


    const [ show , setShow ] = useState(false);

    return (
        <>
            <h1>RealExampleRef</h1>
            <hr/>

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-outline-primary mt-2"
                onClick={ () => setShow(!show) } >
                    { show ? 'Hide' : 'Show' }
                </button>

        </>
    )
       
        
    }
