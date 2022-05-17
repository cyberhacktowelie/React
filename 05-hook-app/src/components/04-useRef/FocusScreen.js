import { useRef } from 'react';
import '../02-useEffectt/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick = () => {
        // document.querySelector('input').focus();
        // document.querySelector('input').select();
        inputRef.current.focus();
        
    }


    return (
        <>
            <h1>FocusScreen</h1>    
            <hr/>

            <input 
                ref={ inputRef }
                type="text"
                className="form-control"
                placeholder="Escribe algo"
                />

            <button 
                className="btn btn-outline-primary mt-2"
                onClick={ handleClick }>
                    Focus
            </button>
      </>

        )
}