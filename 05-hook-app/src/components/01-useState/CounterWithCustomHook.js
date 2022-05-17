import { useCounter } from '../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    // const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(20);
    // const [count3, setCount3] = useState(30);
    // const [count4, setCount4] = useState(40);

    const {count:counter, increment, decrement, reset} = useCounter(100);

    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            {/* <h2>Counter1 {count}</h2>
            <h2>Counter2 {count2}</h2>
            <h2>Counter3 {count3}</h2>
            <h2>Counter4 {count4}</h2> */}
            <hr/>

            <button onClick={()=>increment()} className="btn btn-primary">
                +1
            </button>
            <button onClick={ reset } className="btn btn-primary">
                Reset
            </button>
            <button onClick={()=>decrement()} className="btn btn-primary">
                -1
            </button>      
        </>
    )
}