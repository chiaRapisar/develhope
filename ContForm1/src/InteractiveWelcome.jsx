import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
    const [name, setName] = useState('')

    function handleName(event) {
        const userName = event.target.value
        setName(userName)       
    }
    return(
        <div>
            <Welcome name={name}/>
            <input  value={name} onChange={handleName}/>
            
        </div>
    )
    
}
