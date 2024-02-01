import { useEffect, useRef, useState } from "react";

export function MyForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });
  const mountedRef= useRef(false)
  const inputRef = useRef(null)
  useEffect(()=>{
    if(!mountedRef.current){
      mountedRef.current = true
      console.log('Mounting for the first time')
    } else{
      console.log('Mounting again for debug purposes')
    }
    inputRef.current?.focus()
  }, [])
  


  function InputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return { ...d, [name]: type === "checkbox" ? checked : value };

      // d[name]=  value //cambiare il nome
    });
  }

  function resetForm() {
    setData({
      username: "",
      password: "",
      session: false,
    });
  }

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    console.log("Login button pressed", data);
  }

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <h1>My Form</h1>
      <input ref={inputRef} name="username" value={data.username} onChange={InputChange} />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={InputChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={InputChange}
      />
      <button type="submit" disabled={!data.username || !data.password}>
        Login
      </button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
