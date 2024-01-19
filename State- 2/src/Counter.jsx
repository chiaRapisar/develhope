import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

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


    return(
        <div>
            <CounterDisplay counterDis={counter} />
            <button onClick={CounterIncrement}>Increment</button>
            <button onClick={CounterDecrement}>Decrement</button>
            <button onClick={CounterReset}>Reset</button>
        </div>
    )
    
}