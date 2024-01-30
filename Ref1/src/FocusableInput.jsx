import { useEffect, useRef } from "react"

export function FocusableInput() {

    const inputRef = useRef(null);

    const firstRef= useRef(false)

    useEffect(()=>{
        // Secondo esercizio
        if(!firstRef.current){
            firstRef.current=true
            console.log("Componente montato per la prima volta")
        }

        inputRef.current?.focus()
    }, [])
    return(
        <input type="text" ref={inputRef}/>
    )
    
}