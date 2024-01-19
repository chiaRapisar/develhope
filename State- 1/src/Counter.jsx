import { useState } from "react"

export function Counter({start=0}) {
    const [counter, setCounter]= useState(start)

    function CounterIncrement({increment= 1}) {
        setCounter(counter + increment)
    }

    return(
        <div>
            <h2>Counter: {counter} </h2>
            <button onClick={CounterIncrement}>Increment</button>
        </div>
    )
    
}