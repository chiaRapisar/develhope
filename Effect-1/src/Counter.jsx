import { useEffect, useState } from "react"

export function Counter({start=0, increment= 1 }) {
    const [counter, setCounter]= useState(start);

    useEffect(()=>{
        console.log(`Current value of the counter: ${counter}`)
    }, [counter])

    function CounterIncrement() {
        setCounter(counter + increment)
    }
 
    return(
        <div>
           <h2>Counter: {counter}</h2>
            <button onClick={CounterIncrement}>Increment</button>
        </div>
    )
    
}