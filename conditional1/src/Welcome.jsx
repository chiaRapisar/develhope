import { Age } from "./Age";
import { Hello } from "./Hello";

export function Welcome({name, age}) {
    return (
        <div>
       <Hello/>
        {age>=18 && <Age age={age + ". " + "Sei maggiorenne"} />}
        {!!age && <Age age ={age + ". " +"Age esiste"} />}
        {age >=18 && age <=65 && <Age age={age + ". " + "Maggiore di 18, minore di 65"}/>}
        {age >=18 && age <=65 && name==="John" && <Age age={age + ". " +"John è maggiore di 18 e minore di 65"}/>}
        </div>
    )
    
}