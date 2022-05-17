import { useState } from 'react';
import { PropTypes } from 'prop-types';
const CounterApp = ({value}) => {

    // const state = useState('Goku');
    // console.log(state);

    const [counter, setCounter] = useState(value);
    // console.log(counter, setCounter);

    //handleAdd
    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter(c => c + 1);
        // console.log('handleAdd');
    }

    const handleReset = () => {
        setCounter(() => value);
    }
    const handleSub = () => {
        setCounter(c => c - 1);
    }


    return (
        <>
            <h1> CounterApp </h1>
            <h2> {counter} </h2>

            {/* <button onClick={ (e) => { handleAdd() } } >+1</button> */}
            <button onClick={ handleAdd } >+1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSub } >-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;