import { Welcome } from "./Welcome";

export function App() {
    return(
        <div>
            <h1>My App</h1>
            <Welcome name="Carmelo"/>
        </div>
    )
    
}

//Se non passiamo il nome all'interno del componente Welcome non spunta alcun nome, è come se non ci fosse.
//Posso passare un nome di default in Welcome.jsx ad esempio {name="Carmelo"}