import { useState } from "react"

  export function useCounter(initialValue = 0, increment =1) {
    const [counter, setCounter] = useState(initialValue)

    function CounterIncrement() {
        setCounter(counter + increment)
    }
    function CounterDecrement() {
        setCounter(counter - increment)
    }
    function CounterReset() {
        setCounter(initialValue)
    }
    return{
        counter: counter,
        onIncrement: CounterIncrement,
        onDecrement: CounterDecrement,
        onReset: CounterReset
    }

}