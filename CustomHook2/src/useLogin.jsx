import { useState } from "react";

export function useLogin() {
    const [data, setData] = useState(
{username:"", password:""}
    );
        
    const [utente, setUtente] = useState([])
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value,})
    }
    function submitData(e) {
        e.preventDefault()
        setUtente(data);
        console.log(data)        
    }
    return[data, utente, handleInputChange, submitData]
}