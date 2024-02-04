import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUsers() {

    const [data, setData] = useState ([])
    const [username, setUsername] = useState ()

    function handleInput(e) {
        setUsername(e.target.value)
    }

    function hanldeBtn() {
        setData ((prev) => [... prev, username])
        setUsername('')
    }

    function hanldeForm(e) {
        e.preventDefault()        
    }
    console.log(data)
    return(
        <div>
            <form onSubmit={hanldeForm}>
            <label htmlFor="">Username:  </label>
            <input onChange={handleInput} type="text" value={username} />
            <button onClick={hanldeBtn}>Cerca</button>
            </form>

            <ul>
                {data.map((item , index) => 
                    <li key={index}><GithubUser username={item}/></li>
                    )}
            </ul>
        </div>
    )
    
}