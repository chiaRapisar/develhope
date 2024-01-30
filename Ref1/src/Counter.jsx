import { useEffect, useRef, useState } from "react"

export function Counter({start=0, increment= 1 }) {
    const [counter, setCounter]= useState(start);

    function CounterIncrement() {
        setCounter(counter + increment)
    }
    function CounterDecrement() {
        setCounter(counter - increment)
    }
    function CounterReset() {
        setCounter(start)
    }

    let counterRef = useRef(null);

    useEffect(()=> {
        if (counter > start){
            counterRef.current = 'Up';
        } else if(counter<start){counterRef.current='Down';}
        if(counterRef.current !==null){
            console.log(`Incremento: ${counterRef.current}`)
        }
    }, [counter]);

    return(
        <div>
           <p>Counter: {counter}</p>
            <button onClick={CounterIncrement}>Increment</button>
            <button onClick={CounterDecrement}>Decrement</button>
            <button onClick={CounterReset}>Reset</button>
        </div>
    )
    
}