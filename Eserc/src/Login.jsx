import { useState } from "react";

export function Login() {
 const  [data, setData ] = useState({
    username: "",
    password: "",
    email: "",
  })

  function handleData(e) {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  function handleSubmit() {
    console.log(data)
    
  }

  return(
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleData} />
      <input type="password" name="password" onChange={handleData}/>
      <input type="email" name="email" onChange={handleData}/>
      <button >Login</button>
      <button>Reset</button>
    </form>
    <ul>
      <li> Username:{data.username}</li>
      <li>Password: {data.password}</li>
      <li>Email:{data.email}</li>
    </ul>
  </div>
)}
