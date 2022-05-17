import { useState } from "react";
import './counter.css';

export const CounterApp = () => {

    // const [ {count1,count2 }, setCount] = useState({
    //     count1: 0,
    //     count2: 20
    // });

    const [ state, setState] = useState({
        count1: 0,
        count2: 20,
        count3: 30,
        count4: 40
    });

    const {count1,count2} = state;

    return (
        <>
            <h1>Counter App</h1>
            <h2>Counter1 {count1}</h2>
            <h2>Counter2 {count2}</h2>
            <hr/>

            <button className="btn btn-primary" onClick={ () => {
                // setCount({count1:count1 + 1 , count2:count2});
                setState({...state ,count1:count1 + 1});
            }}>
                +1
            </button>    
        </>
    )
}